<?php



use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\API\SeatTypeController;
use App\Http\Controllers\Api\TintucController;
use App\Http\Controllers\Api\TypeController;
use App\Http\Controllers\Api\ShowtimeController ;
use App\Http\Controllers\Api\MovieController;
use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\Api\AreaController;
use App\Http\Controllers\Api\BannerController;
use App\Http\Controllers\Api\ComboFoodController;
use App\Http\Controllers\Api\HoTroController;
use App\Http\Controllers\Api\KhuyenMaiController;
use App\Http\Controllers\API\SeatController;
use App\Http\Controllers\Api\VoucherController;
use App\Http\Controllers\Api\UserController;
// use App\Models\User;
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


Route::apiResource('rooms', RoomController::class);
Route::apiResource('areas', AreaController::class);
Route::apiResource('banners', BannerController::class);
Route::apiResource('combofoods', ComboFoodController::class);
Route::apiResource('supports', HoTroController::class);
Route::apiResource('seatTypes', SeatTypeController::class);
Route::apiResource('seats', SeatController::class);
Route::apiResource('khuyenmai', KhuyenMaiController::class);
Route::apiResource('vouchers', VoucherController::class);
Route::get('/categories/{id}/movies', [MovieController::class, 'listFilmByCategory']);
Route::get('/phim-dang-chieu', [MovieController::class, 'phimDangChieu']);
Route::get('/phim-sap-chieu', [MovieController::class, 'phimSapChieu']);



