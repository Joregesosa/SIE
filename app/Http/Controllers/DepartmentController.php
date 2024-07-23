<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DepartmentController extends Controller
{
    public function index()
    {
        $departments = Department::all();

        return Inertia::render('Departments/index', [
            'data' => $departments
        ]);
    }

    public function create()
    {
        return Inertia::render('Departments/create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        try {
            Department::create($request->all());

            return redirect()->route('departments.index')
                ->with('success', 'Departamento creado correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating department: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando el departamento');
        }
    }

    public function show(Department $department)
    {
        return Inertia::render('Departments/show', [
            'data' => $department
        ]);
    }

    public function edit(Department $department)
    {
        return Inertia::render('Departments/edit', [
            'data' => $department
        ]);
    }

    public function update(Request $request, Department $department)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        try {
            $department->update($request->all());

            return redirect()->route('departments.index')
                ->with('success', 'Departamento actualizado correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating department: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando el departamento');
        }
    }

    public function destroy(Department $department)
    {
        try {
            $department->delete();

            return redirect()->route('departments.index')
                ->with('success', 'Departamento eliminado correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting department: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando el departamento');
        }
    }
}
