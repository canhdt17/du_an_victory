<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeatType extends Model
{
    use HasFactory;
    protected $fillable = [
        'seat_type_name',
        'seat_price',
    ];
    public function seat(){
        return $this->hasOne(Seat::class);
    }

}
