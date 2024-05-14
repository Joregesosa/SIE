<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CheckPermission;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::post('/formcontact', [FormController::class, 'formContact'])->name('new.formcontact');

Route::get('/ContactForm', function () {
    $message = session('msj');
    if ($message) {
        Session::forget('msj');
    }
    return Inertia::render('ContactForm', [
        'msj' => $message
    ]);
})->name('ContactForm');

Route::get('/InscriptionForm', function (Request $request) {

    $message = session('msj');
    if ($message) {
        Session::forget('msj');
    }
    
    return Inertia::render('InscriptionForm', [
        'msj' => $message,
        'contact' =>  Contact::where('key', $request->input('contact'))->where('id_card', $request->input('card'))->first()
    ]);

})->name('InscriptionForm');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/levels', function () {
    return Inertia::render('Levels');
})->middleware(['auth', 'verified'])->name('levels');

Route::get('/groups', function () {
    return Inertia::render('Groups');
})->middleware(['auth', 'verified'])->name('groups');

Route::get('/contactsRequest', function () {
    return Inertia::render('Applications/ContactsRequest');
})->middleware(['auth', 'verified'])->name('contactsRequest');

/* Route::get('/users', function () {
    return Inertia::render('Users');
})->middleware(['auth', 'verified'])->name('users'); */
/* Route::get('/roles', function () {
    return Inertia::render('Roles');
})->middleware(['auth', 'verified'])->name('roles'); */

Route::post('/register', [RegisteredUserController::class, 'store'])->middleware(['auth', 'verified'])->name('register');

Route::get('/AccessDenied', function () {
    return Inertia::render('AccessDenied');
})->name('AccessDenied');

Route::post('/roles', [PersonController::class, 'create'])->name('inscriptions.create');

Route::middleware(['auth', CheckPermission::class])->group(function () {

    Route::get('/user', [ProfileController::class, 'index'])->name('users');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::controller(PermissionController::class)->group(function () {
        Route::get('/permission', 'index')->name('permission');
        Route::post('/permission', 'store')->name('permission.store');
        Route::put('/permission/{id}', 'update')->name('permission.update');
        Route::delete('/permission/{id}', 'destroy')->name('permission.delete');
    });

    Route::controller(RoleController::class)->group(function () {
        Route::get('/role', 'index')->name('roles');
        Route::post('/role', 'store')->name('role.store');
        Route::put('/role/{id}', 'update')->name('role.update');
        Route::delete('/role/{id}', 'destroy')->name('role.delete');
    });
    
});

require __DIR__ . '/auth.php';
