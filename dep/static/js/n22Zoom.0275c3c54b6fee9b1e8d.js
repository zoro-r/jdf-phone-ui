webpackJsonp([1],{"5+P+":function(t,o,e){"use strict";var n=e("mvHQ"),s=e.n(n);o.a={name:"demo",components:{},data:function(){return{showZoom:!1,disabled:!1,value:"m"}},methods:{setValue:function(){this.value="f"==this.value?"m":"f"},choose:function(t){console.log("返回数据----\x3e",s()(t))}},mounted:function(){}}},R5HA:function(t,o,e){"use strict";function n(t){e("hDTK")}Object.defineProperty(o,"__esModule",{value:!0});var s=e("5+P+"),a=e("zRqZ"),i=e("VU/8"),r=n,c=i(s.a,a.a,r,"data-v-4b8a7245",null);o.default=c.exports},hDTK:function(t,o,e){var n=e("ii8Q");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("ce8e3538",n,!0)},ii8Q:function(t,o,e){o=t.exports=e("FZ+f")(!1),o.push([t.i,".demo_page[data-v-4b8a7245]{padding:10px;font-size:1.4rem}",""])},zRqZ:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("n22-page",[e("mt-header",{attrs:{slot:"header",title:"性别",fixed:!0},slot:"header"},[e("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1)],1),t._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[e("n22-zoom",{attrs:{title:"放大缩小",dialog:!0,show:t.showZoom},on:{"update:show":function(o){t.showZoom=o}}},[e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(o){t.showZoom=!t.showZoom}}},[t._v("关闭")]),t._v(" "),e("img",{staticStyle:{width:"100%"},attrs:{src:"http://uat-1253280931.cossh.myqcloud.com/rhwebchat/AJB00A/partic3.png"}})],1),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"demo_page"},[e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(o){t.showZoom=!t.showZoom}}},[t._v("点击展示")])],1)],1)],1)},s=[],a={render:n,staticRenderFns:s};o.a=a}});