/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";
import { DeleteTypeMovie, TypeMovie, UpdateTypeMovies } from "../../service/typemovie";
import ListTypeMovie from "./listtypemovie";
import { ITypeMovie } from "../../interface/typemovie";

const Type: React.FC = () => {
  const [types, setTypes] = useState<ITypeMovie[]>([]);
  const [loading, setLoading] = useState(true);         
  const [error, setError] = useState<string | null>(null);

  // fetch
  const fetchTypes = async () => {
    try {
      const data = await TypeMovie();
      setTypes(data?.types || []);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  //update
  const updateTypeMovies = async (
    id: number | string,
    updateType: ITypeMovie
  ): Promise<void> => {
    try {
      const data = await UpdateTypeMovies(id, updateType);
      if (data?.types) {
        setTypes(data.types);
      }
      await fetchTypes();
      alert("Cập nhật loại phim thành công!");
    } catch (error: any) {
      alert("Cập nhật loại phim thất bại!");
      console.error("Update TypeMovie Error:", error?.message || error);
    }
  };

  // Hàm xóa
  const deleteTypeMovies = async (id: number | string) => {
    try {
      const confirmDelete = window.confirm(
        "Bạn có chắc chắn muốn xóa loại này?"
      );
      if (!confirmDelete) return;

      await DeleteTypeMovie(id);
      alert("Xóa loại phim thành công!");
      setTypes(types.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Xóa loại phim thất bại!");
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div>
      <div className="dashboards">
        <Logo />
        <HeaderDashboard />
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <MenuDashboard />
            </div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Danh Mục Phim</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group me-2">
                    <NavLink to={`/admin/addtypemovie`}>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Thêm Danh Mục
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
              {loading && <p>Loading types...</p>}
              {error && <p>Error fetching types: {error}</p>}
              {!loading && !error && (
                <ListTypeMovie
                  types={types}
                  loading={false}
                  error={null}
                  updateTypeMovies={updateTypeMovies}
                  deleteTypeMovie={deleteTypeMovies}
                />
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Type;
