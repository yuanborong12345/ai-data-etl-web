import axios from 'axios'
import { message } from 'antd'

const request = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 10000,
})

request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('user_token')
        if (token && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        const res = response.data
        console.log("后端响应" + res);
        if (res.code === 0) {
            return res.data
        }

        message.error(res.message || '业务异常')
        return Promise.reject(new Error(res.message || 'Error'))
    },
    (error) => {
        message.error(error.message || '网络异常')
        return Promise.reject(error)
    }
)

export default request