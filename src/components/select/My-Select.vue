<template>
  <el-select v-bind="$props" @change="changeSelect">
    <el-option
      v-for = "(item, index) in optionList"
      :key = "item[option.key] ||index"
      :label = "item[option.label] || item"
      :value = "item[option.value] || item">
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    // 绑定值
    value: {
      required: true,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    filterable: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    // 下拉数据
    optionList: {
      type: Array,
      default: () => [],
    },
    // option配置项
    option: {
      type: Object,
      default: () => ({
        key: '',
        label: '',
        value: '',
      }),
    },
  },
  methods: {
    // 改变下拉值
    changeSelect(val) {
      // 改变父组件的值
      this.$emit('update:value', val)

      // 向父组件传递选中数据
      for (let i = 0; i < this.optionList.length; i++) {
        const item = this.optionList[i]
        if (Object.prototype.toString.call(item) === '[object Object]') {
          if (item.userId === val) {
            this.$emit('selectedData', item)
            return
          }
        }
      }
    },
  },
}
</script>

<style>
</style>
