import React from "react";
import { NavLink } from "react-router-dom";
import { IKhuyenMai } from "../../interface/khuyen_mai";

type Props = {
  KhuyenMais: IKhuyenMai[];
  loading: boolean;
  error: string | null;
  updateKhuyenMai: (id: number | string, updateKhuyenMais: IKhuyenMai) => void;
  deleteKhuyenMai: (id: number | string) => void;
};

const ListKhuyenMai: React.FC<Props> = ({
  KhuyenMais,
  loading,
  error,
  deleteKhuyenMai,
}) => {
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Image</th>
              <th scope="col">Time date</th>
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
            {KhuyenMais.length > 0 ? (
              KhuyenMais.map((KhuyenMai, index) => (
                <tr key={KhuyenMai.id}>
                  <td>{index + 1}</td>
                  <td>{KhuyenMai.title}</td>
                  <td>{KhuyenMai.content}</td>
                  <td className="p-3 border-b">
                  <img
                    src={`${KhuyenMai.image}`}
                    alt={KhuyenMai.name_movie}
                    className="w-14 h-14 object-cover rounded-md mx-auto"
                  />
                </td>
                 
                  <td>{KhuyenMai.time_date}</td>
                  <td>
                  <div className="action-buttons">
                    <NavLink to={`/admin/khuyen_mai/edit/${KhuyenMai.id}`}>
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
                      onClick={() => deleteKhuyenMai(KhuyenMai.id)}
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

export default ListKhuyenMai;
