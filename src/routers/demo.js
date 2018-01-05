/*
 * @Author: jdf
 * @Date: 2018-01-04 15:14:45
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-05 14:29:45
 * @desc 测试模块
 */
export default [{
  name: 'demo',
  path: '/demo',
  component (resolve) {
    require.ensure([], () => resolve(require('../pages/demo/Demo.vue')), 'demo')
  },
  meta: {
    login: false
  }
}]
