<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Level;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;


class ContactFormController extends Controller
{
    public function create()
    {
        return Inertia::render('Applications/ContactForm')->with('levels', Level::all());
    }

    public function store(Request $request)
    {

        try {
            Request()->merge(['key' =>  bin2hex(random_bytes(10))]);

            $validator = validator(
                $request->all(),
                [
                    'email' => 'required|email',
                    'level_id' => 'required|exists:levels,id',
                    'id_card' => 'required|unique:contacts',
                ],
                [
                    'email.required' => 'Es necesario proporcionar un correo electrónico',
                    'email.email' => 'El correo proporcionado no es valido',
                    'level_id.required' => 'Es necesario proporcionar el nivel que desea aplicar',
                    'level_id.exists' => 'El nivel seleccionado no existe',
                    'id_card.required' => 'Es necesario proporcionar el numero de cédula',
                    'id_card.unique' => 'Ya existe un registro con el mismo numero de cédula',
                ]
            );

            if ($validator->fails()) {
                return back()->withErrors(['error' => array_values($validator->errors()->messages())]);
            }


            Contact::create($request->all());
            return redirect()->route('contact.create')->with('msj', ['success' => "El Formulario fue enviado satisfactoriamente"], 200);
        } catch (QueryException $e) {
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

            $errorMessage = $errorMessage . " Error en el campo '{$errorField}': ";

            // Redirection con el mensaje de error personalizado
            return back()->with('msj', ['error' => $errorMessage]);
        }
    }

    public function index()
    {
 
        return Inertia::render('Solicitudes/ContactsRequest', [
            'data' => Contact::with('level')->get(),
            'levels' => Level::all()
        ]);
    }

    public function show($id)
    {
        try {
            $contact = Contact::with('level')->findOrFail($id);
 
            return Inertia::render('Applications/ContactVerification', [
                'data' => $contact
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'La solicitud no existe ' + $e->getMessage()], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada' + $e->getMessage()], 500);
        }
    }

    public function update(Request $request)
    {
        try {
            $mensajes = [
                'required' => 'El campo :attribute es requerido',
                'exists' => 'El campo :attribute no existe',
            ];

            $validator = validator($request->all(), [
                'id' => 'required|exists:contacts,id',
                'key' => 'required',
                'first_name' => 'required',
                'second_name' => 'required',
                'fLast_name' => 'required',
                'sLast_name' => 'required',
                'id_card' => 'required',
                'age' => 'required',
                'number' => 'required',
                'email' => 'required',
                'last_institution' => 'required',
                'address' => 'required',
                'father_names' => 'required',
                'father_phone' => 'required',
                'father_occupation' => 'required',
                'mother_names' => 'required',
                'mother_phone' => 'required',
                'mother_occupation' => 'required',
                'level' => 'required',
                'status' => 'required',
            ], $mensajes);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $contact = Contact::findOrFail($request->id);
            $contact->update($request->all());

            session()->put('msj', ["success" => 'Solicitud actializada con exito']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'La solicitud no existe '], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
        return redirect(route('contact'));
    }

    public function destroy($id)
    {

        try {
            $contact = Contact::findOrFail($id);
            $contact->status = 5;
            $contact->save();

            session()->put('msj', ["success" => 'Solicitud eliminada con exito']);
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'La solicitud no existe '], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
        return redirect(route('contact'));
    }

    public function enviado($id)
    {

        try {
            $contact = Contact::findOrFail($id);
            $contact->status = 3;
            $contact->save();
        } catch (ModelNotFoundException $e) {
            return response()->json(['error' => 'La solicitud no existe '], 404);
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en la acción realizada'], 500);
        }
        return back();
    }
}
