var n22Utils = {
  /**
   * @ngdoc method
   * @name ionic.DomUtil#getParentOrSelfWithClass
   * @param {DOMElement} element
   * @param {string} className
   * @returns {DOMElement} The closest parent or self matching the
   * className, or null.
   */
  getParentOrSelfWithClass: function (e, className, depth) {
    depth = depth || 10
    while (e && depth--) {
      if (e.classList && e.classList.contains(className)) {
        return e
      }
      e = e.parentNode
    }
    return null
  },
  trigger: function (eventType, data, bubbles, cancelable) {
    var event = new window.CustomEvent(eventType, {
      detail: data,
      bubbles: !!bubbles,
      cancelable: !!cancelable
    })
    return event
    // Make sure to trigger the event on the given target, or dispatch it from
    // the window if we don't have an event target
    // data && data.target && data.target.dispatchEvent && data.target.dispatchEvent(event) || window.dispatchEvent(event);
  },
  requestAnimationFrame: (function () {
      // Check for request animation Frame support
    var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame
    var isNative = !!requestFrame

    if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
      isNative = false
    }

    if (isNative) {
      return function (callback, root) {
        requestFrame(callback, root)
      }
    }

    var TARGET_FPS = 60
    var requests = {}
    var requestCount = 0
    var rafHandle = 1
    var intervalHandle = null
    var lastActive = +new Date()

    return function (callback) {
      var callbackHandle = rafHandle++

        // Store callback
      requests[callbackHandle] = callback
      requestCount++

        // Create timeout at first request
      if (intervalHandle === null) {
        intervalHandle = setInterval(function () {
          var time = +new Date()
          var currentRequests = requests

            // Reset data structure before executing callbacks
          requests = {}
          requestCount = 0

          for (var key in currentRequests) {
            if (currentRequests.hasOwnProperty(key)) {
              currentRequests[key](time)
              lastActive = time
            }
          }

            // Disable the timeout when nothing happens for a certain
            // period of time
          if (time - lastActive > 2500) {
            clearInterval(intervalHandle)
            intervalHandle = null
          }
        }, 1000 / TARGET_FPS)
      }

      return callbackHandle
    }
  })(),
  Platform: {
    isAndroid: function () {
      return false
    },
    ready: function (call) {
      call()
    },
    isIOS: function () {
      return true
    },
    isWebView: function () {
      return true
    }
  },
  tab: {
    isKeyboardElement: function (ele) {
      if (!n22Utils.Platform.isIOS() || n22Utils.Platform.isIPad()) {
        return n22Utils.tap.isTextInput(ele) && !n22Utils.tap.isDateInput(ele)
      } else {
        return n22Utils.tap.isTextInput(ele) || (!!ele && ele.tagName == 'SELECT')
      }
    }
  },
  debounce: function (func, wait, immediate) {
    var timeout, args, context, timestamp, result
    return function () {
      context = this
      args = arguments
      timestamp = new Date()
      var later = function () {
        var last = (new Date()) - timestamp
        if (last < wait) {
          timeout = setTimeout(later, wait - last)
        } else {
          timeout = null
          if (!immediate) result = func.apply(context, args)
        }
      }
      var callNow = immediate && !timeout
      if (!timeout) {
        timeout = setTimeout(later, wait)
      }
      if (callNow) result = func.apply(context, args)
      return result
    }
  }
}
/**
 * The current viewport height.
 */
var keyboardCurrentViewportHeight = 0

/**
 * The viewport height when in portrait orientation.
 */
var keyboardPortraitViewportHeight = 0

/**
 * The viewport height when in landscape orientation.
 */
var keyboardLandscapeViewportHeight = 0

/**
 * The currently focused input.
 */
var keyboardActiveElement

/**
 * The previously focused input used to reset keyboard after focusing on a
 * new non-keyboard element
 */
var lastKeyboardActiveElement

/**
 * The scroll view containing the currently focused input.
 */
var scrollView

