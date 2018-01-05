import axios from 'axios'
import format from './format'
import store from '../vuex/store'
import { Indicator } from 'mint-ui'

let instance = axios.create({
  timeout: 50000,
  method: 'post',
  headers: {
    post: {
      'Content-Type': ''
    }
  }
})
// 当请求异常，网络异常,返回异常时候进行提示
function showError () {
  Indicator.close()
  store.commit('LOADING', { loading: false })
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
    Indicator.open({
      text: '',
      spinnerType: 'fading-circle'
    })
  }

  // 新增自动塞入token属性
  if (utils.cache.get('token')) {
  // config.data.token = utils.cache.get("token");
  }

  let params = {
    'packageList': {
      'packages': {
        'header': {
          'requestType': config.url,
          'comId': globalConfig.comId,
          'from': globalConfig.from,
          'sendTime': new Date().format('yyyy-MM-dd HH:mm:ss'),
          'orderSerial': 'orderId',
          'comSerial': 'comSerial',
          'productCode': utils.cache.get('token')
        },
        request: DES3.encrypt('', JSON.stringify({
          requestPayload: Base64.encode(JSON.stringify(config.data))
        }).replace(/\s/g, ''))
      }
    }
  }
  let paramStr = JSON.stringify(params)
  let sign = hex_hmac_md5(globalConfig.transfer, paramStr)
  config.url = globalConfig.rootUrl + 'interfaceChannel?sign=' + sign + '&com_id=' + globalConfig.comId
  config.data = paramStr
  return config
},
/* eslint handle-callback-err: "warn" */
error => {
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
  Indicator.close()
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
    response.data.packageList.packages.response = JSON.parse(DES3.decrypt('', response.data.packageList.packages.response))
    responsePayload = response.data.packageList.packages.response.responsePayload
    console.log('%c 返回数据>>>>>>>', 'color:green', response)
    if (typeof responsePayload.data === 'string') {
      try {
        responsePayload.data != '' && (responsePayload.data = JSON.parse(responsePayload.data))
      } catch (error) {
        // 后台数据为空
        console.error(error)
      }
    }
    if (!responsePayload.result) {
      let errorMsg = (responsePayload.data && responsePayload.data.ErrorMessage) || responsePayload.msg || '网络异常'
      return Promise.reject({
        isLogicError: true,
        errorMessage: errorMsg,
        data: responsePayload
      })
    }
  } catch (e) {
    console.error(e)
    showError()
    return Promise.reject({
      isLogicError: false,
      errorMessage: '网络异常,请检查网络'
    })
  }
  response.data = responsePayload.data
  return response
}, error => {
  store.commit('LOADING_DISABLED', false)
  showError()
  return Promise.reject({
    isLogicError: false,
    errorMessage: '网络异常,请检查网络'
  })
})

export default {
  axios: axios,
  post (service, params = {}) {
    console.log('%c 请求数据>>>>>>>', 'color:green', JSON.parse(JSON.stringify(params || {})))
    return instance.post(service, params)
  }
}
