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
          
           ['Ver Usuarios','users','Ver listado de usuarios','orange-500','blue-500'],
           
           ['Editar Perfil','profile.edit', 'Editar Informacion de Perfil','blue-500','orange-500'],
           ['Actualizar Perfil','profile.update', 'Actualizar Informacion de Perfil','blue-500','orange-500'],
           ['Eliminar Perfil','profile.destroy', 'Eliminar Informacion de Perfil','blue-500','red-500'],

           ['Ver Permisos','permission', 'Ver listado de permisos','yellow-500','blue-500'],
           ['Crear Permisos','permission.store', 'Crear permisos','yellow-500','green-500'],
           ['Actualizar Permisos','permission.update', 'Actualizar permisos','yellow-500','orange-500'],
           ['Eliminar Permisos','permission.delete', 'Eliminar permisos','yellow-500','red-500'],
           
           ['Ver Roles','roles', 'Ver listado de roles','green-500','blue-500'],
           ['Crear Roles','role.store', 'Crear roles','green-500','green-500'],
           ['Actualizar Roles','role.update', 'Actualizar roles','green-500','orange-500'],
           ['Eliminar Roles','role.delete', 'Eliminar roles','green-500','red-500'],
          
       ];

      
        foreach ($permissions as $permission) {
            Permission::create([
                'name' => $permission[0],
                'route' => $permission[1],
                'description' => $permission[2],
                'color' => $permission[3],
                'color2' => $permission[4],
            ]);
        }


       
    }
}
