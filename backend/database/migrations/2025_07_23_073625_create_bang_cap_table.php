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
            $table->enum('loaiBangCap', ['Certificate', 'Degree'])->default('Degree');
            $table->string('noiCap', 255)->nullable();
            $table->string('moTa', 255)->nullable();
            $table->timestamps();

            $table->charset = 'utf8';
            $table->collation = 'utf8_unicode_ci';
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
