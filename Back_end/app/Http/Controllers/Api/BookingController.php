<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\BookingDetail;
use App\Models\ComboFood;
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

            $unavailableSeats = [];
            $totalPrice = 0;
            foreach ($validated['seats'] as $seat_id) {
                $seat = Seat::find($seat_id);
                if ($seat->seat_status == 2 || $seat->seat_status == 3) {
                    $unavailableSeats[] = $seat_id;
                    continue;
                }
                $seat->seat_status = 2;
                $seat->save();
                $bookingDetail = BookingDetail::create([
                    'booking_id' => $booking->id,
                    'seat_id' => $seat_id,
                    'price' => $seat->price,
                ]);
                $totalPrice += $bookingDetail->price;
            }

            if (!empty($validated['combofoods'])) {
                foreach ($validated['combofoods'] as $combofood_id) {
                    $combofood = ComboFood::find($combofood_id);
                    BookingDetail::create([
                        'booking_id' => $booking->id,
                        'combofood_id' => $combofood_id,
                        'price' => $combofood->price,
                    ]);
                    $totalPrice += $combofood->price;
                }
            }

            $booking->total_price = $totalPrice;
            $booking->save();

            if (!empty($unavailableSeats)) {
                DB::rollBack();
                return response()->json([
                    'error' => 'Một số ghế không khả dụng',
                    'unavailable_seats' => $unavailableSeats,
                ], 400);
            }

            DB::commit();
            return response()->json([
                'message' => 'Đặt vé thành công',
                'booking' => $booking,
                'booking_details' => $booking->bookingDetails,
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    {
        $booking = Booking::with('bookingDetails', 'bookingDetails.seat', 'bookingDetails.combofood')->find($id);
        if ($booking) {
            return response()->json($booking);
        } else {
            return response()->json(['error' => 'Không tìm thấy đơn đặt vé'], 404);
        }
    }

    public function cancel($id)
    {
        $booking = Booking::find($id);
        if ($booking) {
            if ($booking->user_id == Auth::id()) {
                DB::beginTransaction();
                try {
                    foreach ($booking->bookingDetails as $bookingDetail) {
                        $seat = Seat::find($bookingDetail->seat_id);
                        $seat->seat_status = 1; // Trạng thái ghế: Có sẵn
                        $seat->save();
                    }
                    $booking->delete();
                    DB::commit();
                    return response()->json(['message' => 'Hủy đơn đặt vé thành công']);
                } catch (\Exception $e) {
                    DB::rollBack();
                    return response()->json(['error' => $e->getMessage()], 400);
                }
            } else {
                return response()->json(['error' => 'Bạn không có quyền hủy đơn đặt vé này'], 403);
            }
        } else {
            return response()->json(['error' => 'Không tìm thấy đơn đặt vé'], 404);
        }
    }

    public function history()
    {
        $bookings = Booking::where('user_id', Auth::id())
            ->with('bookingDetails', 'bookingDetails.seat', 'bookingDetails.combofood')
            ->get();
        return response()->json($bookings);
    }
//
}
