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
    {   /*TIPOS DE TELEFONOS*/    
        Schema::create('phone_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('status')->default(1);
            $table->timestamps();

        });

        /*TIPOS DE ESTRUCTURAS FAMILIARES*/
        Schema::create('family_structures', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        /*TIPOS DE VIVIENDAS*/
        Schema::create('type_houses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        /*TIPOS DE ATENCIÓN MÉDICA*/
        Schema::create('medical_attention_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        /*TIPOS DE EMBARAZO*/
        Schema::create('pregnancy_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        /*ANTECEDENTES PATOLÓGICOS FAMILIARES*/
        Schema::create('pathological_family_histories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        //falta la 32

        Schema::create('people', function (Blueprint $table) {
            /*DATOS DE IDENTIFICACIÓN*/
            $table->id();
            $table->string('first_name');
            $table->string('second_name');
            $table->string('fLast_name');
            $table->string('sLast_name');
            $table->date('birth_date');
            $table->string('birth_place')->nullable();
            $table->string('id_card')->unique()->nullable();
            $table->boolean('status')->default(1);
            $table->timestamps();            
        });

         /*TELEFONOS*/
         Schema::create('phones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('person_id');
            $table->foreign('person_id')->references('id')->on('people')->onDelete('cascade');
            $table->string('phone');
            $table->unsignedBigInteger('phone_type_id')->default(1);
            $table->foreign('phone_type_id')->references('id')->on('phone_types')->onDelete('restrict');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phones');
        Schema::dropIfExists('people');
        Schema::dropIfExists('pathological_family_histories');
        Schema::dropIfExists('pregnancy_types');
        Schema::dropIfExists('medical_attention_types');
        Schema::dropIfExists('type_houses');
        Schema::dropIfExists('family_structures');
        Schema::dropIfExists('phone_types');
        
    }
};
