<template>
    <div class="page_animation">
      <mt-header title="动画" slot="header" :fixed="true" >
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>
      <div slot="content">
        <a href="https://github.com/daneden/animate.css">参考地址</a>
        <div class="animations animated" :class="animation">
          {{animation}}
        </div>
        <mt-button @click="changeAnimation()">切换动画</mt-button>
        <h3>transition 动画</h3>
        <transition :name="transitionName" >
          <div class="animations" v-show="show">
            {{animation}}
          </div>
        </transition>
        <mt-button @click="show = !show">显示/隐藏</mt-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'n22Template',
  components: {},
  directives: {},
  data () {
    return {
      animation: 'zoomInRight',
      transitionName: 'slide-fade',
      show: false
    }
  },
  created () {},
  computed: {},
  methods: {
    /** @name 初始化数据 */
    init () {},
    changeAnimation () {
      this.animation = this.animation == 'zoomOutLeft' ? 'zoomInRight' : 'zoomOutLeft'
    }
  },
  watch: {},
  mounted () {
    this.init()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.page_animation{
  .animations{
    width: 100px;
    height: 100px;
    background: darkgoldenrod;
  }
  .slide-fade-enter-active {
    transition: all 3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter{
    transform: translateX(10px);
    opacity: 0.5;
  }
  .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(30px);
    opacity: 0.5;
  }

}
</style>
