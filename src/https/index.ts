import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
const baseURL = process.env.NODE_ENV == "development" ? "" : ""
//使用mock
import '@/Mock'
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true
})
const token = '456466'
// 请求拦截器 
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (token) {
      console.log(config)
    }
    // config.headers['x-csrf-token'] = getCsrfToken()
    return config
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // console.log(res)
    return res
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default service