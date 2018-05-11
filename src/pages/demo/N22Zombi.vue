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
      image.style.transition = 'all ' + 10 + 's linear'
      image.onload = () => {
        this.$refs.demo_canvas.appendChild(image)
      }
      image.addEventListener('touchstart', this.getSun)
      setTimeout(() => {
        image.style.top = this.screenHeight + 10 + 'px'
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
    }
  },
  mounted () {
    // 禁止页面滚动
    window.utils.ui.disabledBodyScroll(true)
    setInterval(e => {
      this.createSun()
    }, 200)
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
    z-index: 10;
    width: 50px;
    height: 50px;
    // top: 200px;
    // right: 200px;
    opacity: 1;
  }
}
</style>
