<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('booking_details', function (Blueprint $table) {
            $table->id('booking_detail_id');
            $table->unsignedBigInteger('booking_id');
            $table->unsignedBigInteger('seat_id');
            $table->unsignedBigInteger('combofood_id');
            $table->decimal('total_price', 10, 2);
            $table->timestamps();

            $table->foreign('booking_id')->references('booking_id')->on('bookings')->onDelete('cascade');
            $table->foreign('seat_id')->references('id')->on('seats')->onDelete('cascade');
            $table->foreign('combofood_id')->references('combofood_id')->on('combo_foods')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('booking_details');
    }
};
