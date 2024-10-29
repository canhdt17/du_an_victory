<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Room extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $primaryKey = 'room_id';
    protected $fillable = [
        'room_name',
        'total_seat',
        'area_id',
    ];

    public function area(): BelongsTo
    {
        return $this->belongsTo(Area::class, 'area_id');
    }
}
