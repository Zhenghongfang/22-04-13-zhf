<template>
  <div class="table-content">
    <el-table
      border
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      @sort-change = "sortByColumns"
      :max-height = "screenHeight"
      :data = "sourceData"
      @selection-change = "selectionChange">
      <el-table-column
        v-for="(item, index) in tableColumn"
        :key="index"
        :type="item.type"
        :formatter="item.formatter"
        :sortable = "item.sortable"
        :width="item.width"
        :prop="item.prop"
        :label="item.label">
      </el-table-column>
      <slot></slot>
      <el-table-column v-if="operate.length === 0" label="操作" width="85">
        <template slot-scope="scope">
          <el-button
            @click="updateRowData(scope.row)"
            type="text"
            size="small">修改
          </el-button>
          <el-button
            @click="deleteRowData(scope.row.id, scope.row)"
            type="text"
            size="small">
              删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="showPagination"
      background
      layout="total, sizes, prev, pager, next"
      :total = "total"
      :current-page = "currentPage"
      :page-size = "pageSize"
      @size-change = "sizeChange"
      @current-change = "currentChange">
    </el-pagination>
  </div>
</template>

<script>
import api from '../utils/api'

export default {
  data() {
    return {
      sourceData: [], // 表格源数据
      originData: [], // 源数组
      total: 0, // 总条数
      pageSize: 10, // 每页条数
      currentPage: 1, // 当前页数
      checkedData: [],
      screenHeight: 500,
      loading: false,
    }
  },
  props: {
    // 表格列
    tableColumn: {
      type: Array,
      required: true,
    },
    // 查询方法
    queryMethod: {
      type: String,
      required: true,
    },
    // 删除方法
    deleteMethod: {
      type: String,
    },
    // 操作栏
    operate: {
      type: Array,
      default: () => [],
    },
    // 是否显示分页
    showPagination: {
      type: Boolean,
      default: true,
    },
    // 使用前端分页
    useFrontPagination: {
      type: Boolean,
    },
  },
  created() {
    console.log(this.test)
  },
  mounted() {
    this.getSourceData(this.$parent.searchParams || {})

    // 获取表格高度
    const tableHeight = () => {
      const searchFormHeight = document.getElementsByClassName('search-form')[0]
        ? document.getElementsByClassName('search-form')[0].clientHeight
        : 0
      this.screenHeight = window.innerHeight - 180 - searchFormHeight
    }

    this.$nextTick(() => {
      tableHeight()
    })

    window.onresize = () => (() => {
      tableHeight()
    })()
  },
  methods: {
    // 获取表格数据
    async getSourceData(searchParams) {
      let params = this.useNewPagination
        ? {
          pageSize: this.pageSize,
          pageNo: this.currentPage,
          ...searchParams,
        }
        : {
          limit: this.pageSize,
          offset: (this.currentPage - 1) * this.pageSize,
          ...searchParams,
        }
      if (this.useFrontPagination) {
        params = searchParams
      }
      this.loading = true
      try {
        const res = await api[this.queryMethod](params)
        this.loading = false
        if (Object.prototype.toString.call(res) === '[object Object]') {
          this.sourceData = this.useNewPagination ? res.data.records : res.rows || res
          this.total = this.useNewPagination ? res.data.total : res.total
          this.sourceData.map((data, index) => {
            data.index = (this.currentPage - 1) * this.pageSize + index + 1
          })
        }

        // 前端分页
        if (res instanceof Array) {
          this.originData = [...res]
          this.total = res.length
          this.currentPage = 1
          this.pageSize = 10
          this.getFrontPaginationData()
        }
      } catch (e) {
        this.loading = false
      }
    },

    // 排序
    sortByColumns(val) {
      if (val.order === 'ascending') {
        this.$parent.searchParams.orderBy = `${val.prop}:asc`
        this.getSourceData(this.$parent.searchParams)
      } else if (val.order === 'descending') {
        this.$parent.searchParams.orderBy = `${val.prop}:desc`
        this.getSourceData(this.$parent.searchParams)
      }
    },

    // 改变每页条数
    sizeChange(size) {
      this.pageSize = size
      if (this.useFrontPagination) {
        this.getFrontPaginationData()
      } else {
        this.getSourceData(this.$parent.searchParams)
      }
    },
    // 改变当前页
    currentChange(currentPage) {
      this.currentPage = currentPage
      if (this.useFrontPagination) {
        this.getFrontPaginationData()
      } else {
        this.getSourceData(this.$parent.searchParams)
      }
    },
    // 多选
    selectionChange(selection) {
      this.checkedData = selection
    },
    // 删除当前行数据
    async deleteRowData(id, row) {
      try {
        await this.$confirm('确定要删除选中的记录?', '确认信息', {
          closeOnClickModal: false,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
        // 角色管理
        if (this.deleteMethod === 'deleteRole') {
          id = row.roleId
        }
        let params = { id }

        if (this.deleteMethod === 'deleteDept') {
          params = {
            deptId: row.deptId,
          }
        }
        const res = await api[this.deleteMethod](params)
        if (res.code === 0) {
          if (this.sourceData.length === 1 && this.currentPage > 1) {
            this.currentPage -= 1
          }
          this.$message({
            type: 'success',
            message: '删除成功',
          })
          this.getSourceData(this.$parent.searchParams)
        } else {
          this.$message({
            type: 'error',
            message: res.msg,
          })
        }
      } catch (e) {
        if (e !== 'cancel') {
          this.$message({
            type: 'error',
            message: '删除失败',
          })
        }
      }
    },
    // 删除多行
    async deleteData() {
      const checkIds = []
      this.checkedData.map((item) => {
        checkIds.push(item.id)
      })
      if (checkIds.length > 0) {
        try {
          await this.$confirm('确定要删除选中的记录?', '确认信息', {
            closeOnClickModal: false,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          })
          const res = await api[this.deleteMoreMethod](checkIds)
          if (res.code === 0) {
            if (this.sourceData.length === 1 && this.currentPage > 1) {
              this.currentPage -= 1
            }
            this.$message({
              type: 'success',
              message: '删除成功',
            })
            this.getSourceData(this.$parent.searchParams)
          } else {
            this.$message({
              type: 'error',
              message: res.msg,
            })
          }
        } catch (e) {
          if (e !== 'cancel') {
            this.$message({
              type: 'error',
              message: '删除失败',
            })
          }
        }
      } else {
        this.$message({
          type: 'warnning',
          message: '请先选择数据',
        })
      }
    },
    // 修改当前行数据
    updateRowData(rowData) {
      if (this.$parent.$refs.skkjDialog) {
        this.$parent.$refs.skkjDialog.dialogVisible = true
        this.$parent.$refs.skkjDialog.title = '修改'
      } else if (this.$parent.dialogVisible !== undefined) {
        this.$parent.dialogVisible = true
        this.$parent.title = '修改'
      }
      setTimeout(() => {
        this.$root.Bus.$emit('rowData', rowData)
      }, 0)
    },

    // 获得分页后数据
    getFrontPaginationData() {
      const start = (this.currentPage - 1) * this.pageSize
      this.sourceData = this.originData.slice(start, start + this.pageSize)
      this.sourceData.map((data, index) => {
        data.index = start + index + 1
      })
    },
  },
}
</script>

<style lang="scss">
  .table-content {
    padding: 20px 25px;
    .el-pagination {
      float: right;
      margin: 10px 0;
    }
  }
</style>
