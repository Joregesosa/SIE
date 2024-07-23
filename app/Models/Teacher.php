<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'person_id',
        'profession',
        'work_place',
        'email',
        'status',
    ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

}

