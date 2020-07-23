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
          <div class="header-info">
            <!-- <i :class="[ collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold' ]">
            </i> -->
            <i class="header-info-icon-toggle el-icon-s-unfold"></i>
            <!-- <el-breadcrumb>
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ currentRouter.meta.title }}</el-breadcrumb-item>
            </el-breadcrumb> -->
          </div>
          <div class="header-tag">
            sdf
          </div>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

const logo = require('../../assets/logo.png')

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
    // header
    .el-header {
      padding: 0;
      .header-info {
        display: flex;
        align-items: center;
        height: 50px;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        &-icon-toggle {
          padding: 0 15px;
          font-size: 28px;
          cursor: pointer;
        }
        .el-breadcrumb {
          font-size: 14px;
        }
      }
      .header-tag {
        height: 30px;
      }
    }
  }
}
</style>
