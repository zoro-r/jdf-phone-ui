/*
 * @Author: jdf
 * @Date: 2018-01-16 10:29:00
 * @Last Modified by: jdf
 * @Last Modified time: 2018-03-28 10:28:05
 */

const native = {
  /**
   * @name 打开相机
   * @param opt配置地址:https://github.com/apache/cordova-plugin-camera#module_camera.CameraOptions
   * @desc https://github.com/apache/cordova-plugin-camera
   */
  getPicture (opt = {}) {
    // 设置操作对象数据
    let options = Object.assign({
      quality: 50,
      destinationType: window.Camera && window.Camera.DestinationType.DATA_URL, // 默认base64编码格式
      sourceType: window.Camera && window.Camera.PictureSourceType.CAMERA // 默认打开拍照功能
    }, opt)
    // 设置返回函数
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用cordova 相机插件
        navigator.camera.getPicture(function success (imgUrl) {
          resolve(imgUrl)
        }, function error (error) {
          reject(error)
        }, options)
      } else {
        reject({error: '相机-请在App内调用'})
      }
    })
    return promise
  },
  /**
   * @name 二维码插件
   * @desc 地址：https://github.com/wildabeast/BarcodeScanner
   */
  scan () {
    // 设置返回函数
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用cordova 相机插件
        window.cordova.plugins.barcodeScanner.scan(function success (result) {
          resolve(result)
        }, function error (error) {
          reject(error)
        })
      } else {
        reject({error: '扫一扫,请在App内调用'})
      }
    })
    return promise
  },
  /**
   * @name 选择联系人
   * @desc https://github.com/apache/cordova-plugin-contacts
   */
  pickContact () {
     // 设置返回函数
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用cordova 相机插件
        navigator.contacts.pickContact(function (contact) {
          resolve(contact)
        }, function (err) {
          reject(err)
        })
      } else {
        reject('选择联系人,请在App内调用')
      }
    })
    return promise
  },
  /**
   * @name 选择联系人 @todo
   * @desc https://github.com/apache/cordova-plugin-contacts
   */
  findContact (opt = {}) {
    // 设置返回函数
    function onSuccess (contacts) {
      alert('Found ' + contacts.length + ' contacts.')
    };

    function onError (contactError) {
      alert('onError!')
    };

    // find all contacts with 'Bob' in any name field
    var options = {}
    if (window.ContactFindOptions) {
      options = new window.ContactFindOptions()
    }
    options.filter = 'Bob'
    options.multiple = true
    options.desiredFields = [navigator.contacts.fieldType.id]
    options.hasPhoneNumber = true
    var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name]
    navigator.contacts.find(fields, onSuccess, onError, options)
  },
  /**
   * @name 微信分享
   * @link https://github.com/xu-li/cordova-plugin-wechat
   */
  wechatShare (opt = {}) {
    let option = Object.assign({text: 'This is just a plain string', scene: window.Wechat.Scene.TIMELINE}, opt)
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用cordova 相机插件

        window.Wechat.share(option, function (result) {
          resolve(result)
        }, function (reason) {
          reject(reason)
        })
      } else {
        reject('选择联系人,请在App内调用')
      }
    })
    return promise
  },
  /**
   * @name 微信登陆
   * @link https://github.com/xu-li/cordova-plugin-wechat
   */
  wechatAuth (opt = {}) {
    var scope = 'snsapi_userinfo',
      state = '_' + (+new Date())
    window.Wechat.auth(scope, state, function (response) {
        // you may use response.code to get the access token.
      alert(JSON.stringify(response))
    }, function (reason) {
      alert('Failed: ' + reason)
    })
  },
  /**
   * @name 初始化极光推送
   * @param isDebug 是否为debug模式
   * https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/iOS_API.md
   */
  initJPush (isDebug = false) {
    console.log('开启推送')
    window.JPush.init()
    // 开启debug模式
    isDebug && window.JPush.setDebugMode(true)
    // window.JPush.isPushStopped((data) => {
    //   if (data > 0) {
    //     // 已关闭
    //     console.log('推送已关闭', data)
    //   } else {
    //     // 已开启
    //     console.log('推送已开启', data)
    //   }
    // })
  },
  /**
   * @name 停止接收推送
   * 不推荐调用，因为这个 API 只是让你的 DeviceToken 失效，在 设置－通知 中您的应用程序没有任何变化。
   * 推荐：设置一个 UI 界面，提醒用户在 设置－通知 中关闭推送服务。
   * https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/iOS_API.md
   */
  stopPush () {
    console.log('关闭推送')
    window.JPush.stopPush()
    // 判断是否结束推送
    // window.JPush.isPushStopped((data) => {
    //   if (data > 0) {
    //     // 已关闭
    //     console.log('推送已关闭', data)
    //   } else {
    //     // 已开启
    //     console.log('推送已开启', data)
    //   }
    // })
  },
  /**
   * @name 判断是否操作成功
   */
  isPushStopped () {
    window.JPush.isPushStopped((data) => {
      if (data > 0) {
        // 已关闭
        console.log('推送已关闭', data)
      } else {
        // 已开启
        console.log('推送已开启', data)
      }
    })
  },
  /**
   * @name 恢复推送服务。调用了此 API 后，iOS平台，重新去APNS注册。
   */
  resumePush () {
    window.JPush.resumePush()
  },
  /**
   * @name 获取 RegistrationID
   */
  getRegistrationID () {
    window.JPush.getRegistrationID((data) => {
      console.log('JPushPlugin:registrationID is ' + data)
    })
  },
  /**
   * @name 清除标签
   * cleanTags 清除所有标签
   */
  cleanTags () {
    window.JPush.cleanTags({ sequence: 1 }, (result) => {
      console.log('清除标签success', result)
    }, (error) => {
      console.log('清除标签error', error)
    })
  },
  /**
   * @name 角标
   * @param number 设置角标数量
   * 清除ios角标
   */
  setApplicationIconBadgeNumber (number) {
    window.JPush.setApplicationIconBadgeNumber(number)
    window.JPush.getApplicationIconBadgeNumber((badgeNum) => {
      console.log('角标数量', badgeNum)
    })
  }

}

export default native
