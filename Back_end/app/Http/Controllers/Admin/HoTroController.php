<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HoTro;
use Illuminate\Http\Request;

class HoTroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $supports = HoTro::all();
        return view('admin.supports.index', compact('supports'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HoTro $support)
    {
        //
        $support->delete();

        return redirect()->route('supports.index')->with('success', 'Xoá thành công');
    }

}