/**
 * Timer for the setInterval that polls window.innerHeight to determine whether
 * the layout has updated for the keyboard showing/hiding.
 */
var waitForResizeTimer

/**
 * Sometimes when switching inputs or orientations, focusout will fire before
 * focusin, so this timer is for the small setTimeout to determine if we should
 * really focusout/hide the keybn22Utilsoard.
 */
var keyboardFocusOutTimer

/**
 * on Android, orientationchange will fire before the keyboard plugin notifies
 * the browser that the keyboard will show/is showing, so this flag indicates
 * to nativeShow that there was an orientationChange and we should update
 * the viewport height with an accurate keyboard height value
 */
var wasOrientationChange = false

/**
 * CSS class added to the body indicating the keyboard is open.
 */
var KEYBOARD_OPEN_CSS = 'keyboard-open'

/**
 * CSS class that indicates a scroll container.
 */
var SCROLL_CONTAINER_CSS = 'scroll-content'

/**
 * Debounced keyboardFocusIn function
 */
var debouncedKeyboardFocusIn = n22Utils.debounce(keyboardFocusIn, 200, true)

/**
 * Debounced keyboardNativeShow function
 */
var debouncedKeyboardNativeShow = n22Utils.debounce(keyboardNativeShow, 100, true)

/**
 * 设置变量储存overflow的值
 */
var tempOverflow
/**
 * n22Utils keyboard namespace.
 * @namespace keyboard
 */
n22Utils.keyboard = {

  /**
   * Whether the keyboard is open or not.
   */
  isOpen: false,

  /**
   * Whether the keyboard is closing or not.
   */
  isClosing: false,

  /**
   * Whether the keyboard is opening or not.
   */
  isOpening: false,

  /**
   * The height of the keyboard in pixels, as reported by the keyboard plugin.
   * If the plugin is not available, calculated as the difference in
   * window.innerHeight after the keyboard has shown.
   */
  height: 0,

  /**
   * Whether the device is in landscape orientation or not.
   */
  isLandscape: false,

  /**
   * Whether the keyboard event listeners have been added or not
   */
  isInitialized: false,

  /**
   * Hide the keyboard, if it is open.
   */
  hide: function () {
    if (keyboardHasPlugin()) {
      cordova.plugins.Keyboard.close()
    }
    keyboardActiveElement && keyboardActiveElement.blur()
  },

  /**
   * An alias for cordova.plugins.Keyboard.show(). If the keyboard plugin
   * is installed, show the keyboard.
   */
  show: function () {
    if (keyboardHasPlugin()) {
      cordova.plugins.Keyboard.show()
    }
  },

  /**
   * Remove all keyboard related event listeners, effectively disabling n22Utils's
   * keyboard adjustments.
   */
  disable: function () {
    if (keyboardHasPlugin()) {
      window.removeEventListener('native.keyboardshow', debouncedKeyboardNativeShow)
      window.removeEventListener('native.keyboardhide', keyboardFocusOut)
    } else {
      document.body.removeEventListener('focusout', keyboardFocusOut)
    }

    document.body.removeEventListener('focusin', debouncedKeyboardFocusIn)

    window.removeEventListener('orientationchange', keyboardOrientationChange)

    if (window.navigator.msPointerEnabled) {
      document.removeEventListener('MSPointerDown', keyboardInit)
    } else {
      document.removeEventListener('touchstart', keyboardInit)
    }
    n22Utils.keyboard.isInitialized = false
  },

  /**
   * Alias for keyboardInit, initialize all keyboard related event listeners.
   */
  enable: function () {
    keyboardInit()
  }
}

// Initialize the viewport height (after n22Utils.keyboard.height has been
// defined).
keyboardCurrentViewportHeight = getViewportHeight()

                             /* Event handlers */
/* ------------------------------------------------------------------------- */

/**
 * Event handler for first touch event, initializes all event listeners
 * for keyboard related events. Also aliased by n22Utils.keyboard.enable.
 */
