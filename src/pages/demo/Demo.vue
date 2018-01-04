<template>
  <div>
		<h2>控件展示列表（请用chome手机模式查看）</h2>
		<baseField :label="'地址控件'" :need="'*'">
			<baseAddress slot="select" ></baseAddress>
		</baseField>
  </div>
</template>

<script>
export default {
  name: "demo",
  components: {
  },
  directives: {
    validate: {
      params:['v-model'],
      bind: function(el, binding, vnode, oldVnode) {
        // console.log(binding,vnode);
      },
      update: function(el, binding) {
        el.style.color = "red";
      },
      unbind: function() {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {},
  mounted() {
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
</style>
