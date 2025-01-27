import { axiosInstance } from './axios'

const create = async (newTimeCard) => {
    const response = await axiosInstance.post('/runningTimeCard', newTimeCard)
    return response.data
}

const update = async (id, updatedFields) => {
    const response = await axiosInstance.put(`/runningTimeCard/${id}`, updatedFields);
    return response.data;
}

const deleteTimeCard = async (id) => {
    await axiosInstance.delete(`/runningTimeCard/${id}`);
}

export default { create, update, deleteTimeCard }