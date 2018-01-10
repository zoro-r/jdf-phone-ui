<template>
  <div class="demo_page">
		<h2>组件列表</h2>
		<mt-cell v-for="(item,index) in components"
			:key="index"
			:title="item.name"
		  :to="item.url"
			is-link
			value="带链接">
		</mt-cell>
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
        {name: '男女控件', url: {name: 'n22Field'}},
        {name: '日历控件', url: {name: 'n22Field'}},
        {name: '滚动日历', url: {name: 'n22Scroll'}},
        {name: '输入控件', url: {name: 'n22Input'}},
        {name: '滚动日历', url: {name: 'n22Scroll'}},
        {name: '缩放控件', url: {name: 'n22Field'}}
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
.demo_page{
	text-align: center
}
</style>
