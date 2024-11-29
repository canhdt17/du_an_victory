<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;



class showtime extends Model
{
    use HasFactory;
    use SoftDeletes; // Dung de xoa mem
    protected $fillable = [
        'movie_id',
        'room_id',
        'showtime_date',
        'start_time',
        'end_time',
    ];
    public function movie():BelongsTo
    {
        return $this->belongsTo(Movie::class, 'movie_id');
    }
    public function room():BelongsTo
    {
        return $this->belongsTo(Room::class, 'room_id');
    }
    public function seat()
    {
        return $this->hasMany(Seat::class, 'room_id', 'room_id');
    }
    public function seatType()
    {
        return $this->hasMany(SeatType::class, 'id', 'id');
    }
    public function statusSeat()
    {
        return $this->hasMany(StatusSeat::class, 'showtime_id', 'id');
        
    }
    // public function cinemas():BelongsTo
    // {
    //     return $this->belongsTo(Cinema::class,'base_id');
    // }
    // public function movie()
    // {
    //     return $this->belongsTo(Movie::class);
    // }

}
