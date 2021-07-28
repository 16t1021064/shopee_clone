import axiosService from '../commons/axiosService'
import { API_ENDPOINT } from '../constants'
const url = 'products'
export const getList = (params = {}) => {
    if (Object.keys(params).length > 0) {
        return axiosService.post(`${API_ENDPOINT}/${url}`, params)
    } else {
        return axiosService.get(`${API_ENDPOINT}/${url}`)
    }
}