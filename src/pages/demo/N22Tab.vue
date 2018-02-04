<template>
  <n22-page>
      <mt-header title="Tab控件" slot="header" :fixed="true">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content"  class="show_code_main">
        <div class="first">
        <n22-tab :tabs = "tabs" :tabIndex.sync = "tabIndex">
        </n22-tab>
      </div>
       <div class="secend">

        <n22-highlight lang="html">
          &lt;n22-tab :tabs = "tabs" :tabIndex.sync = "tabIndex"&gt;&lt;/n22-tab&gt;
        </n22-highlight>
        <br>
        <n22-highlight lang="javascript">
tabs: ['第一列', '第二列', '第三列'],
tabIndex: 0
        </n22-highlight>
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
      tabs: ['第一列', '第二列', '第三列'],
      tabIndex: 0
    }
  },
  methods: {
    // 塞入默认值
    setValue () {
      this.value = this.value == 'f' ? 'm' : 'f'
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
