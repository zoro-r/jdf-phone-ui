<template>
  <n22-page>
      <mt-header title="版本管理" slot="header" :fixed="true" >
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content"  class="show_code_main">
        <div style="flex:1;min-width:300px;max-width:500px">
        <div class="demo_page">
          <div v-for="(item, index) in nativeList" :key="index">
            <br/>
            <mt-button type="primary" size="large" @click="takeNative(item)">{{item.name}}</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 代码展示区 -->
  </n22-page>
</template>

<script>
// import wx from '../../utils/wx'
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      imgUrl: '',
      nativeList: [
        {name: '下载', id: 1}
      ]
    }
  },
  methods: {
    takeNative (item) {
      switch (item.id) {
        case 1:
          console.log('下载开始')
          window.cordova.plugins.Download.coolMethod('555', function (ret) {
            console.log('下载成功')
          }, function (err) {
            console.log('下载失败')
          })
          break
        case 2:
          // 获取照片 --相册
          window.utils.native.getPicture({sourceType: 0}).then(res => {
            console.log(res)
            this.imgUrl = res
          }, error => {
            console.log('----', error)
          })
          break
        case 3:
          // 获取照片 --时刻
          window.utils.native.getPicture({sourceType: 2}).then(res => {
            console.log(res)
            this.imgUrl = res
          }, error => {
            console.log('----', error)
          })
          break
        case 4:
          // 扫一扫
          window.utils.native.scan().then(result => {
            alert(typeof result.text)
            alert(result.text['classId'])
            alert('We got a barcode\n' +
          'Result: ' + result.text['classId'] + '\n' +
          'Format: ' + result.format + '\n' +
          'Cancelled: ' + result.cancelled)
          }, error => {
            alert(error)
          })
          break
        case 5:
          // 联系人
          window.utils.native.pickContact().then(result => {
            alert(JSON.stringify(result))
          }, error => {
            alert(JSON.stringify(error))
          })
          break
        case 6:
          window.utils.native.findContact()
          // .then(result => {
          //   alert(JSON.stringify(result))
          // }, error => {
          //   alert(JSON.stringify(error))
          // })
          break
        case 7:
          // 微信分享 好友
          window.utils.native.wechatShare({scene: 0})
          // .then(result => {
          //   alert(JSON.stringify(result))
          // }, error => {
          //   alert(JSON.stringify(error))
          // })
          break
        case 8:
          // 微信分享 朋友圈
          window.utils.native.wechatShare({scene: 1})
          // .then(result => {
          //   alert(JSON.stringify(result))
          // }, error => {
          //   alert(JSON.stringify(error))
          // })
          break
        case 9:
          // 微信授权登陆
          window.utils.native.wechatAuth()
          // .then(result => {
          //   alert(JSON.stringify(result))
          // }, error => {
          //   alert(JSON.stringify(error))
          // })
          break
        case 10:
          // 重新启动
          // window.navigator.splashscreen.show()
          window.location.reload()
          break
        default:
          break
      }
    }

  },
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.demo_page{
  padding: 10px;
  font-size: 1.4rem;
  .mint-popup-1 {
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    transform: translate(-50%, 0);
    h1 {
      font-size: 20px;
      color: #26a2ff;
    }
    p {
      margin-bottom: 10px;
    }
    &::before {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid white;
      content: '';
      position: absolute;
      top: -15px;
      right: 50px;
    }
  }
}
</style>
