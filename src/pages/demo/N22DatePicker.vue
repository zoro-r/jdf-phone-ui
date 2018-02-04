<template>
  <n22-page>
      <mt-header  slot="header" :fixed="true"  title="日期控件">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content"  class="show_code_main">
        <div class="first">
        <n22-field :label="'日期'" need='*'>
          <n22-datepicker label="请选择" :disabled="disabled" :endDate="new Date()" slot="right" v-model="birthdate" />
        </n22-field>

        <br/>
        <div>
          {{birthdate}},<br/>
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
      <div class="secend">
       <n22-highlight lang="html">
    &lt;n22-datepicker
    label="请选择"
    :disabled="disabled"
    :endDate="new Date()"
    slot="date"
    v-model="birthdate"
    /&gt;
        </n22-highlight>
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
      birthdate: '',
      disabled: false
    }
  },
  methods: {
    // 塞入默认值
    setValue () {
      this.birthdate = '2018-01-02'
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
