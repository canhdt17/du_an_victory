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
        ->join('bases','bases.id','=','rooms.bases_id')
        ->join('seats','seats.room_id','=','rooms.id')
        ->whereNull('rooms.deleted_at')     // Kiểm tra trạng thái xóa mềm cho bảng bases
        ->select('rooms.*','base_name',DB::raw('COUNT(seats.room_id) as seat_count'))
        ->groupBy('rooms.id', 'bases.base_name') // Group by necessary columns
        ->orderByDesc('rooms.id')
        ->latest('rooms.id')
        ->paginate();
        return response()->json($rooms);

    }
    public function seatCountRoom()
    {
        $seatCount = DB::table('seats')->where('room_id', '=' , )->count();

        return response()->json($seatCount);

    }

    /**
     * Store a newly created resource in storage.
     */
    //--- thêm mới ----
    public function store(Request $request)
    {
        $data = $request->validate([
            'room_name' => 'required',
            'bases_id' => 'required',
        ]);


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
            'bases_id' => 'required',
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
