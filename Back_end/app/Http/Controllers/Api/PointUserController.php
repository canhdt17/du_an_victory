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
        // $pointUser = PointUser::withTrashed()->with('user')->findOrFail($id);
        $pointUser = PointUser::where('user_id', $id)
        ->whereNull('deleted_at')
        ->orderBy('updated_at', 'desc')
        ->with('user')
        ->first();

        if (!$pointUser) {
            return response()->json(['message' => 'Khong co diem'], 404);
        }

        return response()->json($pointUser, 200);
    }


    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'user_id' => 'required',
            'point_user' => 'required',
        ]);


        $pointUser = PointUser::where('user_id', $validatedData['user_id'])->first();

        if ($pointUser) {

            $pointUser->point_user += $validatedData['point_user'];
            $pointUser->save();
        } else {

            $pointUser = PointUser::create([
                'user_id' => $validatedData['user_id'],
                'point_user' => $validatedData['point_user'],

            ]);
        }


        return response()->json($pointUser, 200);
    }



    public function update(Request $request, $id)
    {
        // $pointUser = PointUser::findOrFail($id);
        $pointUser = PointUser::where('user_id', $id)
        ->whereNull('deleted_at')
        ->first();
        if (!$pointUser) {
            return response()->json(['error' => 'Khong tim thay'], 404);
        }
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
