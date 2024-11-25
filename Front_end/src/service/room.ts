import api from "../axios/config";
import { IRoom } from './../interface/room';

<<<<<<< HEAD

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

=======
//List
export const ListRoom = async () => {
  try {
    const { data } = await api.get<IRoom[]>("rooms");
    return data;
  } catch (error) {
    console.log(error);
  }
};

//ID
export const GetRoomById = async (id: number | string) => {
  try {
    const { data } = await api.get<{rooms : IRoom[]}>(`rooms/${id}`);
    return data.rooms;
  } catch (error) {
    console.log(error);
  }
};

//ADD
export const AddRoom = async (roomData: IRoom) => {
  try {
    const { data } = await api.post<{rooms : IRoom[]}>("rooms", roomData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//DELETE
export const DeleteRoom = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`rooms/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

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
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48
