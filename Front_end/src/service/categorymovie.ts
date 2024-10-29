import api from "../axios/config";
import { ICategoryMovie } from "../movie/categorymovie";


export const CategoryMovie = async()=>{
    try {
        const {data} = await api.get("categorymovie")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const CategoryMovieById = async(id:number|string)=>{
    try {
        const {data} = await api.get(`categorymovie/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AddCategoryMovie = async(categorymovieData:ICategoryMovie)=>{
    try {
        const {data} = await api.post("categorymovie",categorymovieData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const UpdateCategoryMovies = async(categorymovieData:ICategoryMovie,id:number|string)=>{
    try {
        const {data} = await api.put(`categorymovie/${id}`,categorymovieData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}