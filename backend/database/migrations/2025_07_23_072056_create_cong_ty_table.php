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
        Schema::create('cong_ty', function (Blueprint $table) {
            $table->id();
            $table->string('tenCongTy', 255)->unique();
            $table->string('diaChi', 255)->nullable();
            $table->date('ngayBatDau');
            $table->date('ngayKetThuc')->nullable();
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cong_ty');
    }
};
