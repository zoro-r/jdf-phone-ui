<!--  v-clickoutside:touchstart="swipeMove" @click.native="swipeMove()"-->
<template>
  <div class="n22_cell_swipe"
    v-clickoutside:touchstart="swipeMove"
    @click="swipeMove()"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag">
      <!--主内容区域 -->
      <div class="swipt_main"
           :style="{'transform': 'translateX(' + dragX + 'px)',
                    'transition': 'transform ' + aniTime + 's linear'}">
            <slot name = "main"></slot>
			</div>

      <!-- 右侧滑动按钮区域 -->
      <div class="swipt_right " name ="right"
           :style="{'transform': 'translateX(' + dragX + 'px)',
                    'min-width': Math.abs(dragX) + 'px',
                    'width': Math.abs(dragX) + 'px',
                    'transition': 'width ' + aniTime + 's linear'}">
            <slot name = "right" class="right_item"></slot>
			</div>
  </div>
</template>

<script>
let x
import Clickoutside from './../../directives/clickoutside'
export default {
  name: 'n22CellSwipe',
  data () {
    return {
      dragX: 0,
      tempDragX: 0,
      aniTime: 0, // 动画时间
      swiping: false
    }
  },
  directives: {
    Clickoutside
  },
  props: {
    maxWidth: {
      type: Number,
      default: 100
    }
  },
  methods: {
    // 点击不在当前区域的时候
    swipeMove () {
      this.dragX = 0
    },
    // touchStart
    startDrag (e) {
      this.tempDragX = this.dragX
      x = e.targetTouches[0].pageX - this.dragX
    },
    // touchMove
    onDrag (e) {
      this.aniTime = 0
      let x1 = e.targetTouches[0].pageX
      let tempCha = x1 - x
      if (tempCha < 0 && tempCha > -this.maxWidth * 2) {
        this.dragX = tempCha
      } else if (tempCha >= 0) {
        this.dragX = 0
      }
    },
    // touchEnd
    endDrag () {
      this.aniTime = 0.2
      // 当滑动的距离0 - 50 恢复原状
      if (this.dragX > -this.maxWidth / 2 && this.dragX <= 0) {
        this.dragX = 0
      } else {
        this.dragX = -this.maxWidth
      }
    }
  },
  // 当组件被停用时调用
  deactivated () {
  }
}
</script>
<style lang='scss'>
.n22_cell_swipe{
  overflow: hidden;
  width: 100%;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  .swipt_main{
    width: 100%;
    flex-shrink:0;
    height: 100%;
  }
  .swipt_right{
    // min-width: 800px;
    height: 100%;
    overflow: hidden;
    .right_item{
      min-width: 50px;
    }
  }
}
</style>

