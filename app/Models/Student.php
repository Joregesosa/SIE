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
        'birth_order',
        'family_composition',
        'family_structure_id',

        'disability_description',
        'other_incomes',
        'expenditure',
        'type_house_id',
        'living_description',
        'entry_date',
        'previous_institution',
        'repeated_years',
        'preferred_subjects',
        'difficult_subjects',
        'dignities',
        'achievements',
        'extracurriculars',
        'student_disability',
        'student_disability_details',
        'disability_percentage',
        'disability_carnet',
        'medical_condition',
        'medical_condition_details',
        'allergies',
        'allergies_description',
        'medications',
        'medical_attention_type_id',
        'medical_attention_details',
        'medical_attention_doctor',
        'pregnancy_mother_age',
        'pregnancy_accidents',
        'pregnancy_medications',
        'pregnancy_type_id',
        'pregnancy_difficulties',
        'birth_weight',
        'birth_height',
        'walking_age',
        'talking_age',
        'breastfeeding_period',
        'bottle_age',
        'toilet_age',
        'observations',
        'family_medical_history',
        'father_relationship',
        'mother_relationship',
        'siblings_relationship',
        'others_relationship',
        'habits_and_activities'
    ];
 
    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function familyStructure()
    {
        return $this->belongsTo(FamilyStructure::class);
    }

    public function typeHouse()
    {
        return $this->belongsTo(TypeHouse::class);
    }

    public function medicalAttentionType()
    {
        return $this->belongsTo(MedicalAttentionType::class);
    }

    public function pathologicalFamilyHistory()
    {
        return $this->belongsTo(PathologicalFamilyHistory::class);
    }

    public function pregnancyType()
    {
        return $this->belongsTo(pregnancyType::class);
    }

    public function parents()
    {
        return $this->belongsToMany(Parents::class, 'StudentParent', 'student_id', 'parent_id');
    }
   

}
