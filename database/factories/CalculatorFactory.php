<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Calculator>
 */
class CalculatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'operation' => '3+(4-7)-1*4+' . fake()->randomDigit(),
            'result' => fake()->randomDigit(),
        ];
    }
}
