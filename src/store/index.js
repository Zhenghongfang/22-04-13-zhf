import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    collapsed: false,
    currentRoute: '', // 当前路由
    tagList: [{
      path: '/home',
      title: '首页',
    }],
  },
  mutations,
  getters,
  actions,
})

export default store
