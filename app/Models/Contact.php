<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Contact extends Model
{
    use HasFactory,Notifiable;  

    protected $table = 'contacts';

    protected $fillable = [
        'first_name',
        'second_name',
        'fLast_name',
        'sLast_name',
        'id_card',
        'phone',
        'phone_type_id',
        'birth_date',
        'email',
        'last_institution',
        'address',
        'father_names',
        'father_id_card',
        'father_phone',
        'father_phone_type_id',
        'father_occupation',
        'mother_names',
        'mother_id_card',
        'mother_phone',
        'mother_phone_type_id',
        'mother_occupation',
        'level_id',
        'key',
        'status',
    ];

    protected $appends = ['full_Name'];

    public function getFullNameAttribute() {
        return $this->first_name . ' ' . $this->second_name . ' ' . $this->fLast_name . ' ' . $this->sLast_name;
    }

    public function level()
    {
        return $this->belongsTo(Level::class, 'level_id');
    }

       
    public function father()
    {
        return $this->hasOneThrough(Parents::class, Person::class, 'id_card', 'person_id', 'father_id_card', 'id');
    }

    public function mother()
    {
        return $this->hasOneThrough(Parents::class, Person::class, 'id_card', 'person_id', 'mother_id_card', 'id');
    }

}
