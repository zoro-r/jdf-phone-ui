webpackJsonp([21],{"10D8":function(t,e,n){var i=n("8VlB");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("6e65f192",i,!0,{})},"2TGB":function(t,e,n){"use strict";e.a={name:"demo",components:{},data:function(){return{showZoom:!1,disabled:!1,value:"m"}},methods:{takeNative:function(t){switch(t){case 1:window.utils.native.initJPush(!0);break;case 2:window.utils.native.stopPush();break;case 3:window.utils.native.isPushStopped();break;case 4:window.utils.native.getRegistrationID();break;case 5:window.utils.native.setApplicationIconBadgeNumber(0)}}},mounted:function(){document.addEventListener("jpush.openNotification",function(t){var e=t.aps.alert;alert("open notification:"+e)},!1),document.addEventListener("jpush.receiveNotification",function(t){var e=t.aps.alert;alert("open Notification:"+e)},!1),document.addEventListener("jpush.backgroundNotification",function(t){var e=t.aps.alert;alert("open Notification:"+e)},!1)}}},"8VlB":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".demo_page[data-v-1f9fb1fe]{padding:10px;font-size:1.4rem}",""])},E7tr:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("n22-page",[n("mt-header",{attrs:{slot:"header",title:"极光推送",fixed:!0},slot:"header"},[n("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(e){return t.back(e)}},slot:"left"})],1),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("br"),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.takeNative(1)}}},[t._v("初始化极光推送")]),t._v(" "),n("br"),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.takeNative(2)}}},[t._v("停止推送")]),t._v(" "),n("br"),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.takeNative(3)}}},[t._v("判断是否操作成功")]),t._v(" "),n("br"),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.takeNative(4)}}},[t._v("获取 RegistrationID")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.takeNative(5)}}},[t._v("清除角标")]),t._v(" "),n("br")],1)],1)},a=[],o={render:i,staticRenderFns:a};e.a=o},khLF:function(t,e,n){"use strict";function i(t){n("10D8")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("2TGB"),o=n("E7tr"),r=n("VU/8"),s=i,c=r(a.a,o.a,!1,s,"data-v-1f9fb1fe",null);e.default=c.exports}});