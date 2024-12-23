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
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->text('name_voucher');
            $table->text('image'); // Thêm cột mới
            $table->string('code');
            $table->decimal('discount_amount', 10, 2);
            $table->date('expiry_date');
            $table->enum('status', ['On', 'Off'])
                  ->default('On');
            $table->unsignedBigInteger('style_voucher_id');
            $table->foreign('style_voucher_id')->references('id')->on('style_vouchers')->onDelete('cascade')->onUpdate('cascade');
            $table->softDeletes(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vouchers');
    }
};
