import axios from 'axios'
import { TOKEN_KEY, API_BASE_URL } from './constants'

const requestHandler = (config) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}

const responseHandler = (response) => {
  const { data: dataResponse } = response
  const { data, error, success } = dataResponse
  if (success) {
    return data
  } else {
    return Promise.reject(error)
  }
}

const API = {}
const baseURL = API_BASE_URL

const axiosInstance = axios.create({
  baseURL,
  validateStatus() {
    return true
  }
})

axiosInstance.interceptors.request.use(requestHandler, (error) => Promise.reject(error))

axiosInstance.interceptors.response.use(responseHandler, (error) => Promise.reject(error))

// MAIN
API.processText = (payload) => axiosInstance.get(`main?text=${payload}`)

export default API
