<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonateCombofood extends Model
{
    use HasFactory;
    protected $fillable = [
        'combofood_id',
        'price_sale',
        'date_last_sale',
        'status',
    ];
    public function combofood()
    {
        return $this->belongsTo(ComboFood::class, 'combofood_id');
    }
}
