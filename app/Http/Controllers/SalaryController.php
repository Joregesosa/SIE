<?php

namespace App\Http\Controllers;

use App\Models\Salary;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SalaryController extends Controller
{
    public function index()
    {
        $salaries = Salary::with('employee')->get();

        return Inertia::render('Salaries/index', [
            'data' => $salaries
        ]);
    }

    public function create()
    {
        $employees = Employee::all();

        return Inertia::render('Salaries/create', [
            'employees' => $employees
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'amount' => 'required|numeric|min:0',
            'pay_date' => 'required|date',
            'description' => 'nullable|string|max:255',
        ]);

        try {
            $salary = Salary::create($request->all());

            return redirect()->route('salaries.index')
                ->with('success', 'Salario creado correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating salary: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando el salario');
        }
    }

    public function show(Salary $salary)
    {
        return Inertia::render('Salaries/show', [
            'data' => $salary->load('employee')
        ]);
    }

    public function edit(Salary $salary)
    {
        $employees = Employee::all();

        return Inertia::render('Salaries/edit', [
            'data' => $salary->load('employee'),
            'employees' => $employees
        ]);
    }

    public function update(Request $request, Salary $salary)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'amount' => 'required|numeric|min:0',
            'pay_date' => 'required|date',
            'description' => 'nullable|string|max:255',
        ]);

        try {
            $salary->update($request->all());

            return redirect()->route('salaries.index')
                ->with('success', 'Salario actualizado correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating salary: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando el salario');
        }
    }

    public function destroy(Salary $salary)
    {
        try {
            $salary->delete();

            return redirect()->route('salaries.index')
                ->with('success', 'Salario eliminado correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting salary: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando el salario');
        }
    }
}
