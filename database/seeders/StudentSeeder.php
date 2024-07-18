<?php

namespace Database\Seeders;

use App\Models\Parents;
use App\Models\Person;
use App\Models\Student;
use App\Models\Teacher;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Student::factory(10)->create();

        

        
    }
}
