<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CongTy extends Model
{
    protected $table = 'cong_ty';
    protected $primaryKey = 'id';
    public $timestamps = true;
    
    public function thongTins()
    {
        return $this->belongsToMany(ThongTin::class, 'cong_viec')
            ->using(\App\Models\CongViec::class)
            ->withPivot('tenCongViec')
            ->withTimestamps();
    }
}
