import api from "../axios/config";
import { ISeatType } from "../interface/seat_type";

//list
export const ListSeatTypes = async () => {
  try {
    const { data } = await api.get<{ seattypes: ISeatType[] }>("seatTypes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// by id
export const SeatsTypeByID = async (id: number | string) => {
  try {
    const { data } = await api.get<{ seattypes: ISeatType[] }>(
      `seatTypes/${id}`
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch seat type by ID:", error);
    throw error;
  }
};

// add
export const SeatsTypeAdd = async (seatTypeData: ISeatType) => {
  try {
    const { data } = await api.post<{ seattypes: ISeatType[] }>(
      "seatTypes",
      seatTypeData
    );
    return data;
  } catch (error) {
    console.error("Failed to add seat type:", error);
    throw error;
  }
};

// update
export const SeatsTypeUpdate = async (
  seatTypeData: ISeatType,
  id: number | string
) => {
  try {
    const { data } = await api.put<{ seattypes: ISeatType[] }>(
      `seatTypes/${id}`,
      seatTypeData
    );
    return data;
  } catch (error) {
    console.error("Failed to update seat type:", error);
    throw error;
  }
};

//Delete
export const SeatsTypeDelete = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`seatTypes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
