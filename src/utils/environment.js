// 判断是否为电脑 @todo
function isPC () {
  var userAgentInfo = navigator.userAgent
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 启动函数
const environment = {
  /**
   * @name 启动函数
   * @return {platform 平台,os 操作系统}
   * @desc 初始化平台信息并设置最外层css
   */
  init: function () {
    // if (window.globalConfig.isDebug === true) return {}
    console.log('项目平台----------->start')
    let obj = {platform: '', os: 'ios'}
// 判断是安卓还是ios平台
    let userAgentInfo = navigator.userAgent
    if (userAgentInfo.indexOf('Android') >= 0 || userAgentInfo.indexOf('SymbianOS') >= 0) {
      obj.os = 'android'
    }

    // 如果为调试模式 则不自动识别环境
    // 判断是否为微信平台
    let ua = window.navigator.userAgent.toLowerCase()
    let isWx = ua.match(/MicroMessenger/i) == 'micromessenger'
    if (isWx) {
      obj.platform = 'wechat'
    } else if (isPC()) {
      // 判断是否为电脑
      obj.platform = 'web'
      obj.os = 'window'
    } else {
      obj.platform = window.cordova ? 'native' : 'phoneWeb'
      // obj.platform = 'native'
      // obj.os = 'ios'
      if (obj.os === 'ios' && obj.platform === 'native') {
        // 增加键盘事件
        // let str = '<script src="./keyboard.min.js"></script>'
        // document.write(str)
        // require('../../static/lib/keyboard/keyboard.js')
      }
    }
    // obj.os = 'android'
    // 增加平台样式
    document.body.classList.add('platform-' + obj.os)
    document.body.classList.add(obj.platform)
    console.log('项目平台----------->', JSON.stringify(obj))
    return obj
  }
}

export default environment
