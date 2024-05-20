<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'person_id',
        'address_street',
        'sector',
        'siblings',
        'position_family',
        'family_structure_id',
        'disability_in_family',
        'disability_description',
        'other_income',
        'expenditure',
        'type_house_id',
        'house_description',
        'date_first_entry',
        'institution_origin',
        'repeated_years',
        'preferred_subjects',
        'difficult_subjects',
        'achieved_dignities',
        'academic_achievements',
        'participation',
        'extracurricular',
        'disability_condition',
        'disability_condition_description',
        'disability_percentage',
        'disability_carnet',
        'medical_condition',
        'medical_condition_description',
        'allergies',
        'allergies_description',
        'medicines',
        'medical_attention_type_id',
        'medical_attention_name',
        'medical_attention_address',
        'medical_attention_doctor',
        'pregnancy_mother_age',
        'pregnancy_accidents',
        'pregnancy_medicines',
        'pregnancy_type_id',
        'pregnancy_difficulties',
        'birth_weight',
        'birth_height',
        'age_walk',
        'age_talk',
        'breastfeeding_period',
        'bottle_age',
        'age_control_sphincters',
        'observations',
        'pathological_family_history_id',
        'father_relationship',
        'mother_relationship',
        'siblings_relationship',
        'others_relationship',
        'customs_habits'
    ];


}
