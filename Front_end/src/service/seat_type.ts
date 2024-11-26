import api from "../axios/config";

import { ISeatType } from "../movie/seat_type";

<<<<<<< HEAD
// by id
export const SeatsTypeByID = async (id: number | string) => {
  try {
    const { data } = await api.get<{
      seat_price: number | undefined;
      seat_type_name: string | undefined; seattypes: ISeatType[] 
}>(
      `seatTypes/${id}`
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch seat type by ID:", error);
    throw error;
  }
};
=======
>>>>>>> origin/main





export const ListSeatTypes = async()=>{
    try {
        const {data} = await api.get("seat_type")
        return data
    } catch (error) {
        console.log(error);
        
    }
}

export const SeatsTypeByID = async(id:number|string)=>{
    try {
        const {data} = await api.get(`seat_type/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatsTypeDelete = async(id:number|string)=>{
    try {
        const {data} = await api.delete(`seat_type/${id}`)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatsTypeAdd = async(seatTypeData:ISeatType)=>{
    try {
        const {data} = await api.post("seat_type",seatTypeData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}
export const SeatsTypeUpdate = async(seatTypeData:ISeatType,id:number|string)=>{
    try {
        const {data} = await api.put(`seat_type/${id}`,seatTypeData)
        return data
    } catch (error) {
        console.log(error);
        
    }
}



