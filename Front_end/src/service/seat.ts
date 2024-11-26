/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../axios/config";
import { IRoom } from "../interface/room";
import { ISeat } from "../interface/seat";
import { ISeatType } from "../interface/seat_type";

//LIST
export const SeatList = async () => {
  try {
    const { data } = await api.get<{ seats: ISeat[] }>("seats");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ID
export const SeatByID = async (id: number | string): Promise<ISeat | null> => {
  try {
    const { data } = await api.get<ISeat>(`seats/${id}`); 
    return data;
  } catch (error: any) {
    console.error(`Error fetching seat with ID ${id}:`, error);
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error('Seat not found');
      }
      throw new Error('An error occurred while fetching the seat');
    }
    throw new Error('Failed to connect to the server');
  }
};


//ADD
export const SeatAdd = async (seatData: ISeat) => {
  try {
    const response = await api.post<ISeat>("seats", seatData);
    console.log("Seat added successfully:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Validation error:", error.response?.data);
    throw error.response?.data || error.message;
  }
};


// UPDATE
export const SeatUpdate = async (seatData: ISeat, id: number | string) => {
  try {
    const { data } = await api.put<{ seats: ISeat[] }>(`seats/${id}`, seatData);
    return data;
  } catch (error) {
    console.log(error);
  }
};



//DELETE
export const SeatDelete = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`seats/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};


// API endpoint cho seat_types
export const fetchSeatTypes = async () => {
  try {
    const { data } = await api.get<{ seattypes: ISeatType[] }>("seatTypes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// API endpoint cho rooms
export const fetchRooms = async () => {
  try {
    const { data } = await api.get<{ rooms: IRoom[] }>("rooms");
    return data;
  } catch (error) {
    console.log(error);
  }
};

