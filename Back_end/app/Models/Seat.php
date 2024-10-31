<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seat extends Model
{
    use HasFactory;
    protected $fillable = [
        'seat_type_id',
        'seat_number',
        'room_id',
        'seat_status',
    ];
    public function seat_type(){
        return $this->belongsTo(SeatType::class);
    }

}
