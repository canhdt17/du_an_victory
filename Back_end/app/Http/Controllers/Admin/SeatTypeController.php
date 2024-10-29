<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\SeatType;
use App\Http\Requests\StoreSeatTypeRequest;
use App\Http\Requests\UpdateSeatTypeRequest;

class SeatTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $seatTypes = SeatType::query()->latest('id')->paginate(5);
        return view('admin.seat_type.index', compact('seatTypes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.seat_type.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSeatTypeRequest $request)
    {
        $data = $request->validate([
            'seat_type_name' => 'required',
            'seat_price' => 'required',
        ]);
        SeatType::query()->create($data);
        return redirect()->route('seatType.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(SeatType $seatType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SeatType $seatType)
    {
        return view('admin.seat_type.edit' ,compact('seatType'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSeatTypeRequest $request, SeatType $seatType)
    {
        $data = $request->validate([
            'seat_type_name' => 'required',
            'seat_price' => 'required',

        ]);
        $seatType->update($data);
        return redirect()->route('seatType.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SeatType $seatType)
    {
        $seatType->delete();
        return redirect()->route('seatType.index') ;
        }
}
