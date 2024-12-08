import { NavLink } from "react-router-dom";
import { IBase } from "../../interface/base";

type Props = {
  bases: IBase[];
  loading: boolean;
  error: string | null;
  updateBases: (id: number | string, updateBase: IBase) => void;
  deleteBases: (id: number | string) => void;
};

const ListBases: React.FC<Props> = ({ bases, loading, error, deleteBases }) => {
  const safeBases = Array.isArray(bases) ? bases : [];

  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Tên Cơ Sở </th>
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
            {safeBases.length > 0 ? (
              safeBases.map((base, index) => (
                <tr key={base.id}>
                  <td>{index + 1}</td>
                  <td>{base.base_name}</td>
                  <td>
                    <div className="action-buttons">
                      <NavLink to={`/admin/base/edit/${base.id}`}>
                        <button type="button" className="btn btn-warning">
                          Cập nhật
                        </button>
                      </NavLink>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteBases(base.id)}
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

export default ListBases;
