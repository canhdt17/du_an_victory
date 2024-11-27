import React from "react";
import { NavLink } from "react-router-dom";
import { ISeatType } from "../../interface/seat_type";

type Props = {
  seattypes: ISeatType[];
  loading: boolean;
  error: string | null;
  updateSeatType: (id: number | string, updateSeatTypes: ISeatType) => void;
  deleteSeatType: (id: number | string) => void;
};

const ListSeatType: React.FC<Props> = ({
  seattypes,
  loading,
  error,
  deleteSeatType,
}) => {
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Kiểu Ghế</th>
              <th scope="col">Giá Tiền</th>
              <th scope="col">Thao Tác</th>
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
            {seattypes.length > 0 ? (
              seattypes.map((seattype, index) => (
                <tr key={seattype.id}>
                  <td>{index + 1}</td>
                  <td>{seattype.seat_type_name}</td>
                  <td>{seattype.seat_price}</td>

                  <td>
                  <div className="action-buttons">
                    <NavLink to={`/admin/seat_type/edit/${seattype.id}`}>
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
                      onClick={() => deleteSeatType(seattype.id)}
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

export default ListSeatType;