function keyboardInit () {
  console.log('touch')
  if (n22Utils.keyboard.isInitialized) return

  if (keyboardHasPlugin()) {
    window.addEventListener('native.keyboardshow', debouncedKeyboardNativeShow)
    window.addEventListener('native.keyboardhide', keyboardFocusOut)
  } else {
    document.body.addEventListener('focusout', keyboardFocusOut)
  }

  document.body.addEventListener('focusin', debouncedKeyboardFocusIn)

  if (window.navigator.msPointerEnabled) {
    document.removeEventListener('MSPointerDown', keyboardInit)
  } else {
    document.removeEventListener('touchstart', keyboardInit)
  }

  n22Utils.keyboard.isInitialized = true
}

/**
 * Event handler for 'native.keyboardshow' event, sets keyboard.height to the
 * reported height and keyboard.isOpening to true. Then calls
 * keyboardWaitForResize with keyboardShow or keyboardUpdateViewportHeight as
 * the callback depending on whether the event was triggered by a focusin or
 * an orientationchange.
 */
function keyboardNativeShow (e) {
  clearTimeout(keyboardFocusOutTimer)
  console.log('keyboardNativeShow fired at: ' + Date.now())
  console.log('keyboardNativeshow window.innerHeight: ' + window.innerHeight)

  if (!n22Utils.keyboard.isOpen || n22Utils.keyboard.isClosing) {
    n22Utils.keyboard.isOpening = true
    n22Utils.keyboard.isClosing = false
  }

  n22Utils.keyboard.height = e.keyboardHeight
  console.log('nativeshow keyboard height:' + e.keyboardHeight)

  if (wasOrientationChange) {
    keyboardWaitForResize(keyboardUpdateViewportHeight, true)
  } else {
    keyboardWaitForResize(keyboardShow, true)
  }
}

/**
 * Event handler for 'focusin' and 'n22Utils.focusin' events. Initializes
 * keyboard state (keyboardActiveElement and keyboard.isOpening) for the
 * appropriate adjustments once the window has resized.  If not using the
 * keyboard plugin, calls keyboardWaitForResize with keyboardShow as the
 * callback or keyboardShow right away if the keyboard is already open.  If
 * using the keyboard plugin does nothing and lets keyboardNativeShow handle
 * adjustments with a more accurate keyboard height.
 */
function keyboardFocusIn (e) {
  clearTimeout(keyboardFocusOutTimer)
  console.log('keyboardFocusIn from: ' + e.type + ' at: ' + Date.now())

  // if (!e.target ||
  //     e.target.readOnly ||
  //     !n22Utils.tap.isKeyboardElement(e.target) ||
  //     !(scrollView = n22Utils.DomUtil.getParentWithClass(e.target, SCROLL_CONTAINER_CSS))) {
  //   if (keyboardActiveElement) {
  //       lastKeyboardActiveElement = keyboardActiveElement;
  //   }
  //   keyboardActiveElement = null;
  //   return;
  // }
  scrollView = n22Utils.getParentOrSelfWithClass(e.target, SCROLL_CONTAINER_CSS)
  console.log(scrollView.classList)
  keyboardActiveElement = e.target

  // if using JS scrolling, undo the effects of native overflow scroll so the
  // scroll view is positioned correctly
  // if (!scrollView.classList.contains("overflow-scroll")) {
  //   document.body.scrollTop = 0;
  //   scrollView.scrollTop = 0;
  //   n22Utils.requestAnimationFrame(function(){
  //     document.body.scrollTop = 0;
  //     scrollView.scrollTop = 0;
  //   });

  //   // any showing part of the document that isn't within the scroll the user
  //   // could touchmove and cause some ugly changes to the app, so disable
  //   // any touchmove events while the keyboard is open using e.preventDefault()
  //   if (window.navigator.msPointerEnabled) {
  //     document.addEventListener("MSPointerMove", keyboardPreventDefault, false);
  //   } else {
  //     document.addEventListener('touchmove', keyboardPreventDefault, false);
  //   }
  // }

  if (!n22Utils.keyboard.isOpen || n22Utils.keyboard.isClosing) {
    n22Utils.keyboard.isOpening = true
    n22Utils.keyboard.isClosing = false
  }

  // attempt to prevent browser from natively scrolling input into view while
  // we are trying to do the same (while we are scrolling) if the user taps the
  // keyboard
  document.addEventListener('keydown', keyboardOnKeyDown, false)

  // if we aren't using the plugin and the keyboard isn't open yet, wait for the
  // window to resize so we can get an accurate estimate of the keyboard size,
  // otherwise we do nothing and let nativeShow call keyboardShow once we have
  // an exact keyboard height
  // if the keyboard is already open, go ahead and scroll the input into view
  // if necessary
  if (!n22Utils.keyboard.isOpen && !keyboardHasPlugin()) {
    keyboardWaitForResize(keyboardShow, true)
  } else if (n22Utils.keyboard.isOpen) {
    keyboardShow()
  }
}

