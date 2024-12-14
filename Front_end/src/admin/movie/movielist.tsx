import React from "react";
import { IMovie } from "../../interface/movie";
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
  const baseImageUrl = "http://127.0.0.1:8000/";

  return (
    <div className="max-h-[82vh] overflow-y-auto border border-gray-300 rounded-lg shadow-lg">
      <table className="w-full text-sm text-gray-700">
        <thead className=" text-gray-900 font-medium text-center">
          <tr>
            <th className="p-3 border-b">STT</th>
            <th className="p-3 border-b">Tên Phim</th>
            <th className="p-3 border-b">Ảnh</th>
            <th className="p-3 border-b">Định Dạng</th>
            <th className="p-3 border-b">Thời Lượng</th>
            <th className="p-3 border-b">Quốc Gia</th>
            <th className="p-3 border-b">Đạo Diễn</th>
            <th className="p-3 border-b">Diễn Viên</th>
            <th className="p-3 border-b">Thời Gian</th>
            <th className="p-3 border-b">Nội Dung</th>
            <th className="p-3 border-b">Link Trailer</th>
            <th className="p-3 border-b">Thể Loại</th>
            <th className="p-3 border-b">Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={14} className="p-5 text-center text-gray-500">
                Đang tải...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan={14} className="p-5 text-center text-red-500">
                Lỗi: {error}
              </td>
            </tr>
          )}
          {movies.length > 0 ? (
            movies.map((movie) => (
              <tr key={movie.id} className="hover:bg-gray-100">
                <td className="p-3 border-b text-center">{movie.id}</td>
                <td className="p-3 border-b">{movie.name_movie}</td>
                <td className="p-3 border-b">
                  <img
                    src={`${movie.image}`}
                    alt={movie.name_movie}
                    className="w-14 h-14 object-cover rounded-md mx-auto"
                  />
                </td>
                <td className="p-3 border-b text-center">{movie.name_type}</td>
                <td className="p-3 border-b text-center">{movie.duration}</td>
                <td className="p-3 border-b">{movie.nation}</td>
                <td className="p-3 border-b">{movie.director}</td>
                <td className="p-3 border-b truncate max-w-xs">
                  {movie.performer}
                </td>
                <td className="p-3 border-b text-center">{movie.show}</td>
                <td className="p-3 border-b truncate max-w-xs">
                  <div title={movie.content}>{movie.content}</div>
                </td>
                <td className="p-3 border-b text-center">
                  <a
                    href={movie.link_trailler}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Xem Trailer
                  </a>
                </td>
                <td className="p-3 border-b">{movie.name_category}</td>
                <td className="p-3 border-b flex items-center justify-center gap-2">
                  <NavLink
                    to={`/admin/movie/edit/${movie.id}`}
                    className="px-3 py-1 text-sm font-medium bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  >
                    Chỉnh Sửa
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => deleteMovies(movie.id)}
                    className="px-3 py-1 text-sm font-medium bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Xóa Bỏ
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={14} className="p-5 text-center text-gray-500">
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
