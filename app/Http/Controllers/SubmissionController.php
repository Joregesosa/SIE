<?php

namespace App\Http\Controllers;

use App\Models\Submission;
use App\Models\Assignment;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SubmissionController extends Controller
{
    public function index()
    {
        $submissions = Submission::with('assignment', 'student')->get();

        return Inertia::render('Submissions/index', [
            'data' => $submissions
        ]);
    }

    public function create()
    {
        $assignments = Assignment::all();
        $students = Student::all();

        return Inertia::render('Submissions/create', [
            'assignments' => $assignments,
            'students' => $students
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'assignment_id' => 'required|exists:assignments,id',
            'student_id' => 'required|exists:students,id',
            'submitted_at' => 'required|date',
            'file_path' => 'required|string',
            'grade' => 'nullable|numeric|min:0|max:100',
            'feedback' => 'nullable|string',
        ]);

        try {
            Submission::create($request->all());

            return redirect()->route('submissions.index')
                ->with('success', 'Entrega creada correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating submission: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando la entrega');
        }
    }

    public function show(Submission $submission)
    {
        return Inertia::render('Submissions/show', [
            'data' => $submission->load('assignment', 'student')
        ]);
    }

    public function edit(Submission $submission)
    {
        $assignments = Assignment::all();
        $students = Student::all();

        return Inertia::render('Submissions/edit', [
            'data' => $submission->load('assignment', 'student'),
            'assignments' => $assignments,
            'students' => $students
        ]);
    }

    public function update(Request $request, Submission $submission)
    {
        $request->validate([
            'assignment_id' => 'required|exists:assignments,id',
            'student_id' => 'required|exists:students,id',
            'submitted_at' => 'required|date',
            'file_path' => 'required|string',
            'grade' => 'nullable|numeric|min:0|max:100',
            'feedback' => 'nullable|string',
        ]);

        try {
            $submission->update($request->all());

            return redirect()->route('submissions.index')
                ->with('success', 'Entrega actualizada correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating submission: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando la entrega');
        }
    }

    public function destroy(Submission $submission)
    {
        try {
            $submission->delete();

            return redirect()->route('submissions.index')
                ->with('success', 'Entrega eliminada correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting submission: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando la entrega');
        }
    }
}