/**
 * Event handler for 'focusout' events. Sets keyboard.isClosing to true and
 * calls keyboardWaitForResize with keyboardHide as the callback after a small
 * timeout.
 */
function keyboardFocusOut () {
  clearTimeout(keyboardFocusOutTimer)
  console.log('keyboardFocusOut fired at: ' + Date.now())
  // console.log("keyboardFocusOut event type: " + e.type);

  if (n22Utils.keyboard.isOpen || n22Utils.keyboard.isOpening) {
    n22Utils.keyboard.isClosing = true
    n22Utils.keyboard.isOpening = false
  }

  // Call keyboardHide with a slight delay because sometimes on focus or
  // orientation change focusin is called immediately after, so we give it time
  // to cancel keyboardHide
  keyboardFocusOutTimer = setTimeout(function () {
    n22Utils.requestAnimationFrame(function () {
      // focusOut during or right after an orientationchange, so we didn't get
      // a chance to update the viewport height yet, do it and keyboardHide
      console.log('focusOut, wasOrientationChange: ' + wasOrientationChange)
      if (wasOrientationChange) {
        keyboardWaitForResize(function () {
          keyboardUpdateViewportHeight()
          keyboardHide()
        }, false)
      } else {
        keyboardWaitForResize(keyboardHide, false)
      }
    })
  }, 50)
}

/**
 * Event handler for 'orientationchange' events. If using the keyboard plugin
 * and the keyboard is open on Android, sets wasOrientationChange to true so
 * nativeShow can update the viewport height with an accurate keyboard height.
 * If the keyboard isn't open or keyboard plugin isn't being used,
 * waits for the window to resize before updating the viewport height.
 *
 * On iOS, where orientationchange fires after the keyboard has already shown,
 * updates the viewport immediately, regardless of if the keyboard is already
 * open.
 */
function keyboardOrientationChange () {
  console.log('orientationchange fired at: ' + Date.now())
  console.log('orientation was: ' + (n22Utils.keyboard.isLandscape ? 'landscape' : 'portrait'))

  // toggle orientation
  n22Utils.keyboard.isLandscape = !n22Utils.keyboard.isLandscape
  // //console.log("now orientation is: " + (n22Utils.keyboard.isLandscape ? "landscape" : "portrait"));

  // no need to wait for resizing on iOS, and orientationchange always fires
  // after the keyboard has opened, so it doesn't matter if it's open or not
  if (n22Utils.Platform.isIOS()) {
    keyboardUpdateViewportHeight()
  }

  // On Android, if the keyboard isn't open or we aren't using the keyboard
  // plugin, update the viewport height once everything has resized. If the
  // keyboard is open and we are using the keyboard plugin do nothing and let
  // nativeShow handle it using an accurate keyboard height.
  if (n22Utils.Platform.isAndroid()) {
    if (!n22Utils.keyboard.isOpen || !keyboardHasPlugin()) {
      keyboardWaitForResize(keyboardUpdateViewportHeight, false)
    } else {
      wasOrientationChange = true
    }
  }
}

