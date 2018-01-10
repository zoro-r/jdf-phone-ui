<template>
  <div >
    <mt-header title="地址控件">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <n22-field :label="'地址'" need='*'>
			<n22-address slot="right"></n22-address>
		</n22-field>
    <div class="demo_page">
      <mt-button type="primary" size="large" @click="sunbmit()">提交</mt-button>
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
    }
  },
  methods: {
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
