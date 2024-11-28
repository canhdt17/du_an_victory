<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    // Xác định các trường có thể mass assign
    protected $fillable = ['role', 'description'];
     // Chỉ định khóa chính là 'roles_id'
     protected $primaryKey = 'role_id';
    public function users()
    {
        return $this->hasMany(User::class, 'role_id', 'id');
    }
}

