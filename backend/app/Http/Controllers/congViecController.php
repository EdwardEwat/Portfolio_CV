<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class congViecController extends Controller
{
    public function getCongViecById($id){
        $congViec = DB::table('cong_viec')->where('id', $id)->first();
        return response()->json($congViec);
    }
    public function getAllCongViec(){
        $congViec = DB::table('cong_viec')->get();
        return response()->json($congViec);
    }
    public function getCongViecByTen($ten){
        $congViec = DB::table('cong_viec')->where('tenCongViec', 'like', '%' . $ten . '%')->get();
        return response()->json($congViec);
    }
    public function getCongViecByDate($date){
        $congViec = DB::table('cong_viec')->where('ngayBatDau', '<=', $date)
            ->where('ngayKetThuc', '>=', $date)->get();
        return response()->json($congViec);
    }
}
