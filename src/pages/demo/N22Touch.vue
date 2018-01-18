<template>
  <n22-page>
    <mt-header title="工具类" slot="header" :fixed="true">
      <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
    </mt-header>

    <div slot="content">
      <n22-touch></n22-touch>
    </div>
  </n22-page>
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
      window.utils.MessageBox.prompt('请输入你的姓名', 'promt').then(({ value, action }) => {
      })
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
