<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'person_id' => 1,
            'user_name' => 'jorge.sosa',
            'role_id' => 1, 
            'email' => "joregesosa@gmail.com",
            'email_verified_at' => now(),
            'password' => "admin", 
        ]);
            
    }
}
