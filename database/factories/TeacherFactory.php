<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Person;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

     
        return [
                //persona que existe en la tabla personas
            'person_id' => Person::whereNotIn('id', [1])->inRandomOrder()->first()->id,
            'profession' => 'Maestro',
            'work_place' => 'Colegio de la Ciudad',
            'email' => $this->faker->unique()->safeEmail,
            'status' => true,

        ];
    }
}
