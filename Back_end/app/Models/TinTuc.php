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
        'slug',
    ];

    // Thiết lập sự kiện boot để tạo và cập nhật slug từ title
    protected static function boot()
    {
        parent::boot();

        // Tự động tạo slug khi tạo mới bản ghi
        static::creating(function ($tinTuc) {
            $tinTuc->slug = Str::slug($tinTuc->name_TinTuc);
        });

        // Tự động cập nhật slug khi title thay đổi
        static::updating(function ($tinTuc) {
            if ($tinTuc->isDirty('name_TinTuc')) {
                $tinTuc->slug = Str::slug($tinTuc->name_TinTuc);
            }
        });
    }
}

