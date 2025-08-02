<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\thongTinController;
use App\Http\Controllers\bangCapController;
use App\Http\Controllers\congTyController;
use App\Http\Controllers\congViecController;
use App\Http\Controllers\duAnCuaToiController;
use App\Http\Controllers\duAnCongTyController;
use App\Http\Controllers\monHocController;
use App\Http\Controllers\diemSoController;

// ThongTin
Route::get('/thong-tin', [thongTinController::class, 'getData']);
Route::get('/email', [thongTinController::class, 'getEmail']);
Route::get('/thong-tin/{id}', [thongTinController::class, 'getById']);
Route::post('/send-mail', [thongTinController::class, 'sendMail']);

// BangCap
Route::get('/bang-cap', [bangCapController::class, 'getAllBangCap']);
Route::get('/bang-cap/{id}', [bangCapController::class, 'getBangCapById']);
Route::get('/bang-cap/name/{name}', [bangCapController::class, 'getBangCapByName']);
Route::get('/bang-cap/date/{date}', [bangCapController::class, 'getBangCapByDate']);
Route::get('/bang-cap/type/{type}', [bangCapController::class, 'getBangCapByType']);

// CongTy
Route::get('/cong-ty', [congTyController::class, 'getAllCongTy']);
Route::get('/cong-ty/{id}', [congTyController::class, 'getCongTyById']);
Route::get('/cong-ty/name/{name}', [congTyController::class, 'getCongTyByName']);

// CongViec
Route::get('/cong-viec', [congViecController::class, 'getAllCongViec']);
Route::get('/cong-viec/{id}', [congViecController::class, 'getCongViecById']);
Route::get('/cong-viec/name/{name}', [congViecController::class, 'getCongViecByName']);
Route::get('/cong-viec/date/{date}', [congViecController::class, 'getCongViecByDate']);
Route::get('/cong-viec/cong-ty/{congTyId}', [congViecController::class, 'getCongViecByCongTy']);

// DuAnCuaToi
Route::get('/du-an-cua-toi', [duAnCuaToiController::class, 'getAllDuAn']);
Route::get('/du-an-cua-toi/{id}', [duAnCuaToiController::class, 'getDuAnById']);
Route::get('/du-an-cua-toi/name/{name}', [duAnCuaToiController::class, 'getDuAnByName']);
Route::get('/du-an-cua-toi/date/{date}', [duAnCuaToiController::class, 'getDuAnByDate']);

// DuAnCongTy
Route::get('/du-an-cong-ty', [duAnCongTyController::class, 'getAllDuAnCongTy']);
Route::get('/du-an-cong-ty/{id}', [duAnCongTyController::class, 'getDuAnById']);
Route::get('/du-an-cong-ty/name/{name}', [duAnCongTyController::class, 'getDuAnByName']);
Route::get('/du-an-cong-ty/cong-viec/{congViecId}', [duAnCongTyController::class, 'getDuAnByCongViec']);

// MonHoc
Route::get('/mon-hoc', [monHocController::class, 'getAllData']);
Route::get('/mon-hoc/{id}', [monHocController::class, 'getMonHocById']);
Route::get('/mon-hoc/name/{name}', [monHocController::class, 'getMonHocByName']);

// DiemSo
Route::get('/diem-so', [diemSoController::class, 'getAllDiemSo']);
Route::get('/diem-so/{id}', [diemSoController::class, 'getDiemSoById']);
Route::get('/diem-so/mon-hoc/{monHocId}', [diemSoController::class, 'getDiemSoByMonHoc']);
Route::get('/diem-so/hoc-ky/{hocKy}', [diemSoController::class, 'getDiemSoByHocKy']);