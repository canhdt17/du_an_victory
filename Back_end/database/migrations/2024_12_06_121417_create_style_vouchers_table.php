<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('style_vouchers', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name_stylevoucher')->unique(); // Tên style voucher, duy nhất
            $table->timestamps(); // Thêm created_at và updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('style_vouchers');
    }
};

