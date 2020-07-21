import axios from 'axios'
import { Message } from 'element-ui'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(config => config, error => Promise.reject(error))
// 响应拦截器
axios.interceptors.response.use(response => response, error => Promise.reject(error))

// get请求
function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// post请求
function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        console.log(response)
        Message({
          message: 'Error',
          type: 'error',
        })
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  fetchGet,
  fetchPost,
}
