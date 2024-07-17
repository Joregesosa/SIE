<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $permissions = collect(
            [
                "Ver" => Permission::WHERE('name', 'LIKE', '%ver%')->orderBy('name')->get(),
                "Actualizar" => Permission::WHERE('name', 'LIKE', '%actualizar%')->orderBy('name')->get(),
                "Eliminar" => Permission::WHERE('name', 'LIKE', '%eliminar%')->orderBy('name')->get(),
                "Crear" => Permission::WHERE('name', 'LIKE', '%crear%')->orderBy('name')->get(),
                "others" => Permission::WHERE('name', 'NOT LIKE', '%ver%')
                    ->WHERE('name', 'NOT LIKE', '%actualizar%')
                    ->WHERE('name', 'NOT LIKE', '%eliminar%')
                    ->WHERE('name', 'NOT LIKE', '%crear%')
                    ->orderBy('name')->get(),
            ]
        );

        return Inertia::render('Usuarios/Roles', [
            'data' => Role::with('permissions')->get(),
            'permissions' => $permissions,
        ]);
    }

    public function create()
    {
        $permissions =  $this->loadPermissions();

        return Inertia::render('Usuarios/CreateRole', [
            'permissions' => $permissions,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Request $request)
    {
        $message = [
            'role.unique' => 'Ya existe un role con el nombre ' . $request->role,
            'role.required' => 'El nombre del role es requerido',
        ];

        $validator = validator($request->all(), [
            'role' => 'required|string|unique:' . Role::class,
        ], $message);

        if ($validator->fails()) {
            return back()->withErrors(['error' => array_values($validator->errors()->messages())]);
        }

        try {
            DB::beginTransaction();

            $role = Role::create($request->all());
            $role->permissions()->attach($request->permissions);

            DB::commit();
            session()->flash('message',  ['success' => "Role created successfully"]);
            return back();
        } catch (QueryException $e) {
            DB::rollBack();
            return back()->withErrors(['error' => 'Error creating role' . $e->getMessage()], 500);
        }
    }


    public function edit($id)
    {
        $role = Role::with('permissions')->find($id);


        return Inertia::render('Usuarios/EditRole', [
            'role' => $role,
            'permissions' => $this->loadPermissions(),

        ]);
    }


    /** 
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        /*    $message = [
            'role.unique' => 'Ya existe un role con el nombre ' . $request->role,
            'role.required' => 'El nombre del role es requerido',
        ];

        $validator = validator($request->all(), [
            'role' => 'required|string|unique:' . Role::class,
        ], $message);

        if ($validator->fails()) {
            return redirect()->route('roles')->with('msj', ['error' => array_values($validator->errors()->messages())], 404);
        } */

        try {
            DB::beginTransaction();

            $role =  Role::find($id);
            $role->update($request->all());
            $role->permissions()->sync($request->permissions);

            DB::commit();

            return redirect()->route('roles')->with('msj', ['success' => "Role updated successfully"], 200);
        } catch (QueryException $e) {
            DB::rollBack();
            return redirect()->route('roles')->with('msj', ['error' => 'Error updated role' . $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        Role::destroy($id);

        return redirect()->route('roles')->with('msj', ['success' => "Role deleted successfully"], 200);
    }

    private function loadPermissions()
    {
        return  collect(
            [
                "Ver" => Permission::WHERE('name', 'LIKE', '%ver%')->orderBy('name')->get(),
                "Actualizar" => Permission::WHERE('name', 'LIKE', '%actualizar%')->orderBy('name')->get(),
                "Eliminar" => Permission::WHERE('name', 'LIKE', '%eliminar%')->orderBy('name')->get(),
                "Crear" => Permission::WHERE('name', 'LIKE', '%crear%')->orderBy('name')->get(),
                "others" => Permission::WHERE('name', 'NOT LIKE', '%ver%')
                    ->WHERE('name', 'NOT LIKE', '%actualizar%')
                    ->WHERE('name', 'NOT LIKE', '%eliminar%')
                    ->WHERE('name', 'NOT LIKE', '%crear%')
                    ->orderBy('name')->get(),
            ]
        );
    }
}
