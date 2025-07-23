<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CongViec extends Model
{
    protected $table = 'cong_viec';
    protected $primaryKey = 'id';
    public $timestamps = true;

    public function thongTin()
    {
        return $this->belongsTo(ThongTin::class, 'thongTinId');
    }
    public function congTy()
    {
        return $this->belongsTo(congTy::class, 'congTyId');
    }
}
