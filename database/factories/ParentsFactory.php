<?php

namespace Database\Factories;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Parents>
 */
class ParentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'person_id' =>  Person::factory(),
            'marital_status_id' => 1,
            'education_level_id' => 1,
            'profession' => $this->faker->jobTitle,
            'work_place' => $this->faker->company,
            'incomes' => 0,
            'email' => $this->faker->unique()->safeEmail,
            'status' => true,

        ];
    }
}
