<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectFile extends Model
{
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'files';

    protected $fillable = ['file', 'related_id'];

    public function user(){
    	return $this->belongsTo('App\User','user_id')->withDefault();
    }
}