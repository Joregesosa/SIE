<?php

namespace Database\Seeders;

use App\Models\Parents;
use App\Models\Person;
use App\Models\Student;
use App\Models\Teacher;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Person::factory()->create([
            'first_name' => 'Jorge',
            'second_name' => 'L',
            'fLast_name' => 'Sosa',
            'sLast_name' => 'Nunez',
            'birth_date' => '1990-01-01',
            'birth_place' => 'Bogotá',
            'id_card' => '123456789',
        ]);


        Teacher::factory(4)->create(); 

        Parents::factory(4)->create();
        

        
    }
}
