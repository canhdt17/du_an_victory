<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArchiveUser extends Model
{
    use HasFactory;

    protected $table = 'archive_user';

    protected $fillable = [
        'user_id',
        'voucher_id',
        'status',
    ];

    // Quan hệ với User
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Quan hệ với Voucher
    public function voucher()
    {
        return $this->belongsTo(Voucher::class, 'voucher_id');
    }
}
