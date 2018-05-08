/*
 * @Author: jdf
 * @Date: 2018-01-04 16:18:23
 * @Last Modified by: jdf
 * @Last Modified time: 2018-05-08 13:49:09
 * @desc 自定义组件集合
 */
// 引入组件
import N22Field from './components/n22-field'
import N22Address from './components/n22-address'
import N22Calendar from './components/n22-calendar'
import N22Page from './components/n22-page'
import N22Tab from './components/n22-tab'
import N22Zoom from './components/n22-zoom'
import n22Switch from './components/n22-switch'
import n22Input from './components/n22-input'
import N22DatePicker from './components/n22-date-picker'
import N22Highlight from './components/n22-highlight'
import N22Map from './components/n22-map'
import N22Touch from './components/n22-touch'
import N22Video from './components/n22-video'
import N22CellSwipe from './components/n22-cell-swipe'
import N22Picker from './components/n22-picker'
import N22Nation from './components/n22-nation'

// 定义组件集合
const components = {
  N22Field,
  N22Address,
  N22Calendar,
  N22Page,
  N22Tab,
  N22Zoom,
  n22Switch,
  n22Input,
  N22DatePicker,
  N22Highlight,
  N22Map,
  N22Touch,
  N22Video,
  N22CellSwipe,
  N22Picker,
  N22Nation
}

// 初始化组件
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// 当全局引入的时候执行（eg:vue.use(N22UI)）
if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
// 导出
components.install = install
export default components
