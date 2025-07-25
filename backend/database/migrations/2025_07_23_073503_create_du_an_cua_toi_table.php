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
        Schema::create('du_an_cua_toi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('thongTinId')->constrained('thong_tin')->onDelete('cascade');
            $table->string('tenDuAn', 255);
            $table->date('ngayBatDau');
            $table->date('ngayKetThuc')->nullable();
            $table->string('gitHub', 100)->nullable();
            $table->integer('soThanhVien')->default(1)->min(1);
            $table->string('viTri', 100)->nullable();
            $table->string('moTa', 255)->nullable();
            $table->enum('trangThai', ['Done', 'On Process', 'Canceled'])->default('Done');
            $table->string('frontend', 255)->nullable();
            $table->string('backend', 255)->nullable();
            $table->string('mobile', 255)->nullable();
            $table->string('library',255)->nullable();
            $table->string('database', 255)->nullable();
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
        Schema::dropIfExists('du_an_cua_toi');
    }
};
