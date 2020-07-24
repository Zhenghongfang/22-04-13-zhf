<template>
  <div>
    <div class="search-form">
      <el-form inline size="small">
        <el-form-item label="车牌号">
          <my-select
            :value.sync='searchParams.carNo'
            :optionList="carList"
            placeholder="请选择车牌号">
          </my-select>
        </el-form-item>
        <el-form-item label="计量仪编号">
          <my-select
            :value.sync='metNos'
            :optionList="meterNoList"
            multiple>
          </my-select>
        </el-form-item>
        <el-form-item label="结算人员">
          <my-select
            :value.sync='searchParams.userId'
            :optionList="setUserList"
            :option="{label:'name',value: 'userId'}"
            v-on:selectedData="selectedData">
          </my-select>
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
          <el-button @click='exportTicketCount'>sss</el-button>
          <my-export-button
            :params="searchParams"
            :exportMethod="'exportTicketCount'"
            :reportTitle="'计量仪计数表12'">
          </my-export-button>
        </el-form-item>
      </el-form>
    </div>
    <skkj-table
      ref = "skkjTable"
      :tableColumn = "tableColumn"
      :queryMethod = "queryMethod">
    </skkj-table>
  </div>
</template>

<script>
import api from '../../utils/api'
import skkjTable from '../../components/table/My-Table.vue'
import mySelect from '../../components/select/My-Select.vue'
import myExportButton from '../../components/button/My-Export-Button.vue'

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
          prop: 'imgUrl',
          label: '图片',
          // render: (h, scope) => (
          //   <el-image
          //     src = {scope.row.imgUrl}
          //     preview-src-list = {[scope.row.imgUrl]}>
          //   </el-image>
          // ),
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
  components: { skkjTable, mySelect, myExportButton },
  mounted() {
    this.getMeterNoInfo()
    this.getCarInfoInfo()
    this.getSetUser()
  },
  methods: {
    // 下拉选中的值
    selectedData(val) {
      this.searchParams.createUser = val.name
    },
    queryByParams() {
      console.log(this.searchParams);
      [this.searchParams.startTime, this.searchParams.endTime] = this.countTimeValue || []
      this.$refs.skkjTable.currentPage = 1
      this.$refs.skkjTable.pageSize = 10
      this.searchParams.metNos = this.metNos.join(',')
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
      console.log(res)
      const blob = new Blob([res], { type: 'application/vnd.ms-excel;charset=utf-8' })
      const downloadElement = document.createElement('a')
      const href = window.URL.createObjectURL(blob)
      downloadElement.href = href
      console.log(href)
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
