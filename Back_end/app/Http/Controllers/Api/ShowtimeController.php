<?php

namespace App\Http\Controllers\Api;
use App\Models\showtime;
use App\Models\Seat;
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
        ->whereNull('showtimes.deleted_at')     // Kiểm tra trạng thái xóa mềm cho bảng movies
        ->select('showtimes.*','name_movie','room_name')
        ->orderByDesc('showtimes.id')
        ->orderByDesc('showtimes.movie_id')
        ->orderByDesc('showtimes.room_id')
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
            'base_id' => 'required',

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
        $showtime->load(['movie','room','seat','seatType','statusSeat']);
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
            'base_id' => 'required',

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
    // tim id showtime
    public function getIDShowtime($ids)
    {

    // Tách danh sách ID bằng dấu phẩy
    $idArray = explode(',', $ids);
    $movie_id=$idArray[1];
    $base_id=$idArray[0];
    $showtime_date=$idArray[2];
    $start_time=$idArray[3];
    
    $showtimeID = showtime::where('movie_id', '=' ,$movie_id)->where('base_id', '=' ,$base_id)->where('showtime_date', $showtime_date)->where('start_time', $start_time)->get();
    return response()->json($showtimeID);
    
    }
    // tìm ngày 
    public function getDateShowtime($ids)
    {

    // Tách danh sách ID bằng dấu phẩy
    $idArray = explode(',', $ids);
    $movie_id=$idArray[1];
    $base_id=$idArray[0];

    
    $showtimeDate = showtime::where('movie_id', '=' ,$movie_id)->where('base_id', '=' ,$base_id)->groupBy('showtime_date')->select('showtime_date')->get();
    return response()->json($showtimeDate);
    
    }
    // tìm giờ     
    public function getTimeShowtime($ids)
    {

    // Tách danh sách ID bằng dấu phẩy
    $idArray = explode(',', $ids);
    $movie_id=$idArray[1];
    $base_id=$idArray[0];
    $showtime_date=$idArray[2];
    
    $showtimeTime = showtime::where('movie_id', '=' ,$movie_id)->where('base_id', '=' ,$base_id)->where('showtime_date', $showtime_date)->groupBy('start_time')->select('start_time')->get();
    return response()->json($showtimeTime);
    
    }
    // tim phòng 
    public function getSeatShowtime($id)
    {
        $seats= DB::table('seats')
        ->leftJoin('status_seats', 'status_seats.seat_id', '=', 'seats.id')  // Dùng leftJoin để lấy tất cả ghế, kể cả không có trạng thái
        ->whereNull('seats.deleted_at')  // Kiểm tra trạng thái xóa mềm cho ghế
        ->where('seats.room_id', $id)  // Lọc theo phòng
        ->select('seats.*', 'status_seats.status')  // Chọn tất cả các cột của ghế và trạng thái ghế
        ->orderByDesc('seats.id')  // Sắp xếp theo id của ghế
        ->get();
        return response()->json($seats);
    
    }
    }
