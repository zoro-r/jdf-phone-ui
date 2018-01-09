<template>
  <div class="demo_page">
		<h2>Cell组件</h2>
		<n22-field :label="'地址'" need='*'>
			<n22-address slot="right"></n22-address>
		</n22-field>

		<n22-field :label="'姓名'" need='*'>
			<n22-input  v-model="name" type="text" hintText="请输入投保人姓名" slot="input" />
		</n22-field>

		<n22Field :label="'性别'">
			<n22Switch   :value.sync="sex" slot="choose" />
		</n22Field>

    <n22Calendar></n22Calendar>
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
