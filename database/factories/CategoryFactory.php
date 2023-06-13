<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $categories = ['التجارة الإلكترونية', 'المحفظة', 'صفحة الهبوط', 'وكالة تكنولوجيا', 'المطعم'];
        return [
            // 'name' => $this->faker->randomElement($categories), //the name can not duplicated
            'name' => $this->faker->name(),
            'is_active' => true
        ];
    }
}
