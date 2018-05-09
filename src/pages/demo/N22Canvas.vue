<template>
  <div class="demo_canvas" ref="demo_canvas">
    <div class="score">
      {{score}}分
    </div>
    <canvas :width="screenWidth + 'px'" :height="screenHeight + 'px'" ref="game_content" id='game_content'>
      我是测试的
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'n22Canvas',
  components: {
  },
  data () {
    return {
      score: 0,
      keyframesOptions: {
        iterations: 1,
        iterationStart: 0,
        delay: 0,
        endDelay: 0,
        direction: 'alternate',
        duration: 1000,
        fill: 'forwards',
        easing: 'ease-out'
      },
      sunUrl: './../../../static/images/plants/sun.gif',
      plantUrl: './../../../static/images/plants/idle/idle_00.png'
    }
  },
  methods: {
    // 获取分数
    getImg (ele) {
      ele.style['pointer-events'] = 'none'
      // 禁止点击
      let left = ele.x,
        top = ele.y
      console.log(left, top)
      let obj = [{
        'transform': 'translate(0,0)',
        'opacity': 1
      }, {
        offset: 1,
        transform: 'translate(' + (this.screenWidth - left - 100) + 'px,-' + top + 'px)',
        opacity: 0
      }]
      // let sunImg = document.getElementById('sun_img')
      ele.animate(obj, this.keyframesOptions)
      setTimeout(() => {
        this.score ++
      }, 1000)
    },
    // 创造太阳
    createSun (x, y) {
      if (this.screenHeight * y < 80) return
      let img = new Image()
      img.src = this.sunUrl
      img.className += ' sun_img'
      img.style.left = this.screenWidth * x + 'px'
      img.style.top = this.screenHeight * y + 'px'
      img.addEventListener('click', e => {
        this.getImg(e.target)
      })
      this.$refs.demo_canvas.appendChild(img)
    },
    // 创造植物
    createPlant (x, y) {
      let img = new Image()
      img.src = this.plantUrl
      img.className += ' sun_img plant'
      img.style.left = this.screenWidth * x + 'px'
      img.style.top = this.screenHeight * y + 'px'
      this.$refs.demo_canvas.appendChild(img)
    }
  },
  mounted () {
    this.createPlant(0.1, 0.1)
    setInterval(() => {
      let x = Math.random(1),
        y = Math.random(1)
      this.createSun(x, y)
    }, 100)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/assets/css/vars";
.demo_canvas{
  .sun_img {
    position: absolute;
  }
  .plant{
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
