import axios from "axios";

const baseURL = "https://dummyjson.com";

const api = axios.create({
    baseURL: baseURL , 
    headers: { "Content-Type": "application/json" },
    // withCredentials: true,
})
 
export default api;  