import store from '../vuex/store'
import { Toast, MessageBox, Indicator } from 'mint-ui'
let scrollTop, bodyCls = 'modal-open'
const ui = {
  loadding () {
    Indicator.open({
      text: '',
      spinnerType: 'fading-circle'
    })
  },
  closeLoadding () {
    Indicator.close()
  },
  snackbar (msg, img, callback) {
    store.commit('TOGGLE_SNACKBAR', {
      snackbar: true,
      snackbarMsg: msg,
      snackbarImg: img
    })
  },
  // 弹出提示
  toast (msg) {
    Toast({
      message: msg,
      position: 'bottom',
      duration: 5000
    })
  },
  // 弹出框提示
  alert (msg) {
    return MessageBox.alert(msg)
    // 当toast消失的时候回调
    // setTimeout(() => {
    //   callback()
    // }, 5000)
  },
  // 对话框提示
  dialog (msg) {
    // store.commit('TOGGLE_DIALOG', {
    //   dialog: true,
    //   dialogMsg: msg,
    //   dialogImg: img,
    //   dialogButtons: buttons,
    //   dialogCallback: callback
    // })
    // MessageBox({
    //   title: '提示',
    //   message: msg,
    //   showCancelButton: true
    // })
    return MessageBox.confirm(msg)
    // return promise
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
    // 当为
    // if (window.globalConfig.platform === 'native') {
      // let ele,
      //   eleList = document.getElementsByClassName('scroll_content')
      // // 找到对应的滚动容易并停止滚动
      // if (eleList.length > 0) {
      //   for (let i = 0; i < eleList.length; i++) {
      //     let item = eleList[i]
      //     if (item.className.indexOf('modal') < 0) {
      //       ele = item
      //       break
      //     }
      //   }
      //   // 禁止/启用滚动
      //   if (disabled) {
      //     ele.style['-webkit-overflow-scrolling'] = 'auto'
      //   } else {
      //     setTimeout(() => {
      //       ele.style['-webkit-overflow-scrolling'] = 'touch'
      //     }, 500)
      //   }
      // }
    // } else {
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
  // }

}
export default ui
