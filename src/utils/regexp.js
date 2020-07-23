export default {
  positiveInteger: new RegExp(/^[+]{0,1}(\d+)$/), // 正整数
  noZeroInteger: new RegExp(/^[0-9]*[1-9][0-9]*$/), // 非0正整数
  greaterThanTwenty: new RegExp(/^([2-9][0-9]|[1-9][0-9]{2,})$/), // 大于20正整数
  num: new RegExp(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/), // 数值(正数包括小数)
  password: new RegExp(/^([A-Z]|[a-z]|[0-9]){6,20}$/), // 用户密码
  price: new RegExp(/^\d+(\.\d{0,2})?$/), // 价格
  // 材料类型管理->排序 序号
  order: new RegExp(/^(?:[1-9]\d{0,2}|1\d{0,3}|1000)$/),
  // 单价
  number: new RegExp(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/),
  // 车辆编号只能输入数字和字母
  carNo: new RegExp(/^[a-zA-Z0-9]+$/),
  // 手机号
  mobile: new RegExp(/^1\d{10}$/),
  // 大于0的数值
  noZeroNumber: new RegExp(/^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/),
  // 大于0保留两位小数
  twoFixed: new RegExp(/^0\.([1-9]|\d[1-9])$|^[1-9]\d{0,8}\.\d{0,2}$|^[1-9]\d{0,8}$/),
}