/**
 * Event handler for 'keydown' event. Tries to prevent browser from natively
 * scrolling an input into view when a user taps the keyboard while we are
 * scrolling the input into view ourselves with JS.
 */
function keyboardOnKeyDown (e) {
  // if (false) {
  //   keyboardPreventDefault(e)
  // }
}

/**
 * Event for 'touchmove' or 'MSPointerMove'. Prevents native scrolling on
 * elements outside the scroll view while the keyboard is open.
 */
function keyboardPreventDefault (e) {
  if (e.target.tagName !== 'TEXTAREA') {
    e.preventDefault()
  }
}

                              /* Private API */
/* -------------------------------------------------------------------------- */

/**
 * Polls window.innerHeight until it has updated to an expected value (or
 * sufficient time has passed) before calling the specified callback function.
 * Only necessary for non-fullscreen Android which sometimes reports multiple
 * window.innerHeight values during interim layouts while it is resizing.
 *
 * On iOS, the window.innerHeight will already be updated, but we use the 50ms
 * delay as essentially a timeout so that scroll view adjustments happen after
 * the keyboard has shown so there isn't a white flash from us resizing too
 * quickly.
 *
 * @param {Function} callback the function to call once the window has resized
 * @param {boolean} isOpening whether the resize is from the keyboard opening
 * or not
 */
function keyboardWaitForResize (callback, isOpening) {
  clearInterval(waitForResizeTimer)
  var count = 0
  var maxCount
  var initialHeight = getViewportHeight()
  var viewportHeight = initialHeight

  // console.log("waitForResize initial viewport height: " + viewportHeight);
  // var start = Date.now();
  // console.log("start: " + start);

  // want to fail relatively quickly on modern android devices, since it's much
  // more likely we just have a bad keyboard height
  if (n22Utils.Platform.isAndroid() && 5 < 4.4) {
    maxCount = 30
  } else if (n22Utils.Platform.isAndroid()) {
    maxCount = 10
  } else {
    maxCount = 1
  }

  // poll timer
  waitForResizeTimer = setInterval(function () {
    viewportHeight = getViewportHeight()

    // height hasn't updated yet, try again in 50ms
    // if not using plugin, wait for maxCount to ensure we have waited long enough
    // to get an accurate keyboard height
    if (++count < maxCount &&
        ((!isPortraitViewportHeight(viewportHeight) &&
         !isLandscapeViewportHeight(viewportHeight)) ||
         !n22Utils.keyboard.height)) {
      return
    }

    // infer the keyboard height from the resize if not using the keyboard plugin
    if (!keyboardHasPlugin()) {
      n22Utils.keyboard.height = Math.abs(initialHeight - window.innerHeight)
    }

    // set to true if we were waiting for the keyboard to open
    n22Utils.keyboard.isOpen = isOpening

    clearInterval(waitForResizeTimer)
    // var end = Date.now();
    // console.log("waitForResize count: " + count);
    // console.log("end: " + end);
    // console.log("difference: " + ( end - start ) + "ms");

    // console.log("callback: " + callback.name);
    callback()
  }, 50)

  return maxCount // for tests
}

/**
 * On keyboard close sets keyboard state to closed, resets the scroll view,
 * removes CSS from body indicating keyboard was open, removes any event
 * listeners for when the keyboard is open and on Android blurs the active
 * element (which in some cases will still have focus even if the keyboard
 * is closed and can cause it to reappear on subsequent taps).
 */
