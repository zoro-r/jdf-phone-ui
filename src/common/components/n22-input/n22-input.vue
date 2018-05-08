<template>
  <div class="va_ipt">
    <section class="left">
      <slot name="left">
      </slot>
    </section>
    <!-- <p class="error_text">{{errorText}}</p> -->
    <input :disabled="disabled" :maxlength="max" v-if="itype!='textarea'" @focus="changeKeyBoard(true)" @blur="changeKeyBoard(false)" :value="inputValue" @change="change" @input="handleInput" :type="itype" v-bind:class="[hasIcon?'hasIcon':'',inputClass,errorText?'redColor':'']" :placeholder="hintText" />
    <textarea class="textarea" :disabled="disabled"  :maxlength="max" v-else @focus="changeKeyBoard(true)" @blur="changeKeyBoard(false)" :value="inputValue" @change="change" @input="handleInput" :type="itype" :rows="rows" :placeholder="hintText" />
    <section class="right" v-if="hasIcon && type!='textarea'">
      <button @click="show" v-if="inputValue && type == 'password'" class="icon_right" v-bind:style="{'background-image': !showPwd?'url(static/images/icon/eye.png)':'url(static/images/icon/eye_active.png)'}"></button>
      <span @click="clean" v-if="inputValue" class="icon_right"></span>
    </section>
    <span class="line" v-if="errorText && validateTime > 1" v-html="errorText"></span>
    <!--2017-12-27 跟测试确认，所有页面input onblur后不在弹出提示-->
    <!-- <mt-popup :modal="false" v-model="showError" position="top" class="mint-popup-2">
      <div>{{errorText}}</div>
    </mt-popup> -->
  </div>
</template>

