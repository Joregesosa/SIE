<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Course;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AssignmentController extends Controller
{
    public function index()
    {
        $assignments = Assignment::with('course')->get();

        return Inertia::render('Assignments/index', [
            'data' => $assignments
        ]);
    }

    public function create()
    {
        $courses = Group::all();

        return Inertia::render('Assignments/create', [
            'courses' => $courses
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'due_date' => 'required|date',
            'max_grade' => 'required|numeric|min:0|max:100',
        ]);

        try {
            Assignment::create($request->all());

            return redirect()->route('assignments.index')
                ->with('success', 'Tarea creada correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating assignment: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando la tarea');
        }
    }

    public function show(Assignment $assignment)
    {
        return Inertia::render('Assignments/show', [
            'data' => $assignment->load('course', 'submissions')
        ]);
    }

    public function edit(Assignment $assignment)
    {
        $courses = Group::all();

        return Inertia::render('Assignments/edit', [
            'data' => $assignment->load('course'),
            'courses' => $courses
        ]);
    }

    public function update(Request $request, Assignment $assignment)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'due_date' => 'required|date',
            'max_grade' => 'required|numeric|min:0|max:100',
        ]);

        try {
            $assignment->update($request->all());

            return redirect()->route('assignments.index')
                ->with('success', 'Tarea actualizada correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating assignment: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando la tarea');
        }
    }

    public function destroy(Assignment $assignment)
    {
        try {
            $assignment->delete();

            return redirect()->route('assignments.index')
                ->with('success', 'Tarea eliminada correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting assignment: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando la tarea');
        }
    }
}
