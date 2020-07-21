<template>
  <div>
    <el-menu
      background-color = '#001529'
      text-color = '#ffffff'
      :unique-opened = true
      >
      <el-menu-item>
        <i class="el-icon-message"></i>
        <span slot="title">人员管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Menu,
  MenuItem,
} from 'element-ui'

Vue.use(Menu)
Vue.use(MenuItem)

export default {

}
</script>

<style>
</style>
