<script>
import skkjDatePicker from '../components/Skkj-DatePicker.vue'

export default {
  components: { skkjDatePicker },
  methods: {
    // 获取时间
    getTimeVal(e) {
      if (e.length === 0) {
        this.searchParams.startTime = ''
        this.searchParams.endTime = ''
        this.setOther()
      } else {
        [this.searchParams.startTime, this.searchParams.endTime] = e
        this.setOther()
      }
    },

    // 个别页面不同字段
    setOther() {
      if (this.searchParams.beginTime !== undefined) {
        this.searchParams.beginTime = this.searchParams.startTime
      }
      if (this.searchParams.beginTimeStr !== undefined) {
        this.searchParams.beginTimeStr = this.searchParams.startTime
      }
      if (this.searchParams.endTimeStr !== undefined) {
        this.searchParams.endTimeStr = this.searchParams.endTime
      }
      if (this.searchParams.beginStr !== undefined) {
        this.searchParams.beginStr = this.searchParams.startTime
      }
      if (this.searchParams.endStr !== undefined) {
        this.searchParams.endStr = this.searchParams.endTime
      }
    },
  },
}
</script>

<style>
</style>
