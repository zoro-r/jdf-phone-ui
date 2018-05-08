<template>
  <n22-page>
      <mt-header  slot="header" :fixed="true" title="输入验证组件">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content"  class="show_code_main">
         <div class="first">
        <br/>
        <div class="demo_page">
          <n22-field :label="'必填项验证'" need='*'>
            <n22-picker slot="right"  v-model="certificateType" type="certCode" />
          </n22-field>

          <br/>
          <mt-button type="primary" size="large" @click="sunbmit()">提交</mt-button>
        </div>
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
      certificateType: ''
    }
  },
  methods: {
    /**
     * @name 提交方法验证
     */
    sunbmit () {
      // 获得页面的验证结果
      let result = window.utils.validator.judge(this.validate)
      console.log('校验数据', this.validate)
      console.log('校验结果', result)
    }
  },
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.demo_page{
}
</style>
