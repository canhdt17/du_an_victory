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

            TinTuc::create([
                'name_TinTuc' => "VUI TẾT TRUNG THU - RINH QUÀ VI VU",
                'sub_title' => "VUI TẾT TRUNG THU - RINH QUÀ VI VU",
                'content' => "Nhân dịp Tết Trung thu 2024, Trung tâm Chiếu phim Quốc gia xin được gửi những lời chúc ấm áp nhất tới quý khán giả, mong bình an sẽ gõ cửa đến mọi nhà


Trung thu đã chạm ngõ, NCC dành tặng hàng trăm phần quà là những chiếc đèn lồng xinh xắn gửi tới các bạn thiếu nhi khi đến rạp xem phim:



👉Thời gian tặng quà: từ 18h - 20h30 ngày 14/09/2024 (tối thứ 7) tại sảnh tầng 1 của Trung tâm.



NCC mong rằng những chiếu đèn lồng sẽ mang lại những niềm vui nho nhỏ đến với các bạn thiếu nhi mùa Tết Trung thu năm nay!

_______________________________________________

📍 Trung tâm Chiếu phim Quốc gia

📱 Website: https://chieuphimquocgia.com.vn/

❤ Địa chỉ: 87 Láng Hạ, phường Thành Công, quận Ba Đình, Hà Nội

☎️ Hotline: 024.3514.1791",
                'imager' => "https://picsum.photos/seed/$i/600/400",
            ]);
        }
    }
}
