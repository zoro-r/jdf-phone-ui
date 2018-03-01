<template>
  <n22-page>
    <mt-header title="视频播放" slot="header" :fixed="true" >
      <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
    </mt-header>

    <div slot="content"  class="show_code_main">
      <n22-video videoUrl ='http://153.37.232.153/vhot2.qqvideo.tc.qq.com/AtBKDeSn9IYKgcBgFxyBSwU23oVh4LcAyXwQuKE3BgLk/l1334kqrxlg.m701.mp4?vkey=EF1051779B6098A209CF5BEE4396FACC0BD5759E47E695E5CD7B6DDB5A2811645010EAC0F61CF1D03ABC5627FF20D2DB9B55819FD5CCB46EAAC5D11CB35E339C58B1ADB2E56E55DB0FA5F1104535147FC6973823BA243FFC0E260E2FA85ACD48961B585DEF9DB0694AA818F32B323EDE25D27ABF8A4DDE01&br=29&platform=2&fmt=auto&level=0&sdtfrom=v1010&guid=2f3604b81d13cf94ad63af34dcc8860a'></n22-video>
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
