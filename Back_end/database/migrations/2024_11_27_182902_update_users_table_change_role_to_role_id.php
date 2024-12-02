<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Xoá cột role_id nếu đã tồn tại
           
                $table->dropColumn('role');
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Đổi lại tên cột role_id về role
           
            // Khôi phục kiểu dữ liệu role về enum
            $table->enum('role', ['admin', 'user'])->default('user')->change();
        });
    }
};
