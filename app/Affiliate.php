<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Affiliate extends Model
{
    use SoftDeletes;
    protected $fillable = ['user_id', 'visitors', 'subscribers'];
}
