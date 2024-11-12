import api from "../axios/config";
import { INews } from "../movie/news";


export const NewList = async()=>{
    try {
        const {data} = await api.get("news")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const NewsById = async(id:number|string)=>{
    try {
        const {data} = await api.get(`news/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const DeleteNews = async(id:number|string)=>{
    try {
        const {data} = await api.delete(`news/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AddNews = async(newsData:INews)=>{
    try {
        const {data} = await api.post("news",newsData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const UpdateNews = async(newsData:INews,id:number|string)=>{
    try {
        const {data} = await api.put(`news/${id}`,newsData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}