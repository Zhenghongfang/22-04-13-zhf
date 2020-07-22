<template>
  <el-scrollbar>
    <el-menu
      background-color='#304156'
      text-color='#ffffff'
      :unique-opened=true
      router>
      <template v-for="item in menulist">
         <el-menu-item
           v-if="item.children.length === 0"
           :index="item.url"
           :key="item.url">
           <i class="el-icon-message"></i>
           <span slot="title">{{item.name}}</span>
         </el-menu-item>
         <el-submenu v-else :index="item.url" :key="item.url">
           <template slot="title">
             <i class="el-icon-location"></i>
             <span slot="title">{{item.name}}</span>
           </template>
           <el-menu-item
             v-for="subitem in item.children"
             :key="subitem.url"
             :index="subitem.url">
               {{subitem.name}}
           </el-menu-item>
         </el-submenu>
      </template>
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
        children: [],
      }, {
        url: '/table',
        name: '表格',
        children: [{
          url: '/table/common',
          name: '通用表格',
        }, {
          url: '/table/test',
          name: '测试表格',
        }],
      }, {
        url: '/charts',
        name: '图表',
        children: [{
          url: '/charts/bar',
          name: '柱状图',
        }, {
          url: '/charts/pie',
          name: '饼图',
        }, {
          url: '/charts/line',
          name: '折线图',
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
