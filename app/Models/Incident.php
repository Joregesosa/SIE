<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Incident extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'teacher_id',
        'date',
        'description',
        'action_taken',
        'status', // reported, under_investigation, resolved
    ];

    public function student()
    {
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }
}
