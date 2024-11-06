import React, { useState, useEffect } from "react";
import Logo from "./logo";
import HeaderDashboard from "./headerdashboard";
import MenuDashboard from "./menudashboard";
import MovieList from "./movielist";
import { Movie } from "../interface/movie";
import AddMovie from "./Addmovie";
import EditMovie from "./EditMovie";

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [movieToEditId, setMovieToEditId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [notification, setNotification] = useState("");

  const apiEndpoint = "http://127.0.0.1:8000/api/movies";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setMovies(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setMovies([]);
      }
    };
  
    fetchMovies();
  }, []);
  

  const addMovie = async (movie: Omit<Movie, "id">) => {
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      });
      const newMovie = await response.json();
      setMovies((prevMovies) => [...prevMovies, newMovie]);
      setNotification("Movie added successfully!");
    } catch (error) {
      console.error("Failed to add movie:", error);
    }
  };

  const editMovie = async (editedMovie: Movie) => {
    try {
      await fetch(`${apiEndpoint}/${editedMovie.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedMovie),
      });
      setMovies((prevMovies) =>
        prevMovies.map((movie) => (movie.id === editedMovie.id ? editedMovie : movie))
      );
      setNotification("Movie updated successfully!");
    } catch (error) {
      console.error("Failed to update movie:", error);
    }
  };

  const deleteMovie = async (id: number) => {
    try {
      await fetch(`${apiEndpoint}/${id}`, {
        method: "DELETE",
      });
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
      setNotification("Movie deleted successfully!");
    } catch (error) {
      console.error("Failed to delete movie:", error);
    }
  };

  const handleEditClick = (id: number) => {
    setIsEditing(true);
    setMovieToEditId(id);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setMovieToEditId(null);
    setIsAdding(false); 
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
    setIsEditing(false);
  };

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
                  <h2>Danh Sách Phim</h2>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsAdding(true)} 
                  >
                    Add Movie
                  </button>
                </div>
                {notification && <div className="alert alert-success">{notification}</div>}
                {isAdding ? (
                  <AddMovie onAddMovie={addMovie} onCancel={handleCancelAdd} />
                ) : isEditing ? (
                  <EditMovie
                    movieId={movieToEditId!}
                    onEditMovie={editMovie}
                    onCancel={handleCancelEdit}
                    movies={movies}
                  />
                ) : (
                  <MovieList movies={movies} onEdit={handleEditClick} onDelete={deleteMovie} />
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
