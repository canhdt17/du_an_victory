<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\BookingDetail;
use App\Models\Seat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    //
    public function index()
    {
        $booking = Booking::all();
        if ($booking->count() > 0) {
            return response()->json([
                'status' => 200,
                'content' => $booking
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'no oder found'
            ], 404);
        }
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'showtime_id' => 'required|exists:showtimes,id',
            'seats' => 'required|array',
            'seats.*' => 'exists:seats,id',
            'combofoods' => 'array',
            'combofoods.*' => 'exists:combofoods,id',
        ]);

        DB::beginTransaction();

        try {

            $booking = Booking::create([
                'user_id' => Auth::id(),
                'showtime_id' => $validated['showtime_id'],
                'booking_time' => now(),
            ]);

            $unavailableSeats = []; // Danh sách ghế k chon dc

            foreach ($validated['seats'] as $seat_id) {
                $seat = Seat::find($seat_id);

                // Kiểm tra trạng thái ghế
                if ($seat->seat_status == 2) { // Đã đặt
                    $unavailableSeats[] = $seat_id;
                    continue;
                }

                if ($seat->seat_status == 3) { // Có người khác đang chọn
                    $unavailableSeats[] = $seat_id;
                    continue;
                }

                // Đánh dấu ghế đang được đặt (trạng thái 3)
                $seat->seat_status = 3;
                $seat->save();


                BookingDetail::create([
                    'booking_id' => $booking->id,
                    'seat_id' => $seat_id,
                ]);
            }

            // Nếu có ghế không khả dụng
            if (!empty($unavailableSeats)) {
                DB::rollBack();
                return response()->json([
                    'error' => 'Một số ghế không khả dụng',
                    'unavailable_seats' => $unavailableSeats,
                ], 400);
            }


            foreach ($validated['seats'] as $seat_id) {
                $seat = Seat::find($seat_id);
                $seat->seat_status = 2; // Đã đặt
                $seat->save();
            }


            if (!empty($validated['combofoods'])) {
                foreach ($validated['combofoods'] as $combofood_id) {
                    BookingDetail::create([
                        'booking_id' => $booking->id,
                        'combofood_id' => $combofood_id,
                    ]);
                }
            }

            DB::commit();
            return response()->json(['message' => 'Đặt vé thành công', 'booking' => $booking], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

//
}
