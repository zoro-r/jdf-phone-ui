import addressData from '../data/districts'
// 获取省市区对应的中文
const addressUtils = {
  // 通过地址code获取中文
  getAddressOfCn: function (key = '0') {
    let returnValue = null
    outer: for (let i in addressData) {
      if (typeof addressData[i] == 'object') {
        for (let j in addressData[i]) {
          if (j == key) {
            returnValue = addressData[i][j]
            break outer
          }
        }
      } else if (i == key) {
        returnValue = addressData[i]
        break outer
      }
    }
    return returnValue
  }
}

export default addressUtils
