<template>
  <div class="demo_canvas" ref="demo_canvas">
    <div class="option">
      <span class="score">{{score}}分</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'n22Canvas',
  data () {
    return {
      score: 0
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
      // 禁止点击
      ele.style['pointer-events'] = 'none'
      setTimeout(() => {
        this.$refs.demo_canvas.removeChild(ele)
        this.score++
      }, 1100)
    },
    // 创造阳光
    createSun () {
      let right = Math.random() * this.screenWidth
      let top = Math.random() * this.screenHeight
      let image = new Image()
      image.src = './../../../static/images/plants/sun.gif'
      image.className += 'sun_img'
      image.style.right = right + 'px'
      image.style.top = top + 'px'
      image.onload = () => {
        this.$refs.demo_canvas.appendChild(image)
      }
      image.addEventListener('touchstart', this.getSun)
    }
  },
  mounted () {
    setInterval(e => {
      this.createSun()
    }, 1000)
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
    position: relative;
    .score{
      font-size: $font-md;
      position: absolute;
      color: $primary-color;
      right: 100px;
      top: 15px;
    }
  }
  .sun_img {
    position: absolute;
    transition: all 1s linear;
    z-index: 10;
    width: 50px;
    height: 50px;
    // top: 200px;
    // right: 200px;
    opacity: 1;
  }
}
</style>
