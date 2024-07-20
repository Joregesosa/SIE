<?php

namespace Database\Factories;

use App\Models\Rol;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
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
            'role_id' => 1,
            'email' => strtolower($this->faker->lexify('??')) . '.'.fake()->unique()->userName() . '@trc.edu.ec',
            'email_verified_at' => now(),
            'password' => "admin",
            'remember_token' => Str::random(10),
        ];
        
      
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
