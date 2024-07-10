<?php

namespace App\Models;

use Carbon\Carbon;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\DB;

class Student extends Model
{
    use HasFactory;


    protected $fillable = [
        'person_id',
        'group_id',
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
        'allergies_details',
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
        'father_id',
        'mother_id',
        'tutor_id'

    ];


    //quiero solo los dos dijitos del año , ejemplo 20-0001
    public static function boot()
    {
        parent::boot();

        self::creating(function ($model) {
            $maxId = self::max('id') + 1;
            $model->matricula = Carbon::now()->format('y') . '-' . str_pad($maxId, 4, '0', STR_PAD_LEFT);
        });
    }



    protected $with = ['person', 'telephones', 'level', 'status', 'familyStructure', 'typeHouse', 'medicalAttentionType', 'pathologicalFamilyHistory', 'pregnancyType', 'father', 'mother', 'tutor'];

    public function person()
    {
        return $this->belongsTo(Person::class)->with('user');
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
        return $this->belongsTo(PregnancyType::class);
    }

    public function telephones()
    {
        return $this->hasMany(Phone::class, 'person_id', 'person_id');
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




    public function toArray()
    {
        return [

            'id' => $this->id,
            'matricula' => $this->matricula,
            'person' => $this->person ?  $this->person->toArray() : null,
            'identification_data' => [
                'email' => $this->person?->user?->email ?? '',
                'first_name' => $this->person->first_name ?? '',
                'second_name' => $this->person->second_name ?? '',
                'sLast_name' => $this->person->sLast_name ?? '',
                'fLast_name' => $this->person->fLast_name ?? '',
                'birth_date' => $this->person->birth_date ?? '',
                'age' => $this->person->birth_date ? Carbon::parse($this->person->birth_date)->age : null,
                'birth_place' => $this->person->birth_place ?? '',
                'id_card' => $this->person->id_card ?? '',
                'sector' => $this->sector ?? '',
                'address_street' => $this->address_street ?? '',
                'number' => $this->telephones->first() ? $this->telephones->first()->number : '',
                'reference' => $this->reference ?? '',
                'level_id' => $this->level_id,
                'level' => $this->level ? $this->level->toArray() : null,
                'status_id' => $this->status_id ?? '',
                'status' => $this->status ? $this->status->toArray() : null,

            ],
            'mother_data' => $this->mother ?  [
                'person' => $this->mother->person ? $this->mother->person->toArray() : null,
                'birth_date' => $this->mother->person->birth_date ?? '',
                'email' => $this->mother->email ?? '',
                'fLast_name' => $this->mother->person->fLast_name ?? '',
                'first_name' => $this->mother->person->first_name ?? '',
                'education_level_id' => $this->mother->education_level_id ?? '',
                'education_level' => $this->mother->educationLevel ? $this->mother->educationLevel->toArray() : null,
                'marital_status_id' => $this->mother->marital_status_id ?? '',
                'marital_status' => $this->mother->maritalStatus ? $this->mother->maritalStatus->toArray() : null,
                'number' => $this->mother->telephones->first() ? $this->mother->telephones->first()->number : '',
                'profession' => $this->mother->profession ?? '',
                'sLast_name' => $this->mother->person->sLast_name ?? '',
                'second_name' => $this->mother->person->second_name ?? '',
                'work_place' => $this->mother->work_place ?? '',
            ] : null,
            'father_data' => $this->father ? [
                'person' => $this->father->person ? $this->father->person->toArray() : null,
                'birth_date' => $this->father->person->birth_date ?? '',
                'email' => $this->father->email ?? '',
                'fLast_name' => $this->father->person->fLast_name ?? '',
                'first_name' => $this->father->person->first_name ?? '',
                'education_level_id' => $this->father->education_level_id ?? '',
                'education_level' => $this->father->educationLevel ? $this->father->educationLevel->toArray() : null,
                'marital_status_id' => $this->father->marital_status_id ?? '',
                'marital_status' => $this->father->maritalStatus ? $this->father->maritalStatus->toArray() : null,
                'number' => $this->father->telephones->first() ? $this->father->telephones->first()->number : '',
                'profession' => $this->father->profession ?? '',
                'sLast_name' => $this->father->person->sLast_name ?? '',
                'second_name' => $this->father->person->second_name ?? '',
                'work_place' => $this->father->work_place ?? '',
            ] : null,
            'tutor_data' => $this->tutor ? [
                'person' => $this->tutor->person ? $this->tutor->person->toArray() : null,
                'birth_date' => $this->tutor->person->birth_date ?? '',
                'email' => $this->tutor->email ?? '',
                'fLast_name' => $this->tutor->person->fLast_name ?? '',
                'first_name' => $this->tutor->person->first_name ?? '',
                'education_level_id' => $this->tutor->education_level_id ?? '',
                'education_level' => $this->tutor->educationLevel ? $this->tutor->educationLevel->toArray() : null,
                'marital_status_id' => $this->tutor->marital_status_id ?? '',
                'marital_status' => $this->tutor->maritalStatus ? $this->tutor->maritalStatus->toArray() : null,
                'number' => $this->tutor->telephones->first() ? $this->tutor->telephones->first()->number : '',
                'profession' => $this->tutor->profession ?? '',
                'sLast_name' => $this->tutor->person->sLast_name ?? '',
                'second_name' => $this->tutor->person->second_name ?? '',
                'work_place' => $this->tutor->work_place ?? '',
            ] : null,
            'socioeconomic_data' => [
                'family_composition_data' => $this->family_composition ?? '',
                'siblings_data' => $this->siblings ? json_decode($this->siblings, true) : [],
                'birth_order' => $this->birth_order ?? '',
                'disability_description' => $this->disability_description ?? '',
                'family_structure_id' => $this->family_structure_id ?? '',
            ],
            'financial_references' => [
                'father_incomes' => $this->father_incomes ?? '',
                'mother_incomes' => $this->mother_incomes ?? '',
                'other_incomes' => $this->other_incomes ?? '',
                'type_house_id' => $this->type_house_id ?? '',
                'living_description' => $this->living_description ?? '',
                'type_house' => $this->typeHouse ? $this->typeHouse->toArray() : null,
                'expenditure' => $this->expenditure ?? '',
            ],
            'academic_data' => [
                'achievements' => $this->achievements ?? '',
                'difficult_subjects' => $this->difficult_subjects ?? '',
                'entry_date' => $this->entry_date ?? '',
                'extracurriculars' => $this->extracurriculars ?? '',
                'participation' => $this->participation ?? '',
                'preferred_subjects' => $this->preferred_subjects ?? '',
                'previous_institution' => $this->previous_institution ?? '',
                'repeated_years' => $this->repeated_years ?? '',
            ],
            'medical_data' => [
                'allergies' => $this->allergies ?? '',
                'allergies_details' => $this->allergies_details ?? '',
                'medical_attention_doctor' => $this->medical_attention_doctor ?? '',
                'student_disability_details' => $this->student_disability_details ?? '',
                'medical_condition_details' => $this->medical_condition_details ?? '',
                'medical_attention_type_id' => $this->medical_attention_type_id ?? '',
                'medical_attention_type' => $this->medicalAttentionType ? $this->medicalAttentionType->toArray() : null,
                'medical_attention_details' => $this->medical_attention_details ?? '',
                'medications' => $this->medications ?? '',
                'medical_condition' => $this->medical_condition ?? '',
                'student_disability' => $this->student_disability ?? '',
            ],
            'medical_history' => [
                'pregnancy_accidents' => $this->pregnancy_accidents ?? '',
                'birth_height' => $this->birth_height ?? '',
                'pregnancy_type_id' => $this->pregnancy_type_id ?? '',
                'pregnancy_type' => $this->pregnancyType ? $this->pregnancyType->toArray() : null,
                'birth_weight' => $this->birth_weight ?? '',
                'bottle_age' => $this->bottle_age ?? '',
                'breastfeeding_period' => $this->breastfeeding_period ?? '',
                'family_medical_history' => $this->family_medical_history ?? '',
                'talking_age' => $this->talking_age ?? '',
                'habits_and_activities' => $this->habits_and_activities ?? '',
                'pregnancy_medications' => $this->pregnancy_medications ?? '',
                'pregnancy_mother_age' => $this->pregnancy_mother_age ?? '',
                'observations' => $this->observations ?? '',
                'pregnancy_difficulties' => $this->pregnancy_difficulties ?? '',
                'father_relationship' => $this->father_relationship ?? '',
                'mother_relationship' => $this->mother_relationship ?? '',
                'others_relationship' => $this->others_relationship ?? '',
                'siblings_relationship' => $this->siblings_relationship ?? '',
                'toilet_age' => $this->toilet_age ?? '',
                'walking_age' => $this->walking_age ?? '',
            ],
        ];
    }
}
