<template>
  <div class="address_district">

		<mt-field style="color:red" @click.native="showPopup" v-model="showDesc.area" :placeholder="label" :disableClear="true" disabled />

		<mt-popup v-bind:style="{height:(screenHeight *.55 + 45)+'px'}" v-model="popupVisible" position="bottom" @close="showPopup(false)">
      <div class="address_header">
        <span>{{label}}</span>
        <img @click="showPopup" src="./assets/images/close.png" />
      </div>
      <div v-if="popupVisible">
        <v-distpicker @selected="onSelected" :districts="districts" :province="showDesc.province" :city="showDesc.city" :area="showDesc.area" type="mobile">
        </v-distpicker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import DISTRICTS from './assets/data/districts'
import VDistpicker from './../../../assets/lib/vDistpicker/src/Distpicker'
export default {
  name: 'n22Address',
  components: {
    'v-distpicker': VDistpicker
  },
  data () {
    return {
      popupVisible: false,
      showDesc: {
        province: window.utils.help.getAddressOfCn(this.province),
        city: window.utils.help.getAddressOfCn(this.city),
        area: window.utils.help.getAddressOfCn(this.area)
      },
      districts: DISTRICTS
    }
  },
  props: {
    title: {
      type: String,
      default: '请选择'
    },
    province: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    area: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '请选择地址'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  methods: {
   /**
    * @name 选中区
    * @param data 选择的数据
    */
    onSelected (data) {
      this.$emit('update:province', data.province.code)
      this.$emit('update:city', data.city.code)
      this.$emit('update:area', data.area.code)
      // 选中值后回调
      this.$emit('choose', data)
      this.popupVisible = false
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
     * @name 初始化数据
     */
    _initData () {
      this.showDesc.province = window.utils.help.getAddressOfCn(this.province)
      this.showDesc.city = window.utils.help.getAddressOfCn(this.city)
      this.showDesc.area = window.utils.help.getAddressOfCn(this.area)
    }
  },
  watch: {
    popupVisible (newVal) {
      // window.utils.help.disabled(newVal);
      newVal
        ? window.utils.help.ModalHelper.afterOpen()
        : window.utils.help.ModalHelper.beforeClose()
    },
    // province(newVal, oldVal) {
    //   this._initData()
    // },
    // city(newVal, oldVal) {
    //   this._initData()
    // },
    area (newVal, oldVal) {
      newVal && this._initData()
    }
  },
  mounted () {
    // 初始化数据
    this.$nextTick(() => {
      this._initData()
    })
  }
}
</script>

<style lang='scss' scoped>
.address_district {
  .address_header {
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
      flex: 0 0 30px;
      width: 30px;
      margin-right: 16px;
    }
  }
  .mint-popup {
    width: 100%;
    bottom: 0px;
  }
}
</style>

