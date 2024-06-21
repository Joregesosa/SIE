<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\EducationLevel;
use App\Models\FamilyStructure;
use App\Models\Level;
use App\Models\MaritalStatus;
use App\Models\MedicalAttentionType;
use App\Models\ParentType;
use App\Models\PathologicalFamilyHistory;
use App\Models\Person;
use App\Models\Phone;
use App\Models\PregnancyType;
use App\Models\Role;
use App\Models\TypeHouse;
use App\Models\User;
use App\Services\UserService;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StudentController extends Controller
{

    public function index()
    {

        $students = Student::all();

        return Inertia::render('Solicitudes/Matriculas', [
            'data' => $students
        ]);
    }

    public function show($id)
    {

        try {
            return Inertia::render('Applications/EnrollmentVerification', [
                'data' => Student::findOrFail($id),
                'disable' => true,
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
                    'roles' => Role::all(),
                ]
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'El estudiante no existe'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada' . $e], 500);
        }
    }


    public function update(Request $request)
    {
        try {
            /* $mensajes = [
                'required' => 'El campo :attribute es requerido',
                'exists' => 'El campo :attribute no existe',
                ];

                $validator = validator($request->all(), [
                    'id' => 'required|exists:students,id',
                    'person_id' => 'required|exists:people,id',
                    'address_street' => 'required',
                    'sector' => 'required',
                    'siblings' => 'required',
                    'birth_order' => 'required',
                    'family_structure_id' => 'required',

                    'disability_description' => 'required',
                    'other_incomes' => 'required',
                    'expenditure' => 'required',
                    'type_house_id' => 'required',
                    'living_description' => 'required',
                    'entry_date' => 'required',
                    'previous_institution' => 'required',
                    'repeated_years' => 'required',
                    'preferred_subjects' => 'required',
                    'difficult_subjects' => 'required',
                    'achievements' => 'required',
                    'dignities' => 'required',
                    'participation' => 'required',
                    'extracurricular' => 'required',
                    'student_disability' => 'required',
                    'student_disability_details' => 'required',
                    'disability_percentage' => 'required',
                    'disability_carnet' => 'required',
                    'medical_condition' => 'required',
                    'medical_condition_details' => 'required',
                    'allergies' => 'required',
                    'allergies_description' => 'required',
                    'medications' => 'required',
                    'medical_attention_type_id' => 'required',
                    'medical_attention_name' => 'required',
                    'medical_attention_address' => 'required',
                    'medical_attention_doctor' => 'required',
                    'pregnancy_mother_age' => 'required',
                    'pregnancy_accidents' => 'required',
                    'pregnancy_medications' => 'required',
                    'pregnancy_type_id' => 'required',
                    'pregnancy_difficulties' => 'required',
                    'birth_weight' => 'required',
                    'birth_height' => 'required',
                    'walking_age' => 'required',
                    'talking_age' => 'required',
                    'breastfeeding_period' => 'required',
                    'bottle_age' => 'required'
                ], $mensajes);

                if ($validator->fails()) {
                    return response()->json(['error' => $validator->errors()], 400);
                }
            */

            DB::beginTransaction();

            if (!User::where('person_id', $request->person['id'])->exists() && isset($request->user['email'])) {
                $this->createAccount($request);
            }

            $person = Person::findOrFail($request->person['id']);

            $person->update($request->identification_data);

            $phone = Phone::where('person_id', $person['id'])->first();
            $phone->update($request->identification_data);

            $student = Student::where('person_id', $person['id'])->first();

            /*DATOS DE IDENTIFICACIÓN*/
            $familyCompositionJson =  $request->socioeconomic_data['family_composition_data'];
            $siblingsJson = json_encode($request->socioeconomic_data['siblings_data']);

            if (!is_string($familyCompositionJson)) {
                $familyCompositionJson = json_encode($familyCompositionJson);
            }


            $student_data = ['person_id' => $person->id, 'siblings' => $siblingsJson, /* 'family_composition' => $familyCompositionJson, */ ...$request->identification_data, ...$request->academic_data, ...$request->medical_data, ...$request->medical_history, ...$request->socioeconomic_data, ...$request->financial_references];

            $student->update($student_data);

            /*RELACIÓN PADRES O TUTORES*/
            foreach ([$request->father_data, $request->mother_data, $request->tutor_data] as  $index => $parent) {
                if ($parent == null) {
                    continue;
                }

                $parent['address_street'] = $request->identification_data['address_street'];
                $parent['sector'] = $request->identification_data['sector'];

                $parent_person = Person::findOrFail($parent['person']['id']);
                $parent_person->update($parent);

                $parent_phone = Phone::where('person_id', $parent['person']['id'])->first();
                $parent_phone->update($parent);
            }

            DB::commit();
            session()->put('msj', ['success' => 'Persona actualizada correctamente.']);
            return back();
        } catch (\Throwable $th) {
            DB::rollBack();

            session()->put('msj', ['error' => 'Error al registrar la persona.' . $th]);
            return back();
        }
    }

    public function destroy($id)
    {
        try {
            $student = Student::findOrFail($id);
            $student->status = 0;
            $student->save();
            session()->put('msj', ['success' => 'Estudiante eliminado correctamente.']);
        } catch (ModelNotFoundException $e) {
            session()->put('msj', ['error' => 'El estudiante no existe.']);
        } catch (Exception $e) {
            session()->put('msj', ['error' => 'Error al eliminar el estudiante.']);
        }
    }


    private function createAccount($request)
    {
        $new_user = [
            'person_id' => $request->person['id'],
            'first_name' => $request->person['first_name'],
            'fLast_name' => $request->person['fLast_name'],
            'email' => $request->user['email'],
            'role_id' => 3
        ];

        $createUser = new UserService();
        $createUser->createUser($new_user);
    }
}
