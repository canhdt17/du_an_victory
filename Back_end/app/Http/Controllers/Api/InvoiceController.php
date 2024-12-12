<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use App\Models\Invoice;
use App\Models\StatusSeat;
use App\Models\Seat;
use App\Models\ComboFood;
use App\Models\Voucher;


use Illuminate\Http\Request;
use App\Models\Invoice_detail;
use Illuminate\Support\Facades\Auth;


class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $invoices = Invoice::all();
        return response()->json($invoices);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'showtime_id'=> 'required',
            'user_id' => 'required',
            'seats' => 'required|array',
            'seats.*' => 'exists:seats,id',
        ]);

        DB::beginTransaction();
        try{

            $totalPrice = 0;
            $invoice = Invoice::create([
                'total_price' => $totalPrice,
                'showtime_id' => $data['showtime_id'],
                'user_id' => 1,
                'combofood_id' => $request->combofood_id,
                'voucher_id' => $request->voucher_id,
                'time_date' => now(), // Thêm giá trị cho cột `time_date`
            ]);

            // $unavailableSeats = [];
            // $jsonString = json_encode($data['seats']);

            foreach ($data['seats'] as $seat_id) {
                $seat= DB::table('seats')
                    ->join('seat_types','seat_types.id','=','seats.seat_type_id')
                    ->select('seats.*','seat_price')
                    ->orderByDesc('seats.seat_type_id')
                    ->where('seats.id', '=',  $seat_id)
                    ->first();
                // $seat->save();
                if ($seat) {
                $invoices_detail = Invoice_detail::create([
                    'invoice_id' => $invoice->id,
                    'seat_id' => $seat->id,  // Lấy đúng `seat_id`
                    // 'time_date' => now(),

                ]);
                $statusSeat = StatusSeat::create([
                    'showtime_id' => $data['showtime_id'],
                    'seat_id' => $seat->id,
                    'status' => "Đã đặt",

                ]);
                }
                $totalPrice += $seat->seat_price;


            }
            
            if (!empty($request->combofood_id)) {
                    $combofood = ComboFood::find($request->combofood_id);
                    
                    if ($combofood) {
                        $totalPrice += $combofood->combofood_price;
                    } else {
                        $totalPrice += 0;
                    }
                }
            
            if (!empty($request->voucher_id)) {
                $voucher = Voucher::find($request->voucher_id);
                
                if ($voucher) {
                    // Tính toán giảm giá
                    $discount = ($totalPrice * $voucher->discount_amount) / 100;
                    $totalPrice -= $discount; // Giảm giá từ tổng giá
                } else {
                    $totalPrice += 0;
                }
            }
            $invoice->total_price = $totalPrice;
            $invoice->save();  // Lưu lại thay đổi vào cơ sở dữ liệu
            DB::commit();
            return response()->json($invoice);

            // return response()->json([
            //     'message' => 'Đặt vé thành công',
            // ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice $invoice)
    {
        $invoices_detail =DB::table('invoice_details')
        ->join('invoices','invoices.id','=','invoice_details.invoice_id')
        ->join('seats','seats.id','=','invoice_details.seat_id')
        ->whereNull('invoice_details.deleted_at')     // Kiểm tra trạng thái xóa mềm cho bảng invoice_details
        ->select('invoice_details.*','invoices.*','seats.*')
        ->orderByDesc('invoice_details.id')
        ->orderByDesc('invoice_details.seat_id')
        ->orderByDesc('invoice_details.invoice_id')
        ->latest('invoice_details.id')
        ->paginate();

        return response()->json($invoices_detail);
    }

    /**
     * Show the form for editing the specified resource.
     */
    // sửa trạng thái hóa đơn
    public function edit(Invoice $invoice)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Invoice $invoice)
    {
        //
        $request->validate([
            'status' => 'required',
        ]);

        $invoice = Invoice::findOrFail($invoice);
        $invoice->update($request->all());

        return response()->json(['message' => 'Cập nhật trạng thái đơn hàng thành công','invoice'=>$invoice],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice $invoice)
    {
        //
    }
    public function dailyRevenue()
    {
           // Lấy tham số ngày bắt đầu và kết thúc
           $startDate = '2024-12-01';
           $endDate = '2024-12-30';
   
   // Truy vấn tổng doanh thu theo ngày
   $revenues = Invoice::select(
    DB::raw('DATE(time_date) as revenue_date'),
    DB::raw('SUM(total_price) as total_revenue')
)
    ->whereBetween(DB::raw('DATE(time_date)'), [$startDate, $endDate]) // Đảm bảo so sánh đúng định dạng ngày
    ->groupBy('revenue_date')
    ->orderBy('revenue_date', 'asc')
    ->get();

// Xử lý trường hợp không có dữ liệu


// Trả về kết quả thành công
return response()->json([
 $revenues
]);

    }
}