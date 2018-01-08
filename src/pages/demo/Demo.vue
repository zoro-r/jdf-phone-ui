<template>
  <div>
		<h2>控件展示列表（请用chome手机模式查看）</h2>
		<n22Field :label="'地址控件'" :need="'*'">
			<n22Address slot="select" ></n22Address>
		</n22Field>
		<n22Calendar></n22Calendar>
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  directives: {
    validate: {
      params: ['v-model'],
      bind: function (el, binding, vnode, oldVnode) {
        // console.log(binding,vnode);
      },
      update: function (el, binding) {
        el.style.color = 'red'
      },
      unbind: function () {}
    }
  },
  data () {
    return {
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
</style>
