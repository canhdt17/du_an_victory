<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Area;
use Illuminate\Http\Request;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $areas = Area::all();
        return view('admin.areas.index', compact('areas'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.areas.create');
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

        return redirect()->route('areas.index')->with('success', 'Thêm mới khu vực thành công');
    }

    /**
     * Display the specified resource.
     */
    public function show(Area $area)
    {
        //
        return view('admin.areas.show', compact('area'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Area $area)
    {
        //
        return view('admin.areas.edit', compact('area'));
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

        return redirect()->route('areas.edit',$area)->with('success', 'Cập nhật khu vực mới thành công');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Area $area)
    {
        //
        $area->delete();
        return redirect()->route('areas.index')->with('success', 'Xoá khu vực thành công');
    }
}
