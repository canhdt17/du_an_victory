<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\HoTro;
use Illuminate\Http\Request;
use PhpParser\Node\Arg;

class HoTroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
       $supports = HoTro::all();
        return response()->json($supports);
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
    public function show(HoTro $support)
    {
        //
        return response()->json($support);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, HoTro $support)
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

        return response()->json(['message' => 'xóa support thành công'], 200);
    }
}