<script>
export default {
  name: 'n22-input',
  data () {
    return {
      inputValue: this.value,
      showPwd: false,
      itype: this.type,
      errorText: null,
      showError: false,
      rules: [],
      isBlur: true,
      isFocus: false,
      validateTime: 0
    }
  },
  // hasIcon  value type
  props: {
    // 是否显示icon
    hasIcon: {
      type: Boolean,
      default: false
    },
    value: {},
    // inputType: {
    //   type: Number
    // },
    type: {
      type: String,
      default: 'text'
    },
    hintText: {
      type: String
    },
    inputClass: {
      type: String
    },
    // 当type为textarea时，设置文本区内的可见行数
    rows: {
      type: Number,
      default: 2
    },
    // 设置最大长度
    max: {
      type: Number,
      default: 50000
    },
    // 是否需要实时监听规则的改变
    listionRule: {
      type: Boolean,
      default: false
    },
    // 是否监听规则变化  ** 有点多余 后续更新中....
    listenRuleChange: {
      type: Boolean,
      default: false
    },
    validator: {
      type: Object,
      default: function () {
        let obj = {
          rules: []
        }
        return obj
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /**
     * @name 键盘弹出时候
     */
    changeKeyBoard (isFocus) {
      if (isFocus) {
        this.isBlur = false
        this.errorText = null
        this.$emit('focus')
        // window.utils.help.keyBoardShow()
      } else {
        this.isBlur = true
        this.$emit('blur')
        this.validate()
        // window.utils.help.keyBoardHide()
      }
    },
    /**
     * @name 验证规则
     * isShow 是否显示提示框
     */
    validate (isShow = true) {
      // 每一次校验则增加校验次数
      this.validateTime ++
      // this.changeKeyBoard(showError)
      // 判断该组件是否需要重新初始化规则
      if (this.listionRule) {
        this.rules = []
        this.initRules(this.rules)
      }
      let result = window.window.utils.validator.validate(
        this.validator.label,
        this.inputValue,
        ...this.rules
      )
      if (!result.status) {
        this.isBlur && (this.errorText = result.msg)
        this.$emit('update:form', result)
      } else {
        let datas = [],
          reObj = { status: true }
        for (let key in result.results) {
          if (result.results[key].data) {
            datas.push(result.results[key].data)
          }
        }
        if (datas.length > 0) {
          reObj.datas = datas
        }
        this.errorText = null
        this.$emit('update:form', reObj)
      }
      isShow && (this.showError = !!this.errorText)
    },

    /**
     * @name 初始化规则
     */
    initRules () {
      // let input = this.$refs.input.$refs.input
      // 初始化规则
      for (let rule of this.validator.rules) {
        let realRule
        if (typeof rule === 'string') {
          let list = rule.split(':')
          rule = window.utils.validator.rules[list[0]]
          if (rule.isMethods) {
            realRule = {
              name: list[0],
              isMethods: true,
              methods: rule.methods,
              msg: list[1] || rule.msg
            }
          } else {
            realRule = {
              name: list[0],
              reg: rule.reg,
              msg: list[1] || rule.msg
            }
          }
        } else {
          realRule = rule
        }
        this.rules.push(realRule)
      }
    },
    /**
     * @name 清除内容
     */
    clean () {
      this.inputValue = ''
      console.log(this.type)
      if (this.type === 'password') {
        this.itype = this.type
        this.showPwd = false
      }
    },
    /**
     * @name 当输入框类型为密码的时候输入密码
     */
    show () {
      this.showPwd = !this.showPwd
      this.itype = this.showPwd ? 'text' : 'password'
    },

    /**
     * @name 判断值是否变化
     */
    change (e) {},
    /**
     * @name 输入事件
     */
    handleInput (val) {
      this.validate()
      this.inputValue = val.target ? val.target.value : val
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
      this.validate()
    },
    inputValue (val, oldVal) {
      this.$emit('input', val)
    },
    showError (val) {
      if (val) {
        setTimeout(() => {
          this.showError = false
        }, 1000)
      }
    },
    validator (val) {
      // console.log("监听到规则变化",val,this.value)
      // 监听规则的变化
      if (this.listenRuleChange) {
        this.validate()
      }
    }
  },
  mounted () {
    // console.log(this.isMultiLine,this.isMultiLine.split("-"))
    // if (this.isMultiLine) {
    //   this.rows = parseInt(this.isMultiLine.split("-")[0]);
    //   this.rowsMax = parseInt(this.isMultiLine.split("-")[1]);
    // }
    // if (this.isMultiLine) {
    //   // text_input
    //   // this.$refs.text_input.$refs.text_input.onblur = () => {
    //   //   this.validate(true)
    //   // }
    // } else {
    //   this.$refs.input.$refs.input.onblur = () => {
    //     this.validate(true)
    //   }
    // }
    this.$nextTick(e => {
      this.initRules()
      this.validate(false)
      // 如果有值则校验次数+1
      if (this.value) {
        this.validateTime ++
      }
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$height: 43px;
.va_ipt {
  position: relative;
  .line{
    position: absolute;
    bottom: 0px;
    left: 0;
    color: red;
    font-size: 1rem;
  }
  .textarea{
    width: 100%;
    border: none;
    outline: none;
  }
  .redColor {
    // color: rgb(255, 0, 0);
    // border-bottom:1px solid rgb(255, 0, 0);
  }
  .error_text {
    position: absolute;
    pointer-events: none;
    color: rgb(255, 0, 0);
    top: 0px;
    right: 27px;
    background: rgb(255, 255, 255);
    width: 100%;
  } // margin-top: 10px;
  font-size: 14px;
  height: $height;
  display: flex;
  align-items: center;
  background: white;
  position: relative;
  width: 100%;
  border-radius: 2px;
  .left {
    img {
      width: 25px;
      flex: 0 0 25px;
      margin-left: 15px;
      margin-right: 8px;
    }
  }
  .right {
    // width: 60px;
    // flex: 0 0 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    background-color: rgba(1, 1, 1, 0);
    text-align: left;
    padding-right: 10px;
    font-size: 14px;
  }
  .icon_right {
    height: 15px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0);
    min-width: 18px;
    margin-right: 10px;
    background-image: url("./assets/images/close.png");
    /* height: 100%; */
    display: block;
    background-position: center;
    background-size: 23.65px;
    background-repeat: no-repeat;
    border: none;
    transition: background-image .2s linear;

  }
  .mint-popup-2 {
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: rgba(255, 0, 0, 0.7);
    backface-visibility: hidden;
    div {
      // color: red!important;
      line-height: 40px;
      color: #fff;
    }
  }
}
</style>
