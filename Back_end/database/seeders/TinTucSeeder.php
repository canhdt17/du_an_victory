<?php

namespace Database\Seeders;

use App\Models\TinTuc;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TinTucSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 15; $i++) {
            $title = "Tin tức mẫu số $i";
            TinTuc::create([
                'name_TinTuc' => $title,
                'sub_title' => "Phụ đề cho tin tức mẫu số $i",
                'content' => "Nội dung chi tiết cho tin tức mẫu số $i.",
                'imager' => "https://picsum.photos/seed/$i/600/400",
                'slug' => Str::slug($title),
            ]);
        }
    }
}
