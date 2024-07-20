<?php

namespace Database\Factories;

use App\Models\Level;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Level>
 */
class LevelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'name' => $this->faker->name,
            'description' => $this->faker->text,
            'price' => collect([100,200,300,400,500,600,700,800,900,1000])->random(),
            'enrollment_fee' => collect([10,20,30,40,50,60,70,80,90,100])->random(),
            'duration' => collect([1,2,3,4,5,6,7,8,9,10,11,12])->random(),
            'teacher_multiplied' => false,
            'status' => true,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Level $level) {

              $level->subjects()->attach(Subject::all()->random(5)->pluck('id')->toArray(),[ 'elective_year_id' => 1,
              'teacher_id' => Teacher::inRandomOrder()->first()->id]);
        });
    }
}
