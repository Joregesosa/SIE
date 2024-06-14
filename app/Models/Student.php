<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Student extends Model
{
    use HasFactory;


    protected $fillable = [
        'person_id',
        'address_street',
        'sector',
        'siblings',
        'birth_order',
        'level_id',
        'family_composition',
        'family_structure_id',
        'status_id',
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
        'habits_and_activities',
        'father_id' ,
        'mother_id',
        'tutor_id'

    ];

    protected $with = ['person', 'level', 'status', 'familyStructure', 'typeHouse', 'medicalAttentionType', 'pathologicalFamilyHistory', 'pregnancyType', 'father', 'mother', 'tutor'];
 
    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }

    public function status()
    {
        return $this->belongsTo(StudentStatus::class);
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

    public function father()
    {
        return $this->belongsTo(Parents::class, 'father_id');
    }

    public function mother()
    {
        return $this->belongsTo(Parents::class, 'mother_id');
    }

    public function tutor()
    {
        return $this->belongsTo(Parents::class, 'tutor_id');
    }

 

}
