<?php

use App\SubscriptionPlan;
use Illuminate\Database\Seeder;
use Database\Seeders\PlanSeeder;
use Database\Seeders\TemplateSeeder;

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
        //    PlanSeeder::class,
           TemplateSeeder::class,
		]);

    }
}
