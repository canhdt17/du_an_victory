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
        Schema::create('status_seats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('showtime_id');
            $table->foreign('showtime_id')->references('id')->on('showtimes')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('seat_id');
            $table->foreign('seat_id')->references('id')->on('seats')->onDelete('cascade')->onUpdate('cascade');
            $table->enum('status', ['Ghế trống', 'Đã đặt', 'Đang chọn'])->default('Ghế trống');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status_seats');
    }
};
