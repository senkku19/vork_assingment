import { axiosInstance } from "./axios"

const getAll = () => {
    const request = axiosInstance.get('/timeCards')
    return request.then(response => response.data)
}

const create = async (newTimeCard) => {
    const response = await axiosInstance.post('/timeCards', newTimeCard)
    return response.data
}

const update = async (id, updatedFields) => {
    const response = await axiosInstance.put(`/timeCards/${id}`, updatedFields);
    return response.data;
}

export default { getAll, create, update }