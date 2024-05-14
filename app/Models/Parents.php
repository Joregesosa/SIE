<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parents extends Model
{
    use HasFactory;

    protected $fillable = [
        'person_id',
        'marital_status_id',
        'education_level_id',
        'profession',
        'work_place',
        'income',
        'email',
        'status'
    ];

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

   
}
