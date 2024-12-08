<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;



class AdminUserControler extends Controller
{
  
    public function index()
    {
        $users = User::with('role')->get(); // Lấy user cùng với thông tin role
        return response()->json([
            'message' => "Lấy thông tin user thành công ",
            'users' => $users
        ]);
    }

    public function updateRole(Request $request, $id): JsonResponse
    {
        try {
            // Validate the request data
            $validatedData = $request->validate([
                'role_id' => 'required|exists:roles,role_id', // Ensure role_id exists in roles table
            ]);

            // Find the user
            $user = User::findOrFail($id);

            // Update the user's role
            $user->update(['role_id' => $validatedData['role_id']]);

            // Return a success response
            return response()->json([
                'success' => true,
                'message' => 'User role updated successfully',
                'user' => $user->load('role'), // Load the updated role relationship
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Handle case where user is not found
            return response()->json([
                'success' => false,
                'message' => 'User not found.',
            ], 404);
        } catch (Exception $e) {
            // Handle other exceptions
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while updating the user role.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

}
