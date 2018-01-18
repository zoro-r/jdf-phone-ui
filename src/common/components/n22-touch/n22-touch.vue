<template>
  <div class="n22-commpont-touch" style="overflow:hidden;position: relative;">
    <div class="swiper" :style="{'transform': 'translate3d(' + touchX + 'px, 0px, 0px)','transition-duration':!isTouch? '200ms':'0ms'}">
      <div class="swiper-item" style="background:blue" >
        1
      </div>
      <div class="swiper-item" style="background:green" >
        2
      </div>
       <div class="swiper-item" style="background:black" >
        3
      </div>
    </div>
  </div>
</template>
<script>
let width = document.documentElement.clientWidth
// @待修改
export default {
  name: 'n22Touch',
  data () {
    return {
      touchX: -width,
      isTouch: false
    }
  },
  components: {
  },
  props: {
  },
  methods: {
  },
  mounted () {
    let ele = this.$el, startX, touchStartX, touchEndX, tempX
    ele.addEventListener('touchstart', (e) => {
      tempX = this.touchX
      this.isTouch = true
      startX = e['targetTouches'][0].pageX
      touchStartX = e['targetTouches'][0].pageX
    })

    ele.addEventListener('touchend', (e) => {
      setTimeout(() => {
        // this.isTouch = true
        // this.touchX = -width
      }, 220)
      if (this.touchX >= 0) {
        this.touchX = 0
        return
      } else if (this.touchX <= -width * 2) {
        this.touchX = -width * 2
        return
      }

      this.isTouch = false
      let tempCha = touchEndX - touchStartX
      if (Math.abs(tempCha) < width / 2) {
        this.touchX = -width
        return
      }

      if (tempCha > 0) {
        if (tempX == -width) {
          this.touchX = 0
        } else {
          this.touchX = -width
        }
      } else if (tempCha < 0) {
        if (tempX == -width) {
          this.touchX = -width * 2
        } else {
          this.touchX = -width
        }
      }
    })

    ele.addEventListener('touchmove', (e) => {
      e.preventDefault()
      if (this.touchX > 20) return
      if (this.touchX < -width * 2) return
      let x = e['targetTouches'][0].pageX
      touchEndX = x
      let cha = x - startX
      startX = x
      this.touchX += cha
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.n22-commpont-touch{
  height: 300px;
  width: 100%;
  .swiper{
     width: 100%;
     height: 300px;
     position: relative;
     z-index: 1;
     transition-property: transform;
     box-sizing: content-box;
     display: flex;
    .swiper-item{
      flex-shrink:0;
      height: 300px;
      width: 100%;
      color: white;
      font-size: 15px;
      position: relative;
    }
  }

}
</style>
