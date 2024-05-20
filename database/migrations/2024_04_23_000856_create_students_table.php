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
        Schema::create('students', function (Blueprint $table) {
            
            /*DATOS PERSONALES*/
            $table->id();
            $table->unsignedBigInteger('people_id');
            $table->foreign('people_id')->references('id')->on('people')->onDelete('cascade');
            $table->string('address');
            $table->string('sector');
            $table->string('brothers');

            /*DATOS SOCIOECONÓMICOS*/
            $table->integer('position_family')->nullable()->default(1);
            $table->unsignedBigInteger('family_structure_id')->nullable();
            $table->foreign('family_structure_id')->references('id')->on('family_structures')->onDelete('set null');
            $table->boolean('disability_in_family')->default(0);
            $table->string('disability_description')->nullable();

            /*REFERENCIAS SOCIOECONÓMICAS GENERALES*/
            $table->integer('other_income')->nullable()->default(0);
            $table->integer('expenditure')->nullable()->default(0);
            $table->unsignedBigInteger('type_house_id')->nullable();
            $table->foreign('type_house_id')->references('id')->on('type_houses')->onDelete('set null');
            $table->string('house_description')->nullable();

            /*DATOS ACADÉMICOS/RENDIMIENTO ESCOLAR*/
            $table->date('date_first_entry')->nullable();
            $table->string('institution_origin')->nullable();
            $table->string('repeated_years')->nullable();
            $table->string('preferred_subjects')->nullable();
            $table->string('difficult_subjects')->nullable();
            $table->string('achieved_dignities')->nullable();
            $table->string('academic_achievements')->nullable();
            $table->string('participation')->nullable();
            $table->string('extracurricular')->nullable();

            /*DATOS MEDICOS*/
            $table->boolean('disability_condition')->default(0);
            $table->string('disability_condition_description')->nullable();
            $table->string('disability_percentage')->nullable();
            $table->string('disability_carnet')->nullable();
            $table->boolean('medical_condition')->default(0);
            $table->string('medical_condition_description')->nullable();
            $table->boolean('allergies')->default(0);
            $table->string('allergies_description')->nullable();
            $table->string('medicines')->nullable();
            $table->unsignedBigInteger('medical_attention_type_id')->nullable();
            $table->foreign('medical_attention_type_id')->references('id')->on('medical_attention_types')->onDelete('set null');
            $table->string('medical_attention_name')->nullable();
            $table->string('medical_attention_address')->nullable();
            $table->string('medical_attention_doctor')->nullable();

            /*DATOS DE NACIMIENTO*/
            $table->integer('pregnancy_mother_age')->default(0);
            $table->string('pregnancy_accidents')->nullable();
            $table->string('pregnancy_medicines')->nullable();
            $table->unsignedBigInteger('pregnancy_type_id')->nullable();
            $table->foreign('pregnancy_type_id')->references('id')->on('pregnancy_types')->onDelete('set null');
            $table->string('pregnancy_difficulties')->nullable();
            $table->string('birth_weight')->nullable();
            $table->string('birth_height')->nullable();
            $table->string('age_walk')->nullable();
            $table->string('age_talk')->nullable();
            $table->string('breastfeeding_period')->nullable();
            $table->string('bottle_age')->nullable();
            $table->string('age_control_sphincters')->nullable();
            $table->string('observations')->nullable();
            $table->unsignedBigInteger('pathological_family_history_id')->nullable();
            $table->foreign('pathological_family_history_id')->references('id')->on('pathological_family_histories')->onDelete('set null');

            /*RELACION INTRA FAMILIAR*/
            $table->string('father_relationship')->nullable();
            $table->string('mother_relationship')->nullable();
            $table->string('siblings_relationship')->nullable();    
            $table->string('others_relationship')->nullable();
            $table->string('customs_habits')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
