<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Person>
 */
class PersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'first_name' => $this->faker->name(),
            'second_name' => $this->faker->name(),
            'fLast_name' => $this->faker->name(),
            'sLast_name' => $this->faker->name(),
            'birth_date' => $this->faker->date(),
            'birth_place' => $this->faker->name(),
            'id_card' => $this->faker->unique()->name(),
        ];
        
        
    }
}
