/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../axios/config";
import { IShowTime } from "../interface/shotime";

// List all showtimes
export const ShowTimeList = async () => {
  try {
    const { data } = await api.get<IShowTime[]>("showtimes");
    return data; // Trả về mảng showtimes
  } catch (error) {
    console.error("Error fetching showtime list:", error);
  }
};

// Get showtime by ID
export const ShowTimeById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ showtime: IShowTime }>(`showtimes/${id}`);
    return data.showtime; // Trả về một showtime
  } catch (error) {
    console.error(`Error fetching showtime with ID ${id}:`, error);
  }
};

// Add new showtime
export const ShowTimeAdd = async (showData: IShowTime) => {
  try {
    // Bắt lỗi format datetime từ client, nếu chưa được định dạng
    if (showData.showtime_date.includes("T")) {
      showData.showtime_date = showData.showtime_date.split("T")[0];
    }

    const response = await api.post<{ showtime: IShowTime }>(
      "/showtimes",
      showData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.showtime;
  } catch (error: any) {
    console.error("Error adding showtime:", error?.response?.data || error);
    throw new Error(error?.response?.data?.message || "Failed to add showtime");
  }
};


// ShowTimeUpdate
export const ShowTimeUpdate = async (
  showData: IShowTime,
  id: number | string
) => {
  try {
    const { data } = await api.put<{ showtime: IShowTime }>(
      `showtimes/${id}`,
      showData
    );
    return data.showtime;
  } catch (error: any) {
    console.error(
      `Error updating showtime with ID ${id}:`,
      error?.response?.data || error
    );
    throw new Error(
      error?.response?.data?.message || "Failed to update showtime"
    );
  }
};

// Delete showtime
export const ShowTimeDelete = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`showtimes/${id}`);
    return data; // Trả về message
  } catch (error) {
    console.error(`Error deleting showtime with ID ${id}:`, error);
  }
};
