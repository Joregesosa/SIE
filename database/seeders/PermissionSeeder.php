<?php

namespace Database\Seeders;

use App\Models\Permission;
use Grupos;
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

            ['Ver Contactos','contact', 'Ver solicitudes de contacto','red-500','blue-500'],
            ['Crear Contacto','contact.store', 'Crear solicitudes de contacto','red-500','green-500'],
            ['Actualizar Contacto','contact.update', 'Actualizar solicitudes de contacto','red-500','orange-500'],
            ['Eliminar Contacto','contact.delete', 'Eliminar solicitudes de contacto','red-500','red-500'],

            ['Ver Grupos','groups', 'Ver listado de grupos','purple-500','blue-500'],
            ['Crear Grupos','groups.store', 'Crear grupos','purple-500','green-500'],
            ['Actualizar Grupos','groups.update', 'Actualizar grupos','purple-500','orange-500'],
            ['Eliminar Grupos','groups.delete', 'Eliminar grupos','purple-500','red-500'],

            ['Ver Niveles','levels', 'Ver listado de niveles','indigo-500','blue-500'],
            ['Crear Niveles','levels.store', 'Crear niveles','indigo-500','green-500'],
            ['Actualizar Niveles','levels.update', 'Actualizar niveles','indigo-500','orange-500'],
            ['Eliminar Niveles','levels.delete', 'Eliminar niveles','indigo-500','red-500'],

           
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
