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

        Schema::create('elective_years', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        Schema::create('systems', function (Blueprint $table) {
            $table->id();
            //datos
            $table->string('school_name'); //nombre de la escuela
            $table->string('school_address'); //direccion de la escuela
            $table->string('contact_email'); //correo de contacto
            $table->string('contact_email2'); //correo de contacto 2
            $table->string('phone_number'); //numero de telefono
            $table->string('phone_number2'); //numero de telefono 2
            $table->time('school_start_time'); //hora de inicio de clases
            $table->time('school_end_time'); //hora de fin de clases
            $table->string('school_slogan'); //eslogan de la escuela
            $table->string('school_motto'); //lema de la escuela
            $table->string('principal_name'); //nombre del director

            //configuracion
            $table->integer('current_academic_year'); //año academico actual

            $table->timestamps();
        });

       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('elective_years');
        Schema::dropIfExists('systems');
    }
};
