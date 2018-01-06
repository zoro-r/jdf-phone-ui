import Vue from 'vue'
import codeData from '../assets/data/codeData'
import addressData from '../assets/data/addressData' // 地址码表Json
import utils from '../utils/index'
// import format from '../utils/format'

let allMap = {}
for (var key in codeData) {
  if (!allMap[key]) allMap[key] = {}
  for (var key_ in codeData[key]) {
    allMap[key][codeData[key][key_].code] = codeData[key][key_].desc
  }
}

/**
 * 全局公共过滤器 使用:{{'0' |commonFilter('relationFilter') }}
 * value 值
 * type 类型 对应码表(codeData)中的参数
 * default1 默认值
 */
Vue.filter('commonFilter', (value, type, default1) => {
  return allMap[type][value] || default1 || '——'
})

// 时间戳过滤
Vue.filter('dateFilter', (value) => {
  let tempDate = new Date(value)
  let tempMonth = (tempDate.getMonth() + 1) < 10 ? '0' + (tempDate.getMonth() + 1) : (tempDate.getMonth() + 1)
  let tempDay = tempDate.getDate() < 10 ? '0' + tempDate.getDate() : tempDate.getDate()
  let tempHours = tempDate.getHours() < 10 ? '0' + tempDate.getHours() : tempDate.getHours()
  let tempMinutes = tempDate.getMinutes() < 10 ? '0' + tempDate.getMinutes() : tempDate.getMinutes()
  let tempSeconds = tempDate.getSeconds() < 10 ? '0' + tempDate.getSeconds() : tempDate.getSeconds()
  return tempDate.getFullYear() + '-' + tempMonth + '-' + tempDay + ' ' + tempHours + ':' + tempMinutes + ':' + tempSeconds
})

// 地址过滤
Vue.filter('addressFilter', (value) => {
  return addressData[value] || '——'
})

// 小数过滤 @param digit:保留小数点位数，默认两位
// <<<<<<< HEAD
// Vue.filter('toFixedFilter', (value, digit = 2) => {
//   return new Number(value).toFixed(digit)
// =======
Vue.filter('toFixedFilter', (value, digit = 2) => {
  return isNaN(value) ? value : (new Number(value).toFixed(digit))
})

// 保障期限过滤器
Vue.filter('insuYearFilter', (value, startTime) => {
  let startDate
  if (/^[0-9]+$/.test(startTime)) {
    startTime = parseFloat(startTime)
    startDate = new Date(startTime)
  } else {
    startDate = utils.format.parseDate((startTime))
  }
  let timeStr = utils.format.toDate(startDate, 'yyyy-MM-dd')
  let timeList = timeStr.split('-')
  let tempDate = utils.format.parseDate((parseInt(timeList[0]) + parseInt(value)) + '-' + timeList[1] + '-' + timeList[2])
  let endDate = tempDate.setDate(tempDate.getDate() - 1)
  return timeStr + ' 至 ' + utils.format.toDate(new Date(endDate), 'yyyy-MM-dd')
})

Vue.filter('dateFilter', (value, formate = 'yyyy-MM-dd') => {
  return utils.format.toDate(value, formate)
})

// 根据出生日期 得到周岁年龄
Vue.filter('birthdayToAge', (value) => {
  return utils.help.birthdayToAge(value) + '岁'
})

// 职业过滤器
Vue.filter('profession', (value) => {
  return utils.help.getProfession(value)
})

// 在产品属性里面筛选
Vue.filter('productParamFilter', (value, list, name) => {
  let returnValue = null
  outer:for (let i in list) {
    if (list[i].attCode == name) {
      for (let j in list[i].attValueList) {
        if (list[i].attValueList[j].code == value) {
          returnValue = list[i].attValueList[j].desc
          break outer
        }
      }
    }
  }
  return returnValue
})
