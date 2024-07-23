<?php

namespace App\Http\Controllers;

use App\Models\StudentAttendance;
use App\Models\Student;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class StudentAttendanceController extends Controller
{
    public function index()
    {
        $attendances = StudentAttendance::with('student', 'course')->get();

        return Inertia::render('StudentAttendances/index', [
            'data' => $attendances
        ]);
    }

    public function create()
    {
        $students = Student::all();
        $courses = Course::all();

        return Inertia::render('StudentAttendances/create', [
            'students' => $students,
            'courses' => $courses
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'course_id' => 'required|exists:courses,id',
            'date' => 'required|date',
            'status' => 'required|string|in:present,absent,late',
            'remarks' => 'nullable|string|max:255',
        ]);

        try {
            StudentAttendance::create($request->all());

            return redirect()->route('student-attendances.index')
                ->with('success', 'Asistencia registrada correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating attendance: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error registrando la asistencia');
        }
    }

    public function show(StudentAttendance $studentAttendance)
    {
        return Inertia::render('StudentAttendances/show', [
            'data' => $studentAttendance->load('student', 'course')
        ]);
    }

    public function edit(StudentAttendance $studentAttendance)
    {
        $students = Student::all();
        $courses = Course::all();

        return Inertia::render('StudentAttendances/edit', [
            'data' => $studentAttendance->load('student', 'course'),
            'students' => $students,
            'courses' => $courses
        ]);
    }

    public function update(Request $request, StudentAttendance $studentAttendance)
    {
        $request->validate([
            'student_id' => 'required|exists:students,id',
            'course_id' => 'required|exists:courses,id',
            'date' => 'required|date',
            'status' => 'required|string|in:present,absent,late',
            'remarks' => 'nullable|string|max:255',
        ]);

        try {
            $studentAttendance->update($request->all());

            return redirect()->route('student-attendances.index')
                ->with('success', 'Asistencia actualizada correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating attendance: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando la asistencia');
        }
    }

    public function destroy(StudentAttendance $studentAttendance)
    {
        try {
            $studentAttendance->delete();

            return redirect()->route('student-attendances.index')
                ->with('success', 'Asistencia eliminada correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting attendance: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando la asistencia');
        }
    }
}
