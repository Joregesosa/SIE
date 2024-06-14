<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parents extends Model
{
    use HasFactory;

    
    protected $hidden = ['pivot'];
    protected $fillable = [
        'person_id',
        'marital_status_id',
        'education_level_id',
        'profession',
        'work_place',
        'incomes',
        'email',
        'status'
    ];

    protected $with = ['person', 'maritalStatus', 'educationLevel'];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function maritalStatus()
    {
        return $this->belongsTo(MaritalStatus::class);
    }

    public function educationLevel()
    {
        return $this->belongsTo(EducationLevel::class);
    }

   
   
}
