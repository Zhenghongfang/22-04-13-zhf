import Cookies from 'js-cookie'
import api from '../utils/api'

export default {
  async changeTimeAsync({ commit }) {
    try {
      const res = await api.getPeriodInfo({
        limit: 10,
        offset: 0,
      })
      let hour = 18 // 默认时
      let minute = 30 // 默认分
      if (res && res.rows.length > 0) {
        hour = res.rows[0].hour
        minute = res.rows[0].mintue
      }
      Cookies.set('hour', hour)
      Cookies.set('minute', minute)
      commit('changeTime')
    } catch (e) {
      Cookies.set('hour', 18)
      Cookies.set('minute', 30)
      commit('changeTime')
    }
  },
}
