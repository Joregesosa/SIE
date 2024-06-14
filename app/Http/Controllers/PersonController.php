<?php

namespace App\Http\Controllers;

use App\Models\AcademicAchievement;
use App\Models\Contact;
use App\Models\DisabilityCondition;
use App\Models\EducationLevel;
use App\Models\FamilyStructure;
use App\Models\Level;
use App\Models\MaritalStatus;
use App\Models\MedicalAttentionType;
use App\Models\MedicalCondition;
use App\Models\Parents;
use App\Models\ParentType;
use App\Models\PathologicalFamilyHistory;
use App\Models\Person;
use App\Models\Phone;
use App\Models\PhoneType;
use App\Models\PregnancyType;
use App\Models\Student;
use App\Models\TypeHouse;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PersonController extends Controller
{
 
    public function create(Request $request)
    {          
        try{
             return Inertia::render('Applications/InscriptionForm', [
            'contact' =>  Contact::where('key', $request->input('contact'))->where('id_card', $request->input('card'))->firstOrFail(),
            'information'  => [  
                            'levels' => Level::all(),
                            'marital_status' => MaritalStatus::all(),
                            'education_levels' => EducationLevel::all(),
                            'parent_types' => ParentType::where('status', 1)->get()->values(),
                            'family_structures' => FamilyStructure::all(),
                            'type_houses' => TypeHouse::all(),
                            'medical_attention_types' => MedicalAttentionType::all(),
                            'pathological_family_histories' => PathologicalFamilyHistory::all(),
                            'pregnancy_types' => PregnancyType::all(),
                            ]

            ]);
        }catch(ModelNotFoundException $e){
            return response()->json(['error' => 'La solicitud no existe '], 404);
        }catch(Exception $e){
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
        
    }

    public function store(Request $request){
        
        dd($request->all());
     /* 
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
            
            'parents.*.first_name' => 'required|string',
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
            'birth_order' => 'integer',
            'family_structure_id' => 'exists:family_structures,id',
        
            'disability_description' => 'string',
            'other_incomes' => 'integer',
            'expenditure' => 'integer',
            'type_house_id' => 'exists:type_houses,id',
            'living_description' => 'string',
            'entry_date' => 'date',
            'previous_institution' => 'string',
            'repeated_years' => 'string',
            'preferred_subjects' => 'string',
            'difficult_subjects' => 'string',
            'achievements' => 'string',
            'dignities' => 'string',
            'participation' => 'string',
            'extracurricular' => 'string',
            'student_disability' => 'boolean',
            'student_disability_details' => 'string',
            'disability_percentage' => 'string',
            'disability_carnet' => 'string',
            'medical_condition' => 'boolean',
            'medical_condition_details' => 'string',
            'allergies' => 'boolean',
            'allergies_description' => 'string',
            'medications' => 'string',
            'medical_attention_type_id' => 'exists:medical_attention_types,id',
            'medical_attention_name' => 'string',
            'medical_attention_address' => 'string',
            'medical_attention_doctor' => 'string',
            'pregnancy_mother_age' => 'integer',
            'pregnancy_accidents' => 'string',
            'pregnancy_medications' => 'string',
            'pregnancy_type_id' => 'exists:pregnancy_types,id',
            'pregnancy_difficulties' => 'string',
            'birth_weight' => 'string',
            'birth_height' => 'string',
            'walking_age' => 'string',
            'talking_age' => 'string',
            'breastfeeding_period' => 'string',
            'bottle_age' => 'string',
            'toilet_age' => 'string',
            'observations' => 'string',
            'family_medical_history' => 'exists:pathological_family_histories,id',
            'father_relationship' => 'string',
            'mother_relationship' => 'string',
            'siblings_relationship' => 'string',
            'others_relationship' => 'string',
            'habits_and_activities' => 'string',
                
            


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
        }*/
        
       
       
        try {

            DB::beginTransaction();

            /*DATOS DE IDENTIFICACIÓN*/
            $person = Person::create($request->identification_data);
            $request['identification_data'] = ['person_id' => $person->id, ...$request->identification_data];

            Phone::create($request->identification_data);

            $siblingsJson = json_encode($request->socioeconomic_data['siblings_data']);
            $familyCompositionJson = json_encode($request->socioeconomic_data['family_composition_data']);
            
           
            $student_data = ['person_id' => $person->id, 'siblings' => $siblingsJson, 'family_composition' => $familyCompositionJson, ...$request->identification_data,...$request->academic_data, ...$request->medical_data, ...$request->medical_history, ...$request->socioeconomic_data, ...$request->financial_references];
          

            $student = Student::create($student_data);


            Request()->merge(['student_id' => $student->id]);

           
            /*RELACION PADRES O TUTORES*/
            foreach ([$request->father_data, $request->mother_data,$request->tutor_data ] as  $index => $parent) {
                if($parent == null){
                    continue;
                }
                
                $parent['address_street'] =$request->identification_data['address_street'];
                $parent['sector'] =$request->identification_data['sector'];
                
                $person = Person::create($parent);
                $parent['person_id'] = $person->id;

                Phone::create($parent);
                $familiar = Parents::create($parent);

                if($index == 0){
                    $student->father_id = $familiar->id;
                }else if($index == 1){
                    $student->mother_id = $familiar->id;
                }else{
                    $student->tutor_id = $familiar->id;
                }
                $student->save();
            }

            Contact::findOrFail($request->contact_id)->update(['status' => 2]);

            DB::commit();
            session()->put('msj', ['success' => 'Persona registrada correctamente.']);
            return back();

        } catch (\Throwable $th) {
            DB::rollBack();
            session()->put('msj', ['error' => 'Error al registrar la persona.'.$th]);
            return back();
        }

    }

    public function index(){ 
       /* return Inertia::render('ContactsRequest',[
            'data' => Person::all()
        ]);*/
    }

    public function show($id){
        try {
            $person = Person::findOrFail($id);
            return Inertia::render('Persons', [
                'data' => $person
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'La persona no existe '], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
    }

    public function update(Request $request)
    {
      /*  try {
            $mensajes = [
                'required' => 'El campo :attribute es requerido',
                'exists' => 'El campo :attribute no existe',
            ];

            $validator = validator($request->all(), [
                'id' => 'required|exists:contacts,id',
                'key' => 'required',
                'first_name' => 'required',
                'second_name' => 'required',
                'fLast_name' => 'required',
                'sLast_name' => 'required',
                'id_card' => 'required',
                'age' => 'required',
                'number' => 'required',
                'email' => 'required',
                'last_institution' => 'required',
                'address' => 'required',
                'father_names' => 'required',
                'father_phone' => 'required',
                'father_occupation' => 'required',
                'mother_names' => 'required',
                'mother_phone' => 'required',
                'mother_occupation' => 'required',
                'level' => 'required',
                'status' => 'required',
            ], $mensajes);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $contact = Contact::findOrFail($request->id);
            $contact->update($request->all());

            session()->put('msj', ["success" => 'Solicitud actializada con exito']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'La solicitud no existe '], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
        return redirect(route('contact'));*/
    }

    public function destroy($id)
    {
        
        try {
            $person = Person::findOrFail($id);
            $person->delete();
            session()->put('msj', ['success' => 'Persona eliminada correctamente.']);
        } catch (ModelNotFoundException $e) {
            session()->put('msj', ['error' => 'La persona no existe.']);
        } catch (Exception $e) {
            session()->put('msj', ['error' => 'Error al eliminar la persona.']);
        }
        return redirect(route('person'));
    }
}
