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
        Schema::create('cong_viec', function (Blueprint $table) {
            $table->id();
            $table->foreignId('thongTinId')->constrained('thong_tin')->onDelete('cascade');
            $table->foreignId('congTyId')->constrained('cong_ty')->onDelete('cascade');
            $table->string('tenCongViec', 100);
            $table->date('ngayBatDau');
            $table->date('ngayKetThuc')->nullable();
            $table->enum('trangThai', ['Done', 'On Process', 'Canceled'])->default('Done');
            $table->string('moTa', 255)->nullable();
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
        Schema::dropIfExists('cong_viec');
    }
};
