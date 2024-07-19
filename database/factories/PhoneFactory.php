<?php

namespace Database\Factories;

use App\Models\Phone;
use App\Models\PhoneType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Phone>
 */
class PhoneFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'person_id' => 1,
            'phone' => $this->faker->numerify('(###) ###-####'),
            'phone_type_id' => PhoneType::all()->random()->id,
            'status' => 1,
        ];
    }
}
