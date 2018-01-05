import store from '../vuex/store'
import {Toast} from 'mint-ui'
const ui = {
  toast (msg, img) {
    console.log(msg)
  },
  snackbar (msg, img, callback) {
    store.commit('TOGGLE_SNACKBAR', {
      snackbar: true,
      snackbarMsg: msg,
      snackbarImg: img
    })
  },
  dialog (msg, img, buttons, callback) {
    store.commit('TOGGLE_DIALOG', {
      dialog: true,
      dialogMsg: msg,
      dialogImg: img,
      dialogButtons: buttons,
      dialogCallback: callback
    })
  },
  popup (title, msg, callback) {
    store.commit('TOGGLE_POPUP', {
      popup: true,
      popupMsg: msg,
      popupTitle: title,
      popupCallback: callback
    })
  },
  // 新增普通提示
  alert (msg, callback = e => {}) {
    Toast({
      message: (msg instanceof Array) ? msg[0] : msg,
      position: 'top',
      duration: 3000
    })
    setTimeout(function () {
      callback()
    }, 3000)
  }
}
export default ui
