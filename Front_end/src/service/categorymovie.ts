import api from "../axios/config";
import { ICategoryMovie } from "../interface/categorymovie";

//ALL
export const CategoryMovie = async () => {
  try {
    const { data } = await api.get<{ categories: ICategoryMovie[] }>(
      "categories"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ID
export const CategoryMovieById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ category: ICategoryMovie }>(`categories/${id}`);
    return data.category;
  } catch (error) {
    console.error("Error fetching category:", error);
    // return null; 
  }
};


//ADD
export const AddCategoryMovie = async (categorymovieData: ICategoryMovie) => {
  try {
    const { data } = await api.post<{ categories: ICategoryMovie[] }>(
      "categories",
      categorymovieData
    );
    console.log("API response:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//UPDATE
export const UpdateCategoryMovies = async (
  categorymovieData: ICategoryMovie,
  id: number | string
) => {
  try {
    console.log("Data being sent to API:", categorymovieData);
    const { data } = await api.put<{ categories: ICategoryMovie[] }>(
      `categories/${id}`,
      categorymovieData
    );
    return data;
  } catch (error) {
    console.error("Error in UpdateCategoryMovies:", error);
    throw error; // Throw lại lỗi để debug dễ hơn.
  }
};



// DELETE
export const DeleteCategoryMovie = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`categories/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
