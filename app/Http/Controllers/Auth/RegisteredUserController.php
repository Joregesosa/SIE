<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'firstName' => 'required|string|max:255',
            'secondName' => 'required|string|max:255required|string|max:255',
            'fLastName' => 'required|string|max:255',
            'sLastName' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $userName = $this->generateUsername(
            $request->firstName,
            $request->secondName,
            $request->fLastName,
            $request->sLastName
        );
        $password = $this->generatePassword();


        $user = User::create([
            'firstName' => $request->firstName,
            'secondName' => $request->secondName,
            'fLastName' => $request->fLastName,
            'sLastName' => $request->sLastName,
            'email' => $request->email,
            'userName' => $userName,
            'password' => Hash::make($password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }

    private function generateUsername($firstName, $secondName, $fLastName, $sLastName)
    {
        // Generar nombre de usuario base
        $usernameBase = $firstName . substr($secondName, 0, 3) . strtoupper(substr($fLastName, 0, 2));

        // Agregar un número aleatorio al final
        $username = $usernameBase . rand(100, 999);

        // Verificar si el nombre de usuario ya existe
        while ($this->usernameExists($username)) {
            // Si existe, generar un nuevo número aleatorio y probar de nuevo
            $username = $usernameBase . rand(100, 999);
        }

        return $username;
    }

    private function usernameExists($username)
    {
        // Consultar en la base de datos si el nombre de usuario existe
        $user = User::where('username', $username)->first();

        return $user !== null;
    }

    private function generatePassword()
    {
        while (true) {
            $password = Str::random(10);

            if (
                preg_match('/[A-Z]/', $password) &&
                preg_match('/[a-z]/', $password) &&
                preg_match('/[0-9]/', $password) &&
                preg_match('/[^A-Za-z0-9]/', $password)
            ) {
                break;
            }
        }

        return $password;
    }
}
