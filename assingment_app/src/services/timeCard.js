import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/timeCards'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = async (newTimeCard) => {
    const response = await axios.post(baseUrl, newTimeCard)
    return response.data
}

const update = async (id, updatedFields) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedFields);
    return request.then(response => response.data);
}

export default { getAll, create, update }