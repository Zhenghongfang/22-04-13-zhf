/* 计量仪系统 */
// 下发状态
const transmitStatusAction = {
  0: '下发失败',
  1: '下发成功',
  default: '未知下发状态',
}

// 所属厂家
const factoryStatusAction = {
  1: '数矿计量仪',
  2: '九鼎计量仪',
  3: '其他',
  default: '未知计量仪',
}

/* 设备管理系统 */
// 车辆归属
const belongStatusAction = {
  1: '自有',
  2: '租赁',
  default: '未知',
}
// 车辆当前状态
const stateStatusAction = {
  0: '空闲',
  1: '调度中',
  2: '工作中',
  default: '未知',
}

// 是否禁用
const disabledStatusAction = {
  1: '禁用',
  2: '启用',
}

// 类型或品牌
const menuStatusAction = {
  0: '类型',
  1: '品牌',
}

// 类别
const typeStatusAction = {
  1: '维修',
  2: '保养',
}

/* 生产系统 */
// 场地类型
const placeStatusAction = {
  1: '排土场',
  2: '采掘点',
  default: '未知场地类型',
}

// 是否启用
const enableStatusAction = {
  0: '禁用',
  1: '启用',
  default: '未知状态',
}

// 举报模式
const anonymityStatusAction = {
  0: '实名',
  1: '匿名',
  default: '未知模式',
}

// 审批状态
const verifyStatusAction = {
  0: '不属实',
  1: '属实',
  2: '待核实',
  default: '未知状态',
}

// 挖机计票 --> 计票方式
const excavatorStatusAction = {
  1: '手动',
  2: '自动',
  default: '未知',
}

// 挖机计票 --> 状态
const countStatusAction = {
  1: '不符合',
  2: '符合',
  default: '未知',
}

// 流程实例 --> 是否合票
const closeTicketAction = {
  1: '未合票',
  2: '已合票',
  default: '未知',
}

// 挖机归属
const isPrivateStatusAction = {
  1: '自有',
  2: '租赁',
  default: '未知',
}

// 结算汇总 --> 伙食费记录 --> 费用类型
const costtypeAction = {
  1: '伙食费',
  2: '领用费',
  3: '罚款费',
  4: '借款费',
  5: '奖励费',
  default: '未知',
}

// 结算汇总 --> 伙食费记录 --> 是否结算
const settlementAction = {
  1: '未结算',
  2: '已结算',
  default: '未知',
}

// 结算状态
const isSettlementStatusAction = {
  0: '未结算',
  1: '已结算',
  default: '未知',
}

// 等待状态
const waitStatusAction = {
  1: '正常',
  default: '未知',
}

// 班次结算记录 --> 确认状态
const shiftConfirmAction = {
  1: '待确认',
  2: '已确认',
  3: '拒绝',
  default: '未知',
}

// 台班状态
const temporaryStatusAction = {
  1: '台班开始',
  2: '台班完成',
  3: '同意',
  4: '拒绝',
  default: '未知',
}

// 车辆类型
const carTypeStatusAction = {
  1: '挖机',
  2: '自卸车',
  3: '辅助设备',
  default: '未知',
}

// 审核状态
const approvalStatusAction = {
  1: '台班审批',
  default: '未知',
}

// 系统版本
const versionStatusAction = {
  1: 'V2.0系统',
  2: 'V3.0系统',
  default: '未知系统',
}

// 调动状态
const onUseStatusAction = {
  0: '-',
  1: '调动完成',
  default: '未知状态',
}

// 在职
const workStatusAction = {
  0: '离职',
  1: '在职',
  default: '未知',
}

export default {
  // 计量仪系统
  transmitStatus: val => transmitStatusAction[val] || transmitStatusAction.default,
  factoryStatus: val => factoryStatusAction[val] || factoryStatusAction.default,

  // 设备管理系统
  belongStatus: val => belongStatusAction[val] || belongStatusAction.default,
  stateStatus: val => stateStatusAction[val] || stateStatusAction.default,
  delStatus: val => disabledStatusAction[val] || disabledStatusAction.default,
  mneuStatus: val => menuStatusAction[val] || menuStatusAction.default,
  typeStatus: val => typeStatusAction[val] || typeStatusAction.default,

  // 生产系统
  placeStatus: val => placeStatusAction[val] || placeStatusAction.default,
  enableStatus: val => enableStatusAction[val] || enableStatusAction.default,
  anonymityStatus: val => anonymityStatusAction[val] || anonymityStatusAction.default,
  verifyStatus: val => verifyStatusAction[val] || verifyStatusAction.default,
  excavatorStatus: val => excavatorStatusAction[val] || excavatorStatusAction.default,
  countStatus: val => countStatusAction[val] || countStatusAction.default,
  isPrivateStatus: val => isPrivateStatusAction[val] || isPrivateStatusAction.default,
  toHourMinute: val => `${Math.floor(val / 60)}小时${val % 60}分钟`,
  costtypeStatus: val => costtypeAction[val] || costtypeAction.default,
  settlementStatus: val => settlementAction[val] || settlementAction.default,
  isSettlementStatus: val => isSettlementStatusAction[val] || isSettlementStatusAction.default,
  waitStatus: val => waitStatusAction[val] || waitStatusAction.default,
  closeTicketStatus: val => closeTicketAction[val] || closeTicketAction.default,
  shiftConfirmStatus: val => shiftConfirmAction[val] || shiftConfirmAction.default,
  temporaryStatus: val => temporaryStatusAction[val] || temporaryStatusAction.default,
  carTypeStatus: val => carTypeStatusAction[val] || carTypeStatusAction.default,
  approvalStatus: val => approvalStatusAction[val] || approvalStatusAction.default,
  versionStatus: val => versionStatusAction[val] || versionStatusAction.default,
  onUseStatus: val => onUseStatusAction[val] || onUseStatusAction.default,
  workStatus: val => workStatusAction[val] || workStatusAction.default,
}
