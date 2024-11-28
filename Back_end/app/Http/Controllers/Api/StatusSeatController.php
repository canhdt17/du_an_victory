<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\StatusSeat;
use Illuminate\Http\Request;

class StatusSeatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statusseats = StatusSeat::all();
        return response()->json($statusseats);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'showtime_id' => 'required|exists:showtimes,id',
            'seat_id' => 'required|exists:seats,id', 
            'status' => 'required|in:Ghế trống,Đã đặt,Đang chọn', 
        ]);
        StatusSeat::create($request->all());
        return response()->json([
            'message' => 'Thêm mới thành công'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = StatusSeat::query()->findOrFail($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $statusseats = StatusSeat::query()->findOrFail($id);
        $statusseats->update(request()->all());
        return response()->json($statusseats);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        StatusSeat::destroy($id);
        return response()->json([
            'message'=> 'Xóa thành công'
        ]);
    }
}
