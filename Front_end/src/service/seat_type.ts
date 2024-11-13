import api from "../axios/config";
import axios from 'axios';
import { ISeatType } from '../interface/seat_type';

const API_URL = "http://127.0.0.1:8000/api/seatTypes"; // Thay URL này bằng URL API của bạn

// Hàm để thêm kiểu ghế mới
export const SeatsTypeAdd = async (seatTypeData: ISeatType): Promise<ISeatType> => {
  try {
    const response = await axios.post(API_URL, seatTypeData);
    return response.data;
  } catch (error) {
    console.error("Failed to add seat type:", error);
    throw error;
  }
};

export const ListSeatTypes = async()=>{
    try {
        const {data} = await api.get("seat_type")
        return data
    } catch (error) {
        console.log(error);
        
    }
}

// Hàm để cập nhật kiểu ghế
export const SeatsTypeUpdate = async (seatTypeData: ISeatType, id: number | string): Promise<ISeatType> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, seatTypeData);
    return response.data;
  } catch (error) {
    console.error("Failed to update seat type:", error);
    throw error;
  }
};

// Hàm để lấy kiểu ghế theo ID
export const SeatsTypeByID = async (id: number | string): Promise<ISeatType> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch seat type by ID:", error);
    throw error;
  }
};
