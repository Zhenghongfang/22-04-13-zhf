<template>
  <div>
    <el-button @click = "login" type="primary">登录</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import api from '@/utils/api'

Vue.use(Button)

export default {
  data() {
    return {
      // sd: '登录',
    }
  },
  methods: {
    login() {
      api.query('/news/index', 'type=top&key=123456').then(res => {
        console.log(res)
      })
      this.$router.push({
        path: '/home',
      })
      console.log('登录')
    },
  },
}

</script>

<style>
</style>
