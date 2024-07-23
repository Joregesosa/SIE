<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AttendanceController extends Controller
{
    public function index()
    {
        $attendances = Attendance::with('employee')->get();

        return Inertia::render('Attendance/index', [
            'data' => $attendances
        ]);
    }

    public function create()
    {
        $employees = Employee::all();

        return Inertia::render('Attendance/create', [
            'employees' => $employees
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'date' => 'required|date',
            'status' => 'required|string|in:present,absent,late',
            'remarks' => 'nullable|string|max:255',
        ]);

        try {
            Attendance::create($request->all());

            return redirect()->route('attendance.index')
                ->with('success', 'Asistencia registrada correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating attendance: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error registrando la asistencia');
        }
    }

    public function show(Attendance $attendance)
    {
        return Inertia::render('Attendance/show', [
            'data' => $attendance->load('employee')
        ]);
    }

    public function edit(Attendance $attendance)
    {
        $employees = Employee::all();

        return Inertia::render('Attendance/edit', [
            'data' => $attendance->load('employee'),
            'employees' => $employees
        ]);
    }

    public function update(Request $request, Attendance $attendance)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'date' => 'required|date',
            'status' => 'required|string|in:present,absent,late',
            'remarks' => 'nullable|string|max:255',
        ]);

        try {
            $attendance->update($request->all());

            return redirect()->route('attendance.index')
                ->with('success', 'Asistencia actualizada correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating attendance: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando la asistencia');
        }
    }

    public function destroy(Attendance $attendance)
    {
        try {
            $attendance->delete();

            return redirect()->route('attendance.index')
                ->with('success', 'Asistencia eliminada correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting attendance: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando la asistencia');
        }
    }
}
