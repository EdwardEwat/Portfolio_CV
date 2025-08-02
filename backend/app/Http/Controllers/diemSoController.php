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
        $diemSo = DB::table('diem_so')
            ->join('mon_hoc', 'diem_so.maMonHoc', '=', 'mon_hoc.maMonHoc')
            ->select('mon_hoc.tenMonHoc', 'mon_hoc.soTinChi', 'diem_so.diemSo', 'diem_so.diemChu', 'diem_so.hocKy')
            ->get();
        return response()->json($diemSo);
    }
    public function getDiemSoByMonHoc($monHocId){
        $diemSo = DB::table('diem_so')->where('monHocId', $monHocId)->get();
        return response()->json($diemSo);
    }
    public function getDiemSoByHocKy($hocKy){
        $diemSo = DB::table('diem_so')
            ->join('mon_hoc', 'diem_so.maMonHoc', '=', 'mon_hoc.maMonHoc')
            ->where('diem_so.hocKy', $hocKy)
            ->select('mon_hoc.tenMonHoc', 'mon_hoc.soTinChi', 'diem_so.diemSo', 'diem_so.diemChu')
            ->get();
        return response()->json($diemSo);
    }
}
