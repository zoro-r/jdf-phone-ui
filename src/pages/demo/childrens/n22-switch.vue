<template>
  <div >
    <mt-header title="性别">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <n22-field :label="'性别'" need='*'>
			<n22-switch :disabled = 'disabled' slot="choose" :value.sync="value"></n22-switch>
		</n22-field>

    <br/>
    <div>
      {{value}}<br/>
      是否禁用：{{disabled}}
    </div>
    <div class="demo_page">
      <br/>
      <br/>
      <mt-button type="primary" size="large" @click="setValue()">塞入默认值</mt-button>
      <br/>
      <mt-button type="primary" size="large" @click="disabled = !disabled">禁用/解禁</mt-button>
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
