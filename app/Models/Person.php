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
        'id_card'
        ];

    protected $appends = ['full_Name'];

    public function getFullNameAttribute() {
        return $this->first_name . ' ' . $this->second_name . ' ' . $this->fLast_name . ' ' . $this->sLast_name;
    }


}
