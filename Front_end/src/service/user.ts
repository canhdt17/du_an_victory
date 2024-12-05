import api from "../axios/config";
import { IUser } from "../interface/User";

// Lấy danh sách Users
export const ListUsers = async () => {
  try {
    const { data } = await api.get<IUser[]>("admin/users");
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Trả về mảng rỗng nếu có lỗi
  }
};

// Lấy thông tin User theo ID
export const UserById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ user: IUser }>(`admin/users/${id}`);
    return data.user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null; // Trả về null nếu có lỗi
  }
};

// Thêm User mới
export const UserAdd = async (userData: IUser) => {
  try {
    const { data } = await api.post<{ user: IUser }>("admin/users", userData);
    return data.user;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Cập nhật thông tin User
export const UserUpdate = async (id: number | string, userData: Partial<IUser>) => {
  try {
    const { data } = await api.put<{ user: IUser }>(`admin/users/${id}`, userData);
    return data.user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Xóa User
export const UserDelete = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`admin/users/${id}`);
    return data.message;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
