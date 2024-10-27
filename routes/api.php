<?php


use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\TypeController;
use App\Http\Controllers\Api\ShowtimeController ;
use App\Http\Controllers\Api\MovieComtroller;
use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\Api\AreaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('movies',MovieComtroller::class);
Route::apiResource('showtimes',ShowtimeController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('types', TypeController::class);
Route::apiResource('rooms', RoomController::class);
Route::apiResource('areas', AreaController::class);

