import qs from 'qs'
import request from './axios'
import constants from './constants'

const {
  baseUrl,
} = constants

export default {
  // 登录
  login: data => request.post(`${baseUrl}/sky-production/appLogin`, qs.stringify(data)),

  // 获取版本信息
  getVision: () => request.get(`${baseUrl}/sky-user/system/menuGroup/getversion`),

  // 菜单
  getMenu: () => request.get(`${baseUrl}/sky-production/system/homePage/HomePageMenu`),
  // 首页机械工作时长
  getJobLength: params => request.get(`${baseUrl}/sky-production/system/homePage/carAvgWorkTime`, { params }),

  // 首页机械数量和机械出勤率
  getMachineData: params => request.get(`${baseUrl}/sky-production/system/homePage/carCount`, { params }),

  // 首页实时票据统计
  getBillCount: params => request.get(`${baseUrl}/sky-production/system/homePage/billCount`, { params }),

  // 首页人员出勤统计
  getAttendance: params => request.get(`${baseUrl}/sky-production/system/appAttendance/homePagedetails`, { params }),

  // 首页人员
  getPerson: params => request.get(`${baseUrl}/sky-production/system/appAdmin/findLatelyAdmin`, { params }),
  // 首页
  getEquipmentData: () => request.get(`${baseUrl}/sky-location/device/list-car-type-work-info`),
  getActualTimeData: () => request.get(`${baseUrl}/sky-location/device/list-car-work-state`),
  getProjectAttendance: () => request.get(`${baseUrl}/sky-production/system/attendancePC/getMechanicalAttendance`),
  getProjectPlan: () => request.get(`${baseUrl}/sky-production/system/homePage/volumePlan`),
  getPersonCount: () => request.get(`${baseUrl}/sky-production/system/attendancePC/get-user-attendance`),

  // 计量仪信息管理
  getMeterInfo: params => request.get(`${baseUrl}/sky-meter/system/meterDeviceInfo/list`, { params }),
  addMeter: data => request.post(`${baseUrl}/sky-meter/system/meterDeviceInfo/save`, qs.stringify(data)),
  updateMeter: data => request.post(`${baseUrl}/sky-meter/system/meterDeviceInfo/update`, qs.stringify(data)),
  deleteMeter: data => request.post(`${baseUrl}/sky-meter/system/meterDeviceInfo/remove`, qs.stringify(data)),

  // 计量仪计数
  getCountInfo: params => request.get(`${baseUrl}/sky-meter/system/meterTicketCount/list`, { params }),
  getMeterNoInfo: params => request.get(`${baseUrl}/sky-meter/system/meterTicketCount/listmetno`, { params }),
  getCarInfoInfo: params => request.get(`${baseUrl}/sky-meter/system/meterTicketCount/listcar`, { params }),
  exportTicketCount: params => request.get(`${baseUrl}/sky-meter/system/meterTicketCount/exportTicketCount`, {
    responseType: 'blob',
    params,
  }),
  getSetUser: params => request.get(`${baseUrl}/sky-meter/system/meterTicketCount/getsettlers`, { params }),
  importTicketCount: data => request.post(`${baseUrl}/sky-meter/system/meterTicketCount/export-ticketCount-import`, qs.stringify(data)),

  // 车辆与蓝牙卡绑定
  getBindInfo: params => request.get(`${baseUrl}/sky-meter/system/meterBluetoothCard/list`, { params }),
  addBind: data => request.post(`${baseUrl}/sky-meter/system/meterBluetoothCard/save`, qs.stringify(data)),
  updateBind: data => request.post(`${baseUrl}/sky-meter/system/meterBluetoothCard/update`, qs.stringify(data)),
  deleteBind: data => request.post(`${baseUrl}/sky-meter/system/meterBluetoothCard/remove`, qs.stringify(data)),
  getDumperInfo: () => request.get(`${baseUrl}/sky-meter/system/car/getdumperlist`),
  workTimeSend: data => request.post(`${baseUrl}/sky-meter/system/meterSend/workTimeSend`, qs.stringify({
    ids: data,
  }, {
    arrayFormat: 'brackets',
  })),
  btCardSend: data => request.post(`${baseUrl}/sky-meter/system/meterSend/bluetoothSend`, qs.stringify({
    ids: data,
  }, {
    arrayFormat: 'brackets',
  })),
  swipingCardSend: data => request.post(`${baseUrl}/sky-meter/system/meterSend/intervals/card`, qs.stringify({
    ids: data,
  }, {
    arrayFormat: 'brackets',
  })),
  exportSend: data => request.post(`${baseUrl}/sky-meter/system/meterSend/intervals/exportdays`, qs.stringify({
    ids: data,
  }, {
    arrayFormat: 'brackets',
  })),

  // 班次管理
  getShiftInfo: params => request.get(`${baseUrl}/sky-meter/system/meterWorkTime/list`, { params }),
  addShift: data => request.post(`${baseUrl}/sky-meter/system/meterWorkTime/save`, qs.stringify(data)),
  updateShift: data => request.post(`${baseUrl}/sky-meter/system/meterWorkTime/update`, qs.stringify(data)),
  deleteShift: data => request.post(`${baseUrl}/sky-meter/system/meterWorkTime/remove`, qs.stringify(data)),

  // 下发日志
  getTransmissionInfo: params => request.get(`${baseUrl}/sky-meter/system/meterSend/list`, { params }),

  // 系统设置
  getInterval: params => request.get(`${baseUrl}/sky-meter/system/meterIntervals/list`, { params }),
  setInterval: data => request.post(`${baseUrl}/sky-meter/system/meterIntervals/save`, qs.stringify(data)),

  /* 生产系统 */
  // 多处调用的方法
  getAllCarList: () => request.get(`${baseUrl}/sky-production/system/car/allCarsList`),
  getAllBoss: () => request.get(`${baseUrl}/sky-production/sys/user/allBoss`),
  getBoardRecords: params => request.get(`${baseUrl}/sky-production/system/cost/list`, { params }),
  addBoardRecords: data => request.post(`${baseUrl}/sky-production/system/cost/save`, qs.stringify(data)),
  updateBoardRecords: data => request.post(`${baseUrl}/sky-production/system/cost/update`, qs.stringify(data)),
  deleteBoardRecords: data => request.post(`${baseUrl}/sky-production/system/cost/remove`, qs.stringify(data)),
  batchesDeleteBoardRecords: data => request.post(`${baseUrl}/sky-production/system/cost/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // GPS首页
  getGpsIndexInfo: params => request.get(`${baseUrl}/sky-location/device/index-gps-data`, { params }),
  getExcavatorGroup: params => request.get(`${baseUrl}/sky-location/device/list-excavator-group`, { params }),
  getDataInfo: params => request.get(`${baseUrl}/sky-location/device/list-car-type-work-info`, { params }),
  // 修改密码
  changePassWord: data => request.post(`${baseUrl}/sky-production/sys/user/resetPwd`, qs.stringify(data)),

  // 基础管理-->标车方量
  getRatioInfo: params => request.get(`${baseUrl}/sky-production/system/cureRatio/list`, { params }),
  addRatio: data => request.post(`${baseUrl}/sky-production/system/cureRatio/save`, qs.stringify(data)),
  updateRatio: data => request.post(`${baseUrl}/sky-production/system/cureRatio/update`, qs.stringify(data)),
  deleteRatio: data => request.post(`${baseUrl}/sky-production/system/cureRatio/remove`, qs.stringify(data)),
  deleteBatchRatio: data => request.post(`${baseUrl}/sky-production/system/cureRatio/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 基础管理-->挖机票种&自卸车票种
  getTicketInfo: params => request.get(`${baseUrl}/sky-production/system/ticketkind/list`, { params }),
  updateTicket: data => request.post(`${baseUrl}/sky-production/system/ticketkind/update`, qs.stringify(data)),
  deleteTicket: data => request.post(`${baseUrl}/sky-production/system/ticketkind/remove`, qs.stringify(data)),
  deleteBatchTicket: data => request.post(`${baseUrl}/sky-production/system/ticketkind/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 基础管理-->增加挖机票种
  addTicket: data => request.post(`${baseUrl}/sky-production/system/ticketkind/save`, qs.stringify(data)),

  // 基础管理-->自卸车票种-->增加自卸车票种
  addDumperTicket: data => request.post(`${baseUrl}/sky-production/system/ticketkind/saveDumper`, qs.stringify(data)),
  queryStartPoint: params => request.get(`${baseUrl}/sky-production/system/place/getstartlist`, { params }),
  queryEndPoint: params => request.get(`${baseUrl}/sky-production/system/place/getendlist`, { params }),

  // 基础管理-->辅助机械票种
  getMachineInfo: params => request.get(`${baseUrl}/sky-production/system/machineryTicket/list`, { params }),
  getCarInfo: params => request.get(`${baseUrl}/sky-production/system/car/getlist`, { params }),
  addMachine: data => request.post(`${baseUrl}/sky-production/system/machineryTicket/save`, qs.stringify(data)),
  updateMachine: data => request.post(`${baseUrl}/sky-production/system/machineryTicket/update`, qs.stringify(data)),
  deleteMachine: data => request.post(`${baseUrl}/sky-production/system/machineryTicket/remove`, qs.stringify(data)),

  // 基础管理-->平盘管理
  getPlateInfo: params => request.get(`${baseUrl}/sky-production/system/plate/list`, { params }),
  addPlate: data => request.post(`${baseUrl}/sky-production/system/plate/save`, qs.stringify(data)),
  updatePlate: data => request.post(`${baseUrl}/sky-production/system/plate/update`, qs.stringify(data)),
  deletePlate: data => request.post(`${baseUrl}/sky-production/system/plate/remove`, qs.stringify(data)),

  // 基础管理-->计量仪管理
  getEquipmentInfo: params => request.get(`${baseUrl}/sky-production/system/equipment/list`, { params }),
  queryEquipment: params => request.get(`${baseUrl}/sky-production/system/equipment/listmeterdeviceinfo`, { params }),
  queryDevice: params => request.get(`${baseUrl}/sky-production/system/place/getendlist`, { params }),
  addEquipment: data => request.post(`${baseUrl}/sky-production/system/equipment/save`, qs.stringify(data)),
  updateEquipment: data => request.post(`${baseUrl}/sky-production/system/equipment/update`, qs.stringify(data)),
  deleteEquipment: data => request.post(`${baseUrl}/sky-production/system/equipment/remove`, qs.stringify(data)),
  deleteBatchEquipment: data => request.post(`${baseUrl}/sky-production/system/equipment/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 基础管理-->场地管理
  getPlaceInfo: params => request.get(`${baseUrl}/sky-production/system/place/list`, { params }),
  addPlace: data => request.post(`${baseUrl}/sky-production/system/place/save`, qs.stringify(data)),
  updatePlace: data => request.post(`${baseUrl}/sky-production/system/place/update`, qs.stringify(data)),
  deletePlace: data => request.post(`${baseUrl}/sky-production/system/place/remove`, qs.stringify(data)),
  deleteBatchPlace: data => request.post(`${baseUrl}/sky-production/system/place/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),
  getPlates: params => request.get(`${baseUrl}/sky-production/system/plate/getplate`, { params }),

  // 审批
  getApproval: params => request.get(`${baseUrl}/sky-production/system/approval/list`, { params }),
  getApprovalRole: params => request.get(`${baseUrl}/sky-production/system/approval/getroleids`, { params }),
  addApproval: data => request.post(`${baseUrl}/sky-production/system/approval/save`, qs.stringify(data)),
  updateApproval: data => request.post(`${baseUrl}/sky-production/system/approval/update`, qs.stringify(data)),
  deleteApproval: data => request.post(`${baseUrl}/sky-production/system/approval/remove`, qs.stringify(data)),

  // 生产计划-->月度计划表
  getPlanInfo: params => request.get(`${baseUrl}/sky-production/system/homePage/list`, { params }),
  addPlan: data => request.post(`${baseUrl}/sky-production/system/homePage/save`, qs.stringify(data)),
  updatePlan: data => request.post(`${baseUrl}/sky-production/system/homePage/update`, qs.stringify(data)),
  deletePlan: data => request.post(`${baseUrl}/sky-production/system/homePage/remove`, qs.stringify(data)),

  // 指标管理-->运营指标
  getOperateInfo: params => request.get(`${baseUrl}/sky-production/system/operatingManagement/list`, { params }),
  addOperate: data => request.post(`${baseUrl}/sky-production/system/operatingManagement/save`, qs.stringify(data)),
  updateOperate: data => request.post(`${baseUrl}/sky-production/system/operatingManagement/update`, qs.stringify(data)),
  deleteOperate: data => request.post(`${baseUrl}/sky-production/system/operatingManagement/remove`, qs.stringify(data)),
  getRatio: params => request.get(`${baseUrl}/sky-production/system/cureRatio/getRatioByDeptId`, { params }),

  // 办公管理-->人员考勤
  getAttendanceInfo: params => request.get(`${baseUrl}/sky-production/system/attendancePC/list`, { params }),
  deleteBatchAttendance: data => request.post(`${baseUrl}/sky-production/system/attendancePC/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 办公管理-->停工打卡
  getShutdownInfo: params => request.get(`${baseUrl}/sky-production/system/shutdownAttendance/list`, { params }),

  // 办公管理-->项目部结算周期
  getPeriodInfo: params => request.get(`${baseUrl}/sky-production/system/settlementPeriod/list`, { params }),
  addPeriod: data => request.post(`${baseUrl}/sky-production/system/settlementPeriod/save`, qs.stringify(data)),
  updatePeriod: data => request.post(`${baseUrl}/sky-production/system/settlementPeriod/update`, qs.stringify(data)),
  deletePeriod: data => request.post(`${baseUrl}/sky-production/system/settlementPeriod/remove`, qs.stringify(data)),

  // 办公管理-->通知公告
  // getPeriodInfo: params => request.get(`${baseUrl}/system/settlementPeriod/list`, { params }),

  // 智能调度-->调度管理
  getListReal: params => request.get(`${baseUrl}/sky-production/system/vehiclescheduling/listrealtime`, { params }),

  // 智能调度-->调度记录
  getVehiclescheduling: params => request.get(`${baseUrl}/sky-production/system/vehiclescheduling/list`, { params }),

  // 智能调度-->台班记录
  getTemporary: params => request.get(`${baseUrl}/sky-production/system/temporary/list`, { params }),
  updateTemporary: data => request.post(`${baseUrl}/sky-production/system/temporary/update`, qs.stringify(data)),

  // 举报管理-->举报记录
  getReportCord: params => request.get(`${baseUrl}/sky-production/system/reportCord/ReportCordList`, { params }),
  deleteBatchReportCord: data => request.post(`${baseUrl}/sky-production/system/reportCord/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 结算汇总--> 班次结算
  getSettlement: params => request.get(`${baseUrl}/sky-production/system/settlement/list`, { params }),
  getSettlementDetail: params => request.get(`${baseUrl}/sky-production/system/settlement/godetail/${params.bossId}`, { params }),
  sendSettlementDetail: data => request.post(`${baseUrl}/sky-production/system/settlement/save`, qs.stringify(data)),

  // 结算汇总--> 班次结算记录
  getSettlementRecords: params => request.get(`${baseUrl}/sky-production/system/settlement/recordDetailsList`, { params }),
  revokeSettlement: data => request.post(`${baseUrl}/sky-production/system/settlement/cancelSettlement`, qs.stringify(data)),

  // 结算汇总--> 生产日报
  getProductionDaily: params => request.get(`${baseUrl}/sky-production/system/settlement/getActualReport`, { params }),
  saveProductionDaily: data => request.post(`${baseUrl}/sky-production/system/settlement/saveActualReport`, qs.stringify(data)),

  // 结算汇总--> 生产日报记录
  getProDailyRecords: params => request.get(`${baseUrl}/sky-production/system/settlement/dailyReportRecordList`, { params }),
  getRecordDetails: id => request.get(`${baseUrl}/sky-production/system/settlement/check/${id}`),

  // 结算汇总--> 月度结算
  getMonthSettlement: params => request.get(`${baseUrl}/sky-production/system/settlementMonth/list`, { params }),
  sendMonthSettlement: data => request.post(`${baseUrl}/sky-production/system/settlementMonth/saves`, qs.stringify(data)),

  // 结算汇总--> 月度结算记录
  getMonSettleRecords: params => request.get(`${baseUrl}/sky-production/system/settlementMonth/List`, { params }),
  deleteMonSettleRecords: data => request.post(`${baseUrl}/sky-production/system/settlementMonth/remove`, qs.stringify(data)),
  exportMonSettleRecords: params => request.get(`${baseUrl}/sky-production/system/settlementMonth/exportSettlementMonth`, { responseType: 'blob', params }),

  // 结算汇总--> 借款明细
  addBorrowingRecords: data => request.post(`${baseUrl}/sky-production/system/cost/loadSave`, qs.stringify(data)),

  // 结算汇总--> 奖惩明细
  addLendRewardRecords: data => request.post(`${baseUrl}/sky-production/system/cost/lendRewardSave`, qs.stringify(data)),

  // 统计报表--> 人工补票
  getFareExcavatorList: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/listmakeup`, { params }),
  getListCar: params => request.get(`${baseUrl}/sky-production/system/car/listcar`, { params }),
  getPointTicket: params => request.get(`${baseUrl}/sky-production/system/ticketkind/getticketkind`, { params }),
  getStartList: params => request.get(`${baseUrl}/sky-production/system/place/getstartlist`, { params }),
  getEndList: params => request.get(`${baseUrl}/sky-production/system/place/getendlist`, { params }),
  addFareExcavatorTicket: data => request.post(`${baseUrl}/sky-production/system/meterTicketUpload/savemakeup`, qs.stringify(data)),
  deleteFareTicket: data => request.post(`${baseUrl}/sky-production/system/meterTicketUpload/remove`, qs.stringify(data)),
  getFareDumperList: params => request.get(`${baseUrl}/sky-production/system/car/listdumpercar`, { params }),
  getTicketData: params => request.get(`${baseUrl}/sky-production/system/ticketkind/getdumperticketkind`, { params }),

  // 统计报表--> 挖机扣票
  getExcavatorInfo: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/listdeduction`, { params }),
  addExcavatorInfo: data => request.post(`${baseUrl}/sky-production/system/meterTicketUpload/deduction/update`, qs.stringify(data)),

  // 统计报表--> 挖机计票
  getexcavatorCountInfo: params => request.get(`${baseUrl}/sky-production/system/excavatorCount/list`, { params }),

  // 统计报表 --> 流程实例
  getBallotcount: params => request.get(`${baseUrl}/sky-production/system/ballotcount/list`, { params }),

  // 统计报表 --> 自卸车票据
  getCarName: params => request.get(`${baseUrl}/sky-production/system/car/carName`, { params }),
  getMeterNumber: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/getMeterNumber`, { params }),
  getcarDriver: params => request.get(`${baseUrl}/sky-production/sys/user/getcarname`, { params }),
  getTicketUploadList: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/list`, { params }),
  getAllUser: () => request.get(`${baseUrl}/sky-equipment/sys/user/carBossList`),

  // 统计报表 --> 异常票据
  getAbnormalticket: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/listabnormalticket`, { params }),

  // 统计报表 --> 自卸车运距占比
  getColumns: () => request.get(`${baseUrl}/sky-production/system/dumperReport/getColumns`),
  getDumpDisRate: params => request.get(`${baseUrl}/sky-production/system/dumperReport/statistics`, { params }),
  exportDumpDisRate: params => request.get(`${baseUrl}/sky-production/system/dumperReport/exportDumperReport`, { responseType: 'blob', params }),

  // 统计报表 --> 挖机物料占比
  getExcaMaterialColumns: () => request.get(`${baseUrl}/sky-production/system/countReport/getColumns`),
  getExcaMaterialRate: params => request.get(`${baseUrl}/sky-production/system/countReport/statistics`, { params }),
  exportExcaMaterialRate: params => request.get(`${baseUrl}/sky-production/system/countReport/exportReport`, { responseType: 'blob', params }),

  // 统计报表 --> 车辆月度加油表
  getMonthCarFuelingColumns: params => request.get(`${baseUrl}/sky-production/system/chart/dataColumns`, { params }),
  getMonthCarFueling: params => request.get(`${baseUrl}/sky-production/system/chart/getMonthOil`, { params }),
  exportMonthCarFueling: params => request.get(`${baseUrl}/sky-production/system/chart/exportMonthOil`, { responseType: 'blob', params }),

  // 统计报表 --> 收支出统计报表
  getPaymentSum: params => request.get(`${baseUrl}/sky-production/system/outlayReport/list`, { params }),
  getPaymentTable: params => request.get(`${baseUrl}/sky-production/system/outlayReport/table`, { params }),

  // 统计报表 --> 挖机统计报表
  getExcavatorSum: params => request.get(`${baseUrl}/sky-production/system/countStatisticalReport/list`, { params }),
  getCount: data => request.get(`${baseUrl}/sky-production/system/material/getCount`, qs.stringify(data)),

  // 统计报表 --> 自卸车统计报表
  getDumperSum: params => request.get(`${baseUrl}/sky-production/system/dumperStatisticalReport/list`, { params }),
  getEndlist: data => request.get(`${baseUrl}/sky-production/system/place/getendlist`, qs.stringify(data)),

  // 统计报表 --> 工程款结算表
  getEngineeringFunds: params => request.get(`${baseUrl}/sky-production/system/engineering/engineer`, { params }),
  exportEngineeringFunds: params => request.get(`${baseUrl}/sky-production/system/engineering/exportEngineer`, {
    responseType: 'blob',
    params,
  }),
  // 统计报表 --> 扣除票据
  getListDeduction: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/listdeduction`, { params }),
  getAllCar: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/get-all-car`, { params }),

  // 统计报表 --> 人工扣票
  getAllNormalTicket: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/get-all-normal-ticket`, { params }),
  getAllDumper: params => request.get(`${baseUrl}/sky-production/system/meterTicketUpload/get-all-dumper`, { params }),
  updateDeduction: data => request.post(`${baseUrl}/sky-production/system/meterTicketUpload/deduction/update`, qs.stringify(data)),

  // 统计报表 --> 运营情况指标分析表
  getOperationQuota: params => request.get(`${baseUrl}/sky-production/system/chart/getReport`, { params }),
  exportOperationQuota: params => request.get(`${baseUrl}/sky-production/system/chart/exportOperator`, {
    responseType: 'blob',
    params,
  }),

  // 统计报表 --> 考勤统计表
  getWorkNumbers: data => request.post(`${baseUrl}/sky-production/system/attendanceCount/attendance`, qs.stringify(data)),
  getAvgWorkTime: data => request.post(`${baseUrl}/sky-production/system/attendanceCount/jobTime`, qs.stringify(data)),

  // 加油管理-->入库
  getOilInfo: params => request.get(`${baseUrl}/sky-production/system/oil/list`, { params }),
  getOilKind: params => request.get(`${baseUrl}/sky-production/system/oilKind/oilkindlist`, { params }),
  addOil: data => request.post(`${baseUrl}/sky-production/system/oil/save`, qs.stringify(data)),
  updateOil: data => request.post(`${baseUrl}/sky-production/system/oil/update`, qs.stringify(data)),
  deleteOil: data => request.post(`${baseUrl}/sky-production/system/oil/remove`, qs.stringify(data)),
  deleteBatchOil: data => request.post(`${baseUrl}/sky-production/system/oil/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 加油管理-->出库
  getOilrecordInfo: params => request.get(`${baseUrl}/sky-production/system/oilrecord/list`, { params }),
  getOilKindList: params => request.get(`${baseUrl}/sky-production/system/oilKind/kindListHavePrice`, { params }),
  getOilRecordName: params => request.get(`${baseUrl}/sky-production/system/oilrecord/getOilRecordName`, { params }),
  addOilrecord: data => request.post(`${baseUrl}/sky-production/system/oilrecord/save`, qs.stringify(data)),
  updateOilrecord: data => request.post(`${baseUrl}/sky-production/system/oilrecord/update`, qs.stringify(data)),
  deleteOilrecord: data => request.post(`${baseUrl}/sky-production/system/oilrecord/remove`, qs.stringify(data)),
  exportOil: params => request.get(`${baseUrl}/sky-production/system/oilrecord/exportOil`, {
    responseType: 'blob',
    params,
  }),

  // 加油管理-->油料种类
  getOilKindInfo: params => request.get(`${baseUrl}/sky-production/system/oilKind/list`, { params }),
  addOilKind: data => request.post(`${baseUrl}/sky-production/system/oilKind/save`, qs.stringify(data)),
  updateOilKind: data => request.post(`${baseUrl}/sky-production/system/oilKind/update`, qs.stringify(data)),
  deleteOilKind: data => request.post(`${baseUrl}/sky-production/system/oilKind/remove`, qs.stringify(data)),
  deleteBatchOilKind: data => request.post(`${baseUrl}/sky-production/system/oilKind/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 加油管理-->油价管理
  getOilPriceInfo: params => request.get(`${baseUrl}/sky-production/system/oilprice/list`, { params }),
  addOilPrice: data => request.post(`${baseUrl}/sky-production/system/oilprice/save`, qs.stringify(data)),
  updateOilPrice: data => request.post(`${baseUrl}/sky-production/system/oilprice/update`, qs.stringify(data)),
  deleteOilPrice: data => request.post(`${baseUrl}/sky-production/system/oilprice/remove`, qs.stringify(data)),
  deleteBatchOilPrice: data => request.post(`${baseUrl}/sky-production/system/oilprice/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 加油管理-->油量库存
  getOilRepertory: params => request.get(`${baseUrl}/sky-production/system/oilRepertory/list`, { params }),

  // 加油管理-->历史油价
  getOilRecord: params => request.get(`${baseUrl}/sky-production/system/oilprice/listrecords`, { params }),

  // 加油管理-->安全库存通知人员
  getInform: params => request.get(`${baseUrl}/sky-production/system/inform/list`, { params }),
  getUserList: params => request.get(`${baseUrl}/sky-production/sys/user/allBoss`, { params }),
  addUser: data => request.post(`${baseUrl}/sky-production/system/inform/save`, qs.stringify(data)),
  deleteUser: data => request.post(`${baseUrl}/sky-production/system/inform/remove`, qs.stringify(data)),
  deleteBatchUser: data => request.post(`${baseUrl}/sky-production/system/inform/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 加油管理-->盘库
  getOilCheck: params => request.get(`${baseUrl}/sky-production/system/oilCheck/list`, { params }),
  getSums: params => request.get(`${baseUrl}/sky-production/system/oilCheck/selectSumRepertory`, { params }),
  addOilCheck: data => request.post(`${baseUrl}/sky-production/system/oilCheck/save`, qs.stringify(data)),

  // 加油管理-->盘库通用盈亏
  getAllRange: params => request.get(`${baseUrl}/sky-production/system/inform/listAllRange`, { params }),
  addAllRange: data => request.post(`${baseUrl}/sky-production/system/inform/saveAllRange`, qs.stringify(data)),
  updateAllRange: data => request.post(`${baseUrl}/sky-production/system/inform/updateAllRange`, qs.stringify(data)),
  deleteAllRange: data => request.post(`${baseUrl}/sky-production/system/inform/remove`, qs.stringify(data)),
  deleteBatchAllRange: data => request.post(`${baseUrl}/sky-production/system/inform/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 加油管理-->单油品盘库通用盈亏
  getRange: params => request.get(`${baseUrl}/sky-production/system/inform/rangeList`, { params }),
  addRange: data => request.post(`${baseUrl}/sky-production/system/inform/saveRange`, qs.stringify(data)),
  updateRange: data => request.post(`${baseUrl}/sky-production/system/inform/updateRange`, qs.stringify(data)),
  deleteBatchRange: data => request.post(`${baseUrl}/sky-production/system/inform/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 报表分析
  getExcavatorTime: params => request.get(`${baseUrl}/sky-location/device/page-excavator-info`, { params }),
  getCarTime: params => request.get(`${baseUrl}/sky-location/device/list-dumper-runningTime`, { params }),
  getCarTimeDetails: params => request.get(`${baseUrl}/sky-location/device/list-dumper-runningTime-details`, { params }),
  getCarMileage: params => request.get(`${baseUrl}/sky-location/device/dumper-car-distance-statistics`, { params }),
  getDataAnalysis: params => request.get(`${baseUrl}/sky-location/device/page-dumper-info`, { params }),

  // 报表分析-->卸料点
  getDischarge: params => request.get(`${baseUrl}/sky-location/app/place/page-place`, { params }),
  addDischarge: data => request.post(`${baseUrl}/sky-location/app/place/add-place`, data),
  updateDischarge: data => request.post(`${baseUrl}/sky-location/app/place/update-place`, data),
  deleteDischarge: data => request.delete(`${baseUrl}/sky-location/app/place/delete-place`, { data }),

  // 报表分析-->费用分析
  getSquare: params => request.get(`${baseUrl}/sky-location/device/list-oil-square`, { params }),

  // 报表分析-->超速统计
  getAlertRecord: params => request.get(`${baseUrl}/sky-location/speed-alert-record/page-info`, { params }),

  // 报表分析-->司机里程统计
  getCarDistance: params => request.get(`${baseUrl}/sky-location/device/page-driver-distance-statistics`, { params }),

  // 报表分析-->车辆出勤率
  getVehicleAttendance: params => request.get(`${baseUrl}/sky-location/device/list-vehicle-attendance`, { params }),

  // 爆破管理-->爆破月度统计分析
  getBlastMonthList: params => request.get(`${baseUrl}/sky-production/system/blastMonth/list`, { params }),
  getMonth: params => request.get(`${baseUrl}/sky-production/system/blastMonth/month`, { params }),

  // 爆破管理-->爆破年度统计分析
  getBlastYearList: params => request.get(`${baseUrl}/sky-production/system/blastMonth/yearList`, { params }),
  getYears: params => request.get(`${baseUrl}/sky-production/system/blastMonth/years`, { params }),

  // 爆破管理-->爆破材料费用明细
  getBlastDetailList: params => request.get(`${baseUrl}/sky-production/system/blastMaterialDetailed/lists`, { params }),

  // 爆破管理-->钻孔费用
  getPlate: () => request.get(`${baseUrl}/sky-production/system/plate/getplate`),
  getBlastMaterialList: params => request.get(`${baseUrl}/sky-production/system/blastMaterialDetailed/list`, { params }),
  getDrillList: params => request.get(`${baseUrl}/sky-production/system/drillHole/list`, { params }),
  getBlastMaterial: () => request.get(`${baseUrl}/sky-production/system/blastMaterialDetailed/getMaterial`),
  addBlastMaterial: data => request.post(`${baseUrl}/sky-production/system/blastMaterialDetailed/save`, data),
  updateBlastMaterial: data => request.post(`${baseUrl}/sky-production/system/blastMaterialDetailed/update`, data),
  deleteBlastMaterial: data => request.post(`${baseUrl}/sky-production/system/blastMaterialDetailed/remove`, qs.stringify(data)),

  // 超速设置
  getSpeedSetting: params => request.get(`${baseUrl}/sky-location/speed-alert-record/get-setting`, { params }),
  setSpeed: data => request.post(`${baseUrl}/sky-location/speed-alert-record/save-setting`, data),

  // 新智能调度
  getScheduleRecord: params => request.get(`${baseUrl}/sky-production/system/vehiclescheduling/vehicleSchedulingDOList`, { params }),
  getFreeCarData: () => request.get(`${baseUrl}/sky-production/system/vehiclescheduling/free`),
  getScheduleCenter: () => request.get(`${baseUrl}/sky-production/system/vehiclescheduling/DispatchingCenterList`),
  getScheduleStartList: () => request.get(`${baseUrl}/sky-production/system/appPlace/getstartlist`),
  getScheduleEndList: () => request.get(`${baseUrl}/sky-production/system/system/appPlace/getendlist`),
  getTicketList: params => request.get(`${baseUrl}/sky-production/system/appVehicleScheduling/ticketKindDOList`, { params }),
  excavatorScheduling: data => request.post(`${baseUrl}/sky-production/system/vehiclescheduling/carGroupScheduling`, data),
  dumperScheduling: data => request.post(`${baseUrl}/sky-production/system/vehiclescheduling/carScheduling`, data),

  // 人事通用方法
  getDeptTree: () => request.get(`${baseUrl}/sky-user/system/sysDept/tree`),

  // 人事系统--> 用户管理
  getUserInfo: params => request.get(`${baseUrl}/sky-user/sys/user/list`, { params }),
  deleteUserInfo: () => request.post(`${baseUrl}/sky-user/sys/user/remove`),
  getUserRole: () => request.get(`${baseUrl}/sky-user/sys/user/getRoles`),
  addUserInfo: data => request.post(`${baseUrl}/sky-user/sys/user/save`, qs.stringify(data)),
  updateUserInfo: data => request.post(`${baseUrl}/sky-user/sys/user/update`, qs.stringify(data)),

  // 公司管理
  getCompany: params => request.get(`${baseUrl}/sky-user/system/company/list`, { params }),
  addCompany: data => request.post(`${baseUrl}/sky-user/system/company/save`, qs.stringify(data)),
  getMenuGroup: params => request.get(`${baseUrl}/sky-user/system/menuGroup/getlist`, { params }),
  // 修改时授权
  updateCompany: data => request.post(`${baseUrl}/sky-user/system/authorizeRecord/save`, qs.stringify(data)),

  // 授权管理
  getAuthorize: params => request.get(`${baseUrl}/sky-user/system/authorizeRecord/list`, { params }),
  getCompanyUser: params => request.get(`${baseUrl}/sky-user/system/company/getlist`, { params }),
  addAuthorize: data => request.post(`${baseUrl}/sky-user/system/authorizeRecord/save`, qs.stringify(data)),
  updateAuthorize: data => request.post(`${baseUrl}/sky-user/system/authorizeRecord/update`, qs.stringify(data)),
  deleteAuthorize: data => request.post(`${baseUrl}/sky-user/system/authorizeRecord/remove`, qs.stringify(data)),
  deleteBatchAuthorize: data => request.post(`${baseUrl}/sky-user/system/authorizeRecord/batchRemove`, qs.stringify({ ids: data }, {
    arrayFormat: 'brackets',
  })),

  // 套餐管理
  getMenuGroupList: params => request.get(`${baseUrl}/sky-user/system/menuGroup/list`, { params }),

  // 角色管理
  getRoleList: params => request.get(`${baseUrl}/sky-user/sys/role/list`, { params }),
  getMenuTree: params => request.get(`${baseUrl}/sky-user/sys/menu/tree`, { params }),
  getRoleLevel: () => request.get(`${baseUrl}/sky-user/sys/role/getRemarkList`),
  addRole: data => request.post(`${baseUrl}/sky-user/sys/role/save`, qs.stringify(data)),
  deleteRole: data => request.post(`${baseUrl}/sky-user/sys/role/remove`, qs.stringify(data)),
  updateRole: data => request.post(`${baseUrl}/sky-user/sys/role/update`, qs.stringify(data)),

  // 项目部管理
  getDeptList: params => request.get(`${baseUrl}/sky-user/system/sysDept/list`, { params }),
  addDept: data => request.post(`${baseUrl}/sky-user/system/sysDept/save`, qs.stringify(data)),
  updateDept: data => request.post(`${baseUrl}/sky-user/system/sysDept/update`, qs.stringify(data)),
  deleteDept: data => request.post(`${baseUrl}/sky-user/system/sysDept/remove`, qs.stringify(data)),
  getCompanyInfo: () => request.get(`${baseUrl}/sky-user/system/sysDept/get_company`),

  // 人员调动
  getUserDept: params => request.get(`${baseUrl}/sky-user/system/userDept/list`, { params }),
  getUserByDept: params => request.get(`${baseUrl}/sky-user/sys/user/userByDeptIdlist`, { params }),
  getDeptName: () => request.get(`${baseUrl}/sky-user/system/userDept/getDeptName`),
  transferPerson: data => request.post(`${baseUrl}/sky-user/system/userDept/save`, data),
}
