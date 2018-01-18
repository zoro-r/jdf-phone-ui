<template>
  <div class="show_code_main">
      <n22-page class="first">
      <mt-header title="缩放" slot="header" :fixed="true">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content">
        <n22-zoom title="放大缩小" :dialog="true" :show.sync="showZoom">
          <mt-button @click="showZoom = !showZoom" type="primary" size="large">关闭</mt-button>
          <img style="width:100%;" src="http://uat-1253280931.cossh.myqcloud.com/rhwebchat/AJB00A/partic3.png">
        </n22-zoom>

        <br/>
        <!-- <div>
          {{value}}<br/>
          是否禁用：{{disabled}}
        </div> -->
        <div class="demo_page">
          <br/>
          <br/>
          <br/>
          <mt-button type="primary" size="large" @click="showZoom = !showZoom">点击展示</mt-button>
        </div>
      </div>
    </n22-page>
    <div class="secend">
        <n22-highlight lang="html">
          &lt;n22-zoom title="放大缩小" :dialog="true" :show.sync="showZoom"&gt;
        </n22-highlight>
        <br>
        <n22-highlight lang="javascript">
          // 显示
          @click="showZoom = !showZoom"
        </n22-highlight>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      showZoom: false,
      disabled: false,
      value: 'm'
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
