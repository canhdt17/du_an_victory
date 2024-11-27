/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ISeatType } from "../../interface/seat_type";
import {
  ListSeatTypes,
  SeatsTypeDelete,
  SeatsTypeUpdate,
} from "../../service/seat_type";
import ListSeatType from "./ListSeatTypes";
import MenuDashboard from './../movie/menudashboard';
import HeaderDashboard from './../movie/headerdashboard';
import Logo from './../movie/logo';

const SeatType: React.FC = () => {
  const [seattypes, setSeatTypes] = useState<ISeatType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm fetch dữ liệu
  const fecthSeatTypes = async () => {
    setLoading(true);
    try {
      const data = await ListSeatTypes();
      setSeatTypes(data || []); 
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm cập nhật kiểu ghế
  async function updateSeatType({
    id,
    updateSeatTypes,
  }: {
    id?: number | string;
    updateSeatTypes: ISeatType;
  }) {
    try {
      await SeatsTypeUpdate(id, updateSeatTypes);
      await fecthSeatTypes();
      alert("Cập nhật kiểu ghế thành công!");
    } catch (error: any) {
      alert("Cập nhật kiểu ghế thất bại!");
      console.error(error);
    }
  }

  // Hàm xóa kiểu ghế
  const deleteSeatType = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa kiểu ghế này?"
      );
      if (!confirmDelete) return;

      await SeatsTypeDelete(id);
      alert("Xóa kiểu ghế thành công!");
      setSeatTypes(seattypes.filter((seattype) => seattype.id !== id));
    } catch (error) {
      console.error("Xóa kiểu ghế thất bại!");
    }
  };

  useEffect(() => {
    fecthSeatTypes();
  }, []);

  return (
    <div>
      <div>
        <div className="dashboards">
          <div>
            <Logo></Logo>
            <HeaderDashboard></HeaderDashboard>
            <div className="container-fluid">
              <div className="row">
                <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                  <div
                    className="offcanvas-md offcanvas-end bg-body-tertiary"
                    tabIndex={-1}
                    id="sidebarMenu"
                    aria-labelledby="sidebarMenuLabel"
                  >
                    <MenuDashboard></MenuDashboard>
                  </div>
                </div>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Kiểu Ghế</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                      <div className="btn-group me-2">
                        <NavLink to={`/admin/create_type_seat`}>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Thêm Kiểu Ghế
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  {loading && <p>Đang tải dữ liệu...</p>}
                  {error && <p>Lỗi: {error}</p>}
                  {!loading && !error && (
                    <ListSeatType
                      seattypes={seattypes}
                      loading={loading}
                      error={error}
                      updateSeatType={updateSeatType}
                      deleteSeatType={deleteSeatType}
                    />
                  )}
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatType;
