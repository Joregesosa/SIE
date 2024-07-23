<?php

namespace App\Http\Controllers;

use App\Models\Incident;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class IncidentController extends Controller
{
    public function index()
    {
        $incidents = Incident::with('student', 'teacher')->get();

        return Inertia::render('Incidents/index', [
            'data' => $incidents
        ]);
    }

    public function create()
    {
        $students = Student::all();
        $teachers = Teacher::all();

        return Inertia::render('Incidents/create', [
            'students' => $students,
            'teachers' => $teachers
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'teacher_id' => 'required|exists:teachers,id',
            'date' => 'required|date',
            'description' => 'required|string',
            'action_taken' => 'nullable|string',
            'status' => 'required|string|in:reported,under_investigation,resolved',
        ]);

        try {
            Incident::create($request->all());

            return redirect()->route('incidents.index')
                ->with('success', 'Incidente registrado correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating incident: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error registrando el incidente');
        }
    }

    public function show(Incident $incident)
    {
        return Inertia::render('Incidents/show', [
            'data' => $incident->load('student', 'teacher')
        ]);
    }

    public function edit(Incident $incident)
    {
        $students = Student::all();
        $teachers = Teacher::all();

        return Inertia::render('Incidents/edit', [
            'data' => $incident->load('student', 'teacher'),
            'students' => $students,
            'teachers' => $teachers
        ]);
    }

    public function update(Request $request, Incident $incident)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'teacher_id' => 'required|exists:teachers,id',
            'date' => 'required|date',
            'description' => 'required|string',
            'action_taken' => 'nullable|string',
            'status' => 'required|string|in:reported,under_investigation,resolved',
        ]);

        try {
            $incident->update($request->all());

            return redirect()->route('incidents.index')
                ->with('success', 'Incidente actualizado correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating incident: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando el incidente');
        }
    }

    public function destroy(Incident $incident)
    {
        try {
            $incident->delete();

            return redirect()->route('incidents.index')
                ->with('success', 'Incidente eliminado correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting incident: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando el incidente');
        }
    }
}
