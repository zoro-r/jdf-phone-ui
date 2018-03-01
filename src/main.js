/*
 * @Author:chenjia
 * @Date: 2018-01-04 14:49:56
 * @Last Modified by: jdf
 * @Last Modified time: 2018-02-26 15:05:08
 */

window.globalConfig = {
  rootUrl: 'http://XXXXX/com.ifp.ipartner/', // 微信dat
  wechatUrl: '', // 微信安全域名
  isDebug: false, // 是否开启接口debug模式
  platform: 'web', // web、native、wechat、phoneWeb
  os: 'android', // 操作系统 ios:苹果操作系统 android:安卓系统 window:电脑
  timeout: 1000 * 60, // 默认http请求超时时间60秒
  animation: true,
  version: 'v1.0',
  loginType: 'extraExtCheck', // 登录方式--extraExtCheck
  from: 'iwechat', // header--from
  transfer: 'XXXXXXXXXXXX', // 接口数据交互加密key
  comId: 'XXXXXX' // 保险公司编码--保险公司Id
}
import envir from './utils/environment'
// 自动识别环境
window.globalConfig = Object.assign(window.globalConfig, envir.init())
console.log('项目平台识别-------platform', window.globalConfig.platform, '操作系统---------os', window.globalConfig.os)
// 初始化系统框架信息 *****************************************************************************
import Vue from 'vue'
import vueScrollBehavior from './../static/lib/scroll/vue-scroll-behavior'
import App from './common/App'
import store from './vuex/store'
import router from './routers'
import MintUI from 'mint-ui'
import N22UI from './common'
import 'mint-ui/lib/style.css'
import '@/assets/css/main.scss'
import '@/filters/globalFilter.js'
// 引入图标库
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
// globally (in your main .js file)
Vue.component('icon', Icon)
// 引入滑动组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import './../static/lib/swiper/swiper.animate1.0.2.min.js'
Vue.use(VueAwesomeSwiper)
// 引入动画
import 'animate.css'

// 导航插件(保存游览历史的页面数据)
import Navigation from 'vue-navigation'
// 保存位置插件(返回时候保持页面滚动位置)
import utils from './utils'
// 引入点击事件优化
// import FastClick from 'fastclick'
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body)
//   }, false)
// }
// *****************************************************************************
window.utils = utils
// ************************************扩展vue类-start***************************
// Vue.prototype.utils = utils // 绑定utils 调用方法 this.utils
// ************************************结束扩展-end******************************
// mintUi
Vue.use(MintUI)
// 使用自定义组件
Vue.use(N22UI)

Vue.config.productionTip = false
Vue.use(Navigation, {
  router,
  store,
  moduleName: 'policy',
  keyName: 'RH'
})

// 根据平台使用滚动元素
let scrollOpt = {
  router: router,
  // 设置忽略的路由
  ignore: [/\/customer/, /\/dateManageOwn/]
  // leaveActiveClass: 'slide-out-right-enter-active', // 设置动画
  // scrollClass: 'scroll_content' // 设置滚动元素的class
}
if (window.globalConfig.platform == 'native') {
  scrollOpt.leaveActiveClass = 'slide-out-right-enter-active'
  scrollOpt.scrollClass = 'scroll_content'
}
Vue.use(vueScrollBehavior, scrollOpt)

// 设置全局参数 方法或者变量
Vue.mixin({
  data () {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
      // 定义常量 用于页面判断 @待修改
      os: window.navigator.platform === 'iPhone' ? 'ios' : 'android'
    }
  },
  methods: {
    go (url) {
      this.$router.push(url)
    },
    back (url) {
      window.history.back()
    }
  }
})

// ****************框架启动Start****************

let vm = {
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
}
// 移动端组件****************start****************-
if (window.globalConfig.platform === 'native') {
  document.addEventListener('deviceready', function () {
    console.log('deviceready')
    // 隐藏导航
    window.navigator.splashscreen.hide()
    // 设置顶部bar
    window.StatusBar.styleDefault()
    window.StatusBar.styleLightContent()
    // Keyboard.shrinkView(true)
    // cordova.plugins.Keyboard.disableScroll(false)
    // 隐藏键盘 accessoryBar
    // window.Keyboard.hideFormAccessoryBar(true)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
      window.cordova.plugins.Keyboard.disableScroll(true)
    }
    // Keyboard.disableScrollingInShrinkView(false)
    // Keyboard.automaticScrollToTopOnHiding = true
    new Vue(vm)
  }, false)
} else {
  new Vue(vm)
}
