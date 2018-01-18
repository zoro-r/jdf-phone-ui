<template>
  <div >
		<!-- 在获取用户信息的过程中显示（页面内容待定） -->
      <navigation>
        <router-view></router-view>
      </navigation>
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
      transitionName: 'slide-right'
    }
  },
  methods: {
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  mounted () {
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
</style>
