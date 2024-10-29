<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Voucher;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vouchers = Voucher::all();
        return response()->json($vouchers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required',
            'discount_amount' => 'required',
            'expiry_date' => 'required',
            'is_active' => 'required',
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
}
