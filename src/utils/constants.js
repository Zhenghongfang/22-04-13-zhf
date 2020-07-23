let baseUrl = 'api' // baseUrl
let loginSite = 'http://localhost:8000' // 登录系统
let personnelSite = ''

if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_FLAG === 'pro') {
    baseUrl = 'http://www.akuang.net'
    loginSite = 'http://www.akuang.net/sky-user-web/'
    personnelSite = 'http://www.akuang.net:8002/index'
  } else {
    baseUrl = 'http://192.168.0.202'
    loginSite = 'http://192.168.0.202/sky-user-web/'
    personnelSite = 'http://192.168.0.202:8002/index'
  }
}

export default {
  baseUrl,
  loginSite,
  personnelSite,
}
