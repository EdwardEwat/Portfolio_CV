<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class duAnCongTyController extends Controller
{
    public function getAllDuAnCongTy(){
        $projects = DB::table('du_an_cong_ty')->get();
        return response()->json($projects);
    }

    public function getDuAnCongTyById($id){
        $project = DB::table('du_an_cong_ty')->where('id', $id)->first();
        return response()->json($project);
    }

    public function getDuAnCongTyByName($name){
        $project = DB::table('du_an_cong_ty')->where('tenDuAn', 'like', '%' . $name . '%')->get();
        return response()->json($project);
    }
    public function getDuAnCongTyByCongViec($congViecId){
        $projects = DB::table('du_an_cong_ty')
            ->join('cong_viec', 'du_an_cong_ty.congViecId', '=', 'cong_viec.id')
            ->where('cong_viec.id', $congViecId)
            ->select('du_an_cong_ty.*')
            ->get();
        return response()->json($projects);
    }
}
