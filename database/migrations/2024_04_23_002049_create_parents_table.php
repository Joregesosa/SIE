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
        Schema::create('marital_status', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->boolean('status')->default(true);
        });

        /*NIVELES DE EDUCACION*/
        Schema::create('education_levels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->boolean('status')->default(true);
        });

        /*TIPOS DE FAMILIARES*/
        Schema::create('parent_types', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->string('description');
            $table->boolean('status')->default(true);
        });

        /*DATOS DE LOS PADRES*/
        Schema::create('parents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('person_id');
            $table->foreign('person_id')->references('id')->on('people')->onDelete('cascade');
            $table->unsignedBigInteger('marital_status_id')->nullable();
            $table->foreign('marital_status_id')->references('id')->on('marital_status')->onDelete('set null');
            $table->unsignedBigInteger('education_level_id')->nullable();
            $table->foreign('education_level_id')->references('id')->on('education_levels')->onDelete('set null');
            $table->string('profession');
            $table->string('work_place');
            $table->integer('incomes')->default(0);
            $table->string('email')->unique();
            $table->boolean('status')->default(true);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parents');
        Schema::dropIfExists('parent_types');
        Schema::dropIfExists('education_levels');
        Schema::dropIfExists('marital_status');
        
    }
};
