<template>
  <el-button @click="exportReport" icon="el-icon-share" type="warning">导出</el-button>
</template>

<script>
import api from '@/utils/api'

export default {
  props: {
    // 报表标题
    reportTitle: {
      type: String,
      required: true,
    },
    // 方法名
    exportMethod: {
      type: String,
      required: true,
    },
    // 导出参数
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    // 导出报表数据
    async exportReport() {
      const res = await api[this.exportMethod](this.params)
      const blob = new Blob([res], { type: 'application/vnd.ms-excel;charset=utf-8' })
      const downloadElement = document.createElement('a')
      const href = window.URL.createObjectURL(blob)
      downloadElement.href = href
      downloadElement.download = `${this.reportTitle}.xls`
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement)
      window.URL.revokeObjectURL(href)
    },
  },
}
</script>

<style>
</style>
