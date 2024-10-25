<?php

namespace App\Http\Controllers;

use App\Models\showtime;
use Illuminate\Http\Request;

class ShowtimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showtimes = showtime::query()->latest('id')->paginate();
        return view('admin.showtime.index', compact('showtimes'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.showtime.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'movie_id' => 'required',
            'room_id' => 'required',
            'showtime_date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);
        // them vao database
        showtime::query()->create($data);
        return redirect()->route('showtimes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(showtime $showtime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(showtime $showtime)
    {
        return view('admin.showtime.edit' ,compact('showtime'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, showtime $showtime)
    {
        $data = $request->validate([
            'movie_id' => 'required',
            'room_id' => 'required',
            'showtime_date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
        ]);
        $showtime->update($data);
        return redirect()->route('showtimes.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(showtime $showtime)
    {
        $showtime->delete();
        return redirect()->route('showtimes.index') ;
        }
}
