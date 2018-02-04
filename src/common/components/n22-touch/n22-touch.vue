<template>
  <div :class="touchState" class="n22-commpont-touch" style="overflow:hidden;position: relative;">
    <div class="swiper" :style="{'transform': 'translate3d(' + touchX + 'px, 0px, 0px)','transition-duration':!isTouch? '200ms':'0ms'}">
      <div class="swiper-item" >
        <slot name="left"></slot>
      </div>
      <div class="swiper-item">
        <slot name="middle"></slot>
      </div>
       <div class="swiper-item">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
// @待修改
export default {
  name: 'n22Touch',
  data () {
    return {
      width: document.documentElement.clientWidth,
      touchX: 0,
      isTouch: false,
      touchState: ''
    }
  },
  methods: {
    _initEvent () {
      let ele = this.$el, startX, touchStartX, touchEndX, tempX
      ele.addEventListener('touchstart', (e) => {
        tempX = this.touchX
        this.isTouch = true
        this.touchState = 'touchstart'
        startX = e['targetTouches'][0].pageX
        touchStartX = e['targetTouches'][0].pageX
        touchEndX = e['targetTouches'][0].pageX
      })

      ele.addEventListener('touchend', (e) => {
        this.touchState = 'touchend'
        if (this.touchX >= 0) {
          this.touchX = 0
          return
        } else if (this.touchX <= -this.width * 2) {
          this.touchX = -this.width * 2
          return
        }

        this.isTouch = false
        let tempCha = touchEndX - touchStartX
        if (Math.abs(tempCha) < this.width / 2) {
          this.touchX = -this.width
          return
        }

        if (tempCha > 0) {
          if (tempX == -this.width) {
            this.$emit('touchRight')
            this.touchX = 0
          } else {
            this.touchX = -this.width
          }
        } else if (tempCha < 0) {
          if (tempX == -this.width) {
            this.touchX = -this.width * 2
            this.$emit('touchLeft')
          } else {
            this.touchX = -this.width
          }
        }

        setTimeout(() => {
          this.$emit('touchEnd')
          this.isTouch = true
          this.touchX = -this.width
        }, 201)
        // 返回第二页
        // this.touchX = -this.width
      })

      ele.addEventListener('touchmove', (e) => {
        this.touchState = 'touchmove'
        this.$emit('touchMove')
        e.preventDefault()
        if (this.touchX > 20) return
        if (this.touchX < -this.width * 2) return
        let x = e['targetTouches'][0].pageX
        touchEndX = e['targetTouches'][0].pageX
        let cha = x - startX
        startX = x
        this.touchX += cha
      })
    }
  },
  mounted () {
    this.width = document.documentElement.clientWidth
    this.touchX = -this.width
    this._initEvent()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.n22-commpont-touch{
  // height: 300px;
  width: 100%;
  &.touchmove{
    pointer-events: none;
  }
  .swiper{
     width: 100%;
    //  height: 300px;
     position: relative;
     z-index: 1;
     transition-property: transform;
     box-sizing: content-box;
     display: flex;
    .swiper-item{
      flex-shrink:0;
      // height: 300px;
      width: 100vw;
      min-width: 100vw;
      // color: white;
      font-size: 15px;
      position: relative;
      &:nth-of-type(2){
        border-left: 1px solid rgba(0,0,0,.1);
        border-right: 1px solid rgba(0,0,0,.1)
      }
    }
  }

}
</style>
