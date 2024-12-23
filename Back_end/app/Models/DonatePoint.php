<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DonatePoint extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'donate_points';

    protected $fillable = [
        'seat_type_id',
        'bonus_points',
        'date_last_sale',
        'status',
    ];
    public function seatType()
    {
        return $this->belongsTo(SeatType::class, 'seat_type_id', 'id');
    }

}
