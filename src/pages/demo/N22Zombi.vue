<template>
  <div class="page_zombi" ref="demo_canvas">
    <!-- 游戏加载 -->
    <div class="game_loadding" v-if="!openGame" >
      <!-- 进度条 -->
      <div class="loadding_main">
        <div style="position:absolute;bottom:-1px;transition:width .3s linear" :style="{width: progress}">
          <img src="./../../../static/images/plants/loadding/loadding_2.png" alt="">
        </div>
      </div>
      <img class="loadding_text" src="./../../../static/images/plants/loadding/loadding_3.png" alt="">
    </div>
    <!-- 游戏中心 -->
    <div class="demo_canvas"  v-show="openGame">
      <!-- 倒计时 -->
      <div class="time_over" v-show="overTime !== 0">
        <img v-if="overTime > 0" :src="'./static/images/plants/timeOver/time_' + overTime + '.png'" alt="">
      </div>
      <!-- 顶部操作区域 -->
      <div class="option" v-show="overTime === 0">
        <div class="time item animated bounceIn">
          <span style="right:20px">{{time}}秒</span>
        </div>
        <div class="score item animated bounceIn">
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
  </div>
</template>

<script>
export default {
  name: 'n22Canvas',
  data () {
    return {
      openGame: false, // 是否开启项目
      createScore: 50, // 当分数为多少的时候生产植物
      progress: 0, // 加载进度
      scoreObj: {
        sunNum: 0, // 阳光的数量
        dustNum: 0 // 灰尘的数量
      },
      overTime: 3, // 启动倒计时
      time: 30, // 整个游戏的倒计时
      palntList: [], // 存放的植物列表
      intervalMap: {}, // 存放所有的页面定时器，方便结束的时候清除
      allImg: [ // 页面需要预加载的页面
        './static/images/plants/timeOver/time_1.png',
        './static/images/plants/timeOver/time_2.png',
        './static/images/plants/timeOver/time_3.png',
        './static/images/plants/bg.jpg',
        './static/images/plants/score.png',
        './static/images/plants/sun.png',
        './static/images/plants/dust.png',
        './static/images/plants/time.png',
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
      console.log('初始化项目图片--------------')
      let imgList = this.$refs.demo_canvas.getElementsByTagName('img')
      let i = 0
      for (let j = 0; j < imgList.length; j++) {
        imgList[j].onload = () => {
          i++
          this.progress = i * 100 / imgList.length + '%'
          console.log(this.progress)
          if (i === imgList.length) {
            setTimeout(() => {
              this.openGame = true
              // 启动游戏 倒计时
              this.timeOver()
            }, 1500)
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
          // 如果当前分数为0则不计数
          if (this.score !== 0) {
            this.scoreObj.dustNum ++
          }
          // 当灰尘点击三个的时候，减去植物的数量***植物的数量为一个
          if (this.scoreObj.dustNum !== 0 && this.scoreObj.dustNum % 3 === 0 && this.palntList.length > 1) {
            // 减少植物
            this.palntList.pop()
            // 重新设定最小的生产植物的分数
            this.createScore = this.score + 50
            // 清楚生成定时器
            clearInterval(this.intervalMap['createPlant' + (this.palntList.length - 1)])
          }
        } else {
          this.scoreObj.sunNum ++
        }
        // 当分数为50的时候则创造植物 植物的最大数不能超过9
        if (this.palntList.length <= 9 && this.score === this.createScore && this.score >= 50) {
          this.createScore = this.score + 50
          this.createPlant()
        }
      }, 1100)
    },

    /**
     * @name 创造阳光
     * @param isSun 是否为创造太阳
     */
    createSunOrDust (isSun) {
      // console.log('创造阳光')
      let position = this.getPosition(this.screenWidth - 50)
      let image = new Image()
      image.src = isSun ? './static/images/plants/sun.png' : './static/images/plants/dust.png'
      image.className += (isSun ? ' sun_img' : 'dust_img sun_img')
      image.style.right = position.right + 'px'
      image.style.top = 50 + 'px'
      image.style.transition = 'all ' + 6 + 's linear'
      image.onload = () => {
        this.$refs.demo_canvas.appendChild(image)
      }
      image.addEventListener('touchstart', this.getSun)
      // 小球下落
      setTimeout(() => {
        image.style.top = this.screenHeight + 50 + 'px'
        // 6s后移除当前数据
        setTimeout(() => {
          try {
            this.$refs.demo_canvas.removeChild(image)
          } catch (error) {
            console.log('移除失败')
          }
        }, 6000)
      }, 200)
    },

    // 创造植物
    createPlant () {
      console.log('生产植物-----')
      let self = this
      // top 19% 67%
      let item = {
        index: 0, // 记录创造的次数
        position: self.getPosition(self.screenWidth - 90, 0, self.screenHeight * 0.57, self.screenHeight * 0.30),
        progressIndex: 1,
        // 创造阳光
        makeSunOrDust: function () {
          self.createSunOrDust(true)
          this.index ++
          self.intervalMap['createPlant' + self.palntList.length] = setInterval(e => {
            // 每隔一秒生产一个阳光
            self.createSunOrDust(true)
            this.index ++
            if (this.index === 3) {
              // 每隔三秒生产一个灰尘
              self.createSunOrDust(false)
              // 规制
              this.index = 0
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
      // 创造阳光或者灰尘
      item.makeSunOrDust()
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
    // 启动倒计时
    timeOver () {
      let startTime = new Date()
      let allTime = this.overTime
      let timeOverInterval = setInterval(e => {
        let cha = new Date() - startTime
        this.overTime = allTime - parseInt(cha / 1000)
        if (this.overTime <= 0) {
          this.startGame()
          clearInterval(timeOverInterval)
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
  },
  computed: {
    // 分数
    score: vm => {
      let score = vm.scoreObj.sunNum * 10 - vm.scoreObj.dustNum * 10
      return score > 0 ? score : 0
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/assets/css/vars";
.page_zombi{
  width: 100vw;
  height: 100vh;
  .game_loadding{
    pointer-events: none;
    overflow: hidden;
    background-image: url('./../../../static/images/plants/loadding_bg.jpg');
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    .loadding_main{
      background-image: url('./../../../static/images/plants/loadding/loadding_1.png');
      background-size: 100% 100%;
      position: absolute;
      top: 40%;
      margin-left: 10%;
      width: 80%;
      height: 80px;
      img{
        bottom: 0px;
        height: 20px;
        width: 100%;
      }
    }
    .loadding_text{
      position: absolute;
      top: calc(40% + 110px);
      width: 90px;
      margin-left: calc(50% - 45px);
    }
  }
  .demo_canvas{
    overflow: hidden;
    background-image: url('./../../../static/images/plants/bg.jpg');
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    .time_over{
      width: 100vw;
      height: 100vh;
      background: rgba(1,1,1,.5);
      text-align: center;
      img{
        top: 200px;
        height: 100px;
        margin-top: 200px;
      }
    }
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
        width: 145px;
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
        background-image: url('./../../../static/images/plants/time.png');
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
        width: 7rem;
        position: absolute;
        bottom: 0px;
      }
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
