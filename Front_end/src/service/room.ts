/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../axios/config";
import { IRoom } from './../interface/room';

// List
export const ListRoom = async (): Promise<IRoom[]> => {
  try {
    const response = await api.get<{ data: IRoom[] }>("rooms");
    return response.data.data; 
  } catch (error: any) {
    console.error("Error in ListRoom:", error);
    throw error; 
  }
};

// Get by ID
export const GetRoomById = async (id: number | string): Promise<IRoom | undefined> => {
  try {
    const { data } = await api.get<IRoom>(`rooms/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching room by ID:", error);
    return undefined;
  }
};

// Add
export const AddRoom = async (roomData: IRoom): Promise<IRoom> => {
  try {
    const { data } = await api.post("rooms", roomData);
    console.log("Response Data:", data); 
    return data;
  } catch (error) {
    if (error.response) {
      console.error("Error details:", error.response.data);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};

// Delete
export const DeleteRoom = async (id: number | string): Promise<{ message: string }> => {
  try {
    const { data } = await api.delete<{ message: string }>(`rooms/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting room:", error);
    throw error;
  }
};

// Update
export const UpdateRoom = async (id: string | number, data: IRoom): Promise<IRoom> => {
  try {
    const response = await api.put(`/rooms/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating room:", error);
    throw error;
  }
};
