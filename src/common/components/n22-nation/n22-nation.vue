<template>
  <div class="nation_commpoent">
    <mt-field style="color:red" v-model="chooseDesc" @click.native="showPopup" :placeholder="label" :disableClear="true" disabled >
      <img class="icon_img" style="top:-2px;" src="./assets/images/down.png" />
    </mt-field>
    <mt-popup v-bind:style="{height:(screenHeight *.55 + 35)+'px'}" v-model="popupVisible" position="bottom" @close="showPopup(false)">
      <div class="nation_header">
        <span>{{label}}</span>
        <img @click="showPopup" src="./assets/images/close.png" />
      </div>
      <div :style="{'height' : screenHeight *.55 - 10 + 'px'}" >
        <ul >
          <li @click='chooseItem(item)' v-for="(item, index) in codeData" :key="index" >{{item.desc}}</li>
        </ul>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import nationData from './../../../assets/data/nationData'
import countryData from './../../../assets/data/countryData'
// 默认显示数据
export default {
  name: 'n22Nation',
  data () {
    return {
      codeData: this.type === 'nation' ? nationData : countryData,
      popupVisible: false,
      chooseDesc: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'nation'
    },
    code: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '请选择民族'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  methods: {
    /**
     * @name 初始化数据
     */
    _initData () {
      if (this.value) {
        this.chooseDesc = ''
        // 当为国籍的时候
        let data = this.type === 'nation' ? nationData : countryData
        for (let i = 0; i < data.length; i++) {
          if (data[i].code === this.value) {
            this.chooseDesc = data[i].desc
            this.$emit('update:form', {status: true})
            return
          }
        }
      }
    },
    /**
     * @name 显示/隐藏
     */
    showPopup () {
      if (!this.popupVisible) {
        // 解决安卓键盘弹出导致页面高度不对问题
        setTimeout(() => {
          this.popupVisible = !this.popupVisible && !this.disabled
        }, 200)
      } else {
        this.popupVisible = !this.popupVisible && !this.disabled
      }
    },

    /**
     * @name 选择国籍/民族
     */
    chooseItem (item) {
      this.chooseDesc = item.desc
      // 进行赋值
      this.$emit('input', item.code)
      this.$emit('update:form', {status: true})
      // 选中值后回调
      this.$emit('choose', item)
      this.showPopup()
    }
  },
  watch: {
    popupVisible (newVal) {
      window.utils.ui.disabledBodyScroll(newVal)
    },
    value (newVal, oldVal) {
      this._initData()
    }
  },
  // 当组件被停用时调用
  deactivated () {
  },
  mounted () {
    this._initData()
  }
}
</script>
<style lang='scss'>
.nation_commpoent{
  .nation_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    span {
      flex: 1;
      text-align: center;
      padding-left: 46px;
      font-size: 15px;
    }
    img {
      flex: 0 0 25px;
      width: 30px;
      margin-right: 16px;
    }
  }
  .mint-popup {
    width: 100%;
    bottom: 0px;
  }
  ul{
    height: 100%;
    list-style: none;
    padding: 0px;
    overflow: scroll;
    margin: 0px;
    -webkit-overflow-scrolling: touch;
    li{
      width: 100%;
      height: 3.5rem;
      background: white;
      text-align: left;
      border-bottom: 1px solid #E5E5E5;
      line-height: 3.5rem;
      font-size: 1.3rem;
      padding-left: 3rem;
    }
  }
}
</style>

