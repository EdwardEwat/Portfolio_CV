<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class monHocController extends Controller
{
    public function getAllData(){
        $data = DB::table('mon_hoc')->get();
        return response()->json($data);
    }
    public function getMonHocById($id){
        $monHoc = DB::table('mon_hoc')->where('id', $id)->first();
        return response()->json($monHoc);
    }
    public function getMonHocByName($name){
        $monHoc = DB::table('mon_hoc')->where('tenMonHoc', 'like', '%' . $name . '%')->get();
        return response()->json($monHoc);
    }
}
