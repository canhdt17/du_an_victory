<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $table = 'bookings';
    protected $primaryKey = 'booking_id';
    public $timestamps = true;


    protected $fillable = [
        'user_id',
        'showtime_id',
        'booking_time',
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }


    public function showtime()
    {
        return $this->belongsTo(Showtime::class, 'showtime_id', 'id');
    }


    public function bookingDetails()
    {
        return $this->hasMany(BookingDetail::class, 'booking_id', 'booking_id');
    }


    public function payment()
    {
        return $this->hasOne(Payment::class, 'booking_id', 'booking_id');
    }
}
