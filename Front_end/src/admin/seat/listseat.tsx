import React from "react";
import { NavLink } from "react-router-dom";
import { ISeat } from "../../interface/seat";

type Props = {
  seats: ISeat[];
  loading: boolean;
  error: string | null;
  updateSeat: (id: number | string, updatedSeat: ISeat) => void;
  deleteSeat: (id: number | string) => void;
};

const ListSeat: React.FC<Props> = ({ seats, loading, error, deleteSeat }) => {
  const safeSeats = Array.isArray(seats) ? seats : [];

  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-center">
            <th scope="col">STT</th>
            <th scope="col">Só Ghế</th>
            <th scope="col">Loai Ghế</th>
            <th scope="col">Phòng </th>
            <th scope="col">Hành Động</th>
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
              <td colSpan={3}>Error: {error}</td>
            </tr>
          )}
          {safeSeats.length > 0 ? (
            safeSeats.map((seat, index) => (
              <tr key={seat.id}>
                <td>{index + 1}</td>
                <td>{seat.seat_number}</td>
                <td>{seat.seat_type_id}</td>
                <td>{seat.room_id}</td>

                <td>
                <div className="action-buttons">
                  <NavLink to={`/admin/seat/edit/${seat.id}`}>
                    <button type="button" className="btn btn-warning me-2">
                      Cập nhật
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteSeat(seat.id)}
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
  );
};

export default ListSeat;
