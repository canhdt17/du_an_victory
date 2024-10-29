<?php

namespace App\Http\Controllers\Api;

use Exception;
use App\Models\Type;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class TypeController extends Controller
{
    // Lấy tất cả các loại
    public function index()
    {
        try {
            $types = Type::all();
            return response()->json([
                'message' => 'Types retrieved successfully.',
                'types' => $types
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'error' => 'Error fetching types.',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    // Tạo mới một loại (không cần form trong API)
    public function create()
    {
        return response()->json([
            'message' => 'This endpoint is not needed for API.'
        ], 404);
    }

    // Lưu loại mới vào cơ sở dữ liệu
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
            ]);

            $type = Type::create([
                'name' => $request->input('name'),
            ]);

            return response()->json([
                'message' => 'Thêm thành công.',
                'type' => $type
            ], 201);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'error' => 'Error creating type.',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    // Hiển thị một loại cụ thể theo ID
    public function show($id)
    {
        try {
            $type = Type::findOrFail($id);
            return response()->json([
                'message' => 'Type retrieved successfully.',
                'type' => $type
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'error' => 'Type not found.',
                'message' => $e->getMessage()
            ], 404);
        }
    }

    // Hiển thị form chỉnh sửa (không cần thiết cho API)
    public function edit($id)
    {
        return response()->json([
            'message' => 'This endpoint is not needed for API.'
        ], 404);
    }

    // Cập nhật loại
    public function update(Request $request, $id)
    {
        try {
            $type = Type::findOrFail($id);

            $request->validate([
                'name' => 'required|string|max:255',
            ]);

            $type->update([
                'name' => $request->input('name'),
            ]);

            return response()->json([
                'message' => 'Update thành công.',
                'type' => $type
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'error' => 'Error updating type.',
                'message' => $e->getMessage()
            ], 500);
        }
    }

    // Xóa loại
    public function destroy($id)
    {
        try {
            $type = Type::findOrFail($id);
            $type->delete();

            return response()->json([
                'message' => 'Xóa thành công.'
            ], 200);
        } catch (Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'error' => 'Error deleting type.',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}