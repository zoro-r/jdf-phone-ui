<template>
  <div class="show_code_main">
    <n22-page class="first">
      <mt-header slot="header" :fixed="true" title="地址控件">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
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
        <br/><br/>
      </div>
    </n22-page>

    <div class="secend">
      <n22-highlight lang='html' >
       &lt;n22-address  :disabled = "disabled"
                        @choose="choose"
                        :province.sync="address.province"
                        :city.sync="address.city"
                        :area.sync="address.area"
                        slot="right"&gt;
    &lt;/n22-address&gt;
      </n22-highlight>
      <br>
      <n22-highlight lang="javascript">
  // data 绑定数据
  disabled: false,
  address: {
    province: '',
    city: '',
    area: ''
  }

  //方法 塞入默认值
  setValue () {
    this.address.province = '610000'
    this.address.city = '610100'
    this.address.area = '610104'
  }
      </n22-highlight>
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
