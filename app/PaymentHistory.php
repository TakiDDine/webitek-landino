<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PaymentHistory extends Model
{
    use SoftDeletes;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'payment_histories';
	
	public function company()
    {
        return $this->belongsTo('App\Company')->withDefault();
    }

    public function package()
    {
        return $this->belongsTo('App\Package',"package_id")->withDefault();
    }

    public function getToDate()
    {
        if (!$this->created_at) {
            return null;
        } else {
            if ($this->package_type === 'monthly') {
                return $this->created_at->addMonth()->format('M d, Y');
            } else {
                return $this->created_at->addYear()->format('M d, Y');
            }
        }
    }
}