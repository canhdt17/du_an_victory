/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

import { IRoom } from "../../interface/room";
import { NavLink } from "react-router-dom";
import ListRooms from "./listroom";
import { DeleteRoom, ListRoom, UpdateRoom } from "../../service/room";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

const Room: React.FC = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm fetch dữ liệu
  const fetchRooms = async () => {
    setLoading(true);
    try {
      const data = await ListRoom();
      setRooms(data); // Gán dữ liệu vào state
    } catch (error: any) {
      console.error("Error fetching rooms:", error);
      setError(error.message || "Đã xảy ra lỗi khi tải danh sách phòng.");
    } finally {
      setLoading(false);
    }
  };
  

  // Hàm cập nhật khu vực
  const updateRooms = async (id: number | string, updateRoom: IRoom) => {
    try {
      await UpdateRoom(id, updateRoom);
      await fetchRooms(); // Fetch lại dữ liệu sau khi cập nhật
      alert("Cập nhật khu vực thành công!");
    } catch (error: any) {
      alert("Cập nhật khu vực thất bại!");
      console.error(error);
    }
  };

  // Hàm xóa khu vực
  const deleteRooms = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa phòng này?"
      );
      if (!confirmDelete) return;

      await DeleteRoom(id);
      alert("Xóa khu vực thành công!");
      setRooms(rooms.filter((room) => room.id !== id));
    } catch (error) {
      console.error("Xóa khu vực thất bại!");
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);
  return (
    <div className="dashboards">
      <Logo />
      <HeaderDashboard />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ">
            <div
              className="offcanvas-md offcanvas-end "
              tabIndex={-1}
              id="sidebarMenu"
              aria-labelledby="sidebarMenuLabel"
            >
              <MenuDashboard />
            </div>
          </div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Danh Sách Phòng</h1>
              <NavLink to="/admin/room/createroom">
                <button className="btn btn-sm btn-outline-secondary">
                  Thêm Phòng
                </button>
              </NavLink>
            </div>
            {loading && <p>Đang tải dữ liệu...</p>}
            {error && <p>Lỗi: {error}</p>}
            {!loading && !error && (
              <ListRooms
                rooms={rooms}
                loading={loading}
                error={error}
                updateRooms={updateRooms}
                deleteRooms={deleteRooms}
              />
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Room;
