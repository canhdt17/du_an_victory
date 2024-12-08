import api from "../axios/config";
import { ITinTuc } from "../interface/tin_tuc";

//All
export const tin_tucList = async () => {
  try {
    const { data } = await api.get<{tin_tucs:ITinTuc[]}>("tin-tucs");
    return data;
  } catch (error) {
    console.log(error);
    // return { tin_tucs: [] }; 
  }
};

//ID
export const tin_tucById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ tin_tuc: ITinTuc }>(`tin-tuc/${id}`);
    return data.tin_tuc;
  } catch (error) {
    console.log(error);
  }
};

//Add
export const Addtin_tuc = async (tin_tucData: ITinTuc) => {
  try {
    const { data } = await api.post<{ tin_tucs: ITinTuc }>("tin-tuc", tin_tucData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Update
export const Updatetin_tuc = async (tin_tucData: ITinTuc,id: number | string ) => {
  try {
    const { data } = await api.put<{ tin_tucs: ITinTuc }>(`tin-tuc/${id}`,tin_tucData);
    return data; 
  } catch (error) {
    console.log(error);
  }
};

// Delete
export const Deletetin_tuc = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`tin-tuc/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
