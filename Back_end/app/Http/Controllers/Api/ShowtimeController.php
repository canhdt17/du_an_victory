<?php

namespace App\Http\Controllers\Api;
use App\Models\showtime;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShowtimeController extends Controller
{
 /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showtimes= DB::table('showtimes')
        ->join('movies','movies.id','=','showtimes.movie_id')
        ->join('rooms','rooms.id','=','showtimes.room_id')
        ->join('cinemas','cinemas.id','=','showtimes.cinemas_id')
        ->whereNull('showtimes.deleted_at')     // Kiểm tra trạng thái xóa mềm cho bảng movies
        ->select('showtimes.*','name_movie','room_name','cinemas_name')
        ->orderByDesc('showtimes.id')
        ->orderByDesc('showtimes.movie_id')
        ->orderByDesc('showtimes.room_id')
        ->orderByDesc('showtimes.cinemas_id')
        ->latest('showtimes.id')
        ->paginate();
        return response()->json($showtimes);
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
            'cinemas_id' => 'required',
        ]);
        // them vao database
        $showtime=showtime::query()->create($data);
        return response()->json($showtime);
    }

    /**
     * Display the specified resource.
     */
    public function show(showtime $showtime)
    {
        $showtime->load(['movie','room','cinema']);
        return response()->json(['showtime' => $showtime]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(showtime $showtime)
    // {
    //     return view('admin.showtime.edit' ,compact('showtime'));
    // }

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
            'cinemas_id' => 'required',
        ]);
        $showtime->update($data);
        return response()->json($showtime);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(showtime $showtime)
    {
        $showtime->delete();
        return response()->json($showtime);
        }
    }
