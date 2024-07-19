<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Group extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'level_id',
        'max_students',
        'teacher_id',
        'status',
    ];
    
    protected $with = ['level'];

    protected $appends = ['students_list', 'subjects_scores'];

    public function getStudentsListAttribute()
    {
        return $this->students()->get()->map->getlowdata();
    }

     public function getSubjectsScoresAttribute()
    {
        return  $this->level->subjects->map->getScores($this->id);
    } 
    
    public function level(): BelongsTo
    {
        return $this->belongsTo(Level::class);
    }

    public function teacher(): BelongsTo
    {
        return $this->belongsTo(Teacher::class);
    }

    public function students(): HasMany
    {
        return $this->hasMany(Student::class);
    }
    
        
}

