<?php

namespace App\Http\Controllers;

use App\Models\Person;
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
    public function create()
    {       
        $validator = validator($request->all(), [
            'first_name' => 'required|string',
            'second_name' => 'required|string',
            'fLast_name' => 'required|string',
            'sLast_name' => 'required|string',
            'birth_date' => 'required|date',
            'birth_place' => 'string',
            'id_card' => 'unique:people,id_card',
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

            $person = Person::create($request->all());
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
