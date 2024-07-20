<?php

namespace Database\Seeders;

use App\Models\Parents;
use App\Models\Person;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
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

        User::factory()->create([
            'person_id' => 1,
            'role_id' => 1, 
            'email' => "joregesosa@gmail.com",
            'email_verified_at' => now(),
            'password' => "admin", 
        ]);

        Teacher::factory(4)->create(); 

        Parents::factory(4)->create();
        

        
    }
}
