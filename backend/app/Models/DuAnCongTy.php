<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DuAnCongTy extends Model
{
    protected $table = 'du_an_cong_ty';
    protected $primaryKey = 'id';

    public $timestamps = true;

    public function congViec()
    {
        return $this->belongsTo(CongViec::class, 'congViecId');
    }
}
