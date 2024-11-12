import React from "react";
import { NavLink } from "react-router-dom";
import { ICategoryMovie } from "../../interface/categorymovie";

type Props = {
  categories: ICategoryMovie[];
  loading: boolean;
  error: string | null;
  updateCategoryMovies: (
    id: number | string,
    updatedCategory: ICategoryMovie
  ) => void;
  deleteCategoryMovie: (id: number | string) => void;
};

const ListCategoryMovie: React.FC<Props> = ({
  categories,
  loading,
  error,
  deleteCategoryMovie,
}) => {
  const safeCategories = Array.isArray(categories) ? categories : [];

  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr className="text-center">
            <th scope="col">STT</th>
            <th scope="col">Tên Danh Mục</th>
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
          {safeCategories.length > 0 ? (
            safeCategories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name_category}</td>
                <td>
                  <NavLink to={`/admin/createmovie/edit/${category.id}`}>
                    <button type="button" className="btn btn-warning me-2">
                      Cập nhật
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteCategoryMovie(category.id)}
                  >
                    Xóa
                  </button>
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

export default ListCategoryMovie;
