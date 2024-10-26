<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class movie extends Model
{
    // Define the table name (if it's not the plural of the model name)
    protected $table = 'movies';

    // Define the primary key if it's not 'id'
    protected $primaryKey = 'movie_id';

    // Specify which attributes are mass assignable
    protected $fillable = [
        'name', 'image', 'type_id', 'duration', 'nation', 'director',
        'performer', 'show', 'content', 'link_trailer', 'category_id'
    ];

    // Define the relationship to Type
    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    // Define the relationship to Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

