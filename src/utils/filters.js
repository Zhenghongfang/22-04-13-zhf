const carTypeStatusAction = {
  1: '挖机',
  2: '自卸车',
  3: '辅助设备',
  default: '未知',
}

export default {
  carTypeStatus: val => carTypeStatusAction[val] || carTypeStatusAction.default,
}
