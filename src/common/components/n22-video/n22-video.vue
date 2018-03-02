<template>
  <div class="n22_video">
    <div v-show="showModal" class="video_modal" @click="playVideo">
      <img class="play" src="./assets/play.png" alt="">
    </div>
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
    },
    currentTime: {
      type: Number,
      default: 0
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
          pic: this.picUrl,
          currentTime: this.currentTime
        },
        autoplay: false
      },
      videoEl: {},
      showModal: true
    }
  },
  methods: {
    /**
     * @name 开始视频
     */
    playVideo () {
      this.showModal = false
      this.videoEl.play()
    },
    /**
     * @name 视频时间跟新
     */
    ontimeupdate (event) {
      this.showModal = false
      this.currentTime = this.videoEl.currentTime
    }
  },
  watch: {
  },
  mounted () {
    this.videoEl = this.$refs.player.dp
    // this.videoEl.fullScreen.request('browser')
    // // 时间更新事件
    this.videoEl.ontimeupdate = this.ontimeupdate
    this.videoEl.on('pause', () => {
      this.showModal = true
    })
    this.videoEl.video.setAttribute('webkit-playsinline', 'webkit-playsinline')
  }
}
</script>
<style lang='scss'>
.n22_video{
  @import '../../../../node_modules/vue-dplayer/dist/vue-dplayer.css';

  position: relative;
  .dplayer-full-in-icon{
    pointer-events: none;
    opacity: 0;
  }
  .dplayer-setting{
    pointer-events: none;
    opacity: 0;
  }
  .video_modal{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.2);
    .play{
      width: 80px;
    }
  }
}
</style>
