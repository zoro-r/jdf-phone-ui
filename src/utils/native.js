/*
 * @Author: jdf
 * @Date: 2018-01-16 10:29:00
 * @Last Modified by: jdf
 * @Last Modified time: 2018-05-08 10:11:28
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
    window.utils.ui.loadding()
    setTimeout(() => {
      window.utils.ui.closeLoadding()
    }, 3000)
    let option = Object.assign({scene: !window.Wechat ? '' : window.Wechat.Scene.TIMELINE}, opt)
    console.log(option)
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用微信分享插件
        window.Wechat.share(option, function (result) {
          window.utils.ui.closeLoadding()
          resolve(result)
        }, function (reason) {
          window.utils.ui.closeLoadding()
          reject(reason)
        })
      } else {
        reject('微信分享,请在App内调用')
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
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用cordova 相机插件
        window.JPush.setApplicationIconBadgeNumber(number)
        window.JPush.getApplicationIconBadgeNumber((badgeNum) => {
          console.log('角标数量', badgeNum)
          resolve(badgeNum)
        })
      } else {
        reject({error: '请在App中使用'})
      }
    })
    return promise
  },
  /**
   * @name 设置alias别名
   */
  setAlias (aliasName) {
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用cordova 相机插件
        window.JPush.setAlias({ sequence: 1, alias: aliasName }, (result) => {
          var sequence = result.sequence
          var alias = result.alias
          console.log('alias设置成功', sequence, alias)
        }, (error) => {
          var sequence = error.sequence
          var errorCode = error.code
          console.log('alias设置失败', sequence, errorCode)
        })
      } else {
        reject({error: '请在App中使用'})
      }
    })
    return promise
  },
  /**
   * @name 获取配置信息
   */
  getConfig () {
    // 设置返回函数
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova) {
        // 调用cordova 相机插件
        window.plugins.n22Config.getConfig(function success (result) {
          resolve(result)
        })
      } else {
        reject({error: '请在App中使用'})
      }
    })
    return promise
  },
  /**
   * 版本更新
   * @param type 更新类型 默认为h5 native , h5
   * incremental 增量
   * full 全量
   */
  updateApp (downLoadUrl, type = 'h5') {
    let promise = new Promise(function (resolve, reject) {
      if (window.cordova && downLoadUrl && window.cordova.plugins.N22Download) {
        if (type === 'h5') {
          // 调用cordova 相机插件
          window.cordova.plugins.N22Download.incremental({
            url: downLoadUrl,
            versionCode: ''
          }, function (ret) {
            resolve('下载完成')
          }, function (err) {
            reject('下载失败')
          })
        } else {
          // 全量更新
          window.cordova.plugins.N22Download.full({
            url: downLoadUrl,
            versionCode: ''
          })
        }
      } else if (!downLoadUrl) {
        reject({error: '下载地址不能为空'})
      } else {
        reject({error: '请在App中使用'})
      }
    })
    return promise
    // 增量更新
  },
  /**
   * @name 获取当前位置信息 百度地图
   * @desc https://github.com/aruis/cordova-plugin-baidumaplocation
   *  返回对象
    {  "radius": 65,
       "longitude": 121.50302348967003,
       "time": "2018-04-21 11:09:43",
       "countryCode": "0",
        "latitude": 31.14273096183987,
        "title": "我的位置",
        "street": "三林路",
        "addr": "上海市浦东新区三林路224号",
        "province": "上海市",
        "city": "上海市",
        "locationDescribe": "上海三林建筑工程有限公司内,三林路234号3栋附近7米",
        "district": "浦东新区",
        "country": "中国"
        }
   */
  getCurrentPosition () {
    // window.utils.ui.loadding()
    let tempFun
    if (window.cordova) {
      tempFun = function () {
        let promise = new Promise(function (resolve, reject) {
          window.baidumap_location.getCurrentPosition(function (result) {
            console.log(JSON.stringify(result, null, 4))
            window.utils.ui.closeLoadding()
            resolve(result)
          }, function (error) {
            window.utils.ui.closeLoadding()
            reject(error)
          })
        })
        return promise
      }
    } else {
      tempFun = function () {
        let promise = new Promise(function (resolve, reject) {
          let options = {
            enableHighAccuracy: true,
            maximumAge: 1000
          }
          // reject({error: '请在App中使用'})
          navigator.geolocation.getCurrentPosition(success => {
            window.utils.ui.closeLoadding()
            success.latitude = success.coords.latitude
            success.longitude = success.coords.longitude
            resolve(success)
          }, error => {
            window.utils.ui.closeLoadding()
            reject(error)
          }, options)
        })
        return promise
      }
      // 惰性函数
      this.getCurrentPosition = tempFun
      return tempFun()
    }
    // 设置返回函数
    // let promise = new Promise(function (resolve, reject) {
    //   if (window.cordova) {
    //     window.baidumap_location.getCurrentPosition(function (result) {
    //       console.log(JSON.stringify(result, null, 4))
    //       window.utils.ui.closeLoadding()
    //       resolve(result)
    //     }, function (error) {
    //       window.utils.ui.closeLoadding()
    //       reject(error)
    //     })
    //   } else {
    //     // 游览器中获取经纬度
    //     let options = {
    //       enableHighAccuracy: true,
    //       maximumAge: 1000
    //     }
    //     // reject({error: '请在App中使用'})
    //     navigator.geolocation.getCurrentPosition(success => {
    //       window.utils.ui.closeLoadding()
    //       success.latitude = success.coords.latitude
    //       success.longitude = success.coords.longitude
    //       resolve(success)
    //     }, error => {
    //       window.utils.ui.closeLoadding()
    //       reject(error)
    //     }, options)
    //   }
    // })
    // return promise
  }
}

export default native
