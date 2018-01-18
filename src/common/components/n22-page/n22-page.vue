<template>
  <div class="page">
		<div class="page_header" ref='page_header'>
      <slot name="header"></slot>
    </div>
    <div class="page_content" :style="{'margin-top':contentHeight + 'px'}" slot="content" id="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'n22Page',
  data () {
    return {
      contentHeight: 0
    }
  },
  mounted () {
    this.$nextTick(e => {
      // console.log(this.$refs.page_header.getElementsByClassName('mint-header is-fixed'))
      let ele = this.$refs.page_header.getElementsByClassName('mint-header is-fixed')[0]
      this.contentHeight = ele ? ele.clientHeight + 1 : 0
    })
    let ele = this.$el, startX, endX
    ele.addEventListener('touchstart', (e) => {
      startX = e['targetTouches'][0].pageX
    })
    ele.addEventListener('touchmove', (e) => {
      this.$emit('touchMove', e)
      endX = e['targetTouches'][0].pageX
    })
    ele.addEventListener('touchend', (e) => {
      if (endX - startX < 0) {
        // 向右滑动
        this.$emit('touchRight')
      } else {
        // 向左滑动
        this.$emit('touchLeft')
      }
    })
  }
}
</script>
<style lang='scss'>
.page_content{
  overflow-x: hidden;
}
.page_header {
  /* position: fixed; */
}
</style>

