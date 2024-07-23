<?php

namespace App\Http\Controllers;

use App\Models\ExpenseCategory;
use Illuminate\Http\Request;

class ExpenseCategoryController extends Controller
{
    public function index()
    {
        $categories = ExpenseCategory::all();

        return Inertia::render('Finanzas/expense-categories', [
            'data' => $categories
        ]);
    }

    public function create()
    {
        // Return view to create a new expense category
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        ExpenseCategory::create($request->all());

        return redirect()->route('expense-categories.index')
            ->with('success', 'Categoría de gasto creada correctamente');
    }

    public function show(ExpenseCategory $expenseCategory)
    {
        return Inertia::render('Finanzas/expense-category-detail', [
            'data' => $expenseCategory
        ]);
    }

    public function edit(ExpenseCategory $expenseCategory)
    {
        return Inertia::render('Finanzas/expense-category-edit', [
            'data' => $expenseCategory
        ]);
    }

    public function update(Request $request, ExpenseCategory $expenseCategory)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        $expenseCategory->update($request->all());

        return redirect()->route('expense-categories.index')
            ->with('success', 'Categoría de gasto actualizada correctamente');
    }

    public function destroy(ExpenseCategory $expenseCategory)
    {
        $expenseCategory->delete();

        return redirect()->route('expense-categories.index')
            ->with('success', 'Categoría de gasto eliminada correctamente');
    }
}
