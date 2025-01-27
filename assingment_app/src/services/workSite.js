import { axiosInstance } from "./axios"

const getAll = () => {
    const request = axiosInstance.get('/workSite')
    return request.then(response => response.data)
}

export default { getAll }