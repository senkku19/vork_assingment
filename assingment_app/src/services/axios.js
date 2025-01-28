import axios from "axios";

export const axiosInstance = axios.create({
    //baseURL: 'http://localhost:3001/api',
    baseURL: 'http://172.20.10.3:3001/api',
})