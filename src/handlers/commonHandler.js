/*
 * @Author: jdf
 * @Date: 2018-05-06 19:13:25
 * @Last Modified by: jdf
 * @Last Modified time: 2018-05-08 16:41:20
 */
import router from './../routers'
import store from './../vuex/store.js'
const commonHandler = {
  /**
   * @name 退出登录的方法
   */
  loginOut () {
    window.utils.ui.dialog('确定退出？').then(e => {
      // 清除用户信息
      window.utils.cache.removeItem('user')
      // 清除token
      window.utils.cache.removeItem('token')
      // 清除极光推送的别名
      window.utils.native.setAlias('')
      // 调用退出登录接口
      router.push({name: 'login'})
    })
  },
  /**
   * @name 版本管理接口
   */
  checkVersion (callback = () => {}) {
  },
  /**
   * @name 获取个人信息接口
   * personInfo
   */
  getUserInfo (callback = () => {}) {
  }
}
export default commonHandler
