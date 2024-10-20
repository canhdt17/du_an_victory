<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id('movie_id');
            $table->string('name');
            $table->string('image')->nullable();
            $table->unsignedBigInteger('type_id');
            $table->integer('duration')->nullable();
            $table->string('nation')->nullable();
            $table->string('director')->nullable();
            $table->string('performer')->nullable();
            $table->string('show')->nullable();
            $table->text('content')->nullable();
            $table->string('link_trailer')->nullable();
            $table->unsignedBigInteger('category_id');
            $table->timestamps();

            // Foreign keys
            $table->foreign('type_id')->references('id')->on('types')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('movies');
    }
}

