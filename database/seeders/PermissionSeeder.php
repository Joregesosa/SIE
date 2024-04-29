<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       

     
        $permissions = [
          
           ['Ver Usuarios','users','Ver listado de usuarios'],
           ['Editar Perfil','profile.edit', 'Editar Informacion de Perfil'],
           ['Actualizar Perfil','profile.update', 'Actualizar Informacion de Perfil'],
           ['Eliminar Perfil','profile.destroy', 'Eliminar Informacion de Perfil'],

           ['Ver Permisos','permission', 'Ver listado de permisos'],
           ['Crear Permisos','permission.store', 'Crear permisos'],
           ['Actualizar Permisos','permission.update', 'Actualizar permisos'],
           ['Eliminar Permisos','permission.delete', 'Eliminar permisos'],
           
           ['Ver Roles','roles', 'Ver listado de roles'],
           ['Crear Roles','role.store', 'Crear roles'],
           ['Actualizar Roles','role.update', 'Actualizar roles'],
           ['Eliminar Roles','role.delete', 'Eliminar roles'],
          
        ];

      
        foreach ($permissions as $permission) {
            Permission::create([
                'name' => $permission[0],
                'route' => $permission[1],
                'description' => $permission[2],
            ]);
        }


       
    }
}
