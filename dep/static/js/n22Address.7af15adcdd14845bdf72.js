webpackJsonp([32],{"0T0k":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("n22-page",[s("mt-header",{attrs:{slot:"header",fixed:!0,title:"地址控件"},slot:"header"},[s("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(e){return t.back(e)}},slot:"left"})],1),t._v(" "),s("div",{staticClass:"show_code_main",attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"first"},[s("n22-field",{attrs:{label:"地址",need:"*"}},[s("n22-address",{attrs:{slot:"right",disabled:t.disabled,province:t.address.province,city:t.address.city,area:t.address.area},on:{choose:t.choose,"update:province":function(e){t.$set(t.address,"province",e)},"update:city":function(e){t.$set(t.address,"city",e)},"update:area":function(e){t.$set(t.address,"area",e)}},slot:"right"})],1),t._v(" "),s("br"),t._v(" "),s("div"),t._v(" "),s("div",{staticClass:"demo_page"},[s("br"),t._v(" "),s("br"),t._v(" "),s("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.setValue()}}},[t._v("塞入默认值")]),t._v(" "),s("br"),t._v(" "),s("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.disabled=!t.disabled}}},[t._v("禁用/解禁")])],1)],1),t._v(" "),s("div",{staticClass:"secend"},[s("n22-highlight",{attrs:{lang:"html"}},[t._v('\n          <n22-address  :disabled = "disabled"\n                            @choose="choose"\n                            :province.sync="address.province"\n                            :city.sync="address.city"\n                            :area.sync="address.area"\n                            slot="right">\n        </n22-address>\n          ')]),t._v(" "),s("br"),t._v(" "),s("n22-highlight",{attrs:{lang:"javascript"}},[t._v("\n      // data 绑定数据\n      disabled: false,\n      address: {\n        province: '',\n        city: '',\n        area: ''\n      }\n\n      //方法 塞入默认值\n      setValue () {\n        this.address.province = '610000'\n        this.address.city = '610100'\n        this.address.area = '610104'\n      }\n          ")])],1)])],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},VCB2:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Yt1u"),n=s("0T0k"),r=s("VU/8"),i=r(a.a,n.a,!1,null,null,null);e.default=i.exports},Yt1u:function(t,e,s){"use strict";var a=s("mvHQ"),n=s.n(a);e.a={name:"demo",components:{},data:function(){return{disabled:!1,address:{province:"",city:"",area:""}}},methods:{setValue:function(){this.address.province="610000",this.address.city="610100",this.address.area="610104"},choose:function(t){console.log("返回数据----\x3e",n()(t))}},mounted:function(){}}}});