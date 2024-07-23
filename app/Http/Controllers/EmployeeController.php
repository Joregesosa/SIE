<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::with('department', 'user')->get();

        return Inertia::render('Employees/index', [
            'data' => $employees
        ]);
    }

    public function create()
    {
        $departments = Department::all();

        return Inertia::render('Employees/create', [
            'departments' => $departments
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'position' => 'required|string|max:255',
            'department_id' => 'required|exists:departments,id',
            'hire_date' => 'required|date',
        ]);

        try {
            Employee::create($request->all());

            return redirect()->route('employees.index')
                ->with('success', 'Empleado creado correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating employee: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando el empleado');
        }
    }

    public function show(Employee $employee)
    {
        return Inertia::render('Employees/show', [
            'data' => $employee->load('department', 'user')
        ]);
    }

    public function edit(Employee $employee)
    {
        $departments = Department::all();

        return Inertia::render('Employees/edit', [
            'data' => $employee->load('department', 'user'),
            'departments' => $departments
        ]);
    }

    public function update(Request $request, Employee $employee)
    {
        $request->validate([
            'position' => 'required|string|max:255',
            'department_id' => 'required|exists:departments,id',
            'hire_date' => 'required|date',
        ]);

        try {
            $employee->update($request->all());

            return redirect()->route('employees.index')
                ->with('success', 'Empleado actualizado correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating employee: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando el empleado');
        }
    }

    public function destroy(Employee $employee)
    {
        try {
            $employee->delete();

            return redirect()->route('employees.index')
                ->with('success', 'Empleado eliminado correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting employee: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando el empleado');
        }
    }
}
