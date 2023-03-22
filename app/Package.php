<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Package extends Model
{
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'packages';

    public function company()
    {
        return $this->hasMany('App\Company',"package_id")->orderBy('id','desc');
    }
	
}