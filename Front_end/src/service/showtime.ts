import api from "../axios/config";
import { IArea } from "../movie/area";
import { IShowTime } from "../movie/shotime";

export const ShowTimeList = async()=>{
    try {
        const {data} = await api.get("showtime")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const ShowTimeById = async(id:number|string)=>{
    try {
        const {data} = await api.get(`showtime/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const ShowTimeAdd = async(showData:IShowTime)=>{
    try {
        const {data} = await api.post("showtime",showData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const ShowTimeUpdate = async(showData:IShowTime,id:number|string)=>{
    try {
        const {data} = await api.put(`showtime/${id}`,showData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}