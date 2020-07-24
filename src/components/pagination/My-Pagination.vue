<template>
  <el-pagination
    background
    layout="total, sizes, prev, pager, next"
    :total = "total"
    :current-page = "currentPage"
    :page-size = "pageSize"
    @size-change = "sizeChange"
    @current-change = "currentChange">
  </el-pagination>
</template>

<script>
export default {
  data() {
    return {
      total: 0, // 总条数
      pageSize: 10, // 每页条数
      currentPage: 1, // 当前页数
    }
  },
  props: {
    // 获取数据的方法
    getMethod: {
      type: Function,
      required: true,
    },
    // 使用前端分页
    useFrontPagination: {
      type: Boolean,
      default: false,
    },
  },
  methods: {

  },
}
</script>

<style>
</style>
