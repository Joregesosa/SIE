<?php

namespace Database\Seeders;

use App\Models\Person;
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

        
    }
}
