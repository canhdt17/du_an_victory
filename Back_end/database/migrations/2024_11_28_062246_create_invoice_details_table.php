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
        Schema::create('invoice_details', function (Blueprint $table) {
            $table->id();
            $table->date('time_date');
            $table->unsignedBigInteger('invoice_id');
            $table->foreign('invoice_id')->references('id')->on('invoices')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedBigInteger('seat_id');
            $table->foreign('seat_id')->references('id')->on('seats')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('total_price');
            $table->softDeletes(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoice_details');
    }
};
