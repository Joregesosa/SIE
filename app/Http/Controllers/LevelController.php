<?php

namespace App\Http\Controllers;

use App\Models\Level;
use App\Http\Requests\StoreLevelRequest;
use App\Http\Requests\UpdateLevelRequest;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Inertia\Inertia;

class LevelController extends Controller
{
 
    public function index()
    {
        return Inertia::render('Levels', [
            'data' => Level::all(),
        ]);
    }

    public function store(StoreLevelRequest $request)
    {
        try {

            $mensajes = [
                'required' => 'El campo :attribute es requerido',
                'exists' => 'El campo :attribute no existe',
            ];

            $validator = validator($request->all(), [
                'name' => 'required',
                'status' => 'required',
            ], $mensajes);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }
            
            Level::create($request->all());
            return redirect()->route('levels.index')->with('msj', ['success' => "Nivel creado satisfactoriamente "], 200);
        } catch (Exception $e) {
            return redirect()->route('levels.index')->with('msj', ['error' => 'Error creating level' . $e->getMessage()], 500);
        }
    }

    public function show($id)
    {
        try {
            return Inertia::render('Level', [
                'data' => Level::findOrFail($id),
            ]);
        } catch (ModelNotFoundException $e) {
            return redirect()->route('levels.index')->with('msj', ['error' => 'Nivel no encontrado'], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
    }

    public function update(UpdateLevelRequest $request)
    {
        try {

            $mensajes = [
                'required' => 'El campo :attribute es requerido',
                'exists' => 'El campo :attribute no existe',
            ];

            $validator = validator($request->all(), [
                'name' => 'required',
                'status' => 'required',
            ], $mensajes);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $level = Level::find($request->id);
            $level->update($request->all());
            return redirect()->route('levels.index')->with('msj', ['success' => "Nivel actualizado satisfactoriamente "], 200);
        } catch (Exception $e) {
            return redirect()->route('levels.index')->with('msj', ['error' => 'Error updating level' . $e->getMessage()], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $level = Level::find($id);
            $level->status = 0;
            $level->save();
            return redirect()->route('levels.index')->with('msj', ['success' => "Nivel eliminado satisfactoriamente "], 200);
        } catch (Exception $e) {
            return redirect()->route('levels.index')->with('msj', ['error' => 'Error deleting level' . $e->getMessage()], 500);
        }

        
    }
}
