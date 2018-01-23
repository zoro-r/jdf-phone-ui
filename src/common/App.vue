<template>
  <div >
    <!-- <div class="header"></div> -->
		<!-- 在获取用户信息的过程中显示（页面内容待定） -->
    <transition
      :enter-active-class="'transition_ani ' + enterClass"
      :leave-active-class="'transition_ani ' + leaveClass">
      <navigation>
        <router-view class="child-view" :style="{'min-height':screenHeight + 'px'}"></router-view>
      </navigation>
    </transition>
  </div>
</template>

<script>
// import user from './../assets/data/user'
// import Toast from "./common/Toast.vue";
export default {
  name: 'app',
  components: {
    // Toast
  },
  data () {
    return {
      transitionName: 'slide-fade',
      enterClass: '',
      leaveClass: ''
    }
  },
  methods: {
  },
  watch: {
    // '$route' (to, from) {
    //   // const toDepth = to.path.split('/').length
    //   // const fromDepth = from.path.split('/').length
    //   // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    //   // this.transitionName == 'slide-left' ? this.transitionName = 'slide-right' : this.transitionName = 'slide-left'
    // }
  },
  mounted () {
    this.$navigation.on('forward', (to, from) => {
      this.enterClass = 'slideInRight'
      this.leaveClass = 'fadeOut'
    })
    this.$navigation.on('back', (to, from) => {
      this.enterClass = 'fadeIn'
      this.leaveClass = 'slideOutRight'
    })
    // this.$navigation.on('replace', (to, from) => {})
    // this.$navigation.off('refresh', (to, from) => {})
    // this.$navigation.on('reset', () => {})
  }
}
</script>

<style lang="scss">
.mint-tab-item {
  font-size: 12px;
  color: rgb(189, 189, 189);
  .icon_tabs {
    background-size: 100%;
  }
  &.is-selected {
    color: #3399ff;
  }
}
.child-view{
  position: absolute;
  width: 100%;
  min-height: 500px;
}
.transition_ani{
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
