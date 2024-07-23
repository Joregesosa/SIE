<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function index()
    {
        $expenses = Expense::with('category')->get();

        return Inertia::render('Finanzas/expenses', [
            'data' => $expenses
        ]);
    }

    public function create()
    {
        // Return view to create a new expense
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
            'category_id' => 'required|exists:expense_categories,id',
            'description' => 'nullable|string|max:255',
        ]);

        Expense::create($request->all());

        return redirect()->route('expenses.index')
            ->with('success', 'Gasto creado correctamente');
    }

    public function show(Expense $expense)
    {
        return Inertia::render('Finanzas/expense-detail', [
            'data' => $expense
        ]);
    }

    public function edit(Expense $expense)
    {
        return Inertia::render('Finanzas/expense-edit', [
            'data' => $expense
        ]);
    }

    public function update(Request $request, Expense $expense)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
            'category_id' => 'required|exists:expense_categories,id',
            'description' => 'nullable|string|max:255',
        ]);

        $expense->update($request->all());

        return redirect()->route('expenses.index')
            ->with('success', 'Gasto actualizado correctamente');
    }

    public function destroy(Expense $expense)
    {
        $expense->delete();

        return redirect()->route('expenses.index')
            ->with('success', 'Gasto eliminado correctamente');
    }
}
