<template>
  <div class="page">
		<div class="page_header" ref='page_header'>
      <slot name="header"></slot>
    </div>
    <div class="page_content" :style="{'margin-top':contentHeight + 'px'}">
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
      this.contentHeight = this.$refs.page_header.getElementsByClassName('mint-header')[0].clientHeight + 1
    })
  }
}
</script>
<style>
.page_header {
  /* position: fixed; */
}
</style>

