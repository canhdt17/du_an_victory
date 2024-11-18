/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import Logo from "./logo";
import HeaderDashboard from "./headerdashboard";
import MenuDashboard from "./menudashboard";
import { IMovie } from "../interface/movie";
import { NavLink } from "react-router-dom";
import { ListMovies, MovieDelete, MovieUpdate } from "../service/movie";
import MovieList from "./movielist";

const Dashboard: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ham fetch data
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const data = await ListMovies();
      setMovies(data || []);
    } catch (error: any) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  const editMovie = useCallback(
    async (id: number | string, editMovie: IMovie) => {
      setLoading(true);
      try {
        await MovieUpdate(id, editMovie);
        fetchMovies();
        alert("Cập nhật phim thành công!");
      } catch (error: any) {
        alert("Cập nhật phim thất bại!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteMovie = useCallback(async (id: number | string) => {
    setLoading(true);
    try {
      const confirmDelete = window.confirm("Bạn có chắc muốn xóa phim này?");
      if (!confirmDelete) return;

      await MovieDelete(id);
      fetchMovies();
      alert("Xóa phim thành công!");
    } catch (error: any) {
      console.error("Xóa phim thất bại", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="dashboards">
        <div>
          <Logo />
          <HeaderDashboard />
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                  className="offcanvas-md offcanvas-end bg-body-tertiary"
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard />
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Danh Sách Phim </h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                      <NavLink to={`/admin/dashboard/addmovie`}>
                        <button type="button" className="btn btn-primary">
                          Add Movie
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {!loading && !error && movies.length === 0 && (
                  <p>Không có phim nào!</p>
                )}
                {loading && <p>Đang tải dữ liệu...</p>}
                {error && <p>Lỗi: {error}</p>}
                {!loading && !error && movies.length > 0 && (
                  <MovieList
                    movies={movies}
                    loading={loading}
                    error={error}
                    editMovies={editMovie}
                    deleteMovies={deleteMovie}
                  />
                )}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
