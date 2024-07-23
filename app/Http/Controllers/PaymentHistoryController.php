<?php

namespace App\Http\Controllers;

use App\Models\PaymentHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Inertia\Response
     */
    public function index()
    {
        // Retrieve all payment histories and pass to the view
        $paymentHistories = PaymentHistory::all();

        return Inertia::render('Pagos/payment-history', [
            'data' => $paymentHistories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // This method is intended to show the form for creating a new payment history
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'payment_type_id' => 'required|exists:payment_types,id',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
        ]);

        try {
            // Create a new payment history record
            PaymentHistory::create($request->all());

            // Redirect to the payment history index page with a success message
            return redirect()->route('payment-history.index')
                ->with('success', 'Pago registrado correctamente');
        } catch (\Exception $e) {
            // Log the error and redirect back with an error message
            Log::error('Error registering payment: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error registrando el pago');
        }
    }

    /**
     * Display the specified resource.
     * 
     * @param \App\Models\PaymentHistory $paymentHistory
     * @return \Inertia\Response
     */
    public function show(PaymentHistory $paymentHistory)
    {
        // Display the details of a specific payment history
        return Inertia::render('Pagos/payment-history-detail', [
            'data' => $paymentHistory
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     * 
     * @param \App\Models\PaymentHistory $paymentHistory
     * @return \Inertia\Response
     */
    public function edit(PaymentHistory $paymentHistory)
    {
        // Show the form for editing a specific payment history
        return Inertia::render('Pagos/payment-history-edit', [
            'data' => $paymentHistory
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\PaymentHistory $paymentHistory
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, PaymentHistory $paymentHistory)
    {
        // Validate the request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'payment_type_id' => 'required|exists:payment_types,id',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
        ]);

        try {
            // Update the payment history record
            $paymentHistory->update($request->all());

            // Redirect to the payment history index page with a success message
            return redirect()->route('payment-history.index')
                ->with('success', 'Pago actualizado correctamente');
        } catch (\Exception $e) {
            // Log the error and redirect back with an error message
            Log::error('Error updating payment: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error actualizando el pago');
        }
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param \App\Models\PaymentHistory $paymentHistory
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(PaymentHistory $paymentHistory)
    {
        try {
            // Delete the payment history record
            $paymentHistory->delete();

            // Redirect to the payment history index page with a success message
            return redirect()->route('payment-history.index')
                ->with('success', 'Pago eliminado correctamente');
        } catch (\Exception $e) {
            // Log the error and redirect back with an error message
            Log::error('Error deleting payment: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Error eliminando el pago');
        }
    }
}
