<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Invoice extends Model
{
    use HasFactory;
    use SoftDeletes; // Dung de xoa mem
    protected $fillable = [
        'showtime_id',
        'user_id',
        'time_date',
        'total_price',
        'combofood_id',
        'total_price',
        'voucher_id',
        'status',
    ];
}
