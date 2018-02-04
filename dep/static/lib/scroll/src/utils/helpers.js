import vueScrollBehavior from '../vue-scroll-behavior'

/**
 * Setting options
 */
export function setOption (options) {
  if (typeof options.maxLength !== 'undefined' &&
    typeof options.maxLength === 'number') {
    vueScrollBehavior._maxLength = options.maxLength
  }

  if (typeof options.ignore !== 'undefined' && Array.isArray(options.ignore)) {
    vueScrollBehavior._ignore = options.ignore
  }

  if (typeof options.delay === 'number') {
    vueScrollBehavior._delay = options.delay
  }
  // 新增滚动动画
  if (typeof options.leaveActiveClass !== 'undefined') {
    vueScrollBehavior._leaveActiveClass = options.leaveActiveClass
  }

  if (typeof options.scrollClass !== 'undefined') {
    vueScrollBehavior._scrollClass = options.scrollClass
  }
}

/**
 * Getting Scroll Position
 */
export function getScrollPosition (scrollClass = '') {
  let y = 0
  if (scrollClass) {
    y = document.getElementsByClassName(vueScrollBehavior._scrollClass)[0] && document.getElementsByClassName(vueScrollBehavior._scrollClass)[0].scrollTop
  } else {
    y = window.pageYOffset
  }
  return {
    x: window.pageXOffset,
    y: y
  }
}

/**
 * Setting Scroll Position
 */
export function setScrollPosition (Vue, position = {x: 0, y: 0}) {
  if (vueScrollBehavior._delay > 0) {
    setTimeout(() => {
      Vue.nextTick(() => {
        let bodyEle = document.getElementsByClassName('slide-out-right-enter-active')[0]
        let scrollEle = bodyEle ? bodyEle.getElementById('scroll_content') : document.getElementById('scroll_content')
        scrollEle.scrollTo(position.x, position.y)
      })
    }, vueScrollBehavior._delay)
  } else {
    Vue.nextTick(() => {
      if (vueScrollBehavior._scrollClass) {
        let bodyEle = document.getElementsByClassName(vueScrollBehavior._leaveActiveClass)[0]
        let scrollEle = bodyEle ? bodyEle.getElementsByClassName(vueScrollBehavior._scrollClass)[0] : document.getElementsByClassName(vueScrollBehavior._scrollClass)[0]
        if (scrollEle.scrollTo) {
          scrollEle.scrollTo(position.x, position.y)
        } else {
          scrollEle.scrollTop = position.y
        }
      } else {
        window.scrollTo(position.x, position.y)
      }
    })
  }
}

/**
 * Cleaning historyList
 */
export function cleanHistoryList (historyList) {
  historyList.splice(0, parseInt(historyList.length / 2))
}

/**
 * Is ignore route
 */
export function isIgnoreRoute (target) {
  vueScrollBehavior._ignore.some(e => {
    return target.fullPath.match(e)
  })
}
