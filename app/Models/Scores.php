<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scores extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'subject_id',
        'level_id',
        'elective_year_id',
        'score',
        'comment',
        'status',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function level()
    {
        return $this->belongsTo(Level::class);
    }

    public function electiveYear()
    {
        return $this->belongsTo(ElectiveYear::class);
    }

    public function getFormattedScore()
    {
        return [
            'student' => $this->student->getlowdata(),
            'score' => $this->score ?? 0,
            'comment' => $this->comment ?? '',
            'status' => $this->status ?? '',
        ];
    }

    public static function getDefaultFormattedScore($student)
    {
        return [
            'student' => $student->getlowdata(),
            'score' => null,
            'comment' => null,
            'status' => null,
        ];
    }
}