function keyboardHide () {
  clearTimeout(keyboardFocusOutTimer)
  // console.log("keyboardHide");

  n22Utils.keyboard.isOpen = false
  n22Utils.keyboard.isClosing = false

  if (keyboardActiveElement || lastKeyboardActiveElement) {
    let event = n22Utils.trigger('resetScrollView', {
      target: keyboardActiveElement || lastKeyboardActiveElement
    }, true)
    resetScrollView(event)
  }

  n22Utils.requestAnimationFrame(function () {
    document.body.classList.remove(KEYBOARD_OPEN_CSS)
  })

  // the keyboard is gone now, remove the touchmove that disables native scroll
  if (window.navigator.msPointerEnabled) {
    document.removeEventListener('MSPointerMove', keyboardPreventDefault)
  } else {
    document.removeEventListener('touchmove', keyboardPreventDefault)
  }
  document.removeEventListener('keydown', keyboardOnKeyDown)

  if (n22Utils.Platform.isAndroid()) {
    // on android closing the keyboard with the back/dismiss button won't remove
    // focus and keyboard can re-appear on subsequent taps (like scrolling)
    if (keyboardHasPlugin()) cordova.plugins.Keyboard.close()
    keyboardActiveElement && keyboardActiveElement.blur()
  }

  keyboardActiveElement = null
  lastKeyboardActiveElement = null
}

/**
 * On keyboard open sets keyboard state to open, adds CSS to the body
 * indicating the keyboard is open and tells the scroll view to resize and
 * the currently focused input into view if necessary.
 */
function keyboardShow () {
  n22Utils.keyboard.isOpen = true
  n22Utils.keyboard.isOpening = false

  var details = {
    keyboardHeight: keyboardGetHeight(),
    viewportHeight: keyboardCurrentViewportHeight
  }

  if (keyboardActiveElement) {
    details.target = keyboardActiveElement

    var elementBounds = keyboardActiveElement.getBoundingClientRect()

    details.elementTop = Math.round(elementBounds.top)
    details.elementBottom = Math.round(elementBounds.bottom)

    details.windowHeight = details.viewportHeight - details.keyboardHeight
    console.log('keyboardShow viewportHeight: ' + details.viewportHeight +
    ', windowHeight: ' + details.windowHeight +
    ', keyboardHeight: ' + details.keyboardHeight)

    // figure out if the element is under the keyboard
    details.isElementUnderKeyboard = (details.elementBottom > details.windowHeight)
    console.log('isUnderKeyboard: ' + details.isElementUnderKeyboard)
    console.log('elementBottom: ' + details.elementBottom)

    // send event so the scroll view adjusts
    var event = n22Utils.trigger('scrollChildIntoView', details, true)
    scrollChildIntoView(event)
  }

  setTimeout(function () {
    document.body.classList.add(KEYBOARD_OPEN_CSS)
  }, 400)

  return details // for testing
}

/* eslint no-unused-vars:0 */
function keyboardGetHeight () {
  // check if we already have a keyboard height from the plugin or resize calculations
  if (n22Utils.keyboard.height) {
    return n22Utils.keyboard.height
  }

  if (n22Utils.Platform.isAndroid()) {
    // should be using the plugin, no way to know how big the keyboard is, so guess
    if (n22Utils.Platform.isFullScreen) {
      return 275
    }
    // otherwise just calculate it
    var contentHeight = window.innerHeight
    if (contentHeight < keyboardCurrentViewportHeight) {
      return keyboardCurrentViewportHeight - contentHeight
    } else {
      return 0
    }
  }

  // fallback for when it's the webview without the plugin
  // or for just the standard web browser
  // TODO: have these be based on device
  if (n22Utils.Platform.isIOS()) {
    if (n22Utils.keyboard.isLandscape) {
      return 206
    }

    if (!n22Utils.Platform.isWebView()) {
      return 216
    }

    return 260
  }

  // safe guess
  return 275
}

function isPortraitViewportHeight (viewportHeight) {
  return !!(!n22Utils.keyboard.isLandscape &&
         keyboardPortraitViewportHeight &&
         (Math.abs(keyboardPortraitViewportHeight - viewportHeight) < 2))
}

function isLandscapeViewportHeight (viewportHeight) {
  return !!(n22Utils.keyboard.isLandscape &&
         keyboardLandscapeViewportHeight &&
         (Math.abs(keyboardLandscapeViewportHeight - viewportHeight) < 2))
}

