<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Template extends Model
{
    use SoftDeletes,  HasFactory;

    protected $fillable = ['name', 'category', 'desktop_image', 'tablet_image', 'mobile_image', 'tags'];

    protected $casts = [
        'tags' => 'array'
    ];

    /* The users that belong to the Template
    *
    * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
    
}