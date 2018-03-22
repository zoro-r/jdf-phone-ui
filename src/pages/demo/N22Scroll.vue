<template>
  <div>
    <!-- <h2>Cell组件</h2> @scroll="scroll"-->
    <div  class="scroll-content" id="scroll-content" style="height: 500px;overflow:scroll;-webkit-overflow-scrolling: touch;overflow-y:visible;" ref="calendarScroll">
      <div v-bind:style="{height:height * list.length + 'px','max-height':height * list.length + 'px'}" class="demo_page" >
        <div class="item" v-for="(day, index1) in list" :key="index1">
          <div class="header">{{day[15].format}}</div>
          <div class="content">
              <div class="content-item day" v-for="(item,index) in day" :key="index" >
                <button  @click="chooseItem(item)" v-bind:class="[isChoosed(item.date)?'choosed':'']" v-if="show(day[15].format, item.date)"> {{item.date | dateFilter('dd')}}</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      list: [],
      height: 330,
      chooseDate: new Date(),
      currentDate: new Date(),
      startDate: '2016-01-01',
      endDate: '2019-02-01'
    }
  },
  methods: {
    scroll (e) {
      console.log(e.srcElement.scrollTop)
      let top = e.srcElement.scrollTop
      if (this.height * this.list.length - top < 1000) {
        console.log('向下扩展月份')
        this.addMonthEnd(this.list[this.list.length - 1][15].date)
        let posTop = -12 * 330 + top
        document.getElementById('scroll-content').scrollTo(0, posTop)
      } else if (top < 1000) {
        this.addMonthHeader(this.list[0][15].date, -12)
        // this.$refs.calendarScroll.scrollTo(2000)
        let posTop = 12 * 330 + top
        document.getElementById('scroll-content').scrollTo(0, posTop)
      }
    },
    /**
     * @name 计算差值
     * @param startDate 格式'yyyy-MM-dd'
     * @param endDate 格式'yyyy-MM-dd'
     */
    calcuTime () {
      let currentTime = window.utils.format.toDate(this.currentDate, 'yyyy-MM-dd'),
        cY = currentTime.split('-')[0],
        cM = currentTime.split('-')[1],
        sY = this.startDate.split('-')[0],
        sM = this.startDate.split('-')[1],
        eY = this.endDate.split('-')[0],
        eM = this.endDate.split('-')[1],
        startMonth = (cY - sY) * 12 + (cM - sM),
        endMonth = (eY - cY) * 12 + (eM - cM)

      // 清空数据
      let tempList = []
      for (let i = -startMonth; i < endMonth; i++) {
        let tempDate = new Date(this.currentDate)
        tempDate.setMonth(tempDate.getMonth() + i)
        // console.log(tempDate)
        tempList.push(this.getDaysByYAndM(tempDate))
      }
      this.list = tempList
      console.log(startMonth, endMonth)
      // 滚动到当前位置
      setTimeout(() => {
        document.getElementById('scroll-content').scrollTo(0, startMonth * 330)
      }, 0)
    },
    /**
     * @name 选中某一天
     */
    chooseItem (item) {
      this.chooseDate = item.date
    },
    /**
     * @name 是否选中
     */
    isChoosed (item) {
      return window.utils.format.toDate(this.chooseDate, 'yyyy-MM-dd') === window.utils.format.toDate(item, 'yyyy-MM-dd')
    },
    /**
     * @name 是否显示
     */
    show (current, item) {
      return current.split('-')[1] == parseInt(item.getMonth() + 1)
    },
    /**
     * @name 初始化数据，计算传入日期前18个月，后18个月
     * @param yyyy 年份
     * @param mm 月份
     */
    _initData (yyyy, mm) {
      // 清空数据
      let tempList = []
      for (let i = -12; i < 12; i++) {
        let tempDate = new Date(yyyy + '/' + mm + '/01')
        tempDate.setMonth(tempDate.getMonth() + i)
        // console.log(tempDate)
        tempList.push(this.getDaysByYAndM(tempDate))
      }
      this.list = tempList
    },
    /**
     * @name 添加日期
     */
    addMonthEnd (date) {
      let tempList = this.list
      for (let i = 1; i <= 12; i++) {
        let tempDate = new Date(date)
        tempDate.setMonth(tempDate.getMonth() + i)
        // console.log(tempDate)
        tempList.push(this.getDaysByYAndM(tempDate))
        tempList.shift()
      }
      // 删除未来的12年
      this.list = tempList
    },
    addMonthHeader (date) {
      let tempList = this.list
      for (let i = 1; i <= 12; i++) {
        let tempDate = new Date(date)
        tempDate.setMonth(tempDate.getMonth() - i)
        // console.log(tempDate)
        tempList.unshift(this.getDaysByYAndM(tempDate))
        tempList.pop()
      }
      this.list = tempList
    },

    /**
     * @name 根据年月获取月份的值
     * @param yyyy 年份
     * @param mm 月份
     */
    getDaysByYAndM (date) {
      let list = []// , date = new Date(yyyy + '-' + mm + '-01')
      for (let i = 1; i <= 35; i++) {
        let tempDate = new Date(date.getTime())
        // 先判断一下当前月的一号是星期几
        let oneInWeek = new Date(tempDate.setDate('01')).getDay()
        let dateItem = new Date(tempDate.setDate(i - oneInWeek))
        list.push({
          date: dateItem,
          isToday: window.utils.format.toDate(dateItem, 'yyyy-MM-dd') === window.utils.format.toDate(date, 'yyyy-MM-dd'),
          format: window.utils.format.toDate(dateItem, 'yyyy-MM-dd'),
          isFutureDay: dateItem.getTime() > new Date().getTime()
        })
      }
      return list
    },

    /**
     * @name 初始化滚动
     */
    _initScrollArea () {
      this.meunScrollMain = new BScroll(this.$refs.calendarScroll, {
        click: false,
        probeType: 3,
        // preventDefault: true,
        startY: -this.list.length * this.height / 2
      })
      // 滚动到当前月份
      // this.meunScrollMain.scrollTo(0, -this.list.length * this.height / 2)
      // 监听页面滚动
      this.meunScrollMain.on('scroll', pos => {
        if (pos.y < -this.height * this.list.length) {
          console.log('超过滚动距离')
          // this.meunScrollMain.stop()
        }
      })
      // 当滚动停止的时候滚动到中间位置
      this.meunScrollMain.on('scrollEnd', pos => {
        if (Math.abs((pos.y + this.list.length * this.height / 2)) > 1200) {
          let cha = pos.y % this.height - this.list.length * this.height / 2
          // 重新初始化数据
          // debugger
          this.$nextTick(() => {
            let index = Math.floor(Math.abs(pos.y / this.height))
            if (index > this.list.length - 1) index = this.list.length - 1
            let scrollDate = this.list[index][15].format
            this._initData(scrollDate.split('-')[0], scrollDate.split('-')[1])
            this.meunScrollMain.scrollTo(0, cha, 0)
          })
        }
      })
    }
  },
  mounted () {
    // this._initData(2018, 1)
    this.calcuTime()
    this.$nextTick(e => {
      // 是否开启无限滚动模式
      // this._initScrollArea()
      // document.getElementById('scroll-content').scrollTo(0, this.height * 10)
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
$width: 100%/7;

.scroll-content{
  &::-webkit-scrollbar {
    width: 0px;
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
    background: rgba(0, 0, 0, 0);
  }
}
.demo_page {
	height: 500px;
	text-align: center;
	.item{
    pointer-events: auto;
    box-sizing: content-box;
		height: 330px;
		line-height: 40px;
		// border-bottom: 1px solid rgba(0,0,0,.5);
    .header{
      background: rgba(0,0,0,.1);
      font-size: 14px;
      height: 30px;
      line-height: 30px;
    }
	}
	.content {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    background: white;
    .content-item {
      text-align: center; // display: flex
      // align-items: center
      // justify-content: center
      // min-height: 50px
      flex: 0 0 $width;
      // border-bottom: 1px solid rgba(1, 1, 1, 0.1);
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
      button{
        width: 40px;
        height: 40px;
        display: block;
        border-radius: 50%;
        background: none;
        border: none;
        transition: all .3s;
        &.choosed{
          background: rgb(0, 0, 255);
          color: rgb(255, 255, 255);
        }
      }
    }
  }
}
</style>
