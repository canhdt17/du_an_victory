import { NavLink } from "react-router-dom";
import { IArea } from "../../interface/area";

type Props = {
  areas: IArea[];
  loading: boolean;
  error: string | null;
  updateAreas: (id: number | string, updateArea: IArea) => void;
  deleteArea: (id: number | string) => void;
};

const ListAreas: React.FC<Props> = ({ areas, loading, error, deleteArea }) => {
  const safeAreas = Array.isArray(areas) ? areas : [];

  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">STT</th>
              <th scope="col">Tên Khu Vực</th>
              <th scope="col">Hành động</th>
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
            {safeAreas.length > 0 ? (
              safeAreas.map((area, index) => (
                <tr key={area.area_id}>
                  <td>{index + 1}</td>
                  <td>{area.area_name}</td>
                  <td>
                    <div className="action-buttons">
                      <NavLink to={`/admin/area/edit/${area.area_id}`}>
                        <button type="button" className="btn btn-warning">
                          Cập nhật
                        </button>
                      </NavLink>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteArea(area.area_id)}
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

export default ListAreas;
