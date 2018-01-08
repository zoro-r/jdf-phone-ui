/*
 * @Author: jdf
 * @Date: 2018-01-04 15:14:45
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-08 14:30:33
 * @desc 测试模块
 */
const demo = r => { require.ensure([], () => r(require('../pages/demo/Demo.vue')), 'demo') }
const n22Field = r => { require.ensure([], () => r(require('../pages/demo/childrens/n22-field.vue')), 'n22Field') }
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
}]
