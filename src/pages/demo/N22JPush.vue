<template>
  <n22-page>
      <mt-header title="极光推送" slot="header" :fixed="true">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content">
        <br/>
        <mt-button type="primary" size="large" @click="takeNative(1)">初始化极光推送</mt-button>
        <br/>
        <mt-button type="primary" size="large" @click="takeNative(2)">停止推送</mt-button>
        <br/>
        <mt-button type="primary" size="large" @click="takeNative(3)">判断是否操作成功</mt-button>
        <br/>
        <mt-button type="primary" size="large" @click="takeNative(4)">获取 RegistrationID</mt-button>
        <br/>
        <!-- <mt-button type="primary" size="large" @click="takeNative(5)">清除tag</mt-button> -->
        <br/>
        <mt-button type="primary" size="large" @click="takeNative(5)">清除角标</mt-button>
        <br/>
      </div>
  </n22-page>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      showZoom: false,
      disabled: false,
      value: 'm'
    }
  },
  methods: {
    // 调用极光推送
    takeNative (type) {
      switch (type) {
        case 1:
          window.utils.native.initJPush(true)
          break
        case 2:
          window.utils.native.stopPush()
          break
        case 3:
          window.utils.native.isPushStopped()
          break
        case 4:
          window.utils.native.getRegistrationID()
          break
        case 5:
          window.utils.native.setApplicationIconBadgeNumber(0)
          break
        default:
          break
      }
    }
  },
  mounted () {
    // 启动或唤醒应用程序时会触发该事件
    document.addEventListener('jpush.openNotification', function (event) {
      var alertContent = event.aps.alert
      alert('open notification:' + alertContent)
    }, false)
    // 应用程序处于前台时收到推送会触发该事件
    document.addEventListener('jpush.receiveNotification', function (event) {
      var alertContent = event.aps.alert
      alert('open Notification:' + alertContent)
    }, false)
    // 应用程序处于后台时收到推送会触发该事件
    document.addEventListener('jpush.backgroundNotification', function (event) {
      var alertContent = event.aps.alert
      alert('open Notification:' + alertContent)
    }, false)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.demo_page{
  padding: 10px;
  font-size: 1.4rem;
}
</style>
