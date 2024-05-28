<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'second_name',
        'fLast_name',
        'sLast_name',
        'id_card',
        'number',
        'age',
        'email',
        'last_institution',
        'address',
        'father_names',
        'father_phone',
        'father_occupation',
        'mother_names',
        'mother_phone',
        'mother_occupation',
        'level',
        'key'
    ];
}
