import api from "../axios/config";
import { ISeatType } from "../movie/seat_type";

export const ListSeatTypes = async()=>{
    try {
        const {data} = await api.get("seat_type")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatsTypeByID = async(id:number|string)=>{
    try {
        const {data} = await api.get(`seat_type/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatsTypeAdd = async(seatTypeData:ISeatType)=>{
    try {
        const {data} = await api.post("seat_type",seatTypeData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatsTypeUpdate = async(seatTypeData:ISeatType,id:number|string)=>{
    try {
        const {data} = await api.put(`area/${id}`,seatTypeData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}