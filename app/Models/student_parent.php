<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student_parent extends Model
{
    use HasFactory;

    protected $table = 'student_parent';
    
    protected $fillable = [
        'student_id',
        'parent_id',
        'parent_type_id'
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function parent()
    {
        return $this->belongsTo(Parents::class);
    }

   
}
