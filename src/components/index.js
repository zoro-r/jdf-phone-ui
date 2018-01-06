/*
 * @Author: jdf
 * @Date: 2018-01-04 16:18:23
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-06 21:14:32
 * @desc 自定义组件集合
 */
// 引入组件
import BaseField from './common/baseField'
import BaseAddress from './common/baseAddress'
import BaseCalendar from './common/baseCalendar'
import Page from './common/page'
import Tab from './common/tab'
import Zoom from './common/zoom'

// 定义组件集合
const components = {
  BaseField,
  BaseAddress,
  BaseCalendar,
  Page,
  Tab,
  Zoom
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
  BaseCalendar,
  Page,
  Tab,
  Zoom
}
