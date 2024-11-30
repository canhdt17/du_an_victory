<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class movie extends Model
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
    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function showtimes()
    {
        return $this->hasMany(Showtime::class, 'movie_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'movie_id');
    }
    public function dangChieu($query)
    {
        return $query->whereHas('showtimes', function ($q) {
            $q->whereDate('showtime_date', '>=', Carbon::today()->toDateString());
        })->where('show', '<=', Carbon::today()->toDateString());
    }
    public function sapChieu($query)
    {
        return $query->whereHas('showtimes', function ($q) {
            $q->whereDate('showtime_date', '>', Carbon::today()->toDateString());
        })->where('show', '>', Carbon::today()->toDateString());
    }
 }
