<template>
  <div>
    <d-player :options="options" style="width:100vw"
              ref="player">
    </d-player>
  </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
export default {
  name: 'n22Video',
  props: {
    videoUrl: {
      type: String,
      default: ''
    },
    picUrl: {
      type: String,
      default: ''
    }
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
          pic: this.picUrl
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
  @import '../../../../node_modules/vue-dplayer/dist/vue-dplayer.css';
  // .dplayer-setting-icon,
  .dplayer-full-in-icon{
    display: none!important;
  }
  .zoomDialog{
    width:100%;
    height:100%;
  }
</style>
