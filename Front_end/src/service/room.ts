import api from "../axios/config"
import { RoomData } from "../interface/room";


export const ListRoom = async()=>{
    try {
        const {data} = await api.get("/rooms")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const GetRoomById = async(id:number|string)=>{
    try {
        const {data} = await api.get(`/rooms/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const DeleteRoom = async(id:number|string)=>{
    try {
        const {data} = await api.get(`/rooms/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AddRoom = async(roomData:RoomData)=>{
    try {
        const {data} = await api.post('/rooms',roomData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const RoomUpdate = async(roomData:RoomData,id:number|string)=>{
    try {
        const {data} = await api.put(`/rooms/${id}`,roomData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}