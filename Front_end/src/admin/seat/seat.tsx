/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuDashboard from "../menudashboard";
import HeaderDashboard from "../headerdashboard";
import Logo from "../logo";
import { ISeat } from "../../interface/seat";
import { SeatDelete, SeatList, SeatUpdate } from "../../service/seat";
import ListSeat from "./listseat";

const Seat: React.FC = () => {
  const [seats, setSeats] = useState<ISeat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // fetch
  const fetchSeats = async () => {
    try {
      const data = await SeatList();
      setSeats(data?.seats || []);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  // update
  const updateSeat = async (id: number | string, updatedSeat: ISeat) => {
    try {
      const data = await SeatUpdate(id, updatedSeat);
      setSeats(data?.seats || []);
      await fetchSeats();
      alert("Cập nhật ghế thành công!");
    } catch (error: any) {
      alert("Cập nhật ghế thất bại!");
      console.error(error);
    }
  };

  // delete
  const deleteSeat = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa ghế này?"
      );
      if (!confirmDelete) return;

      await SeatDelete(id);
      alert("Xóa ghế thành công!");
      setSeats(seats.filter((seat) => seat.id !== id));
    } catch (error) {
      console.error("Xóa ghế thất bại!");
    }
  };

  useEffect(() => {
    fetchSeats(); 
  }, []);

  return (
    <div>
      <div className="dashboards">
        <Logo />
        <HeaderDashboard />
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <MenuDashboard />
            </div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Seat</h1> 
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <NavLink to={`/admin/creatseat`}>
                      {" "}

                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Thêm Ghế
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              {loading && <p>Loading seats...</p>}
              {error && <p>Error fetching seats: {error}</p>}
              {!loading && !error && (
                <ListSeat
                  seats={seats}
                  loading={false}
                  error={null}
                  updateSeat={updateSeat}
                  deleteSeat={deleteSeat}
                />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
