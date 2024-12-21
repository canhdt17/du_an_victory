/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ISeat } from "../../interface/seat";
import { SeatDelete, SeatList, SeatUpdate } from "../../service/seat";
import ListSeat from "./listseat";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

const Seat: React.FC = () => {
  const [seats, setSeats] = useState<ISeat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch seats
  const fetchSeats = async () => {
    setLoading(true);
    try {
      const data = await SeatList();
      console.log("Fetched seats:", data);  // Log the data to check the response
      setSeats(data || []);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeats();
  }, []);

  function deleteSeat(id: string | number): void {
    if (window.confirm("Are you sure you want to delete this seat?")) {
      SeatDelete(id).then(() => {
        fetchSeats();  // Re-fetch after delete
      }).catch((error) => {
        console.error("Error deleting seat:", error);
      });
    }
  }

  function updateSeat(id: string | number, updatedSeat: ISeat): void {
    SeatUpdate(id, updatedSeat).then(() => {
      fetchSeats();  // Re-fetch after update
    }).catch((error) => {
      console.error("Error updating seat:", error);
    });
  }

  return (
    <div>
      <div className="dashboards">
        <Logo />
        <HeaderDashboard />
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0">
              <MenuDashboard />
            </div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Seat</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <NavLink to={`/admin/addseat`}>
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
