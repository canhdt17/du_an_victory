import React, { useState } from "react";

type Movie = {
  id?: number;
  title: string;
  genre: string;
  releaseDate: string;
  description: string;
};

type Props = {
  movie?: Movie;
  onSubmit: (movie: Movie) => void; 
};

const MovieForm: React.FC<Props> = ({ movie, onSubmit }) => {
  const [formData, setFormData] = useState<Movie>({
    id: movie?.id,
    title: movie?.title || "",
    genre: movie?.genre || "",
    releaseDate: movie?.releaseDate || "",
    description: movie?.description || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="genre" className="form-label">Genre</label>
        <input
          type="text"
          className="form-control"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="releaseDate" className="form-label">Release Date</label>
        <input
          type="date"
          className="form-control"
          id="releaseDate"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">{movie ? "Update Movie" : "Add Movie"}</button>
    </form>
  );
};

export default MovieForm;
