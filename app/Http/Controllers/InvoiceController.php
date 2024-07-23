<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::with('user')->get();

        return Inertia::render('Pagos/invoices', [
            'data' => $invoices
        ]);
    }

    public function create()
    {
        // Return view to create a new invoice
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'total_amount' => 'required|numeric|min:0',
            'due_date' => 'required|date',
            'status' => 'required|string|in:pending,paid,overdue',
        ]);

        Invoice::create($request->all());

        return redirect()->route('invoices.index')
            ->with('success', 'Factura creada correctamente');
    }

    public function show(Invoice $invoice)
    {
        return Inertia::render('Pagos/invoice-detail', [
            'data' => $invoice
        ]);
    }

    public function edit(Invoice $invoice)
    {
        return Inertia::render('Pagos/invoice-edit', [
            'data' => $invoice
        ]);
    }

    public function update(Request $request, Invoice $invoice)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'total_amount' => 'required|numeric|min:0',
            'due_date' => 'required|date',
            'status' => 'required|string|in:pending,paid,overdue',
        ]);

        $invoice->update($request->all());

        return redirect()->route('invoices.index')
            ->with('success', 'Factura actualizada correctamente');
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        return redirect()->route('invoices.index')
            ->with('success', 'Factura eliminada correctamente');
    }
}
