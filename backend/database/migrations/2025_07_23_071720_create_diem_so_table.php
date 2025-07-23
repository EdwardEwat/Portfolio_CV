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
        Schema::create('diem_so', function (Blueprint $table) {
            $table->id();
            $table->foreignId('thongTinId')->constrained('thong_tin')->onDelete('cascade');
            $table->foreignId('monHocId')->constrained('mon_hoc')->onDelete('cascade');
            $table->integer('hocKy')->default(1);
            $table->float('diemSo')->default(0)->range(0, 10);
            $table->enum('diemChu', ['A', 'B', 'C', 'D', 'F'])->default('A');
            $table->string('ghiChu', 255)->nullable();
            $table->string('trangThai', 50)->default('Hoan thanh');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('diem_so');
    }
};
