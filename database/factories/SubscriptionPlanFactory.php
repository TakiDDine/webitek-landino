<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SubscriptionPlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=> $this->faker->randomElement(['Basic', 'Standard', 'Premium']),
            'limit_website' => $this->faker->numberBetween(3, 20),
            'duration' => $this->faker->numberBetween(1, 12),
            'cost_per_month' => 120,
            'cost_per_year' => 200,
        ];
    }
}
