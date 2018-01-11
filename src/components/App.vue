<template>
  <div style="max-width:375px;height:667px;">
		<!-- 在获取用户信息的过程中显示（页面内容待定） -->
    <div v-show="!isLogin">
    </div>

    <div v-show="isLogin" >
      <navigation>
        <router-view></router-view>
      </navigation>
    </div>
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
      isLogin: window.globalConfig.isDebug,
      selected: '1',
      menuConfig: {
        '1': 'home',
        '2': 'productCenter',
        '3': 'myAttendance',
        '4': 'dateManage'
      }
    }
  },
  methods: {
    /**
     * @name 获取用户信息
     */
    getUserMsg () {
      let key = window.utils.format.toDate(new Date(), 'yyyy-MM-dd'),
        hasObj = {}
      hasObj[key] = false
      // 保存已经存储的信息
      window.utils.cache.set('hasPop', hasObj)
      window.utils.http
        .post('RHUSERINFO', {
          password: window.utils.cache.get('LOGINMSG').password
        })
        .then(response => {
          // 存储用户信息
          this.$store.commit('USE_RINFO', response.data)
          if (!window.globalConfig.isDebug) {
            this.$router.push({ name: 'home' })
            this.closeLoadding()
          }
        })
        .catch(error => {
          this.closeLoadding()
          if (error.data && error.data.data == '-1') {
            let temp = window.utils.cache.get('LOGINMSG')
            temp.password = ''
            window.utils.cache.set('LOGINMSG', temp)
          } else if (error.data && error.data.data == '-2') {
            let temp = window.utils.cache.get('LOGINMSG')
            temp.usercode = ''
            temp.password = ''
            window.utils.cache.set('LOGINMSG', temp)
          }
          error.isLogicError && window.utils.ui.alert(error.errorMessage)
          this.$router.push({ name: 'login' })
        })
    },
    /**
     * @description 关闭初始化显示页面
     * 可能会有扩展的方法
     */
    closeLoadding () {
      this.$nextTick(() => {
        this.isLogin = true
      })
    }
  },
  watch: {
     /**
      * @description 点击跳转
      */
    selected (newVal, oldVal) {
      let selectedId = ''
      switch (newVal) {
        case '1':
          selectedId = 'home'
          break
        case '2':
          selectedId = 'appc'
          break
        case '3':
          selectedId = 'appg'
          break
        case '4':
          selectedId = 'apph'
          break
        default:
          break
      }

      // 首页不可修改
      if (selectedId == 'home') {
        this.$router.push({ name: this.menuConfig[newVal] })
      } else {
        // 点击tab判断是否有访问权限
        if (!window.utils.help.hasAccessTo(selectedId, this.$store.state.common.user.menuTree)) {
          window.utils.ui.alert('您无权限访问！请联系管理员')
          this.selected = oldVal
        } else {
          this.$router.push({ name: this.menuConfig[newVal] })
        }
      }
    },

    ['$store.state.common.tabSelected'] (val) {
      this.selected = val
    },

    ['$store.state.common.hasFooter'] (val) {
      val && this.$router.history.current.name == 'home' && (this.selected = '1')
    }
  },
  mounted () {
    // 清除首页弹出框记录信息
    window.utils.cache.set('hasPop', {})

    if (!window.globalConfig.isDebug) {
      // 当存在token的时候 向后台发送请求获取用户信息
      if (window.utils.cache.get('token') && window.utils.cache.get('LOGINMSG')) {
        this.getUserMsg()
      } else {
        setTimeout(() => {
          this.$router.push({ name: 'login' })
          this.closeLoadding()
        }, 300)
      }
    } else {
      this.$store.commit('USE_RINFO', {})
    }
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
