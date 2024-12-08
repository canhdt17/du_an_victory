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
    Schema::create('archive_user', function (Blueprint $table) {
        $table->id(); // Primary Key
        $table->unsignedBigInteger('user_id'); // Foreign Key
        $table->unsignedBigInteger('voucher_id'); // Foreign Key
        $table->boolean('status')->default(0); // Status
        $table->timestamps(); // Created_at và Updated_at

        // Định nghĩa khóa ngoại
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        $table->foreign('voucher_id')->references('id')->on('vouchers')->onDelete('cascade');
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('archive_user');
    }
};
