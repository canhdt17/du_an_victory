<?php

namespace App\Http\Controllers\Api;

use App\Models\StyleVoucher;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StyleVoucherController extends Controller
{
    // Lấy danh sách tất cả style_voucher
    public function index()
    {
        $styleVouchers = StyleVoucher::all();
        return response()->json($styleVouchers);
    }

    // Thêm mới một style_voucher
    public function store(Request $request)
    {
        $request->validate([
            'name_stylevoucher' => 'required|string|max:255|unique:style_vouchers',
        ]);
    
        $styleVoucher = StyleVoucher::create([
            'name_stylevoucher' => $request->name_stylevoucher,
        ]);
    
        return response()->json(['message' => 'Style Voucher created successfully', 'data' => $styleVoucher], 201);
    }

    // Cập nhật thông tin style_voucher
    public function update(Request $request, $id)
    {
        $styleVoucher = StyleVoucher::find($id);

        if (!$styleVoucher) {
            return response()->json(['message' => 'Style Voucher not found'], 404);
        }

        $request->validate([
            'name_stylevoucher' => 'required|string|max:255|unique:style_vouchers,name_stylevoucher,' . $id,
        ]);

        $styleVoucher->update([
            'name_stylevoucher' => $request->name_stylevoucher,
        ]);

        return response()->json(['message' => 'Style Voucher updated successfully', 'data' => $styleVoucher]);
    }

    // Xóa style_voucher
    public function destroy($id)
{
    $styleVoucher = StyleVoucher::find($id);

    if (!$styleVoucher) {
        return response()->json(['message' => 'Style Voucher not found'], 404);
    }

    $styleVoucher->delete();

    return response()->json(['message' => 'Style Voucher deleted successfully'], 200);
}

}
