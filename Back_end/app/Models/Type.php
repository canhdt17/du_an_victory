<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{

    // Define the table name (if it's not the plural of the model name)
    protected $table = 'types';

    // Specify which attributes are mass assignable
    protected $fillable = ['name_type'];

    // Define the relationship to Movie
    public function movies()
    {
        return $this->hasMany(Movie::class, 'type_id');
    }
    use HasFactory;
}

   


