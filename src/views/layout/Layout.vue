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
        <el-header height="auto">
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
            <el-tag
              class="header-tag-item"
              v-for = "item in tagList"
              :key = item.path
              :class="currentRoute.path === item.path ? 'header-tag-item-active' : ''"
              :closable="item.path === '/home' ? false : true"
              @close="closeTag(item)">
                <span :class="currentRoute.path === item.path ? 'header-tag-item-cicle' : ''">
                </span>
                {{ item.title }}
            </el-tag>
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
import { mapState } from 'vuex'
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
  computed: {
    ...mapState([
      'tagList',
      'currentRoute',
    ]),
  },
  methods: {
    // 关闭顶部tag标签
    closeTag(item) {
      const { currentRoute } = this.$store.state
      currentRoute.path === item.path && this.$router.push({
        path: '/home',
      })
      this.$store.commit('removeTag', item)
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
        height: 40px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
        ::v-deep .el-icon-close {
          color: #b4bccc;
          &:hover {
            color: #FFFFFF;
            background-color: #b4bccc;
          }
        }
        &>:first-child {
          margin-left: 18px;
        }
        &-item {
          background-color: #FFFFFF;
          border: 1px solid #d8dce5;
          color: #000000;
          height: 28px;
          line-height: 26px;
          margin: 8px 0 8px 6px;
          border-radius: 0;
        }
        &-item-active {
          background-color: #42b983;
          color: #FFFFFF;
          border: 1px solid #FFFFFF;
        }
        &-item-cicle {
          display: inline-block;
          background-color: #FFFFFF;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
