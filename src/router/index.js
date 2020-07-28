import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const layout = import(/* webpackChunkName: "about" */ '@/views/layout/Layout.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/404',
    component: () => import('@/views/error-pages/404'),
    meta: { title: '404', showTag: false },
  },
  {
    path: '/login',
    name: 'Loign',
    component: () => import('@/views/login/Login.vue'),
    meta: { title: '登录', showTag: false },
  }, {
    path: '/',
    name: 'Layout',
    component: () => layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/Home.vue'),
        meta: { title: '首页', showTag: false },
      },
    ],
  }, {
    path: '/table',
    name: 'Table',
    redirect: '/table/common',
    component: () => layout,
    meta: { title: '表格', showTag: false },
    children: [{
      path: '/table/common',
      name: 'Common',
      component: () => import('@/views/table/Common.vue'),
      meta: { title: '通用表格', showTag: true },
    }, {
      path: '/table/test',
      name: 'Test',
      component: () => import('@/views/table/Test.vue'),
      meta: { title: '测试表格', showTag: true },
    }],
  }, {
    path: '/charts',
    name: 'Charts',
    redirect: '/charts/bar',
    component: () => layout,
    meta: { title: '图表', showTag: false },
    children: [{
      path: '/charts/bar',
      name: 'Bar',
      component: () => import('@/views/charts/Bar.vue'),
      meta: { title: '柱状图', showTag: true },
    }, {
      path: '/charts/pie',
      name: 'Pie',
      component: () => import('@/views/charts/Pie.vue'),
      meta: { title: '饼图', showTag: true },
    }, {
      path: '/charts/line',
      name: 'Line',
      component: () => import('@/views/charts/Line.vue'),
      meta: { title: '折线图', showTag: true },
    }],
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  routes,
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 新增顶部tag标签
router.afterEach(to => {
  const currentRoute = {
    path: to.path,
    title: to.meta.title,
    showTag: to.meta.showTag,
  }
  store.commit('addTag', currentRoute)
  store.commit('currentRoute', currentRoute)
})

export default router
