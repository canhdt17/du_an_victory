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
    protected $primaryKey = 'id';
    protected $fillable = [
        'room_name',
        'cinemas_id',
    ];
    public function cinema(){
        return $this->belongsTo(Cinema::class, 'cinema_id');
    }

}
