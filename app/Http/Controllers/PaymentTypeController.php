<?php

namespace App\Http\Controllers;

use App\Models\PaymentType;
use Illuminate\Http\Request;

class PaymentTypeController extends Controller
{
    public function index()
    {
        $paymentTypes = PaymentType::all();

        return Inertia::render('Pagos/payment-types', [
            'data' => $paymentTypes
        ]);
    }

    public function create()
    {
        // Return view to create a new payment type
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        PaymentType::create($request->all());

        return redirect()->route('payment-types.index')
            ->with('success', 'Tipo de pago creado correctamente');
    }

    public function show(PaymentType $paymentType)
    {
        return Inertia::render('Pagos/payment-type-detail', [
            'data' => $paymentType
        ]);
    }

    public function edit(PaymentType $paymentType)
    {
        return Inertia::render('Pagos/payment-type-edit', [
            'data' => $paymentType
        ]);
    }

    public function update(Request $request, PaymentType $paymentType)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        $paymentType->update($request->all());

        return redirect()->route('payment-types.index')
            ->with('success', 'Tipo de pago actualizado correctamente');
    }

    public function destroy(PaymentType $paymentType)
    {
        $paymentType->delete();

        return redirect()->route('payment-types.index')
            ->with('success', 'Tipo de pago eliminado correctamente');
    }
}
