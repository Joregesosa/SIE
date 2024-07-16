<?php

namespace Database\Seeders;


// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
       

        DB::table('phone_types')->insert([
            ['name' => 'Celular'],
            ['name' => 'Casa'],
            ['name' => 'Trabajo'],
            ['name' => 'Otro']
        ]);

        DB::table('family_structures')->insert([
            ['name' => 'Familia Nuclear', 'description' => 'Formada por dos progenitores (padre y madre) y sus hijos biológicos. Esta es la estructura familiar más tradicional y común en muchas sociedades.'],
            ['name' => 'Familia Monoparental', 'description' => 'Consiste en un solo progenitor (ya sea padre o madre) que es responsable de la crianza y el cuidado de los hijos. Puede ser resultado de divorcio, viudez, o decisión de tener hijos sin pareja.'],
            ['name' => 'Familia Extendida', 'description' => 'Incluye no solo a los padres e hijos, sino también a otros parientes cercanos como abuelos, tíos, tías, primos, y en algunos casos, familiares más lejanos. Esta estructura puede brindar un sistema de apoyo más amplio y una red de cuidado más extensa.'],
            ['name' => 'Familia Reconstruida o Reconstituida', 'description' => 'Se forma cuando uno o ambos progenitores tienen hijos de relaciones anteriores y se vuelven a casar o establecen una nueva pareja. Los hijos pueden ser biológicos de uno o ambos padres o adoptados.'],
            ['name' => 'Familia Homoparental', 'description' => 'Compuesta por una pareja del mismo sexo y sus hijos, ya sean biológicos, adoptivos o de relaciones anteriores. Esta estructura se ha vuelto más común con el reconocimiento legal del matrimonio entre personas del mismo sexo y la adopción por parte de parejas homosexuales.'],
            ['name' => 'Familia de Crianza o Adoptiva', 'description' => 'Se forma cuando una persona o pareja adopta legalmente a uno o más niños, o cuando cuida temporalmente a niños que no son biológicamente suyos, pero que necesitan un hogar seguro y amoroso.'],
            ['name' => 'Familia Compuesta', 'description' => 'Se caracteriza por la presencia de dos o más núcleos familiares que se fusionan en una sola unidad. Esto puede ocurrir cuando dos familias se unen a través del matrimonio o la convivencia, y cada una trae consigo hijos de relaciones anteriores.']
        ]);

        DB::table('type_houses')->insert([
            ['name' => 'Propia'],
            ['name' => 'Arrendada'],
            ['name' => 'Prestada'],
            ['name' => 'Anticresis'],
            ['name' => 'Con préstamo']
        ]);

        DB::table('medical_attention_types')->insert([
            ['name' => 'Centro de salud'],
            ['name' => 'Hospital público'],
            ['name' => 'Hospital privado'],
            ['name' => 'Otro']
        ]);
        
        DB::table('pregnancy_types')->insert([
            ['name' => 'Al termino'],
            ['name' => 'Prematuro'],
            ['name' => 'Cesárea'],
            ['name' => 'Parto normal']
        ]);
 
        DB::table('pathological_family_histories')->insert([
            ['name' => 'Obesidad'],
            ['name' => 'Enfermedades cardiacas'],
            ['name' => 'Hipertensión'],
            ['name' => 'Diabetes'],
            ['name' => 'Enfermedades mentales'],
            ['name' => 'Ninguna']
        ]);

        DB::table('marital_status')->insert([
            ['name' => 'Soltero/a', 'description' => 'Una persona que nunca ha estado casada.'],
            ['name' => 'Casado/a', 'description' => 'Una persona que ha contraído matrimonio legalmente.'],
            ['name' => 'Separado/a', 'description' => 'Una persona que está legalmente separada de su cónyuge pero aún está casada.'],
            ['name' => 'Divorciado/a', 'description' => 'Una persona que ha obtenido un divorcio legal, poniendo fin al matrimonio.'],
            ['name' => 'Viudo/a', 'description' => 'Una persona cuyo cónyuge ha fallecido y no se ha vuelto a casar.'],
            ['name' => 'Conviviente', 'description' => 'Una persona que convive con otra sin estar casada legalmente, en algunas jurisdicciones también se reconoce como unión de hecho o unión marital de hecho.'],
            ['name' => 'Union Civil', 'description' => 'Algunas jurisdicciones ofrecen un estado legal similar al matrimonio pero sin el término "matrimonio", que puede aplicarse a parejas del mismo sexo o parejas heterosexuales que eligen formalizar su relación sin casarse.']
        ]);

        DB::table('education_levels')->insert([
            ['name' => 'Primaria', 'description' => 'Corresponde a la educación básica inicial que abarca los primeros años de escolarización obligatoria, generalmente desde los 6 hasta los 12 años de edad, dependiendo del sistema educativo de cada país.'],
            ['name' => 'Secundaria', 'description' => 'Comprende la educación intermedia y avanzada después de la educación primaria, y generalmente se divide en educación secundaria básica y educación secundaria superior o media. Suele abarcar la adolescencia, desde los 12 o 13 hasta los 17 o 18 años, dependiendo del sistema educativo.'],
            ['name' => 'Técnica o Vocacional', 'description' => 'Se centra en habilidades y conocimientos específicos para una profesión o campo técnico, y puede ofrecer certificaciones o diplomas en lugar de títulos universitarios.'],
            ['name' => 'Superior', 'description' => 'Incluye programas de educación terciaria después de la educación secundaria, como programas de grado universitario (licenciatura), posgrados (maestría) y doctorados.'],
            ['name' => 'Profesional', 'description' => 'Puede referirse a programas de formación adicional después de la educación superior, como programas de especialización, certificaciones profesionales o cursos de actualización y desarrollo profesional.']
        ]);

        DB::table('parent_types')->insert([
           /* ['name' => 'Padre', 'description' => 'El padre biológico del niño, que lo ha concebido y es responsable de su crianza y cuidado.', 'status' => 0 ],
            ['name' => 'Madre', 'description' => 'La madre biológica del niño, que lo ha concebido y es responsable de su crianza y cuidado.', 'status' => 0 ],
            ['name' => 'Tutor', 'description' => 'Una persona legalmente responsable de la crianza y el cuidado de un niño, que puede ser un pariente, un amigo o un profesional designado por un tribunal.', 'status' => 0 ],
            */
            ['name' => 'Padres', 'description' => 'Los progenitores biológicos o adoptivos del niño, quienes tienen la responsabilidad primaria de cuidarlo, educarlo y proporcionarle apoyo emocional y material.', 'status' => 1 ],
            ['name' => 'Hijos', 'description' => 'Los niños que forman parte de la familia, ya sean biológicos o adoptivos.', 'status' => 1 ],
            ['name' => 'Abuelos', 'description' => 'Los padres de los padres del niño, quienes pueden tener un papel importante en la crianza y el apoyo familiar.', 'status' => 1 ],
            ['name' => 'Hermanos', 'description' => 'Los hermanos del niño, ya sean biológicos (hermanos de sangre) o no (hermanastros, hermanastros adoptivos), que comparten al menos un padre en común.', 'status' => 1 ],
            ['name' => 'Tíos y tías', 'description' => 'Los hermanos de los padres del niño, quienes pueden ser figuras significativas en su vida y proporcionar apoyo adicional.', 'status' => 1 ],
            ['name' => 'Primos', 'description' => 'Los hijos de los tíos y tías del niño, que comparten al menos un abuelo en común.', 'status' => 1 ],
            ['name' => 'Padres adoptivos', 'description' => 'Las personas que han adoptado legalmente al niño y asumen la responsabilidad de su crianza y cuidado.', 'status' => 1 ],
            ['name' => 'Hermanos adoptivos', 'description' => 'Los niños que han sido adoptados por la misma familia y se consideran hermanos aunque no tengan parentesco biológico.', 'status' => 1 ],
            ['name' => 'Padres de crianza', 'description' => 'Las personas que proporcionan cuidado temporal a un niño cuando no pueden vivir con sus padres biológicos por diversas razones, como problemas de salud o seguridad.', 'status' => 1 ],
            ['name' => 'Cuidadores', 'description' => 'Personas que pueden no tener un parentesco directo pero que desempeñan un papel importante en el cuidado y la crianza del niño, como niñeras, educadores o trabajadores sociales','status' => 1 ]
            
        ]);

      
        DB::table('student_status')->insert([
            ['name' => 'En espera', 'color' => 'red-500', 'description' => 'El alumno ha solicitado ingreso a la institución pero aún no ha sido admitido o rechazado.'],
            ['name' => 'Matriculado', 'color' => 'green-500', 'description' => 'El alumno está inscrito en cursos para el período actual.'],
            ['name' => 'Graduado', 'color' => 'blue-500', 'description' => 'El alumno ha completado satisfactoriamente todos los requisitos y ha recibido su grado o título.'],
            ['name' => 'De baja', 'color' => 'gray-500', 'description' => 'El alumno ha solicitado o sido dado de baja de la institución.'],
            ['name' => 'En descanso académico', 'color' => 'gray-500', 'description' => 'El alumno ha tomado un descanso temporal de sus estudios por razones personales o académicas.'],
            ['name' => 'Suspendido', 'color' => 'gray-500', 'description' => 'El alumno ha sido temporalmente retirado de la institución debido a problemas académicos o disciplinarios.'],
            ['name' => 'Readmisión', 'color' => 'gray-500', 'description' => 'El alumno ha sido readmitido después de un período de suspensión.'],
        ]);


        $this->call(PermissionSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(PersonSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(SubjectSeeder::class);
        $this->call(ElectiveYearSeeder::class);
        $this->call(LevelSeeder::class);
        $this->call(StudentSeeder::class);
        $this->call(SystemSeeder::class);

    }
}

    

