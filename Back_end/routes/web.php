<?php


use App\Http\Controllers\Admin\SeatController;
use App\Http\Controllers\Admin\SeatTypeController;
use App\Http\Controllers\Admin\ShowtimeController;
use App\Http\Controllers\Admin\MovieController;
use App\Http\Controllers\Admin\AreaController;
use App\Http\Controllers\Admin\RoomController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\ComboFoodController;
use App\Http\Controllers\Admin\HoTroController;
use App\Http\Controllers\Admin\CommentController;
use App\Http\Controllers\Admin\KhuyenMaiController;
use App\Http\Controllers\Admin\VoucherController;
use Illuminate\Support\Facades\Route;


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


Route::prefix('admin')->group(function () {
    Route::resource('seatType', SeatTypeController::class);
    Route::resource('seat', SeatController::class);
    Route::resource('areas', AreaController::class);
    Route::resource('rooms', RoomController::class);
    Route::resource('showtimes', ShowtimeController::class);
    Route::resource('movies', MovieController::class);
    Route::resource('banners', BannerController::class);
    Route::resource('combofoods', ComboFoodController::class);
    Route::resource('supports', HoTroController::class);
    Route::resource('comments', CommentController::class);
    Route::resource('khuyenMai', KhuyenMaiController::class);
    Route::resource('voucher', VoucherController::class);

    Route::get('/', function () {
        return view('admin.layout.index');

    });
});

