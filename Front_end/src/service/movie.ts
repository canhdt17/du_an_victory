import api from "../axios/config";
import { IMovie } from "../interface/movie";

// All
export const ListMovies = async () => {
  try {
    const { data } = await api.get<IMovie[]>("movies");
    return data;
  } catch (error) {
    console.log(error);
    //  return { movies: [] };
  }
};

// ID
export const MovieById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ movie: IMovie }>(`movies/${id}`);
    return data.movie;
  } catch (error) {
    console.log(error);
  }
};

// Add
export const MovieAdd = async (movieData: IMovie) => {
  try {
    const { data } = await api.post<{ movie: IMovie }>("movies", movieData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Update
export const MovieUpdate = async (id: number | string, movieData: IMovie) => {
  try {
    const { data } = await api.put<{ movie: IMovie }>(
      `movies/${id}`,
      movieData
    );
    return data.movie;
  } catch (error) {
    console.log(error);
  }
};

// Delete
export const MovieDelete = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`movies/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};



