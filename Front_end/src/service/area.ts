import api from "../axios/config";
import { AreaData, IArea } from "../movie/area";

<<<<<<< HEAD
//All
export const ListArea = async () => {
  try {
    const { data } = await api.get<{areas:IArea[]}>("areas");
    return data;
  } catch (error) {
    console.log(error);
    // return { areas: [] }; 
  }
};
=======
>>>>>>> origin/main


export const ListArea = async()=>{
    try {
        const {data} = await api.get("area")
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AreaById = async(id:number|string)=>{
    try {
        const {data} = await api.get(`area/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AreaDelete = async(id:number|string)=>{
    try {
        const {data} = await api.delete(`area/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AddArea = async(areaData:IArea)=>{
    try {
        const {data} = await api.post("area",areaData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const AreaUpdate = async(areaData:AreaData,id:number|string)=>{
    try {
        const {data} = await api.put(`area/${id}`,areaData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}

<<<<<<< HEAD
//Update
export const AreaUpdate = async (areaData: IArea,area_id: number | string ) => {
  try {
    const { data } = await api.put<{ areas: IArea }>(
      `areas/${area_id}`,
      areaData
    );
    return data; 
  } catch (error) {
    console.log(error);
  }
};
=======
>>>>>>> origin/main

