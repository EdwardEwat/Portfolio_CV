<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class congTyController extends Controller
{
    public function getAllCongTy(){
        $companies = DB::table('cong_ty')->get();
        return response()->json($companies);
    }

    public function getCongTyById($id){
        $company = DB::table('cong_ty')->where('id', $id)->first();
        return response()->json($company);
    }

    public function getCongTyByName($name){
        $company = DB::table('cong_ty')->where('tenCongTy', 'like', '%' . $name . '%')->get();
        return response()->json($company);
    }
}
