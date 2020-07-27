export default {
  positiveInteger: new RegExp(/^[+]{0,1}(\d+)$/), // 正整数
  noZeroInteger: new RegExp(/^[0-9]*[1-9][0-9]*$/), // 非0正整数
}
