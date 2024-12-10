
import { NavLink } from "react-router-dom";

const MenuDashboard = () => {
  return (
    <div>
      <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
      <ul className="flex flex-col">
          <li className="nav-item">
            <NavLink
              to="/admin/dashboard"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#house-fill" />
              </svg>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/room"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#file-earmark" />
              </svg>
              Phòng
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/base"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#cart" />
              </svg>
              Cơ Sở 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/category"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#people" />
              </svg>
              Danh Mục Phim
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/seat_type"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#graph-up" />
              </svg>
              Kiểu Ghế
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/seat"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#puzzle" />
              </svg>
              Ghế
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/showtime"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#puzzle" />
              </svg>
              Xuất Chiếu Phim
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/typemovie"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#puzzle" />
              </svg>
              Loại Phim
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/khuyen_mai"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#cart" />
              </svg>
              Khuyến Mãi 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/tin_tuc"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#cart" />
              </svg>
              Tin Tức 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/user"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#puzzle" />
              </svg>
              Tài Khoản
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#puzzle" />
              </svg>
              Victory
            </NavLink>
          </li>
        </ul>
      
        <hr className="my-3" />
        <ul className="flex flex-col mb-auto">
          <li className="nav-item">
            <a
              href="#"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#gear-wide-connected" />
              </svg>
              Cài Đặt
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="flex items-center gap-2 p-3 text-white hover:bg-pink-200"
            >
              <svg className="w-3 h-0">
                <use xlinkHref="#door-closed" />
              </svg>
              Đăng xuất 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDashboard;
