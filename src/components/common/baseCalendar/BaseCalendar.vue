<template>
  <div class="calendar">
    <section class="header">
      {{currentDate | _dateFormat('yyyy年MM月')}}
      <span @click="_currentDay">今天</span>
    </section>
    <div class="content">
      <div class="content-item week" v-for="(item,index) in dayNames" :key="index" v-once>
        {{item}}
      </div>
      <swiper :options="swiperOption" class="swiper-box" style="height: auto" ref="mySwiper">
        <swiper-slide  v-for="(day,index) in days" :key="index">
          <div class="content">
						<!-- item.isFutureDay|| -->
            <div @click="_chooseItem(item)" class="content-item day" v-for="(item,index) in day" :key="index" v-bind:class="[item.isToday?'isToday':'',!_inMonth(item)?'notInMonth':'',chooseDay === item.format ?'choosed':'']">
              <span> {{item.date | _dateFormat('dd')}}</span>
              <div class="ok-icon">
                <i v-if="_hasPunch(item)" class="fa fa-check" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'baseCalendar',
  data () {
    return {
      currentDate: this.date,
      chooseDay: utils.format.toDate(new Date(), 'yyyy-MM-dd'),
      dayNames: '日-一-二-三-四-五-六'.split('-'),
      days: [],
      activeIndex: 1,
      swiperOption: {
        // loop: true,
        // loopAdditionalSlides: 1,
        preventClicks: false,
        // 3D效果
        // effect: 'coverflow',
        // grabCursor: false,
        // cube: {
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94
        // },
        // initialSlide: 1,
        paginationClickable: true,
        spaceBetween: 0,
        // mousewheelControl: true,
        onTransitionStart: swiper => {
          this.activeIndex = swiper.activeIndex
        },

        onSlideNextStart: swiper => {
          this.$nextTick(() => {
            this.$refs.mySwiper.swiper.slideTo(1, 0)
          }, 0)
        },
        onSlideNextEnd: swiper => {
          let tempDate = this.currentDate.setMonth(
            this.currentDate.getMonth() - 1
          )
          this.currentDate = new Date(tempDate)
          this._initDates()
        },
        onSlidePrevStart: swiper => {
          this.$nextTick(() => {
            this.$refs.mySwiper.swiper.slideTo(1, 0)
          }, 0)
        },
        onSlidePrevEnd: swiper => {
          let tempDate = this.currentDate.setMonth(
            this.currentDate.getMonth() + 1
          )
          this.currentDate = new Date(tempDate)
          this._initDates()
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  props: {
    // 已经打卡的日期
    punchs: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 传入日期
    date: {
      type: Date,
      default: () => {
        return new Date()
      }
    }
  },
  filters: {
    _dateFormat (val, format) {
      return utils.format.toDate(val, format)
    }
  },
  methods: {
    /**
     * @name 跳转到当天
     */
    _currentDay () {
      this.chooseDay = utils.format.toDate(new Date(), 'yyyy-MM-dd')
      this.currentDate = new Date()
      this._initDates()
      this.$emit('choose', { date: new Date() })
    },
    /**
     * @name 判断是否在当月
     */
    _inMonth (item) {
      return (
        utils.format.toDate(item.date, 'yyyy-MM') === utils.format.toDate(this.currentDate, 'yyyy-MM')
      )
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
      this.$refs.mySwiper.swiper.slideTo(1)
      this.days = list
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
        let oneInWeek = new Date(tempDate.setDate('01')).getDay()
        let dateItem = new Date(tempDate.setDate(i - oneInWeek))
        list1.push({
          date: dateItem,
          // inMonth: date_item.getMonth() === this.date.getMonth(),
          isToday: utils.format.toDate(date_item, 'yyyy-MM-dd') === utils.format.toDate(date, 'yyyy-MM-dd'),
          format: utils.format.toDate(date_item, 'yyyy-MM-dd'),
          isFutureDay: date_item.getTime() > new Date().getTime()
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
        this.chooseDay = utils.format.toDate(item.date, 'yyyy-MM-dd')
        this.$emit('choose', item)
      }
    }
  },
  mounted () {
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
    padding-left: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(1, 1, 1, 0.21);
    h2 {
      text-align: center;
      width: 100%;
    }
    span {
      flex: 0 0 50px
    }
  }
  .content {
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
      &.day {
        padding: 10px 0px;
      }
      &.notInMonth {
        color: rgba(1, 1, 1, 0.1);
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
