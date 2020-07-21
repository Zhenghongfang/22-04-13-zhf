import Vue from 'vue'
import VueRouter from 'vue-router'

const layout = import(/* webpackChunkName: "about" */ '@/views/layout/Layout.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
  }, {
    path: '/login',
    name: 'Loign',
    component: () => import('@/views/login/Login.vue'),
    meta: { title: '登录' },
  }, {
    path: '/home',
    name: 'Home',
    component: () => layout,
    meta: { title: '首页' },
  }, {
    path: '/charts',
    name: 'Charts',
    component: () => layout,
    meta: { title: '图表' },
  },
]

const router = new VueRouter({
  routes,
})

export default router
