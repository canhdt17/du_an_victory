<?php

namespace Database\Seeders;

use App\Models\Area;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AreasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        foreach (range(1, 5) as $index) {
            Area::create([
                'area_name' => 'Area ' . $index, 
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
