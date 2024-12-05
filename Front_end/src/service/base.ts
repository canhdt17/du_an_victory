import api from "../axios/config";
import { IBase } from "../interface/base";

//All
export const BaseList = async () => {
  try {
    const { data } = await api.get<{bases:IBase[]}>("bases");
    return data;
  } catch (error) {
    console.log(error);
    // return { bases: [] }; 
  }
};

//ID
export const BaseById = async (id: number | string) => {
  try {
    const { data } = await api.get<{ base: IBase }>(`bases/${id}`);
    return data.base;
  } catch (error) {
    console.log(error);
  }
};

//Add
export const AddBase = async (baseData: IBase) => {
  try {
    const { data } = await api.post<{ bases: IBase }>("bases", baseData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Update
export const UpdateBase = async (baseData: IBase,id: number | string ) => {
  try {
    const { data } = await api.put<{ bases: IBase }>(`bases/${id}`,baseData);
    return data; 
  } catch (error) {
    console.log(error);
  }
};

// Delete
export const DeleteBase = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`bases/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
