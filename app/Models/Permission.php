<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Microsoft\Graph\Generated\Models\RolePermission;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = [
        'permission',
        'description',
        'status'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

}
