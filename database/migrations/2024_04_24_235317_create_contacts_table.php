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

        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('second_name');
            $table->string('fLast_name');
            $table->string('sLast_name');
            $table->string('id_card');
            $table->integer('age');
            $table->string('number');
            $table->string('email');
            $table->string('last_institution');
            $table->string('address');
            $table->string('father_names');
            $table->string('father_phone');
            $table->string('father_occupation');
            $table->string('mother_names');
            $table->string('mother_phone');
            $table->string('mother_occupation');
            $table->integer('level');
            $table->timestamps();
        });

       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
