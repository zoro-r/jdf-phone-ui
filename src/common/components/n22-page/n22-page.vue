<template>
  <div class="page">
    <!-- header -->
		<div class="page_header" ref='page_header'>
      <slot name="header"></slot>
    </div>
    <!-- 内容滚动区域 -->
    <div @scroll="scroll"
         class="page_content scroll_content scroll-content"
         :calss="[modal ? 'model' : '']"
         :style="{
                  'top': bodyScroll ? (topHeight + 'px') : '0px',
                  'height': bodyScroll ? 'calc(100vh - '+ (topHeight - 0 + bottomHeight)  +'px)':'auto',
                  'margin-top': bodyScroll ? '0px':(topHeight + 'px') ,
                  '-webkit-overflow-scrolling':canScroll ? 'touch' : 'auto',
                  'overflow':bodyScroll ? 'scroll' : 'none',
                  'position': bodyScroll?'absolute':''
                }"
      >
      <slot name="content"></slot>
    </div>
    <!-- 底部导航 -->
    <div class="page_footer" ref='page_footer'>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'n22Page',
  data () {
    return {
      topHeight: 0,
      bottomHeight: 0,
      isMobile: window.globalConfig.platform === 'native',
      canScroll: true
    }
  },
  props: {
    // 是否禁止页面滚动
    disabled: {
      type: Boolean,
      default: false
    },
    // 不需要计算margin-top
    noTop: {
      type: Boolean,
      default: false
    },
    // 判断是否为弹出框页面
    modal: {
      type: Boolean,
      default: false
    },
    // 是否有底部导航
    hasFooter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 初始化页面布局
    initPage () {
      !this.noTop && this.$nextTick(e => {
        let headerEle = this.$refs.page_header.getElementsByClassName('mint-header is-fixed')[0],
          bottomEle = this.$refs.page_footer.getElementsByClassName('footer')[0]
        this.bottomHeight = bottomEle ? bottomEle.clientHeight + 1 : 0
        this.topHeight = headerEle ? headerEle.clientHeight + 1 : 0
      })
      // 派发滚动事件
      if (!this.isMobile) {
        document.addEventListener('scroll', this.scroll)
      }
    },
    // 滚动事件派发
    scroll (e) {
      if (this.isMobile) {
        this.$emit('scroll', {top: e.target.scrollTop})
      } else {
        this.$emit('scroll', {top: window.scrollY})
      }
    }
  },
  mounted () {
    this.initPage()
  },
  computed: {
    // 判断是否可滚动
    bodyScroll: function () {
      return this.isMobile || this.modal
    }
  },
  watch: {
    // 监听滚动变化
    disabled (newVal) {
      if (newVal) {
        this.canScroll = this.isMobile && !newVal
      } else {
        setTimeout(() => {
          this.canScroll = this.isMobile && !newVal
        }, 250)
      }
    }
  },
  // 初始化数据
  activated () {
    this.initPage()
  },
  // 当组件被停用时调用
  deactivated () {
    document.removeEventListener('scroll', this.scroll)
  }
}
</script>
<style lang='scss'>
.page{
  background: rgb(240, 239, 245);
}
.page_content{
  overflow-x: hidden;
  width:100%;
}
.page_header {
  /* position: fixed; */
}
</style>

