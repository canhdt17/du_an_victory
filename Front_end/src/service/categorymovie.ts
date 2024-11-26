import api from "../axios/config";
import { ICategoryMovie } from "../interface/categorymovie";




export const CategoryMovie = async()=>{
    try {
        const {data} = await api.get("categorymovie")
        return data
    } catch (error) {
        console.log(error);
        
    }
}

export const CategoryMovieDel = async(id:number|string)=>{
    try {
        const {data} = await api.delete(`categorymovie/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}



// ID
export const CategoryMovieById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ categories: ICategoryMovie[] }>(
      `categories/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

//ADD
export const AddCategoryMovie = async (categorymovieData: ICategoryMovie) => {
  try {
    const { data } = await api.post<{ categories: ICategoryMovie[] }>(
      "categories",
      categorymovieData
    );
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
    const { data } = await api.put<{ categories: ICategoryMovie[] }>(
      `categories/${id}`,
      categorymovieData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};


