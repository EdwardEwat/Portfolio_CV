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
        Schema::create('mon_hoc', function (Blueprint $table) {
            $table->id();
            $table->string('maMonHoc', 50)->unique();
            $table->string('tenMonHoc', 100);
            $table->integer('soTinChi')->default(0);
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
        Schema::dropIfExists('mon_hoc');
    }
};
