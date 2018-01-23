/*
 * @Author: jdf
 * @Date: 2018-01-04 15:14:45
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-23 14:30:24
 * @desc 测试模块
 */
const demo = r => { require.ensure([], () => r(require('../pages/demo/Demo.vue')), 'demo') }
const demoMain = r => { require.ensure([], () => r(require('../pages/demo/DemoMain.vue')), 'demoMain') }
const n22Field = r => { require.ensure([], () => r(require('../pages/demo/N22Field.vue')), 'n22Field') }
const n22Scroll = r => { require.ensure([], () => r(require('../pages/demo/N22Scroll.vue')), 'n22Scroll') }
const n22Input = r => { require.ensure([], () => r(require('../pages/demo/N22Input.vue')), 'n22Input') }
const n22Address = r => { require.ensure([], () => r(require('../pages/demo/N22Address.vue')), 'n22Address') }
const n22Calendar = r => { require.ensure([], () => r(require('../pages/demo/N22Calendar.vue')), 'n22Calendar') }
const n22Switch = r => { require.ensure([], () => r(require('../pages/demo/N22Switch.vue')), 'n22Switch') }
const n22Zoom = r => { require.ensure([], () => r(require('../pages/demo/N22Zoom.vue')), 'n22Zoom') }
const n22Tab = r => { require.ensure([], () => r(require('../pages/demo/N22Tab.vue')), 'n22Tab') }
const n22DatePicker = r => { require.ensure([], () => r(require('../pages/demo/N22DatePicker.vue')), 'n22DatePicker') }
const n22Utils = r => { require.ensure([], () => r(require('../pages/demo/N22Utils.vue')), 'n22Utils') }
const n22Touch = r => { require.ensure([], () => r(require('../pages/demo/N22Touch.vue')), 'n22Touch') }
const n22ScrollTemp = r => { require.ensure([], () => r(require('../pages/demo/N22ScrollTemp.vue')), 'n22ScrollTemp') }
const n22Native = r => { require.ensure([], () => r(require('../pages/demo/N22Native.vue')), 'n22Native') }
const n22Highlight = r => { require.ensure([], () => r(require('../pages/demo/N22Highlight.vue')), 'n22Highlight') }
const n22Template = r => { require.ensure([], () => r(require('../pages/demo/N22Template.vue')), 'n22Template') }
const n22WeChat = r => { require.ensure([], () => r(require('../pages/demo/N22WeChat.vue')), 'n22WeChat') }
const n22Animate = r => { require.ensure([], () => r(require('../pages/demo/N22Aninmate.vue')), 'n22Animate') }

// 每个模块定义父路由 引入公共样式方法...
export default [{
  name: 'demo',
  path: '/demo',
  component: demo,
  meta: {
    login: false
  },
  children: [
    {
      name: 'demoMain',
      path: '/demoMain',
      component: demoMain,
      meta: {
        login: false
      }
    },
    {
      name: 'n22Field',
      path: '/n22Field',
      component: n22Field,
      meta: {
        login: false
      }
    }, {
      name: 'n22Scroll',
      path: '/n22Scroll',
      component: n22Scroll,
      meta: {
        login: false
      }
    }, {
      name: 'n22Input',
      path: '/n22Input',
      component: n22Input,
      meta: {
        login: false
      }
    }, {
      name: 'n22Address',
      path: '/n22Address',
      component: n22Address,
      meta: {
        login: false
      }
    }, {
      name: 'n22Calendar',
      path: '/n22Calendar',
      component: n22Calendar,
      meta: {
        login: false
      }
    }, {
      name: 'n22Switch',
      path: '/n22Switch',
      component: n22Switch,
      meta: {
        login: false
      }
    }, {
      name: 'n22Zoom',
      path: '/n22Zoom',
      component: n22Zoom,
      meta: {
        login: false
      }
    }, {
      name: 'n22Tab',
      path: '/n22Tab',
      component: n22Tab,
      meta: {
        login: false
      }
    }, {
      name: 'n22DatePicker',
      path: '/n22DatePicker',
      component: n22DatePicker,
      meta: {
        login: false
      }
    }, {
      name: 'n22Utils',
      path: '/n22Utils',
      component: n22Utils,
      meta: {
        login: false
      }
    }, {
      name: 'n22Touch',
      path: '/n22Touch',
      component: n22Touch,
      meta: {
        login: false
      }
    }, {
      name: 'n22ScrollTemp',
      path: '/n22ScrollTemp',
      component: n22ScrollTemp,
      meta: {
        login: false
      }
    }, {
      name: 'n22Native',
      path: '/n22Native',
      component: n22Native,
      meta: {
        login: false
      }
    }, {
      name: 'n22Highlight',
      path: '/n22Highlight',
      component: n22Highlight,
      meta: {
        login: false
      }
    }, {
      name: 'n22Template',
      path: '/n22Template',
      component: n22Template,
      meta: {
        login: false
      }
    }, {
      name: 'n22WeChat',
      path: '/n22WeChat',
      component: n22WeChat,
      meta: {
        login: false
      }
    }, {
      name: 'n22Animate',
      path: '/n22Animate',
      component: n22Animate,
      meta: {
        login: false
      }
    }
  ]
}]
