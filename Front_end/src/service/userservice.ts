import axios from "axios"

const loginApi = (email,password)=>{
    return axios.post("/api/login",{email,password})
}
export {loginApi}