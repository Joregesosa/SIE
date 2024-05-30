<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Http\Requests\StoreGroupRequest;
use App\Http\Requests\UpdateGroupRequest;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GroupController extends Controller
{

    public function index()
    {
        return Inertia::render('Groups', [
            'data' => Group::all()->load('level', 'teacher.person'),
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
            return Inertia::render('Group', [
                'data' => Group::findOrFail($id)->load('level', 'teacher.person'),
            ]);
        } catch (ModelNotFoundException $e) {
            return redirect()->route('groups.index')->with('msj', ['error' => 'Group not found'], 404);
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
