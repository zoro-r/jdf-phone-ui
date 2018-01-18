<template>
  <div class="show_code_main">
     <n22-page style="flex:1;min-width:375px;max-width:500px">
      <mt-header title="微信交互" slot="header" :fixed="true" >
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content">
        <div>
          <img :src="'data:image/jpeg;base64,' + imgUrl" style="width:50px;height:50px" />
        </div>
        <div class="demo_page">
          <div v-for="(item, index) in nativeList" :key="index">
            <br/>
            <mt-button type="primary" size="large" @click="takeWechat(item)">{{item.name}}</mt-button>
          </div>
        </div>
      </div>
    </n22-page>
    <!-- 代码展示区 -->
    <div style="flex:1.6;z-index:10" >
      <n22-highlight lang="javascript">
        takeWechat (item) {
          switch (item.id) {
            case 1:
              // 获取照片 --摄像头
              window.utils.native.getPicture().then(res => {
                console.log(res)
                this.imgUrl = res
              }, error => {
                console.log('----', error)
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
                alert('We got a barcode\n' +
              'Result: ' + result.text + '\n' +
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
              // QQ分享 好友
              window.utils.native.wechatShare({scene: 0})
              // .then(result => {
              //   alert(JSON.stringify(result))
              // }, error => {
              //   alert(JSON.stringify(error))
              // })
              break
            case 8:
              // QQ分享 朋友圈
              window.utils.native.wechatShare({scene: 1})
              // .then(result => {
              //   alert(JSON.stringify(result))
              // }, error => {
              //   alert(JSON.stringify(error))
              // })
              break
            default:
              break
          }
        }
      </n22-highlight>
    </div>
  </div>
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
        {name: '菜单配置', id: 1},
        {name: '配置分享好友', id: 2},
        {name: '配置分享朋友圈', id: 3},
        {name: '获取图片', id: 4},
        {name: '调用扫一扫', id: 5},
        {name: '获取用户信息', id: 6}
      ]
    }
  },
  methods: {
    takeWechat (item) {
      switch (item.id) {
        case 1:
          // 获取照片 --摄像头
          window.utils.native.getPicture().then(res => {
            console.log(res)
            this.imgUrl = res
          }, error => {
            console.log('----', error)
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
            alert('We got a barcode\n' +
          'Result: ' + result.text + '\n' +
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
          // QQ分享 好友
          window.utils.native.wechatShare({scene: 0})
          // .then(result => {
          //   alert(JSON.stringify(result))
          // }, error => {
          //   alert(JSON.stringify(error))
          // })
          break
        case 8:
          // QQ分享 朋友圈
          window.utils.native.wechatShare({scene: 1})
          // .then(result => {
          //   alert(JSON.stringify(result))
          // }, error => {
          //   alert(JSON.stringify(error))
          // })
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
