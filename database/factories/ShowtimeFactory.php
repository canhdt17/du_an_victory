<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\showtime>
 */
class ShowtimeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'movie_id' => rand(1, 100),
            'room_id' => rand(1, 10),
            'showtime_date' => '2024-10-17',
            'start_time' => '09:13',
            'end_time' => '10:45',
        ];
    }
}
