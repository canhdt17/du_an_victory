import api from "../axios/config"

export const DetailsById = async(id:number|string)=>{
    try {
        const {data} = await api.get(`http://127.0.0.1:8000/api/movies/${id}`)
        return(data)
    } catch (error) {
        console.log(error);
        
    }
}