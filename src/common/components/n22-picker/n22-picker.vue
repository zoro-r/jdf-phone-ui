<template>
	<div>
		<mt-field @click.native="openPicker" v-model="chooseValue" :placeholder="placeholder" disableClear disabled>
			<img class="icon_img" style="top:-2px;" src="./assets/images/down.png" />
		</mt-field>
		<mt-popup v-model="showPicker" position="bottom" style="width:100%;">
			<mt-picker :showToolbar="true" :slots="items" value-key="desc" @change="onValuesChange" style="width:100%;">
				<div class="picker-bar">
					<mt-button @click="close" size="small" plain class="no-border">取消</mt-button>
					<mt-button @click="confirm" type="primary" size="small" plain class="no-border">确定</mt-button>
				</div>
			</mt-picker>
		</mt-popup>
	</div>
</template>

<script>
// 引入所有codeData库
import codeData from './../../../assets/data/codeData'
export default {
  name: 'n22Picker',
  props: {
    value: {},
    type: {},
    dynamicData: {
      // 当type未设置时，picker显示dynamicData中的数据
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showPicker: false,
      currentItem: null,
      items: [],
      chooseValue: ''
    }
  },
  methods: {
    // 弹出picker组件
    openPicker () {
      this.items = []
      this.showPicker = !this.disabled
      if (this.items.length == 0) {
        this._initDate()
      }
      this.$emit('openPicker')
    },
    // 初始化数据
    _initDate () {
      this.items = [
        {
          // flex: 1,
          values: this.type ? codeData[this.type] : this.dynamicData,
          className: 'slot1',
          textAlign: 'center',
          defaultIndex: 9999
        }
      ]
      // 初始化值
      if (this.value || this.value === 0) {
        // 当存在值的时候
        this.$emit('update:form', {status: true})
        this.$nextTick(() => {
          if (this.items.length > 0) {
            for (let i = 0; i < this.items[0].values.length; i++) {
              if (!this.items[0].values[i]) {
                console.log(i)
              }
              if (this.items[0].values[i] && this.items[0].values[i].code == this.value) {
                this.items[0].defaultIndex = i
                this.chooseValue = this.items[0].values[i].desc
                return -1
              }
            }
          }
        })
      } else {
        this.$nextTick(() => {
          this.items.length > 0 && (this.items[0].defaultIndex = 0)
          this.chooseValue = ''
        })
      }
    },
    // 当value改变时，重新初始化值
    changeChooseValue () {
      if (this.value || this.value === 0) {
        this.$nextTick(() => {
          this.items = [
            {
              // flex: 1,
              values: this.type ? codeData[this.type] : this.dynamicData,
              className: 'slot1',
              textAlign: 'center',
              defaultIndex: 9999
            }
          ]
          if (this.items.length > 0) {
            for (let i = 0; i < this.items[0].values.length; i++) {
              if (!this.items[0].values[i]) {
                console.log(i)
              }
              if (this.items[0].values[i] && this.items[0].values[i].code == this.value) {
                this.items[0].defaultIndex = i
                this.chooseValue = this.items[0].values[i].desc
                return -1
              }
            }
          }
        })
      } else {
        this.$nextTick(() => {
          this.items.length > 0 && (this.items[0].defaultIndex = 0)
          this.chooseValue = ''
        })
      }
    },
    // 当滑动改变时候
    onValuesChange (picker, values) {
      this.currentItem = values[0]
    },
    // 确定
    confirm () {
      if (!this.currentItem) {
        this.close()
        return
      }
      this.$emit('input', this.currentItem.code)
      this.chooseValue = this.currentItem.desc
      this.$emit('relationChange', this.currentItem)
      this.$emit('update:form', {status: true})
      this.close()
    },
    // 取消
    close () {
      setTimeout(() => {
        this.showPicker = false
      })
    }
  },
  // 监听默认值的变化
  watch: {
    // 当默认值发生改变的时候
    value (newVal, oldVal) {
      // this._initDate();
      this.changeChooseValue()
    },
    // 当动态数据发生改变的时候
    dynamicData (newVal, oldVal) {
      this.items = []
    },
    showPicker (val) {
      window.utils.ui.disabledBodyScroll(val)
    }
  },
  mounted () {
    // 初始化数据
    this.$nextTick(() => {
      this._initDate()
    })
  }
}
</script>

<style lang="scss">

</style>
