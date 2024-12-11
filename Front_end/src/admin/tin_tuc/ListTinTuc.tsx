import React from "react";
import { NavLink } from "react-router-dom";
import { ITinTuc } from "../../interface/tin_tuc";

type Props = {
  TinTucs: ITinTuc[];
  loading: boolean;
  error: string | null;
  updateTinTuc: (id: number | string, updateTinTucs: ITinTuc) => void;
  deleteTinTuc: (id: number | string) => void;
};

const ListTinTuc: React.FC<Props> = ({
  TinTucs,
  loading,
  error,
  deleteTinTuc,
}) => {
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">name_TinTuc</th>
              <th scope="col">sub_title</th>             
              <th scope="col">content</th>
              <th scope="col">Image</th>
              <th scope="col">Time_date</th>
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
            {TinTucs.length > 0 ? (
              TinTucs.map((TinTuc, index) => (
                <tr key={TinTuc.id}>
                  <td>{index + 1}</td>
                  <td>{TinTuc.name_TinTuc}</td>
                  <td>{TinTuc.sub_title}</td>
                  <td>{TinTuc.content}</td>
                  <td className="p-3 border-b">
                  <img
                    src={`${TinTuc.imager}`}
                    alt={TinTuc.name_TinTuc}
                    className="w-14 h-14 object-cover rounded-md mx-auto"
                  />
                </td>
                 
                  <td>{TinTuc.created_at}</td>
                  <td>
                  <div className="action-buttons">
                    <NavLink to={`/admin/tin_tuc/edit/${TinTuc.id}`}>
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
                      onClick={() => deleteTinTuc(TinTuc.id)}
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

export default ListTinTuc;
