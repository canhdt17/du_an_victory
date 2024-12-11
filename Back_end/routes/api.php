<?php

use App\Http\Controllers\Admin\ShowtimeController;
// use App\Models\Invoice;
// use Illuminate\Http\Request;
// use App\Http\Controllers\Api;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BaseController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\RoomController;
// use App\Http\Controllers\Api\SeatController;
use App\Http\Controllers\Api\TypeController;
// use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\HoTroController;
use App\Http\Controllers\Api\MovieController;
use App\Http\Controllers\Api\BannerController;
// use App\Http\Controllers\Api\CinemaController;
use App\Http\Controllers\Api\TintucController;

// use App\Http\Controllers\Api\InvoiceController;
// use App\Http\Controllers\Api\VoucherController;
use App\Http\Controllers\ArchiveUserController;

use App\Http\Controllers\Api\AdminUserControler;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\API\SeatTypeController;
use App\Http\Controllers\Api\ComboFoodController;
use App\Http\Controllers\Api\DonateCombofoodController;

use App\Http\Controllers\Api\PointVoucherController;

// use App\Models\User;
use App\Http\Controllers\Api\KhuyenMaiController;
use App\Http\Controllers\Api\SeatController;
use App\Http\Controllers\Api\VoucherController;
use App\Http\Controllers\Api\UserController;

// use App\Http\Controllers\Api;
use App\Http\Controllers\Api\CinemaController;
use App\Http\Controllers\Api\DonatePointController;
use App\Http\Controllers\Api\InvoiceController;
use App\Http\Controllers\Api\PointUserController;
use App\Http\Controllers\Api\StyleVoucherController;
// use App\Models\Invoice;
// use App\Models\User;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;



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

Route::middleware('auth:sanctum')->group( function (){
    Route::get('/user',[UserController::class,'user']);
    Route::get('/logout',[UserController::class,'logout']);
});
Route::post('/login',[UserController::class,'login']);
Route::post('/register',[UserController::class,'register']);


Route::apiResource('movies',MovieController::class);
Route::apiResource('showtimes',ShowtimeController::class);


Route::apiResource('categories', CategoryController::class);
Route::apiResource('types', TypeController::class);
Route::apiResource('tin-tuc', TintucController::class);
Route::get('tin-tucs', [TinTucController::class, 'index']); // Route để lấy danh sách tin tức
Route::get('tin-tucs/{id}', [TinTucController::class, 'show']); // Route để hiển thị chi tiết tin tức
Route::get('roles', [RoleController::class, 'index']);
Route::get('roles/{id}', [RoleController::class, 'show']);
Route::post('roles', [RoleController::class, 'store']);
Route::put('/roles/{id}', [RoleController::class, 'update']);
Route::delete('/roles/{id}', [RoleController::class, 'destroy']);
Route::get('/users', [AdminUserControler::class, 'index']); // Lấy danh sách user
Route::put('/users/{id}/role', [AdminUserControler::class, 'updateRole']); // Cập nhật role cho user
Route::prefix('style_vouchers')->group(function () {
    Route::get('/', [StyleVoucherController::class, 'index']); // Lấy danh sách
    Route::post('/', [StyleVoucherController::class, 'store']); // Thêm mới
    Route::put('/{id}', [StyleVoucherController::class, 'update']); // Cập nhật
    Route::delete('/{id}', [StyleVoucherController::class, 'destroy']); // Xóa
});
Route::get('archive_users', [ArchiveUserController::class, 'index']);
Route::post('archive_users', [ArchiveUserController::class, 'store']);
Route::put('archive_users/{id}', [ArchiveUserController::class, 'update']);
Route::get('archive_users/{id}', [ArchiveUserController::class, 'show']);
Route::delete('archive_users/{id}', [ArchiveUserController::class, 'destroy']);


Route::apiResource('rooms', RoomController::class);
Route::apiResource('bases', BaseController::class);
Route::apiResource('cinemas', CinemaController::class);
Route::apiResource('banners', BannerController::class);
Route::apiResource('combofoods', ComboFoodController::class);
Route::apiResource('supports', HoTroController::class);
Route::apiResource('seatTypes', SeatTypeController::class);
Route::apiResource('seats', SeatController::class);
Route::apiResource('khuyenmai', KhuyenMaiController::class);
Route::apiResource('vouchers', VoucherController::class);
// hóa đơn
Route::apiResource('invoices', InvoiceController::class);
Route::get('dailyRevenue', [InvoiceController::class, 'dailyRevenue']);

Route::apiResource('donatecombofoods', DonateCombofoodController::class);
Route::apiResource('pointvouchers', PointVoucherController::class);

Route::get('/categories/{id}/movies', [MovieController::class, 'listFilmByCategory']);
Route::get('/phim-dang-chieu', [MovieController::class, 'phimDangChieu']);
Route::get('/phim-sap-chieu', [MovieController::class, 'phimSapChieu']);
Route::get('/lastest-tin-tuc', [TintucController::class, 'LastestTinTuc']);
Route::get('/lastest-khuyen-mai', [KhuyenMaiController::class, 'LastestKM']);
// api time id showtime
Route::get('/getIDShowtime/{ids}', [ShowtimeController::class, 'getIDShowtime']);
// api tim những ngày chiếu của phim
Route::get('/getDateShowtime/{ids}', [ShowtimeController::class, 'getDateShowtime']);
// api tim những thời gian chiếu của ngày chiếu phim
Route::get('/getTimeShowtime/{ids}', [ShowtimeController::class, 'getTimeShowtime']);
// // api tim id room theo thời gian chiếu của ngày chiếu phim
// Route::get('/getIDRoomShowtime/{ids}', [ShowtimeController::class, 'getIDRoomShowtime']);
// api tim list ghế theo thời gian chiếu của ngày chiếu phim
Route::get('/getSeatShowtime/{ids}', [ShowtimeController::class, 'getSeatShowtime']);
// Route::post('/user/{id}', [UserController::class, 'update']);

//api diem tich luy
Route::apiResource('point-users', PointUserController::class);

Route::apiResource('donate-points', DonatePointController::class);

