<template>
  <div class="demo_canvas" ref="demo_canvas">
    <!-- 顶部操作区域 -->
    <div class="option">
      <div class="time item">
        <span style="right:20px">{{time}}秒</span>
      </div>
      <div class="score item">
        <span style="right:5px">{{score}}分</span>
      </div>
    </div>

    <!-- 植物 -->
    <div class="plant">
      <!-- 种子 -->
      <img :style="{'opacity': palntIndex == 1 ? '1' : '0'}" class="seed" src="./../../../static/images/plants/plant_01/plant_01.png" alt="">
      <img :style="{'opacity': palntIndex == 2 ? '1' : '0'}" class="seedling" src="./../../../static/images/plants/plant_01/plant_02.png" alt="">
      <img :style="{'opacity': palntIndex == 3 ? '1' : '0'}"  class="seedling" src="./../../../static/images/plants/plant_01/plant_03.png" alt="">
      <img :style="{'opacity': palntIndex > 3 ? '1' : '0'}"  class="seedling" src="./../../../static/images/plants/plant_01/plant_04.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'n22Canvas',
  data () {
    return {
      score: 0,
      time: 60,
      palntIndex: 1
    }
  },
  methods: {
    // 点击阳光
    getSun (event) {
      let ele = event.target
      // 坐标 top right
      ele.style.right = '0px'
      ele.style.top = '0px'
      ele.style.opacity = '0.3'
      ele.style.transition = 'all ' + 1 + 's linear'
      // 禁止点击
      ele.style['pointer-events'] = 'none'
      setTimeout(() => {
        this.$refs.demo_canvas.removeChild(ele)
        this.score++
      }, 1100)
    },

    // 创造阳光
    createSun () {
      let position = this.getPosition()
      let image = new Image()
      image.src = './static/images/plants/sun.gif'
      image.className += 'sun_img'
      image.style.right = position.right + 'px'
      image.style.top = 50 + 'px'
      image.style.transition = 'all ' + 8 + 's linear'
      image.onload = () => {
        this.$refs.demo_canvas.appendChild(image)
      }
      image.addEventListener('touchstart', this.getSun)
      setTimeout(() => {
        image.style.top = this.screenHeight + 50 + 'px'
      }, 200)
    },

    // 获取位置
    getPosition () {
      let right = Math.random() * this.screenWidth
      let top = Math.random() * this.screenHeight
      if (right > this.screenWidth - 50 || top < 100 || top > this.screenHeight - 50) {
        return this.getPosition()
      }
      return {
        right, top
      }
    },

    // 倒计时
    timeStart () {
      let startTime = new Date()
      let allTime = this.time
      setInterval(e => {
        let cha = new Date() - startTime
        this.time = allTime - parseInt(cha / 1000)
      }, 1000)
    },

    // 开始游戏
    startGame () {
      // 计时开始
      this.timeStart()
      // 创造阳光
      setInterval(e => {
        this.palntIndex ++
        if (this.palntIndex == 5) {
          this.palntIndex = 1
        }
        this.createSun()
      }, 1000)
    },

    // 游戏结束
    gameOver () {
      // @todu 清空所有计时器 清空页面数据
    }
  },
  beforeRouteEnter: (to, from, next) => {
    // 禁止页面滚动
    window.utils.ui.disabledBodyScroll(true)
    document.body.style.top = '0px'
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    // 恢复初始状态
    window.utils.ui.disabledBodyScroll(false)
    next()
  },
  mounted () {
    this.startGame()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/assets/css/vars";
.demo_canvas{
  overflow: hidden;
  background-image: url('./../../../static/images/plants/bg.jpg');
  background-size: 100% 100%;
  // 操作区域
  .option{
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    .item{
      font-size: 2rem;
      color: $primary-color;
      width: 150px;
      height: 50px;
      border-radius: 3px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      display: flex;
      align-items: center;
      span{
        position: absolute;
      }
    }
    .score{
      background-image: url('./../../../static/images/plants/score.png');
    }
    .time{
      background-image: url('./../../../static/images/plants/time.jpg');
    }
  }
  .plant{
    width: 100px;
    height: 100px;
    background-size: 100%;
    position: absolute;
    pointer-events: none;
    z-index: 0;
    top: 200px;
    // border: 1px solid black;
    img{
      transition: all .3s linear;
    }
    .seed{
      width: 40px;
      position: absolute;
      bottom: 0px;
      left: 12px;
    }
    // 幼苗
    .seedling{
      width: 80px;
      position: absolute;
      bottom: 0px;
    }
  }
  .sun_img {
    position: absolute;
    z-index: 10;
    width: 50px;
    height: 50px;
    // top: 200px;
    // right: 200px;
    opacity: 1;
  }
}
</style>
