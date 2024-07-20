<?php

namespace Database\Factories;

use App\Models\Person;
use App\Models\Phone;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

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
            'first_name' => $this->faker->firstName(),
            'second_name' => $this->faker->firstName(),
            'fLast_name' => $this->faker->lastName(),
            'sLast_name' => $this->faker->lastName(),
            'birth_date' => $this->faker->date(),
            'birth_place' => $this->faker->state(),
            'id_card' => $this->faker->unique()->randomNumber(9) . '-' . $this->faker->randomDigit,
        ];
        
        
    }

    public function configure()
    {
        return $this->afterCreating(function (Person $person) {
           Phone::factory()->create([
               'person_id' => $person->id,
           ]);
        });
    }

}
