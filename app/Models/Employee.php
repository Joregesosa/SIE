<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'position',
        'department_id',
        'salary_id',
        'hire_date',
        // other relevant fields
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function salary()
    {
        return $this->hasOne(Salary::class);
    }

    public function leaves()
    {
        return $this->hasMany(LeaveRequest::class);
    }

    public function attendance()
    {
        return $this->hasMany(Attendance::class);
    }
}
