<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    ///--- hiển thị ----//
    public function index()
    {
        $rooms= DB::table('rooms')
        ->join('areas','areas.area_id','=','rooms.area_id')
        ->whereNull('rooms.deleted_at')     // Kiểm tra trạng thái xóa mềm cho bảng areas
        ->select('rooms.*','area_name')
        ->orderByDesc('rooms.id')
        ->orderByDesc('rooms.area_id')
        ->latest('rooms.id')
        ->paginate();
        return response()->json($rooms);

    }

    /**
     * Store a newly created resource in storage.
     */
    //--- thêm mới ----
    public function store(Request $request)
    {
        $data = $request->validate([
            'room_name' => 'required',
            'total_seat' => 'required',
            'area_id' => 'required',
        ]);

        // $data = Room::create([
        //     'room_name' => $request->room_name,
        //     'total_seat' => $request->total_seat,
        //     'area_id' => $request->area_id,
        // ]);
        $room=Room::query()->create($data);
        return response()->json($room);
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
            'room_name' => 'required',
            'area_id' => 'required',
            'total_seat' => 'required',
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
