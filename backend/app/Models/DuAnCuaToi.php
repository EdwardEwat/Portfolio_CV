<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DuAnCuaToi extends Model
{
    protected $table = 'du_an_cua_toi';
    protected $primaryKey = 'id';
    public $timestamps = true;

    public function thongTin(){
        return $this->belongsTo(ThongTin::class, 'thongTinId');
    }
}
