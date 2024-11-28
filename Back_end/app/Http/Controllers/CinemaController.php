<?php

namespace App\Http\Controllers;

use App\Models\Cinema;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CinemaController extends Controller
{
    //
    public function index()
    {
        $cinemas = DB::table('cinemas')
        ->join('bases', 'bases.id', '=', 'cinemas.base_id')
        ->whereNull('cinemas.deleted_at')
        ->select('cinemas.*', 'bases.base_name')

        ->orderByDesc('cinemas.base_id')
        ->latest('cinemas.id')
        ->paginate();

    return response()->json($cinemas);
    }

    //
    public function store(Request $request)
    {
         $request->validate([
        'cinemas_name' => 'required',
        'base_id' => 'required'
    ]);


        $cinema = Cinema::create($request->all());
        return response()->json($cinema, 201);
    }

    //
    public function show($id)
    {
        $cinema = Cinema::with('base')->findOrFail($id);
        return response()->json($cinema);
    }

    //
    public function update(Request $request, $id)
    {
        $request->validate([
            'cinemas_name' => 'required',
            'base_id' => 'required',
        ]);

        $cinema = Cinema::findOrFail($id);
        $cinema->update($request->all());
        return response()->json($cinema);
    }

    //
    public function destroy($id)
    {
        $cinema = Cinema::findOrFail($id);
        $cinema->delete();
        return response()->json(['message' => 'Xóa thành công']);
    }

}
