<template>
  <div>
    <el-menu
      background-color = '#304156'
      text-color = '#ffffff'
      :unique-opened = true
      >
      <el-menu-item>
        <i class="el-icon-message"></i>
        <span slot="title">人员管理</span>
      </el-menu-item>
      <el-submenu index=''>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Menu,
  Submenu,
  MenuItem,
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

export default {
  data() {
    return {
      menulist: [{
        url: '/home',
        name: '首页',
      }, {
        url: '/table',
        name: '表格',
        children: [{
          url: '/table/common-table',
          name: '通用表格',
        }],
      }],
    }
  },
}
</script>

<style>
</style>
