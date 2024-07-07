<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Group>
 */
class GroupFactory extends Factory
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
            'level_id' => $this->faker->randomDigitNotNull,
            'max_students' => $this->faker->randomDigitNotNull,
            'teacher_id' => $this->faker->randomDigitNotNull,
            'status' => $this->faker->boolean,
        ];
    }
}
