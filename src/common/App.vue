<template>
  <div >
    <!-- <div class="n22-header"></div> -->
		<!-- 在获取用户信息的过程中显示（页面内容待定）
     :enter-active-class="'transition_ani ' + enterClass"
      :leave-active-class="'transition_ani ' + leaveClass"
    -->

    <transition :name="transitionName">
      <navigation>
        <router-view @scroll="scroll" class="child-view"></router-view>
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
      transitionName: '',
      enterClass: '',
      leaveClass: ''
    }
  },
  methods: {
    scroll (e) {
      console.log(e)
    }
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
      // this.enterClass = 'slideInRight'
      // this.leaveClass = 'fadeOut'
      window.globalConfig.animation && (this.transitionName = 'slide-in-right')
    })
    this.$navigation.on('back', (to, from) => {
      window.globalConfig.animation && (this.transitionName = 'slide-out-right')
      // this.enterClass = 'fadeIn'
      // this.leaveClass = 'slideOutRight'
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
.child-view {
  position: absolute;
  top:0px;
  width: 100%;
  height:100vh;
}
.n22-header{
  position: fixed;
  z-index: 10000;
  top: 0;
  width: 100vw;
  height: 44px;
  background: red;
}
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
.slide-in-right-enter-active{
  animation-name: 'slideInRightN';
  animation-duration: .5s;
  pointer-events: none;
}
.slide-in-right-leave-active{
  animation-name: 'fadeOut';
  animation-duration: .5s;
  pointer-events: none;
}

.slide-out-right-enter-active{
  animation-name: 'fadeIn';
  animation-duration: .5s;
  pointer-events: none;
}
.slide-out-right-leave-active{
  animation-name: "slideOutRightN";
  animation-duration: .5s;
  pointer-events: none;
}


.slideInRightN {
  animation-name: slideInRightN;
}

@keyframes slideInRightN {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.slideOutRightN {
  animation-name: slideOutRightN;
}
@keyframes slideOutRightN {
  from {
    transform: translateX(0);
  }
  to {
    visibility: hidden;
    transform: translateX(100%);
  }
}

</style>
