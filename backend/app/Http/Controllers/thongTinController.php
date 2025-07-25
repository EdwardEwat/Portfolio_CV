<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class thongTinController extends Controller
{
    public function getData(){
        $data = DB::table('thong_tin')->first();
        return response()->json($data);
    }
    public function getEmail(){
        $email = DB::table('thong_tin')->first()->value('email');
        return response()->json(['email' => $email]);
    }
    public function getById($id){
        $data = DB::table('thong_tin')->where('id', $id)->first();
        if ($data) {
            return response()->json($data);
        } else {
            return response()->json(['message' => 'Data not found'], 404);
        }
    }
}
