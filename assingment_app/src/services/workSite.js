import { axiosInstance } from "./axios"

const getAll = () => {
    return axiosInstance.get('/workSite').then(response => response.data);
};


export default { getAll }