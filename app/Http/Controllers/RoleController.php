<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $message = session('msj');
        if ($message) {
            Session::forget('msj');
        }
        $role = Role::all();
        $permissions = Permission::all();
        return Inertia::render('Roles', [
            'data' => $role,
            'permissions' => $permissions,
            'msj' => $message
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $message = [
            'role.unique' => 'Ya existe un role con el nombre' . $request->role,
            'role.required' => 'El nombre del role es requerido',
        ];

        $validator =  validator($request->all(), [
            'role' => 'required|string|unique:' . Role::class,
        ], $message);

        if ($validator->fails()) {

            return redirect()->route('roles')->with('msj', ['error' => array_values($validator->errors()->messages())], 404);
        }

        Role::create($request->all());
        return redirect()->route('roles')->with('msj', ['success' => "Role created successfully"], 200);
    }

    /** 
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $role =  Role::find($id);
        $role->update($request->all());

        return redirect()->route('roles')->with('msj', ['success' => "Role updated successfully"], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Role::destroy($id);

        return redirect()->route('roles')->with('msj', ['success' => "Role deleted successfully"], 200);
    }
}