function keyboardUpdateViewportHeight () {
  wasOrientationChange = false
  keyboardCurrentViewportHeight = getViewportHeight()

  if (n22Utils.keyboard.isLandscape && !keyboardLandscapeViewportHeight) {
    // console.log("saved landscape: " + keyboardCurrentViewportHeight);
    keyboardLandscapeViewportHeight = keyboardCurrentViewportHeight
  } else if (!n22Utils.keyboard.isLandscape && !keyboardPortraitViewportHeight) {
    // console.log("saved portrait: " + keyboardCurrentViewportHeight);
    keyboardPortraitViewportHeight = keyboardCurrentViewportHeight
  }

  if (keyboardActiveElement) {
    n22Utils.trigger('resetScrollView', {
      target: keyboardActiveElement
    }, true)
  }

  if (n22Utils.keyboard.isOpen && n22Utils.tap.isTextInput(keyboardActiveElement)) {
    keyboardShow()
  }
}

function keyboardInitViewportHeight () {
  var viewportHeight = getViewportHeight()
  // console.log("Keyboard init VP: " + viewportHeight + " " + window.innerWidth);
  // can't just use window.innerHeight in case the keyboard is opened immediately
  if ((viewportHeight / window.innerWidth) < 1) {
    n22Utils.keyboard.isLandscape = true
  }
  // console.log("n22Utils.keyboard.isLandscape is: " + n22Utils.keyboard.isLandscape);

  // initialize or update the current viewport height values
  keyboardCurrentViewportHeight = viewportHeight
  if (n22Utils.keyboard.isLandscape && !keyboardLandscapeViewportHeight) {
    keyboardLandscapeViewportHeight = keyboardCurrentViewportHeight
  } else if (!n22Utils.keyboard.isLandscape && !keyboardPortraitViewportHeight) {
    keyboardPortraitViewportHeight = keyboardCurrentViewportHeight
  }
}

function getViewportHeight () {
  var windowHeight = window.innerHeight
  console.log('window.innerHeight is: ' + windowHeight)
  console.log('kb height is: ' + n22Utils.keyboard.height)
  console.log('kb isOpen: ' + n22Utils.keyboard.isOpen)

  // TODO: add iPad undocked/split kb once kb plugin supports it
  // the keyboard overlays the window on Android fullscreen
  if (!(n22Utils.Platform.isAndroid() && n22Utils.Platform.isFullScreen) &&
      (n22Utils.keyboard.isOpen || n22Utils.keyboard.isOpening) &&
      !n22Utils.keyboard.isClosing) {
    return windowHeight + keyboardGetHeight()
  }
  return windowHeight
}

function keyboardHasPlugin () {
  console.log('keyboardHasPlugin---', !!(window.cordova && cordova.plugins && cordova.plugins.Keyboard))
  return !!(window.cordova && cordova.plugins && cordova.plugins.Keyboard)
}

n22Utils.Platform.ready(function () {
  keyboardInitViewportHeight()

  window.addEventListener('orientationchange', keyboardOrientationChange)

  // if orientation changes while app is in background, update on resuming
  /*
  if ( n22Utils.Platform.isWebView() ) {
    document.addEventListener('resume', keyboardInitViewportHeight);

    if (n22Utils.Platform.isAndroid()) {
      //TODO: onbackpressed to detect keyboard close without focusout or plugin
    }
  }
  */

  // if orientation changes while app is in background, update on resuming
/*  if ( n22Utils.Platform.isWebView() ) {
    document.addEventListener('pause', function() {
      window.removeEventListener('orientationchange', keyboardOrientationChange);
    })
    document.addEventListener('resume', function() {
      keyboardInitViewportHeight();
      window.addEventListener('orientationchange', keyboardOrientationChange)
    });
  } */

  // Android sometimes reports bad innerHeight on window.load
  // try it again in a lil bit to play it safe
  setTimeout(keyboardInitViewportHeight, 999)

  // only initialize the adjustments for the virtual keyboard
  // if a touchstart event happens
  if (window.navigator.msPointerEnabled) {
    document.addEventListener('MSPointerDown', keyboardInit, false)
  } else {
    document.addEventListener('touchstart', keyboardInit, false)
  }
})

