<template>
  <div class="calendar">
    <section class="header">
      <div>
        <img src="./left.png" @click="_touchRight">
        <span style="min-width:100px" v-text="_dateFormat(currentDate, 'yyyy年MM月')"></span>
        <img src="./right.png" @click="_touchLeft">
      </div>
      <!-- <span @click="_currentDay">今天</span> -->
    </section>
    <div>
      <div class="content ca_header">
        <div class="content-item week"
             v-bind:class = "[item == '日' || item == '六'? 'weekDay':'']"
             v-for="(item,index) in dayNames"
             :key="index"
             v-html="item" v-once>
          <!-- {{item}} -->
        </div>
      </div>

      <div  class="content ca_content">
        <n22-touch @touchRight = '_touchRight' @touchLeft = '_touchLeft'>
          <n22-calendar-item @choose='_chooseItem' :isLastMonth='true' :currentDate = 'currentDate' :chooseDay = 'chooseDay' slot="left" :monthDate = 'days[0]'></n22-calendar-item>
          <n22-calendar-item @choose='_chooseItem' :currentDate = 'currentDate' :chooseDay = 'chooseDay' slot="middle" :monthDate = 'days[1]'></n22-calendar-item>
          <n22-calendar-item @choose='_chooseItem' :isNextMonth='true' :currentDate = 'currentDate' :chooseDay = 'chooseDay' slot="right" :monthDate = 'days[2]'></n22-calendar-item>
        </n22-touch>
      </div>
    </div>
  </div>
</template>
<script>
import n22Touch from './../n22-touch'
import n22CalendarItem from './n22-calendar-item'
// @待修改
export default {
  name: 'n22Calendar',
  data () {
    return {
      currentDate: this.date,
      chooseDay: window.utils.format.toDate(new Date(), 'yyyy-MM-dd'),
      dayNames: '日-一-二-三-四-五-六'.split('-'),
      days: [],
      activeIndex: 1
    }
  },
  components: {
    n22Touch,
    n22CalendarItem
  },
  props: {
    /**
     * @name 已经打卡的日期
     */
    punchs: {
      type: Array,
      default: () => {
        return []
      }
    },
    /**
     * @name 默认显示时间
     */
    date: {
      type: Date,
      default: () => {
        return new Date()
      }
    },
    /**
     * @name 特殊日期的显示
     * {date:'2018-04-19' code: 01}
     */
    leaveMap: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    _dateFormat (val, format) {
      return window.utils.format.toDate(val, format)
    },
    /**
     * @name 跳转到当天
     */
    _currentDay () {
      this.chooseDay = window.utils.format.toDate(new Date(), 'yyyy-MM-dd')
      this.currentDate = new Date()
      this._initDates()
      this.$emit('choose', { date: new Date() })
    },
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
      return item.date.getDay() == 0 || item.date.getDay() == 6
    },
    /**
     * @name 初始化页面数据
     */
    _initDates () {
      let list = []
      // 塞入上个月
      list.push(this._lastMonth(this.currentDate))
      // 塞入当前月份
      list.push(this._getMonthFromDate(this.currentDate))
      // 塞入下个月
      list.push(this._nextMonth(this.currentDate))
      this.$nextTick(e => {
        this.days = list
      })
    },
    /**
     * @name 判断是否打卡
     */
    _hasPunch (item) {
      let punchStr = this.punchs.join('')
      return punchStr.indexOf(item.format) >= 0
    },
    /**
     * @name 根据日期获取当前月的每一天·2
     */
    _getMonthFromDate (date) {
      let list1 = []
      for (let i = 1; i <= 35; i++) {
        let tempDate = new Date(date.getTime())
        // 先判断一下当前月的一号是星期几
        let oneInWeek = new Date(tempDate.setDate('01')).getDay(),
          dateItem = new Date(tempDate.setDate(i - oneInWeek)),
          forMatStr = window.utils.format.toDate(dateItem, 'yyyy-MM-dd')
        list1.push({
          date: dateItem,
          // inMonth: date_item.getMonth() === this.date.getMonth(),
          isToday: forMatStr === window.utils.format.toDate(date, 'yyyy-MM-dd'),
          format: forMatStr,
          isFutureDay: dateItem.getTime() > new Date().getTime(),
          code: () => {
            let key = forMatStr
            return this.leaveMap[key]
          }
        })
      }
      return list1
    },
    /**
     * @name 上个月
     */
    _lastMonth (date, index = 1) {
      let tempDate = new Date(date.getTime())
      let lastDate = new Date(tempDate.setMonth(tempDate.getMonth() - index))
      return this._getMonthFromDate(lastDate)
    },
    /**
     * @name 下个月
     */
    _nextMonth (date, index = 1) {
      let tempDate = new Date(date.getTime())
      let nextDate = new Date(tempDate.setMonth(tempDate.getMonth() + index))
      return this._getMonthFromDate(nextDate)
    },
    /**
     * @name 选择当前某个日期
     */
    _chooseItem (item) {
      if (this._inMonth(item)) {
        this.chooseDay = window.utils.format.toDate(item.date, 'yyyy-MM-dd')
        this.$emit('choose', item)
      }
    },
    /**
     * 减少月份
     */
    _touchRight () {
      let tempDate = this.currentDate.setMonth(
        this.currentDate.getMonth() - 1
      )
      this.currentDate = new Date(tempDate)
      this._initDates()
      this.$emit('nextMonth', this.currentDate)
    },
     /**
     * 增加月份
     */
    _touchLeft () {
      let tempDate = this.currentDate.setMonth(
        this.currentDate.getMonth() + 1
      )
      this.currentDate = new Date(tempDate)
      this._initDates()
      this.$emit('lastMonth', this.currentDate)
    }
  },
  created () {
    // 初始化数据
    this._initDates()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$width: 100%/7;
.calendar {
  font-size: 13px;
  background: white;
  .header {
    min-height: 45px;
    text-align: center;
    // padding-left: 40%;
    display: flex;
    justify-content: center;
    font-size: 14px;
    align-items: center;
    border-bottom: 1px solid #E5E5E5; //用于分割线
    div{
      display: flex;
      align-items: center;
    }
    img{
      width: 2rem;
    };
    h2 {
      text-align: center;
      width: 100%;
    }
    span {
      flex: 0 0 50px
    }
  }
  .ca_header{
    // background: rgba(1, 1, 1, 0.1)
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
      // border-bottom: 1px solid rgba(1, 1, 1, 0.21);
      box-sizing: border-box;
       &.week {
        min-height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
