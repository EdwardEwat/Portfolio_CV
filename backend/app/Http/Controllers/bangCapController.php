<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class bangCapController extends Controller
{
    public function getAllBangCap(){
        $bangCaps = DB::table('bang_cap')->get();
        return response()->json($bangCaps);
    }

    public function getBangCapById($id){
        $bangCap = DB::table('bang_cap')->where('id', $id)->first();
        return response()->json($bangCap);
    }

    public function getBangCapByName($name){
        $bangCap = DB::table('bang_cap')->where('tenBangCap', 'like', '%' . $name . '%')->get();
        return response()->json($bangCap);
    }
    public function getBangCapByDate($date){
        $bangCaps = DB::table('bang_cap')
            ->where('ngayCap', '<=', $date)
            ->where('ngayHetHan', '>=', $date)
            ->get();
        return response()->json($bangCaps);
    }
    public function getBangCapByType($type){
        $bangCaps = DB::table('bang_cap')->where('loaiBangCap', $type)->get();
        return response()->json($bangCaps);
    }
}
