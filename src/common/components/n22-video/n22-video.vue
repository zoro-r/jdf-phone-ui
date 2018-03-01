<template>
  <div>
   <!-- <video ref="video" width="100%"  >
    <source  src="http://ubmcvideo.baidustatic.com/media/v1/0f000FInh8pK0dcp3sJq86.mp4"/>
   </video> -->
    <d-player :options="options" style="width:100vw"
              ref="player">
    </d-player>
  </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
import '../../../../node_modules/vue-dplayer/dist/vue-dplayer.css'
export default {
  name: 'n22Video',
  props: {
    videoUrl: ''
  },
  components: {
    'd-player': VueDPlayer
  },
  data () {
    return {
      options: {
        screenshot: true,
        video: {
          url: this.videoUrl,
          // url: 'http://153.37.232.153/vhot2.qqvideo.tc.qq.com/AtBKDeSn9IYKgcBgFxyBSwU23oVh4LcAyXwQuKE3BgLk/l1334kqrxlg.m701.mp4?vkey=EF1051779B6098A209CF5BEE4396FACC0BD5759E47E695E5CD7B6DDB5A2811645010EAC0F61CF1D03ABC5627FF20D2DB9B55819FD5CCB46EAAC5D11CB35E339C58B1ADB2E56E55DB0FA5F1104535147FC6973823BA243FFC0E260E2FA85ACD48961B585DEF9DB0694AA818F32B323EDE25D27ABF8A4DDE01&br=29&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=2f3604b81d13cf94ad63af34dcc8860a',
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
        },
        autoplay: false
      },
      videoEl: {},
      showDialog: null,
      currentTime: 0,
      duration: 0
    }
  },
  methods: {
    /**
     * @name 开始视频
     */
    playVideo () {
      this.videoEl.play()
    },
    /**
     * @name 暂停/结束视频
     */
    pauseVide () {
      this.videoEl.pause()
    },
    /**
     * @name 快进
     */
    forwardVideo () {
      this.videoEl.currentTime += 5
    },
    /**
     * @name 快退
     */
    rewindVideo () {
      this.videoEl.currentTime -= 5
    },
    /**
     * @name 全屏
     */
    fullScrenn () {
      console.log('全屏')
    },
    /**
     * @name 视频时间跟新
     */
    ontimeupdate (event) {
      this.currentTime = this.videoEl.currentTime
      this.duration = this.videoEl.duration
    }
  },
  watch: {
  },
  mounted () {
    this.videoEl = this.$refs.player.dp
    // this.playVideo()
    // this.videoEl.fullScreen.request('browser')
    // // 时间更新事件
    // this.videoEl.ontimeupdate = this.ontimeupdate
  }
}
</script>
<style lang='scss'>
  // .dplayer-setting-icon,
  .dplayer-full-in-icon{
    display: none!important;
  }
  .zoomDialog{
    width:100%;
    height:100%;
  }
</style>
