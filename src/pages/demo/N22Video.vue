<template>
  <n22-page>
    <mt-header title="视频播放" slot="header" :fixed="true" >
      <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
    </mt-header>

    <div slot="content"  class="show_code_main">
      <n22-video picUrl='http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
                 videoUrl ='http://pic.ibaotu.com/00/55/25/72Z888piCcTP.mp4'
                 ></n22-video>
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
      imgUrl: ''
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
