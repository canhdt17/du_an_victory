import React from "react";
import { NavLink } from "react-router-dom";
import { ITypeMovie } from "../../interface/typemovie";

type Props = {
  types: ITypeMovie[];
  loading: boolean;
  error: string | null;
  updateTypeMovies: (
    id: number | string,
    updatedType: ITypeMovie
  ) => void;
  deleteTypeMovie: (id: number | string) => void;
};

const ListTypeMovie: React.FC<Props> = ({
  types,
  loading,
  error,
  deleteTypeMovie,
}) => {
  const safeTypes = Array.isArray(types) ? types : [];

  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-center">
            <th scope="col">STT</th>
            <th scope="col">Loại Phim</th>
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
          {safeTypes.length > 0 ? (
            safeTypes.map((type, index) => (
              <tr key={type.id}>
                <td>{index + 1}</td>
                <td>{type.name_type}</td>
                <td>
                <div className="action-buttons">
                  <NavLink to={`/admin/typemovie/edit/${type.id}`}>
                    <button type="button" className="btn btn-warning me-2">
                      Cập nhật
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteTypeMovie(type.id)}
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

export default ListTypeMovie;
