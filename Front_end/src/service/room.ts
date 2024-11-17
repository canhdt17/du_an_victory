import api from "../axios/config";
import { IRoom } from './../interface/room';

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
export const UpdateRoom = async ( id: number | string,roomData: IRoom) => {
  try {
    const { data } = await api.put<{rooms : IRoom[]}>(`rooms/${id}`, roomData);
    return data.rooms;
  } catch (error) {
    console.log(error);
  }
};
