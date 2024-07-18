<?php

namespace Database\Seeders;

use App\Models\ElectiveYear;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ElectiveYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ElectiveYear::factory()->create([
            'name' => 'Año 2024-2025',
            'status' => true,
        ]);
           

    }
}
