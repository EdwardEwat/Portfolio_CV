<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BangCap extends Model
{
    protected $table = 'bang_cap';
    protected $primaryKey = 'id';
    public $timestamps = true;

    public function thongTin()
    {
        return $this->belongsTo(ThongTin::class, 'thongTinId');
    }
}
