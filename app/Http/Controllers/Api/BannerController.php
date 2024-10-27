<?php

namespace App\Http\Controllers\Api;
use App\Models\Banner;
use App\Http\Controllers\Controller;
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
        return view('admin.banners.create');
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

        $path_image = $request->file('image')->store('images');
        $data['image'] = $path_image;

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
       
        //neu cap nhap anh 
        if($request->hasFile('image')){
            if (file_exists('storage/' . $banner->image)) {
                unlink('storage/' . $banner->image);
            }
            $path_image = $request->file('image')->store('images');
            $data['image'] = $path_image;
        }else{
            $data['image'] = $banner->image;
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
