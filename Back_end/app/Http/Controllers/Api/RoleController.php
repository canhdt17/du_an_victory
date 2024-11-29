<?php

namespace App\Http\Controllers\Api;

use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RoleController extends Controller
{
    // Lấy tất cả các role
    public function index()
    {
        $roles = Role::all();
        return response()->json($roles);
    }

    // Tạo mới một role
    public function store(Request $request)
    {
        $request->validate([
            'role' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        $role = Role::create([
            'role' => $request->role,
            'description' => $request->description,
        ]);

        return response()->json($role, 201);
    }

    public function show($id)
{
    // Tìm role theo ID
    $role = Role::find($id);

    if (!$role) {
        return response()->json(['message' => 'Role not found'], 404);
    }

    return response()->json($role, 200);
}


    // Cập nhật một role
    public function update(Request $request, $id)
{
    $role = Role::find($id);
    
    if (!$role) {
        return response()->json(['message' => 'Role not found'], 404);
    }

    $request->validate([
        'role' => 'required|string|max:255',
        'description' => 'nullable|string|max:255',
    ]);

    $role->update([
        'role' => $request->role,
        'description' => $request->description,
    ]);

    return response()->json($role, 200);
}


    // Xóa một role
    public function destroy($id)
{
    $role = Role::find($id);

    if (!$role) {
        return response()->json(['message' => 'Role not found'], 404);
    }

    $role->delete();

    return response()->json(['message' => 'Role deleted successfully'], 200);
}
}
