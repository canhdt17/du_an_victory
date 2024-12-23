<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Voucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class VoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Vouchers = DB::table('vouchers')
            ->join('point_vouchers', 'vouchers.id', '=', 'point_vouchers.voucher_id') // Sửa join
            ->whereNull('vouchers.deleted_at')
            ->where('expiry_date', '>=', now())
            ->where('status', '=', 'On')
            ->select('vouchers.*', 'point_vouchers.point_voucher')
            ->get();
    
        return response()->json($Vouchers);
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name_voucher' => 'required',
            'image' => 'required',
            'code' => 'required',
            'discount_amount' => 'required',
            'expiry_date' => 'required',
            'style_voucher_id' => 'required',
        ]);
        Voucher::create($request->all());
        return response()->json([
            'message' => 'Thêm mới thành công'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Voucher::query()->findOrFail($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $vouchers = Voucher::query()->findOrFail($id);
        $vouchers->update(request()->all());
        return response()->json($vouchers);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Voucher::destroy($id);
        return response()->json([
            'message'=> 'Xóa thành công'
        ]);
    }
    public function searchCodeVoucher($code)
    {

        $codeVoucher= DB::table('vouchers')

        ->whereNull('vouchers.deleted_at') 
        ->select('vouchers.*')
        ->where('expiry_date','>=',now())
        ->where('status','=','On')
        ->where('code','=',$code)
        ->get();

    // Kiểm tra nếu không có bản ghi nào
    if ($codeVoucher->isEmpty()) {
        return response()->json(['error' => 'Không tìm thấy mã giảm giá'], 404);
    }

        return response()->json($codeVoucher);

    }
}
