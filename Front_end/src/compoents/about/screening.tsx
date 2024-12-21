import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { NavLink } from 'react-router-dom'

type Props = {}

const ScreeningRoom = (props: Props) => {
  return (
    <div>
        <Header></Header>
       <div className="bg-[#070720] text-white">
       <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Giới thiệu</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <NavLink to={`/about`}><button className="px-6 py-2  text-white rounded-full hover:bg-red-600">Giới Thiệu</button></NavLink>
          <NavLink to={`/screeningroom`}><button className="px-6 py-2  text-white rounded-full hover:bg-red-600">Phòng chiếu - Nhà hát</button></NavLink>
        
        </div>
      </div>
  <div className="container mx-auto px-6 py-8">
    
    <div className=" p-6 rounded-lg shadow-lg">
      <p className="text-justify leading-relaxed mb-6">
        Trung tâm chiếu phim có 5 tầng với 14 phòng chiếu, âm thanh ánh sáng chất lượng cao. Các phòng chiếu phim của Trung tâm có tổng cộng 2,236 chỗ ngồi với hơn 60 suất chiếu/ngày. Phòng nhỏ nhất có 42 chỗ, phòng lớn nhất có 433 chỗ.
      </p>
      <p className="text-justify leading-relaxed mb-6">
        Khu trung bày diễn ảnh - biểu diễn nghệ thuật với sức chứa hơn 1,000 chỗ. Đây là địa điểm thích hợp cho các chương trình nghệ thuật tạp kỹ, sự kiện đặc sắc diễn ra hằng tuần.
      </p>
    </div>
  </div>
  {/* Phần hình ảnh */}
  <div className="container mx-auto px-6 py-8">
    <h2 className="text-2xl font-bold text-center mb-6">Hình ảnh nổi bật</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <img src="https://anhduyenaudio.vn/files/files/xem%20phim/man-hinh-chieu-co-dinh.jpg" alt="Hình 1" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      <img src="https://ghehoitruong.vn/wp-content/uploads/2022/12/ghe-rap-phim-han-quoc-Vincom-Phan-Rang-1.jpg" alt="Hình 2" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      <img src="https://ghehoitruong.vn/wp-content/uploads/2022/12/ghe-rap-phim-han-quoc-Vincom-Phan-Rang-8.jpg" alt="Hình 3" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      
    </div>
  </div>
  {/* Phần nội dung thêm */}
  <div className="container mx-auto px-6 py-8">
    <div className="p-6 rounded-lg shadow-lg">
      <p className="text-justify leading-relaxed">
        Khu trung bày diễn ảnh - biểu diễn nghệ thuật: Tầng 1,3,4 với khả năng phục vụ hơn 1,000 chỗ ngồi cho các sự kiện, hội nghị, tiệc, hội thảo. Tầng 2 có sức chứa hơn 300 chỗ và phù hợp tổ chức chương trình nghệ thuật tạp kỹ hàng tuần.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
     
      <img src="https://sangobinhdinh.com/wp-content/uploads/2023/05/z4276381772894_898631aaa20c716db8b03766a9d561cf.jpg" alt="Hình 4" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      <img src="https://sangobinhdinh.com/wp-content/uploads/2023/05/z4276381738097_ad195597be6797b46923975dfec630df.jpg" alt="Hình 5" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      <img src="https://sangobinhdinh.com/wp-content/uploads/2023/05/z4276381754494_954e713cb65a01e5a8acf7f97b2e8f31.jpg" alt="Hình 6" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      <img src="https://sangobinhdinh.com/wp-content/uploads/2023/05/z4282128294695_4b1c4bfe03ec682165f94c8fefb12482.jpg" alt="Hình 7" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      <img src="http://newstarmedia.com.vn/wp-content/uploads/2017/12/tu-van-thiet-ke-rap-chieu-phim-2-mo-hinh-rap-chieu-phim-pho-bien-hien-nay-2.jpg" alt="Hình 8" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
      <img src="https://quangcaongoaitroi.org/wp-content/uploads/2020/10/quang-cao-tai-rap-chieu-phim-2.jpg" alt="Hình 9" className="rounded-lg shadow-lg w-[364px] h-[273px]" />
    </div>
  </div>
</div>

        <Footer></Footer>
    </div>
  )
}

export default ScreeningRoom