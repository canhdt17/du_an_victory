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
        Schema::create('donate_combofoods', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('combofood_id');
            $table->foreign('combofood_id')->references('combofood_id')->on('combo_foods')->onDelete('cascade');
            $table->decimal('price_sale', 10, 2);
            $table->date('date_last_sale');
            $table->enum('status', ['Hoạt động', 'Không hoạt động'])->default('Hoạt động');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donate_combofoods');
    }
};
