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
    const { data } = await api.get<IBase>(`bases/${id}`);
    return data;
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
export const BaseUpdate = async (baseData: IBase, id: number | string) => {
  try {
    if (typeof id !== 'string' && typeof id !== 'number') {
      throw new Error('Invalid ID: Must be a string or number');
    }
    const { data } = await api.put<{ bases: IBase }>(`bases/${id}`, baseData);
    return data;
  } catch (error) {
    console.log('Error in BaseUpdate:', error);
    throw error;
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
