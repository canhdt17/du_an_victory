import api from "../axios/config";
import { RoomData } from "../interface/room";




export const ListRoom = async()=>{
    try {
        const {data} = await api.get("room")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const GetRoomById = async(id:number|string)=>{
    try {
        const {data} = await api.get(`room/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const DeleteRoom = async(id:number|string)=>{
    try {
        const {data} = await api.delete(`room/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AddRoom = async(roomData:RoomData)=>{
    try {
        const {data} = await api.post('room',roomData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const RoomUpdate = async(roomData:RoomData,id:number|string)=>{
    try {
        const {data} = await api.put(`room/${id}`,roomData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}


<<<<<<< HEAD
//UPDATE
export const UpdateRoom = async (id: string | number, data: IRoom) => {
  try {
    const response = await api.put(`/rooms/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating room:", error);
    throw error;
  }
};


=======
>>>>>>> origin/main
