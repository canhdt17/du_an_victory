<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\BookingDetail;
use Illuminate\Http\Request;

class BookingDetailController extends Controller
{
    //
    public function show($id)
    {
        $booking = BookingDetail::where('booking_detail_id', $id)->first();
        if ($booking) {
            return response()->json([
                'status' => 200,
                'content' => $booking
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no such order found'
            ], 404);
        }
    }
    public function showByUser($id)
    {
        $booking = Booking::where('user_id', $id)->get();
        if ($booking) {
            return response()->json([
                'status' => 200,
                'content' => $booking
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no such order found'
            ], 404);
        }
    }
}
