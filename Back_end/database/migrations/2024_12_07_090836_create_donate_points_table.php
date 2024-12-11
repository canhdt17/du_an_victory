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
        Schema::create('donate_points', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('seat_type_id');
            $table->integer('bonus_points');
            $table->date('date_last_sale');
            $table->enum('status', ['on', 'off'])->default('on');
            $table->timestamps();
            $table->foreign('seat_type_id')->references('id')->on('seat_types')->onDelete('cascade');
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('donate_points');
    }

};
