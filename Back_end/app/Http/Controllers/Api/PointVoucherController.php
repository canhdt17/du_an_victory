<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PointVoucher;
use Illuminate\Http\Request;

class PointVoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pointvouchers = PointVoucher::all();
        return response()->json($pointvouchers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'voucher_id' => 'required',
            'point_voucher' => 'required',
        ]);
        PointVoucher::create($request->all());
        return response()->json([
            'message' => 'Thêm mới thành công'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = PointVoucher::query()->findOrFail($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $pointvouchers = PointVoucher::query()->findOrFail($id);
        $pointvouchers->update(request()->all());
        return response()->json($pointvouchers);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        PointVoucher::destroy($id);
        return response()->json([
            'message'=> 'Xóa thành công'
        ]);
    }
}
