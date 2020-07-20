import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(config => {
  const conf = config
  // conf.withCredentials = true
  return conf
})

// 响应拦截器
axios.interceptors.response.use(response => response.data, error => error.response.data)

export default axios
