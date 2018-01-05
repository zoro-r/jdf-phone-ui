/*
 * @Author: jdf
 * @Date: 2018-01-04 16:18:23
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-05 14:40:42
 * @desc 自定义组件集合
 */
// 引入组件
import BaseField from './common/baseField'
import BaseAddress from './common/baseAddress'
import BaseCalendar from './common/baseCalendar'

// 定义组件集合
const components = {
  BaseField,
  BaseAddress,
  BaseCalendar
}

// 初始化组件
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// 当全局引入的时候执行（eg:vue.use(N22UI)）
if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
  install,
  BaseField,
  BaseAddress,
  BaseCalendar
}