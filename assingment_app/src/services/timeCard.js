import { axiosInstance } from "./axios"

const getAll = () => {
    return axiosInstance.get('/timeCards').then(response => response.data);
};


const create = async (newTimeCard) => {
    const response = await axiosInstance.post('/timeCards', newTimeCard)
    return response.data
}

const update = async (id, updatedFields) => {
    const response = await axiosInstance.put(`/timeCards/${id}`, updatedFields);
    return response.data;
}

export default { getAll, create, update }