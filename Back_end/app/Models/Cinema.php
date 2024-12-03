<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cinema extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = ['cinemas_name', 'base_id'];
    public function base():BelongsTo
    {
        return $this->belongsTo(Base::class,'base_id');
    }
}
