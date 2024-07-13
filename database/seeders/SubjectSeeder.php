<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*
         Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        
        */

        DB::table('subjects')->insert([
            ['name' => 'Matemáticas'],
            ['name' => 'Física'],
            ['name' => 'Química'],
            ['name' => 'Biología'],
            ['name' => 'Historia'],
            ['name' => 'Geografía'],
            ['name' => 'Egipcio Reformado'],
            ['name' => 'Lengua y Literatura'],
            ['name' => 'Historia del Arte'],
            ['name' => 'Música'],
            ['name' => 'Educación Física'],
            ['name' => 'Tecnología']
        ]);

    }
}
