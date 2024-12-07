<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PointUser;
use Illuminate\Http\Request;

class PointUserController extends Controller
{
    //
    public function index()
    {
        $pointUsers = PointUser::with('user')->get();

    return response()->json($pointUsers, 200);
    }

    public function show($id)
    {
        $pointUser = PointUser::with('user')->findOrFail($id);

        if (!$pointUser) {
            return response()->json(['message' => 'Khong co diem'], 404);
        }

        return response()->json($pointUser, 200);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required',
            'point_user' => 'required',
        ]);
        $pointUser = PointUser::where('user_id', $validated['user_id'])->first();
        // cộng với số điểm hiện có của người dùng
        $pointUser->point_user += $validated['point_user'];
        $pointUser->save();
        // $pointUser = PointUser::create($validated);

        return response()->json($pointUser, 201);
    }


    public function update(Request $request, $id)
    {
        $pointUser = PointUser::findOrFail($id);

        $validated = $request->validate([
            'user_id' => 'required',
            'point_user' => 'required',
        ]);

        $pointUser->update($validated);

        return response()->json($pointUser, 200);
    }


    public function destroy($id)
    {
        $pointUser = PointUser::findOrFail($id);

        if (!$pointUser) {
            return response()->json(['message' => 'khong co diem'], 404);
        }

        $pointUser->delete();

        return response()->json(['message' => 'xoa thanh cong'], 200);
    }
}
