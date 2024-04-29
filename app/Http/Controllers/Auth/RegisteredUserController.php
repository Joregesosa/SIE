<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\NewUserNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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
    public function store(Request $request)
    {
        $mensajes = [
            'firstName' => 'El nombre es invalido',
            'secondName' => 'El nombre es invalido',
            'fLastName' => 'El nombre es invalido',
            'sLastName' => 'El nombre es invalido',
            'email.required' => 'El email no puede estar en blanco',
            'email.email' => 'Email no valido',
            'email.unique' => 'Ya existe una cuenta con este email'
        ];

        $validator =  validator($request->all(), [
            'firstName' => 'required|string|max:255',
            'secondName' => 'required|string|max:255|required|string|max:255',
            'fLastName' => 'required|string|max:255',
            'sLastName' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
 
        ], $mensajes);

          if ($validator->fails()) {

            return redirect()->route('users')->with('msj', ['error' => array_values($validator->errors()->messages())], 404);
        }

        $userName = $this->generateUsername(
            $request->firstName,
            $request->fLastName,
        );

        $password = Str::random(12);

        $user = User::create([
            'firstName' => $request->firstName,
            'secondName' => $request->secondName,
            'fLastName' => $request->fLastName,
            'sLastName' => $request->sLastName,
            'email' => $request->email,
            'userName' => $userName,
            'password' => Hash::make($password),
        ]);

        $user->notify(new NewUserNotification($userName, $password));

        $users = User::all(); 

        return Inertia::render('Users', [
            'usersData' => $users,
            'msj' => ["success" => 'Usuario registrado con exito']
        ]);
    }

    private function generateUsername($firstName, $fLastName,)
    {
        // Generar nombre de usuario base
        $counter = 1;

        // Agregar un número aleatorio al final
        $username =  strtolower(substr($firstName, 0, 1) . '.' . $fLastName);

        // Verificar si el nombre de usuario ya existe
        while ($this->usernameExists($username)) {
            // Si existe, generar un nuevo número aleatorio y probar de nuevo
            $counter++;
            strtolower(substr($firstName, 0, $counter) . '.' . $fLastName);
        }

        return $username;
    }

    private function usernameExists($username)
    {
        // Consultar en la base de datos si el nombre de usuario existe
        $user = User::where('userName', $username)->first();

        return $user !== null;
    }


    private function redirectAfterRegister($mensaje){
      return ["hola"];

        $users = User::all();

        // $roles = Rol::select('id', 'nombre')->where('status', 1)->get();

        return Inertia::render('Users', [
            'usersData' => $users,
            'msj' => $mensaje
        ]);
    }
}
