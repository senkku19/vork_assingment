import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/runningTimeCard'
//const baseUrl = 'http://172.20.10.8:3001/api/timeCards/running'

const create = async (newTimeCard) => {
    const response = await axios.post(baseUrl, newTimeCard)
    return response.data
}

const update = async (id, updatedFields) => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedFields);
    return response.data;
}

const deleteTimeCard = async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
}

export default { create, update, deleteTimeCard }