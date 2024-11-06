import React, { useState } from "react";
import { Movie } from "../interface/movie";


type Props = {
  onAddMovie: (movie: Omit<Movie, "id">) => void;
  onCancel: () => void;
};

const AddMovie: React.FC<Props> = ({ onAddMovie, onCancel }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState<number | "">("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && year && genre) {
      onAddMovie({ title, year: Number(year), genre });
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Movie Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Year</label>
        <input
          type="number"
          className="form-control"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Genre</label>
        <input
          type="text"
          className="form-control"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Movie
      </button>
      <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default AddMovie;
