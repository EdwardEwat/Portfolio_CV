<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MonHoc extends Model
{
    protected $table = 'mon_hoc';
    protected $primaryKey = 'id';
    public $timestamps = true;

    public function thongTins()
    {
        return $this->belongsToMany(ThongTin::class, 'diem_so')
            ->using(\App\Models\DiemSo::class)
            ->withPivot('diemSo')
            ->withTimestamps();
    }
}
