<template>
  <div>
    <div class="search-form">
      <el-form inline size="small">
        <el-form-item label="车牌号">
          <el-select v-model="searchParams.carNo" placeholder="请选择车辆号"
          filterable clearable>
            <el-option
              v-for = "(item, index) in carList"
              :key = "index"
              :label = "item"
              :value = "item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计量仪编号">
          <el-select v-model="metNos" placeholder="请选择计量仪编号"
          filterable clearable multiple>
            <el-option
              v-for = "(item, index) in meterNoList"
              :key = "index"
              :label = "item"
              :value = "item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="结算人员">
          <el-select v-model="searchParams.createUser" placeholder="请选择结算人员"
          filterable clearable
          @change="changeSetUser">
            <el-option
              v-for="item in setUserList"
              :key="item.userId"
              :label = "item.name"
              :value = "item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="计数时间">
          <el-date-picker
            v-model = "countTimeValue"
            type = "datetimerange"
            value-format = "yyyy-MM-dd HH:mm:ss"
            range-separator = "至"
            start-placeholder = "开始日期"
            end-placeholder = "结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button @click="queryByParams" icon="el-icon-search" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="exportTicketCount" icon="el-icon-share" type="warning">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <skkj-table
      ref = "skkjTable"
      :tableColumn = "tableColumn"
      :queryMethod = "queryMethod">
      <el-table-column label="计量仪图片">
        <template slot-scope="scope">
          <el-image :src = "scope.row.imgUrl" :preview-src-list = "[scope.row.imgUrl]"></el-image>
        </template>
      </el-table-column>
    </skkj-table>
  </div>
</template>

<script>
import api from '../../utils/api'
import skkjTable from '../../components/My-Table.vue'

export default {
  data() {
    return {
      queryMethod: 'getCountInfo',
      tableColumn: [
        {
          prop: 'index',
          label: '序号',
          width: '50',
        }, {
          prop: 'bluetoothNo',
          label: '蓝牙卡编号',
        }, {
          prop: 'carNo',
          label: '车牌号',
        }, {
          prop: 'metNo',
          label: '计量仪编号',
        }, {
          prop: 'metCountTime',
          label: '计量仪计数时间',
        }, {
          prop: 'deptName',
          label: '项目部名称',
        },
      ],
      countTimeValue: '',
      searchParams: {
        carNo: '',
        metNos: '',
        startTime: '',
        endTime: '',
      },
      metNos: [],
      meterNoList: [],
      carList: [],
      setUserList: [],
    }
  },
  components: { skkjTable },
  mounted() {
    this.getMeterNoInfo()
    this.getCarInfoInfo()
    this.getSetUser()
  },
  methods: {
    queryByParams() {
      [this.searchParams.startTime, this.searchParams.endTime] = this.countTimeValue || []
      this.$refs.skkjTable.currentPage = 1
      this.$refs.skkjTable.pageSize = 10
      // let meter = ''
      // if (this.searchParams.metNos.length > 0) {
      //   const metList = this.searchParams.metNos
      //   for (let i = 0; i < metList.length; i++) {
      //     if (i === 0) {
      //       meter = metList[i]
      //     } else {
      //       meter = `${meter},${metList[i]}`
      //     }
      //   }
      // }
      // console.log(this.metNos)
      this.searchParams.metNos = this.metNos.join(',')
      // this.searchParams.metNos = meter
      this.$refs.skkjTable.getSourceData(this.searchParams)
    },
    // 获取计量仪编号信息
    async getMeterNoInfo() {
      const res = await api.getMeterNoInfo()
      if (res instanceof Array) {
        res.map(data => {
          this.meterNoList.push(data.metNo)
        })
      }
    },
    // 获取车辆号信息
    async getCarInfoInfo() {
      const res = await api.getCarInfoInfo()
      if (res instanceof Array) {
        res.map(data => {
          this.carList.push(data.name)
        })
      }
    },
    changeSetUser(data) {
      this.searchParams.userId = data.userId
      this.searchParams.createUser = data.name
    },
    // 获取结算人员
    async getSetUser() {
      const res = await api.getSetUser()
      this.setUserList = res
    },
    // 导出报表
    async exportTicketCount() {
      [this.searchParams.startTime, this.searchParams.endTime] = this.countTimeValue
      const res = await api.exportTicketCount(this.searchParams)
      const blob = new Blob([res], { type: 'application/vnd.ms-excel;charset=utf-8' })
      const downloadElement = document.createElement('a')
      const href = window.URL.createObjectURL(blob)
      downloadElement.href = href
      downloadElement.download = '计量仪计数表.xls'
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement)
      window.URL.revokeObjectURL(href)
    },
  },
}
</script>

<style lang="scss">
  .content {
    padding: 20px 25px;
    .el-icon-circle-close:before {
        color: white;
    }
  }
</style>
