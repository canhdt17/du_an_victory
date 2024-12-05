<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TinTuc extends Model
{
    use HasFactory;

    protected $table = 'tin_tucs';

    // Danh sách các trường có thể được gán hàng loạt
    protected $fillable = [
        'name_TinTuc',
        'sub_title',
        'content',
        'imager',
    ];
}

