<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        User::factory()->create([

            'firstName' => "Jorge",
            'secondName' => "L",
            'fLastName' => "Sosa",
            'sLastName' => "Nunez",
            'userName' => "jorge.sosa",
            'email' => "joregesosa@gmail.com",
            'email_verified_at' => now(),
            'password' => "admin", 
  
        ]);
  
    }
}
