import store from '../vuex/store'
import axios from 'axios'
import format from './format'

let instance = axios.create({
  timeout: 50000,
  method: 'get',
});
//当请求异常，网络异常,返回异常时候进行提示
function showError() {
  store.commit('LOADING', {
    loading: false
  })
  store.commit('TOGGLE_TOAST', {
    toast: true,
    toastMsg: '网络异常,请检查网络'
  })
};
//请求拦截器
instance.interceptors.request.use(config => {
  store.commit('LOADING', {
    loading: true,
    msg: '正在加载'
  })
  return config
}, error => {
  store.commit('TOGGLE_TOAST', {
    toast: true,
    toastMsg: '发送请求失败！'
  })
  return Promise.reject({
    isLogicError: false,
    errorMessage: "网络异常,请检查网络"
  })
});
//返回拦截器
instance.interceptors.response.use(response => {
  console.log("%c 返回数据>>>>>>>", 'color:green', JSON.parse(JSON.stringify(response)))
  store.commit('LOADING_DISABLED', false)
  store.commit('LOADING', {
    loading: false
  })
  try {
    //保存微信用户信息
    if (!response.errcode) {
      store.commit('WX_USERINFO', response.data);
      return response.data
    } else {
      return Promise.reject({
        isLogicError: true,
        errorMessage: "获取用户信息失败",
        data: response.data
      })
    }
  } catch (e) {
    console.log(e)
    showError();
    return Promise.reject({
      isLogicError: false,
      errorMessage: "网络异常,请检查网络"
    })
  }
}, error => {
  store.commit('LOADING_DISABLED', false)
  showError();
  return Promise.reject({
    isLogicError: false,
    errorMessage: "网络异常,请检查网络"
  })
})
export default {
  //获取微信用户信息
  wxUserInfo1(callback) {
    console.log("微信用户信息", store.state.common.wxUserInfo)
    if (!store.state.common.wxUserInfo) {
      return instance.get(globalConfig.rootUrl + "weixin/getInfo&openId=" + utils.cache.get("wxConfig").openId);
    } else {
      return new Promise(function(resolve) {
        resolve(store.state.common.wxUserInfo);
      });
    }

  },
  //获取微信用户信息 第二次
  wxUserInfo(callback) {
    console.log("微信用户信息", store.state.common.wxUserInfo)
    if (!store.state.common.wxUserInfo) {
      return instance.get(globalConfig.rootUrl + "weixin/getInfo1?openId=" + utils.cache.get("wxConfig").openId + "&token=" + utils.cache.get("wxConfig").token);
    } else {
      return new Promise(function(resolve) {
        resolve(store.state.common.wxUserInfo);
      });
    }

  },
  //微信配置信息
  wxConfig() {
    let url = globalConfig.rootUrl + "weixin/getConfig?param=" + encodeURIComponent(window.location.href);
    instance.get(url).then((res)=>{
      console.log(res)
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.appId, // 必填，公众号的唯一标识
        timestamp: res.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.nonceStr, // 必填，生成签名的随机串
        signature: res.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareAppMessage','hideMenuItems'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    });
  },
  //微信支付接口
  wxPay() {
    function onBridgeReady() {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": "wx4ab795b130ab802e", //公众号名称，由商户传入
          "timeStamp": new Date().getTime, //时间戳，自1970年以来的秒数
          "nonceStr": "e61463f8efa94090b1f366cccfbbb444", //随机串
          "package": "prepay_id=u802345jgfjsdfgsdg888",
          "signType": "MD5", //微信签名方式：
          "paySign": "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {} // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }
      );
    }
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  },

  //微信分享朋友
  wxShareFriend(value){
    let promise = new Promise(function(resolve,reject){
      wx.onMenuShareAppMessage({
        title: value.title, // 分享标题
        desc: value.desc, // 分享描述
        link: value.link, //分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: value.imgUrl, // 分享图标
        type: value.type, // 分享类型,music、video或link，不填默认为link
        dataUrl: value.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
        success: function () { 
          resolve('success')// 用户确认分享后执行的回调函数
        },
        cancel: function () { 
          resolve('cancel')// 用户取消分享后执行的回调函数
        }
      }); 
    })
    return promise;
  },

  //批量隐藏功能菜单
  wxHideMenuList(){
    wx.hideMenuItems({
        //隐藏：发送给朋友；分享到朋友圈；分享到QQ；分享到Weibo；分享到FaceBook（让他分享脸书，能分享到脸书算我输）；分享到QQ空间
        menuList: ['menuItem:share:appMessage','menuItem:share:timeline','menuItem:share:qq','menuItem:share:weiboApp','menuItem:share:facebook','menuItem:share:QZone'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    });
  },
  //关闭微信窗口返回聊天界面
  wxClose() {
    WeixinJSBridge && WeixinJSBridge.call('closeWindow');
  }
}