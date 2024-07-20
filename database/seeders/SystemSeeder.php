<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class SystemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      
        DB::table('systems')->insert([
            'school_name' => 'Thomas Russell Crampton',
            'school_address' => 'Avenida Atahualpa E10-60 y Santiago Sector San Nicolas Cayambe, Pichincha, Ecuador',
            'contact_email' => 'rectorado@trc.edu.ec',
            'contact_email2' => 'secretaria@trc.edu.ec',
            'phone_number' => '09 8487 7243',
            'phone_number2' => '09 8487 7243',
            'school_start_time' => '07:00:00',
            'school_end_time' => '13:00:00',
            'school_slogan' => 'Educación a otro nivel',
            'school_motto' => 'Formamos seres humanos justos, democráticos, pacíficos y responsables para una sana convivencia con la sociedad y la naturaleza, en un ambiente de calidad y calidez',
            'principal_name' => 'Thomas Russell Crampton',
            'current_academic_year' => '1',
        ]);

    }
}
