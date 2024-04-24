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
            // Course Management
            'course_create' => 'Allows creating new courses',
            'course_read' => 'Allows viewing course details and content',
            'course_update' => 'Allows editing course information and content',
            'course_delete' => 'Allows deleting courses',

            // Content Management
            /* 'lesson_create' => 'Allows creating new lessons within a course',
            'lesson_read' => 'Allows viewing lesson content and resources',
            'lesson_update' => 'Allows editing lesson details and resources',
            'lesson_delete' => 'Allows deleting lessons',
            'quiz_create' => 'Allows creating new quizzes within a course',
            'quiz_read' => 'Allows viewing quiz details and questions',
            'quiz_update' => 'Allows editing quiz details and questions',
            'quiz_delete' => 'Allows deleting quizzes', */

            // User Management (if applicable)
            'user_create' => 'Allows creating new users (admins, instructors, students)',
            'user_read' => 'Allows viewing user information (admins, instructors, students)',
            'user_update' => 'Allows editing user details (admins, instructors, students, with appropriate restrictions)',
            'user_delete' => 'Allows deleting users (admins, with appropriate restrictions)',

            // Enrollment Management (if applicable)
            /*      'enrollment_create' => 'Allows enrolling students in courses (admins, instructors)',
            'enrollment_read' => 'Allows viewing enrollment information (admins, instructors, students with limitations)',
            'enrollment_update' => 'Allows managing enrollments (admins, with appropriate restrictions)',
            'enrollment_delete' => 'Allows removing students from courses (admins, with appropriate restrictions)', */

            // Grading Management (if applicable)
            'grade_read' => 'Allows viewing grades (students, instructors, with limitations)',

            // Assessment Management (if applicable)
            /*  'assignment_create' => 'Allows creating assignments within a course (instructors)',
            'assignment_read' => 'Allows viewing assignment details (instructors, students)',
            'assignment_update' => 'Allows editing assignment details (instructors)',
            'assignment_delete' => 'Allows deleting assignments (instructors)',
            'submission_read' => 'Allows viewing submissions (instructors, students with limitations)',
            'submission_grade' => 'Allows grading submissions (instructors)', */
        ];

        // Create permissions or update if they already exist with descriptions
        foreach ($permissions as $name => $description) {
            Permission::firstOrCreate(['name' => $name], ['description' => $description]);
        }
    }
}
