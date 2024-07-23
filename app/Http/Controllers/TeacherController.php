<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Http\Requests\StoreTeacherRequest;
use App\Http\Requests\UpdateTeacherRequest;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //ver
        return Inertia::render('Teachers/teachers', [
            'data' => Teacher::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //nuew
        return Inertia::render('Teachers/teacher-create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeacherRequest $request)
    {
        
        try {
        
           
            $request->validate([
                'identification_data.first_name' => 'required',
                'identification_data.second_name' => 'required',
                'identification_data.fLast_name' => 'required',
                'identification_data.sLast_name' => 'required',
                'identification_data.identification' => 'required',
                'identification_data.identification_type' => 'required',
                'identification_data.birthdate' => 'required',
                '   identification_data.email' => 'required',
                'identification_data.phone' => 'required',
                'identification_data.address' => 'required'
            ]);
            $person = Person::create($request->identification_data);

            $teacher = Teacher::create([
                'person_id' => $person->id,
                'status' => 1
            ]);

             $displayName =  implode(" ", [$request->identification_data['first_name'], $request->identification_data['second_name'], $request->identification_data['fLast_name'], $request->identification_data['sLast_name']]);
            $mailNickname = UserService::generateUsername($person);
            $userPrincipalName =  $mailNickname . '@trc.edu.ec';
            $password = Str::random(12);
          
            $student->update(['academic_email' => $password]);

            if (!GraphHelper::createUser($displayName,  $mailNickname,  $userPrincipalName, $password)) {
                throw new \Exception('Error al crear el correo en el directorio activo.');
                DB::rollBack();
                return back();
            } 

            User::create([
                'person_id' => $person?->id,
                'email' => $userPrincipalName,
                'password' => Hash::make($password),
                'role_id' => 3
            ]);

            $contact = Contact::findOrFail($request->contact_id);
            $contact->status = 4;
            $contact->notify(new NewUserNotification($userPrincipalName, $password));
            $contact->save();

            DB::commit();

            return redirect()->route('teachers.index')
                ->with('success', 'Docente registrado correctamente');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', $e->getMessage());
        }


    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $id)
    {
        //ver detalle de un docente , con sus cursos y materias asignadas

       $materias = $id->courses()->with('subject')->get();
        return Inertia::render('Teachers/teacher-detail', [
            'data' => $id,
            'materias' => $materias
        ]);

    }

  
    public function update(UpdateTeacherRequest $request, Teacher $teacher)
    {
               try {
            $request->validate([
                'identification_data.first_name' => 'required',
                'identification_data.second_name' => 'required',
                'identification_data.fLast_name' => 'required',
                'identification_data.sLast_name' => 'required',
                'identification_data.identification' => 'required',
                'identification_data.identification_type' => 'required',
                'identification_data.birthdate' => 'required',
                'identification_data.email' => 'required',
                'identification_data.phone' => 'required',
                'identification_data.address' => 'required'
            ]);

            $teacher->person->update($request->identification_data);

            return redirect()->route('teachers.index')
                ->with('success', 'Docente actualizado correctamente');

        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $teacher = Teacher::findOrFail($id);
            $teacher->status = 0;
            $teacher->save();

            return redirect()->route('teachers.index')
                ->with('success', 'Docente eliminado correctamente');
        } catch (\Exception $e) {
            return back()->with('error', $e->getMessage());
        }
    }
}
