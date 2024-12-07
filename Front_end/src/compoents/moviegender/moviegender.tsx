import React, { useEffect, useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import { ICategoryMovie } from '../../interface/categorymovie'
import axios from 'axios'



const MovieGender = () => {
    
  return (
    <div>
        <Header></Header>
       <div className="text-white font-sans">
  <div className="container mx-auto p-4">
    {/* Header */}
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold">Thể Loại Phim</h1>
      <div className="flex justify-center mt-4 space-x-4">
        <button className="px-4 py-2 bg-red-600 rounded-md">6-12-2024</button>
        <button className="px-4 py-2 bg-gray-700 rounded-md">7-12-2024</button>
      </div>
      <p className="text-gray-400 mt-2">
        Lưu ý: Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và khán giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.
      </p>
    </div>
    {/* Movie List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Movie Item */}
      <div className="bg-gray-800 rounded-lg p-4">
        <img src="https://via.placeholder.com/200x300" alt="Poster Công Tử Bạc Liêu" className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-4">Công Tử Bạc Liêu - T13</h2>
        <p className="text-sm text-gray-400">Xuất xứ: Việt Nam</p>
        <p className="text-sm text-gray-400">Khởi chiếu: 06/12/2024</p>
        <p className="text-sm text-red-500 mt-2">T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên (13+)</p>
        <div className="grid grid-cols-4 gap-2 mt-4 text-center">
          <button className="px-2 py-1 bg-gray-700 rounded-md">09:15</button>
          <button className="px-2 py-1 bg-gray-700 rounded-md">10:00</button>
          {/* Thêm các nút giờ chiếu khác */}
        </div>
      </div>
      {/* Thêm các mục phim khác tương tự */}
      <div className="bg-gray-800 rounded-lg p-4">
        <img src="https://via.placeholder.com/200x300" alt="Poster Tết Âm Hồn" className="w-full h-64 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-4">Tết Âm Hồn - T18</h2>
        <p className="text-sm text-gray-400">Xuất xứ: Indonesia</p>
        <p className="text-sm text-gray-400">Khởi chiếu: 06/12/2024</p>
        <p className="text-sm text-red-500 mt-2">T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên</p>
        <div className="grid grid-cols-4 gap-2 mt-4 text-center">
          <button className="px-2 py-1 bg-gray-700 rounded-md">10:30</button>
          <button className="px-2 py-1 bg-gray-700 rounded-md">12:20</button>
          {/* Thêm các nút giờ chiếu khác */}
        </div>
      </div>
    </div>
  </div>
</div>

        <Footer></Footer>
    </div>
  )
}

export default MovieGender