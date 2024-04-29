<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;
    
    protected $fillable = [ 
        'first_name',
        'second_name',
        'fLast_name',
        'sLast_name',
        'birth_date',
        'birth_place',
        'id_card',
        'status'
    ];




}
