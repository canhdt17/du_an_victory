import React from "react";
import { IMovie } from "../interface/movie";
import { NavLink } from "react-router-dom";

type Props = {
  movies: IMovie[];
  loading: boolean;
  error: string | null;
  editMovies: (id: number | string, editMoive: IMovie) => void;
  deleteMovies: (id: number | string) => void;
};

const MovieList: React.FC<Props> = ({
  movies,
  loading,
  error,
  deleteMovies,
}) => {
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Name Movie</th>
              <th scope="col">Image</th>
              <th scope="col">Type</th>
              <th scope="col">Duration</th>
              <th scope="col">Nation</th>
              <th scope="col">Director</th>
              <th scope="col">Performer</th>
              <th scope="col">Show</th>
              <th scope="col">Content</th>
              <th scope="col">Link trailler</th>
              <th scope="col">Category ID</th>
              <th scope="col">Name Type </th>
              <th scope="col">Name Category </th>
              <th scope="col">Actions</th>
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
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <tr key={movie.id}>
                  <td>{index + 1}</td>
                  <td>{movie.name_movie}</td>
                  {/* <td>{movie.image}</td> */}
                  <td>
                    <img
                      src={movie.image}
                      alt={movie.name_movie}
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{movie.type_id}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.nation}</td>
                  <td>{movie.director}</td>
                  <td>{movie.performer}</td>
                  <td>{movie.content}</td>
                  <td>{movie.link_trailler}</td>
                  <td>{movie.category_id}</td>
                  <td>{movie.name_type}</td>
                  <td>{movie.name_category}</td>

                  <td>
                    <NavLink to={`/admin/dashboard/edit/${movie.id}`}>
                      <button
                        type="button"
                        className="btn btn-warning text-center"
                      >
                        EDIT
                      </button>
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteMovies(movie.id)}
                    >
                      DELETE
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
    </div>
  );
};

export default MovieList;
