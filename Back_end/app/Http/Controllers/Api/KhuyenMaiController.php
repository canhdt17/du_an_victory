<?php

namespace App\Http\Controllers\Api;
use App\Models\KhuyenMai;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

class KhuyenMaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $khuyenmai = KhuyenMai::all();
        return response()->json($khuyenmai);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'required',
            'time_date' => 'required',
        ]);

        $file = $request->file('image');
        $path_image = $file->getClientOriginalName();
        $data['image'] = $path_image;
        KhuyenMai::create($data);
        return response()->json([
            'message' => 'Thêm mới thành công'
        ],200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = KhuyenMai::query()->findOrFail($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $khuyenmai = KhuyenMai::query()->findOrFail($id);
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'time_date' => 'required',
        ]);
        if($request->hasFile('image')){
   
            $file = $request->file('image');
            $path_image = $file->getClientOriginalName();
            $data['image'] = $path_image;
        }else{
            $data['image'] = $khuyenmai->image;
        }

        $khuyenmai->update($data);
        return response()->json($khuyenmai);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        KhuyenMai::destroy($id);
        return response()->json([
            'message'=> 'Xóa thành công'
        ]);
    }
    public function LastestKM(){
        $LastKMs = KhuyenMai::orderByDesc('id')->take(4)->get();
        return response()->json($LastKMs);
       }
}