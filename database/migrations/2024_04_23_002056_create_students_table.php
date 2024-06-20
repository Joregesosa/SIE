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
        Schema::create('student_status', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->string('color')->default('red-500');
            $table->boolean('status')->default(true);
        });

        Schema::create('students', function (Blueprint $table) {
            
            /*DATOS PERSONALES*/
            $table->id();
            $table->unsignedBigInteger('person_id');
            $table->foreign('person_id')->references('id')->on('people')->onDelete('cascade');
            $table->unsignedBigInteger('status_id')->default(1);
            $table->foreign('status_id')->references('id')->on('student_status')->onDelete('restrict');
            $table->unsignedBigInteger('level_id');
            $table->foreign('level_id')->references('id')->on('levels')->onDelete('restrict');
            $table->string('academic_email')->nullable();
            $table->string('address_street');
            $table->string('sector');
            $table->string('siblings')->nullable();
            $table->unsignedBigInteger('father_id')->nullable();
            $table->foreign('father_id')->references('id')->on('parents')->onDelete('set null');
            $table->unsignedBigInteger('mother_id')->nullable();
            $table->foreign('mother_id')->references('id')->on('parents')->onDelete('set null');
            $table->unsignedBigInteger('tutor_id')->nullable();
            $table->foreign('tutor_id')->references('id')->on('parents')->onDelete('set null');
            
            /*DATOS SOCIOECONÓMICOS*/
            $table->string('family_composition')->nullable();
            $table->integer('birth_order')->nullable()->default(1);
            $table->unsignedBigInteger('family_structure_id')->nullable();
            $table->foreign('family_structure_id')->references('id')->on('family_structures')->onDelete('set null');
            $table->string('disability_description')->nullable();

            /*REFERENCIAS SOCIOECONÓMICAS GENERALES*/
            $table->integer('father_incomes')->nullable()->default(0);
            $table->integer('mother_incomes')->nullable()->default(0);
            $table->integer('other_incomes')->nullable()->default(0);
            $table->integer('expenditure')->nullable()->default(0);
            $table->unsignedBigInteger('type_house_id')->nullable();
            $table->foreign('type_house_id')->references('id')->on('type_houses')->onDelete('set null');
            $table->string('living_description')->nullable();

            /*DATOS ACADÉMICOS/RENDIMIENTO ESCOLAR*/
            $table->date('entry_date')->nullable();
            $table->string('previous_institution')->nullable();
            $table->string('repeated_years')->nullable();
            $table->string('preferred_subjects')->nullable();
            $table->string('difficult_subjects')->nullable();
            $table->string('dignities')->nullable();
            $table->string('achievements')->nullable();
            $table->string('extracurriculars')->nullable();

            /*DATOS MEDICOS*/
            $table->boolean('student_disability')->default(0);
            $table->string('student_disability_details')->nullable();
            $table->boolean('medical_condition')->default(0);
            $table->string('medical_condition_details')->nullable();
            $table->boolean('allergies')->default(0);
            $table->string('allergies_details')->nullable();
            $table->string('medications')->nullable();
            $table->unsignedBigInteger('medical_attention_type_id')->nullable();
            $table->foreign('medical_attention_type_id')->references('id')->on('medical_attention_types')->onDelete('set null');
            $table->string('medical_attention_details')->nullable();
            $table->string('medical_attention_doctor')->nullable();

            /*DATOS DE NACIMIENTO*/
            $table->integer('pregnancy_mother_age')->default(0);
            $table->string('pregnancy_accidents')->nullable();
            $table->string('pregnancy_medications')->nullable();
            $table->unsignedBigInteger('pregnancy_type_id')->nullable();
            $table->foreign('pregnancy_type_id')->references('id')->on('pregnancy_types')->onDelete('set null');
            $table->string('pregnancy_difficulties')->nullable();
            $table->string('birth_weight')->nullable();
            $table->string('birth_height')->nullable();
            $table->string('walking_age')->nullable();
            $table->string('talking_age')->nullable();
            $table->string('breastfeeding_period')->nullable();
            $table->string('bottle_age')->nullable();
            $table->string('toilet_age')->nullable();
            $table->string('observations')->nullable();
            $table->unsignedBigInteger('family_medical_history')->nullable();
            $table->foreign('family_medical_history')->references('id')->on('pathological_family_histories')->onDelete('set null');

            /*RELACION INTRA FAMILIAR*/
            $table->string('father_relationship')->nullable();
            $table->string('mother_relationship')->nullable();
            $table->string('siblings_relationship')->nullable();    
            $table->string('others_relationship')->nullable();
            $table->string('habits_and_activities')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
        Schema::dropIfExists('students_status');
    }
};

