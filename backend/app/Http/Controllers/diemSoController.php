<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class diemSoController extends Controller
{
    public function getDiemSoById($id){
        $diemSo = DB::table('diem_so')->where('id', $id)->first();
        return response()->json($diemSo);
    }
    public function getAllDiemSo(){
        $diemSo = DB::table('diem_so')->get();
        return response()->json($diemSo);
    }
    public function getDiemSoByMonHoc($monHocId){
        $diemSo = DB::table('diem_so')->where('monHocId', $monHocId)->get();
        return response()->json($diemSo);
    }
    public function getDiemSoByHocKy($hocKy){
        $diemSo = DB::table('diem_so')->where('hocKy', $hocKy)->get();
        return response()->json($diemSo);
    }
}
