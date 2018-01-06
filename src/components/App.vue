<template>
  <div>
		<!-- 在获取用户信息的过程中显示（页面内容待定） -->
    <div v-show="!isLogin">
    </div>

    <div v-show="isLogin" >
      <navigation>
        <router-view></router-view>
      </navigation>

      <transition name="slideInUp">
        <mt-tabbar v-show="$store.state.common.hasFooter" v-model="selected" :fixed="true">
          <mt-tab-item id="1">
            <div slot="icon" v-bind:style="{'background-image':$store.state.common.tabSelected == '1'?'url(static/images/footer/home_active.png)':'url(static/images/footer/home.png)'}" v-bind:class="[$store.state.common.tabSelected == '1' ?'bounceIn':'']" class="animated icon_tabs"></div>
            首页
          </mt-tab-item>
          <mt-tab-item id="2">
            <div slot="icon" v-bind:style="{'background-image':$store.state.common.tabSelected == '2'?'url(static/images/footer/pro_active.png)':'url(static/images/footer/pro.png)'}" v-bind:class="[$store.state.common.tabSelected == '2' ?'bounceIn':'']" class="animated icon_tabs"></div>
            产品中心
          </mt-tab-item>
          <mt-tab-item id="3">
            <div slot="icon" v-bind:style="{'background-image':$store.state.common.tabSelected == '3'?'url(static/images/footer/proposal_active.png)':'url(static/images/footer/proposal.png)'}" v-bind:class="[$store.state.common.tabSelected == '3' ?'bounceIn':'']" class="animated icon_tabs"></div>
            签到考勤
          </mt-tab-item>
          <mt-tab-item id="4">
             <div slot="icon" v-bind:style="{'background-image':$store.state.common.tabSelected == '4'?'url(static/images/footer/jour_active.png)':'url(static/images/footer/jour.png)'}" v-bind:class="[$store.state.common .tabSelected == '4' ?'bounceIn':'']" class="animated icon_tabs"></div>
            日志管理
          </mt-tab-item>
        </mt-tabbar>
      </transition>

      <!-- <toast :show="$store.state.common.toast" @update="((val) => $store.state.common.toast = val)">
        <img v-if="$store.state.common.toastImg != ''" :src="$store.state.common.toastImg">
        <div>{{$store.state.common.toastMsg}}</div>
      </toast> -->
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
