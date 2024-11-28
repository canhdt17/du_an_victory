<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Models\Invoice;
use Illuminate\Http\Request;
use App\Models\Invoice_detail;


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
            'user_id'=> 'required',
            'time_date'=> 'required',
            'total_price'=> 'required',
            'combofood_id'=> 'required',
            'total_price'=> 'required',
            'voucher_id'=> 'required',
            'status'=> 'required',
        ]);
        // them vao database
        $invoice=Invoice::query()->create($data);

        return response()->json($invoice);
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
}
