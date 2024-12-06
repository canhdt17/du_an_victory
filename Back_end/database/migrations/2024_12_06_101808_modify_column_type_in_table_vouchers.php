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
        Schema::table('vouchers', function (Blueprint $table) {
            // Xóa cột cũ và thêm lại cột mới với kiểu enum
            $table->dropColumn('status');
        });

        Schema::table('vouchers', function (Blueprint $table) {
            $table->enum('status', ['Đã sử dùng', 'Chưa sử dùng'])
                  ->default('Chưa sử dùng')
                  ->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vouchers', function (Blueprint $table) {
            // Xóa cột enum và thêm lại cột với kiểu integer
            $table->dropColumn('status');
        });

        Schema::table('vouchers', function (Blueprint $table) {
            $table->integer('status')->nullable();
        });
    }
};
