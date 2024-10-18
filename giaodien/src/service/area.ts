import api from "../axios/config";
import { IArea } from "../movie/area";

export const ListArea = async()=>{
    try {
        const {data} = await api.get("area")
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