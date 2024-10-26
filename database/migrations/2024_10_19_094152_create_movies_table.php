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
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('name_movie');
            $table->string('image');
            $table->unsignedBigInteger('type_id');
            $table->foreign('type_id')->references('id')->on('types')->onDelete('cascade')->onUpdate('cascade');
            $table->string('duration');
            $table->string('nation');
            $table->string('director');
            $table->string('performer');
            $table->string('show');
            $table->string('content');
            $table->string('link_trailler');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade')->onUpdate('cascade');   
            $table->softDeletes(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
