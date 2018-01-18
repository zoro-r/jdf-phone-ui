<template>
  <div class="n22_scroll_y" >
    <div class="scroll_warp" :style="{'transform': 'translate3d(0px,' + touchY + 'px, 0px)','transition-duration':!isTouch? '2000ms':'0ms'}">
      <div class="warp_item" v-for="(item, index) in list" :key="index">
        {{item}}-{{index}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'n22ScrollY',
    props: [],
    data () {
      return {
        isTouch: false,
        list: '11111111111111111111111111111111111111111111111111'.split(''),
        touchY: -500
      }
    },
    watch: {
    },
    mounted () {
      let ele = this.$el, pageStartY, pageEndY, tempY, startTime

      ele.addEventListener('touchstart', (e) => {
        this.isTouch = true
        startTime = new Date()
        pageStartY = e['targetTouches'][0].pageY
        tempY = e['targetTouches'][0].pageY
      })

      ele.addEventListener('touchend', (e) => {
        console.log(1)
        this.isTouch = false
        console.log('距离', pageEndY - pageStartY)
        console.log('时间差', new Date() - startTime)
        this.touchY -= 2000
        setTimeout(() => {
          this.isTouch = true
          // this.touchY = 0
        }, 2000)
      })

      ele.addEventListener('touchmove', (e) => {
        this.isTouch = true
        pageEndY = e['targetTouches'][0].pageY
        this.touchY += (pageEndY - tempY)
        tempY = e['targetTouches'][0].pageY
      })
    }
  }
</script>
<style lang='scss' scoped>
.n22_scroll_y{
  height: 500px;
  width: 100%;
  background: red;
  overflow: hidden;
  .scroll_warp{
    min-height: 1000px;
    transition-property: transform;
    box-sizing: content-box;
    .warp_item{
      z-index: 2;
      height: 100px;
      margin: 10px;
      background: white;
      font-size: 20px;
    }
  }
}
</style>
