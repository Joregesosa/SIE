<?php

namespace Database\Factories;

use App\Models\Person;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
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
            'matricula' => $this->faker->unique()->randomNumber(8),
            'status_id' => 2,
            'level_id' => 1,
            'group_id' => 1,
            'address_street' => $this->faker->streetAddress,
            'sector' => $this->faker->city,
            'siblings' => $this->faker->name,
            'father_id' => 1,
            'mother_id' => 2,
            'tutor_id' => 3,
            'family_composition' => $this->faker->name,
            'birth_order' => 1,
            'family_structure_id' => 1,
            'disability_description' => $this->faker->text,
            'other_incomes' => 0,
            'expenditure' => 0,
            'type_house_id' => 1,
            'living_description' => $this->faker->text,
            'entry_date' => $this->faker->date,
            'previous_institution' => $this->faker->company,
            'repeated_years' => $this->faker->randomDigit,
            'preferred_subjects' => $this->faker->text,
            'difficult_subjects' => $this->faker->text,
            'dignities' => $this->faker->text,
            'achievements' => $this->faker->text,
            'extracurriculars' => $this->faker->text,
            'student_disability' => 0,
            'student_disability_details' => $this->faker->text,
            'medical_condition' => 0,
            'medical_condition_details' => $this->faker->text,
            'allergies' => 0,
            'allergies_details' => $this->faker->text,
            'medications' => $this->faker->text,
            'medical_attention_type_id' => 1,
            'medical_attention_details' => $this->faker->text,
            'medical_attention_doctor' => $this->faker->name,
            'pregnancy_mother_age' => 0,

            'pregnancy_accidents' => $this->faker->text,
            'pregnancy_medications' => $this->faker->text,
            'pregnancy_type_id' => 1,
            'pregnancy_difficulties' => $this->faker->text,
            'birth_weight' => $this->faker->randomDigit,
            'birth_height' => $this->faker->randomDigit,
            'walking_age' => $this->faker->randomDigit,
            'talking_age' => $this->faker->randomDigit,
            'breastfeeding_period' => $this->faker->randomDigit,
            'bottle_age' => $this->faker->randomDigit,
            'toilet_age' => $this->faker->randomDigit,
            'observations' => $this->faker->text,
            'family_medical_history' => $this->faker->text,
            'father_relationship' => $this->faker->text,
            'mother_relationship' => $this->faker->text,
            'siblings_relationship' => $this->faker->text,
            'others_relationship' => $this->faker->text,
            'habits_and_activities' => $this->faker->text,


        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Student $student) {
            User::factory()->create([
                'person_id' => $student->person_id,
                'role_id' => 3,
            ]);
        });
    }
}
