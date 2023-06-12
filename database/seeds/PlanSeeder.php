<?php

namespace Database\Seeders;

use App\SubscriptionPlan;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Factories\Sequence;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        SubscriptionPlan::factory()->count(3)
        ->state(new Sequence(
            ['name' => 'Basic'],
            ['name' => 'Standard'],
            ['name' => 'Premium'],
        ))
        ->state(new Sequence(
            ['limit_website' => 3],
            ['limit_website' => 10],
            ['limit_website' => 20],
        ))->create();
    }
}
