<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;


class StudentParent extends Pivot
{
    use HasFactory;

    protected $table = 'StudentParent';
    
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

    public function parentType()
    {
        return $this->belongsTo(ParentType::class,'parent_type_id');
    }
   
}
