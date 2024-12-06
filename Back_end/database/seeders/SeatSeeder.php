<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Seat;


class SeatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            $numberSeat = "C".$i;
            Seat::create([
                'seat_type_id' => "3",
                'seat_number' => $numberSeat,
                'room_id' => '3',
            ]);
        }
    }
}
