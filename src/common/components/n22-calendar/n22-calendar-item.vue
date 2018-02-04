<template>
  <div class="calendar_item">
    <div  class="content ca_content">
      <div class="content" v-if="monthDate.length > 0">
        <!-- item.isFutureDay|| -->
        <div style="min-height:54px;" @click="_chooseItem(item)" class="content-item day" v-for="(item,index) in monthDate" :key="index" v-bind:class="[item.isToday?'isToday':'',!_inMonth(item)?'notInMonth':'',_isWeekDay(item)?'weekDay':'',chooseDay === item.format ?'choosed':'']">
          <span> {{item.date | _dateFormat('dd')}}</span>
          <div class="ok-icon">
            <i v-if="_hasPunch(item)" class="fa fa-check" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @待修改
export default {
  name: 'n22CalendarItem',
  data () {
    return {
    }
  },
  props: {
    // 选中的日期
    chooseDay: {
      type: String
    },
    //
    monthDate: {
      type: Array,
      default: function () {
        return []
      }
    },
    /**
     * @name 默认显示时间
     */
    currentDate: {
      type: Date,
      default: () => {
        return new Date()
      }
    }
  },
  filters: {
    /** 日期过滤器 */
    _dateFormat (val, format) {
      return window.utils.format.toDate(val, format)
    }
  },
  methods: {
    /**
     * @name 判断是否在当月
     */
    _inMonth (item) {
      return (
        window.utils.format.toDate(item.date, 'yyyy-MM') === window.utils.format.toDate(this.currentDate, 'yyyy-MM')
      )
    },
    /**
     * @name 是否为双休
     */
    _isWeekDay (item) {
      // console.log(item.date.getDay() == 0 || item.date.getDay() == 6)
      return item.date.getDay() == 0 || item.date.getDay() == 6
    },
    /**
     * @name 判断是否打卡
     */
    _hasPunch (item) {
      return false
      // let punchStr = this.punchs.join('')
      // return punchStr.indexOf(item.format) >= 0
    },
    /**
     * @name 根据日期获取当前月的每一天·2
     */
    _getMonthFromDate (date) {
      let list1 = []
      for (let i = 1; i <= 35; i++) {
        let tempDate = new Date(date.getTime())
        // 先判断一下当前月的一号是星期几
        let oneInWeek = new Date(tempDate.setDate('01')).getDay()
        let dateItem = new Date(tempDate.setDate(i - oneInWeek))
        list1.push({
          date: dateItem,
          // inMonth: date_item.getMonth() === this.date.getMonth(),
          isToday: window.utils.format.toDate(dateItem, 'yyyy-MM-dd') === window.utils.format.toDate(date, 'yyyy-MM-dd'),
          format: window.utils.format.toDate(dateItem, 'yyyy-MM-dd'),
          isFutureDay: dateItem.getTime() > new Date().getTime()
        })
      }
      return list1
    },
    /**
     * @name 选择当前某个日期
     */
    _chooseItem (item) {
      console.log(12)
      if (this._inMonth(item)) {
      //  window.utils.format.toDate(item.date, 'yyyy-MM-dd')
        this.$emit('choose', item)
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$width: 100%/7;
.calendar_item {
  font-size: 13px;
  background: white;
  .header {
    min-height: 45px;
    text-align: center;
    padding-left: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 255, 0.21);
    h2 {
      text-align: center;
      width: 100%;
    }
    span {
      flex: 0 0 50px
    }
  }
  .ca_header{
    background: rgba(1, 1, 1, 0.1)
  }
  .content, .ca_header {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    .content-item {
      text-align: center; // display: flex
      // align-items: center
      // justify-content: center
      // min-height: 50px
      flex: 0 0 $width;
      border-bottom: 1px solid rgba(1, 1, 1, 0.21);
      box-sizing: border-box;
      .ok-icon {
        height: 16px;
      }
      .ok-icon i {
        color: #3399ff;
        font-size: 15px;
      }
      &.weekDay{
        color:red;
      }
      &.day {
        padding: 10px 0px;
        font-weight: 500
      }
      &.notInMonth {
        color: rgba(1, 1, 1, 0.5);
      }
      &.week {
        min-height: 30px;
        line-height: 30px;
      }
      &.choosed {
        color: #3399ff;
      }
    }
  }
}
</style>
