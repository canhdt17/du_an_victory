<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\Movie;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies= DB::table('movies')
        ->join('categories','categories.id','=','movies.category_id')
        ->join('types','types.id','=','movies.type_id')
        ->whereNull('movies.deleted_at')     // Kiểm tra trạng thái xóa mềm cho bảng movies
        ->select('movies.*','name_type','name_category')
        ->orderByDesc('movies.id')           
        ->orderByDesc('movies.type_id')      
        ->orderByDesc('movies.category_id')
        ->latest('movies.id')
        ->paginate();

        return view('admin.movie.index', compact('movies'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $types= DB::table('types')->get();
        $categories= DB::table('categories')->get();
        return view('admin.movie.create', compact('types','categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name_movie'=> 'required',
            'image'=> 'required',
            'type_id'=> 'required',
            'duration'=> 'required',
            'nation'=> 'required',
            'director'=> 'required',
            'performer'=> 'required',
            'show'=> 'required',
            'content'=> 'required',
            'link_trailler'=> 'required',
            'category_id'=> 'required',
        ]);

        $path_image = $request->file('image')->store('images');
        $data['image'] = $path_image;

        // them vao database
        Movie::query()->create($data);
        return redirect()->route('movies.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {        
        $types= DB::table('types')->get();
        $categories= DB::table('categories')->get();
        return view('admin.movie.edit' ,compact('movie','types','categories'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        $data = $request->validate([
            'name_movie'=> 'required',
            'type_id'=> 'required',
            'duration'=> 'required',
            'nation'=> 'required',
            'director'=> 'required',
            'performer'=> 'required',
            'show'=> 'required',
            'content'=> 'required',
            'link_trailler'=> 'required',
            'category_id'=> 'required',
        ]);
       
        //neu cap nhap anh 
        if($request->hasFile('image')){
            if (file_exists('storage/' . $movie->image)) {
                unlink('storage/' . $movie->image);
            }
            $path_image = $request->file('image')->store('images');
            $data['image'] = $path_image;
        }else{
            $data['image'] = $movie->image;
        }


        // cap nhap vao database
        $movie->update($data);
        return redirect()->route('movies.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        if (file_exists('storage/' . $movie->image)) {
            unlink('storage/' . $movie->image);
        }
        $movie->delete();
        return redirect()->route('movies.index') ;
    }
}
