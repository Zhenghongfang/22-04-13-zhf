import axios from 'axios'
import Cookies from 'js-cookie'
import constants from './constants'

const { loginSite } = constants

// 请求拦截器
axios.interceptors.request.use(config => {
  const conf = config
  if (config.url.indexOf('appLogin') === -1) {
    const token = Cookies.get('token')
    if (!token) {
      window.location.href = loginSite
    }
    if (token) {
      const tokenHandled = token.substring(11)
      conf.headers.token = tokenHandled
    }
    conf.withCredentials = true
  }
  return conf
})

// 响应拦截器
axios.interceptors.response.use(response => response.data, error => error.response.data)

export default axios
