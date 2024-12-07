<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DonatePoint;
use Illuminate\Http\Request;

class DonatePointController extends Controller
{

 public function index()
 {
     $donatePoints = DonatePoint::with('seatType')->get();

     return response()->json($donatePoints, 200);
 }


 public function show($id)
 {
     $donatePoint = DonatePoint::with('seatType')->findOrFail($id);

     if (!$donatePoint) {
         return response()->json(['message' => 'Không tìm thấy dữ liệu'], 404);
     }

     return response()->json($donatePoint, 200);
 }


 public function store(Request $request)
 {
     $validated = $request->validate([
         'seat_type_id' => 'required',
         'bonus_points' => 'required',
         'date_last_sale' => 'required',
         'status' => 'required'
     ]);


    //  $donatePoint = DonatePoint::where('seat_type_id', $validated['seat_type_id'])->first();

    //  if ($donatePoint) {

    //      $donatePoint->bonus_points += $validated['bonus_points'];
    //      $donatePoint->save();
    //  } else {


    //  }
     $donatePoint = DonatePoint::create($validated);
     return response()->json($donatePoint, 201);
 }


 public function update(Request $request, $id)
 {
     $donatePoint = DonatePoint::findOrFail($id);

     $validated = $request->validate([
        'seat_type_id' => 'required',
        'bonus_points' => 'required',
        'date_last_sale' => 'required',
        'status' => 'required'
     ]);

     $donatePoint->update($validated);

     return response()->json($donatePoint, 200);
 }


 public function destroy($id)
 {
     $donatePoint = DonatePoint::findOrFail($id);

     if (!$donatePoint) {
         return response()->json(['message' => 'Không tìm thấy dữ liệu'], 404);
     }

     $donatePoint->delete();

     return response()->json(['message' => 'Xóa thành công'], 200);
 }
}
