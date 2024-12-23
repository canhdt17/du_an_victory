<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PointUser extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'point_users';

    protected $fillable = [
        'user_id',
        'point_user',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
