<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ThongTin extends Model
{
    protected $table = 'thong_tin';
    protected $primaryKey = 'id';
    public $timestamps = true;
    
    public function monHocs()
    {
        return $this->belongsToMany(MonHoc::class, 'diem_so')
            ->using(\App\Models\DiemSo::class)
            ->withPivot('diemSo')
            ->withTimestamps();
    }
    public function congTys()
    {
        return $this->belongsToMany(CongTy::class, 'cong_viec')
            ->using(\App\Models\CongViec::class)
            ->withPivot('tenCongViec')
            ->withTimestamps();
    }
    public function duAnCuaTois(){
        return $this->hasMany(DuAnCuaToi::class);
    }
    public function bangCaps()
    {
        return $this->hasMany(BangCap::class);
    }
}
