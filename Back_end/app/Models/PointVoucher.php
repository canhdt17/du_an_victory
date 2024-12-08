<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PointVoucher extends Model
{
    use HasFactory;
    protected $fillable = [
        'voucher_id',
        'point_voucher',
    ];
    public function voucher()
    {
        return $this->belongsTo(Voucher::class, 'combofood_id');
    }
}
