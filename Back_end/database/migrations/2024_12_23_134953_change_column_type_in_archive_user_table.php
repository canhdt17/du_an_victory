<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnTypeInArchiveUserTable extends Migration
{
    public function up()
    {
        Schema::table('archive_user', function (Blueprint $table) {
            // Xóa cột hiện tại
            $table->dropColumn('status');
        });

        Schema::table('archive_user', function (Blueprint $table) {
            // Thêm cột mới với kiểu enum
            $table->enum('status', ['On', 'Off'])->default('On');
        });
    }

    public function down()
    {
        Schema::table('archive_user', function (Blueprint $table) {
            // Xóa cột hiện tại
            $table->dropColumn('status');
        });

        Schema::table('archive_user', function (Blueprint $table) {
            // Thêm lại cột với kiểu boolean
            $table->boolean('status')->default(0);
        });
    }
}
