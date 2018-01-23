<template>
  <div class="show_code_main">
    <n22-page class="first">
      <mt-header  slot="header" :fixed="true" title="输入验证组件">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content">
        <br/>
        <div class="demo_page">
          <n22-field :label="'必填项验证'" need='*'>
            <n22-input inputClass="name zs" type="text"  v-model="modal.text" :form.sync="validate.text"  :validator="rule.text" hintText="请输入" slot="right" />
          </n22-field>

          <n22-field :label="'身份证验证'" need='*'>
            <n22-input  v-model="modal.idcard" type="text" :form.sync="validate.idcard"  :validator="rule.idcard" hintText="请输入" slot="right" />
          </n22-field>

          <n22-field :label="'密码验证'" need='*'>
            <n22-input  v-model="modal.password" type="password" :form.sync="validate.password"  :validator="rule.password" hintText="请输入" slot="right" />
          </n22-field>

          <n22-field :label="'文本框'" need='*'>
            <n22-input  v-model="modal.textarea" type="textarea" :form.sync="validate.textarea"  :validator="rule.textarea" hintText="请输入" slot="right" />
          </n22-field>

          <n22-field :label="'自定义校验'" need='*'>
            <n22-input  v-model="modal.myself" :form.sync="validate.myself"  :validator="rule.myself" hintText="请输入" slot="right" />
          </n22-field>

          {{validate}}
          <br/>
          <br/>
          <mt-button type="primary" size="large" @click="sunbmit()">提交</mt-button>
        </div>
      </div>
    </n22-page>

    <div class="secend">
      <n22-highlight lang="html" :height="400">
&lt;n22-field :label="'必填项验证'" need='*'&gt;
  &lt;n22-input type="text"
  v-model="modal.text"
  :form.sync="validate.text"
  :validator="rule.text"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;

&lt;n22-field :label="'身份证验证'" need='*'&gt;
  &lt;n22-input  v-model="modal.idcard"
  type="text" :form.sync="validate.idcard"
  :validator="rule.idcard"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;

&lt;n22-field :label="'密码验证'" need='*'&gt;
  &lt;n22-input  v-model="modal.password"
  type="password"
  :form.sync="validate.password"
  :validator="rule.password"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;

  &lt;n22-field :label="'文本框'" need='*'&gt;
  &lt;n22-input  v-model="modal.textarea"
  type="textarea"
  :form.sync="validate.textarea"
  :validator="rule.textarea"
  hintText="请输入" slot="right"
  /&gt;
&lt;/n22-field&gt;
      </n22-highlight>
      <br>


      <n22-highlight lang="javascript">
         rule: {
        text: {rules: ['require:必填项']},
        idcard: {rules: ['idcard:身份证错误']},
        password: {rules: ['pwd:密码验证错误']},
        textarea: {rules: []}
      },
      validate: {
        text: {status: false},
        idcard: {status: false},
        password: {status: false},
        textarea: {status: false}
      }

      // 获得页面的验证结果
      let result = window.utils.validator.judge(this.validate)
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
      modal: {
        text: '',
        idcard: '34',
        password: '',
        textarea: '',
        myself: ''
      },
      rule: {
        text: {rules: ['require:必填项']},
        idcard: {rules: ['idcard:身份证错误']},
        password: {rules: ['pwd:密码验证错误']},
        textarea: {rules: []},
        myself: {rules: [{reg: /^\S{2,11}$/, msg: '当前长度为2-11位'}]}
      },
      validate: {
        text: {status: false},
        idcard: {status: false},
        password: {status: false},
        textarea: {status: false},
        myself: {status: false}
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
      console.log('校验数据', this.validate)
      console.log('校验结果', result)
    }
  },
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.demo_page{
}
</style>
