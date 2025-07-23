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
            $table->string('hoTen',100);
            $table->string('email', 100)->unique();
            $table->string('gitHub', 100)->nullable();
            $table->string('soDienThoai', 15)->nullable();
            $table->string('diaChi', 255)->nullable();
            $table->date('ngaySinh')->nullable();
            $table->enum('gioiTinh', ['Nam', 'Nữ', 'Khác'])->default('Nam');
            $table->string('anhDaiDien', 255)->nullable();
            $table->string('congViec', 100)->nullable();
            $table->string('trinhDoHocVan', 100)->nullable();
            $table->text('moTa')->nullable();
            $table->boolean('trangThaiCongViec')->default(true);
            $table->timestamps();
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
