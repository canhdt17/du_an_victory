<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    ///--- hiển thị ----//
    public function index()
    {
        //
        $rooms = Room::all();
        return response()->json($rooms, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    //--- thêm mới ----
    public function store(Request $request)
    {
        $request->validate([
            'room_name' => 'required|string|max:255',
            'total_seat' => 'required|integer',
            'area_id' => 'required|exists:areas,id',
        ]);

        $room = Room::create([
            'room_name' => $request->room_name,
            'total_seat' => $request->total_seat,
            'area_id' => $request->area_id,
        ]);

        return response()->json($room, 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        //chi tiết
        return response()->json($room);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Room $room)
    {
        //
        $request->validate([
            'room_name' => 'required|string|max:255',
            'total_seat' => 'required|integer',
            'area_id' => 'required|exists:areas,area_id',
        ]);


        $room->update($request->all());

        return response()->json(['message' => 'Cập nhật thông tin phòng thành công', 'room' => $room],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        //

        $room->delete(); // xóa mềm

        return response()->json(['message' => 'Xóa phòng thành công'],200);
    }
}
