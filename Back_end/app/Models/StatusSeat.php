<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusSeat extends Model
{
    use HasFactory;
    protected $fillable = [
        'showtime_id',
        'seat_id',
        'status',
    ];
    public function showtime()
    {
        return $this->belongsTo(Showtime::class, 'showtime_id');
    }
    public function seat()
    {
        return $this->belongsTo(Seat::class, 'seat_id');
    }
}
