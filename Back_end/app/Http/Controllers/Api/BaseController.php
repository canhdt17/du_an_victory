<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Base;
use Illuminate\Http\Request;
use PhpParser\Node\Arg;

class BaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $bases = Base::all();
        return response()->json($bases);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'base_name' => 'required',
        ]);

        Base::create($request->all());

        return response()->json(['message' => 'Thêm mới khu vực thành công'],200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //
        $base = Base::findOrFail($id);

        // if (!$base) {
        //     return response()->json(['message' => 'Base not found'], 404);
        // }
        return response()->json($base);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $base = Base::findOrFail($id);

        // if (!$base) {
        //     return response()->json(['message' => 'Base not found'], 404);
        // }

        $request->validate([
            'base_name' => 'required',
        ]);

        $base->update([
            'base_name' => $request->base_name,
        ]);

        return response()->json($base);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $base = Base::findOrFail($id);

        // if (!$base) {
        //     return response()->json(['message' => 'Base not found'], 404);
        // }

        $base->delete();
        return response()->json(['message' => 'Xóa thành công']);
    }
}
