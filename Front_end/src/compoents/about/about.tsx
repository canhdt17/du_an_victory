import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { NavLink } from 'react-router-dom'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <Header></Header>
     <div className="bg-[#070720] text-white">
     <div>
  <div className="container mx-auto p-6">
    <h1 className="text-4xl font-bold text-center mb-6">Giới thiệu</h1>
    <div className="flex justify-center space-x-4 mb-4">
      <NavLink to={`/about`}><button className="px-6 py-2  text-white rounded-full hover:bg-red-600">Giới Thiệu</button></NavLink>
      <NavLink to={`/screeningroom`}><button className="px-6 py-2  text-white rounded-full hover:bg-red-600">Phòng chiếu - Nhà hát</button></NavLink>
      
    </div>
  </div>
  
  <div className="container mx-auto px-6">
    <div className=" p-6 rounded-lg shadow-lg">
      <p className="text-justify leading-relaxed mb-6">
        Trung tâm Chiếu phim Quốc gia (tiếng Anh: National Cinema Center) là đơn vị sự nghiệp công lập, trực thuộc Bộ Văn hóa, Thể thao và Du lịch,
        có chức năng chiếu phim, phát hành phim phục vụ nhiệm vụ chính trị, xã hội, hợp tác quốc tế; trung tâm kỹ thuật điện ảnh; đồng thời là địa chỉ
        khai thác hiệu quả để phục vụ các hoạt động dịch vụ phù hợp với quy định của pháp luật.
      </p>
      <p className="text-justify leading-relaxed mb-6">
        Địa chỉ: 87 Láng Hạ, quận Đống Đa, Hà Nội.<br />
        Số điện thoại: 024.3514.1791 / Cước phí: 1200đ/phút.<br />
        Email: quocgia@ncc.com.vn
      </p>
    </div>
  </div>
  
  <div className="container mx-auto px-6 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img src="https://phuongviethcm.com/wp-content/uploads/2023/11/man-hinh-led-rap-chieu-phim-1.jpg.webp" alt="Hình ảnh 1" className="rounded-lg shadow-lg w-[635px] h-[422px]" />
      <img src="https://toplistsaigon.com/wp-content/uploads/2019/09/rap-chieu-phim-3d-o-sai-gon-ava.jpg" alt="Hình ảnh 2" className="rounded-lg shadow-lg w-[635px] h-[422px]" />
    </div>
  </div>
 
  <div className="container mx-auto px-6 mt-8">
    <h2 className="text-2xl font-bold text-center mb-4">Sơ Đồ Bộ Máy Tổ Chức</h2>
    <div className=" p-6 rounded-lg shadow-lg">
      <img src="https://api.chieuphimquocgia.com.vn/Content/Images/Master/0017146.png" alt="Sơ đồ tổ chức" className="rounded-lg shadow-lg mx-auto" />
    </div>
  </div>
</div>
     </div>
    <Footer></Footer>

    </div>
  )
}

export default About