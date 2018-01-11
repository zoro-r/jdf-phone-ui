<template>
  <div class="demo_page">
		<div class="demo_main_header">
      <h2>组件列表</h2>
      <a href="https://github.com/jdfdcc/n22-phone-ui" class="gitDiv"></a>
    </div>
		<mt-cell v-for="(item,index) in components"
			:key="index"
			:title="item.name"
		  :to="item.url"
			is-link
			value="带链接">
		</mt-cell>
    <div style="font-size:1.5rem;margin-top:20px;color:gray">
       @请用chome的手机调试模式查看
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
      components: [
        {name: 'cell控件', url: {name: 'n22Field'}},
        {name: '地址控件', url: {name: 'n22Address'}},
        {name: '性别控件', url: {name: 'n22Switch'}},
        {name: '日历控件', url: {name: 'n22Calendar'}},
        {name: '输入控件', url: {name: 'n22Input'}},
        // {name: '滚动日历', url: {name: 'n22Scroll'}},
        {name: '缩放控件', url: {name: 'n22Zoom'}},
        {name: 'Tab控件', url: {name: 'n22Tab'}},
        {name: '日期组件', url: {name: 'n22DatePicker'}}
      ]
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
@import "src/assets/css/vars";
@import "src/assets/css/demo";
.demo_page{
	text-align: center
}
</style>
