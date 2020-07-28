<template>
  <div class="main">
    <el-container>
      <el-aside :width="!collapsed?'210px':'65px'">
        <div class="sidebar-title">
          <img class="sidebar-title-image" :src = "logo">
          <span v-if="!collapsed">管理系统模板</span>
        </div>
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header height="auto">
          <div class="header-info">
            <i
              class="header-info-icon-toggle"
              :class="collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold' "
              @click="toggleSideBar">
            </i>
            <!-- <el-breadcrumb>
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ currentRouter.meta.title }}</el-breadcrumb-item>
            </el-breadcrumb> -->
          </div>
          <div class="header-tag">
            <el-scrollbar>
              <el-tag
                class="header-tag-item"
                v-for = "item in tagList"
                :key = item.path
                :class="currentRoute.path === item.path ? 'header-tag-item-active' : ''"
                :closable="item.path === '/home' ? false : true"
                @click="chooseTag(item)"
                @close="closeTag(item)">
                  <span :class="currentRoute.path === item.path ? 'header-tag-item-cicle' : ''">
                  </span>
                  {{ item.title }}
              </el-tag>
            </el-scrollbar>
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
      'collapsed',
      'tagList',
      'currentRoute',
    ]),
  },
  created() {
    window.addEventListener('resize', this.resizeHandler)

    // 销毁释放资源
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this.resizeHandler)
    })
  },
  methods: {
    // 侧边栏状态切换
    toggleSideBar() {
      this.$store.commit('changeCollapse')
    },

    // 改变屏幕宽度
    resizeHandler() {
      const width = document.body.scrollWidth
      this.$store.commit('collapseAdaptive', width)
    },

    // 关闭顶部tag标签
    closeTag(item) {
      const { currentRoute } = this.$store.state
      currentRoute.path === item.path && this.$router.push({
        path: '/home',
      })
      this.$store.commit('removeTag', item)
    },

    // 点击选择tag标签
    chooseTag(item) {
      this.$router.push({
        path: item.path,
      })
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
      // 头部tag标签
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
        .el-scrollbar {
          height: 100%;
          ::v-deep .el-scrollbar__view {
            white-space: nowrap;
          }
        }
        &>:first-child {
          margin-left: 10px;
        }
        &-item {
          background-color: #FFFFFF;
          border: 1px solid #d8dce5;
          color: #000000;
          height: 28px;
          line-height: 26px;
          margin: 8px 0 8px 6px;
          border-radius: 0;
          cursor:pointer
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
