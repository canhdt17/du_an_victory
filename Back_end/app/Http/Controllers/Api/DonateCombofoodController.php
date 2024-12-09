<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DonateCombofood;
use Illuminate\Http\Request;

class DonateCombofoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $donatecombofoods = DonateCombofood::all();
        return response()->json($donatecombofoods);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'combofood_id' => 'required',
            'price_sale' => 'required',
            'date_last_sale' => 'required',
            'status' => 'required',
        ]);
        DonateCombofood::create($request->all());
        return response()->json([
            'message' => 'Thêm mới thành công'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = DonateCombofood::query()->findOrFail($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $donatecombofoods = DonateCombofood::query()->findOrFail($id);
        $donatecombofoods->update(request()->all());
        return response()->json($donatecombofoods);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        DonateCombofood::destroy($id);
        return response()->json([
            'message'=> 'Xóa thành công'
        ]);
    }
}
