<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectMember extends Model
{
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'project_members';

    public function user()
    {
        return $this->belongsTo('App\User',"user_id")->withDefault();
    }
}