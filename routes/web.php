<?php


use App\Http\Controllers\SeatController;
use App\Http\Controllers\SeatTypeController;


use App\Http\Controllers\ShowtimeController;
use App\Http\Controllers\AreaController;
use App\Http\Controllers\RoomController;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TypeController;
use App\Http\Controllers\Admin\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::prefix('admin')->group(function () {
    Route::resource('seatType', SeatTypeController::class);
    Route::resource('seat', SeatController::class);
    Route::get('/', function () {
        return view('admin.layout.index');
    });
});


//     return view('');
// });


Route::prefix('admin')->group(function () {
    Route::resource('showtimes', ShowtimeController::class);
    Route::prefix('admin')->group(function () {
        Route::resource('areas', AreaController::class);
        Route::resource('rooms', RoomController::class);

        Route::get('/', function () {
            return view('admin.layout.index');
        });
    });
});

