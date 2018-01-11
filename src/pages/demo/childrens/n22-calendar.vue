<template>
  <n22-page>
    <mt-header slot="header" :fixed="true" title="日历控件">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div slot="content">
      <div class="">
        <n22-calendar></n22-calendar>
        <br/><br/><br/>
        <mt-button type="primary" size="large" @click="sunbmit()">提交</mt-button>
      </div>
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
    }
  },
  methods: {
    /**
     * @name sunbmit
     */
    sunbmit () {

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
}
</style>
