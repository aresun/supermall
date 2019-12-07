import axios from 'axios'

export function request(config) {
      const instance = axios.create({
            baseURL: 'http://www.api.com/api',
            timeout: 5000
      })

      instance.interceptors.request.use(config => {
            return config
      }), err => {

      }

      instance.interceptors.response.usr(res => {
            return res.data
      }, err => {

      })

      return instance(config)
}