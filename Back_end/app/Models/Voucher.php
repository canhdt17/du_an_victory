<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;
    protected $fillable = [
        'name_voucher',
        'image',
        'code',
        'discount_amount',
        'expiry_date',
        'style_voucher_id',
        'status',
    ];
}
