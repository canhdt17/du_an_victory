<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Models\Category;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    // Return a list of categories
    public function index()
    {
        try {
            $categories = Category::all();
            return response()->json(['categories' => $categories], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'không có dữ liệu categories.'], 500);
        }
    }

    // Store a newly created category in the database
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
            ]);

            $category = Category::create([
                'name' => $request->input('name'),
            ]);

            return response()->json(['message' => 'thêm danh mục thành công.', 'category' => $category], 201);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error creating category.'], 500);
        }
    }

    // Display the specified category
    public function show($id)
    {
        try {
            $category = Category::findOrFail($id);
            return response()->json(['category' => $category], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Category not found.'], 404);
        }
    }

    // Update the specified category in the database
    public function update(Request $request, $id)
    {
        try {
            
            // Try to find the category by ID or throw a ModelNotFoundException
            $category = Category::find($id);
    
            // Validate the input data
            $data = $request->validate([
                'name' => 'required|unique:categories,name,' . $category->id . '|max:255',
                
            ]);
    
            // Update the category
            $category->update($data);
    
           
            return response()->json([
                'message' => 'Category updated successfully.',
                'category' => $category
            ], 200);
    
        } catch (ModelNotFoundException $e) {
            // Category not found, return 404 error response
            return response()->json([
                'error' => 'Category not found.'
            ], 404);
    
        } catch (ValidationException $e) {
            // Validation failed, return validation error messages
            return response()->json([
                'error' => 'Validation failed.',
                'messages' => $e->errors(),
            ], 422);
    
        } catch (Exception $e) {
            // Log any other exceptions and return a generic error response
            Log::error($e->getMessage());
    
            return response()->json([
                'error' => 'Error updating category.',
                'details' => $e->getMessage() // You can remove this in production for security
            ], 500);
        }
    }

    // Remove the specified category from the database
    public function destroy($id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->delete();

            return response()->json(['message' => 'Xóa thành công.'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error deleting category.'], 500);
        }
    }
}