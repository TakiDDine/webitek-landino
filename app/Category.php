<?php

namespace App;

use App\Template;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name' , 'is_active'];

    protected $cast = ['is_active' => 'boolean'];

    protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    // protected $hidden = ['created_at', 'updated_at', 'deleted_at'];

    /**
    * category has many template  function
    *
    * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    */
    public function templates()
    {
        return $this->hasMany(Template::class);
    }
 }
