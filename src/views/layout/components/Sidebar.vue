<template>
  <el-scrollbar>
    <el-menu background-color='#304156' text-color='#ffffff' :unique-opened=true>
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
      <el-submenu index='1'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='2'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='3'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='4'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='5'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='6'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='7'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='8'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
      <el-submenu index='9'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item>hhhh</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import Vue from 'vue'
import {
  Scrollbar,
  Menu,
  Submenu,
  MenuItem,
} from 'element-ui'

Vue.use(Scrollbar)
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

<style lang="scss">
  .el-scrollbar {
    height: calc(100% - 60px);
    .el-scrollbar__view {
      height: 100%;
      .el-menu {
        height: 100%;
        .el-submenu {
          .el-menu-item {
            background-color: #1f2d3d !important;
          }
        }
      }
    }
  }
</style>
