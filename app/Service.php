<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Service extends Model
{
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'services';

	protected $guarded = []; 
	
    public function tax()
    {
        return $this->belongsTo('App\Tax',"tax_id")->withDefault();
    }
}