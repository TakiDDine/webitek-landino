<?php

namespace Database\Seeders;

use App\Category;
use App\Template;
use Illuminate\Database\Seeder;

class TemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::factory()->count(5)->has(Template::factory()->count(4))->create();
    }
}
