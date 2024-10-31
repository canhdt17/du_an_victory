<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\SeatType;
use Illuminate\Http\Request;

class SeatTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $seatTypes = SeatType::all();
        // $data = SeatType::query()->latest('id')->paginate(5);
        return response()->json($seatTypes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'seat_type_name' => 'required',
            'seat_price' => 'required'
        ]);
        SeatType::create($request->all());
        return response()->json([
            'message' => 'Thêm mới thành công'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = SeatType::query()->findOrFail($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $seatTypes = SeatType::query()->findOrFail($id);
        $seatTypes->update(request()->all());
        return response()->json($seatTypes);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        SeatType::destroy($id);
        return response()->json([
            'message'=> 'Xóa thành công'
        ]);
    }
}
