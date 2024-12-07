<?php

namespace App\Http\Controllers;

use App\Models\ArchiveUser;
use Illuminate\Http\Request;

class ArchiveUserController extends Controller
{

    //  thêm 
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id', // Kiểm tra user_id tồn tại trong bảng users
            'voucher_id' => 'required|exists:vouchers,id', // Kiểm tra voucher_id tồn tại trong bảng vouchers
            'status' => 'required|boolean', // Giá trị status phải là boolean
        ]);

        $archiveUser = ArchiveUser::create([
            'user_id' => $request->user_id,
            'voucher_id' => $request->voucher_id,
            'status' => $request->status,
        ]);

        return response()->json($archiveUser, 201);
    }


    // danh sách tất cả 
    public function index()
    {
        $archiveUsers = ArchiveUser::with(['user', 'voucher'])->get();
        return response()->json($archiveUsers, 200);
    }


    // cập nhập 
    public function update(Request $request, $id)
    {
        // Xác thực các trường thông tin
        $request->validate([
            'user_id' => 'required|exists:users,id', // Kiểm tra user_id tồn tại trong bảng users
            'voucher_id' => 'required|exists:vouchers,id', // Kiểm tra voucher_id tồn tại trong bảng vouchers
            'status' => 'required|boolean', // Giá trị status phải là boolean
        ]);
    
        // Tìm ArchiveUser theo ID
        $archiveUser = ArchiveUser::find($id);
    
        // Kiểm tra nếu không tồn tại
        if (!$archiveUser) {
            return response()->json(['message' => 'ArchiveUser not found'], 404);
        }
    
        // Cập nhật thông tin
        $archiveUser->update([
            'user_id' => $request->user_id,
            'voucher_id' => $request->voucher_id,
            'status' => $request->status,
        ]);
    
        // Trả về thông tin đã cập nhật
        return response()->json($archiveUser, 200);
    }

    // Hiển thị chi tiết một bản ghi
    public function show($id)
    {
        // Tìm ArchiveUser theo ID
        $archiveUser = ArchiveUser::with(['user', 'voucher'])->find($id);

        // Kiểm tra nếu không tồn tại
        if (!$archiveUser) {
            return response()->json(['message' => 'ArchiveUser not found'], 404);
        }

        // Trả về dữ liệu của bản ghi
        return response()->json($archiveUser, 200);
    }


    // xóa
    public function destroy($id)
    {
        $archiveUser = ArchiveUser::find($id);

        if (!$archiveUser) {
            return response()->json(['message' => 'ArchiveUser not found'], 404);
        }

        $archiveUser->delete();

        return response()->json(['message' => 'ArchiveUser deleted successfully'], 200);
    }

}
