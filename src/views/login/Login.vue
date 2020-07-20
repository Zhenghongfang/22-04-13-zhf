<template>
  <div>
    <el-button type="primary">登录</el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'element-ui'
import api from '@/config/axios'

Vue.use(Button)

export default {
  data() {
    return {
      // sd: '登录',
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      api.get('/news/index', 'type=top&key=123456').then(res => {
        console.log(res)
      })
    },
  },
}

</script>

<style>
</style>
