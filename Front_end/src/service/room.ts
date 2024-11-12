import api from "../axios/config";
import { RoomData } from "../interface/room";

//List
export const ListRoom = async () => {
  try {
    const { data } = await api.get<{rooms : RoomData[]}>("rooms");
    return data;
  } catch (error) {
    console.log(error);
  }
};

//ID
export const GetRoomById = async (id: number | string) => {
  try {
    const { data } = await api.get<{rooms : RoomData[]}>(`rooms/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//ADD
export const AddRoom = async (roomData: RoomData) => {
  try {
    const { data } = await api.post<{rooms : RoomData[]}>("rooms", roomData);
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
export const RoomUpdate = async (roomData: RoomData, id: number | string) => {
  try {
    const { data } = await api.put<{rooms : RoomData[]}>(`rooms/${id}`, roomData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
