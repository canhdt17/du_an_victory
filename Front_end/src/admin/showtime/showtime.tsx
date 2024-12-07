/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { IShowTime } from "../../interface/shotime";
import {
  ShowTimeDelete,
  ShowTimeList,
  ShowTimeUpdate,
} from "../../service/showtime";
import ListShowtime from "./listshowtime";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

const ShowTime: React.FC = () => {
  const [showtimes, setShowTimes] = useState<IShowTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm fetch dữ liệu
  const fetchShowtimes = async () => {
    setLoading(true);
    try {
      const response = await ShowTimeList();
      const showtimes = response.data; 
      // console.log(showtimes);
      setShowTimes(showtimes || []); 
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm cập nhật xuất chiếu phim
  const updateShowtime = async (id: number | string, updateArea: IShowTime) => {
    try {
      await ShowTimeUpdate(id, updateArea);
      await fetchShowtimes();
      alert("Cập nhật xuất chiếu phim thành công!");
    } catch (error: any) {
      alert("Cập nhật xuất chiếu phim thất bại!");
      console.error(error);
    }
  };

  // Hàm xóa xuất chiếu phim
  const deleteShowtime = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa xuất chiếu phim này?"
      );
      if (!confirmDelete) return;

      await ShowTimeDelete(id);
      alert("Xóa xuất chiếu phim thành công!");
      setShowTimes(showtimes.filter((area) => area.id !== id));
    } catch (error) {
      console.error("Xóa xuất chiếu phim thất bại!");
    }
  };

  useEffect(() => {
    fetchShowtimes();
  }, []);

  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo></Logo>
          <HeaderDashboard></HeaderDashboard>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ">
                <div
                  className="offcanvas-md offcanvas-end "
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard></MenuDashboard>
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Danh Sách Xuất Chiếu Phim</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                      <NavLink to={`/admin/showtime/createshowtime`}>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Thêm Xuất Chiếu Phim
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {loading && <p>Đang tải dữ liệu...</p>}
                {error && <p>Lỗi: {error}</p>}
                {!loading && !error && (
                  <ListShowtime
                   showtimes ={showtimes}
                    loading={loading}
                    error={error}
                    updateShowtimes={updateShowtime}
                    deleteShowtimes={deleteShowtime}
                  />
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
