/*
 * @Author: jdf
 * @Date: 2018-01-16 10:29:00
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-17 15:04:31
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
    let promise = new Promise(function (reject, resolve) {
      if (window.cordova) {
        // 调用cordova 相机插件
        navigator.camera.getPicture(function success (imgUrl) {
          reject(imgUrl)
        }, function error (error) {
          resolve(error)
        }, options)
      } else {
        resolve({error: '相机-请在App内调用'})
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
    let promise = new Promise(function (reject, resolve) {
      if (window.cordova) {
        // 调用cordova 相机插件
        window.cordova.plugins.barcodeScanner.scan(function success (result) {
          reject(result)
        }, function error (error) {
          resolve(error)
        })
      } else {
        resolve({error: '扫一扫,请在App内调用'})
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
    let promise = new Promise(function (reject, resolve) {
      if (window.cordova) {
        // 调用cordova 相机插件
        navigator.contacts.pickContact(function (contact) {
          reject(contact)
        }, function (err) {
          resolve(err)
        })
      } else {
        resolve('选择联系人,请在App内调用')
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
    let promise = new Promise(function (reject, resolve) {
      if (window.cordova) {
        // 调用cordova 相机插件

        window.Wechat.share(option, function (result) {
          reject(result)
        }, function (reason) {
          resolve(reason)
        })
      } else {
        resolve('选择联系人,请在App内调用')
      }
    })
    return promise
  }
  // startCamera () {
  //   let options = {
  //     x: 0,
  //     y: 0,
  //     width: 100,
  //     height: 100,
  //     camera: CameraPreview.CAMERA_DIRECTION.BACK,
  //     toBack: false,
  //     tapPhoto: true,
  //     previewDrag: false
  //   }

  //   CameraPreview.startCamera(options, function (suess) {
  //     console.log(suess)
  //   })
  // }
}

export default native
