<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiemSo extends Model
{
    protected $table = 'diem_so';
    protected $primaryKey = 'id';
    public $timestamps = true;

    public function thongTin()
    {
        return $this->belongsTo(ThongTin::class, 'thongTinId');
    }
    public function monHoc()
    {
        return $this->belongsTo(MonHoc::class, 'monHocId');
    }
}
