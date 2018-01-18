import store from '../vuex/store'
let scrollTop, bodyCls = 'modal-open'
const ui = {
  snackbar (msg, img, callback) {
    store.commit('TOGGLE_SNACKBAR', {
      snackbar: true,
      snackbarMsg: msg,
      snackbarImg: img
    })
  },
  // 弹出框提示
  alert (msg, callback = e => {}) {
    alert(10)
  },
  // 对话框提示
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
  // 禁止body滚动
  disabledBodyScroll (disabled) {
    if (disabled) {
      scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    } else {
      document.body.classList.remove(bodyCls)
      // scrollTop lost after set position:fixed, restore it back.
      document.scrollingElement.scrollTop = scrollTop
    }
  }

}
export default ui
