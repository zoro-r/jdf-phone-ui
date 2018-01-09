/*
 * @Author: jdf
 * @Date: 2018-01-04 15:14:45
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-08 15:26:58
 * @desc 测试模块
 */
const demo = r => { require.ensure([], () => r(require('../pages/demo/Demo.vue')), 'demo') }
const n22Field = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-field.vue')), 'n22Field') }
const n22Scroll = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-scroll.vue')), 'n22Scroll') }
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
}]
