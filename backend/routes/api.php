<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\thongTinController;

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

// Các routes khác cho thongTinController
Route::get('/thong-tin', [thongTinController::class, 'getData']);

// Sửa route này từ GET (nếu có) thành POST
Route::post('/thong-tin/send-mail', [thongTinController::class, 'sendMail']);