import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const MenuDashboard = (props: Props) => {
  return (
    <div>
      <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link d-flex align-items-center gap-2 active"
              aria-current="page"
              href="#"
            >
              <svg className="bi">
                <use xlinkHref="#house-fill" />
              </svg>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#file-earmark" />
              </svg>
              <NavLink to={`/room`}>Phòng</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#cart" />
              </svg>
              <NavLink to={`/admin/area`}>Khu Vực</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#people" />
              </svg>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#graph-up" />
              </svg>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#puzzle" />
              </svg>
              <NavLink to={`/`}>Victory</NavLink>
            </a>
          </li>
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
          <span>Saved reports</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <svg className="bi">
              <use xlinkHref="#plus-circle" />
            </svg>
          </a>
        </h6>
        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#file-earmark-text" />
              </svg>
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#file-earmark-text" />
              </svg>
              Last quarter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#file-earmark-text" />
              </svg>
              Social engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#file-earmark-text" />
              </svg>
              Year-end sale
            </a>
          </li>
        </ul>
        <hr className="my-3" />
        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#gear-wide-connected" />
              </svg>
              Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2" href="#">
              <svg className="bi">
                <use xlinkHref="#door-closed" />
              </svg>
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDashboard;
