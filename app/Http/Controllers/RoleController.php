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
        return Inertia::render('Roles', [
            'data' => Role::with('permissions')->get(),
            'permissions' => Permission::all(),
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
            return redirect()->route('roles')->with('msj', ['error' => array_values($validator->errors()->messages())], 404);
        }

        try {
            DB::beginTransaction();

            $role = Role::create($request->all());
            $permissionIds = array_column($request->permissions, 'id');
            $role->permissions()->attach($permissionIds);

            DB::commit();

            return redirect()->route('roles')->with('msj', ['success' => "Role created successfully"], 200);
        } catch (QueryException $e) {
            DB::rollBack();
            return redirect()->route('roles')->with('msj', ['error' => 'Error creating role' . $e->getMessage()], 500);
        }
    }

    /*  public function store(Request $request)
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

        $role = Role::create($request->all());
        $permissionIds = array_column($request->permissions, 'id');
        $role->permissions()->attach($permissionIds);
 
        return redirect()->route('roles')->with('msj', ['success' => "Role created successfully"], 200);
    } */

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
            $permissionIds = array_column($request->permissions, 'id');
            $role->permissions()->sync($permissionIds);

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
}
