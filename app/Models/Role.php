<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable = [
        'role',
        'status'
    ];
    
    protected $appends = ['attachedPermissions'];

    public function getAttachedPermissionsAttribute()
    {
        return $this->permissions->pluck('id')->toArray();
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }
 
}
