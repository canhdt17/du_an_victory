<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\Area;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $rooms = Room::with('area')->get();
    return view('admin.rooms.index', compact('rooms'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $areas = Area::all();
        return view('admin.rooms.create', compact('areas'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'room_name' => 'required|string|max:255',
            'total_seat' => 'required|integer',
            'area_id' => 'required|exists:areas,id',
        ]);

        Room::create($request->all());

        return redirect()->route('rooms.index')->with('success', 'Thêm phòng mới thành công');
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        //
        return view('admin.rooms.show', compact('room'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Room $room)
    {
        //
        $areas = Area::all();
        return view('admin.rooms.edit', compact('room', 'areas'));
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
        return redirect()->route('rooms.edit',$room)->with('success', 'Cập nhật thông tin phòng thành công');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        //

        $room->delete(); // xóa mềm

        return redirect()->route('rooms.index')->with('success', 'Xóa phòng thành công');
    }
}
