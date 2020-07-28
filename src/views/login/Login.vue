<template>
  <div>
    <el-button @click = "login" type="primary">登录</el-button>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import api from '@/utils/api'

export default {
  data() {
    return {
      // sd: '登录',
    }
  },
  methods: {
    async login() {
      // api.query('/news/index', 'type=top&key=123456').then(res => {
      //   console.log(res)
      // })
      const res = await api.login({
        username: '18800000001',
        password: '111111',
      })
      Cookies.set('token', res.token, { expires: new Date(new Date().getTime() + 120 * 60 * 1000) })
      this.$router.push({
        path: '/home',
      })
    },
  },
}

</script>

<style lang="scss" scoped>

</style>
