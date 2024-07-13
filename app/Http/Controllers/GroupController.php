<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Http\Requests\StoreGroupRequest;
use App\Http\Requests\UpdateGroupRequest;
use App\Models\GroupStudentList;
use Exception;
use Grupos;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GroupController extends Controller
{

    public function index()
    {
        return Inertia::render('Cursos/Groups', [
            'data' => Group::all()->load('level', 'teacher.person','students'),
        ]);
    }

    public function store(Request $request)
    {
        try {

            $mensajes = [
                'required' => 'El campo :attribute es requerido',
                'exists' => 'El campo :attribute no existe',
            ];

            $validator = validator($request->all(), [
                'name' => 'required',
                'level_id' => 'required|exists:levels,id',
                'max_students' => 'required',
                'teacher_id' => 'exists:teachers,id',
                'status' => 'required',
            ], $mensajes);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            Group::create($request->all());
            return redirect()->route('groups.index')->with('msj', ['success' => "Grupo creado satisfactoriamente "], 200);
        } catch (Exception $e) {
            return redirect()->route('groups.index')->with('msj', ['error' => 'Error creating group' . $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            $students = DB::table('groups AS g')
                ->select([
                    'g.id',
                    'l.description',
                    'e.id AS student_id',
                    'p.first_name',
                    'p.second_name',
                    'p.fLast_name',
                    'p.sLast_name',
                    DB::raw('concat(p.first_name, \' \', p.second_name, \' \', p.fLast_name, \' \', p.sLast_name) AS full_name'),
                    'p.birth_date',
                    'p.id_card',
                    'u.email',
                    't.phone',
                ])
                ->leftJoin('levels AS l', 'g.level_id', '=', 'l.id')
                ->leftJoin('students AS e', 'g.id', '=', 'e.group_id')
                ->leftJoin('people AS p', 'e.person_id', '=', 'p.id')
                ->leftJoin('phones AS t', 'e.person_id', '=', 't.person_id')
                ->leftJoin('users AS u', 'e.person_id', '=', 'u.person_id')
                ->where('e.status_id', '=', 2)
                ->where('g.id', '=', $id)
                ->get();

            if ($students->isEmpty()) {
                session()->flash('message', ['error' => 'No hay estudiantes inscritos a este grupo']);
                return back();
            }
            return Inertia::render('Cursos/GroupStudentList', [
                'data' => $students,
                'data2' => [
                    ['id' => 1, 'name' => 'John Doe', 'subject' => 'Matemáticas', 'grade' => 90, 'grade_level' => 'Primero', 'time_period' => 'Mensual'],
                    ['id' => 2, 'name' => 'John Doe', 'subject' => 'Artes', 'grade' => 'A', 'grade_level' => 'Primero', 'time_period' => 'Trimestral'],
                    ['id' => 3, 'name' => 'John Doe', 'subject' => 'Lengua', 'grade' => 85, 'grade_level' => 'Primero', 'time_period' => 'Semestral'],
                    ['id' => 4, 'name' => 'John Doe', 'subject' => 'Ciencias', 'grade' => 'B', 'grade_level' => 'Primero', 'time_period' => 'Mensual'],
                    ['id' => 5, 'name' => 'Jane Smith', 'subject' => 'Matemáticas', 'grade' => 92, 'grade_level' => 'Segundo', 'time_period' => 'Mensual'],
                    ['id' => 6, 'name' => 'Jane Smith', 'subject' => 'Artes', 'grade' => 'A', 'grade_level' => 'Segundo', 'time_period' => 'Trimestral'],
                    ['id' => 7, 'name' => 'Jane Smith', 'subject' => 'Lengua', 'grade' => 88, 'grade_level' => 'Segundo', 'time_period' => 'Semestral'],
                    ['id' => 8, 'name' => 'Jane Smith', 'subject' => 'Ciencias', 'grade' => 'B', 'grade_level' => 'Segundo', 'time_period' => 'Mensual'],
                ],
                'calificaciones' => Group::find($id),
            ]);
        } catch (Exception $e) {
            return back()->withErrors(['error' => 'Error al obtener los estudiantes del grupo']);
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
                'name' => 'required',
                'level_id' => 'required|exists:levels,id',
                'max_students' => 'required',
                'teacher_id' => 'exists:teachers,id',
                'status' => 'required',
            ], $mensajes);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $group = Group::find($request->id);
            $group->update($request->all());
            return redirect()->route('groups.index')->with('msj', ['success' => "Grupo actualizado satisfactoriamente "], 200);
        } catch (Exception $e) {
            return redirect()->route('groups.index')->with('msj', ['error' => 'Error updating group' . $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {

        try {
            $group = Group::find($id);
            $group->status = 0;
            $group->save();
            return redirect()->route('groups.index')->with('msj', ['success' => "Grupo eliminado satisfactoriamente "], 200);
        } catch (Exception $e) {
            return redirect()->route('groups.index')->with('msj', ['error' => 'Error deleting group' . $e->getMessage()], 500);
        }
    }
}
