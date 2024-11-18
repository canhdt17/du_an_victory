import React, { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
};

type Props = {
  movieId: number;
  onEditMovie: (movie: Movie) => void;
  onCancel: () => void;
  movies: Movie[];
};

const EditMovie: React.FC<Props> = ({ movieId, onEditMovie, onCancel, movies }) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const movieToEdit = movies.find((m) => m.id === movieId);
    if (movieToEdit) {
      setMovie(movieToEdit);
    }
  }, [movieId, movies]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (movie) {
      onEditMovie(movie);
      onCancel(); // Redirect back to dashboard
    }
  };

  if (!movie) return null; // If movie is not found, do nothing

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Movie Title</label>
        <input
          type="text"
          className="form-control"
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Year</label>
        <input
          type="number"
          className="form-control"
          value={movie.year}
          onChange={(e) => setMovie({ ...movie, year: Number(e.target.value) })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Genre</label>
        <input
          type="text"
          className="form-control"
          value={movie.genre}
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save Changes
      </button>
      <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditMovie;
