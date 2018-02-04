<template>
  <n22-page>
    <mt-header  slot="header" :fixed="true"  title="地图">
      <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
    </mt-header>

    <div slot="content"  class="show_code_main">
      <n22-map></n22-map>
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
      birthdate: '',
      disabled: false
    }
  },
  methods: {
    // 塞入默认值
    setValue () {
      this.birthdate = '2018-01-02'
    },
    // 选中
    choose (data) {
      console.log('返回数据---->', JSON.stringify(data))
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
