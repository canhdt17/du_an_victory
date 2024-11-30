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



class UserController extends Controller
{
    public function login(Request $request){
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password, [])) {
            return response()->json(
                [
                    'message' => "user not exist!"
                ]
            );
        }
        $token = $user->createToken('authToken')->plainTextToken;
        // return $user;
        return response()->json([
            'access_token' => $token,
            'type_token' => 'Baerer'

        ], 404);

    }
    public function register(Request $request)
    {

        $messages = [
            'fullname.required' => "loi fullname required!",
            'username.required' => "loi username required!",
            'email.email' => "Error email",
            'email.required' => "loi email required!",
            'password.required' => "password required!",
            'phone.required' => "loi phone required!",
            'gender.required' => "loi gender required!",
        ];
        $validate = Validator::make($request->all(), [
            'fullname' => 'required',
            'username' => 'required',
            'email' => 'email|required',
            'password' => 'required',
            'phone' => 'required',
            'gender' => 'required',
        ], $messages);

        if ($validate->fails()) {
            return response()->json(
                [
                    'message' => $validate->errors()
                ],
                404
            );
        }
        $user = User::create(
            [
                'fullname' => $request->fullname,
                'username' => $request->fullname,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'phone' => $request->phone,
                'gender' => $request->gender,

            ]

        );
        return response()->json([
            'message' => "Dang ki thanh cong"
        ], 200);
    }
    public function user(Request $request)
    {
        return $request->user();

    }
    public function logout()
    {

        // Revoke all tokens...
        // Auth()->user()->tokens()->delete();
        Auth()->user()->currentAccessToken()->delete();
        // Auth()->user()->tokens()->where('id', $tokenId)->delete();
        return response()->json([
            // 'data' => Auth()->user()->currentAccessToken()
            'message' => "đăng xuất thành công"
        ], 200);

    }


}
