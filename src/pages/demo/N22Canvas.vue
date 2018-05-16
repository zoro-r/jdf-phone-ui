<template>
  <div class="demo_canvas" ref="demo_canvas">
    <div class="score">
      {{score}}分
    </div>
    <canvas :width="screenWidth + 'px'" :height="screenHeight + 'px'" ref="game_content" id='game_content'>
      我是测试的
    </canvas>
    <div style="position:absolute;opacity: 0;top:0px;z-index:-10">
      <img v-for="(item, index) in imageList" :key="index"
          :src="'./../../../static/images/plants/zombies/dieboom/dieboom_'+ (index < 10 ? '0' + index : index) +'.png'" alt="">
    </div>
    <!-- <n22-sun ref="sun_ball"></n22-sun> -->
  </div>
</template>

<script>
export default {
  name: 'n22Canvas',
  components: {
    n22Sun: r => { require.ensure([], () => r(require('./commponts/n22-sun.vue')), 'n22Sun') }
  },
  data () {
    return {
      score: 0,
      ctx: '',
      sunUrl: require('./../../../static/images/plants/sun.png'),
      plantUrl: '',
      imageList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    }
  },
  methods: {
    // 获取分数
    getImg (ele) {
      ele.target.style['opacity'] = '0'
      ele.target.style['pointer-events'] = 'none'
      ele.target.style['z-index'] = '0'
      console.log(ele)
      this.$refs.sun_ball.drop(ele.target)
      setTimeout(() => {
        this.$refs.demo_canvas.removeChild(ele.target)
        this.score++
      }, 1300)
    },
    // 创造太阳
    createSun (x, y) {
      console.log(x, y)
      let left = this.screenWidth * Math.random(1)
      let top = this.screenHeight * Math.random(1)
      // 需要在植物的左右
      if (left < x - 20 || left > x + 90 || top < y - 20 || y > y + 90) {
        this.createSun(x, y)
        return
      }
      // 不能超过屏幕
      if (left < 0 || left > this.screenWidth - 78 || top < 100 || top > this.screenHeight - 78) {
        this.createSun(x, y)
        return
      }
      let img = new Image()
      img.src = this.sunUrl
      img.className += ' sun_img'
      img.style.left = left + 'px'
      img.style.top = top + 'px'
      img.addEventListener('click', e => {
        this.getImg(e)
      })
      this.$refs.demo_canvas.appendChild(img)
    },
    // 创造植物
    createPlant () {
      // let left = this.screenWidth * Math.random(1)
      // let top = this.screenHeight * Math.random(1)
      let left = 100
      let top = 100
      // 不能超过屏幕
      if (left < 0 || left > this.screenWidth - 78 || top < 100 || top > this.screenHeight - 78) {
        this.createPlant()
        return
      }
      let img = new Image()
      img.src = this.plantUrl
      img.className += ' sun_img plant'
      img.style.left = left + 'px'
      img.style.top = top + 'px'
      this.$refs.demo_canvas.appendChild(img)
      // 创造阳光
      // let num = 0
      // let interVal = setInterval(() => {
      //   num++
      //   if (num > 21) {
      //     clearInterval(interVal)
      //   }
      //   // this.createSun(left, top)
      // }, 1000)
    },
    clearCanvas () {
      this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
    },
    // 画植物
    drawPlant (imgUrl, i) {
      let bg = new Image()
      bg.src = imgUrl
      bg.onload = () => {
        this.clearCanvas()
        this.ctx.drawImage(bg, 0, 0, 49, 47)
      }
    },
    // 画僵尸
    drawZombi (imgUrl) {
      let bg = new Image()
      bg.src = imgUrl
      bg.onload = () => {
        this.clearCanvas()
        this.ctx.drawImage(bg, 100, 100, 200, 200)
      }
    }
  },
  mounted () {
    // 初始化ctx
    this.ctx = this.$refs.game_content.getContext('2d')
    // this.drawPlant()
    // this.createPlant()
    let i = 0
    setInterval(() => {
      // let sunUrl = './../../../static/images/plants/idle/idle_' + (i >= 10 ? i : '0' + i) + '.png'
      let zomBiUrl = './../../../static/images/plants/zombies/dieboom/dieboom_' + (i >= 10 ? i : '0' + i) + '.png'
      // this.drawPlant(sunUrl, 1)
      this.drawZombi(zomBiUrl, 2)
      this.clearCanvas()
      i++
      if (i >= 18) {
        i = 0
      }
    }, 200)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/assets/css/vars";
.demo_canvas{
  .sun_img {
    position: absolute;
    z-index: 10;
  }
  .plant{
    transition: all .2s linear;
    // z-index: 10;
    pointer-events: none;
  }
  .score{
    position: absolute;
    right: 30px;
    top: 30px;
    width: 100px;
    height: 50px;
    background: rgba(0, 0, 255, .3);
    border-radius: 10px;
    color: white;
    font-size: 2rem;
    line-height: 50px;
    text-align: center;
    z-index: 100;
    pointer-events: none;
  }
}
</style>
