<template>
  <div>
    <el-container>
      <el-aside>
        <div class="company">
          <img :src="logo">
          <span>数矿云平台</span>
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

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

export default {
  data() {
    return {
      logo: 'sd',
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
