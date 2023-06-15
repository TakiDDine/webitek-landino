<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Template extends Model
{
    use SoftDeletes,  HasFactory;

    protected $fillable = ['name', 'category_id', 'desktop_image', 'tablet_image', 'mobile_image', 'tags'];

    protected $casts = [
        'tags' => 'array'
    ];

    protected $hidden = ['pivot'];

    /* The users that belong to the Template
    *
    * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    */
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_template', 'template_id', 'user_id');    }
    
}
