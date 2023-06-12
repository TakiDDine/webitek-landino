<?php

use App\SubscriptionPlan;
use Illuminate\Database\Seeder;
use Database\Seeders\PlanSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
		//    UtilitySeeder::class,
           PlanSeeder::class
		]);

    }
}
