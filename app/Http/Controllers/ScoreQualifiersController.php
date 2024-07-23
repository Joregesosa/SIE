<?php

namespace App\Http\Controllers;

use App\Models\ScoreQualifiers;
use App\Http\Requests\StoreScoreQualifiersRequest;
use App\Http\Requests\UpdateScoreQualifiersRequest;
use Inertia\Inertia;

class ScoreQualifiersController extends Controller
{


    public function index()
    {
       
        return Inertia::render('score_qualifiers/index', [
            'data' => ScoreQualifiers::all()
        ]);
       
    }
    
    public function create()
    {
        return Inertia::render('score_qualifiers/create');
    }

   
    public function store(StoreScoreQualifiersRequest $request)
    {
        try {

            $request->validate([
                'min' => 'required|numeric',
                'max' => 'required|numeric',
                'qualifier' => 'required|string|max:255',
            ]); 

            $scoreQualifiers = ScoreQualifiers::create($request->all());

            return redirect()->route('score_qualifiers.index')
                ->with('success', 'Calificador de nota creado correctamente');
        } catch (\Exception $e) {
            Log::error('Error creating score qualifier: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error creando el calificador de nota');
        }
            
    }

    public function show(ScoreQualifiers $scoreQualifiers)
    {
        return view('score_qualifiers.show', compact('scoreQualifiers'));
    }
}
