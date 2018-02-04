/**
  * vue-scroll-behavior v0.2.0
  * (c) 2017 jeneser
  * @license MIT
  */

import { setOption, isIgnoreRoute, getScrollPosition, setScrollPosition,
  cleanHistoryList } from './utils/helpers'

const vueScrollBehavior = {
  _maxLength: 50,
  _ignore: [],
  _delay: 0,
  _leaveActiveClass: '', // 动画效果class
  _scrollClass: '' // 滚动元素
}

/**
 * Plugin API
 * vsbHistoryList [property]
 * vueScrollBehavior [function]
 */
vueScrollBehavior.install = function (Vue, options) {
  // Init options
  setOption(options)

  // Global property
  Vue.vsbHistoryList = []

  // Global method
  Vue.vueScrollBehavior = function (router) {
    if (typeof router === 'object' && typeof router.beforeEach === 'function') {
      // Router beforeEach
      router.beforeEach((to, from, next) => {
        // Ignore route
        if (isIgnoreRoute(from)) {
          next()
        } else {
          let _historyList = this.vsbHistoryList
          let position = getScrollPosition(vueScrollBehavior._scrollClass)
          let currentPathIndex = _historyList.findIndex(e => {
            return e.path === from.fullPath
          })

          // Cleaning historyList
          if (_historyList.length >= vueScrollBehavior._maxLength) {
            cleanHistoryList(_historyList)
          }

          if (currentPathIndex !== -1) {
            _historyList[currentPathIndex].position = position
          } else {
            _historyList.push({
              path: from.fullPath,
              position: position
            })
          }

          next()
        }
      })

      // Router afterEach
      router.afterEach(route => {
        if (isIgnoreRoute(route)) {
          setScrollPosition(Vue)
        } else {
          let savedPosition = this.vsbHistoryList.find(e => {
            return e.path === route.fullPath
          })

          if (typeof savedPosition !== 'undefined') {
            setScrollPosition(Vue, savedPosition.position)
          } else {
            // 当为移动端的时候滚动
            !vueScrollBehavior._scrollClass && setScrollPosition(Vue)
          }
        }
      })
    } else {
      console.warn('Vue-scroll-behavior dependent on vue-router! ' +
        'Please create the router instance.')
    }
  }

  Vue.vueScrollBehavior(options.router)
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueScrollBehavior)
}

export default vueScrollBehavior
