<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComboFood extends Model
{
    use HasFactory;
    protected $table = 'combo_foods';
    protected $primaryKey = 'combofood_id';

    protected $fillable = ['combofood_name', 'combofood_price'];
}
