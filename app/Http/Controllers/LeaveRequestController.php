<?php

namespace App\Http\Controllers;

use App\Models\LeaveRequest;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LeaveRequestController extends Controller
{
    public function index()
    {
        $leaveRequests = LeaveRequest::with('employee')->get();

        return Inertia::render('LeaveRequests/index', [
            'data' => $leaveRequests
        ]);
    }

    public function create()
    {
        $employees = Employee::all();

        return Inertia::render('LeaveRequests/create', [
            'employees' => $employees
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'reason' => 'required|string|max:255',
            'status' => 'required|string|in:pending,approved,rejected',
            'remarks' => 'nullable|string|max:255',
        ]);

        try {
            LeaveRequest::create($request->all());

            return redirect()->route('leave-requests.index')
                ->with('success', 'Solicitud de permiso creada correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating leave request: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando la solicitud de permiso');
        }
    }

    public function show(LeaveRequest $leaveRequest)
    {
        return Inertia::render('LeaveRequests/show', [
            'data' => $leaveRequest->load('employee')
        ]);
    }

    public function edit(LeaveRequest $leaveRequest)
    {
        $employees = Employee::all();

        return Inertia::render('LeaveRequests/edit', [
            'data' => $leaveRequest->load('employee'),
            'employees' => $employees
        ]);
    }

    public function update(Request $request, LeaveRequest $leaveRequest)
    {
        $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'reason' => 'required|string|max:255',
            'status' => 'required|string|in:pending,approved,rejected',
            'remarks' => 'nullable|string|max:255',
        ]);

        try {
            $leaveRequest->update($request->all());

            return redirect()->route('leave-requests.index')
                ->with('success', 'Solicitud de permiso actualizada correctamente');
        } catch (\Exception $e) {
            Log::error('Error updating leave request: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando la solicitud de permiso');
        }
    }

    public function destroy(LeaveRequest $leaveRequest)
    {
        try {
            $leaveRequest->delete();

            return redirect()->route('leave-requests.index')
                ->with('success', 'Solicitud de permiso eliminada correctamente');
        } catch (\Exception $e) {
            Log::error('Error deleting leave request: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando la solicitud de permiso');
        }
    }
}
