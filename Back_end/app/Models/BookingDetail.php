<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingDetail extends Model
{
    use HasFactory;

    protected $table = 'booking_details';
    protected $primaryKey = 'booking_detail_id';
    public $timestamps = true;

    // Các cột có thể fillable
    protected $fillable = [
        'booking_id',
        'seat_id',
        'combofood_id',
    ];


    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id', 'booking_id');
    }


    public function seat()
    {
        return $this->belongsTo(Seat::class, 'seat_id', 'id');
    }


    public function comboFood()
    {
        return $this->belongsTo(ComboFood::class, 'combofood_id', 'combofood_id');
    }
}
