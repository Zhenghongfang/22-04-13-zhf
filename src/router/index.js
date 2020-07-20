import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loign',
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/Login.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
