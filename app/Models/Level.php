<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use HasFactory;
    
    protected $fillable = ['name', 'description', 'status' , 'price', 'enrollment_fee', 'duration', 'style_multiplied'];

    public function groups()
    {
        return $this->hasMany(Group::class);
    }

    public function subjects()
    {
        return $this->belongsToMany(Subject::class, 'level_subject')
                    ->withPivot('elective_year_id', 'teacher_id');
    }

    public function students()
    {
        return $this->hasMany(Student::class);
    }
}
