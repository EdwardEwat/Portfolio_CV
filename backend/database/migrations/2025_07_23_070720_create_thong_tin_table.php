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
        Schema::create('thong_tin', function (Blueprint $table) {
            $table->id();
            $table->string('ho',100);
            $table->string('ten',100);
            $table->string('email', 100)->unique();
            $table->string('gitHub', 100)->nullable();
            $table->string('CV', 100)->nullable();
            $table->string('soDienThoai', 15)->nullable();
            $table->string('diaChi', 255)->nullable();
            $table->date('ngaySinh')->nullable();
            $table->enum('gioiTinh', ['Male', 'Female', 'Orther'])->default('Male');
            $table->string('anhDaiDien', 255)->nullable();
            $table->string('congViec', 100)->nullable();
            $table->string('trinhDoHocVan', 100)->nullable();
            $table->text('moTa')->nullable();
            $table->boolean('trangThaiCongViec')->default(true);
            $table->timestamps();

            $table->charset = 'utf8mb4';
            $table->collation = 'utf8mb4_unicode_ci';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thong_tin');
    }
};
