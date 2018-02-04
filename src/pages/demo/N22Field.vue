<template>
  <n22-page>
    <!-- <div class="first"> -->
      <mt-header :fixed="true" slot="header" title="Field组件">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content" class="show_code_main">

        <div class="first">
          <n22-field :label="'地址'" need='*'>
            <n22-address slot="right"></n22-address>
          </n22-field>

          <n22Field :label="'性别'">
            <n22Switch   :value.sync="sex" slot="choose" />
          </n22Field>

          <div class="content_intro">
            此插件为信息录入等页面提供统一的左右结构样式<br/>
            eg：姓名：【】
          </div>
        </div>

        <div class="secend">
        <n22-highlight lang='html' >
          &lt;n22-field :label="'地址'" need='*'&gt;
      &lt;n22-address slot="right"&gt;&lt;/n22-address&gt;
    &lt;/n22-field&gt;
        </n22-highlight>
      </div>
      </div>
    <!-- </div> -->
  </n22-page>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      name: '',
      sex: '1'
      /* eslint-disable quotes */
    }
  },
  methods: {
  },
  computed: {},
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
// @import "src/assets/css/demo";
.demo_page{
	text-align: center
}
</style>
