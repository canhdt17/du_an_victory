import api from "../axios/config";
import { IArea } from "../interface/area";

//All
export const ListArea = async () => {
  try {
    const { data } = await api.get<IArea[]>("areas");
    return data;
  } catch (error) {
    console.log(error);
    // return { areas: [] }; 
  }
};

//ID
export const AreaById = async (area_id: number | string) => {
  try {
    const { data } = await api.get<{ area: IArea }>(`areas/${area_id}`);
    return data.area;
  } catch (error) {
    console.log(error);
  }
};

//Add
export const AddArea = async (areaData: IArea) => {
  try {
    const { data } = await api.post<{ areas: IArea }>("areas", areaData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Update
export const AreaUpdate = async (area_id: number | string, areaData: IArea) => {
  try {
    const { data } = await api.put<{ area: IArea }>(
      `areas/${area_id}`,
      areaData
    );
    return data.area; 
  } catch (error) {
    console.log(error);
  }
};

// Delete
export const AreaDelete = async (area_id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`areas/${area_id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
