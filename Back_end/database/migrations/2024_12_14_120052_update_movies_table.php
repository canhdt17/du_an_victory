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
        // Kiểm tra xem cột 'image' đã tồn tại chưa, nếu có thì chỉ thay đổi kiểu dữ liệu
        Schema::table('movies', function (Blueprint $table) {
            if (!Schema::hasColumn('movies', 'image')) {
                // Nếu chưa có cột 'image', thêm vào
                $table->string('image');
            } else {
                // Nếu đã có cột 'image', chỉ thay đổi kiểu dữ liệu
                $table->text('image')->change();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('movies', function (Blueprint $table) {
            // Trong trường hợp rollback, chúng ta khôi phục lại kiểu cột ban đầu
            $table->string('image')->change();
        });
    }
};
