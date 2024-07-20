<?php

namespace Database\Seeders;

use App\Models\ScoreQualifiers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ScoreQualifiersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $qualifiers = [
            ['min' => 0, 'max' => 64, 'qualifier' => 'F'],
            ['min' => 65, 'max' => 66, 'qualifier' => 'D'],
            ['min' => 67, 'max' => 69, 'qualifier' => 'D+'],
            ['min' => 70, 'max' => 72, 'qualifier' => 'C-'],
            ['min' => 73, 'max' => 76, 'qualifier' => 'C'],
            ['min' => 77, 'max' => 79, 'qualifier' => 'C+'],
            ['min' => 80, 'max' => 82, 'qualifier' => 'B-'],
            ['min' => 83, 'max' => 86, 'qualifier' => 'B'],
            ['min' => 87, 'max' => 89, 'qualifier' => 'B+'],
            ['min' => 90, 'max' => 92, 'qualifier' => 'A-'],
            ['min' => 93, 'max' => 99, 'qualifier' => 'A'],
            ['min' => 100, 'max' => 100, 'qualifier' => 'A+'],
        ];

        DB::table('score_qualifiers')->insert($qualifiers);
    }
}
