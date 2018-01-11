/*
 * @Author: jdf
 * @Date: 2018-01-04 15:14:45
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-11 14:13:05
 * @desc 测试模块
 */
const demo = r => { require.ensure([], () => r(require('../pages/demo/Demo.vue')), 'demo') }
const n22Field = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-field.vue')), 'n22Field') }
const n22Scroll = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-scroll.vue')), 'n22Scroll') }
const n22Input = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-input.vue')), 'n22Input') }
const n22Address = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-address.vue')), 'n22Address') }
const n22Calendar = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-calendar.vue')), 'n22Calendar') }
const n22Switch = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-switch.vue')), 'n22Switch') }
const n22Zoom = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-zoom.vue')), 'n22Zoom') }
const n22Tab = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-tab.vue')), 'n22Tab') }
const n22DatePicker = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-datePicker.vue')), 'n22DatePicker') }
const n22Utils = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-utils.vue')), 'n22Utils') }

export default [{
  name: 'demo',
  path: '/demo',
  component: demo,
  meta: {
    login: false
  }
}, {
  name: 'n22Field',
  path: '/n22Field',
  component: n22Field
}, {
  name: 'n22Scroll',
  path: '/n22Scroll',
  component: n22Scroll
}, {
  name: 'n22Input',
  path: '/n22Input',
  component: n22Input
}, {
  name: 'n22Address',
  path: '/n22Address',
  component: n22Address
}, {
  name: 'n22Calendar',
  path: '/n22Calendar',
  component: n22Calendar
}, {
  name: 'n22Switch',
  path: '/n22Switch',
  component: n22Switch
}, {
  name: 'n22Zoom',
  path: '/n22Zoom',
  component: n22Zoom
}, {
  name: 'n22Tab',
  path: '/n22Tab',
  component: n22Tab
}, {
  name: 'n22DatePicker',
  path: '/n22DatePicker',
  component: n22DatePicker
}, {
  name: 'n22Utils',
  path: '/n22Utils',
  component: n22Utils
}]
