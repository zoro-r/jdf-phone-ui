<template>
  <n22-page >
      <mt-header title="微信交互" slot="header" :fixed="true" >
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content" class="show_code_main">
        <div style="flex:1;min-width:300px;max-width:500px">
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
    <!-- 代码展示区 -->
    <div style="flex:1.6;z-index:10" >
      <n22-highlight lang="javascript">
        takeWechat (item) {
            switch (item.id) {
              case 1:
                // 配置菜单
                window.utils.wechat.wxConfig()
                break
              case 2:
                // 分享给好友
                window.utils.native.onMenuShareAppMessage()
                break
              case 3:
                // 分享给好友
                window.utils.native.onMenuShareTimeline()
                break
              case 4:
                // 分享到QQ
                window.utils.native.onMenuShareQQ()
                break
              case 5:
                // 分享到QQ空间
                window.utils.native.onMenuShareQZone()
                break
              case 6:
                // 分享到腾讯微博
                window.utils.native.onMenuShareWeibo()
                break
              case 7:
                // 获取图片
                window.utils.native.previewImage()
                break
              case 8:
                // 调用扫一扫
                window.utils.native.wxHideMenuList()
                break
              case 9:
                // 获取用户信息
                window.utils.native.wxUserInfo()
                break
              case 10:
                // 关闭窗口
                window.utils.native.closeWindow()
                break
              default:
                break
            }
          }
        </n22-highlight>
    </div>
   </div>
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
        {name: '菜单配置', id: 1},
        {name: '配置分享好友', id: 2},
        {name: '配置分享朋友圈', id: 3},
        {name: '分享到QQ', id: 4},
        {name: '分享到QQ空间', id: 5},
        {name: '分享到腾讯微博', id: 6},
        {name: '获取图片', id: 7},
        {name: '调用扫一扫', id: 8},
        {name: '获取用户信息', id: 9},
        {name: '关闭窗口', id: 10}
      ]
    }
  },
  methods: {
    takeWechat (item) {
      switch (item.id) {
        case 1:
          // 配置菜单
          window.utils.wechat.wxConfig()
          break
        case 2:
          // 分享给好友
          window.utils.native.onMenuShareAppMessage()
          break
        case 3:
          // 分享给好友
          window.utils.native.onMenuShareTimeline()
          break
        case 4:
          // 分享到QQ
          window.utils.native.onMenuShareQQ()
          break
        case 5:
          // 分享到QQ空间
          window.utils.native.onMenuShareQZone()
          break
        case 6:
          // 分享到腾讯微博
          window.utils.native.onMenuShareWeibo()
          break
        case 7:
          // 获取图片
          window.utils.native.previewImage()
          break
        case 8:
          // 调用扫一扫
          window.utils.native.wxHideMenuList()
          break
        case 9:
          // 获取用户信息
          window.utils.native.wxUserInfo()
          break
        case 10:
          // 关闭窗口
          window.utils.native.closeWindow()
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
