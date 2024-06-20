<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Microsoft\Graph\Graph;
use Microsoft\Graph\Model\User;
use Microsoft\Graph\Generated\Models\User as GraphUser;
use App\Services\MicrosoftGraphService;
use App\Providers\GraphHelper;
use ReflectionClass;

use function PHPSTORM_META\type;

class GraphController extends Controller
{
    public function index()
    {
        try {
            $users = GraphHelper::getUsers();

           
            return $users;
        } catch (\Exception $e) {
            dd($e);
            return back()->withError('Error al obtener usuarios: ' . $e->getMessage());
        }
    }

    public function store(Request $request)
    {

        try {
            // Ejemplo básico para crear un usuario, adaptarlo según necesidades
            $id = $request->input('id');
            $displayName = $request->input('displayName');
            $mailNickname = $request->input('mailNickname');
            $userPrincipalName = $request->input('userPrincipalName');
            $password = $request->input('password');

            // Crear usuario
            $new_email = GraphHelper::createUser($displayName, $mailNickname, $userPrincipalName, $password);

            // Puedes manejar la respuesta de crear usuario según necesites
            if ($new_email != null) {
                $correo = $new_email['userPrincipalName'];

                Student::findOrFail($id)->update(['status_id' => 3, 'academic_email' => $correo]);
                return back()->with('msj', ['success' => "Correo creado satisfactoriamente \n ".$correo], 200);
            } else {
                // Error al crear usuario
                return back()->with('msj', ['error' => "Error al crear correo"], 500);
            }
        } catch (\Exception $e) {
            dd($e);
            return back()->with('msj', ['error' => $e], 500);
        }
    }

    
}
