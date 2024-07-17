<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\CorreoController;
use App\Http\Controllers\EnrollmentPaymentController;
use App\Http\Controllers\GraphController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SystemController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CheckPermission;
use App\Models\Contact;
use App\Models\EnrollmentPayment;
use Database\Seeders\LevelSeeder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

/* borrar después */
/* Route::get('/enrollmentRequest', function () {
    return Inertia::render('Applications/EnrollmentRequest');
})->middleware(['auth', 'verified'])->name('enrollmentRequest'); */

Route::get('/enrollmentVerification', function () {
    return Inertia::render('Applications/EnrollmentVerification');
})->middleware(['auth', 'verified'])->name('enrollmentVerification');


Route::get('/', function () {

    if (Auth::check()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('Index/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

    /* Route::post('/register', [RegisterUserController::class, 'store'])->middleware(['auth', 'verified'])->name('register') */;


Route::controller(EnrollmentPaymentController::class)->group(function () {
    Route::post('/Payment', 'store')->name('payment.store');
});

Route::controller(ContactFormController::class)->group(function () {
    Route::get('/ContactForm', 'create')->name('contact.create');
    Route::post('/ContactForm', 'store')->name('contact.store');
});

Route::controller(PersonController::class)->group(function () {
    Route::get('/InscriptionForm', 'create')->name('inscription.create');
    Route::post('/InscriptionForm', 'store')->name('inscription.store');
    Route::post('/InscriptionSent', 'sent')->name('inscription.sent');
});

Route::controller(SystemController::class)->group(function () {
    Route::get('/dashboard', 'dashboard')->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/AccessDenied', 'accessdenied')->name('AccessDenied');
});

//Route::middleware(['auth', CheckPermission::class])->group(function () {

Route::controller(GraphController::class)->group(function () {
    Route::get('/correos', 'index')->name('correo.index');
    Route::post('/correos', 'store')->name('correo.store');
});

Route::controller(ProfileController::class)->group(function () {
    Route::get('/user', 'index')->name('users');
    Route::get('/profile', 'edit')->name('profile.edit');
    Route::patch('/profile', 'update')->name('profile.update');
    Route::delete('/profile', 'destroy')->name('profile.destroy');
});

Route::controller(ContactFormController::class)->group(function () {
    Route::get('/contactsRequest', 'index')->name('contact');
    Route::get('/contacts/{id}', 'show')->name('contact.show');
    Route::put('/contacts', 'update')->name('contact.update');
    Route::delete('/contacts/{id}', 'destroy')->name('contact.delete');
    Route::post('/contacts/{id}', 'enviado')->name('contact.enviado');
});

Route::controller(PersonController::class)->group(function () {
    Route::get('/person', 'index')->name('person');
    Route::get('/person/{id}', 'show')->name('person.show');
    Route::put('/person', 'update')->name('person.update');
    Route::delete('/person/{id}', 'destroy')->name('person.delete');
});

Route::controller(StudentController::class)->group(function () {
    Route::get('/students', 'index')->name('students');
    Route::get('/students/{id}', 'show')->name('students.show');
    Route::put('/students', 'update')->name('students.update');
    Route::delete('/students/{id}', 'destroy')->name('students.delete');
});

Route::controller(GroupController::class)->group(function () {
    Route::get('/groups', 'index')->name('groups');
    Route::post('/groups', 'store')->name('groups.store');
    Route::get('/groups/{id}', 'show')->name('groups.show');
    Route::put('/groups', 'update')->name('groups.update');
    Route::delete('/groups/{id}', 'destroy')->name('groups.delete');
});

Route::controller(LevelController::class)->group(function () {
    Route::get('/levels', 'index')->name('levels');
    Route::post('/levels', 'store')->name('levels.store');
    Route::get('/levels/{id}', 'show')->name('levels.show');
    Route::put('/levels', 'update')->name('levels.update');
    Route::delete('/levels/{id}', 'destroy')->name('levels.delete');
});

Route::controller(PermissionController::class)->group(function () {
    Route::get('/permission', 'index')->name('permission');
    Route::post('/permission', 'store')->name('permission.store');
    Route::put('/permission/{id}', 'update')->name('permission.update');
    Route::delete('/permission/{id}', 'destroy')->name('permission.delete');
});

Route::controller(RoleController::class)->group(function () {
    Route::get('/role', 'index')->name('roles');
    Route::get('/role/create', 'create')->name('role.create');
    Route::post('/role', 'store')->name('role.store');
    Route::get('/role/{id}', 'edit')->name('role.edit');
    Route::put('/role/{id}', 'update')->name('role.update');
    Route::delete('/role/{id}', 'destroy')->name('role.delete');
});

//});

require __DIR__ . '/auth.php';
