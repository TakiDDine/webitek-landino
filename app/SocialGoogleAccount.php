<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SocialGoogleAccount extends Model
{
	use SoftDeletes;
    protected $fillable = ['user_id', 'provider_user_id', 'provider'];
	
	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
