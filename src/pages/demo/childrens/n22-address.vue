<template>
  <n22-page class="demo_page">
    <mt-header slot="header" :fixed="true" title="地址控件">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div slot="content" >
      <n22-field :label="'地址'" need='*'>
        <n22-address  :disabled = "disabled"  @choose="choose" :province.sync="address.province" :city.sync="address.city" :area.sync="address.area" slot="right"></n22-address>
      </n22-field>

      <br/>
      <div>
        {{address}}<br/>
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
  </n22-page>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      disabled: false,
      address: {
        province: '',
        city: '',
        area: ''
      }
    }
  },
  methods: {
    // 塞入默认值
    setValue () {
      this.address.province = '610000'
      this.address.city = '610100'
      this.address.area = '610104'
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
  font-size: 1.4rem;
}
</style>
