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
export const SeatByID = async (id: number | string) => {
  try {
    const { data } = await api.get<{ seats: ISeat[] }>(`seats/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//ADD
export const SeatAdd = async (seatData: ISeat) => {
  try {
    const { data } = await api.post<{ seats: ISeat[] }>("seats", seatData);
    return data;
  } catch (error) {
    console.log(error);
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

