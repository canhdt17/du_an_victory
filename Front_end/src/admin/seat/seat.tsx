import React from "react";
import HeaderDashboard from "../headerdashboard";
import MovieList from "../movielist";
import MenuDashboard from "../menudashboard";
import Logo from "../logo";
import ListRoom from "./listroom";
import { IRoom } from "../../movie/room";
import { Link, NavLink } from "react-router-dom";
import ListSeat from "./listseat";

type Props = {
  seatDel:(id:number|string) => void
};

const Seat = ({seatDel}:Props) => {
  return (
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
                <h1 className="h2">Ghế</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <Link to={`/admin/creatseat`}>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Create Seat
                      </button>
                    </Link>
                    
                  </div>
                 
                </div>
                
              </div>
              <ListSeat seatDel={seatDel}></ListSeat>
            </main>
            
          </div>
        </div>
      </div>
      
    </div>
    </div>
  
  );
};

export default Seat;
