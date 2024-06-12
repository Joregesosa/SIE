<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Usuarios/Permissions', [
            'data' => Permission::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $message = [
            'permission' => 'El nombre del permiso no es invalido',
            'description' => 'La descripción del permiso es obligatoria',
        ];

        $validator =  validator($request->all(), [
            'permission' => 'required|string|max:255',
            'description' => 'required|string',
        ], $message);

        if ($validator->fails()) {

            return redirect()->route('permission')->with('msj', ['error' => array_values($validator->errors()->messages())], 404);
        }

        Permission::create($request->all());
        return redirect()->route('permission')->with('msj', ['success' => "Permission created successfully"], 200);
    }

    public function update(Request $request,  $id)
    {
           $permission =  Permission::find($id);
           $permission->update($request->all());

           return redirect()->route('permission')->with('msj', ['success' => "Permission updated successfully"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Permission::destroy($id);

        return redirect()->route('permission')->with('msj', ['success' => "Permission deleted successfully"], 200);
    }
}
