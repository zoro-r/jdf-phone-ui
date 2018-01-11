<template>
  <div class="demo_page">
    <mt-header title="Cell组件">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

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
@import "src/assets/css/demo";
.demo_page{
	text-align: center
}
</style>
