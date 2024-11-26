/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavLink } from "react-router-dom";
import { IShowTime } from "../../interface/shotime";
import React from "react";

type Props = {
  showtimes: IShowTime[];
  loading: boolean;
  error: string | null;
  updateShowtimes: (id: number | string, updateShowtime: IShowTime) => void;
  deleteShowtimes: (id: number | string) => void;
};

const ListShowtime: React.FC<Props> = ({
  showtimes,
  loading,
  error,
  deleteShowtimes,
}) => {
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Movie ID</th>
              <th scope="col">Room ID </th>
              <th scope="col">Showtime Date</th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>
              <th scope="col">Button</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {loading && (
              <tr>
                <td colSpan={3}>Đang tải...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan={3}>Lỗi: {error}</td>
              </tr>
            )}
            {showtimes.length > 0 ? (
              showtimes.map((showtime, i: number) => (
                <tr key={showtime.id}>
                  <td>{i + 1}</td>
                  <td>{showtime.movie_id}</td>
                  <td>{showtime.room_id}</td>
                  <td>{showtime.showtime_date}</td>
                  <td>{showtime.start_time}</td>
                  <td>{showtime.end_time}</td>
                  <td>
                  <div className="action-buttons">
                    <NavLink to={`/admin/showtime/edit/${showtime.id}`}>
                      <button
                        type="button"
                        className="btn btn-warning text-center "
                      >
                        Cập nhật
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteShowtimes(showtime.id)}
                    >
                      Xóa
                    </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Không có dữ liệu</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListShowtime;
