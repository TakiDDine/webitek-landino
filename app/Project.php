<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'projects';
    protected $fillable = ['name', 'sub_domain'];

    public function members(){
    	return $this->belongsToMany('App\User','project_members', 'project_id', 'user_id');
    }

    public function setCustomDomainAttribute($value) {
        if ( empty($value) ) { 
        $this->attributes['custom_domain'] = NULL;
        } else {
            $this->attributes['custom_domain'] = $value;
        }
    }
    
     public function setSubDomainAttribute($value) {
        if ( empty($value) ) { 
        $this->attributes['sub_domain'] = NULL;
        } else {
            $this->attributes['sub_domain'] = $value;
        }
    }

    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * count projects with specific name function
     *
     * @param [integer] $user_id
     * @param [string] $name
     * @return int
     */
    public function counter($user_id, $name) {

        return $this->where(['user_id' => $user_id, ['name' , 'like', '%'.$name.'%']])->count();
    }
}