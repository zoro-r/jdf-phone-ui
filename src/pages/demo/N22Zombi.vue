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
    <div class="plant" v-for="(item, index) in palntList"
        :style="{'right': item.position.right + 'px','top':item.position.top + 'px','z-index': parseInt(item.position.top)}" :key="index">
      <!-- 种子 -->
      <img :style="{'opacity': item.progressIndex === 1 ? '1' : '0'}" class="seed" src="./../../../static/images/plants/plant_01/plant_01.png" alt="">
      <img :style="{'opacity': item.progressIndex === 2 ? '1' : '0'}" class="seedling" src="./../../../static/images/plants/plant_01/plant_02.png" alt="">
      <img :style="{'opacity': item.progressIndex === 3 ? '1' : '0'}"  class="seedling" src="./../../../static/images/plants/plant_01/plant_03.png" alt="">
      <img :style="{'opacity': item.progressIndex > 3 ? '1' : '0'}"  class="seedling" src="./../../../static/images/plants/plant_01/plant_04.png" alt="">
    </div>
    <!-- 存放所有的图片 -->
    <div style="opacity: 0;point-events: none">
      <img v-for="(item, index) in allImg" :key="index" :src="item" alt="">
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
      palntList: [],
      intervalMap: {},
      allImg: [
        './static/images/plants/bg.jpg',
        './static/images/plants/score.png',
        './static/images/plants/sun.gif',
        './static/images/plants/dust.png',
        './static/images/plants/time.jpg',
        './static/images/plants/plant_01/plant_01.png',
        './static/images/plants/plant_01/plant_02.png',
        './static/images/plants/plant_01/plant_03.png',
        './static/images/plants/plant_01/plant_04.png'
      ]
    }
  },
  methods: {
    // 初始化游戏
    initGame () {
      let imgList = this.$refs.demo_canvas.getElementsByTagName('img')
      let i = 0
      for (let j = 0; j < imgList.length; j++) {
        imgList[j].onload = () => {
          i++
          if (i === imgList.length) {
            this.startGame()
          }
        }
      }
    },
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
        // 判断是否为灰尘
        if (ele.classList.contains('dust_img')) {
          this.score -= 10
        } else {
          this.score += 10
        }
        // 当分数为50的时候则创造植物 植物的最大数不能超过9
        if (this.score * 10 >= 50 && this.score % 50 === 0 && this.palntList.length <= 9) {
          this.createPlant()
        }
      }, 1100)
    },

    /**
     * @name 创造阳光
     * @param isSun 是否为创造太阳
     */
    createSunOrDust (isSun) {
      let position = this.getPosition(this.screenWidth - 50)
      let image = new Image()
      image.src = isSun ? './static/images/plants/sun.gif' : './static/images/plants/dust.png'
      image.className += (isSun ? ' sun_img' : 'dust_img sun_img')
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

    // 创造植物
    createPlant () {
      let self = this
      // top 19% 67%
      let item = {
        index: 0, // 记录创造的次数
        position: self.getPosition(self.screenWidth - 90, 0, self.screenHeight * 0.57, self.screenHeight * 0.30),
        progressIndex: 1,
        // 创造阳光
        makeSun: function () {
          self.createSunOrDust(true)
          this.index ++
          self.intervalMap['createPlant' + self.palntList.length] = setInterval(e => {
            this.index ++
            if (this.index === 4) {
              self.createSunOrDust(this.index !== 4)
              // 规制
              this.index = 0
            } else {
              self.createSunOrDust(true)
            }
          }, 1000)
        },
        grow: function () {
          let tempInterval = setInterval(e => {
            this.progressIndex ++
            if (this.progressIndex === 5) {
              clearInterval(tempInterval)
            }
          }, 1000)
        }
      }
      // 植物成长
      item.grow()
      // 创造阳光
      item.makeSun()
      this.palntList.push(item)
    },

    /**
     * @name 获取位置
     * @param maxRight 距离右边最大的距离
     * @param minRight 距离右边最小的距离
     * @param maxTop 距离顶部最大的距离
     * @param minTop  距离顶部最小的距离
     */
    getPosition (maxRight = this.screenWidth, minRight = 0, maxTop = this.screenHeight, minTop = 0) {
      let right = Math.random() * this.screenWidth
      let top = Math.random() * this.screenHeight
      if (right > maxRight || right < minRight || top > maxTop || top < minTop) {
        return this.getPosition(maxRight, minRight, maxTop, minTop)
      }
      return {
        right, top
      }
    },

    // 倒计时
    timeStart () {
      let startTime = new Date()
      let allTime = this.time
      this.intervalMap['timeStart'] = setInterval(e => {
        let cha = new Date() - startTime
        this.time = allTime - parseInt(cha / 1000)
        if (this.time <= 0) {
          this.gameOver()
        }
      }, 1000)
    },

    // 开始游戏
    startGame () {
      // 计时开始
      this.timeStart()
      // 创造植物
      this.createPlant()
    },

    // 游戏结束
    gameOver () {
      // @todu 清空所有计时器 清空页面数据
      for (let key in this.intervalMap) {
        clearInterval(this.intervalMap[key])
      }
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
    this.initGame()
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
    z-index: 10000;
    width: 50px;
    height: 50px;
    // top: 200px;
    // right: 200px;
    opacity: 1;
  }
}
</style>
