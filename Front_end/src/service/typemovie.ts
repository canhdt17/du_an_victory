import api from "../axios/config";
import { ISeatType } from "../interface/seat_type";

//ALL
export const TypeMovie = async () => {
  try {
    const { data } = await api.get<{ types: ISeatType[] }>(
      "types"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ID
export const TypeMovieById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ type: ISeatType }>(`types/${id}`);
    return data.type; 
  } catch (error) {
    console.error("Error fetching type:", error);
    return null; 
  }
};


//ADD
export const AddTypeMovie = async (categorymovieData: ISeatType) => {
  try {
    const { data } = await api.post<{ types: ISeatType[] }>(
      "types",
      categorymovieData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//UPDATE
export const UpdateTypeMovies = async (
  categorymovieData: ISeatType,
  id: number | string
) => {
  try {
    const { data } = await api.put<{ types: ISeatType[] }>(
      `types/${id}`,
      categorymovieData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// DELETE
export const DeleteTypeMovie = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`types/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
