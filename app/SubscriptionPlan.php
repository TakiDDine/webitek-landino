<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'type', 'cost_per_month', 'cost_per_year', 'limit_website', 'code_promo', 'features', 'payment_type'];
}
