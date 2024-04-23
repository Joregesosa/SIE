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
        /*ESTADOS CIVILES*/
        Schema::create('marital_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->timestamps();
        });

        /*NIVELES DE EDUCACION*/
        Schema::create('education_levels', function (Blueprint $table) {
            $table->id();
            $table->string('level');
            $table->timestamps();
        });

        /*TIPOS DE FAMILIARES*/
        Schema::create('parent_types', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->timestamps();
        });

        /*DATOS DE LOS PADRES*/
        Schema::create('parents', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('secondName');
            $table->string('fLastName');
            $table->string('sLastName');
            $table->integer('age');
            $table->unsignedBigInteger('marital_status_id')->nullable();
            $table->foreign('marital_status_id')->references('id')->on('marital_statuses')->onDelete('set null');
            $table->unsignedBigInteger('education_level_id')->nullable();
            $table->foreign('education_level_id')->references('id')->on('education_levels')->onDelete('set null');
            $table->string('ocupation');
            $table->string('workPlace');
            $table->integer('income');
            $table->string('email')->unique();
            $table->timestamps();
        });

        /*RELACION PADRES*/
        Schema::create('student_parent', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('people')->onDelete('cascade');
            $table->unsignedBigInteger('parent_id');
            $table->foreign('parent_id')->references('id')->on('parents')->onDelete('cascade');
            $table->unsignedBigInteger('parent_type_id')->nullable();
            $table->foreign('parent_type_id')->references('id')->on('parent_types')->onDelete('set null');
            $table->timestamps();
        });

        /*RELACION HERMANOS*/
        Schema::create('student_siblings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_id');
            $table->foreign('student_id')->references('id')->on('people')->onDelete('cascade');
            $table->unsignedBigInteger('sibling_id');
            $table->foreign('sibling_id')->references('id')->on('people')->onDelete('cascade');
            $table->unsignedBigInteger('parent_type_id')->nullable();
            $table->foreign('parent_type_id')->references('id')->on('parent_types')->onDelete('set null');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parents');
        Schema::dropIfExists('student_parent');
        Schema::dropIfExists('student_siblings');
        Schema::dropIfExists('parent_types');
        Schema::dropIfExists('education_levels');
        Schema::dropIfExists('marital_statuses');
        
    }
};
