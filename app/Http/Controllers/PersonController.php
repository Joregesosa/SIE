<?php

namespace App\Http\Controllers;

use App\Models\Parents;
use App\Models\Person;
use App\Models\Phone;
use App\Models\Student;
use App\Models\student_parent;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {       


        $validator = validator($request->all(), [
            'first_name' => 'required|string',
            'second_name' => 'required|string',
            'fLast_name' => 'required|string',
            'sLast_name' => 'required|string',
            'birth_date' => 'required|date',
            'birth_place' => 'string',
            'id_card' => 'unique:people,id_card',
            'telefonos.*.number' => 'required|string',
            'telefonos.*.phone_type_id' => 'required|exists:phone_types,id',
            
        /*  'parents.*.first_name' => 'required|string',
            'parents.*.second_name' => 'required|string',
            'parents.*.fLast_name' => 'required|string',
            'parents.*.sLast_name' => 'required|string',
            'parents.*.birth_date' => 'required|date',
            'parents.*.id_card' => 'unique:people,id_card',
            'parents.*.telefonos.*.number' => 'required|string',
            'parents.*.telefonos.*.phone_type_id' => 'required|exists:phone_types,id',
            'parents.*.parent_type_id' => 'required|exists:parent_types,id',
            'student_id' => 'required|exists:students,id',
            'address' => 'string',
            'sector' => 'string',
            'brothers' => 'string',
            'position_family' => 'integer',
            'family_structure_id' => 'exists:family_structures,id',
            'disability_in_family' => 'boolean',
            'disability_description' => 'string',
            'other_income' => 'integer',
            'expenditure' => 'integer',
            'type_house_id' => 'exists:type_houses,id',
            'house_description' => 'string',
            'date_first_entry' => 'date',
            'institution_origin' => 'string',
            'repeated_years' => 'string',
            'preferred_subjects' => 'string',
            'difficult_subjects' => 'string',
            'achieved_dignities' => 'string',
            'academic_achievements' => 'string',
            'participation' => 'string',
            'extracurricular' => 'string',
            'disability_condition' => 'boolean',
            'disability_condition_description' => 'string',
            'disability_percentage' => 'string',
            'disability_carnet' => 'string',
            'medical_condition' => 'boolean',
            'medical_condition_description' => 'string',
            'allergies' => 'boolean',
            'allergies_description' => 'string',
            'medicines' => 'string',
            'medical_attention_type_id' => 'exists:medical_attention_types,id',
            'medical_attention_name' => 'string',
            'medical_attention_address' => 'string',
            'medical_attention_doctor' => 'string',
            'pregnancy_mother_age' => 'integer',
            'pregnancy_accidents' => 'string',
            'pregnancy_medicines' => 'string',
            'pregnancy_type_id' => 'exists:pregnancy_types,id',
            'pregnancy_difficulties' => 'string',
            'birth_weight' => 'string',
            'birth_height' => 'string',
            'age_walk' => 'string',
            'age_talk' => 'string',
            'breastfeeding_period' => 'string',
            'bottle_age' => 'string',
            'age_control_sphincters' => 'string',
            'observations' => 'string',
            'pathological_family_history_id' => 'exists:pathological_family_histories,id',
            'father_relationship' => 'string',
            'mother_relationship' => 'string',
            'siblings_relationship' => 'string',
            'others_relationship' => 'string',
            'customs_habits' => 'string',*/
                
            



        ], [
            'first_name.required' => 'El primer nombre es obligatorio.',
            'second_name.required' => 'El segundo nombre es obligatorio.',
            'fLast_name.required' => 'El primer apellido es obligatorio.',
            'sLast_name.required' => 'El segundo apellido es obligatorio.',
            'birth_date.required' => 'La fecha de nacimiento es obligatoria.',
            'id_card.unique' => 'La cédula ya está registrada.',
        ]);
            

        if ($validator->fails()) {
            session()->put('msj', ['error' => array_values($validator->errors()->messages())]);
            return back();
        }

        

        try {
            /*DATOS DE IDENTIFICACIÓN*/
            $person = Person::create($request->all());

            REQUEST()->merge(['people_id' => $person->id]);

            foreach ($request->telefonos as $telefono) {
                $telefono['people_id'] = $person->id;
                Phone::create($telefono);
            }

            /*RELACION PADRES O TUTORES*/
            foreach ($request->parents as $parent) {
                $familiar = Parents::create($parent);

                foreach ($parent->telefonos as $telefono) {
                    $telefono['people_id'] = $familiar->id;
                    Phone::create($telefono);
                }

                student_parent::create([
                    'student_id' => $request->student_id,
                    'parent_id' => $familiar->id,
                    'parent_type_id' => $parent['parent_type_id'],
                ]);
            }


            /*DATOS SOCIOECONÓMICOS*/
            /*REFERENCIAS SOCIOECONÓMICAS GENERALES*/
            $student = Student::create($request->all());
            


            session()->put('msj', ['success' => 'Persona registrada correctamente.']);
            return back();

        } catch (\Throwable $th) {
           
            session()->put('msj', ['error' => 'Error al registrar la persona.']);
            return back();
        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Person $person)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Person $person)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Person $person)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Person $person)
    {
        //
    }
}
