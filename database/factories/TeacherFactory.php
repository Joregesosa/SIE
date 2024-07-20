<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Person;
use App\Models\Teacher;
use App\Models\User;

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
            'person_id' => Person::factory(),
            'profession' => 'Maestro',
            'work_place' => 'Colegio de la Ciudad',
            'email' => $this->faker->unique()->safeEmail,
            'status' => true,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Teacher $teacher) {
            User::factory()->create([
                'person_id' => $teacher->person_id,
                'role_id' => 2,
            ]);
        });
    }

}
