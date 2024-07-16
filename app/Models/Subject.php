<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function levels()
    {
        return $this->belongsToMany(Level::class, 'level_subject')->withPivot('elective_year_id', 'teacher_id');
    }

    public function getScores($groupId)
    {
        $group = Group::find($groupId);
        return [
            'subject' => $this,
            'scores' => $group->students->map(fn($student) => $student->scores->where('subject_id', $this->id)->where('level_id', $group->level_id)->first()?->getFormattedScore() ?? Scores::getDefaultFormattedScore($student)),
        ];
    }
}
