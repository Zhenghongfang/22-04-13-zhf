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
    path: '/',
    name: 'Layout',
    component: () => layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home.vue'),
        meta: { title: '首页' },
      },
    ],
  }, {
    path: '/table',
    name: 'Table',
    redirect: '/table/common',
    component: () => layout,
    meta: { title: '表格' },
    children: [{
      path: '/table/common',
      name: 'Common',
      component: () => import('@/views/table/Common.vue'),
      meta: { title: '通用表格' },
    }, {
      path: '/table/test',
      name: 'Test',
      component: () => import('@/views/table/Test.vue'),
      meta: { title: '测试表格' },
    }],
  }, {
    path: '/charts',
    name: 'Charts',
    redirect: '/charts/bar',
    component: () => layout,
    meta: { title: '图表' },
    children: [{
      path: '/charts/bar',
      name: 'Bar',
      component: () => import('@/views/charts/Bar.vue'),
      meta: { title: '柱状图' },
    }, {
      path: '/charts/pie',
      name: 'Pie',
      component: () => import('@/views/charts/Pie.vue'),
      meta: { title: '饼图' },
    }, {
      path: '/charts/line',
      name: 'Line',
      component: () => import('@/views/charts/Line.vue'),
      meta: { title: '折线图' },
    }],
  },
]

const router = new VueRouter({
  routes,
})

export default router
