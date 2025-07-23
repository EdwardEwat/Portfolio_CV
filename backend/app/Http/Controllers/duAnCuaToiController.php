<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class duAnCuaToiController extends Controller
{
    public function getAllDuAn(){
        $projects = DB::table('du_an_cua_toi')->get();
        return response()->json($projects);
    }

    public function getDuAnById($id){
        $project = DB::table('du_an_cua_toi')->where('id', $id)->first();
        return response()->json($project);
    }

    public function getDuAnByName($name){
        $project = DB::table('du_an_cua_toi')->where('tenDuAn', 'like', '%' . $name . '%')->get();
        return response()->json($project);
    }
    public function getDuAnByDate($date){
        $projects = DB::table('du_an_cua_toi')->where('ngayBatDau', '<=', $date)
            ->where('ngayKetThuc', '>=', $date)->get();
        return response()->json($projects);
    }
}
