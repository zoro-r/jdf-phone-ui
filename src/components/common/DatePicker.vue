<template>
  <mt-field @click.native="open" v-model="value" :placeholder="label" :disableClear="true" disabled>
    <img class="icon_img" style="margin-top:-4px;" src="../../assets/images/icon/date.png" />
    <mt-datetime-picker v-model="dateValue" ref="datepicker"
                        :type="type"
                        cancelText="清空"
                        :start-date="startDate"
                        :end-date="endDate"
                        year-format="{value}年"
                        month-format="{value}月"
                        date-format="{value}日"
                        hour-format="{value}时"
                        minute-format="{value}分"
                        @confirm="confirm" />
  </mt-field>
</template>
<script>
export default {
  name: 'datePicker',
  props: {
    label: {
      type: String,
      default: "请选择"
    },
    value: {
    },
    //类型
    type: {
      type: String,
      default: 'date'
    },
    //最小日期
    startDate: {
      type: Date,
      default: function() {
        return new Date('1900/01/01')
      }
    },
    //最大日期
    endDate: {
      type: Date,
      default: function() {
        return new Date('2100/12/31')
      }
		},
		//是否禁用
		disabled:{
			type:Boolean,
			default:false
		}
  },
  data() {
    return {
      isRender:true,
      dateValue: this.value?utils.format.parseDate(this.value):new Date(),
      text: '请选择',
      showPicker: false
    }
  },
  computed: {
  },
  methods: {
    //点击打开选择框按钮
    open(a) {
			if(this.disabled) return ;
      if (a.target.tagName == 'INPUT' || a.target.tagName == 'input') {
        this.$refs.datepicker.open()
        utils.help.ModalHelper.afterOpen()
      }
    },
    //点击关闭按钮
    close() {
      setTimeout(() => {
        this.$refs.datepicker.close()
        utils.help.ModalHelper.beforeClose()
      })
    },
    //点击确认按钮
    confirm(value) {
      let dateValue = utils.format.toDate(value, this.type == 'datetime' ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd')
      this.$emit('input', dateValue)
      this.close()
    }
  },
  mounted(){
    this.$el.getElementsByClassName('mint-datetime-cancel')[0].onclick = () => {
      utils.help.ModalHelper.beforeClose()
      //this.dateValue = utils.format.toDate(new Date(), this.type == 'datetime' ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd')
      this.dateValue = new Date()
      this.$emit('input', '')
    }
  }
}
</script>