<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TemplateFactory extends Factory
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
            'is_active' => true,
            'tags' => $this->faker->randomElements(['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5', 'tag 6', 'tag 7'], 3),
            'desktop_image' => $this->faker->imageUrl($width = 640, $height = 840,  'animals', true, 'cats'),
            'tablet_image' => $this->faker->imageUrl(440, 640,  'animals', true, 'cats'),
            'mobile_image' => $this->faker->imageUrl(140, 340,  'animals', true, 'cats'),
            'likes' => $this->faker->numberBetween(0, 20),
        ];
    }
}
