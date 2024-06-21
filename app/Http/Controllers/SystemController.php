<?php

namespace App\Http\Controllers;

use App\Models\system;
use App\Http\Requests\StoresystemRequest;
use App\Http\Requests\UpdatesystemRequest;
use Inertia\Inertia;

class SystemController extends Controller
{

    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function accessdenied()
    {
        return Inertia::render('AccessDenied');
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoresystemRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(system $system)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(system $system)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatesystemRequest $request, system $system)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(system $system)
    {
        //
    }
}
