<template>
  <div class="calendar_item">
    <div  class="content ca_content">
      <div class="content" v-if="monthDate.length > 0">
        <!-- item.isFutureDay|| -->
        <div style="min-height:54px;" @click="_chooseItem(item)" class="content-item day train_bg_img" v-for="(item,index) in monthDate" :key="index"
             :class="getClass(item)"
                      >
          <div style="position: relative">
            {{_dateFormat(item.date, 'dd')}}
            <span class="cricle "
              :class="{ 'yellow': item.code() === '01',
                        'blue': item.code() === '02',
                        'green': item.code() === '03',
                        'purple': item.code() === '04'}"
            ></span>
          </div>
          <span class="cn">{{solar2lunar(item)}}</span>
          <!-- <div class="ok-icon">
            <i v-if="_hasPunch(item)" class="fa fa-check" aria-hidden="true"></i>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import calendar from './assets/lib/calendar'
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
    },
    /**
     * @name 判断是否为上一个月
     */
    isLastMonth: {
      type: Boolean,
      default: false
    },
    /**
     * @name 判断是否为下一个月
     */
    isNextMonth: {
      type: Boolean,
      default: false
    }
  },
  methods: {

    // 获取对应的拼接class
    getClass (item) {
      let str = ''
      if (item.isToday) str += ' isToday'
      if (!this._inMonth(item)) str += ' notInMonth'
      // if (this._isWeekDay(item)) str += ' weekDay'
      if (this._isRestDay(item)) str += ' restDay'
      if (this.chooseDay === item.format) str += ' choosed'
      return str
    },

    /** 日期过滤器 */
    _dateFormat (val, format) {
      return window.utils.format.toDate(val, format)
    },

    /**
     * @name 判断是否在当月
     */
    _inMonth (item) {
      let tempDate = new Date(window.utils.format.toDate(this.currentDate, 'yyyy-MM-dd'))
      if (this.isLastMonth) {
        tempDate = tempDate.setMonth(
          tempDate.getMonth() - 1
        )
      } else if (this.isNextMonth) {
        tempDate = tempDate.setMonth(
          tempDate.getMonth() + 1
        )
      }
      return window.utils.format.toDate(item.date, 'yyyy-MM') === window.utils.format.toDate(new Date(tempDate), 'yyyy-MM')
    },

    /**
     * @name 是否为双休
     */
    _isWeekDay (item) {
      return item.date.getDay() == 0 || item.date.getDay() == 6
    },

    /**
     * @name 是否为休息日
     */
    _isRestDay (item) {
      return item.code() === '05'
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
      if (this._inMonth(item)) {
      //  window.utils.format.toDate(item.date, 'yyyy-MM-dd')
        this.$emit('choose', item)
      }
    },

    /**
     * @name 转化农历
     */
    solar2lunar (date) {
      let dateList = date.format.split('-')
      let item = calendar.solar2lunar(dateList[0], dateList[1], dateList[2])
      return item.IDayCn
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
    font-size: 1.4rem;
    font-weight: 300;
    .content-item {
      text-align: center; // display: flex
      // align-items: center
      // justify-content: center
      // min-height: 50px
      flex: 0 0 $width;
      // border-bottom: 1px solid rgba(1, 1, 1, 0.21);
      box-sizing: border-box;
      .ok-icon {
        height: 16px;
      }
      .ok-icon i {
        color: #3399ff;
        font-size: 15px;
      }
      &.weekDay{
        // color: #ccc;
      }
      &.restDay{
        color: #ccc;
      }
      &.day {
        padding: 1rem 0px;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 1.6rem;
        // font-weight: 500
        .cn{
          font-size: 1rem;
          // color: rgba(1, 1, 1, 0.4);
          // margin-top: 3rem;
        }
        .cricle{
          display: block;
          position: absolute;
          width: 5px;
          height: 5px;
          top: 1px;
          right: -5px;
          border-radius: 50%;
          &.blue{
            background: rgb(34, 155, 274);
          }
           &.yellow{
           background: rgb(238, 160, 51);
          }
          &.green{
            background: rgb(38, 171, 39);
          }
          &.purple{
            background: rgb(161, 51, 224);
          }
        }
      }
      &.notInMonth {
        // display: none;
        opacity: 0;
        color: #ccc;
        // opacity: 0;
      }
      &.week {
        min-height: 30px;
        line-height: 30px;
      }
      &.choosed {
        // color: #3399ff;
        background-color: #D43D20;
        color: white;
      }
    }
  }
}
</style>
