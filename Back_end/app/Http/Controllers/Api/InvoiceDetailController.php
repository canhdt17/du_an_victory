<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\Invoice_detail;
use Illuminate\Http\Request;

class InvoiceDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            'invoice_id'=> 'required',
            'seat_id'=> 'required',
            'total_price'=> 'required',
        ]);
        // them vao database
        $invoice_detail=Invoice_detail::query()->create($data);

        return response()->json($invoice_detail);
    }

    /**
     * Display the specified resource.
     */
    public function show(Invoice_detail $invoice_detail)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Invoice_detail $invoice_detail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Invoice_detail $invoice_detail)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Invoice_detail $invoice_detail)
    {
        //
    }
}
