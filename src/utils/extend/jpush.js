/**
 * jpush 初始化jpush监听
 * 统一全部跳转到消息中心
 */
function initJpush (router) {
  window.utils.native.initJPush(window.globalConfig.isDebug)
  document.addEventListener('jpush.openNotification', function (event) {
    let alertContent = event.aps.alert || event.alert
    // alert('1open notification:' + alertContent)
    window.utils.ui.toast(alertContent)
    router.push({name: 'notice'})
  }, false)
  // 应用程序处于前台时收到推送会触发该事件
  document.addEventListener('jpush.receiveNotification', function (event) {
    let alertContent = event.aps.alert || event.alert
    // alert('1open notification:' + alertContent)
    window.utils.ui.toast(alertContent)
    router.push({name: 'notice'})
  }, false)
  // 应用程序处于后台时收到推送会触发该事件
  document.addEventListener('jpush.backgroundNotification', function (event) {
    let alertContent = event.aps.alert || event.alert
    // alert('1open notification:' + alertContent)
    window.utils.ui.toast(alertContent)
    router.push({name: 'notice'})
  }, false)
  document.addEventListener('jpush.receiveMessage', function (event) {
    let alertContent = event.aps.alert || event.alert
    // alert('1open notification:' + alertContent)
    window.utils.ui.toast(alertContent)
    router.push({name: 'notice'})
  }, false)

  // 安卓返回按钮
  // document.addEventListener('backbutton', function () {
  //   window.history.back()
  // }, false)
}

const jpush = {
  initJpush
}
export default jpush
