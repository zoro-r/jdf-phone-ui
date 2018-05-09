<template>
  <div class="shop_car">
    <div class="ball-container">
      <transition name="fade" v-for="(ball,index) in balls" :key="index" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="ball" v-show="ball.show">
          <div class="inner inner-hook"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopCar',
  components: {},
  data () {
    return {
      show: false,
      // 动画是否开始
      isStart: false,
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      dropBalls: [],
      goods_list: [],
      clickTime: 0
    }
  },
  methods: {
    clear () {
      for (let i in this.goods_list) {
        this.goods_list[i].count = 0
      }
      this.clickTime = 0
      this.show = false
    },
    minus (item, index) {
      // item.count--
      for (let i in this.goods_list) {
        console.log(this.goods_list[i].id)
        if (this.goods_list[i].id == item.id) {
          index = i
        }
      }
      if (item.count <= 0) {
        this.goods_list.splice(index, 1)
      }
      this.clickTime--
      if (this.clickTime == 0) {
        this.show = false
      }
    },
    drop (el) {
      this.clickTime++
      this.isStart = true
      // el = this.$refs.gouwuche;
      // el = el.target
      // 触发一次事件就会将所有小球进行遍历
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          // 将false的小球放到dropBalls
          ball.show = true
          ball.el = el // 设置小球的el属性为一个dom对象
          this.dropBalls.push(ball)
          return
        }
      }
    },

    beforeEnter (el) {
      console.log('before')
      // 这个方法的执行是因为这是一个vue的监听事件
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect() // 获取小球的相对于视口的位移(小球高度)
          let x = rect.left + 'px'
          let y = rect.top + 'px'// 负数,因为是从左上角往下的的方向
          console.log('reat', x, y)
          el.style.display = '' // 清空display
          el.style.top = y
          el.style.left = x
          // 处理内层动画
          let inner = el.getElementsByClassName('inner-hook')[0] // 使用inner-hook类来单纯被js操作
          inner.style.top = y
          inner.style.left = x
        }
      }
    },

    enter (el, done) {
      // 这个方法的执行是因为这是一个vue的监听事件
      /* eslint-disable no-unused-vars */
      let rf = el.offsetHeight // 触发重绘html
      console.log('位置', rf)
      this.$nextTick(() => {
        // 让动画效果异步执行,提高性能
        el.style.top = '0px'
        el.style.left = window.innerWidth - 100 + 'px'
        // 处理内层动画
        let inner = el.getElementsByClassName('inner-hook')[0] // 使用inner-hook类来单纯被js操作
        inner.style.top = 0
        inner.style.left = window.innerWidth - 100 + 'px'
        el.addEventListener('transitionend', done) // Vue为了知道过渡的完成，必须设置相应的事件监听器。
      })
    },

    afterEnter (el) {
      // 这个方法的执行是因为这是一个vue的监听事件
      console.log('事件完成')
      setTimeout(() => {
        this.isStart = false
      }, 0)
      let ball = this.dropBalls.shift() // 完成一次动画就删除一个dropBalls的小球
      if (ball) {
        ball.show = false
        el.style.display = 'none' // 隐藏小球
      }
    }
  }
}
</script>
<style lang="scss">
@import "src/assets/css/vars";
.shop_car{
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
   .ball-container {
      .ball {
        position: fixed;
        left: 32px;
        bottom: 22px;
        z-index: 20;
        transition: all 1s linear;
        .inner {
          width: 80px;
          height: 80px;
          background-size: 100%;
          border-radius: 50%;
          background-image: url('./../../../../static/images/plants/sun.gif');
          transition: all 1s linear;
          z-index: 32131231;
        }
      }
    }
}
</style>

