webpackJsonp([5],{"0cqf":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".demo_page[data-v-2b9e0348]{padding:10px;font-size:1.4rem}",""])},"6E9B":function(t,e,a){"use strict";e.a={name:"demo",components:{},data:function(){return{modal:{text:"",idcard:""},rule:{text:{rules:["require:必填项"]},idcard:{rules:["idcard:身份证"]}},validate:{text:{status:!1},idcard:{status:!1}}}},methods:{sunbmit:function(){var t=window.utils.validator.judge(this.validate);console.log(t)}},mounted:function(){}}},AtEH:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("n22-page",[a("mt-header",{attrs:{slot:"header",fixed:!0,title:"输入验证组件"},slot:"header"},[a("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[a("mt-button",{attrs:{icon:"back"}})],1)],1),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"demo_page"},[t._v("\n      必填项验证\n      "),a("n22-input",{attrs:{slot:"input",type:"text",form:t.validate.text,validator:t.rule.text,hintText:"请输入"},on:{"update:form":function(e){t.validate.text=e}},slot:"input",model:{value:t.modal.text,callback:function(e){t.modal.text=e},expression:"modal.text"}}),t._v("\n      数字\n      "),a("n22-input",{attrs:{slot:"input",type:"text",form:t.validate.idcard,validator:t.rule.idcard,hintText:"请输入"},on:{"update:form":function(e){t.validate.idcard=e}},slot:"input",model:{value:t.modal.idcard,callback:function(e){t.modal.idcard=e},expression:"modal.idcard"}}),t._v("\n      "+t._s(t.validate)+"\n      "),a("br"),t._v(" "),a("br"),t._v(" "),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.sunbmit()}}},[t._v("提交")])],1)])],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},"I5+p":function(t,e,a){var n=a("0cqf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("74249fc3",n,!0)},UILP:function(t,e,a){"use strict";function n(t){a("I5+p")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("6E9B"),i=a("AtEH"),r=a("VU/8"),d=n,l=r(o.a,i.a,d,"data-v-2b9e0348",null);e.default=l.exports}});