<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\Seat;
use App\Http\Requests\StoreSeatRequest;
use App\Http\Requests\UpdateSeatRequest;
use App\Models\SeatType;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Seat::with(['seat_type'])->latest('id')->paginate(5);
        return view('admin.seat.index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $seatType = SeatType::pluck('seat_type_name', 'id')->all();
        return view('admin.seat.create',compact('seatType'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSeatRequest $request)
    {
        try {
            $data = $request->validate([
                'seat_type_id' => 'exists:seat_types,id', // Kiểm tra seat_type_id có tồn tại trong seat_types
                'seat_number' => 'required',
                'room_id' => 'required',
                'seat_status' => 'required',
            ]);
        
            Seat::query()->create($data);
            return redirect()->route('seat.index');
        } catch (\Exception $e) {
            dd($e->getMessage()); // In ra thông báo lỗi
        }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Seat $seat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seat $seat)
    {
        $seatType = SeatType::pluck('seat_type_name', 'id')->all();
        return view('admin.seat.edit' ,compact('seat','seatType'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSeatRequest $request, Seat $seat)
    {
        try {
            $data = $request->validate([
                'seat_type_id' => 'exists:seat_types,id', // Kiểm tra seat_type_id có tồn tại trong seat_types
                'seat_number' => 'required',
                'room_id' => 'required',
                'seat_status' => 'required',
            ]);
        
            $seat->update($data);
            return redirect()->route('seat.index');
        } catch (\Exception $e) {
            dd($e->getMessage()); // In ra thông báo lỗi
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seat $seat)
    {
        $seat->delete();
        return redirect()->route('seat.index') ;
    }
}
