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
        Schema::create('scores', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('students')->onDelete('restrict');
            $table->unsignedBigInteger('subject_id');
            $table->foreign('subject_id')->references('id')->on('subjects')->onDelete('restrict');
            $table->unsignedBigInteger('level_id');
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('restrict');
            $table->unsignedBigInteger('elective_year_id');
            $table->foreign('elective_year_id')->references('id')->on('elective_years')->onDelete('restrict');
            $table->string('score');
            $table->string('comment')->nullable();
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
        
        Schema::create('score_qualifiers', function (Blueprint $table) {
            $table->id();
            $table->float('min');
            $table->float('max');
            $table->string('qualifier');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scores');
        Schema::dropIfExists('score_qualifiers');
    }
};
