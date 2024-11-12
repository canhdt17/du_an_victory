import React from "react";
import { Movie } from "../interface/movie"; 

type Props = {
  movies: Movie[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const MovieList: React.FC<{ movies: Movie[], onEdit: (id: number) => void, onDelete: (id: number) => void }> = ({ movies, onEdit, onDelete }) => {
  if (!Array.isArray(movies)) {
    return <div>No movies available.</div>;
  }
  return (
    <div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Genre</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-1" onClick={() => onEdit(movie.id)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this movie?")) {
                      onDelete(movie.id);
                    }
                  }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
