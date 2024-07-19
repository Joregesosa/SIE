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
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->float('price', 8, 2);
            $table->float('enrollment_fee', 8, 2);
            $table->integer('duration');
            $table->boolean('teacher_multiplied')->default(false);
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('level_id');
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('restrict');
            $table->integer('max_students');
            $table->unsignedBigInteger('teacher_id')->nullable();
            $table->foreign('teacher_id')->references('id')->on('teachers')->onDelete('set null');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('level_subject', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('level_id');
            $table->unsignedBigInteger('subject_id');
            $table->unsignedBigInteger('elective_year_id');
            $table->unsignedBigInteger('teacher_id');
            $table->timestamps();

            // Definición de las claves foráneas
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('restrict');
            $table->foreign('subject_id')->references('id')->on('subjects')->onDelete('restrict');
            $table->foreign('elective_year_id')->references('id')->on('elective_years')->onDelete('restrict');
            $table->foreign('teacher_id')->references('id')->on('teachers')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
        Schema::dropIfExists('groups');
        Schema::dropIfExists('subjects');
        Schema::dropIfExists('level_subject');
    }
};
