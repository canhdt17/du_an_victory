<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ComboFood;
use Illuminate\Http\Request;
use PhpParser\Node\Arg;

class ComboFoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $combofoods = ComboFood::all();
        return response()->json($combofoods);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'combofood_name' => 'required|string|max:255',
        ]);

        ComboFood::create($request->all());

        return response()->json(['message' => 'Thêm mới combofood thành công'],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(ComboFood $combofood)
    {
        //
        return response()->json($combofood);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ComboFood $combofood)
    {
        //
        $request->validate([
            'combofood_name' => 'required|string|max:255',
        ]);

        // $combofood = ComboFood::findOrFail($combofood);
        $combofood->update($request->all());

        return response()->json(['message' => 'Cập nhật thành công','combofood'=>$combofood],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ComboFood $combofood)
    {
        //
        $combofood->delete();

        return response()->json(['message' => 'xóa combofood thành công'], 200);
    }
}
