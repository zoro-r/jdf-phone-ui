<template>
  <div class="show_code_main">
      <n22-page class="first">
      <mt-header title="工具类" slot="header" :fixed="true">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content">
        <div class="demo_page">
          <br/>
          <mt-button type="primary" size="large" @click="showLoadding()">显示loadding（3S）</mt-button>
          <br/>
          <mt-button type="primary" size="large" @click="alert(1)">提示框</mt-button>
          <br/>
          <mt-button type="primary" size="large" @click="alert(2)">对话框</mt-button>
          <br/>
          <mt-button type="primary" size="large" @click="prompt()">输入框</mt-button>
          <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>

          <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 50 + 'px' }">
            <h1>popup</h1>
            <p>/ ˈpɑpˌʌp /</p>
            <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
            <p>adj. 弹起的; 有自动起跳装置的</p>
          </mt-popup>

        </div>
      </div>
    </n22-page>
    <div class="secend">
      <n22-highlight lang="javascript">
prompt () {
  window.utils.MessageBox.prompt('请输入你的姓名', 'promt').then(({ value, action }) => {})
},
// 弹出框
alert (type) {
  window.utils.MessageBox({
    title: '提示',
    message: '确定执行此操作?',
    showCancelButton: type == 2
  })
},
// 塞入默认值
showLoadding () {
  window.utils.Indicator.open({
    text: '',
    spinnerType: 'fading-circle'
  })
  setTimeout(() => {
    Indicator.close()
  }, 3000)
},
pop () {
  console.log('弹出页面------', this.popupVisible)
  this.popupVisible = !this.popupVisible
}
      </n22-highlight>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      popupVisible: false,
      showZoom: false,
      disabled: false,
      buttonBottom: 0,
      value: 'm'
    }
  },
  methods: {
    prompt () {
      window.utils.MessageBox.prompt('请输入你的姓名', 'promt').then(({ value, action }) => {})
    },
    // 弹出框
    alert (type) {
      window.utils.MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: type == 2
      })
    },
    // 塞入默认值
    showLoadding () {
      window.utils.Indicator.open({
        text: '',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        Indicator.close()
      }, 3000)
    },
    // 选中
    choose (data) {
      console.log('返回数据---->', JSON.stringify(data))
    },
    pop () {
      console.log('弹出页面------', this.popupVisible)
      this.popupVisible = !this.popupVisible
    }
  },
  mounted () {
    this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.demo_page{
  padding: 10px;
  font-size: 1.4rem;
  .mint-popup-1 {
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    transform: translate(-50%, 0);
    h1 {
      font-size: 20px;
      color: #26a2ff;
    }
    p {
      margin-bottom: 10px;
    }
    &::before {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 15px solid white;
      content: '';
      position: absolute;
      top: -15px;
      right: 50px;
    }
  }
}
</style>
