<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\KhuyenMai;
use App\Http\Requests\StoreKhuyenMaiRequest;
use App\Http\Requests\UpdateKhuyenMaiRequest;
use Illuminate\Support\Facades\Storage;

class KhuyenMaiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $khuyenMais = KhuyenMai::all(); // Lấy tất cả bản ghi
        return view('admin.khuyenMai.index', compact('khuyenMais'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.khuyenMai.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreKhuyenMaiRequest $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'required',
            'time_date' => 'required',
        ]);
        if($request->hasFile('image')){
            $data['image'] = Storage::put('khuyenmai',$request->file('image'));
        }
        KhuyenMai::query()->create($data);
        return redirect()->route('khuyenMai.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(KhuyenMai $khuyenMai)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KhuyenMai $khuyenMai)
    {
        return view('admin.khuyenMai.edit',compact('khuyenMai'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKhuyenMaiRequest $request, KhuyenMai $khuyenMai)
    {
        // dd($request->all());
        $data = $request->validate([
            'title' => '',
            'content' => '',
            'image' => '',
            'time_date' => '',
        ]);
        if($request->hasFile('image')){
            $data['image'] = Storage::put('khuyenmai',$request->file('image'));
        }
        $khuyenMai->update($data);
        return redirect()->route('khuyenMai.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KhuyenMai $khuyenMai)
    {
        // $khuyenMai->delete();
        // if($khuyenMai->image && Storage::exists($khuyenMai->image)){
        //     Storage::delete($khuyenMai->image);
        // }
        // return redirect()->route('KhuyenMai.index',compact('khuyenMai'));
        // dd($khuyenMai);
        if ($khuyenMai->image && Storage::exists($khuyenMai->image)) {
            Storage::delete($khuyenMai->image);
        }
        $khuyenMai->delete();
        return redirect()->route('khuyenMai.index', compact('khuyenMai'));
    }
}
