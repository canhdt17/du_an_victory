<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = Banner::all();
        return response()->json($banners);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return view('admin.banners.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'image'=> 'required',
            'link'=> 'required',   
        ]);

        // $path_image = $request->file('image')->store('images');
        // $data['image'] = $path_image;
        // $file = $request->file('image');
        // $path_image = $file->getClientOriginalName();
        // $data['image'] = $path_image;

        // them vao database
        $banner = Banner::query()->create($data);
        return response()->json($banner);
    }

    /**
     * Display the specified resource.
     */
    public function show(Banner $banner)
    {
        return response()->json($banner);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Banner $banner)
    {
        $data = $request->validate([
            'link'=> 'required',   
        ]);
       $image= $request->image;
        //neu cap nhap anh 
        if( $image == ""){
            $data['image'] = $banner->image;
        }else{
            $data['image']=$image;
        }


        // cap nhap vao database
        $banner->update($data);
        return response()->json($banner);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Banner $banner)
    {
        $banner->delete();
        return response()->json($banner);
    }
}
