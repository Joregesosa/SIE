<?php

namespace App\Http\Controllers;

use App\Models\Parents;
use App\Models\Person;
use App\Models\Phone;
use App\Models\Student;
use App\Models\student_parent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            'identification_data.first_name' => 'required|string',
            'identification_data.second_name' => 'required|string',
            'identification_data.fLast_name' => 'required|string',
            'identification_data.sLast_name' => 'required|string',
            'identification_data.birth_date' => 'required|date',
            'identification_data.birth_place' => 'string',
            'identification_data.id_card' => 'unique:people,id_card',
            'identification_data.telefonos.*.number' => 'required|string',
            'identification_data.telefonos.*.phone_type_id' => 'required|exists:phone_types,id',
            
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
            'identification_data.first_name.required' => 'El primer nombre es obligatorio.',
            'identification_data.second_name.required' => 'El segundo nombre es obligatorio.',
            'identification_data.fLast_name.required' => 'El primer apellido es obligatorio.',
            'identification_data.sLast_name.required' => 'El segundo apellido es obligatorio.',
            'identification_data.birth_date.required' => 'La fecha de nacimiento es obligatoria.',
            'identification_data.id_card.unique' => 'La cédula ya está registrada.',
        ]);
            

        if ($validator->fails()) {
            session()->put('msj', ['error' => array_values($validator->errors()->messages())]);
            return back();
        }

        
       
        try {
            DB::beginTransaction();

            /*DATOS DE IDENTIFICACIÓN*/
            $person = Person::create($request->identification_data);
            $request['identification_data'] = ['person_id' => $person->id, ...$request->identification_data];

            Phone::create($request->identification_data);

            $siblingsJson = json_encode($request->socioeconomic_data['siblings']);
           
            $student_data = ['person_id' => $person->id, 'siblings' => $siblingsJson, ...$request->identification_data,...$request->academic_data, ...$request->medical_data, ...$request->medical_history];
          
            $student = Student::create($student_data);


            Request()->merge(['student_id' => $student->id]);

           
            /*RELACION PADRES O TUTORES*/
            foreach ([$request->father_data, $request->mother_data,$request->tutor_data ] as  $index => $parent) {
                $parent['address_street'] =$request->identification_data['address_street'];
                $parent['sector'] =$request->identification_data['sector'];
                
                $person = Person::create($parent);
                $parent['person_id'] = $person->id;


                Phone::create($parent);

                $familiar = Parents::create($parent);

                student_parent::create([
                    'student_id' => $request->student_id,
                    'parent_id' => $familiar->id,
                    'parent_type_id' => $index+1,
                ]);
            }


            DB::commit();
            session()->put('msj', ['success' => 'Persona registrada correctamente.']);
            return back();

        } catch (\Throwable $th) {
            DB::rollBack();
            session()->put('msj', ['error' => 'Error al registrar la persona.'.$th]);
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
