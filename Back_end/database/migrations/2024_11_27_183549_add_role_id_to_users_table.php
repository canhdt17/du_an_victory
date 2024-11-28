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
             // Thêm cột role_id
             $table->unsignedBigInteger('role_id')->nullable()->after('id');

             // Thêm khóa ngoại role_id liên kết với bảng roles
             $table->foreign('role_id')->references('role_id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
             // Xóa khóa ngoại role_id
             $table->dropForeign(['role_id']);

             // Xóa cột role_id
             $table->dropColumn('role_id');
        });
    }
};
