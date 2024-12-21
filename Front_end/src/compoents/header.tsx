import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IUser } from "../interface/User";


const Header = () => {
  const token = localStorage.getItem('token');
  const avatar = localStorage.getItem("avatar");
  const navigate = useNavigate();
  const handleLogout = async () => {
    if (token) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/logout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          console.log("Đăng xuất thành công từ server!");
        } else {
          console.error("Không thể đăng xuất từ server!");
        }
      } catch (error) {
        console.error("Lỗi khi gửi yêu cầu đăng xuất:", error);
      }
    }
    localStorage.removeItem("token");
    alert("Bạn đã đăng xuất!");
    window.location.href = "/login";
  };

  const [user, setUser] = useState<IUser>();
  const fetchUser = async () => {
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    if (!token) {
      console.error("Không tìm thấy token");
      return null;
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Gửi token qua header Authorization
        },
      });

      if (response.ok) {
        const user = await response.json();
        return user; // Trả về thông tin người dùng
      } else {
        console.error("Lỗi khi lấy thông tin người dùng");
        return null;
      }
    } catch (error) {
      console.error("Lỗi kết nối tới server:", error);
      return null;
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const fetchedUser = await fetchUser(); // Gọi hàm fetchUser
      setUser(fetchedUser); // Cập nhật state
    };
    loadUser();
  }, []);
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
                    <NavLink to="/categoryfilms" className="hover:text-gray-300">
                      Thể Loại Phim
                    </NavLink>
                    <NavLink to="/about" className="hover:text-gray-300">
                      Giới thiệu
                    </NavLink>
                    <NavLink to="/admin/dashboard" className="hover:text-gray-300">
                      Admin
                    </NavLink>
                  </nav>
                  <div className="flex mt-2"> <img
                    src={avatar || "https://via.placeholder.com/40"}
                    alt="Avatar"
                    style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                  />
                    <div>
                      {/* <NavLink to={`/userprofile`}><p className="mt-2 font-serif">{user.fullname}</p></NavLink> */}
                    </div>
                  </div>
                  <button onClick={handleLogout} >Đăng xuất</button>
                  <div>
                  </div>
                </>
              ) : (
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
                    <NavLink to="/categoryfilms" className="hover:text-gray-300">
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
                    <button onClick={() => navigate("/register")} className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all">
                      Đăng ký
                    </button>
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
