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
        Schema::create('bang_cap', function (Blueprint $table) {
            $table->id();
            $table->foreignId('thongTinId')->constrained('thong_tin')->onDelete('cascade');
            $table->string('tenBangCap', 100);
            $table->date('ngayCap');
            $table->date('ngayHetHan')->nullable();
            $table->enum('loaiBangCap', ['Chung chi', 'Bang tot nghiep'])->default('Bang tot nghiep');
            $table->string('noiCap', 255)->nullable();
            $table->string('moTa', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bang_cap');
    }
};
