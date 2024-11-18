import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate(); // Khai báo navigate ở đây

  return (
    <div>

      <div className='menuhead bg-gray-900 '>
                  <header className="headermenu flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
  {/* Left Side: Logo */}
  <div className="flex items-center space-x-8">
    {/* Logo */}
    <img src="logo.png" alt="Logo" className="h-10" />
    {/* Navigation Links */}
    <nav className="flex space-x-6">
      <NavLink to={`/`}><a href="#" className="hover:text-red-500">Trang chủ</a></NavLink>
      <a href="#" className="hover:text-gray-300">Lịch chiếu</a>
      <NavLink to={`/tintuc`}><a href="#" className="hover:text-gray-300">Tin tức</a></NavLink>
      <NavLink to={`/client/khuyenmai`}className="hover:text-gray-300">Khuyến Mãi</NavLink>
      <a href="#" className="hover:text-gray-300">Giá vé</a>
      <a href="#" className="hover:text-gray-300">Liên hoan phim</a>
      <a href="#" className="hover:text-gray-300">Giới thiệu</a>
      <NavLink to={`/admin/tintuc`}><a  className="hover:text-gray-300">Admin</a></NavLink>
    </nav>
    <div className="space-x-4">
    {/* Đăng ký Button */}
    <button className="px-6 py-2 border-2 border-white  text-black rounded-full hover:bg-white hover:text-gray-900 transition-all w-[131px] ">
     <NavLink to={`/client/dangki`}> Đăng ký</NavLink>
    </button>
    {/* Đăng nhập Button */}
    <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all">
     <NavLink to={`/client/dangnhap`}> Đăng nhập</NavLink>
    </button>
  </div>
  </div>
  {/* Right Side: Buttons */}
 
</header>

      <div className=" bg-gray-900 ">
        <header className="headermenu flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
          {/* Left Side: Logo */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <img src="logo.png" alt="Logo" className="h-10" />
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <NavLink to="/" className="hover:text-red-500">
                Trang chủ
              </NavLink>
              <NavLink to="/showtimes" className="hover:text-gray-300">
                Lịch chiếu
              </NavLink>
              <NavLink to="/news" className="hover:text-gray-300">
                Tin tức
              </NavLink>
              <NavLink to="/promotions" className="hover:text-gray-300">
                Khuyến mãi
              </NavLink>
              <NavLink to="/ticket-prices" className="hover:text-gray-300">
                Giá vé
              </NavLink>
              <NavLink to="/film-festival" className="hover:text-gray-300">
            Thể Loại Phim

              </NavLink>
              <NavLink to="/about" className="hover:text-gray-300">
                Giới thiệu
              </NavLink>
              <NavLink to="/admin/dashboard" className="hover:text-gray-300">
                Admin
              </NavLink>
            </nav>
            <div className="space-x-4">
              {/* Đăng ký Button */}
              <NavLink to={`/register`}>
                <button className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all">
                  Đăng ký
                </button>
              </NavLink>
              {/* Đăng nhập Button */}
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
              >
                Đăng nhập
              </button>
            </div>
          </div>
          {/* Right Side: Buttons */}
        </header>

      </div>
    </div>
    </div>
  );
};

export default Header;
