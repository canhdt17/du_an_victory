<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Movie extends Model
{
    use HasFactory;
    use SoftDeletes; // Dung de xoa mem
    protected $fillable = [
        'name_movie',
        'image',
        'type_id',
        'duration',
        'nation',
        'director',
        'performer',
        'show',
        'content',
        'link_trailler',
        'category_id',
    ];
}