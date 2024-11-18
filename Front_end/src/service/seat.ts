import api from "../axios/config";
import { ISeat } from "../interface/seat";


export const SeatList = async()=>{
    try {
        const {data} = await api.get("seat")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatByID = async(id:number|string)=>{
    try {
        const {data} = await api.get(`seat/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatDelete = async(id:number|string)=>{
    try {
        const {data} = await api.delete(`seat/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatAdd = async(seatData:ISeat)=>{
    try {
        const {data} = await api.post("seat",seatData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatUpdate = async(id:number|string,seatData:ISeat)=>{
    try {
        const {data} = await api.put(`seat/${id}`,seatData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}