function scrollChildIntoView (e) {
  console.log('scrollChildIntoView at: ' + Date.now())
  // D
  var scrollBottomOffsetToTop = scrollView.getBoundingClientRect().bottom
  // D - A
  var scrollViewOffsetHeight = scrollView.offsetHeight
  var alreadyShrunk = self.isShrunkForKeyboard

  var isModal = false
  // 680px is when the media query for 60% modal width kicks in
  var isInsetModal = isModal && window.innerWidth >= 680

 /*
  *  _______
  * |---A---| <- top of scroll view
  * |       |
  * |---B---| <- keyboard
  * |   C   | <- input
  * |---D---| <- initial bottom of scroll view
  * |___E___| <- bottom of viewport
  *
  *  All commented calculations relative to the top of the viewport (ie E
  *  is the viewport height, not 0)
  */
  if (!alreadyShrunk) {
    // shrink scrollview so we can actually scroll if the input is hidden
    // if it isn't shrink so we can scroll to inputs under the keyboard
    // inset modals won't shrink on Android on their own when the keyboard appears
    if (true) {
      // if there are things below the scroll view account for them and
      // subtract them from the keyboard height when resizing
      // E - D                         E                         D
      var scrollBottomOffsetToBottom = e.detail.viewportHeight - scrollBottomOffsetToTop

      // 0 or D - B if D > B           E - B                     E - D
      var keyboardOffset = Math.max(0, e.detail.keyboardHeight - scrollBottomOffsetToBottom)

      requestAnimationFrame(function () {
        // D - A or B - A if D > B       D - A             max(0, D - B)
        // scrollViewOffsetHeight = scrollViewOffsetHeight - keyboardOffset;
        // container.style.height = scrollViewOffsetHeight + "px";
        // container.style.overflow = "visible";

        // update scroll view
        // self.resize();
      })
    }

    self.isShrunkForKeyboard = true
  }

  /*
   *  _______
   * |---A---| <- top of scroll view
   * |   *   | <- where we want to scroll to
   * |--B-D--| <- keyboard, bottom of scroll view
   * |   C   | <- input
   * |       |
   * |___E___| <- bottom of viewport
   *
   *  All commented calculations relative to the top of the viewport (ie E
   *  is the viewport height, not 0)
   */
  // if the element is positioned under the keyboard scroll it into view
  if (e.detail.isElementUnderKeyboard) {
    requestAnimationFrame(function () {
      // container.scrollTop = 0;
      // update D if we shrunk
      if (self.isShrunkForKeyboard && !alreadyShrunk) {
        scrollBottomOffsetToTop = scrollView.getBoundingClientRect().bottom
      }

      // middle of the scrollview, this is where we want to scroll to
      // (D - A) / 2
      var scrollMidpointOffset = scrollViewOffsetHeight * 0.5
      // console.log("container.offsetHeight: " + scrollViewOffsetHeight);

      // middle of the input we want to scroll into view
      // C
      var inputMidpoint = ((e.detail.elementBottom + e.detail.elementTop) / 2)

      // distance from middle of input to the bottom of the scroll view
      // C - D                                C               D
      var inputMidpointOffsetToScrollBottom = inputMidpoint - scrollBottomOffsetToTop

      // C - D + (D - A)/2          C - D                     (D - A)/ 2
      var scrollTop = inputMidpointOffsetToScrollBottom + scrollMidpointOffset
      if (scrollTop > 0 && scrollView.style.overflow != 'visible') {
        tempOverflow = scrollView.style.overflow
        let scrollTopTemp = scrollView.scrollTop + scrollTop + 50
        scrollView.style.transform = 'translateY(-' + scrollTopTemp + 'px)'
        scrollView.style.overflow = 'visible'
      }
    })
  }
  e.stopPropagation()
}

function resetScrollView (e) {
  self.isShrunkForKeyboard = false
  scrollView.style.transform = 'translateY(0px)'
  if (tempOverflow) {
    scrollView.style.overflow = tempOverflow
    tempOverflow = ''
  }
}
