/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import HeaderDashboard from "../headerdashboard";
import MenuDashboard from "../menudashboard";
import Logo from "../logo";
import { IRoom } from "../../interface/room";
import { NavLink } from "react-router-dom";
import { ListRoom } from "../../service/room";
import ListRooms from "./listroom";


const Room = () => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await ListRoom();
        setRooms(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const handleDeleteRoom = (id: number | string) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <div className="dashboards">
      <Logo />
      <HeaderDashboard />
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar col-md-3 col-lg-2 p-0">
            <MenuDashboard />
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
            <ListRooms
              rooms={rooms}
              loading={loading}
              error={error}
              onDelete={handleDeleteRoom}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Room;
