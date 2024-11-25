import api from "../axios/config";
<<<<<<< HEAD
import { ISeatType } from "../movie/seat_type";






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



=======
import { ISeatType } from "../interface/seat_type";

//list
export const ListSeatTypes = async () => {
  try {
    const { data } = await api.get<{ seattypes: ISeatType[] }>("seatTypes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// by id
export const SeatsTypeByID = async (id: number | string) => {
  try {
    const { data } = await api.get<{ seattypes: ISeatType[] }>(
      `seatTypes/${id}`
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch seat type by ID:", error);
    throw error;
  }
};

// add
export const SeatsTypeAdd = async (seatTypeData: ISeatType) => {
  try {
    const { data } = await api.post<{ seattypes: ISeatType[] }>(
      "seatTypes",
      seatTypeData
    );
    return data;
  } catch (error) {
    console.error("Failed to add seat type:", error);
    throw error;
  }
};

// update
export const SeatsTypeUpdate = async (
  seatTypeData: ISeatType,
  id: number | string
) => {
  try {
    const { data } = await api.put<{ seattypes: ISeatType[] }>(
      `seatTypes/${id}`,
      seatTypeData
    );
    return data;
  } catch (error) {
    console.error("Failed to update seat type:", error);
    throw error;
  }
};

//Delete
export const SeatsTypeDelete = async (id: number | string) => {
  try {
    const { data } = await api.delete<{ message: string }>(`seatTypes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
>>>>>>> e163f975229a920b2de0146b3830c0ffc7c1ed48
