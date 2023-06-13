<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'sub_domaine' => md5(uniqid($this->user_id, true)).'.'.str_replace(['http://', 'https://'], '' ,env('APP_URL')),
            
        ];
    }
}
