webpackJsonp([5],{"8DFB":function(t,e,n){"use strict";e.a={name:"n22Canvas",components:{n22Sun:function(t){n.e(35).then(function(){return t(n("U5FQ"))}.bind(null,n)).catch(n.oe)}},data:function(){return{score:0,ctx:"",sunUrl:n("p2lj"),plantUrl:"",imageList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}},methods:{getImg:function(t){var e=this;t.target.style.opacity="0",t.target.style["pointer-events"]="none",t.target.style["z-index"]="0",console.log(t),this.$refs.sun_ball.drop(t.target),setTimeout(function(){e.$refs.demo_canvas.removeChild(t.target),e.score++},1300)},createSun:function(t,e){var n=this;console.log(t,e);var s=this.screenWidth*Math.random(1),i=this.screenHeight*Math.random(1);if(s<t-20||s>t+90||i<e-20||e>e+90)return void this.createSun(t,e);if(s<0||s>this.screenWidth-78||i<100||i>this.screenHeight-78)return void this.createSun(t,e);var a=new Image;a.src=this.sunUrl,a.className+=" sun_img",a.style.left=s+"px",a.style.top=i+"px",a.addEventListener("click",function(t){n.getImg(t)}),this.$refs.demo_canvas.appendChild(a)},createPlant:function(){if(100>this.screenWidth-78||100>this.screenHeight-78)return void this.createPlant();var t=new Image;t.src=this.plantUrl,t.className+=" sun_img plant",t.style.left="100px",t.style.top="100px",this.$refs.demo_canvas.appendChild(t)},clearCanvas:function(){this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight)},drawPlant:function(t,e){var n=this,s=new Image;s.src=t,s.onload=function(){n.clearCanvas(),n.ctx.drawImage(s,0,0,49,47)}},drawZombi:function(t){var e=this,n=new Image;n.src=t,n.onload=function(){e.clearCanvas(),e.ctx.drawImage(n,100,100,200,200)}}},mounted:function(){var t=this;this.ctx=this.$refs.game_content.getContext("2d");var e=0;setInterval(function(){var n="./../../../static/images/plants/zombies/dieboom/dieboom_"+(e>=10?e:"0"+e)+".png";t.drawZombi(n,2),t.clearCanvas(),++e>=18&&(e=0)},200)}}},"G/Tf":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"demo_canvas",staticClass:"demo_canvas"},[n("div",{staticClass:"score"},[t._v("\n    "+t._s(t.score)+"分\n  ")]),t._v(" "),n("canvas",{ref:"game_content",attrs:{width:t.screenWidth+"px",height:t.screenHeight+"px",id:"game_content"}},[t._v("\n    我是测试的\n  ")]),t._v(" "),n("div",{staticStyle:{position:"absolute",opacity:"0",top:"0px","z-index":"-10"}},t._l(t.imageList,function(t,e){return n("img",{key:e,attrs:{src:"./../../../static/images/plants/zombies/dieboom/dieboom_"+(e<10?"0"+e:e)+".png",alt:""}})}))])},i=[],a={render:s,staticRenderFns:i};e.a=a},KOIC:function(t,e,n){"use strict";function s(t){n("RzG8")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("8DFB"),a=n("G/Tf"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,null,null);e.default=c.exports},RzG8:function(t,e,n){var s=n("hqwU");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("6603c8ea",s,!0,{})},hqwU:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,".demo_canvas .sun_img{position:absolute;z-index:10}.demo_canvas .plant{-webkit-transition:all .2s linear;transition:all .2s linear;pointer-events:none}.demo_canvas .score{position:absolute;right:30px;top:30px;width:100px;height:50px;background:rgba(0,0,255,.3);border-radius:10px;color:#fff;font-size:2rem;line-height:50px;text-align:center;z-index:100;pointer-events:none}",""])},p2lj:function(t,e,n){t.exports=n.p+"static/img/sun.63fe5d6.gif"}});