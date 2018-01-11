<template>
  <n22-page>
    <mt-header  slot="header" :fixed="true" title="输入验证组件">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div slot="content">
      <div class="demo_page">
        必填项验证
        <n22-input  v-model="modal.text" type="text" :form.sync="validate.text"  :validator="rule.text" hintText="请输入" slot="input" />
        数字
        <n22-input  v-model="modal.idcard" type="text" :form.sync="validate.idcard"  :validator="rule.idcard" hintText="请输入" slot="input" />
        {{validate}}
        <br/>
        <br/>
        <mt-button type="primary" size="large" @click="sunbmit()">提交</mt-button>
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
      modal: {
        text: '',
        idcard: ''
      },
      rule: {
        text: {rules: ['require:必填项']},
        idcard: {rules: ['idcard:身份证']}
      },
      validate: {
        text: {status: false},
        idcard: {status: false}
      }
    }
  },
  methods: {
    /**
     * @name 提交方法验证
     */
    sunbmit () {
      // 获得页面的验证结果
      let result = window.utils.validator.judge(this.validate)
      console.log(result)
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
