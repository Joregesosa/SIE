<?php

namespace App\Http\Controllers;

use App\Models\Scores;
use App\Http\Requests\StoreScoresRequest;
use App\Http\Requests\UpdateScoresRequest;

class ScoresController extends Controller
{
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
    public function store(StoreScoresRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Scores $scores)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Scores $scores)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateScoresRequest $request, Scores $scores)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Scores $scores)
    {
        //
    }
}
