import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api',
    //baseURL: 'http://{ip}:3001/api',
})