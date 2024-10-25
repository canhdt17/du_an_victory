<?php

namespace App\Http\Controllers\Api;
use App\Models\movie;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MovieComtroller extends Controller
{
 /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $showtimes = movie::query()->latest('id')->paginate();
        return response()->json($showtimes);
    }
}
