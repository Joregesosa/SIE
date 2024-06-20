<?php

namespace App\Services;

use App\Models\User;
use App\Notifications\NewUserNotification;
use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserService
{
    public function createUser($data)
    {

        $mensajes = [
            'first_name' => 'El nombre es invalido',
            'fLast_name' => 'El nombre es invalido',
            'email.required' => 'El email no puede estar en blanco',
            'email.email' => 'Email no valido',
            'email.unique' => 'Ya existe una cuenta con este email'
        ];

        $validator =  validator($data, [
            'first_name' => 'required|string|max:255',
            'fLast_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
        ], $mensajes);

        if ($validator->fails()) {
            throw new Exception(json_encode(array_values($validator->errors()->messages())));
            return;
        }

        $userName = $this->generateUsername($data['first_name'], $data['fLast_name']);

        $password = Str::random(12);

        User::create([
            'person_id' => $data['person_id'],
            'email' => $data['email'],
            'user_name' => $userName,
            'password' => Hash::make($password),
            'role_id' => $data['role_id']
        ]);

        return true;

        /*  $user->notify(new NewUserNotification($userName, $password)); */

        /*  $users = User::all(); 

        return Inertia::render('Users', [
            'usersData' => $users,
            'msj' => ["success" => 'Usuario registrado con éxito']
        ]); */
    }

    private function generateUsername($firstName, $fLastName,)
    {

        $counter = 1;
        $username =  strtolower(substr($firstName, 0, 1) . '.' . $fLastName);

        while ($this->usernameExists($username)) {
            $username = strtolower(substr($firstName, 0, 1) . '.' . $fLastName . $counter);
            $counter++;
        }

        return $username;
    }

    private function usernameExists($username)
    {
        return User::where('user_name', $username)->exists();
    }
}
