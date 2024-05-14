<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function formContact(Request $request)
    {
       
       try{ 
            Request()->merge(['key' =>  bin2hex(random_bytes(10))]);

             $validator = validator($request->all(), [
                'email' => 'required|email',
                'level' => 'required',
                'id_card' => 'required|unique:contacts',
            ], [
                'email.required' => 'Es nesesario proporcionar un correo electronico',
                'email.email' => 'El correo proporcionado no es valido',
                'level.required' => 'Es nesesario proporcionar el nivel que desea aplicar',
                'id_card.required' => 'Es nesesario proporcionar el numero de cedula',
                'id_card.unique' => 'Ya existe un registro con el mismo numero de cedula',
            ]   );


            if ($validator->fails()) {
                return redirect()->route('ContactForm')->with('msj', ['error' => array_values($validator->errors()->messages())], 404);
            }

            Contact::create($request->all());   
            return redirect()->route('ContactForm')->with('msj', ['success' => "El Formulario fue enviado satisfactoriamente"], 200);


       }  catch (QueryException $e) {
        // Manejar los errores de SQL
        $errorCode = $e->errorInfo[1];

        $errorMessage = $e->getMessage();
        
        // Buscar el nombre del campo en el mensaje de error
        preg_match("/'([^']+)'/", $errorMessage, $matches);
        $errorField = Arr::get($matches, 1, 'campo desconocido');

        // Mensajes personalizados para diferentes códigos de error
        $errorMessage = match ($errorCode) {
            1048 => 'Por favor, complete todos los campos obligatorios.',
            1062 => 'Ya existe un registro con los mismos valores únicos.',
            // Agrega más casos según sea necesario...
            default => 'Ha ocurrido un error al procesar su solicitud.',
        };

        $errorMessage = $errorMessage." Error en el campo '{$errorField}': "  ;

        // Redireccionar con el mensaje de error personalizado
        return back()->with('msj', ['error' => $errorMessage] );
    }
          
    }
}
