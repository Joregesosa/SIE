<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\EnrollmentPayment;
use Illuminate\Http\Request;

class EnrollmentPaymentController extends Controller
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
    public function store(Request $request)
    {

        $validator = validator($request->all(), [
            'contact_id' => 'required',
            'amount' => 'required',
            'method' => 'required',
            'date' => 'required',
            'reference' =>'required_if:method,2',
        ]);

        if ($validator->fails()) {

            session()->put('msj', ['error' => array_values($validator->errors()->messages())]);
            return back();
        }

        try {
            EnrollmentPayment::create($request->all());
            $contact = Contact::find($request->contact_id);
            $contact->status = 2;
            $contact->save();
        } catch (\Exception $e) {
            return response()->json(['errors' => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(EnrollmentPayment $enrollmentPayment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(EnrollmentPayment $enrollmentPayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, EnrollmentPayment $enrollmentPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(EnrollmentPayment $enrollmentPayment)
    {
        //
    }
}
