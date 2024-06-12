<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{

    public function index() {
        
        $students = Student::all()->load(
            'person',
            'level',
            'status',
            'familyStructure', 
            'typeHouse', 
            'medicalAttentionType',
            'pregnancyType',
            'pathologicalFamilyHistory',
            'parents')->each(function ($student) {
                $student->parents->load(['parentType' => function ($query) use ($student) {
                $query->where('student_id', $student->id);
            }]);
        });

        return Inertia::render('Solicitudes/Matriculas', [
            'data' => $students
        ]);

        
    }

    public function show($id)
    {
        return Student::with([
            'person',
            'level',
            'familyStructure',
            'typeHouse',
            'medicalAttentionType',
            'pregnancyType',
            'pathologicalFamilyHistory',
            'parents.parentType' => function ($query) use ($id) {
                $query->where('student_id', $id);
            }
        ])->findOrFail($id);

        try {
            return Inertia::render('Students', [
                'data' => Student::findOrFail($id)->with('person', 'familyStructure', 'typeHouse', 'medicalAttentionType', 'pregnancyType', 'pathologicalFamilyHistory', 'parents.parentType')->first()
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'El estudiante no existe'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
    }

    public function update(Request $request)
    {
        try {
            $mensajes = [
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

            $student = Student::findOrFail($request->id);
            $student->update($request->all());
            session()->put('msj', ['success' => 'Estudiante actualizado correctamente.']);
        } catch (ModelNotFoundException $e) {
            session()->put('msj', ['error' => 'El estudiante no existe.']);
        } catch (Exception $e) {
            session()->put('msj', ['error' => 'Error al actualizar el estudiante.']);
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
}
