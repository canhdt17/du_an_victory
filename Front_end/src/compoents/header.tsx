import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <div className='headermenu bg-gray-900 '>
                  <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
  {/* Left Side: Logo */}
  <div className="flex items-center space-x-8">
    {/* Logo */}
    <img src="logo.png" alt="Logo" className="h-10" />
    {/* Navigation Links */}
    <nav className="flex space-x-6">
      <a href="#" className="hover:text-red-500">Trang chủ</a>
      <a href="#" className="hover:text-gray-300">Lịch chiếu</a>
      <a href="#" className="hover:text-gray-300">Tin tức</a>
      <a href="#" className="hover:text-gray-300">Khuyến mãi</a>
      <a href="#" className="hover:text-gray-300">Giá vé</a>
      <a href="#" className="hover:text-gray-300">Liên hoan phim</a>
      <a href="#" className="hover:text-gray-300">Giới thiệu</a>
      <NavLink to={`/admin/dashboard`}><a  className="hover:text-gray-300">Admin</a></NavLink>
    </nav>
    <div className="space-x-4">
    {/* Đăng ký Button */}
    <button className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all">
      Đăng ký
    </button>
    {/* Đăng nhập Button */}
    <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all">
      Đăng nhập
    </button>
  </div>
  </div>
  {/* Right Side: Buttons */}
 
</header>
      </div>





        



    </div>
  )
}

export default Header