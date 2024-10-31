<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Seat;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $seats = Seat::all();
        return response()->json($seats);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'seat_type_id' => 'required|exists:seat_types,id', 
            'seat_number' => 'required|string|max:10',         
            'room_id' => 'required|exists:rooms,id',           
            'seat_status' => 'required|boolean', 
        ]);
        Seat::create($request->all());
        return response()->json([
            'message' => 'Thêm mới thành công'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Seat::query()->findOrFail($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $seats = Seat::query()->findOrFail($id);
        $seats->update(request()->all());
        return response()->json($seats);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Seat::destroy($id);
        return response()->json([
            'message'=> 'Xóa thành công'
        ]);
    }
}
