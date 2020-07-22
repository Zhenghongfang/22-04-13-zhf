<template>
  <div class="main">
    <el-container>
      <el-aside width = "210px">
        <div class="sidebar-title">
          <img class="sidebar-title-image" :src = "logo">
          <span>管理系统模板</span>
        </div>
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Container,
  Header,
  Aside,
  Main,
} from 'element-ui'
import Sidebar from './components/Sidebar.vue'

const logo = require('../../assets/logo.png')

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

export default {
  data() {
    return {
      logo,
    }
  },
  components: {
    Sidebar,
  },
  methods: {
    test() {

    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  .el-container {
    height: 100%;
    // 左侧菜单头部
    .sidebar-title {
      display: flex;
      height: 60px;
      width: calc(100% - 1px);
      color: #FFFFFF;
      background-color: #304156;
      align-items: center;
      &-image {
        width: 30px;
        height: 30px;
        padding: 0 10px 0 20px;
      }
    }
  }
}
</style>
