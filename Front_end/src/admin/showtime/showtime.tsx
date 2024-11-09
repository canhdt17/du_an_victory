import React from 'react'
import Logo from '../logo'
import HeaderDashboard from '../headerdashboard'
import MenuDashboard from '../menudashboard'
import { NavLink } from 'react-router-dom'
import ListShowtime from './listshowtime'

type Props = {
  showDel:(id:number|string) => void
}

const ShowTime = ({showDel}: Props) => {
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
              <ListShowtime showDel={showDel}></ListShowtime>
            </main>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShowTime