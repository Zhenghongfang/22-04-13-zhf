<script>
import api from '../utils/api'

export default {
  data() {
    return {
      reportTitle: '统计报表', // 报表标题
      searchParams: {},
    }
  },
  methods: {
    // 导出报表
    async exportReport() {
      const res = await api[this.exportMethod](this.searchParams)
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
