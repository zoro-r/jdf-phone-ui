<template>
  <n22-page>
    <div slot="content"  class="show_code_main">
      <mt-header title=""  :fixed="true" style="background: rgba(1,1,1,0);border:none">
        <mt-button @click.native = "back"  slot="left" icon="back" style="color:black"></mt-button>
      </mt-header>
      <n22-video picUrl='http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
                 videoUrl ='http://pic.ibaotu.com/00/55/25/72Z888piCcTP.mp4'
                 ></n22-video>


      <div style="height:40px;background:red;color:white">
        <div>dsadasdsa</div>
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
