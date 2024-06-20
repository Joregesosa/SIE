<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['role' => 'admin']);
        Role::create(['role' => 'instructor']);
        Role::create(['role' => 'student']);

        foreach (Permission::all() as $role) {
            DB::table('permission_role')->insert([
                ['role_id' => '1','permission_id'=> $role->id],
            ]);
        }

    }
}


