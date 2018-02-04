<template>
  <n22-page :disabled="popupVisible">
      <mt-header title="工具类" slot="header" :fixed="true">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content" class="show_code_main">
         <div class="first">
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
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>
           <br/>
          <mt-button type="primary"  size="large" @click.native="pop" ref="button">弹出页面</mt-button>

          <!-- <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 50 + 'px' }">
            <h1>popup</h1>
            <p>/ ˈpɑpˌʌp /</p>
            <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
            <p>adj. 弹起的; 有自动起跳装置的</p>
          </mt-popup> -->
          <mt-popup v-model="popupVisible" popup-transition="popup-fade" style="height:100%;width:100%">
            <n22-page :modal='true'>
              <mt-header title="全屏弹出框" slot="header" :fixed="true">
                <mt-button @click = "popupVisible = !popupVisible"  slot="left" icon="back"></mt-button>
              </mt-header>
              <div slot="content" style="margin-top:100px">
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
                <n22-field :label="'文本框'" need='*'>
                  <n22-input  hintText="请输入" slot="right" />
                </n22-field>
              </div>
            </n22-page>
          </mt-popup>

        </div>
      </div>
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
  },
  watch: {
    popupVisible (newVal) {
      window.utils.ui.disabledBodyScroll(newVal)
    }
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
