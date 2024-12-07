import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const token = localStorage.getItem("token");
  const avatar = localStorage.getItem("avatar");
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
    navigate("/login"); 
  };

  return (
    <div>

      <div className='menuhead bg-gray-900 '>            
      <div className=" bg-gray-900 ">
        <header className="headermenu flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
         
        <div className="flex items-center space-x-8">
        {token ? (
            <>
            <NavLink to={`/`}> <img src="/src/img//logo 2.png" alt="Logo" className="logo h-10" /></NavLink>
      
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
        <NavLink to="/moviegender" className="hover:text-gray-300">
      Thể Loại Phim

        </NavLink>
        <NavLink to="/about" className="hover:text-gray-300">
          Giới thiệu
        </NavLink>
        <NavLink to="/admin/dashboard" className="hover:text-gray-300">
          Admin
        </NavLink>
      </nav>
        <img
              src={avatar || "https://via.placeholder.com/40"}
              alt="Avatar"
              style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
            />
            <button onClick={handleLogout}>Đăng xuất</button>
      <div>
    
      </div>
            </>
          ):(
            <>
             <NavLink to={`/`}> <img src="/src/img//logo 2.png" alt="Logo" className="logo h-10" /></NavLink>
      
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
        <NavLink to="/moviegender" className="hover:text-gray-300">
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
           
              <button  onClick={() => navigate("/register")} className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all">
                Đăng ký
              </button>
        
            {/* Đăng nhập Button */}
           
            <button
            onClick={() => navigate("/login")}
              className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
            >
              Đăng nhập
            </button>
         
            
          </div>
            </>
            
          )}
           
            
           
          </div>
        </header>


      </div>
    </div>
    </div>
  );
};

export default Header;
