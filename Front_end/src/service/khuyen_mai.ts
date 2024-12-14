import api from "../axios/config";
import { IKhuyenMai } from "../interface/khuyen_mai";

//All
export const khuyen_maiList = async () => {
  try {
    const { data } = await api.get<{khuyen_mais:IKhuyenMai[]}>("khuyenmai");
    return data;
  } catch (error) {
    console.log(error);
    // return { khuyen_mais: [] }; 
  }
};

//ID
export const khuyen_maiById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ khuyen_mai: IKhuyenMai }>(`khuyenmai/${id}`);
    return data.khuyen_mai;
  } catch (error) {
    console.log(error);
  }
};

//Add
export const Addkhuyen_mai = async (khuyen_maiData: IKhuyenMai) => {
  try {
    const { data } = await api.post<{ khuyen_mais: IKhuyenMai }>("khuyenmai", khuyen_maiData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Update
export const Updatekhuyen_mai = async (khuyen_maiData: IKhuyenMai,id: number | string ) => {
  try {
    const { data } = await api.put<{ khuyen_mais: IKhuyenMai }>(`khuyenmai/${id}`,khuyen_maiData);
    return data; 
  } catch (error) {
    console.log(error);
  }
};

// Delete
export const Deletekhuyen_mai = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`khuyenmai/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
