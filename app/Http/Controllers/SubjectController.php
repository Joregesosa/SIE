<?php

namespace App\Http\Controllers;

use App\Models\Subject;
use App\Http\Requests\StoresubjectRequest;
use App\Http\Requests\UpdatesubjectRequest;
use Beta\Microsoft\Graph\Model\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Cursos/Subjects', [
            'data' => Subject::all(),
        ]);
    }

    public function create()
    {
        $grades = Grade::all();
        $teachers = Teacher::all();

        return Inertia::render('Subjects/create', [
            'grades' => $grades,
            'teachers' => $teachers
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'credits' => 'required|numeric|min:0',
            'teacher_id' => 'required|exists:teachers,id',
            'grades' => 'required|array',
            'grades.*' => 'exists:grades,id',
        ]);

        try {
            $subject = Subject::create($request->only('name', 'description', 'credits', 'teacher_id'));
            $subject->grades()->sync($request->grades);

            return redirect()->route('subjects.index')
                ->with('success', 'Materia creada correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating subject: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando la materia');
        }
    }

    public function show(Subject $subject)
    {
        return Inertia::render('Subjects/show', [
            'data' => $subject->load('grades', 'teacher', 'assignments')
        ]);
    }

    public function edit(Subject $subject)
    {
        $grades = Grade::all();
        $teachers = Teacher::all();

        return Inertia::render('Subjects/edit', [
            'data' => $subject->load('grades', 'teacher'),
            'grades' => $grades,
            'teachers' => $teachers
        ]);
    }

    public function update(Request $request, Subject $subject)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'credits' => 'required|numeric|min:0',
            'teacher_id' => 'required|exists:teachers,id',
            'grades' => 'required|array',
            'grades.*' => 'exists:grades,id',
        ]);

        try {
            $subject->update($request->only('name', 'description', 'credits', 'teacher_id'));
            $subject->grades()->sync($request->grades);

            return redirect()->route('subjects.index')
                ->with('success', 'Materia actualizada correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating subject: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando la materia');
        }
    }

    public function destroy(Subject $subject)
    {
        try {
            $subject->grades()->detach();
            $subject->delete();

            return redirect()->route('subjects.index')
                ->with('success', 'Materia eliminada correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting subject: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando la materia');
        }
    }
}
