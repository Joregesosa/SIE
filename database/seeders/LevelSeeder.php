<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Level;
use App\Models\Group;
use App\Models\Teacher;


class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $level = [
            ['Primero de EGB',' Primer Año de Educación Básica (1° EGB)'],
            ['Segundo de EGB',' Segundo Año de Educación Básica (2° EGB)'],
            ['Tercero de EGB',' Tercer Año de Educación Básica (3° EGB)'],
            ['Cuarto de EGB',' Cuarto Año de Educación Básica (4° EGB)'],
            ['Quinto de EGB',' Quinto Año de Educación Básica (5° EGB)'],
            ['Sexto de EGB',' Sexto Año de Educación Básica (6° EGB)'],
            ['Séptimo de EGB',' Séptimo Año de Educación Básica (7° EGB)'],
            ['Octavo de EGB',' Octavo Año de Educación Básica (8° EGB)'],
            ['Noveno de EGB',' Noveno Año de Educación Básica (9° EGB)'],
            ['Décimo de EGB',' Décimo Año de Educación Básica (10° EGB)'],
            ['Primero de BGU',' Primer Año de Bachillerato General (1° BGU)'],
            ['Segundo de BGU',' Segundo Año de Bachillerato General (2° BGU)'],
            ['Tercero de BGU',' Tercer Año de Bachillerato General (3° BGU)']];

        foreach ($level as $level) {
            Level::create([
                'name' => $level[0],
                'description' => $level[1],
                'price' => collect([100,200,300,400,500,600,700,800,900,1000])->random(),
                'enrollment_fee' => collect([10,20,30,40,50,60,70,80,90,100])->random(),
                'duration' => collect([1,2,3,4,5,6,7,8,9,10,11,12])->random(),
                'status' => true,
            ]);
        }
        
        foreach (range(1, 13) as $index) {
            Group::create([
                'name' => 'Grupo A',
                'level_id' => $index,
                'max_students' => collect([15,20,25,30,35])->random(),
                'teacher_id' => Teacher::all()->random()->id,
                'status' => true,
            ]);
        }

    }
}
