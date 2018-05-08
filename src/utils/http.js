// 定义私有变量
import axios from 'axios'
// import format from './format'
import store from '../vuex/store'
// import { Indicator } from 'mint-ui'
import DES3 from './../../static/lib/security/DES3.js'
import hexHmacMd5 from './../../static/lib/security/md5-min.js'
import router from './../routers'
// import Base64 from './../../static/lib/security/base64.js'
let instance = axios.create({
  timeout: window.globalConcifg ? window.globalConcifg.timeout : 60000,
  method: 'post',
  // withCredentials: true
  headers: {
    post: {
      'Content-Type': ''
    }
  }
})
// 当请求异常，网络异常,返回异常时候进行提示
function showError () {
  window.utils.ui.closeLoadding()
  store.commit('LOADING', { loading: false })
  // 同意提示
  window.utils.ui.toast('网络异常,请检查网络')
  store.commit('TOGGLE_TOAST', {
    toast: true,
    toastMsg: '网络异常,请检查网络'
  })
};
let loadingCount = 0
// 请求拦截器
instance.interceptors.request.use(config => {
  loadingCount++
  if (!store.state.common.loadingDisabled) {
    window.utils.ui.loadding()
  }

  // 新增自动塞入token属性
  if (window.utils.cache.get('token')) {
  // config.data.token = window.utils.cache.get("token");
  }
  // 包装请求参数
  let req = {
    commonObject: {
      deviceNo: '123456', // 54258025099324604000
      channel: window.globalConfig.os === 'ios' ? '1' : '0',
      openId: '', // oomSRjgR6bU9RXKQ6SrgHgSVbJDk
      loginCode: '15874253776',
      tokenCode: window.utils.cache.get('token')
    }
    // paramObject: config.data
  }
  if (!config.data.loginCode) {
    // config.data.loginCode = '13810086730'
  }
  let reqParam = Object.assign(req, config.data)
  let params = {
    'packageList': {
      'packages': {
        'header': {
          'requestType': config.url,
          'comId': window.globalConfig.comId,
          'from': window.globalConfig.from,
          'sendTime': new Date().format('yyyy-MM-dd HH:mm:ss'),
          'orderSerial': 'orderId',
          'comSerial': 'comSerial',
          'productCode': window.utils.cache.get('token'),
          'responseCode': '0',
          'asyn': '0'
          // 'channel': 'iwechat',
          // 'loginType': 'ownCheck',
          // 'openId': 'oomSRjgR6bU9RXKQ6SrgHgSVbJDk'
        },
        request: DES3.encrypt('', JSON.stringify({objects: reqParam}).replace(/\s/g, ''))
      }
    }
  }
  // 封装公共代码区域 @todu
  console.log('数据', DES3.decrypt('', params.packageList.packages.request))
  console.log(JSON.stringify(params))
  // DES3.encrypt('', JSON.stringify(reqData).replace(/\s/g, ""));
  let paramStr = JSON.stringify(params)
  let sign = hexHmacMd5.hex_hmac_md5(window.globalConfig.transfer, paramStr)
  config.url = window.globalConfig.rootUrl + 'interfaceChannel?sign=' + sign + '&com_id=' + window.globalConfig.comId
  config.data = paramStr
  console.log('config', config)
  return config
}, error => {
  // store.commit('TOGGLE_TOAST', {
  //   toast: true,
  //   toastMsg: '发送请求失败！'
  // })
  return Promise.reject({
    isLogicError: false,
    errorMessage: '网络异常,请检查网络'
  })
})
// 返回拦截器
instance.interceptors.response.use(response => {
  loadingCount--
  let responsePayload
  // 关闭loadding框
  window.utils.ui.closeLoadding()
  if (loadingCount == 0) {
    store.commit('LOADING_DISABLED', false)
  }
  if (location.href.indexOf('page/access') == -1) {
    store.commit('LOADING_DISABLED', false)
    store.commit('LOADING', {
      loading: false
    })
  }

  try {
    // 获取后台返回数据
    let backHeader = response.data.packageList.packages.header
    console.log('%c 返回数据>>>>>>>', 'color:green', backHeader)
    if (backHeader.responseCode === '1900') {
      // 如果返回的为1900 则为登陆失效状态
      window.utils.ui.toast(backHeader.errorMessage || '登陆失效，请重新登陆')
      // 跳回登陆
      router.push({name: 'login'})
    } else if (backHeader.responseCode !== '0') {
      // 返回失败的时候统一进行提示
      let errMsg = backHeader.errorMessage || ''
      if (errMsg.indexOf('方法出错。具体原因') >= 0) {
        errMsg = '服务器接口出错'
      }
      window.utils.ui.toast(errMsg || '网络异常')
      return Promise.reject({
        isLogicError: true,
        errorMessage: errMsg || '网络异常',
        data: undefined
      })
    } else {
      response.data.packageList.packages.response = JSON.parse(DES3.decrypt('', response.data.packageList.packages.response))
      responsePayload = response.data.packageList.packages.response
    }
    console.log('%c 返回数据>>>>>>>', 'color:green', response)
  } catch (e) {
    console.error(e)
    showError()
    return Promise.reject({
      isLogicError: false,
      errorMessage: '网络异常,请检查网络'
    })
  }
  response.data = responsePayload
  return response
}, error => {
  console.error(error)
  store.commit('LOADING_DISABLED', false)
  showError()
  return Promise.reject({
    isLogicError: false,
    errorMessage: '网络异常,请检查网络'
  })
})

// 对象转化为后台接收对象
function toParams (obj) {
  // 判断是否为后台对象
  let list = []
  for (const key in obj) {
    let tempObj = {}
    tempObj.fieldId = obj[key].id
    tempObj.fieldCode = obj[key].fieldCode
    tempObj.fieldValue = obj[key].value
    list.push(tempObj)
  }
  return list
}
// 后台对象的值转化为map(用于获取数据)
function toMap (list, key = 'fieldId') {
  // 判断是否为后台对象
  if (list && list.constructor == Array) {
    let tempMap = {}
    for (let i = 0; i < list.length; i++) {
      let item = list[i]
      // item.fieldValue = '3213131321'
      tempMap[item[key]] = item
    }
    return tempMap
  } else {
    return {}
  }
}

export default {
  axios: axios,
  post (service, params = {}) {
    console.log('%c 请求数据>>>>>>>', 'color:green', JSON.parse(JSON.stringify(params || {})))
    return instance.post(service, params)
  },
  toParams,
  toMap
}
