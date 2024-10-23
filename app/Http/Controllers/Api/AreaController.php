<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Area;
use Illuminate\Http\Request;
use PhpParser\Node\Arg;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $areas = Area::all();
        return response()->json($areas);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'area_name' => 'required|string|max:255',
        ]);

        Area::create($request->all());

        return response()->json(['message' => 'Thêm mới khu vực thành công'],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Area $area)
    {
        //
        return response()->json($area);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Area $area)
    {
        //
        $request->validate([
            'area_name' => 'required|string|max:255',
        ]);

        // $area = Area::findOrFail($area);
        $area->update($request->all());

        return response()->json(['message' => 'Cập nhật thành công','area'=>$area],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Area $area)
    {
        //
        $area->delete();

        return response()->json(['message' => 'xóa khu vực thành công'], 200);
    }
}
