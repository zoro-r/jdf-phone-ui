/* eslint-disable */
// document.write("<script language=javascript src=\"libs/zlib/deflate.min.js\" charset=\"utf-8\"></script>");
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
(function() {'use strict';var n=void 0,w=!0,aa=this;function ba(f,d){var c=f.split("."),e=aa;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for(var b;c.length&&(b=c.shift());)!c.length&&d!==n?e[b]=d:e=e[b]?e[b]:e[b]={}};var C="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function K(f,d){this.index="number"===typeof d?d:0;this.e=0;this.buffer=f instanceof(C?Uint8Array:Array)?f:new (C?Uint8Array:Array)(32768);if(2*this.buffer.length<=this.index)throw Error("invalid index");this.buffer.length<=this.index&&ca(this)}function ca(f){var d=f.buffer,c,e=d.length,b=new (C?Uint8Array:Array)(e<<1);if(C)b.set(d);else for(c=0;c<e;++c)b[c]=d[c];return f.buffer=b}
K.prototype.b=function(f,d,c){var e=this.buffer,b=this.index,a=this.e,g=e[b],m;c&&1<d&&(f=8<d?(L[f&255]<<24|L[f>>>8&255]<<16|L[f>>>16&255]<<8|L[f>>>24&255])>>32-d:L[f]>>8-d);if(8>d+a)g=g<<d|f,a+=d;else for(m=0;m<d;++m)g=g<<1|f>>d-m-1&1,8===++a&&(a=0,e[b++]=L[g],g=0,b===e.length&&(e=ca(this)));e[b]=g;this.buffer=e;this.e=a;this.index=b};K.prototype.finish=function(){var f=this.buffer,d=this.index,c;0<this.e&&(f[d]<<=8-this.e,f[d]=L[f[d]],d++);C?c=f.subarray(0,d):(f.length=d,c=f);return c};
var da=new (C?Uint8Array:Array)(256),M;for(M=0;256>M;++M){for(var N=M,S=N,ea=7,N=N>>>1;N;N>>>=1)S<<=1,S|=N&1,--ea;da[M]=(S<<ea&255)>>>0}var L=da;function ia(f){this.buffer=new (C?Uint16Array:Array)(2*f);this.length=0}ia.prototype.getParent=function(f){return 2*((f-2)/4|0)};ia.prototype.push=function(f,d){var c,e,b=this.buffer,a;c=this.length;b[this.length++]=d;for(b[this.length++]=f;0<c;)if(e=this.getParent(c),b[c]>b[e])a=b[c],b[c]=b[e],b[e]=a,a=b[c+1],b[c+1]=b[e+1],b[e+1]=a,c=e;else break;return this.length};
ia.prototype.pop=function(){var f,d,c=this.buffer,e,b,a;d=c[0];f=c[1];this.length-=2;c[0]=c[this.length];c[1]=c[this.length+1];for(a=0;;){b=2*a+2;if(b>=this.length)break;b+2<this.length&&c[b+2]>c[b]&&(b+=2);if(c[b]>c[a])e=c[a],c[a]=c[b],c[b]=e,e=c[a+1],c[a+1]=c[b+1],c[b+1]=e;else break;a=b}return{index:f,value:d,length:this.length}};function ka(f,d){this.d=la;this.i=0;this.input=C&&f instanceof Array?new Uint8Array(f):f;this.c=0;d&&(d.lazy&&(this.i=d.lazy),"number"===typeof d.compressionType&&(this.d=d.compressionType),d.outputBuffer&&(this.a=C&&d.outputBuffer instanceof Array?new Uint8Array(d.outputBuffer):d.outputBuffer),"number"===typeof d.outputIndex&&(this.c=d.outputIndex));this.a||(this.a=new (C?Uint8Array:Array)(32768))}var la=2,na={NONE:0,h:1,g:la,n:3},T=[],U;
for(U=0;288>U;U++)switch(w){case 143>=U:T.push([U+48,8]);break;case 255>=U:T.push([U-144+400,9]);break;case 279>=U:T.push([U-256+0,7]);break;case 287>=U:T.push([U-280+192,8]);break;default:throw"invalid literal: "+U;}
ka.prototype.f=function(){var f,d,c,e,b=this.input;switch(this.d){case 0:c=0;for(e=b.length;c<e;){d=C?b.subarray(c,c+65535):b.slice(c,c+65535);c+=d.length;var a=d,g=c===e,m=n,k=n,p=n,t=n,u=n,l=this.a,h=this.c;if(C){for(l=new Uint8Array(this.a.buffer);l.length<=h+a.length+5;)l=new Uint8Array(l.length<<1);l.set(this.a)}m=g?1:0;l[h++]=m|0;k=a.length;p=~k+65536&65535;l[h++]=k&255;l[h++]=k>>>8&255;l[h++]=p&255;l[h++]=p>>>8&255;if(C)l.set(a,h),h+=a.length,l=l.subarray(0,h);else{t=0;for(u=a.length;t<u;++t)l[h++]=
a[t];l.length=h}this.c=h;this.a=l}break;case 1:var q=new K(C?new Uint8Array(this.a.buffer):this.a,this.c);q.b(1,1,w);q.b(1,2,w);var s=oa(this,b),x,fa,z;x=0;for(fa=s.length;x<fa;x++)if(z=s[x],K.prototype.b.apply(q,T[z]),256<z)q.b(s[++x],s[++x],w),q.b(s[++x],5),q.b(s[++x],s[++x],w);else if(256===z)break;this.a=q.finish();this.c=this.a.length;break;case la:var B=new K(C?new Uint8Array(this.a.buffer):this.a,this.c),ta,J,O,P,Q,La=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X,ua,Y,va,ga,ja=Array(19),
wa,R,ha,y,xa;ta=la;B.b(1,1,w);B.b(ta,2,w);J=oa(this,b);X=pa(this.m,15);ua=qa(X);Y=pa(this.l,7);va=qa(Y);for(O=286;257<O&&0===X[O-1];O--);for(P=30;1<P&&0===Y[P-1];P--);var ya=O,za=P,F=new (C?Uint32Array:Array)(ya+za),r,G,v,Z,E=new (C?Uint32Array:Array)(316),D,A,H=new (C?Uint8Array:Array)(19);for(r=G=0;r<ya;r++)F[G++]=X[r];for(r=0;r<za;r++)F[G++]=Y[r];if(!C){r=0;for(Z=H.length;r<Z;++r)H[r]=0}r=D=0;for(Z=F.length;r<Z;r+=G){for(G=1;r+G<Z&&F[r+G]===F[r];++G);v=G;if(0===F[r])if(3>v)for(;0<v--;)E[D++]=0,
H[0]++;else for(;0<v;)A=138>v?v:138,A>v-3&&A<v&&(A=v-3),10>=A?(E[D++]=17,E[D++]=A-3,H[17]++):(E[D++]=18,E[D++]=A-11,H[18]++),v-=A;else if(E[D++]=F[r],H[F[r]]++,v--,3>v)for(;0<v--;)E[D++]=F[r],H[F[r]]++;else for(;0<v;)A=6>v?v:6,A>v-3&&A<v&&(A=v-3),E[D++]=16,E[D++]=A-3,H[16]++,v-=A}f=C?E.subarray(0,D):E.slice(0,D);ga=pa(H,7);for(y=0;19>y;y++)ja[y]=ga[La[y]];for(Q=19;4<Q&&0===ja[Q-1];Q--);wa=qa(ga);B.b(O-257,5,w);B.b(P-1,5,w);B.b(Q-4,4,w);for(y=0;y<Q;y++)B.b(ja[y],3,w);y=0;for(xa=f.length;y<xa;y++)if(R=
f[y],B.b(wa[R],ga[R],w),16<=R){y++;switch(R){case 16:ha=2;break;case 17:ha=3;break;case 18:ha=7;break;default:throw"invalid code: "+R;}B.b(f[y],ha,w)}var Aa=[ua,X],Ba=[va,Y],I,Ca,$,ma,Da,Ea,Fa,Ga;Da=Aa[0];Ea=Aa[1];Fa=Ba[0];Ga=Ba[1];I=0;for(Ca=J.length;I<Ca;++I)if($=J[I],B.b(Da[$],Ea[$],w),256<$)B.b(J[++I],J[++I],w),ma=J[++I],B.b(Fa[ma],Ga[ma],w),B.b(J[++I],J[++I],w);else if(256===$)break;this.a=B.finish();this.c=this.a.length;break;default:throw"invalid compression type";}return this.a};
function ra(f,d){this.length=f;this.k=d}
var sa=function(){function f(b){switch(w){case 3===b:return[257,b-3,0];case 4===b:return[258,b-4,0];case 5===b:return[259,b-5,0];case 6===b:return[260,b-6,0];case 7===b:return[261,b-7,0];case 8===b:return[262,b-8,0];case 9===b:return[263,b-9,0];case 10===b:return[264,b-10,0];case 12>=b:return[265,b-11,1];case 14>=b:return[266,b-13,1];case 16>=b:return[267,b-15,1];case 18>=b:return[268,b-17,1];case 22>=b:return[269,b-19,2];case 26>=b:return[270,b-23,2];case 30>=b:return[271,b-27,2];case 34>=b:return[272,
b-31,2];case 42>=b:return[273,b-35,3];case 50>=b:return[274,b-43,3];case 58>=b:return[275,b-51,3];case 66>=b:return[276,b-59,3];case 82>=b:return[277,b-67,4];case 98>=b:return[278,b-83,4];case 114>=b:return[279,b-99,4];case 130>=b:return[280,b-115,4];case 162>=b:return[281,b-131,5];case 194>=b:return[282,b-163,5];case 226>=b:return[283,b-195,5];case 257>=b:return[284,b-227,5];case 258===b:return[285,b-258,0];default:throw"invalid length: "+b;}}var d=[],c,e;for(c=3;258>=c;c++)e=f(c),d[c]=e[2]<<24|
e[1]<<16|e[0];return d}(),Ha=C?new Uint32Array(sa):sa;
function oa(f,d){function c(b,c){var a=b.k,d=[],e=0,f;f=Ha[b.length];d[e++]=f&65535;d[e++]=f>>16&255;d[e++]=f>>24;var g;switch(w){case 1===a:g=[0,a-1,0];break;case 2===a:g=[1,a-2,0];break;case 3===a:g=[2,a-3,0];break;case 4===a:g=[3,a-4,0];break;case 6>=a:g=[4,a-5,1];break;case 8>=a:g=[5,a-7,1];break;case 12>=a:g=[6,a-9,2];break;case 16>=a:g=[7,a-13,2];break;case 24>=a:g=[8,a-17,3];break;case 32>=a:g=[9,a-25,3];break;case 48>=a:g=[10,a-33,4];break;case 64>=a:g=[11,a-49,4];break;case 96>=a:g=[12,a-
65,5];break;case 128>=a:g=[13,a-97,5];break;case 192>=a:g=[14,a-129,6];break;case 256>=a:g=[15,a-193,6];break;case 384>=a:g=[16,a-257,7];break;case 512>=a:g=[17,a-385,7];break;case 768>=a:g=[18,a-513,8];break;case 1024>=a:g=[19,a-769,8];break;case 1536>=a:g=[20,a-1025,9];break;case 2048>=a:g=[21,a-1537,9];break;case 3072>=a:g=[22,a-2049,10];break;case 4096>=a:g=[23,a-3073,10];break;case 6144>=a:g=[24,a-4097,11];break;case 8192>=a:g=[25,a-6145,11];break;case 12288>=a:g=[26,a-8193,12];break;case 16384>=
a:g=[27,a-12289,12];break;case 24576>=a:g=[28,a-16385,13];break;case 32768>=a:g=[29,a-24577,13];break;default:throw"invalid distance";}f=g;d[e++]=f[0];d[e++]=f[1];d[e++]=f[2];var k,m;k=0;for(m=d.length;k<m;++k)l[h++]=d[k];s[d[0]]++;x[d[3]]++;q=b.length+c-1;u=null}var e,b,a,g,m,k={},p,t,u,l=C?new Uint16Array(2*d.length):[],h=0,q=0,s=new (C?Uint32Array:Array)(286),x=new (C?Uint32Array:Array)(30),fa=f.i,z;if(!C){for(a=0;285>=a;)s[a++]=0;for(a=0;29>=a;)x[a++]=0}s[256]=1;e=0;for(b=d.length;e<b;++e){a=
m=0;for(g=3;a<g&&e+a!==b;++a)m=m<<8|d[e+a];k[m]===n&&(k[m]=[]);p=k[m];if(!(0<q--)){for(;0<p.length&&32768<e-p[0];)p.shift();if(e+3>=b){u&&c(u,-1);a=0;for(g=b-e;a<g;++a)z=d[e+a],l[h++]=z,++s[z];break}0<p.length?(t=Ia(d,e,p),u?u.length<t.length?(z=d[e-1],l[h++]=z,++s[z],c(t,0)):c(u,-1):t.length<fa?u=t:c(t,0)):u?c(u,-1):(z=d[e],l[h++]=z,++s[z])}p.push(e)}l[h++]=256;s[256]++;f.m=s;f.l=x;return C?l.subarray(0,h):l}
function Ia(f,d,c){var e,b,a=0,g,m,k,p,t=f.length;m=0;p=c.length;a:for(;m<p;m++){e=c[p-m-1];g=3;if(3<a){for(k=a;3<k;k--)if(f[e+k-1]!==f[d+k-1])continue a;g=a}for(;258>g&&d+g<t&&f[e+g]===f[d+g];)++g;g>a&&(b=e,a=g);if(258===g)break}return new ra(a,d-b)}
function pa(f,d){var c=f.length,e=new ia(572),b=new (C?Uint8Array:Array)(c),a,g,m,k,p;if(!C)for(k=0;k<c;k++)b[k]=0;for(k=0;k<c;++k)0<f[k]&&e.push(k,f[k]);a=Array(e.length/2);g=new (C?Uint32Array:Array)(e.length/2);if(1===a.length)return b[e.pop().index]=1,b;k=0;for(p=e.length/2;k<p;++k)a[k]=e.pop(),g[k]=a[k].value;m=Ja(g,g.length,d);k=0;for(p=a.length;k<p;++k)b[a[k].index]=m[k];return b}
function Ja(f,d,c){function e(a){var b=k[a][p[a]];b===d?(e(a+1),e(a+1)):--g[b];++p[a]}var b=new (C?Uint16Array:Array)(c),a=new (C?Uint8Array:Array)(c),g=new (C?Uint8Array:Array)(d),m=Array(c),k=Array(c),p=Array(c),t=(1<<c)-d,u=1<<c-1,l,h,q,s,x;b[c-1]=d;for(h=0;h<c;++h)t<u?a[h]=0:(a[h]=1,t-=u),t<<=1,b[c-2-h]=(b[c-1-h]/2|0)+d;b[0]=a[0];m[0]=Array(b[0]);k[0]=Array(b[0]);for(h=1;h<c;++h)b[h]>2*b[h-1]+a[h]&&(b[h]=2*b[h-1]+a[h]),m[h]=Array(b[h]),k[h]=Array(b[h]);for(l=0;l<d;++l)g[l]=c;for(q=0;q<b[c-1];++q)m[c-
1][q]=f[q],k[c-1][q]=q;for(l=0;l<c;++l)p[l]=0;1===a[c-1]&&(--g[0],++p[c-1]);for(h=c-2;0<=h;--h){s=l=0;x=p[h+1];for(q=0;q<b[h];q++)s=m[h+1][x]+m[h+1][x+1],s>f[l]?(m[h][q]=s,k[h][q]=d,x+=2):(m[h][q]=f[l],k[h][q]=l,++l);p[h]=0;1===a[h]&&e(h)}return g}
function qa(f){var d=new (C?Uint16Array:Array)(f.length),c=[],e=[],b=0,a,g,m,k;a=0;for(g=f.length;a<g;a++)c[f[a]]=(c[f[a]]|0)+1;a=1;for(g=16;a<=g;a++)e[a]=b,b+=c[a]|0,b<<=1;a=0;for(g=f.length;a<g;a++){b=e[f[a]];e[f[a]]+=1;m=d[a]=0;for(k=f[a];m<k;m++)d[a]=d[a]<<1|b&1,b>>>=1}return d};function Ka(f,d){this.input=f;this.a=new (C?Uint8Array:Array)(32768);this.d=V.g;var c={},e;if((d||!(d={}))&&"number"===typeof d.compressionType)this.d=d.compressionType;for(e in d)c[e]=d[e];c.outputBuffer=this.a;this.j=new ka(this.input,c)}var V=na;
Ka.prototype.f=function(){var f,d,c,e,b,a,g=0;a=this.a;switch(8){case 8:f=Math.LOG2E*Math.log(32768)-8;break;default:throw Error("invalid compression method");}d=f<<4|8;a[g++]=d;switch(8){case 8:switch(this.d){case V.NONE:e=0;break;case V.h:e=1;break;case V.g:e=2;break;default:throw Error("unsupported compression type");}break;default:throw Error("invalid compression method");}c=e<<6|0;a[g++]=c|31-(256*d+c)%31;var m=this.input;if("string"===typeof m){var k=m.split(""),p,t;p=0;for(t=k.length;p<t;p++)k[p]=
(k[p].charCodeAt(0)&255)>>>0;m=k}for(var u=1,l=0,h=m.length,q,s=0;0<h;){q=1024<h?1024:h;h-=q;do u+=m[s++],l+=u;while(--q);u%=65521;l%=65521}b=(l<<16|u)>>>0;this.j.c=g;a=this.j.f();g=a.length;C&&(a=new Uint8Array(a.buffer),a.length<=g+4&&(this.a=new Uint8Array(a.length+4),this.a.set(a),a=this.a),a=a.subarray(0,g+4));a[g++]=b>>24&255;a[g++]=b>>16&255;a[g++]=b>>8&255;a[g++]=b&255;return a};ba("Zlib.Deflate",Ka);ba("Zlib.Deflate.compress",function(f,d){return(new Ka(f,d)).f()});ba("Zlib.Deflate.prototype.compress",Ka.prototype.f);var Ma={NONE:V.NONE,FIXED:V.h,DYNAMIC:V.g},Na,Oa,W,Pa;if(Object.keys)Na=Object.keys(Ma);else for(Oa in Na=[],W=0,Ma)Na[W++]=Oa;W=0;for(Pa=Na.length;W<Pa;++W)Oa=Na[W],ba("Zlib.Deflate.CompressionType."+Oa,Ma[Oa]);}).call(window); //@ sourceMappingURL=deflate.min.js.map

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/components/core-min.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,r){var k={},l=k.lib={},n=function(){},f=l.Base={extend:function(a){n.prototype=this;var b=new n;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
j=l.WordArray=f.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=r?b:4*a.length},toString:function(a){return(a||s).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var e=0;e<a;e++)b[c+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((c+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)b[c+e>>>2]=d[e>>>2];else b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<
32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)b.push(4294967296*h.random()|0);return new j.init(b,a)}}),m=k.enc={},s=m.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,
2),16)<<24-4*(c%8);return new j.init(d,b/2)}},p=m.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new j.init(d,b)}},t=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new j.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=t.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;c=h.min(4*a,c);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);b.sigBytes-=c}return new j.init(g,c)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new u.HMAC.init(a,
d)).finalize(b)}}});var u=k.algo={};return k}(Math);

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/rollups/sha1.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,
2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},
k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,
f)).finalize(b)}}});var s=p.algo={};return p}(Math);
(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^
k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/rollups/tripledes.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,l){var d={},n=d.lib={},p=function(){},s=n.Base={extend:function(a){p.prototype=this;var c=new p;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=n.WordArray=s.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=l?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,m=a.words,f=this.sigBytes;a=a.sigBytes;this.clamp();if(f%4)for(var t=0;t<a;t++)c[f+t>>>2]|=(m[t>>>2]>>>24-8*(t%4)&255)<<24-8*((f+t)%4);else if(65535<m.length)for(t=0;t<a;t+=4)c[f+t>>>2]=m[t>>>2];else c.push.apply(c,m);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=s.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],m=0;m<a;m+=4)c.push(4294967296*u.random()|0);return new q.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var m=[],f=0;f<a;f++){var t=c[f>>>2]>>>24-8*(f%4)&255;m.push((t>>>4).toString(16));m.push((t&15).toString(16))}return m.join("")},parse:function(a){for(var c=a.length,m=[],f=0;f<c;f+=2)m[f>>>3]|=parseInt(a.substr(f,
2),16)<<24-4*(f%8);return new q.init(m,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var m=[],f=0;f<a;f++)m.push(String.fromCharCode(c[f>>>2]>>>24-8*(f%4)&255));return m.join("")},parse:function(a){for(var c=a.length,m=[],f=0;f<c;f++)m[f>>>2]|=(a.charCodeAt(f)&255)<<24-8*(f%4);return new q.init(m,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
r=n.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,m=c.words,f=c.sigBytes,t=this.blockSize,b=f/(4*t),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*t;f=u.min(4*a,f);if(a){for(var e=0;e<a;e+=t)this._doProcessBlock(m,e);e=m.splice(0,a);c.sigBytes-=f}return new q.init(e,f)},clone:function(){var a=s.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});n.Hasher=r.extend({cfg:s.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){r.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,m){return(new a.init(m)).finalize(c)}},_createHmacHelper:function(a){return function(c,m){return(new e.HMAC.init(a,
m)).finalize(c)}}});var e=d.algo={};return d}(Math);
(function(){var u=CryptoJS,l=u.lib.WordArray;u.enc.Base64={stringify:function(d){var n=d.words,l=d.sigBytes,s=this._map;d.clamp();d=[];for(var q=0;q<l;q+=3)for(var w=(n[q>>>2]>>>24-8*(q%4)&255)<<16|(n[q+1>>>2]>>>24-8*((q+1)%4)&255)<<8|n[q+2>>>2]>>>24-8*((q+2)%4)&255,v=0;4>v&&q+0.75*v<l;v++)d.push(s.charAt(w>>>6*(3-v)&63));if(n=s.charAt(64))for(;d.length%4;)d.push(n);return d.join("")},parse:function(d){var n=d.length,p=this._map,s=p.charAt(64);s&&(s=d.indexOf(s),-1!=s&&(n=s));for(var s=[],q=0,w=0;w<
n;w++)if(w%4){var v=p.indexOf(d.charAt(w-1))<<2*(w%4),b=p.indexOf(d.charAt(w))>>>6-2*(w%4);s[q>>>2]|=(v|b)<<24-8*(q%4);q++}return l.create(s,q)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function l(b,e,a,c,m,f,t){b=b+(e&a|~e&c)+m+t;return(b<<f|b>>>32-f)+e}function d(b,e,a,c,m,f,t){b=b+(e&c|a&~c)+m+t;return(b<<f|b>>>32-f)+e}function n(b,e,a,c,m,f,t){b=b+(e^a^c)+m+t;return(b<<f|b>>>32-f)+e}function p(b,e,a,c,m,f,t){b=b+(a^(e|~c))+m+t;return(b<<f|b>>>32-f)+e}for(var s=CryptoJS,q=s.lib,w=q.WordArray,v=q.Hasher,q=s.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;q=q.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(r,e){for(var a=0;16>a;a++){var c=e+a,m=r[c];r[c]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360}var a=this._hash.words,c=r[e+0],m=r[e+1],f=r[e+2],t=r[e+3],y=r[e+4],q=r[e+5],s=r[e+6],w=r[e+7],v=r[e+8],u=r[e+9],x=r[e+10],z=r[e+11],A=r[e+12],B=r[e+13],C=r[e+14],D=r[e+15],g=a[0],h=a[1],j=a[2],k=a[3],g=l(g,h,j,k,c,7,b[0]),k=l(k,g,h,j,m,12,b[1]),j=l(j,k,g,h,f,17,b[2]),h=l(h,j,k,g,t,22,b[3]),g=l(g,h,j,k,y,7,b[4]),k=l(k,g,h,j,q,12,b[5]),j=l(j,k,g,h,s,17,b[6]),h=l(h,j,k,g,w,22,b[7]),
g=l(g,h,j,k,v,7,b[8]),k=l(k,g,h,j,u,12,b[9]),j=l(j,k,g,h,x,17,b[10]),h=l(h,j,k,g,z,22,b[11]),g=l(g,h,j,k,A,7,b[12]),k=l(k,g,h,j,B,12,b[13]),j=l(j,k,g,h,C,17,b[14]),h=l(h,j,k,g,D,22,b[15]),g=d(g,h,j,k,m,5,b[16]),k=d(k,g,h,j,s,9,b[17]),j=d(j,k,g,h,z,14,b[18]),h=d(h,j,k,g,c,20,b[19]),g=d(g,h,j,k,q,5,b[20]),k=d(k,g,h,j,x,9,b[21]),j=d(j,k,g,h,D,14,b[22]),h=d(h,j,k,g,y,20,b[23]),g=d(g,h,j,k,u,5,b[24]),k=d(k,g,h,j,C,9,b[25]),j=d(j,k,g,h,t,14,b[26]),h=d(h,j,k,g,v,20,b[27]),g=d(g,h,j,k,B,5,b[28]),k=d(k,g,
h,j,f,9,b[29]),j=d(j,k,g,h,w,14,b[30]),h=d(h,j,k,g,A,20,b[31]),g=n(g,h,j,k,q,4,b[32]),k=n(k,g,h,j,v,11,b[33]),j=n(j,k,g,h,z,16,b[34]),h=n(h,j,k,g,C,23,b[35]),g=n(g,h,j,k,m,4,b[36]),k=n(k,g,h,j,y,11,b[37]),j=n(j,k,g,h,w,16,b[38]),h=n(h,j,k,g,x,23,b[39]),g=n(g,h,j,k,B,4,b[40]),k=n(k,g,h,j,c,11,b[41]),j=n(j,k,g,h,t,16,b[42]),h=n(h,j,k,g,s,23,b[43]),g=n(g,h,j,k,u,4,b[44]),k=n(k,g,h,j,A,11,b[45]),j=n(j,k,g,h,D,16,b[46]),h=n(h,j,k,g,f,23,b[47]),g=p(g,h,j,k,c,6,b[48]),k=p(k,g,h,j,w,10,b[49]),j=p(j,k,g,h,
C,15,b[50]),h=p(h,j,k,g,q,21,b[51]),g=p(g,h,j,k,A,6,b[52]),k=p(k,g,h,j,t,10,b[53]),j=p(j,k,g,h,x,15,b[54]),h=p(h,j,k,g,m,21,b[55]),g=p(g,h,j,k,v,6,b[56]),k=p(k,g,h,j,D,10,b[57]),j=p(j,k,g,h,s,15,b[58]),h=p(h,j,k,g,B,21,b[59]),g=p(g,h,j,k,y,6,b[60]),k=p(k,g,h,j,z,10,b[61]),j=p(j,k,g,h,f,15,b[62]),h=p(h,j,k,g,u,21,b[63]);a[0]=a[0]+g|0;a[1]=a[1]+h|0;a[2]=a[2]+j|0;a[3]=a[3]+k|0},_doFinalize:function(){var b=this._data,e=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;e[c>>>5]|=128<<24-c%32;var m=u.floor(a/
4294967296);e[(c+64>>>9<<4)+15]=(m<<8|m>>>24)&16711935|(m<<24|m>>>8)&4278255360;e[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(e.length+1);this._process();b=this._hash;e=b.words;for(a=0;4>a;a++)c=e[a],e[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});s.MD5=v._createHelper(q);s.HmacMD5=v._createHmacHelper(q)})(Math);
(function(){var u=CryptoJS,l=u.lib,d=l.Base,n=l.WordArray,l=u.algo,p=l.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:l.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,l){for(var p=this.cfg,v=p.hasher.create(),b=n.create(),u=b.words,r=p.keySize,p=p.iterations;u.length<r;){e&&v.update(e);var e=v.update(d).finalize(l);v.reset();for(var a=1;a<p;a++)e=v.finalize(e),v.reset();b.concat(e)}b.sigBytes=4*r;return b}});u.EvpKDF=function(d,l,n){return p.create(n).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var l=CryptoJS,d=l.lib,n=d.Base,p=d.WordArray,s=d.BufferedBlockAlgorithm,q=l.enc.Base64,w=l.algo.EvpKDF,v=d.Cipher=s.extend({cfg:n.extend(),createEncryptor:function(m,a){return this.create(this._ENC_XFORM_MODE,m,a)},createDecryptor:function(m,a){return this.create(this._DEC_XFORM_MODE,m,a)},init:function(m,a,b){this.cfg=this.cfg.extend(b);this._xformMode=m;this._key=a;this.reset()},reset:function(){s.reset.call(this);this._doReset()},process:function(a){this._append(a);return this._process()},
finalize:function(a){a&&this._append(a);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(m){return{encrypt:function(f,b,e){return("string"==typeof b?c:a).encrypt(m,f,b,e)},decrypt:function(f,b,e){return("string"==typeof b?c:a).decrypt(m,f,b,e)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=l.mode={},x=function(a,f,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var e=0;e<b;e++)a[f+e]^=
c[e]},r=(d.BlockCipherMode=n.extend({createEncryptor:function(a,f){return this.Encryptor.create(a,f)},createDecryptor:function(a,f){return this.Decryptor.create(a,f)},init:function(a,f){this._cipher=a;this._iv=f}})).extend();r.Encryptor=r.extend({processBlock:function(a,f){var b=this._cipher,c=b.blockSize;x.call(this,a,f,c);b.encryptBlock(a,f);this._prevBlock=a.slice(f,f+c)}});r.Decryptor=r.extend({processBlock:function(a,b){var c=this._cipher,e=c.blockSize,d=a.slice(b,b+e);c.decryptBlock(a,b);x.call(this,
a,b,e);this._prevBlock=d}});b=b.CBC=r;r=(l.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,e=c<<24|c<<16|c<<8|c,d=[],l=0;l<c;l+=4)d.push(e);c=p.create(d,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:r}),reset:function(){v.reset.call(this);var a=this.cfg,c=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var b=a.createEncryptor;else b=a.createDecryptor,this._minBufferSize=1;this._mode=b.call(a,
this,c&&c.words)},_doProcessBlock:function(a,c){this._mode.processBlock(a,c)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var c=this._process(!0)}else c=this._process(!0),a.unpad(c);return c},blockSize:4});var e=d.CipherParams=n.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(l.format={}).OpenSSL={stringify:function(a){var c=a.ciphertext;a=a.salt;return(a?p.create([1398893684,
1701076831]).concat(a).concat(c):c).toString(q)},parse:function(a){a=q.parse(a);var c=a.words;if(1398893684==c[0]&&1701076831==c[1]){var b=p.create(c.slice(2,4));c.splice(0,4);a.sigBytes-=16}return e.create({ciphertext:a,salt:b})}},a=d.SerializableCipher=n.extend({cfg:n.extend({format:b}),encrypt:function(a,c,b,d){d=this.cfg.extend(d);var l=a.createEncryptor(b,d);c=l.finalize(c);l=l.cfg;return e.create({ciphertext:c,key:b,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,c,b,e){e=this.cfg.extend(e);c=this._parse(c,e.format);return a.createDecryptor(b,e).finalize(c.ciphertext)},_parse:function(a,c){return"string"==typeof a?c.parse(a,this):a}}),l=(l.kdf={}).OpenSSL={execute:function(a,c,b,d){d||(d=p.random(8));a=w.create({keySize:c+b}).compute(a,d);b=p.create(a.words.slice(c),4*b);a.sigBytes=4*c;return e.create({key:a,iv:b,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:l}),encrypt:function(c,b,e,d){d=this.cfg.extend(d);e=d.kdf.execute(e,
c.keySize,c.ivSize);d.iv=e.iv;c=a.encrypt.call(this,c,b,e.key,d);c.mixIn(e);return c},decrypt:function(c,b,e,d){d=this.cfg.extend(d);b=this._parse(b,d.format);e=d.kdf.execute(e,c.keySize,c.ivSize,b.salt);d.iv=e.iv;return a.decrypt.call(this,c,b,e.key,d)}})}();
(function(){function u(b,a){var c=(this._lBlock>>>b^this._rBlock)&a;this._rBlock^=c;this._lBlock^=c<<b}function l(b,a){var c=(this._rBlock>>>b^this._lBlock)&a;this._lBlock^=c;this._rBlock^=c<<b}var d=CryptoJS,n=d.lib,p=n.WordArray,n=n.BlockCipher,s=d.algo,q=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],w=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,
55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],v=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],b=[{"0":8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,
2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,
1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{"0":1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,
75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,
276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{"0":260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,
14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,
17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{"0":2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,
98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,
1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{"0":128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,
10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,
83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{"0":268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,
2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{"0":1048576,
16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,
496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{"0":134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,
2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,
2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],x=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],r=s.DES=n.extend({_doReset:function(){for(var b=this._key.words,a=[],c=0;56>c;c++){var d=q[c]-1;a[c]=b[d>>>5]>>>31-d%32&1}b=this._subKeys=[];for(d=0;16>d;d++){for(var f=b[d]=[],l=v[d],c=0;24>c;c++)f[c/6|0]|=a[(w[c]-1+l)%28]<<31-c%6,f[4+(c/6|0)]|=a[28+(w[c+24]-1+l)%28]<<31-c%6;f[0]=f[0]<<1|f[0]>>>31;for(c=1;7>c;c++)f[c]>>>=
4*(c-1)+3;f[7]=f[7]<<5|f[7]>>>27}a=this._invSubKeys=[];for(c=0;16>c;c++)a[c]=b[15-c]},encryptBlock:function(b,a){this._doCryptBlock(b,a,this._subKeys)},decryptBlock:function(b,a){this._doCryptBlock(b,a,this._invSubKeys)},_doCryptBlock:function(e,a,c){this._lBlock=e[a];this._rBlock=e[a+1];u.call(this,4,252645135);u.call(this,16,65535);l.call(this,2,858993459);l.call(this,8,16711935);u.call(this,1,1431655765);for(var d=0;16>d;d++){for(var f=c[d],n=this._lBlock,p=this._rBlock,q=0,r=0;8>r;r++)q|=b[r][((p^
f[r])&x[r])>>>0];this._lBlock=p;this._rBlock=n^q}c=this._lBlock;this._lBlock=this._rBlock;this._rBlock=c;u.call(this,1,1431655765);l.call(this,8,16711935);l.call(this,2,858993459);u.call(this,16,65535);u.call(this,4,252645135);e[a]=this._lBlock;e[a+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});d.DES=n._createHelper(r);s=s.TripleDES=n.extend({_doReset:function(){var b=this._key.words;this._des1=r.createEncryptor(p.create(b.slice(0,2)));this._des2=r.createEncryptor(p.create(b.slice(2,4)));this._des3=
r.createEncryptor(p.create(b.slice(4,6)))},encryptBlock:function(b,a){this._des1.encryptBlock(b,a);this._des2.decryptBlock(b,a);this._des3.encryptBlock(b,a)},decryptBlock:function(b,a){this._des3.decryptBlock(b,a);this._des2.encryptBlock(b,a);this._des1.decryptBlock(b,a)},keySize:6,ivSize:2,blockSize:2});d.TripleDES=n._createHelper(s)})();

// document.write("<script language=javascript src=\"libs/CryptoJS v3.1.2/components/mode-ecb.js\" charset=\"utf-8\"></script>");
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * Electronic Codebook block mode.
 */
CryptoJS.mode.ECB = (function () {
  var ECB = CryptoJS.lib.BlockCipherMode.extend();

  ECB.Encryptor = ECB.extend({
      processBlock: function (words, offset) {
          this._cipher.encryptBlock(words, offset);
      }
  });

  ECB.Decryptor = ECB.extend({
      processBlock: function (words, offset) {
          this._cipher.decryptBlock(words, offset);
      }
  });

  return ECB;
}());

// document.write("<script language=javascript src=\"libs/anysignCommentUI.js\" charset=\"utf-8\"></script>");
/**
 * Created by lili on 16-11-22.
 */

function anysignCommentUI() {
	var commentObjTmp;
	var inner_string;
	var commentInner;
	var dlg;

	this.onload_commentSignCanvas = function(obj,identifyCallBack) {
		commentObjTmp = obj;
		inner_string = commentObjTmp.commitment;
		commentInner = inner_string.replace(/(.)(?=[^$])/g, "$1,").split(",");

		window.onmousewheel = document.onmousewheel = function() { return false; };
		document.documentElement.style.overflow = 'hidden';

		dlg = document.getElementById("comment_dialog");
		dlg.style.width = getWindowWidth();
		dlg.style.height = getWindowHeight();
		dlg.style.display = "block";

		var title = document.getElementById("comment_title");
		title.style.fontSize = "20px";

		loadView();

		new anysignCommentCore(inner_string, line_count, commentObjTmp,identifyCallBack);

	}

	function loadView() {
		var canvas = document.getElementById("comment_canvas");
		var ctx = canvas.getContext('2d');

		var tmp_dlg = document.getElementById("comment_dialog");
		tmp_dlg.style.width = getWindowWidth();
		tmp_dlg.style.height = getWindowHeight();

		if(window.orientation == 0 || window.orientation == 180) { //竖屏
			document.getElementById("comment_title").style.width = getWindowWidth() + "px";

			document.getElementById("signImage").style.cssFloat = "none";
			document.getElementById("signImage").style.clear = "both";
			document.getElementById("signImage").style.width = getWindowWidth() + "px";
			document.getElementById("signImage").style.height = getWindowHeight() / 6 + "px";

			document.getElementById("tmpcanvascss").style.cssFloat = "none";
			document.getElementById("tmpcanvascss").style.clear = "both";
			document.getElementById("tmpcanvascss").style.width = getWindowWidth() + "px";
			document.getElementById("tmpcanvascss").style.height = getWindowHeight() / 2 + "px";

			var text = document.getElementById("signTitle");
			text.style.width = getWindowWidth();
			text.style.height = getWindowHeight() / 2;
			text.style.fontSize = getWindowWidth() * 0.9 / 3 + "px";
			text.style.color = "#E5E5E5";
			text.style.textAlign = "center";
			text.style.cssText += 'text-align:center';
			text.style.lineHeight = getWindowHeight() / 2 + "px";
			text.style.position = "absolute";
			text.style.cssFloat = "right";
			text.style.clear = "none";

			document.getElementById("comment_canvas").style.cssFloat = "right";
			document.getElementById("comment_canvas").style.clear = "none";
			document.getElementById("comment_canvas").width = getWindowWidth();
			document.getElementById("comment_canvas").height = getWindowHeight() / 2;
			document.getElementById("comment_canvas").style.backgroundImage = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAARJCAYAAABghL8TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTczOENGOTM2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTczOENGOTQ2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNzM4Q0Y5MTZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNzM4Q0Y5MjZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvjPrHsAALOESURBVHja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)";
			document.getElementById("comment_canvas").style.backgroundRepeat = 'no-repeat';
			document.getElementById("comment_canvas").style.backgroundSize = getWindowWidth() + "px " + getWindowHeight() * 0.5 + "px";
			document.getElementById("comment_canvas").style.position = "absolute";
			//			document.getElementById("comment_canvas").style.zIndex = 55555;

			var signImg_width = getWindowWidth() * 0.9;

		} else {
			document.getElementById("comment_title").style.width = getWindowWidth() * 0.9 / 2 + "px";
			document.getElementById("comment_title").innerHTML = commentObjTmp.commitment;

			document.getElementById("leftView").style.cssFloat = "left";
			document.getElementById("leftView").style.clear = "none";

			document.getElementById("signImage").style.width = getWindowWidth() * 0.9 / 2 + "px";
			document.getElementById("signImage").style.height = (getWindowHeight() * 0.75 - $("#comment_title").height()) +"px"; // getWindowHeight() * 0.6 + "px";
			document.getElementById("signImage").focus();

			document.getElementById("tmpcanvascss").style.cssFloat = "right";
			document.getElementById("tmpcanvascss").style.clear = "none";
			document.getElementById("tmpcanvascss").style.width = getWindowWidth() / 2 + "px";
			document.getElementById("tmpcanvascss").style.height = getWindowHeight() * 0.8 + "px";

			var text = document.getElementById("signTitle");
			text.style.width = getWindowWidth() / 2 + "px";
			text.style.height = getWindowHeight() * 0.8 + "px";
			text.style.fontSize = getWindowWidth() * 0.9 / 4 + "px";
			text.style.color = "#E5E5E5";
			text.style.textAlign = "center";
			text.style.cssText += 'text-align:center';
			text.style.lineHeight = getWindowHeight() * 0.8 + "px";
			text.style.position = "absolute";
			text.style.cssFloat = "right";
			text.style.clear = "none";

			document.getElementById("comment_canvas").style.cssFloat = "right";
			document.getElementById("comment_canvas").style.clear = "none";
			document.getElementById("comment_canvas").width = getWindowWidth() / 2;
			document.getElementById("comment_canvas").height = getWindowHeight() * 0.8;
			document.getElementById("comment_canvas").style.backgroundImage = "url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAABGUAAARJCAYAAABghL8TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTczOENGOTM2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTczOENGOTQ2RjcyMTFFNzg4MzFCNEZERTA1MDgzMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNzM4Q0Y5MTZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNzM4Q0Y5MjZGNzIxMUU3ODgzMUI0RkRFMDUwODMxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvjPrHsAALOESURBVHja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)";
			document.getElementById("comment_canvas").style.backgroundRepeat = 'no-repeat';
			document.getElementById("comment_canvas").style.backgroundSize = getWindowWidth() * 0.5 + "px " + getWindowHeight() * 0.8 + "px";
			document.getElementById("comment_canvas").style.position = "absolute";

			document.getElementById("tmpcanvascss").appendChild(document.getElementById("comment_canvas"));

			var signImg_width = getWindowWidth() * 0.95 / 2;

		}

		line_count = signImg_width / commentObjTmp.mass_word_width - 1;

	}

	window.addEventListener("orientationchange", function() {
		loadView();
	});

	window.addEventListener('resize', function() {
		loadView();
	});

}
// document.write("<script language=javascript src=\"libs/anysign_all.js\" charset=\"utf-8\"></script>");
function anysignCommentCore(t, e, n, i) {
	function r() {
		if(h) {
			var t = document.createElement("canvas"),
				e = t.getContext("2d"),
				i = window.devicePixelRatio ? window.devicePixelRatio : 1;
			t.width = h.width / i, t.height = h.height / i;
			var r = 1;
			n.mass_word_width / n.mass_word_height <= t.width / t.height ? n.mass_word_width <= t.width && (r = n.mass_word_width / t.width) : n.singleHeight <= t.height && (r = n.mass_word_height / t.height), t.width *= r, t.height *= r, O = t.width, x = t.height, e.scale(1 / i * r, 1 / i * r);
			var o = document.createElement("canvas");
			return o.width = h.width, o.height = h.height, o.getContext("2d").putImageData(h, 0, 0), e.drawImage(o, 0, 0), t.toDataURL()
		}
		return null
	}

	function o() {
		if(!m)
			if(P <= 0) alert("已移除完，请重新进行签名！"), N = 0;
			else {
				var i = document.getElementById("img" + P);
				document.getElementById("signImage").removeChild(i), P--, H--;
				var r = document.getElementById("signTitle");
				n.isShowBgText && (r.innerHTML = U[P]), 0 == P ? (N = 0, H = 0) : H - 1 < 0 ? (H = e, k > 0 && k--, N = 0) : N = H * n.mass_word_width;
				var o = document.getElementById("comment_title");
				o.innerHTML = t, o.style.color = "black", o.innerHTML = t.substring(0, P) + U[P].replace(U[P], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(P + 1, U.length)
			}
	}

	function a() {
		document.documentElement.style.overflow = "auto", signResCallback && signResCallback(n.cid, null, null, 0), l()
	}

	function s() {
		m || (P == U.length ? (c(), signResCallback && signResCallback(n.cid, q[0].substring(22, q[0].length), q[0].substring(22, q[0].length), E, A, g, d), l()) : custom_alert("请完成签名", "确认"))
	}

	function l() {
		document.getElementById("comment_dialog").style.display = "none", y = 9999, v = 9999, w = 0, T = 0, document.body.parentNode.style.overflow = "scroll";
		document.getElementById("comment_sign");
		var t = document.getElementById("comment_title");
		t.innerHTML = "", t.style.color = "black", document.getElementById("signTitle").innerHTML = "";
		for(var e = 0; e < M.length; e++) F.removeChild(M[e]);
		n = null
	}

	function c() {
		function e(t) {
			t < l ? (a >= n.mass_words_in_single_line && (s += n.mass_word_height, a = 0), r.drawImage(M[t], n.mass_word_width * a, s, n.mass_word_width, n.mass_word_height), a++, e(t + 1)) : q.push(i.toDataURL("image/png", 1))
		}
		var i = document.createElement("canvas"),
			r = i.getContext("2d"),
			o = n.mass_words_in_single_line;
		g = n.mass_word_width * o, d = n.mass_word_height * (t.length / n.mass_words_in_single_line + 1), i.width = g, i.height = d, r.rect(0, 0, i.width, i.height), r.fillStyle = "#fff", r.fill();
		var a = 0,
			s = 0,
			l = U.length;
		e(0)
	}
	var u, h, g, d, p = window.innerWidth >= 480 ? 15 : 10,
		f = !1,
		m = !1,
		y = 9999,
		v = 9999,
		w = 0,
		T = 0,
		C = 0,
		b = 0,
		_ = [],
		I = [],
		S = [],
		D = 0,
		E = "",
		A = 0,
		B = 0,
		R = 0,
		O = 0,
		x = 0,
		P = 0,
		M = new Array,
		L = null,
		N = 0,
		k = 0,
		H = 0,
		W = !1,
		U = t.replace(/(.)(?=[^$])/g, "$1,").split(","),
		Y = document.getElementById("comment_canvas"),
		X = document.getElementById("comment_title"),
		F = document.getElementById("signImage"),
		j = document.getElementById("comment_ok"),
		V = document.getElementById("comment_back"),
		J = document.getElementById("comment_cancel");
	u = Y.getContext("2d");
	var K = document.getElementById("signTitle");
	n.isShowBgText && (K.innerHTML = U[P]), X.innerHTML = U[0].replace(U[0], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(1, U.length);
	window.devicePixelRatio && window.devicePixelRatio;
	u.strokeStyle = n.penColor, u.lineWidth = p, u.lineCap = "round", u.lineJoin = "round", u.shadowBlur = 5, j.onclick = function() {
		s()
	}, V.onclick = function() {
		o()
	}, J.onclick = function() {
		a()
	}, document.body.onselectstart = document.body.oncontextmenu = function() {
		return !1
	}, "ontouchstart" in document.documentElement ? (Y.ontouchstart = function(t) {
		null != L && clearInterval(L), f = !0, m = !0
	}, Y.ontouchmove = function(t) {
		if(f) {
			var e = JQuery_Capable.offset(t.target);
			void 0 !== t.targetTouches ? (C = Math.floor(t.targetTouches[0].pageX - e.left), b = Math.floor(t.targetTouches[0].pageY - e.top)) : (C = Math.floor(t.pageX - e.left), b = Math.floor(t.pageY - e.top));
			var n = t.timeStamp;
			0 !== A || isNaN(n) || (D = n), C > 0 && b <= Y.height && (isNaN(n) ? E += C + "," + b + "," + p + ",0\n" : E += C + "," + b + "," + p + "," + (n - D) + "\n", A += 1, C > w && (w = C), C < y && (y = C), b > T && (T = b), b < v && (v = b), _.push({
				x: C,
				y: b
			}), G(), I.push({
				x: C,
				y: b
			}), C > 0 && b > 0 && S.push(C, b), B = C, R = b), preventDefault(t)
		}
	}, Y.ontouchend = function(e) {
		if(f) {
			var o = e.timeStamp;
			isNaN(o) ? E += "0,0,-1,0\n" : E += "0,0,-1," + (o - D) + "\n", A += 1, S.push("-1", "0");
			var a = document.getElementById("comment_canvas");
			a.getContext("2d").drawImage(Y, 0, 0);
			var s = document.getElementById("signTitle");
			P >= U.length ? (alert("已签署完毕！"), s.innerHTML = "", m = !1, u.clearRect(0, 0, Y.width, Y.height)) : W && (W = !1, L = setInterval(function() {
				if(S.push("-1", "-1"), n.isdistinguish && !checkText(U[P])) {
					showProgress("正在识别，请稍候。。。"), new OCRObj(n.ocrCapture).recognition(S, U[P], function(e, o) {
						if(closeWindow(), 0 == e) {
							if(o) {
								++P == U.length ? (s.innerHTML = "", X.innerHTML = "已签署完毕！", X.style.color = "Red", clearInterval(L)) : (n.isShowBgText && (s.innerHTML = U[P]), X.innerHTML = t, X.innerHTML = t.substring(0, P) + U[P].replace(U[P], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(P + 1, U.length));
								var l = document.createElement("img");
								if(l.id = "img" + P, l.width = n.mass_word_width, l.height = n.mass_word_height, checkText(U[P - 1])) l.src = a.toDataURL("image/png");
								else {
									var c, g = w - y,
										d = T - v,
										p = (w + y) / 2,
										f = (T + v) / 2;
									c = g < 20 && d < 20 ? n.mass_word_width : g > d ? g / 2 : d / 2, h = Y.getContext("2d").getImageData(p - c - 10, f - c - 10, 2 * (c + 10), 2 * (c + 10));
									var m = r();
									l.src = m
								}
								M[P - 1] = l, F.appendChild(l), F.scrollTop = F.scrollHeight, u.clearRect(0, 0, Y.width, Y.height), y = 9999, v = 9999, w = 0, T = 0, S = [], null != L && clearInterval(L)
							}
						} else u.clearRect(0, 0, Y.width, Y.height), y = 9999, v = 9999, w = 0, T = 0, S = [], clearInterval(L);
						null == i ? console.log("the identify callback is not definition") : "请求超时" != e && i(e)
					}), m = !1, clearInterval(L)
				} else {
					S = [], ++P == U.length ? (s.innerHTML = "", X.innerHTML = "已签署完毕！", X.style.color = "Red", clearInterval(L)) : (n.isShowBgText && (s.innerHTML = U[P]), X.innerHTML = t, X.innerHTML = t.substring(0, P) + U[P].replace(U[P], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(P + 1, U.length));
					var e = document.createElement("img");
					if(e.id = "img" + P, e.width = n.mass_word_width, e.height = n.mass_word_height, checkText(U[P - 1])) e.src = a.toDataURL("image/png");
					else {
						var o, l = w - y,
							c = T - v,
							g = (w + y) / 2,
							d = (T + v) / 2;
						o = l < 20 && c < 20 ? n.mass_word_width : l > c ? l / 2 : c / 2, h = Y.getContext("2d").getImageData(g - o - 10, d - o - 10, 2 * (o + 10), 2 * (o + 10));
						var p = r();
						e.src = p
					}
					M[P - 1] = e, F.appendChild(e), F.scrollTop = F.scrollHeight, u.clearRect(0, 0, Y.width, Y.height), y = 9999, v = 9999, w = 0, T = 0, p = null, m = !1, clearInterval(L)
				}
			}, 1e3))
		}
		f = !1, _ = [], I = []
	}, Y.ontouchcancel = Y.ontouchend) : (Y.onmousedown = function(t) {
		null != L && clearInterval(L), f = !0, m = !0
	}, Y.onmousemove = function(t) {
		if(f) {
			var e = JQuery_Capable.offset(t.target),
				n = document.body.scrollTop | document.documentElement.scrollTop,
				i = document.body.scrollLeft | document.documentElement.scrollLeft;
			void 0 !== t.targetTouches ? (C = Math.floor(t.targetTouches[0].clientX - e.left), b = Math.floor(t.targetTouches[0].clientY - e.top)) : (C = Math.floor(t.clientX - e.left), b = Math.floor(t.clientY - e.top));
			var r = t.timeStamp;
			0 !== A || isNaN(r) || (D = r), C > 0 && (isNaN(r) ? E += C + "," + b + "," + p + ",0\n" : E += C + "," + b + "," + p + "," + (r - D) + "\n", A += 1, b += n, (C += i) > w && (w = C), C < y && (y = C), b > T && (T = b), b < v && (v = b), _.push({
				x: C,
				y: b
			}), G(), I.push({
				x: C,
				y: b
			}), C > 0 && b > 0 && S.push(C, b), B = C, R = b), preventDefault(t)
		}
	}, Y.onmouseup = function(e) {
		if(f) {
			f = !1;
			var o = JQuery_Capable.offset(e.target);
			void 0 !== e.targetTouches ? (C = Math.floor(e.targetTouches[0].clientX - o.left), b = Math.floor(e.targetTouches[0].clientY - o.top)) : (C = Math.floor(e.clientX - o.left), b = Math.floor(e.clientY - o.top));
			var a = e.timeStamp;
			isNaN(a) ? E += "0,0,-1,0\n" : E += "0,0,-1," + (a - D) + "\n", A += 1, S.push("-1", "0");
			var s = document.getElementById("comment_canvas");
			s.getContext("2d").drawImage(Y, 0, 0);
			var l = document.getElementById("signTitle");
			P >= U.length ? (alert("已签署完毕！"), l.innerHTML = "", u.clearRect(0, 0, Y.width, Y.height), m = !1) : I.length > 10 && (L = setInterval(function() {
				if(S.push("-1", "-1"), n.isdistinguish && !checkText(U[P])) {
					showProgress("正在识别，请稍候。。。"), new OCRObj(n.ocrCapture).recognition(S, U[P], function(e, o) {
						if(closeWindow(), 0 == e) {
							if(o) {
								++P == U.length ? (l.innerHTML = "", X.innerHTML = "已签署完毕！", X.style.color = "Red", clearInterval(L)) : (n.isShowBgText && (l.innerHTML = U[P]), X.innerHTML = t, X.innerHTML = t.substring(0, P) + U[P].replace(U[P], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(P + 1, U.length));
								var a = document.createElement("img");
								if(a.id = "img" + P, a.width = n.mass_word_width, a.height = n.mass_word_height, checkText(U[P - 1])) a.src = s.toDataURL("image/png");
								else {
									var c, g = w - y,
										d = T - v,
										p = (w + y) / 2,
										f = (T + v) / 2;
									c = g < 20 && d < 20 ? n.mass_word_width : g > d ? g / 2 : d / 2, h = Y.getContext("2d").getImageData(p - c - 10, f - c - 10, 2 * (c + 10), 2 * (c + 10));
									var m = r();
									a.src = m
								}
								M[P - 1] = a, F.appendChild(a), F.scrollTop = F.scrollHeight, u.clearRect(0, 0, Y.width, Y.height), y = 9999, v = 9999, w = 0, T = 0, S = [], null != L && clearInterval(L)
							}
						} else u.clearRect(0, 0, Y.width, Y.height), y = 9999, v = 9999, w = 0, T = 0, S = [], clearInterval(L);
						null == i ? console.log("the identify callback is not definition") : "请求超时" != e && i(e)
					}), m = !1, clearInterval(L)
				} else {
					S = [], ++P == U.length ? (l.innerHTML = "", X.innerHTML = "已签署完毕！", X.style.color = "Red", clearInterval(L)) : (n.isShowBgText && (l.innerHTML = U[P]), X.innerHTML = t, X.innerHTML = t.substring(0, P) + U[P].replace(U[P], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(P + 1, U.length));
					var e = document.createElement("img");
					if(e.id = "img" + P, e.width = n.mass_word_width, e.height = n.mass_word_height, checkText(U[P - 1])) e.src = s.toDataURL("image/png");
					else {
						var o, a = w - y,
							c = T - v,
							g = (w + y) / 2,
							d = (T + v) / 2;
						o = a < 20 && c < 20 ? n.mass_word_width : a > c ? a / 2 : c / 2, h = Y.getContext("2d").getImageData(g - o - 10, d - o - 10, 2 * (o + 10), 2 * (o + 10));
						var p = r();
						e.src = p
					}
					M[P - 1] = e, F.appendChild(e), F.scrollTop = F.scrollHeight, u.clearRect(0, 0, Y.width, Y.height), y = 9999, v = 9999, w = 0, T = 0, p = null, m = !1, clearInterval(L)
				}
			}, 1e3)), f = !1, _ = [], I = []
		}
	}, Y.onmouseout = Y.onmouseup);
	var G = function() {
			if(_.length < 3) {
				var t = _[0];
				return u.beginPath(), u.strokeStyle = n.penColor, u.fillStyle = n.penColor, u.arc(t.x, t.y, u.lineWidth / 2, 0, 2 * Math.PI, !0), u.fill(), u.closePath(), void(W = !0)
			}
			u.clearRect(0, 0, u.width, u.height), u.beginPath(), u.strokeStyle = n.penColor, u.fillStyle = n.penColor, u.moveTo(_[0].x, _[0].y);
			for(var e = 1; e < _.length - 2; e++) {
				var i = (_[e].x + _[e + 1].x) / 2,
					r = (_[e].y + _[e + 1].y) / 2;
				u.quadraticCurveTo(_[e].x, _[e].y, i, r)
			}
			u.stroke(), W = !0
		},
		q = [];
	window.addEventListener("resize", function() {
		null != L && clearInterval(L);
		var e = document.getElementById("signTitle");
		X.innerHTML = t.substring(0, P) + U[P].replace(U[P], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(P + 1, U.length), n.isShowBgText && (P >= U.length ? e.innerHTML = "" : e.innerHTML = U[P]), u.strokeStyle = n.penColor, u.lineWidth = p, u.lineCap = "round", u.lineJoin = "round", u.shadowBlur = 5
	}), window.addEventListener("orientationchange", function() {
		null != L && clearInterval(L);
		document.getElementById("signTitle");
		X.innerHTML = t.substring(0, P) + U[P].replace(U[P], '<font color="' + n.currentEditBarTextColor + '">$&</font>') + t.substring(P + 1, U.length), u.strokeStyle = n.penColor, u.lineWidth = p, u.lineCap = "round", u.lineJoin = "round", u.shadowBlur = 5
	})
}

function anysignWebImpl() {
	function t() {
		p = !1, s = null, h = null, f = !1, m = !1, y = [], v = [], w = [], C = []
	}

	function e(t) {
		for(var e in T) {
			var n = T[e];
			if(n && n.cid == t) return n
		}
		return null
	}

	function n(t, e, n, i, r, o) {
		t.Points || (t.Points = new PlainData), t.Points.P10Data || (t.Points.P10Data = new P10Data), t.Points.CertOID || (t.Points.CertOID = new CertOID), t.Points.CertOID.BioFeature || (t.Points.CertOID.BioFeature = new BioFeature), t.Points.CertOID.IDNumber = t.Signer.IDNumber, t.Points.CertOID.IDType = t.Signer.IDType, t.Points.CertOID.BioFeature.Script = new Script, t.Points.CertOID.ClientOS = new ClientOS;
		var a = t.Points.CertOID.BioFeature.Script;
		a.Color = parseInt("0x" + e.substr(1)) + "", a.Data = anysign.zip.compressToB64(anysign.charset.strToUint8ArrayAscII(n)), a.Count = i + "", a.Device = new Device, a.Device.Width = 99999, a.Device.Height = 99999, a.RefWidth = r, a.RefHeight = o
	}

	function i(t) {
		return d.FORMDATA_XML <= t && t <= d.FORMDATA_PRESERVED
	}

	function r(t) {
		return t >= 20 && t <= 29 || t >= 200 && t <= 299
	}

	function o(t) {
		return t >= 30 && t <= 39 || t >= 300 && t <= 399
	}

	function a(t) {
		return !!(t >= 50 && t <= 59 || t >= 500 && t <= 599 || i(t))
	}
	var s, l, c, u, h, g, d = {
			FORMDATA_XML: 10,
			FORMDATA_HTML: 11,
			FORMDATA_PDF: 12,
			FORMDATA_JSON: 13,
			FORMDATA_PRESERVED: 19
		},
		p = !1,
		f = !1,
		m = !1,
		y = [],
		v = [],
		w = [],
		T = [],
		C = [];
	this._initAnySignApi = function(e, n) {
		return !(!e || !n) && (t(), s = e, h = n, !0)
	}, this._addDataObj = function(t, e) {
		if(!f && a(t)) {
			e.cid = t, T[t] = e;
			var n = new DataObj;
			return n.Format = e.format, n.Name = e.name, n.Cid = t, w[t] = n, !0
		}
		return !1
	}, this._addSignatureObj = function(t, e) {
		if(!f && e && r(t)) {
			e.cid = t, v[t] = e;
			var n = new SignatureObj;
			return n.Cid = t, n.Signer = e.signer, n.SignRule = e.signRule, n.IsTSS = e.isTSS, n.TimeTag = e.timeTag, y[t] = n, !0
		}
		return !1
	}, this._addCommentObj = function(t, e) {
		if(!f && e && o(t)) {
			e.cid = t, v[t] = e;
			var n = new MassSignObj;
			return n.Cid = t, n.Signer = e.signer, n.SignRule = e.signRule, n.IsTSS = e.isTSS, y[t] = n, !0
		}
		return !1
	}, this._addEvidenceHash = function(t, e, n, i, r) {
		var o = y[t];
		if(o.Points || (o.Points = new PlainData), o.Points.P10Data || (o.Points.P10Data = new P10Data), o.Points.CertOID || (o.Points.CertOID = new CertOID), o.Points.CertOID.BioFeature || (o.Points.CertOID.BioFeature = new BioFeature), o.Points.CertOID.BioFeature.Script) return !1;
		if(i == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK || i == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT) {
			var a = new PhotoEvidence;
			return a.Format = n, a.Hash = e, a.BioType = i, o.Points.CertOID.BioFeature.PhotoArray[r] = a, !0
		}
		if(i == BioType.SOUND_SIGNER_RETELL || i == BioType.SOUND_SIGNER_OTHER) {
			var s = new SoundEvidence;
			return s.Format = n, s.Hash = e, s.BioType = i, o.Points.CertOID.BioFeature.SoundArray[r] = s, !0
		}
		return !1
	}, this._addEvidence = function(t, e, n, i, r) {
		var o = y[t];
		if(o.Points || (o.Points = new PlainData), o.Points.P10Data || (o.Points.P10Data = new P10Data), o.Points.CertOID || (o.Points.CertOID = new CertOID), o.Points.CertOID.BioFeature || (o.Points.CertOID.BioFeature = new BioFeature), o.Points.CertOID.BioFeature.Script) return !1;
		if(i == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK || i == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT) {
			var a = new PhotoEvidence;
			a.Format = n;
			var s = sha1Digest(e);
			return a.Hash = "BS64:" + s.toString().toUpperCase(), a.BioType = i, o.Points.CertOID.BioFeature.PhotoArray[r] = a, !0
		}
		if(i == BioType.SOUND_SIGNER_RETELL || i == BioType.SOUND_SIGNER_OTHER) {
			var l = new SoundEvidence;
			l.Format = n;
			var c = sha1Digest(e);
			return l.Hash = "BS64:" + c.toString().toUpperCase(), l.BioType = i, o.Points.CertOID.BioFeature.SoundArray[r] = l, !0
		}
		return !1
	}, this._addEvidenceV2 = function(t, e, n, i) {
		var r = y[t];
		if(r.Points || (r.Points = new PlainData), r.Points.P10Data || (r.Points.P10Data = new P10Data), r.Points.CertOID || (r.Points.CertOID = new CertOID), r.Points.CertOID.BioFeature || (r.Points.CertOID.BioFeature = new BioFeature), r.Points.CertOID.BioFeature.Script) return !1;
		if(n == BioType.PHOTO_SIGNER_IDENTITY_CARD_BACK || n == BioType.PHOTO_SIGNER_IDENTITY_CARD_FRONT) {
			var o = new PhotoEvidence;
			o.Format = DataFormat.IMAGE_JPEG;
			var a = sha1Digest(e);
			return o.Hash = "BS64:" + a.toString().toUpperCase(), o.BioType = n, r.Points.CertOID.BioFeature.PhotoArray[i] = o, !0
		}
		if(n == BioType.SOUND_SIGNER_RETELL || n == BioType.SOUND_SIGNER_OTHER) {
			var s = new SoundEvidence;
			s.Format = DataFormat.MEDIA_3GP;
			var l = sha1Digest(e);
			return s.Hash = "BS64:" + l.toString().toUpperCase(), s.BioType = n, r.Points.CertOID.BioFeature.SoundArray[i] = s, !0
		}
		return !1
	}, this._addChachetObj = function(t) {
		return !(f || !t) && (C.push(t), !0)
	}, this._addPhotoObj = function(t, e, n) {
		return !1
	}, this._addMediaObj = function(t, e, n) {
		return !1
	}, this._setTemplate = function(t, e, n, r) {
		if(!m && i(t)) {
			if(null == e || 0 === e.length) return anysign.logger.e("contentUtf8Str must not be null or empty"), !1;
			if(null == n || 0 === n.length) return anysign.logger.e("businessId must not be null or empty"), !1;
			if(null == r || 0 === r.length) return anysign.logger.e("template_serial must not be null or empty"), !1;
			c = n, u = sha1DigestBase64(n) + "";
			var o = new DataObj;
			if(o.Cid = t, o.Data = e, d.FORMDATA_XML === t || d.FORMDATA_JSON === t) {
				var a = new PDFCrdRule;
				a.DocFormat = t, a.DocStyleTid = r, o.PDFCrdRule = a
			}
			var s = new DataConfig;
			return s.cid = t, s.nessesary = !0, w[t] = o, T[t] = s, m = !0, !0
		}
		return !1
	}, this._setTID = function(t) {
		return l = t, !0
	}, this._setData = function(t, n) {
		if(e(t) && n) {
			if("string" == typeof n)(i = w[t]).Data = Base64.encodeUint8Array(anysign.charset.strToUtf8ArrayUint8(n));
			else if(n instanceof Uint8Array) {
				var i = w[t];
				i.Data = Base64.encodeUint8Array(n)
			}
			return !0
		}
		return !1
	}, this._commitConfig = function() {
		return f = !0, !0
	}, this._resetConfig = function() {
		return t(), !0
	}, this._showSignatureDialog = function(t) {
		if(f) {
			if(m) {
				if(null == v[t]) return EC_WRONG_CONTEXT_ID;
				onloadAnysignView(!0, g);
				var e = v[t],
					i = getWindowHeight(),
					r = getWindowWidth(),
					o = document.getElementById("dialog");
				o.style.height = i, o.style.width = r, o.style.display = "block";
				var a = document.getElementById("anysign_title"),
					l = e.title,
					c = l.substring(e.titleSpanFromOffset, e.titleSpanToOffset + 1).big();
				return a.innerHTML = l.substring(0, e.titleSpanFromOffset) + c + l.substring(e.titleSpanToOffset + 1, l.length), setSignResCallback(e, function(t, i, r, o, a, l, c) {
					if(s) {
						if(r) {
							var u = y[t];
							if(n(u, e.penColor, o, a, l, c), u.ImageSize = new ImageSize(calculatedSigWidth, calculatedSigHeight), u.Image = i, u.SignRule && u.SignRule instanceof SignRule_XYZ) {
								var h = u.SignRule.XYZRule;
								"dp" === h.Unit ? u.SignRule.XYZRule = {
									Left: h.Left,
									Top: h.Top,
									Right: h.Left + calculatedSigWidth,
									Bottom: h.Top - calculatedSigHeight,
									Pageno: h.Pageno,
									Unit: h.Unit
								} : "pt" === h.Unit && (u.SignRule.XYZRule = {
									Left: h.Left,
									Top: h.Top,
									Right: h.Left + .45 * calculatedSigWidth,
									Bottom: h.Top - .45 * calculatedSigHeight,
									Pageno: h.Pageno,
									Unit: h.Unit
								})
							}
							s(e.cid, CALLBACK_TYPE_SIGNATURE, r)
						} else s(e.cid, CALLBACK_TYPE_DIALOG_CANCEL, null);
						clear_canvas(), document.getElementById("dialog").style.display = "none", setIsAnysignInputDlgShown(!1)
					}
				}), setIsAnysignInputDlgShown(!0), RESULT_OK
			}
			return EC_TEMPLATE_NOT_SET
		}
		return EC_API_NOT_INITED
	}, this._showCommentDialog = function(t) {
		if(f) {
			if(m) {
				if(null == v[t]) return EC_WRONG_CONTEXT_ID;
				if(isCommentShow) return EC_COMMENT_ALREADY_SHOW;
				var e = v[t];
				return setSignResCallback(e, function(t, n, i, r, o, a, l) {
					if(s) {
						if(i) {
							var c = y[t];
							if(c.ImageSize = new ImageSize(a, l), c.Image = n, c.SignRule && c.SignRule instanceof SignRule_XYZ) {
								var u = c.SignRule.XYZRule;
								"dp" === u.Unit ? c.SignRule.XYZRule = {
									Left: u.Left,
									Top: u.Top,
									Right: u.Left + a,
									Bottom: u.Top - l,
									Pageno: u.Pageno,
									Unit: u.Unit
								} : "pt" === u.Unit && (c.SignRule.XYZRule = {
									Left: u.Left,
									Top: u.Top,
									Right: u.Left + .45 * a,
									Bottom: u.Top - .45 * l,
									Pageno: u.Pageno,
									Unit: u.Unit
								})
							}
							s(e.cid, CALLBACK_TYPE_COMMENTSIGN, i)
						} else s(e.cid, CALLBACK_TYPE_DIALOG_CANCEL, null);
						clear_canvas(), document.getElementById("dialog").style.display = "none", setIsAnysignInputDlgShown(!1)
					}
				}), (new anysignCommentUI).onload_commentSignCanvas(e, g), setIsAnysignInputDlgShown(!0), RESULT_OK
			}
			return EC_TEMPLATE_NOT_SET
		}
		return EC_API_NOT_INITED
	}, this._setIdentifyCallBack = function(t) {
		g = t
	}, this._startOCR = function(t) {
		(new OCRObj).setOCRCapture(t)
	}, this._takePicture = function(t) {
		return !1
	}, this._picturePreview = function(t) {
		return !1
	}, this._startMediaRecording = function(t) {
		return !1
	}, this._audioPreview = function(t) {
		return !1
	}, this._mediaPreview = function(t) {
		return !1
	}, this._startMediaRecording = function(t) {
		return !1
	}, this._finishMediaRecording = function(t) {
		return !1
	}, this._isReadyToUpload = function() {
		if(!f || !m) return !1;
		for(var t in v) {
			var e = (i = v[t]).cid;
			if(i.nessesary) {
				var n = y[e];
				if(null == n) return !1;
				if(isSignOrCom(n.Cid)) {
					if(null == n.Points || null == n.Points.CertOID || null == n.Points.CertOID.BioFeature || null == n.Points.CertOID.BioFeature.Script) return !1
				} else if(null == n.Image) return !1
			}
		}
		for(t in T) {
			var i = T[t],
				r = w[i.cid];
			if((null == r || null == r.Data) && i.nessesary) return !1
		}
		return !0
	}, this._saveBusinessSession = function(t) {
		t = (t = md5Digest("424A4341" + t) + "").substring(0, 24);
		var e = new SaveFormInfo;
		e.WONo = c, e.WOHash = u, e.Channel = h;
		var n;
		for(var i in v) n = v[i], e.USignConfigs.push(n), e.USignObjs.push(y[n.cid]);
		for(i in T) n = T[i], e.DataConfigs.push(n), e.DataObjs.push(w[n.cid]);
		return e.CachetArray = C, e.EncAlg = EncAlgType.EncAlg, tripleDesEncrypt(anysign.json.stringify(e), t) + ""
	}, this._restoreBusinessSession = function(t, e) {
		var n = tripleDesDecrypt(t, e = (e = md5Digest("424A4341" + e) + "").substring(0, 24)) + "",
			i = anysign.hex.hexStrToUint8Str(n),
			r = anysign.json.stringToObj(i);
		c = r.WONo, u = r.WOHash, h = r.Channel, EncAlgType.EncAlg = r.EncAlg;
		var o, a;
		for(var s in r.USignConfigs) {
			o = r.USignConfigs[s].cid;
			for(var l in r.USignObjs) o == (a = r.USignObjs[l].Cid) && (v[o] = r.USignConfigs[s], y[a] = r.USignObjs[l])
		}
		for(var s in r.DataConfigs) {
			o = r.DataConfigs[s].cid;
			for(var l in r.DataObjs) o == (a = r.DataObjs[l].Cid) && (T[o] = r.DataConfigs[s], w[a] = r.DataObjs[l])
		}
		return C = r.CachetArray, f = !0, m = !0, !0
	}, this._getUploadDataGram = function() {
		if(f && this._isReadyToUpload() && m) {
			var t = new AnySignRoot,
				e = new FormInfo,
				n = new Uint8Array(24);
			void 0 != window.crypto ? window.crypto.getRandomValues(n) : void 0 != window.msCrypto ? window.msCrypto.getRandomValues(n) : capabal.crypto.getRandomValues(n), t.EncKey = rsaPubkeyUint8EncByDefault(n), t.EncCertSN = encCertSN;
			var i, r = [];
			for(var o in v) i = v[o], "" != y[i.cid].Image && null != y[i.cid].Image && r.push(y[i.cid]);
			var a = [];
			for(o in T) i = T[o], a.push(w[i.cid]);
			if(e.WONo = c, e.WOHash = u, e.Channel = h, null != C && C.length > 0 && (e.IsUnit = !0), null == r || 0 == r.length) return null;
			e.USignArray = r, e.DataArray = a, e.CachetArray = C, e.ExtInfo = new ExtInfo, e.EncAlg = EncAlgType.EncAlg;
			var s = anysign.json.stringify(e);
			return t.EncData = tripleDesEncrypt(s, anysign.hex.uint8ArrayToHexStr(n)) + "", t.Digest = new Digest, t.Digest.Alg = "CRC32", t.Digest.Value = anysign.digest.crc32(t.EncData).toString(16).toUpperCase(), anysign.json.stringify(t)
		}
		return null
	}, this._getOSInfo = function() {
		if(isMobile.Android()) {
			var t = navigator.userAgent.toLowerCase();
			alert(t);
			var e = t.indexOf("android"),
				n = t.indexOf(";", e);
			return e += 8, "android##" + (i = t.substring(e, n))
		}
		if(isMobile.iOS()) {
			var i;
			if(-1 != (e = (t = navigator.userAgent).indexOf("OS")) && -1 != (n = t.indexOf("like Mac OS"))) return i = t.substring(e + 3, n - 1), "ios##" + (i = i.replace(/_/g, "."))
		}
		return "unknown"
	}
}

function onBridgeReady() {
	WeixinJSBridge.call("hideOptionMenu")
}

function BigInteger(t, e, n) {
	null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
}

function nbi() {
	return new BigInteger(null)
}

function am1(t, e, n, i, r, o) {
	for(; --o >= 0;) {
		var a = e * this[t++] + n[i] + r;
		r = Math.floor(a / 67108864), n[i++] = 67108863 & a
	}
	return r
}

function am2(t, e, n, i, r, o) {
	for(var a = 32767 & e, s = e >> 15; --o >= 0;) {
		var l = 32767 & this[t],
			c = this[t++] >> 15,
			u = s * l + c * a;
		r = ((l = a * l + ((32767 & u) << 15) + n[i] + (1073741823 & r)) >>> 30) + (u >>> 15) + s * c + (r >>> 30), n[i++] = 1073741823 & l
	}
	return r
}

function am3(t, e, n, i, r, o) {
	for(var a = 16383 & e, s = e >> 14; --o >= 0;) {
		var l = 16383 & this[t],
			c = this[t++] >> 14,
			u = s * l + c * a;
		r = ((l = a * l + ((16383 & u) << 14) + n[i] + r) >> 28) + (u >> 14) + s * c, n[i++] = 268435455 & l
	}
	return r
}

function int2char(t) {
	return BI_RM.charAt(t)
}

function intAt(t, e) {
	var n = BI_RC[t.charCodeAt(e)];
	return null == n ? -1 : n
}

function bnpCopyTo(t) {
	for(var e = this.t - 1; e >= 0; --e) t[e] = this[e];
	t.t = this.t, t.s = this.s
}

function bnpFromInt(t) {
	this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
}

function nbv(t) {
	var e = nbi();
	return e.fromInt(t), e
}

function bnpFromString(t, e) {
	var n;
	if(16 == e) n = 4;
	else if(8 == e) n = 3;
	else if(256 == e) n = 8;
	else if(2 == e) n = 1;
	else if(32 == e) n = 5;
	else {
		if(4 != e) return void this.fromRadix(t, e);
		n = 2
	}
	this.t = 0, this.s = 0;
	for(var i = t.length, r = !1, o = 0; --i >= 0;) {
		var a = 8 == n ? 255 & t[i] : intAt(t, i);
		a < 0 ? "-" == t.charAt(i) && (r = !0) : (r = !1, 0 == o ? this[this.t++] = a : o + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - o) - 1) << o, this[this.t++] = a >> this.DB - o) : this[this.t - 1] |= a << o, (o += n) >= this.DB && (o -= this.DB))
	}
	8 == n && 0 != (128 & t[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), r && BigInteger.ZERO.subTo(this, this)
}

function bnpClamp() {
	for(var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
}

function bnToString(t) {
	if(this.s < 0) return "-" + this.negate().toString(t);
	var e;
	if(16 == t) e = 4;
	else if(8 == t) e = 3;
	else if(2 == t) e = 1;
	else if(32 == t) e = 5;
	else {
		if(4 != t) return this.toRadix(t);
		e = 2
	}
	var n, i = (1 << e) - 1,
		r = !1,
		o = "",
		a = this.t,
		s = this.DB - a * this.DB % e;
	if(a-- > 0)
		for(s < this.DB && (n = this[a] >> s) > 0 && (r = !0, o = int2char(n)); a >= 0;) s < e ? (n = (this[a] & (1 << s) - 1) << e - s, n |= this[--a] >> (s += this.DB - e)) : (n = this[a] >> (s -= e) & i, s <= 0 && (s += this.DB, --a)), n > 0 && (r = !0), r && (o += int2char(n));
	return r ? o : "0"
}

function bnNegate() {
	var t = nbi();
	return BigInteger.ZERO.subTo(this, t), t
}

function bnAbs() {
	return this.s < 0 ? this.negate() : this
}

function bnCompareTo(t) {
	var e = this.s - t.s;
	if(0 != e) return e;
	var n = this.t;
	if(0 != (e = n - t.t)) return this.s < 0 ? -e : e;
	for(; --n >= 0;)
		if(0 != (e = this[n] - t[n])) return e;
	return 0
}

function nbits(t) {
	var e, n = 1;
	return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n
}

function bnBitLength() {
	return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}

function bnpDLShiftTo(t, e) {
	var n;
	for(n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
	for(n = t - 1; n >= 0; --n) e[n] = 0;
	e.t = this.t + t, e.s = this.s
}

function bnpDRShiftTo(t, e) {
	for(var n = t; n < this.t; ++n) e[n - t] = this[n];
	e.t = Math.max(this.t - t, 0), e.s = this.s
}

function bnpLShiftTo(t, e) {
	var n, i = t % this.DB,
		r = this.DB - i,
		o = (1 << r) - 1,
		a = Math.floor(t / this.DB),
		s = this.s << i & this.DM;
	for(n = this.t - 1; n >= 0; --n) e[n + a + 1] = this[n] >> r | s, s = (this[n] & o) << i;
	for(n = a - 1; n >= 0; --n) e[n] = 0;
	e[a] = s, e.t = this.t + a + 1, e.s = this.s, e.clamp()
}

function bnpRShiftTo(t, e) {
	e.s = this.s;
	var n = Math.floor(t / this.DB);
	if(n >= this.t) e.t = 0;
	else {
		var i = t % this.DB,
			r = this.DB - i,
			o = (1 << i) - 1;
		e[0] = this[n] >> i;
		for(var a = n + 1; a < this.t; ++a) e[a - n - 1] |= (this[a] & o) << r, e[a - n] = this[a] >> i;
		i > 0 && (e[this.t - n - 1] |= (this.s & o) << r), e.t = this.t - n, e.clamp()
	}
}

function bnpSubTo(t, e) {
	for(var n = 0, i = 0, r = Math.min(t.t, this.t); n < r;) i += this[n] - t[n], e[n++] = i & this.DM, i >>= this.DB;
	if(t.t < this.t) {
		for(i -= t.s; n < this.t;) i += this[n], e[n++] = i & this.DM, i >>= this.DB;
		i += this.s
	} else {
		for(i += this.s; n < t.t;) i -= t[n], e[n++] = i & this.DM, i >>= this.DB;
		i -= t.s
	}
	e.s = i < 0 ? -1 : 0, i < -1 ? e[n++] = this.DV + i : i > 0 && (e[n++] = i), e.t = n, e.clamp()
}

function bnpMultiplyTo(t, e) {
	var n = this.abs(),
		i = t.abs(),
		r = n.t;
	for(e.t = r + i.t; --r >= 0;) e[r] = 0;
	for(r = 0; r < i.t; ++r) e[r + n.t] = n.am(0, i[r], e, r, 0, n.t);
	e.s = 0, e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e)
}

function bnpSquareTo(t) {
	for(var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0;
	for(n = 0; n < e.t - 1; ++n) {
		var i = e.am(n, e[n], t, 2 * n, 0, 1);
		(t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, i, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
	}
	t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp()
}

function bnpDivRemTo(t, e, n) {
	var i = t.abs();
	if(!(i.t <= 0)) {
		var r = this.abs();
		if(r.t < i.t) return null != e && e.fromInt(0), void(null != n && this.copyTo(n));
		null == n && (n = nbi());
		var o = nbi(),
			a = this.s,
			s = t.s,
			l = this.DB - nbits(i[i.t - 1]);
		l > 0 ? (i.lShiftTo(l, o), r.lShiftTo(l, n)) : (i.copyTo(o), r.copyTo(n));
		var c = o.t,
			u = o[c - 1];
		if(0 != u) {
			var h = u * (1 << this.F1) + (c > 1 ? o[c - 2] >> this.F2 : 0),
				g = this.FV / h,
				d = (1 << this.F1) / h,
				p = 1 << this.F2,
				f = n.t,
				m = f - c,
				y = null == e ? nbi() : e;
			for(o.dlShiftTo(m, y), n.compareTo(y) >= 0 && (n[n.t++] = 1, n.subTo(y, n)), BigInteger.ONE.dlShiftTo(c, y), y.subTo(o, o); o.t < c;) o[o.t++] = 0;
			for(; --m >= 0;) {
				var v = n[--f] == u ? this.DM : Math.floor(n[f] * g + (n[f - 1] + p) * d);
				if((n[f] += o.am(0, v, n, m, 0, c)) < v)
					for(o.dlShiftTo(m, y), n.subTo(y, n); n[f] < --v;) n.subTo(y, n)
			}
			null != e && (n.drShiftTo(c, e), a != s && BigInteger.ZERO.subTo(e, e)), n.t = c, n.clamp(), l > 0 && n.rShiftTo(l, n), a < 0 && BigInteger.ZERO.subTo(n, n)
		}
	}
}

function bnMod(t) {
	var e = nbi();
	return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e), e
}

function Classic(t) {
	this.m = t
}

function cConvert(t) {
	return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
}

function cRevert(t) {
	return t
}

function cReduce(t) {
	t.divRemTo(this.m, null, t)
}

function cMulTo(t, e, n) {
	t.multiplyTo(e, n), this.reduce(n)
}

function cSqrTo(t, e) {
	t.squareTo(e), this.reduce(e)
}

function bnpInvDigit() {
	if(this.t < 1) return 0;
	var t = this[0];
	if(0 == (1 & t)) return 0;
	var e = 3 & t;
	return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e
}

function Montgomery(t) {
	this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
}

function montConvert(t) {
	var e = nbi();
	return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(e, e), e
}

function montRevert(t) {
	var e = nbi();
	return t.copyTo(e), this.reduce(e), e
}

function montReduce(t) {
	for(; t.t <= this.mt2;) t[t.t++] = 0;
	for(var e = 0; e < this.m.t; ++e) {
		var n = 32767 & t[e],
			i = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
		for(t[n = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++
	}
	t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
}

function montSqrTo(t, e) {
	t.squareTo(e), this.reduce(e)
}

function montMulTo(t, e, n) {
	t.multiplyTo(e, n), this.reduce(n)
}

function bnpIsEven() {
	return 0 == (this.t > 0 ? 1 & this[0] : this.s)
}

function bnpExp(t, e) {
	if(t > 4294967295 || t < 1) return BigInteger.ONE;
	var n = nbi(),
		i = nbi(),
		r = e.convert(this),
		o = nbits(t) - 1;
	for(r.copyTo(n); --o >= 0;)
		if(e.sqrTo(n, i), (t & 1 << o) > 0) e.mulTo(i, r, n);
		else {
			var a = n;
			n = i, i = a
		}
	return e.revert(n)
}

function bnModPowInt(t, e) {
	var n;
	return n = t < 256 || e.isEven() ? new Classic(e) : new Montgomery(e), this.exp(t, n)
}

function Arcfour() {
	this.i = 0, this.j = 0, this.S = new Array
}

function ARC4init(t) {
	var e, n, i;
	for(e = 0; e < 256; ++e) this.S[e] = e;
	for(n = 0, e = 0; e < 256; ++e) n = n + this.S[e] + t[e % t.length] & 255, i = this.S[e], this.S[e] = this.S[n], this.S[n] = i;
	this.i = 0, this.j = 0
}

function ARC4next() {
	var t;
	return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
}

function prng_newstate() {
	return new Arcfour
}

function rng_seed_int(t) {
	rng_pool[rng_pptr++] ^= 255 & t, rng_pool[rng_pptr++] ^= t >> 8 & 255, rng_pool[rng_pptr++] ^= t >> 16 & 255, rng_pool[rng_pptr++] ^= t >> 24 & 255, rng_pptr >= rng_psize && (rng_pptr -= rng_psize)
}

function rng_seed_time() {
	rng_seed_int((new Date).getTime())
}

function rng_get_byte() {
	if(null == rng_state) {
		for(rng_seed_time(), (rng_state = prng_newstate()).init(rng_pool), rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) rng_pool[rng_pptr] = 0;
		rng_pptr = 0
	}
	return rng_state.next()
}

function rng_get_bytes(t) {
	var e;
	for(e = 0; e < t.length; ++e) t[e] = rng_get_byte()
}

function SecureRandom() {}

function parseBigInt(t, e) {
	return new BigInteger(t, e)
}

function linebrk(t, e) {
	for(var n = "", i = 0; i + e < t.length;) n += t.substring(i, i + e) + "\n", i += e;
	return n + t.substring(i, t.length)
}

function byte2Hex(t) {
	return t < 16 ? "0" + t.toString(16) : t.toString(16)
}

function pkcs1pad2(t, e) {
	if(e < t.length + 11) return alert("Message too long for RSA"), null;
	for(var n = new Array, i = t.length - 1; i >= 0 && e > 0;) {
		var r = t.charCodeAt(i--);
		r < 128 ? n[--e] = r : r > 127 && r < 2048 ? (n[--e] = 63 & r | 128, n[--e] = r >> 6 | 192) : (n[--e] = 63 & r | 128, n[--e] = r >> 6 & 63 | 128, n[--e] = r >> 12 | 224)
	}
	n[--e] = 0;
	for(var o = new SecureRandom, a = new Array; e > 2;) {
		for(a[0] = 0; 0 == a[0];) o.nextBytes(a);
		n[--e] = a[0]
	}
	return n[--e] = 2, n[--e] = 0, new BigInteger(n)
}

function pkcs1pad2Uint8(t, e) {
	if(e < t.length + 11) return alert("Message too long for RSA"), null;
	for(var n = new Array, i = t.length - 1; i >= 0 && e > 0;) {
		var r = t[i--];
		n[--e] = r
	}
	n[--e] = 0;
	for(var o = new SecureRandom, a = new Array; e > 2;) {
		for(a[0] = 0; 0 == a[0];) o.nextBytes(a);
		n[--e] = a[0]
	}
	return n[--e] = 2, n[--e] = 0, new BigInteger(n)
}

function RSAKey() {
	this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
}

function RSASetPublic(t, e) {
	null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = parseBigInt(t, 16), this.e = parseInt(e, 16)) : alert("Invalid RSA public key")
}

function RSADoPublic(t) {
	return t.modPowInt(this.e, this.n)
}

function RSAEncrypt(t) {
	var e = pkcs1pad2(t, this.n.bitLength() + 7 >> 3);
	if(null == e) return null;
	var n = this.doPublic(e);
	if(null == n) return null;
	var i = n.toString(16);
	return 0 == (1 & i.length) ? i : "0" + i
}

function RSAUint8ArrayEncrypt(t) {
	var e = pkcs1pad2Uint8(t, this.n.bitLength() + 7 >> 3);
	if(null == e) return null;
	var n = this.doPublic(e);
	if(null == n) return null;
	var i = n.toString(16);
	return 0 == (1 & i.length) ? i : "0" + i
}

function aesEncrypt(t, e) {
	var n = CryptoJS.enc.Hex.parse(e);
	return CryptoJS.AES.encrypt(t, n)
}

function tripleDesEncrypt(t, e) {
	var n = CryptoJS.enc.Hex.parse(e);
	return CryptoJS.TripleDES.encrypt(t, n, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	})
}

function tripleDesDecrypt(t, e) {
	var n = CryptoJS.enc.Hex.parse(e);
	return CryptoJS.TripleDES.decrypt(t, n, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	})
}

function sha1DigestBase64(t) {
	return Base64.encodeUint8Array(anysign.hex.hexStrToUint8Array(CryptoJS.SHA1(t) + ""))
}

function sha1Digest(t) {
	return CryptoJS.SHA1(t)
}

function md5Digest(t) {
	return CryptoJS.MD5(t)
}

function rsaPubkeyEnc(t, e, n) {
	var i = new RSAKey;
	i.setPublic(t, e);
	var r = i.encrypt(n),
		o = anysign.hex.hexStrToUint8Array(r);
	return Base64.encodeUint8Array(o)
}

function rsaPubkeyUint8Enc(t, e, n) {
	var i = new RSAKey;
	i.setPublic(t, e);
	var r = i.encryptUint8(n),
		o = anysign.hex.hexStrToUint8Array(r);
	return Base64.encodeUint8Array(o)
}

function rsaPubkeyEncByDefault(t) {
	return rsaPubkeyEnc(pubN, pubE, t)
}

function rsaPubkeyUint8EncByDefault(t) {
	return rsaPubkeyUint8Enc(pubN, pubE, t)
}

function ismobile(t) {
	var e = navigator.userAgent;
	navigator.appVersion;
	if(!/AppleWebKit.*Mobile/i.test(navigator.userAgent) && !/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent)) return e.indexOf("iPad") > -1 ? "0" : "1";
	if(window.location.href.indexOf("?mobile") < 0) try {
		return /iPhone|mac|iPod|iPad/i.test(navigator.userAgent) ? "0" : "1"
	} catch(t) {}
}

function IsPC() {
	for(var t = navigator.userAgent, e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !0, i = 0; i < e.length; i++)
		if(t.indexOf(e[i]) > 0) {
			n = !1;
			break
		}
	return n
}

function getWindowWidth() {
	var t = 630;
	return document.body && document.body.offsetWidth && (t = document.body.offsetWidth, document.body.offsetHeight), "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth && (t = document.documentElement.offsetWidth, document.documentElement.offsetHeight), window.innerWidth && window.innerHeight && (t = window.innerWidth, window.innerHeight), .99 * t
}

function getWindowHeight() {
	var t = 460;
	return document.body && document.body.offsetWidth && (document.body.offsetWidth, t = document.body.offsetHeight), "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth && (document.documentElement.offsetWidth, t = document.documentElement.offsetHeight), window.innerWidth && window.innerHeight && (window.innerWidth, t = window.innerHeight), IsPC() && (t *= .9), .99 * t
}

function isSignOrCom(t) {
	return t >= 20 && t <= 29 || (t >= 200 && t <= 299 || !(t >= 30 && t <= 39) && (!(t >= 300 && t <= 399) && null))
}

function checkText(t) {
	if(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/.test(t)) return !0;
	for(var e = [",", ".", "'", '"', ";", ":", "?", "/", "", "\\", "", "[", "]", "{", "}", "<", ">", "|", "(", ")", "·"], n = 0; n < e.length; n++)
		if(t == e[n]) return !0, !0;
	return !1
}

function hideURLbar() {
	window.scrollTo(0, 1)
}

function onloadAnysignView(t, e) {
	window.isSign = t, window.identify_callback = e, onload_singleSignCanvas(), onload_singleSingScrollAction()
}

function onload_singleSignCanvas() {
	if(document.getElementById("anysignCanvas")) {
		canvas = document.getElementById("anysignCanvas"), ctx = canvas.getContext("2d");
		var t = getWindowHeight(),
			e = getWindowWidth();
		canvas.width < 10 && (canvas.width = e * canvas.width * .99), canvas.width < e && (canvas.width = .99 * e);
		var n = document.getElementById("container");
		n.style.overflowX = "scroll", n.style.overflowY = "hidden", canvas.height = .7 * t, document.getElementById("anysign_title").style.height = .1 * t + "px", document.getElementById("single_scrollbar").style.height = .1 * t + "px", document.getElementById("btnContainerOuter").style.height = .1 * t + "px", "ontouchstart" in document.documentElement ? (canvas.ontouchstart = function(t) {
			if(isCopyingImg) return !1;
			isDown = !0, ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black", ctx.lineWidth = base_stroke_width, ctx.lineCap = "round", ctx.lineJoin = "round", ctx.shadowBlur = 5
		}, canvas.ontouchmove = function(t) {
			if(isDown && !isCopyingImg) {
				var e = JQuery_Capable.offset(t.target);
				void 0 !== t.targetTouches ? (curX = Math.floor(t.targetTouches[0].pageX - e.left), curY = Math.floor(t.targetTouches[0].pageY - e.top)) : (curX = Math.floor(t.pageX - e.left), curY = Math.floor(t.pageY - e.top));
				var n = t.timeStamp;
				0 !== signTrachPointCount || isNaN(n) || (firstPointTime = n), curX > 0 && curY <= canvas.height && (isNaN(n) ? signTrack += curX + "," + curY + "," + base_stroke_width + ",0\n" : signTrack += curX + "," + curY + "," + base_stroke_width + "," + (n - firstPointTime) + "\n", signTrachPointCount += 1, curX > maxX && (maxX = curX), curX < minX && (minX = curX), curY > maxY && (maxY = curY), curY < minY && (minY = curY), points.push({
					x: curX,
					y: curY
				}), onPaint(), curX > 0 && curY > 0 && sbuilder.push(curX, curY), lastX = curX, lastY = curY), preventDefault(t)
			}
		}, canvas.ontouchend = function(t) {
			var e = t.timeStamp;
			isNaN(e) ? signTrack += "0,0,-1,0\n" : signTrack += "0,0,-1," + (e - firstPointTime) + "\n", signTrachPointCount += 1, sbuilder.push("-1", "0"), isCopyingImg = !0, isDown = !1, canvas = document.getElementById("anysignCanvas"), (ctx = canvas.getContext("2d")).drawImage(canvas, 0, 0), points = [], isCopyingImg = !1
		}, canvas.ontouchcancel = canvas.ontouchend) : (canvas.onmousedown = function(t) {
			isDown = !0, ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black", ctx.lineWidth = base_stroke_width, ctx.lineCap = "round", ctx.lineJoin = "round", ctx.shadowBlur = 5
		}, canvas.onmousemove = function(t) {
			if(isDown) {
				var e = JQuery_Capable.offset(t.target),
					n = document.body.scrollTop | document.documentElement.scrollTop,
					i = document.body.scrollLeft | document.documentElement.scrollLeft;
				void 0 !== t.targetTouches ? (curX = Math.floor(t.targetTouches[0].clientX - e.left), curY = Math.floor(t.targetTouches[0].clientY - e.top)) : (curX = Math.floor(t.clientX - e.left), curY = Math.floor(t.clientY - e.top));
				var r = t.timeStamp;
				0 !== signTrachPointCount || isNaN(r) || (firstPointTime = r), curX > 0 && (isNaN(r) ? signTrack += curX + "," + curY + "," + base_stroke_width + ",0\n" : signTrack += curX + "," + curY + "," + base_stroke_width + "," + (r - firstPointTime) + "\n", signTrachPointCount += 1, curY += n, (curX += i) > maxX && (maxX = curX), curX < minX && (minX = curX), curY > maxY && (maxY = curY), curY < minY && (minY = curY), points.push({
					x: curX,
					y: curY
				}), onPaint(), curX > 0 && curY > 0 && sbuilder.push(curX, curY), lastX = curX, lastY = curY), preventDefault(t)
			}
		}, canvas.onmouseup = function(t) {
			var e = JQuery_Capable.offset(t.target);
			void 0 !== t.targetTouches ? (curX = Math.floor(t.targetTouches[0].clientX - e.left), curY = Math.floor(t.targetTouches[0].clientY - e.top)) : (curX = Math.floor(t.clientX - e.left), curY = Math.floor(t.clientY - e.top));
			var n = t.timeStamp;
			isNaN(n) ? signTrack += "0,0,-1,0\n" : signTrack += "0,0,-1," + (n - firstPointTime) + "\n", signTrachPointCount += 1, isDown && sbuilder.push("-1", "0"), isDown = !1;
			var i = document.getElementById("anysignCanvas");
			i.getContext("2d").drawImage(i, 0, 0), points = []
		}, canvas.onmouseout = canvas.onmouseup);
		window.devicePixelRatio && window.devicePixelRatio;
		ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black", ctx.lineWidth = base_stroke_width, ctx.lineCap = "round", ctx.lineJoin = "round", ctx.shadowBlur = 5
	} else alert("获取签名控件失败,请使用safari和chrome浏览器进行签名。\n\n当前浏览器详情如下：" + navigator.userAgent)
}

function onload_singleSingScrollAction() {
	function t() {
		(i -= s) > r ? (setTimeout(t, a), o.scrollLeft = i) : (i = r, o.scrollLeft = i), i <= 0 && (o.style.borderColor = "#FF0000", setTimeout(function() {
			o.style.borderColor = "gray"
		}, 1e3))
	}

	function e() {
		(i += s) < r ? (o.scrollLeft = i, setTimeout(e, a)) : (i = r, o.scrollLeft = i), i >= o.scrollWidth - o.clientWidth && (o.style.borderColor = "#FF0000", setTimeout(function() {
			o.style.borderColor = "gray"
		}, 1e3))
	}
	var n = 0,
		i = 0,
		r = 0,
		o = document.getElementById("container");
	o.addEventListener("scroll", function() {
		i = o.scrollLeft
	}), document.getElementById("single_scrollbar_up").addEventListener("click", function() {
		var e = o.clientWidth;
		o.scrollWidth;
		n = Math.ceil(1 * e / 3), r = i - n >= 0 ? i - n : 0, t()
	}), document.getElementById("single_scrollbar_down").addEventListener("click", function() {
		var t = o.clientWidth,
			a = o.scrollWidth;
		n = Math.ceil(1 * t / 3), r = i + n >= a - t ? a - t : i + n, e()
	});
	var a = 50,
		s = 20
}

function clear_canvas() {
	var t = document.getElementById("anysignCanvas"),
		e = t.getContext("2d");
	e.clearRect(0, 0, t.width, t.height), e.closePath();
	var n = t.width,
		i = t.height;
	t.width = t.height = 0, t.width = n, t.height = i, calculatedSigWidth = 0, calculatedSigHeight = 0, signTrack = "", signTrachPointCount = 0, firstPointTime = 0, points = [], sbuilder = [], minX = 9999, minY = 9999, maxX = 0, maxY = 0, imageDataTmp = null, isDrawn = !1
}

function sign_confirm() {
	if(isDrawn)
		if(signObjTmp.isdistinguish) {
			sbuilder.push("-1", "-1");
			showProgress("正在识别，请稍候。。。");
			for(var t = "", e = signObjTmp.signer.UName.replace(/(.)(?=[^$])/g, "$1,").split(","), n = 0; n < e.length; n++) checkText(e[n]) || (t += e[n]);
			new OCRObj(signObjTmp.ocrCapture).recognition(sbuilder, t, function(t, e) {
				if(closeWindow(), 0 == t) {
					var n = (a = document.getElementById("anysignCanvas")).getContext("2d"),
						i = maxX - minX + paste_padding + paste_padding,
						r = maxY - minY + paste_padding + paste_padding;
					if(imageDataTmp = n.getImageData(minX - paste_padding, minY - paste_padding, i + paste_padding, r + paste_padding), signResCallback) {
						var o = getSigData(),
							a = document.getElementById("anysignCanvas");
						signResCallback(signObjTmp.cid, o[0].substr(22, o[0].length), o[1].substr(22, o[1].length), signTrack, signTrachPointCount, a.width, a.height)
					}
					document.body.parentNode.style.overflow = "scroll", isSign = !1
				} else "请求超时" == t ? (closeWindow(), clear_canvas()) : (null == identify_callback ? console.log("the identify callback is not definition") : identify_callback(t), clear_canvas())
			}), sbuilder = []
		} else {
			var i = (s = document.getElementById("anysignCanvas")).getContext("2d"),
				r = maxX - minX + paste_padding + paste_padding,
				o = maxY - minY + paste_padding + paste_padding;
			if(imageDataTmp = i.getImageData(minX - paste_padding, minY - paste_padding, r + paste_padding, o + paste_padding), signResCallback) {
				var a = getSigData(),
					s = document.getElementById("anysignCanvas");
				signResCallback(signObjTmp.cid, a[0].substr(22, a[0].length), a[1].substr(22, a[1].length), signTrack, signTrachPointCount, s.width, s.height)
			}
			document.body.parentNode.style.overflow = "scroll", isSign = !1
		}
	else custom_alert("请手写签名", "确认")
}

function setSignResCallback(t, e) {
	if(isSignOrCom(t.cid)) signObjTmp = t, signResCallback = e, (i = (n = document.getElementById("anysignCanvas")).getContext("2d")).strokeStyle = signObjTmp ? signObjTmp.penColor : "black";
	else {
		commentObjTmp = t, signResCallback = e;
		var n = document.getElementById("comment_canvas"),
			i = n.getContext("2d");
		i.strokeStyle = commentObjTmp ? commentObjTmp.penColor : "black", comment_canvas.strokeStyle = commentObjTmp ? commentObjTmp.penColor : "black"
	}
}

function setCanvasHeight(t) {
	var e = document.getElementById("anysignCanvas");
	t > 0 && (e.height = t, e && (e.height = t))
}

function getSigData() {
	var t = new Array;
	if(imageDataTmp) {
		var e = document.createElement("canvas"),
			n = e.getContext("2d"),
			i = window.devicePixelRatio ? window.devicePixelRatio : 1;
		e.width = imageDataTmp.width / i, e.height = imageDataTmp.height / i;
		var r = 1;
		signObjTmp.singleWidth / signObjTmp.singleHeight <= e.width / e.height ? signObjTmp.singleWidth <= e.width && (r = signObjTmp.singleWidth / e.width) : signObjTmp.singleHeight <= e.height && (r = signObjTmp.singleHeight / e.height), e.width *= r, e.height *= r, calculatedSigWidth = e.width, calculatedSigHeight = e.height, n.scale(1 / i * r, 1 / i * r);
		var o = document.createElement("canvas");
		o.width = imageDataTmp.width, o.height = imageDataTmp.height, o.getContext("2d").putImageData(imageDataTmp, 0, 0), n.drawImage(o, 0, 0);
		var a = 1 / i * r * signObjTmp.signatureImgRatio,
			s = document.createElement("canvas"),
			l = s.getContext("2d");
		a < 1 ? (s.width = imageDataTmp.width * a, s.height = imageDataTmp.height * a, l.scale(a, a)) : (s.width = imageDataTmp.width, s.height = imageDataTmp.height);
		var c = document.createElement("canvas");
		return c.width = imageDataTmp.width, c.height = imageDataTmp.height, c.getContext("2d").putImageData(imageDataTmp, 0, 0), l.drawImage(c, 0, 0), t[0] = s.toDataURL(), t[1] = e.toDataURL(), t
	}
	return null
}

function getRawSigHeight() {
	return imageDataTmp ? void 0 !== window.devicePixelRatio ? imageDataTmp.height / window.devicePixelRatio : imageDataTmp.height : 0
}

function getRawSigWidth() {
	return imageDataTmp ? void 0 !== window.devicePixelRatio ? imageDataTmp.width / window.devicePixelRatio : imageDataTmp.width : 0
}

function cancelSign() {
	clear_canvas(), document.getElementById("dialog").style.display = "none", document.body.scroll = "yes", isSign = !1, signResCallback && signResCallback(signObjTmp.cid, null, null, 0)
}

function setIsAnysignInputDlgShown(t) {
	isAnysignInputDlgShown = t
}

function testGetImageData() {}

function testEnc() {
	var t = tripleDesEncrypt("abcdefg", "000102030405060708090a0b0c0d0e0f");
	document.getElementById("result").value = t
}

function testEncAndDec() {
	var t = "abdfdsafdasfcdef132432432432g你好吗,,,fdafdas",
		e = tripleDesEncrypt(t, "133434") + "",
		n = tripleDesDecrypt(e, "133434") + "",
		i = t + "\n";
	i += e + "\n", i += anysign.hex.hexStrToUint8Str(n) + "\n";
	anysign.json.stringToObj('{"Alg":"111","Value":"2222"}');
	document.getElementById("result").value = i
}

function custom_alert(t, e) {
	showMsgDialog(t)
}

function preventDefault(t) {
	(t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1
}

function setSelectState(t) {
	for(var e = document.getElementsByTagName("select"), n = 0; n < e.length; n++) e[n].style.visibility = t
}

function showMessageBox2(t, e, n, i) {
	closeWindow();
	var r = getWindowHeight(),
		o = getWindowWidth();
	isIe && setSelectState("hidden");
	var a = document.createElement("div");
	a.id = "back";
	var s = "font-size:15pt; text-align:center; z-index:7;top:0px;left:0px;position:fixed;background:#666;width:" + o + "px;height:" + r + "px;";
	s += isIe ? "filter:alpha(opacity=0);" : "opacity:0;", a.style.cssText = s;
	var l = document.createElement("div");
	l.id = "mesWindow", l.innerHTML = "<div id='mesWindowContent'>" + e + "</div><div id='mesWindowBottom'><input id='mesWindowBtnOk' type='button' onclick='closeWindow();'value='确认' /></div>", a.appendChild(l), document.body.appendChild(a), showBackground(a, 80), "ontouchstart" in document.documentElement ? (a.ontouchstart = function(t) {
		return "mesWindowBtnOk" === t.target.id || (preventDefault(t), !1)
	}, a.ontouchmove = function(t) {
		preventDefault(t)
	}) : (a.onmousedown = function(t) {
		"mesWindowBtnOk" !== t.target.id && preventDefault(t)
	}, a.onmousemove = function(t) {
		preventDefault(t)
	})
}

function showBackground(t, e) {
	if(isIe) t.filters.alpha.opacity += 1, t.filters.alpha.opacity < e && setTimeout(function() {
		showBackground(t, e)
	}, 5);
	else {
		var n = parseFloat(t.style.opacity);
		n += .01, t.style.opacity = n, n < e / 100 && setTimeout(function() {
			showBackground(t, e)
		}, 5)
	}
}

function closeWindow() {
	null != document.getElementById("back") && document.getElementById("back").parentNode.removeChild(document.getElementById("back")), null != document.getElementById("mesWindow") && document.getElementById("mesWindow").parentNode.removeChild(document.getElementById("mesWindow")), isIe && setSelectState("")
}

function showMsgDialog(t) {
	showMessageBox2("修改小结内容", t, null, 350)
}

function showProgress(t) {
	showMsgProgress("修改小结内容", t, null, 350)
}

function showMsgProgress(t, e, n, i) {
	closeWindow();
	var r = getWindowHeight() / .99,
		o = getWindowWidth() / .99;
	isIe && setSelectState("hidden");
	var a = document.createElement("div");
	a.id = "back";
	var s = "font-size:15pt; text-align:center; z-index:7;top:0px;left:0px;position:fixed;background:#666;width:" + o + "px;height:" + r + "px;";
	s += isIe ? "filter:alpha(opacity=0);" : "opacity:0;", a.style.cssText = s;
	var l = document.createElement("div");
	l.id = "mesWindow", l.innerHTML = "<div id='mesWindowContent'>" + e + "</div>", a.appendChild(l), document.body.appendChild(a), showBackground(a, 80)
}

function toUInt(t) {
	return t < 0 ? t + 4294967296 : t
}

function bytes32(t) {
	return [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
}

function bytes16sw(t) {
	return [255 & t, t >>> 8 & 255]
}

function adler32(t, e, n) {
	switch(arguments.length) {
		case 1:
			e = 0;
		case 2:
			n = t.length - e
	}
	for(var i = 1, r = 0, o = 0; o < n; o++) r = (r + (i = (i + t[e + o]) % 65521)) % 65521;
	return toUInt(r << 16 | i)
}

function crc32(t, e, n) {
	switch(arguments.length) {
		case 1:
			e = 0;
		case 2:
			n = t.length - e
	}
	var i = arguments.callee.crctable;
	if(!i) {
		i = [];
		for(var r = 0; r < 256; r++) {
			a = r;
			for(var o = 0; o < 8; o++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
			i[r] = toUInt(a)
		}
		arguments.callee.crctable = i
	}
	for(var a = 4294967295, s = 0; s < n; s++) a = i[255 & (a ^ t[e + s])] ^ a >>> 8;
	return toUInt(4294967295 ^ a)
}

function OCRObj(t) {
	var e, n, i, r, o = !1;
	e = null == t ? new OCRCapture : t, n = new HWRRoot, i = new HWRInfo, n.version = "1.0", n.transID = UUID(), n.encKey = "encKey", null != e.appID && "" != e.appID && void 0 != e.appID ? (n.userID = e.appID, null != e.serviceID && "" != e.serviceID && void 0 != e.serviceID ? (n.serviceID = e.serviceID, i.type = 1, e.language == Language.CHS ? i.lang = "1" : e.language == Language.CHT && (i.lang = "2"), i.similar = e.resolution, i.text = e.text, i.hwrNum = e.count, n.hwrInfo = i, this.recognition = function(t, a, s) {
		return null == t || "" == t || void 0 == t ? "Identification parameter is empty" : t.length < 10 ? "too few coordinates" : (r = s, OCRObj(), null != i && (i.strokes = t, i.hwrNum = e.count, n.hwrInfo = i), void(null != e.IPAdress && "" != e.IPAdress && void 0 != e.IPAdress ? jQuery.ajax({
			type: "POST",
			data: JSON.stringify(n),
			dataType: "JSONP",
			timeout: 5e3,
			url: e.IPAdress,
			success: function(t) {
				if(null == t || "undefined" == t || "" == t) r("链接服务器异常,请检查网络！", o);
				else {
					var e = JSON.parse(t);
					if(null == e || void 0 === e) alert("服务器连接失败,请稍后再次尝试");
					else if("0" == e.errCode)
						for(var n = e.result, i = "", s = 0; s < n.length; s++)
							if("0" == n[s]) {
								if(a == i) {
									o = !0;
									break
								}
								i = ""
							} else i += String.fromCharCode(n[s]);
					0 != e.errCode || o ? r(e.errCode, o) : r("-1", o)
				}
			},
			error: function(t, e, n) {
				r("请求超时", o); {
					if("timeout" != e) {
						alert("连接服务端异常: " + e + "；status code：" + t.status + "；state：" + t.readyState);
						var i = document.getElementById("comment_canvas");
						return i.getContext("2d").clearRect(0, 0, i.width, i.height), !1
					}
					alert("请求超时,请稍后再次尝试")
				}
			}
		}) : r("服务器地址为空！", o)))
	}) : console.log("ocrCapture.serviceID is null")) : console.log("ocrCapture.appID is null")
}

function UUID() {
	for(var t = [], e = 0; e < 36; e++) t[e] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
	return t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", t.join("")
}

function stringToBytes(t) {
	for(var e, n, i = [], r = 0; r < t.length; r++) {
		e = t.charCodeAt(r), n = [];
		do {
			n.push(255 & e), e >>= 8
		} while (e);
		i = i.concat(n.reverse())
	}
	return i
}
var AnySignRoot = function() {
		this.Version = "4.7", this.EncCertSN = null, this.EncKey = null, this.TermSrc = "PAD", this.Digest = null, this.EncData = null
	},
	Digest = function() {
		this.Alg = null, this.Value = null
	},
	FormInfo = function() {
		this.WONo = null, this.WOHash = null, this.IsSync = !1, this.IsUnit = !1, this.EncAlg = "RSA", this.FlowID = null, this.Channel = null, this.USignArray = [], this.DataArray = [], this.CachetArray = [], this.ExtInfo = null
	},
	SaveFormInfo = function() {
		this.WONo = null, this.WOHash = null, this.Channel = null, this.EncAlg = "RSA", this.USignObjs = [], this.USignConfigs = [], this.DataObjs = [], this.DataConfigs = [], this.CachetArray = []
	},
	ExtInfo = function() {},
	PlainData = function() {
		this.P10Data = null, this.CertOID = null
	},
	P10Data = function() {
		this.RawHash = null, this.Hash = null, this.Value = null, this.ValueType = null, this.P10SignValue = null, this.Hashalg = null, this.Dn = null, this.IDType = null, this.IDNumber = null, this.Templname = "3", this.Channel = "10000"
	},
	CertOID = function() {
		this.Version = "3.2", this.IDType = null, this.IDNumber = null, this.RawHash = null, this.BioFeature = null, this.ClientOS = null
	},
	BioFeature = function() {
		this.PhotoArray = [], this.SoundArray = [], this.Script = null
	},
	Script = function() {
		this.Format = "zip", this.Width = "180", this.Color = null, this.Count = null, this.Data = null, this.Device = null, this.RefHeight = 99999, this.RefWidth = 99999, this.Geoloca = null
	},
	Device = function() {
		this.DeviceName = "ANDROID_PAD_" + navigator.appName, this.SampleRate = "1024", this.PressMax = "1024", this.Width = 99999, this.Height = 99999, this.DriverVer = "v1.0", this.DeviceID = navigator.appVersion, this.CertInfo = null
	},
	ClientOS = function() {
		this.Name = "WeiXin_" + navigator.platform, this.Edition = navigator.appCodeName, this.ServicePack = "None", this.Version = navigator.appVersion, this.OSArch = "32/64", this.DeviceID = navigator.appVersion
	},
	ImageSize = function(t, e) {
		this.Width = t, this.Height = e, this.Unit = "dp"
	},
	SignatureObj = function() {
		this.Cid = 0, this.SignRule = null, this.Signer = null, this.Image = null, this.ImageSize = null, this.IsTSS = !1, this.Points = null, this.ImageFMT = DataFormat.IMAGE_PNG, this.TimeTag = null
	},
	MassSignObj = function() {
		this.Cid = 0, this.SignRule = null, this.Signer = null, this.Image = null, this.ImageSize = null, this.IsTSS = !1, this.ImageFMT = DataFormat.IMAGE_PNG
	},
	PhotoEvidence = function() {
		this.Format = null, this.Hash = null, this.BioType = null
	},
	SoundEvidence = function() {
		this.Format = null, this.Hash = null, this.BioType = null
	},
	DataObj = function() {
		this.Cid = 0, this.OwnerCid = 0, this.PointHash = null, this.Data = null, this.Name = null, this.Format = null, this.PDFCrdRule = null
	},
	PDFCrdRule = function() {
		this.DocCrdTid = null, this.DocFormat = null, this.DocStyleTid = null
	},
	HWRRoot = function() {
		this.version = "", this.transID = null, this.encKey = null, this.userID = null, this.serviceID = null, this.hwrInfo = null
	},
	HWRInfo = function() {
		this.type = null, this.lang = Language.CHS, this.similar = 100, this.strokes = [], this.text = "", this.hwrNum = null
	},
	HWRResult = function() {
		this.transID = null, this.result = [], this.errCode = null
	},
	CALLBACK_TYPE_SIGNATURE = 1,
	CALLBACK_TYPE_DIALOG_DISMISS = 2,
	CALLBACK_TYPE_DIALOG_CANCEL = 3,
	CALLBACK_TYPE_BUFFER_SAVED = 4,
	CALLBACK_TYPE_ON_PICTURE_TAKEN = 5,
	CALLBACK_TYPE_DATA_DELETED = 6,
	CALLBACK_TYPE_START_RECORDING = 7,
	CALLBACK_TYPE_STOP_RECORDING = 8,
	CALLBACK_TYPE_ON_MEDIA_DATA = 9,
	CALLBACK_TYPE_COMMENTSIGN = 10,
	CALLBACK_TYPE_ERROR = -1,
	CALLBACK_TYPE_ERROR_PICTURE = -2,
	CALLBACK_TYPE_OPERATION_CANCELED = -3,
	CALLBACK_TYPE_GETVERSION = 10,
	RESULT_OK = 0,
	RESULT_ERROR = -1,
	EC_API_NOT_INITED = 1,
	EC_WRONG_CONTEXT_ID = 2,
	EC_CAMERA_INIT_FAILED = 3,
	EC_NATIVE_EXCEPTION = 4,
	EC_DEVICE_NOT_SUPPORTED = 5,
	EC_TEMPLATE_NOT_SET = 6,
	EC_COMMENT_ALREADY_SHOW = 7,
	isCommentShow = !1,
	isMobile = {
		Android: function() {
			return !!navigator.userAgent.match(/Android/i)
		},
		BlackBerry: function() {
			return !!navigator.userAgent.match(/BlackBerry/i)
		},
		iOS: function() {
			return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
		},
		Windows: function() {
			return !!navigator.userAgent.match(/IEMobile/i)
		},
		any: function() {
			return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()
		}
	};
"undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", onBridgeReady, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", onBridgeReady), document.attachEvent("onWeixinJSBridgeReady", onBridgeReady)) : onBridgeReady();
var dbits, canary = 0xdeadbeefcafe,
	j_lm = 15715070 == (16777215 & canary);
j_lm && "Microsoft Internet Explorer" == navigator.appName ? (BigInteger.prototype.am = am2, dbits = 30) : j_lm && "Netscape" != navigator.appName ? (BigInteger.prototype.am = am1, dbits = 26) : (BigInteger.prototype.am = am3, dbits = 28), BigInteger.prototype.DB = dbits, BigInteger.prototype.DM = (1 << dbits) - 1, BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP), BigInteger.prototype.F1 = BI_FP - dbits, BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
	BI_RC = new Array,
	rr, vv;
for(rr = "0".charCodeAt(0), vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
for(rr = "a".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
for(rr = "A".charCodeAt(0), vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
Classic.prototype.convert = cConvert, Classic.prototype.revert = cRevert, Classic.prototype.reduce = cReduce, Classic.prototype.mulTo = cMulTo, Classic.prototype.sqrTo = cSqrTo, Montgomery.prototype.convert = montConvert, Montgomery.prototype.revert = montRevert, Montgomery.prototype.reduce = montReduce, Montgomery.prototype.mulTo = montMulTo, Montgomery.prototype.sqrTo = montSqrTo, BigInteger.prototype.copyTo = bnpCopyTo, BigInteger.prototype.fromInt = bnpFromInt, BigInteger.prototype.fromString = bnpFromString, BigInteger.prototype.clamp = bnpClamp, BigInteger.prototype.dlShiftTo = bnpDLShiftTo, BigInteger.prototype.drShiftTo = bnpDRShiftTo, BigInteger.prototype.lShiftTo = bnpLShiftTo, BigInteger.prototype.rShiftTo = bnpRShiftTo, BigInteger.prototype.subTo = bnpSubTo, BigInteger.prototype.multiplyTo = bnpMultiplyTo, BigInteger.prototype.squareTo = bnpSquareTo, BigInteger.prototype.divRemTo = bnpDivRemTo, BigInteger.prototype.invDigit = bnpInvDigit, BigInteger.prototype.isEven = bnpIsEven, BigInteger.prototype.exp = bnpExp, BigInteger.prototype.toString = bnToString, BigInteger.prototype.negate = bnNegate, BigInteger.prototype.abs = bnAbs, BigInteger.prototype.compareTo = bnCompareTo, BigInteger.prototype.bitLength = bnBitLength, BigInteger.prototype.mod = bnMod, BigInteger.prototype.modPowInt = bnModPowInt, BigInteger.ZERO = nbv(0), BigInteger.ONE = nbv(1), Arcfour.prototype.init = ARC4init, Arcfour.prototype.next = ARC4next;
var rng_psize = 256,
	rng_state, rng_pool, rng_pptr;
if(null == rng_pool) {
	rng_pool = new Array, rng_pptr = 0;
	var t;
	if(window.crypto && window.crypto.getRandomValues) {
		var ua = new Uint8Array(32);
		for(window.crypto.getRandomValues(ua), t = 0; t < 32; ++t) rng_pool[rng_pptr++] = ua[t]
	}
	if("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto) {
		var z = window.crypto.random(32);
		for(t = 0; t < z.length; ++t) rng_pool[rng_pptr++] = 255 & z.charCodeAt(t)
	}
	for(; rng_pptr < rng_psize;) t = Math.floor(65536 * Math.random()), rng_pool[rng_pptr++] = t >>> 8, rng_pool[rng_pptr++] = 255 & t;
	rng_pptr = 0, rng_seed_time()
}
SecureRandom.prototype.nextBytes = rng_get_bytes, RSAKey.prototype.doPublic = RSADoPublic, RSAKey.prototype.setPublic = RSASetPublic, RSAKey.prototype.encrypt = RSAEncrypt, RSAKey.prototype.encryptUint8 = RSAUint8ArrayEncrypt;
var pubN = "804a34826921e240210c856c466267a393a028c913eda945bdf44ddf15abfddab651e2c355a603cfa4a3cbdf359a468096c3a5402a6a3c211494074d3b7a49aeb02f4c8ca27014bb1b0dfa5f52b5cc2eaf27fb49446267751a73bb4f1453b027004915430826c4b45f94ae89906e77003328d558aadc5bf4f06feac3486bce73",
	pubE = "10001",
	encCertSN = "102450000000000001",
	Base64 = {
		_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encodeUint8Array: function(t) {
			for(var e, n = 0, i = t.length, r = "", o = ""; n < i;) {
				for(var a = 0, s = (e = t.subarray(n, Math.min(n + 32768, i))).length; a < s; a++) o += String.fromCharCode(e[a]);
				r += o, n += 32768, o = ""
			}
			return btoa(r)
		},
		decode: function(t) {
			var e, n, i, r, o, a = .75 * t.length,
				s = t.length,
				l = 0;
			"=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
			var c = new ArrayBuffer(a),
				u = new Uint8Array(c);
			for(e = 0; e < s; e += 4) n = lookup[t.charCodeAt(e)], i = lookup[t.charCodeAt(e + 1)], r = lookup[t.charCodeAt(e + 2)], o = lookup[t.charCodeAt(e + 3)], u[l++] = n << 2 | i >> 4, u[l++] = (15 & i) << 4 | r >> 2, u[l++] = (3 & r) << 6 | 63 & o;
			return c
		},
		encode: function(t) {
			var e, n, i, r, o, a, s, l = "",
				c = 0;
			for(t = Base64._utf8_encode(t); c < t.length;) r = (e = t.charCodeAt(c++)) >> 2, o = (3 & e) << 4 | (n = t.charCodeAt(c++)) >> 4, a = (15 & n) << 2 | (i = t.charCodeAt(c++)) >> 6, s = 63 & i, isNaN(n) ? a = s = 64 : isNaN(i) && (s = 64), l = l + this._keyStr.charAt(r) + this._keyStr.charAt(o) + this._keyStr.charAt(a) + this._keyStr.charAt(s);
			return l
		},
		_utf8_encode: function(t) {
			t = t.replace(/\r\n/g, "\n");
			for(var e = "", n = 0; n < t.length; n++) {
				var i = t.charCodeAt(n);
				i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
			}
			return e
		},
		_utf8_decode: function(t) {
			for(var e = "", n = 0, i = 0, r = 0, o = 0; n < t.length;)(i = t.charCodeAt(n)) < 128 ? (e += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (r = t.charCodeAt(n + 1), e += String.fromCharCode((31 & i) << 6 | 63 & r), n += 2) : (r = t.charCodeAt(n + 1), o = t.charCodeAt(n + 2), e += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | 63 & o), n += 3);
			return e
		}
	},
	anysign = (anysign = anysign && {
		logger: {
			openLog: !1,
			e: function(t) {
				anysign.logger.openLog && console.log("anysign error:" + t)
			},
			w: function(t) {
				anysign.logger.openLog && console.log("anysign warning:" + t)
			}
		}
	}) || {
		binary: {
			uint32ArrayToUint8Array: function(t) {
				if(!t) return null;
				for(var e, n = new Uint8Array(4 * t.length), i = 0, r = t.length; i < r; i++) n[e = i << 2] = t[i] >> 24 & 255, n[e + 1] = t[i] >> 16 & 255, n[e + 2] = t[i] >> 8 & 255, n[e + 3] = 255 & t[i];
				return n
			}
		},
		hex: {
			hexEncodeArray: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
			uint8ArrayToHexStr: function(t) {
				if(!t) return null;
				for(var e = "", n = 0; n < t.length; n++) {
					var i = t[n];
					e += this.hexEncodeArray[i >>> 4], e += this.hexEncodeArray[15 & i]
				}
				return e
			},
			hexStrToUint8Array: function(t) {
				if(!t || t.length % 2 != 0) return null;
				for(var e = [], n = 0; n < t.length; n += 2) e.push(parseInt("0x" + t.substr(n, 2), 16));
				return new Uint8Array(e)
			},
			hexStrToUint8Str: function(t) {
				if(!t || t.length % 2 != 0) return null;
				for(var e = "", n = 0; n < t.length; n += 2) e += String.fromCharCode(parseInt("0x" + t.substr(n, 2), 16));
				return decodeURIComponent(escape(e))
			}
		},
		charset: {
			strToUtf8ArrayUint8: function(t) {
				for(var e = unescape(encodeURIComponent(t)), n = new Uint8Array(e.length), i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
				return n
			},
			utf8ArrayUint8ToStr: function(t) {
				for(var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
				return decodeURIComponent(escape(e))
			},
			toUtf8str: function(t) {
				return unescape(encodeURIComponent(t))
			},
			uint8ArrayAscIIToStr: function(t) {
				return String.fromCharCode.apply(null, t)
			},
			strToUint8ArrayAscII: function(t) {
				for(var e = new Uint8Array(t.length), n = 0, i = t.length; n < i; ++n) e[n] = t.charCodeAt(n);
				return e
			}
		},
		zip: {
			compressToB64: function(t) {
				var e = new Zlib.Deflate(t).compress();
				if(e instanceof Array) {
					for(var n = new Uint8Array(e.length), i = 0, r = n.length; i < r; ++i) n[i] = e[i];
					e = n
				}
				return Base64.encodeUint8Array(e)
			}
		},
		json: {
			stringify: function(t) {
				return JSON.stringify(t)
			},
			stringToObj: function(t) {
				return JSON.parse(t)
			}
		},
		digest: {
			crc32: function(t) {
				var e = [];
				if(window.crcTable) e = window.crcTable;
				else {
					for(var n, i = 0; i < 256; i++) {
						n = i;
						for(var r = 0; r < 8; r++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
						e[i] = n
					}
					window.crcTable = e
				}
				for(var o = -1, a = 0; a < t.length; a++) o = o >>> 8 ^ e[255 & (o ^ t.charCodeAt(a))];
				return(-1 ^ o) >>> 0
			}
		}
	};
! function(t) {
	function e() {
		for(var e, n = !0, i = h, r = u.length; i < r && n;)
			if(void 0 !== (e = u[i]) && null !== e) {
				if("string" == typeof e) {
					var o = l.cloneNode(!1);
					o.text = e, c.parentNode.insertBefore(o, c)
				} else e.apply(t);
				u[e = i] = null, h = e + 1, i += 1
			} else n = !1
	}

	function n() {
		if(u.length) {
			var e, i = u.pop();
			"string" == typeof i ? (e = l.cloneNode(!0), e.type = "text/javascript", e.async = !0, e.src = i, e.onload = e.onreadystatechange = function() {
				e.readyState && !/loaded|complete/.test(e.readyState) || (e.onload = e.onreadystatechange = null, e = void 0, n())
			}, c.parentNode.insertBefore(e, c)) : (i.apply(t), n())
		}
	}

	function i(t, n) {
		return function() {
			u[n] = t.responseText, e(), t = void 0
		}
	}
	var r, o, a, s = t.document,
		l = s.createElement("script"),
		c = s.getElementsByTagName("script")[0],
		u = [],
		h = 0;
	t.XMLHttpRequest && (o = new t.XMLHttpRequest, "withCredentials" in o ? a = function(e) {
		return(o = new t.XMLHttpRequest).open("get", e, !0), o
	} : t.XDomainRequest && (a = function(e) {
		return(o = new t.XDomainRequest).open("get", e), o
	})), r = a, t.JcorsLoader = {
		load: r ? function() {
			var t, n, o = arguments.length;
			for(t = 0; t < o; t += 1) "string" == typeof arguments[t] ? (n = r(arguments[t]), n.onload = i(n, u.length), u[u.length] = null, n.send()) : (u[u.length] = arguments[t], e())
		} : function() {
			u.push(Array.prototype.slice.call(arguments, 0).reverse()), n()
		}
	}
}(window);
var points = [],
	firstPointTime = 0,
	signTrack = "",
	signTrachPointCount = 0,
	calculatedSigWidth = 0,
	calculatedSigHeight = 0,
	minX = 9999,
	minY = 9999,
	maxX = 0,
	maxY = 0,
	curX = 0,
	curY = 0,
	lastX = 0,
	lastY = 0,
	paste_padding = 10,
	imageDataTmp, isDown = !1,
	isDrawn = !1,
	isAnysignInputDlgShown = !1,
	isCopyingImg = !1,
	base_stroke_width = window.innerWidth >= 480 ? 7.5 : 5,
	canvas, ctx, signResCallback, signObjTmp, bh_temp = getWindowHeight(),
	bw_temp = getWindowWidth(),
	isSign, sbuilder = [],
	identify_callback, fresh = function() {
		if(isSign) {
			var t = ismobile(1);
			if(1 == t) {
				f = (p = document.getElementById("anysignCanvas")).getContext("2d");
				if(isDrawn) {
					u = (c = document.createElement("canvas")).getContext("2d");
					var e = T = paste_padding,
						n = T,
						i = T,
						r = T;
					(m = minX - T) < 0 && (e = minX, m = 0), (y = minY - T) < 0 && (n = minY, y = 0), (v = maxX + T) > p.width && (i = 0, v = p.width), (w = maxY + T) > p.height && (r = 0, w = p.height), h = maxX - minX + e + i, g = maxY - minY + n + r, d = f.getImageData(m, y, v - m, w - y), c.width = h, c.height = g
				}
				var o = getWindowHeight(),
					a = getWindowWidth();
				(C = document.getElementById("dialog")).style.height = o + "px", C.style.width = a + "px", p.width < 10 && (p.width = a * p.width), p.width < a && (p.width = a), p.height = .65 * o, (b = document.getElementById("container")).style.overflowX = "scroll", b.style.overflowY = "hidden", b.style.height = .65 * o + "px", (_ = document.getElementById("anysign_title")).style.height = .1 * o + "px", document.getElementById("single_scrollbar").style.height = .1 * o + "px", (I = document.getElementById("btnContainerOuter")).style.height = .1 * o + "px"
			} else if(0 == t) {
				if(0 == window.orientation || 180 == window.orientation) o = .9 * getWindowHeight(), a = getWindowWidth();
				else {
					if(getWindowWidth() < 569) s = .75 * getWindowHeight();
					else var s = getWindowHeight();
					var l = getWindowWidth();
					o = s, a = l
				}
				var c, u, h, g, d, p = document.getElementById("anysignCanvas"),
					f = p.getContext("2d");
				if(isDrawn) {
					u = (c = document.createElement("canvas")).getContext("2d");
					var m, y, v, w, T = paste_padding,
						e = T,
						n = T,
						i = T,
						r = T;
					(m = minX - T) < 0 && (e = minX, m = 0), (y = minY - T) < 0 && (n = minY, y = 0), (v = maxX + T) > p.width && (i = 0, v = p.width), (w = maxY + T) > p.height && (r = 0, w = p.height), h = maxX - minX + e + i, g = maxY - minY + n + r, d = f.getImageData(m, y, v - m, w - y), c.width = h, c.height = g
				}
				var C = document.getElementById("dialog");
				if(C.style.height = o + "px", C.style.width = a + "px", p.height = o, p.width < 10 && (p.width = a * p.width), p.width < a && (p.width = a), 0 == window.orientation || 180 == window.orientation) p.height = .7 * p.height, (b = document.getElementById("container")).style.overflowX = "scroll", b.style.overflowY = "hidden", b.style.height = .7 * o + "px", (_ = document.getElementById("anysign_title")).style.height = .1 * o + "px", (I = document.getElementById("btnContainerOuter")).style.height = .2 * o + "px", (S = document.getElementById("btnContainerInner")).style.marginBottom = 0;
				else {
					p.height = .6 * p.height;
					var b = document.getElementById("container");
					b.style.overflowX = "scroll", b.style.overflowY = "hidden", b.style.height = .6 * o + "px";
					var _ = document.getElementById("anysign_title");
					_.style.height = .1 * o + "px";
					var I = document.getElementById("btnContainerOuter");
					I.style.height = .3 * o + "px";
					var S = document.getElementById("btnContainerInner");
					S.style.marginBottom = I.style.height
				}
			}
			null != tmp_canvas && (tmp_canvas.width = p.width, tmp_canvas.height = p.height);
			window.devicePixelRatio && window.devicePixelRatio, p.height;
			if(f.strokeStyle = signObjTmp ? signObjTmp.penColor : "black", f.lineWidth = base_stroke_width, f.lineCap = "round", f.lineJoin = "round", f.shadowBlur = 5, tmp_ctx.strokeStyle = signObjTmp ? signObjTmp.penColor : "black", tmp_ctx.lineWidth = base_stroke_width, tmp_ctx.lineCap = "round", tmp_ctx.lineJoin = "round", tmp_ctx.shadowBlur = 5, !isDrawn) return void tmp_canvas.getContext("2d").clearRect(0, 0, p.width, p.height);
			var D;
			D = p.width > h ? p.height >= g ? 1 : p.height / g : p.width / p.height > h / g ? p.height / g : p.width / h, u.putImageData(d, 0, 0);
			var E = document.createElement("canvas"),
				A = E.getContext("2d");
			E.width = h * D, E.height = g * D, A.scale(D, D), A.drawImage(c, 0, 0), f.clearRect(0, 0, p.width, p.height), f.drawImage(E, 0, 0), minX = 0, minY = 0, maxX *= D, maxY *= D, tmp_canvas.getContext("2d").clearRect(0, 0, p.width, p.height)
		}
	};
window.addEventListener("orientationchange", fresh), window.addEventListener("resize", fresh);
var onPaint = function() {
		if(points.length < 3) {
			var t = points[0];
			return ctx.beginPath(), ctx.strokeStyle = signObjTmp.penColor, ctx.fillStyle = signObjTmp.penColor, ctx.arc(t.x, t.y, ctx.lineWidth / 2, 0, 2 * Math.PI, !0), ctx.fill(), void ctx.closePath()
		}
		ctx.beginPath(), ctx.strokeStyle = signObjTmp.penColor, ctx.fillStyle = signObjTmp.penColor, ctx.moveTo(points[0].x, points[0].y);
		for(var e = 1; e < points.length - 1; e++) {
			var n = (points[e].x + points[e + 1].x) / 2,
				i = (points[e].y + points[e + 1].y) / 2;
			ctx.quadraticCurveTo(points[e].x, points[e].y, n, i)
		}
		ctx.stroke(), ctx.closePath(), isDrawn = !0
	},
	JQuery_Capable = {
		offset: function(t) {
			var e, n, i = {
					top: 0,
					left: 0
				},
				r = t,
				o = r && r.ownerDocument;
			if(o) return e = o.documentElement, void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = JQuery_Capable.getWindow(o), {
				top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
				left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
			}
		},
		getWindow: function(t) {
			return JQuery_Capable.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
		},
		isWindow: function(t) {
			return null != t && t == t.window
		}
	},
	isIe = !!document.all,
	messContent;
! function() {
	function t(t, e) {
		return this.slice(t, e)
	}

	function e(t, e) {
		arguments.length < 2 && (e = 0);
		for(var n = 0, i = t.length; n < i; ++n, ++e) this[e] = 255 & t[n]
	}

	function n(n) {
		var i;
		if("number" == typeof n) {
			i = new Array(n);
			for(var r = 0; r < n; ++r) i[r] = 0
		} else i = n.slice(0);
		return i.subarray = t, i.buffer = i, i.byteLength = i.length, i.set = e, "object" == typeof n && n.buffer && (i.buffer = n.buffer), i
	}
	try {
		new Uint8Array(1);
		return
	} catch(t) {}
	window.Uint8Array = n, window.Uint32Array = n, window.Int32Array = n
}(), "response" in XMLHttpRequest.prototype || "mozResponseArrayBuffer" in XMLHttpRequest.prototype || "mozResponse" in XMLHttpRequest.prototype || "responseArrayBuffer" in XMLHttpRequest.prototype || Object.defineProperty(XMLHttpRequest.prototype, "response", {
		get: function() {
			return new Uint8Array(new VBArray(this.responseBody).toArray())
		}
	}),
	function() {
		if(!("btoa" in window)) {
			var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			window.btoa = function(e) {
				var n, i, r = "";
				for(n = 0, i = e.length; n < i; n += 3) {
					var o = 255 & e.charCodeAt(n),
						a = 255 & e.charCodeAt(n + 1),
						s = 255 & e.charCodeAt(n + 2),
						l = o >> 2,
						c = (3 & o) << 4 | a >> 4,
						u = n + 1 < i ? (15 & a) << 2 | s >> 6 : 64,
						h = n + 2 < i ? 63 & s : 64;
					r += t.charAt(l) + t.charAt(c) + t.charAt(u) + t.charAt(h)
				}
				return r
			}
		}
	}();
var capabal = capabal || {
	crypto: {
		getRandomValues: function(t) {
			var e, n, i = t.length;
			if(i)
				for(; --i;) e = t[n = Math.floor(Math.random() * (i + 1))], t[n] = t[i], t[i] = e;
			return t
		}
	}
};
! function() {
	var t = function() {
			var t = Array.prototype.slice.call(this.getContext("2d").getImageData(0, 0, this.width, this.height).data),
				e = this.width,
				n = this.height,
				i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82];
			Array.prototype.push.apply(i, bytes32(e)), Array.prototype.push.apply(i, bytes32(n)), i.push(8, 6, 0, 0, 0), Array.prototype.push.apply(i, bytes32(crc32(i, 12, 17)));
			for(var r = n * (4 * e + 1), o = 0; o < n; o++) t.splice(o * (4 * e + 1), 0, 0);
			var a = Math.ceil(r / 32768);
			Array.prototype.push.apply(i, bytes32(r + 5 * a + 6));
			var s = i.length,
				l = r + 5 * a + 6 + 4;
			i.push(73, 68, 65, 84, 120, 1);
			for(var c = 0; c < a; c++) {
				var u = Math.min(32768, r - 32768 * c);
				i.push(c == a - 1 ? 1 : 0), Array.prototype.push.apply(i, bytes16sw(u)), Array.prototype.push.apply(i, bytes16sw(~u));
				var h = t.slice(32768 * c, 32768 * c + u);
				Array.prototype.push.apply(i, h)
			}
			return Array.prototype.push.apply(i, bytes32(adler32(t))), Array.prototype.push.apply(i, bytes32(crc32(i, s, l))), i.push(0, 0, 0, 0, 73, 69, 78, 68), Array.prototype.push.apply(i, bytes32(crc32(i, i.length - 4, 4))), "data:image/png;base64," + btoa(i.map(function(t) {
				return String.fromCharCode(t)
			}).join(""))
		},
		e = HTMLCanvasElement.prototype.toDataURL;
	HTMLCanvasElement.prototype.toDataURL = function(n) {
		var i = e.apply(this, arguments);
		return "data:," == i ? (HTMLCanvasElement.prototype.toDataURL = t, this.toDataURL()) : (HTMLCanvasElement.prototype.toDataURL = e, i)
	}
}();

// document.write("<script language=javascript src=\"libs/jquery-1.4.2.min.js\" charset=\"utf-8\"></script>");

// -----------------------------本身值
var core;

function AnySignApi()
{
	//constants
	this.CALLBACK_TYPE_SIGNATURE = 1;//签名框点击确认之后的回调，回调中包含签名快照
	this.CALLBACK_TYPE_DIALOG_DISMISS = 2;//签名框dismiss时的回调
	this.CALLBACK_TYPE_DIALOG_CANCEL = 3;//点击签名框"取消"按钮时的回调，同时也会触发dismiss回调
	this.CALLBACK_TYPE_BUFFER_SAVED = 4;//签名数据缓存成功的回调，目前未用到此功能
	this.CALLBACK_TYPE_ON_PICTURE_TAKEN = 5;//拍照成功回调，回调中包含照片快照
	this.CALLBACK_TYPE_DATA_DELETED = 6;//成功删除数据回调

	this.CALLBACK_TYPE_START_RECORDING = 7;//开始多媒体记录回调
	this.CALLBACK_TYPE_STOP_RECORDING = 8;//结束多媒体记录回调
	this.CALLBACK_TYPE_ON_MEDIA_DATA = 9;//多媒体数据处理完毕，回传给js的回调，回调函数的data参数为多媒体数据

	this.CALLBACK_TYPE_COMMENTSIGN = 10;//批注签名框点击确认之后的回调，回调中包含签名快照

	this.CALLBACK_TYPE_ERROR = -1;//发生错误时的回调，错误信息如以下EC_XXX定义
	this.CALLBACK_TYPE_ERROR_PICTURE = -2;//在处理照片时发生异常，具体信息见value字段
	this.CALLBACK_TYPE_OPERATION_CANCELED = -3;//用户取消操作，如取消拍照

	this.CALLBACK_TYPE_GETVERSION = 10;//获得版本号
	//functions return value
	this.RESULT_OK = 0;//操作成功
	this.RESULT_ERROR = -1;//操作失败
	this.EC_API_NOT_INITED = 1;//接口未初始化错误
	this.EC_WRONG_CONTEXT_ID = 2;//context_id传值错误
	this.EC_CAMERA_INIT_FAILED = 3;//摄像头初始化失败，通常重启设备可以解决
	this.EC_NATIVE_EXCEPTION = 4;//浏览器内部错误，可至Android/sdcard/AnySign/lastCrash.txt中查询具体错误
	this.EC_DEVICE_NOT_SUPPORTED = 5;//当前设备不被浏览器支持，只能调用浏览器功能，信手书模块功能禁用
    this.EC_TEMPLATE_NOT_SET = 6;//当没有配置模板时试图调用签名时弹出，因为不能对空数据做签名

	/**
	 * 初始化签名对象，通常从打开客户端到关闭客户端，中间只需要初始化一次。
	 * 要求回调函数至少有3个参数，参数定义如下面callback参数定义
	 * @param callback Function with 3 params(int context_id, int callback_type, String data)
	 * @param channel Function with 3 params(int context_id, int callback_type, String data)
	 * @returns {boolean} 是否初始化成功以及是否回调函数参数满足要求
	 */
	this.initAnySignApi = function(callback,channel)
	{
		if(callback && (callback instanceof Function) && callback.length >= 3)
		{
            core = new anysignWebImpl();
            core._initAnySignApi(callback, channel);
			return true;
		}
		else
		{
			return false;
		}
	}

    this.addDataObj = function(context_id, dataConfig)
    {
        if(!dataConfig instanceof DataConfig)
        {
            return false;
        }

        return core._addDataObj(context_id, dataConfig);
    }

//  /**
//   * 添加识别参数
//   */
//  this.startOCR = function(ocrCapture)
//  {
//  	return core._startOCR(ocrCapture);
//  }

	/**
	 * 配置一个签名，context_id区间为[20,30)，20~29为普通签名，30~39为多字批示。
	 * 根据signatureConfig配置签字相应属性。
	 * @param context_id 签字对象唯一标识
	 * @param signatureConfig 签字配置信息
	 * @returns {boolean}
	 */
	this.addSignatureObj = function(context_id, signatureConfig)
	{
		if(!signatureConfig instanceof SignatureConfig)
			return false;

        return core._addSignatureObj(context_id, signatureConfig);
	}


    /**
     * 配置一个批注签名，context_id区间为[30,40)，[300,400),20~29为普通签名，30~39为多字批示。
     * 根据signatureConfig配置签字相应属性。
     * @param context_id 签字对象唯一标识
     * @param signatureConfig 签字配置信息
     * @returns {boolean}
     */
    this.addCommentObj = function(context_id, signatureConfig)
    {
        if(!signatureConfig instanceof SignatureConfig)
            return false;

        return core._addCommentObj(context_id, signatureConfig);
    }



	/**

	*jane

	*/

	this.addEvidence = function(context_id, content, format, bioType,index)

	{

		return core._addEvidence(context_id, content, format, bioType,index);

	}

	/**
	 * 添加证据hash值
	 * content：为Hash计算之后的值
	 */
	this.addEvidenceHash = function(context_id, content, format, bioType,index)
	{
		return core._addEvidenceHash(context_id, content, format, bioType,index);
	}


	/**
	 * 配置一个公司签章
	 * @param signatureConfig 公司签章对象
	 * @returns {boolean}
	 */
	this.addCachetObj = function(cachetConfig)
	{
        if(!(cachetConfig instanceof CachetConfig))
        {
            return false;
        }

		return core._addChachetObj(cachetConfig);
	}

	/**
	 * 暂未实现
	 * 配置一个拍照对象，在#commitConfig()之前可以调用，context_id区间为[50,1000)
	 * @param context_ids 对象id数组，适用于多个相同配置的签字对象
	 * @param photoConfig 照片的配置信息
	 * @returns {boolean} 是否添加成功：true：成功；false：配置文件格式错误、context_ids不是数组或者长度为0
	 */
	this.addPhotoObj = function(context_id, photoConfig)
	{
		if(!(photoConfig instanceof PhotoConfig))
			return false;

		return true;
	}

	/**
	 * 暂未实现
	 * 配置一个多媒体对象，在#commitConfig()之前可以调用，context_id区间为[50,1000)
	 * @param context_ids 对象id数组，适用于多个相同配置的签字对象
	 * @param mediaConfig 多媒体的配置信息
	 * @returns {boolean} 是否添加成功：true：成功；false：配置文件格式错误、context_ids不是数组或者长度为0
	 */
	this.addMediaObj = function(context_id, mediaConfig)
	{
		if(!(mediaConfig instanceof MediaConfig))
			return false;

		return true;
	}

	/**
	 * 设置表单数据，每次业务都需要set一次
	 * @param template_type 签名所用的模板id, 即context id
	 * @param contentUtf8Str 表单数据，类型为Utf8字符串
	 * @param template_serial 模板序列号
	 * @param businessId 业务工单号
	 * @returns {*} 是否设置成功
	 */
	this.setTemplate = function(template_type, contentUtf8Str,businessId,template_serial)
	{
		if(core)
			return core._setTemplate(template_type, contentUtf8Str, businessId, template_serial);
		else
			return false;
	}

    this.setTID = function(tid)
    {
        return core._setTID(tid);
    }

    /**
     *
     * @param context_id
     * @param data utf8字符串或者uint8Array数组
     * @returns {*} 是否设置成功
     */
    this.setData = function(context_id, data)
    {
        return core._setData(context_id, data);
    }

	/**
	 * 弹出根据context_id区分的普通、批示签名
	 * @param context_id
	 * @return 是否成功弹出：成功：0 错误：相应EC错误码定义
	 */
	this.showSignatureDialog = function(context_id)
	{
		return core._showSignatureDialog(context_id);
	}

    /**
     * 弹出根据context_id区分的普通、批示签名
     * @param context_id
     * @return 是否成功弹出：成功：0 错误：相应EC错误码定义
     */
    this.showCommentDialog = function(context_id)
    {
        return core._showCommentDialog(context_id);
    }

    this.setIdentifyCallBack = function(callBack){
    	return core._setIdentifyCallBack(callBack);
    }

//	/**
//	 * 根据context_id，对指定对象做拍照请求
//	 * @param context_id
//	 * return int
//	 */
//	this.takePicture = function(context_id)
//	{
//		return false;
//	}
//
//	/**
//	 * 根据context_id，对指定对象开始做视频、音频录制等
//	 * @param context_id
//	 * return int
//	 */
//	this.startMediaRecording = function(context_id)
//	{
//		return false;
//	}
//
//	/**
//	 * 结束指定多媒体录制，结果将通过回调返回
//	 * @param context_id
//	 * return int
//	 */
//	this.finishMediaRecording = function(context_id)
//	{
//		return false;
//	}


	/**
	 * 提交更改，一旦调用，在本次签名流程中不允许再设置表单数据(setTableData)和签名、拍照配置等信息
	 */
	this.commitConfig = function()
	{
        return core._commitConfig();
	}

	/**
	 * 重新配置Api，调用之后可以设置表单数据(setTableData)和签名、拍照配置等信息
	 * 注：前一次业务的签名、拍照等数据会被清空
	 */
	this.resetConfig = function()
	{
		return core._resetConfig();
	}


	/**
	 * 一次业务完成(签名、拍照均做完)后，调用此接口判断上传诗句是否准备就绪
	 * @return ture false
	 */
	this.isReadyToUpload = function()
	{
		return core._isReadyToUpload();
	}


	/**
	 * 一次业务完成(签名、拍照均做完)后，调用此接口获取须上传至信手书服务器的业务加密数据
	 * @return 加密的业务数据。如果
	 */
	this.getUploadDataGram = function()
	{
		return core._getUploadDataGram();
	}

    /**
     * add by han 20151217
     * 保存当前的数据
     * @return 加密的业务数据。
     */
    this.saveBusiness = function(encKey)
    {
        return core._saveBusinessSession(encKey);
    }
    /**
     * add by han 20151217
     * 恢复之前保存的加密业务数据
     */
    this.restoreBusiness = function(encData, desKey)
    {
        return core._restoreBusinessSession(encData, desKey);
    }

    /**
     * 保存当前的数据
     * @return 加密的业务数据。
     */
    this.getUploadDataGram = function()
    {
        return core._getUploadDataGram();
    }

	/**
	 * 获得版本信息
	 * @param null
	 * @returns null
	 */
	this.getVersion = function()
	{
		return "AnySign_V1.3.3_Web_2.3.0";
	}

    /**
     * 获取操作系统信息，格式为"操作系统名##版本号"，如"android##4.1.2"、"ios##7.1.2"
     * @returns {*}
     */
    this.getOSInfo = function()
    {
        return core._getOSInfo();
    }
}

    /**
     * 信手书数据容器，用于存放证据信息等数据
     * @constructor
     */
    function DataConfig()
    {
        this.cid = 0;
        this.name = null;//此数据项的名称
        this.format = null;
        this.nessesary = true;//此DataObj是否为必须，即如果此DataObj数据为空，当nessesary为true时，getEncodedSignData会报错返空，isReadyToUpload返回false
    }

/**
 * 拍照配置对象，用于为此次签名事务添加一个拍照
 * @constructor
 */
//function PhotoConfig()
//{
//    this.cid = 0;
//    this.width = 640;//int px
//    this.height = 480;//int px
//    this.median = false;//bool 二值化过滤是否开启，启用二值化，图片尺寸会显著降低，但在某些光照不充足条件下中值取值会不准确
//    this.mono = true;//bool 黑白过滤是否开启，当median为true时，此选项无效
//    this.quality = 85//int 0~100 推荐85
//    this.openFromGallery = false;//是否从相册选择照片
//    this.applyConfigOnGalleryPic = true;//当openFromGallery为true时有效。表示是否将width等配置信息应用于画廊图片。如为false，则使用画廊原始图片
//    this.encodeToDataGram = true;//是否将数据添加到加密数据包中
//}

/*function MediaConfig()
 {
 this.cid = 0;
 this.mediaType = "audio";//支持类型：audio、video
 this.mediaFormat = "wav";//支持类型：mpeg4、3gp、wav
 this.duration = 10;//时长，单位：秒
 this.useBuiltInUI = true;
 this.encodeToDataGram = true;//是否将数据添加到加密数据包中
 }*/


 /**
 * 签名配置，配合AnySignApi实例的addSignatureObj函数为此次签名事务添加一个签名
 * @param signer 签名人，参考Signer定义
 * @param signRule 签名规则，参考SignRule_Tid等SignRule定义
 * @constructor
 */
function SignatureConfig(signer, signRule)
{
    if(!signer || !signRule)
    {
        throw "SignatureConfig constructor parameter signer or signRule could not be null.";
    }

    if(!(signRule instanceof SignRule_KeyWord) && !(signRule instanceof SignRule_Tid) && !(signRule instanceof SignRule_XYZ)
        && !(signRule instanceof SignRule_KeyWordV2) && !(signRule instanceof SignRule_KeyWordV3))
    {
        throw  "SignatureConfig constructor parameter signRule invalid, should be instance of SignRule_KeyWord or SignRule_Tid or SignRule_XYZ";
    }

    this.signer = signer;//签名人信息，为必填项

    this.signRule = signRule;//签名放置到文档中的规则，如位置，大小等，为必填项

   // this.title = "本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。";//批示输入有效，批示内容
    this.cid = 0;
    this.title = "请投保人刘伟签名";//签字输入有效，签字框标题
    this.titleSpanFromOffset = 4;//当为普通签名时有效，表示title中需要放大显示字体的数组起始index
    this.titleSpanToOffset = 5;//当为普通签名时有效，表示title中需要放大显示字体的数组结束index

    this.isTSS = false;
    this.nessesary = false;//是否为必签项
//    this.dlgXoffset = 0;//(只针对签名)弹出框相对于屏幕正中位置x偏移量，默认为0
//    this.dlgYoffset = 0;//(只针对签名)弹出框相对于屏幕正中位置y偏移量，默认为0
//    this.antialias = true;//(只针对签名)是否开启字迹抗锯齿算法
    this.singleWidth = 500;//(只针对签名)生成的签字最大宽度(不排除实际签名宽度小于此值)，单位像素
    this.singleHeight = 500;//(只针对签名)生成的签字最大高度(不排除实际签名高度小于此值)，单位像素
    this.penColor = "#000000";//RGB，默认为黑色，每通道为0~255的16进制值，如#ffffff为白色
    this.signatureImgRatio = 1.0;//保存到加密包中的图片 相对于设置大小的倍数 如设置为100*160，该值为2.0时，则保存图片为100*2.0 *160*2.0，该值越大，则生成PDF中的签名越清晰，并且所占空间越大
    /////////////////////////deprecated

    this.timeTag = null;//签名人信息，为必填项, 1:时间在上、2：时间在下、3：时间在右
    this.isdistinguish = false;//是否开启识别
    this.ocrCapture = null;//识别参数

}

/**
 * 批注的配置信息
 * @param signer
 * @param signRule
 * @constructor
 */
function CommentConfig(signer, signRule)
{
    if(!signer || !signRule)
    {
        throw "CommentConfig constructor parameter signer or signRule could not be null.";
    }

    if(!(signRule instanceof SignRule_KeyWord) && !(signRule instanceof SignRule_Tid) && !(signRule instanceof SignRule_XYZ)
        && !(signRule instanceof SignRule_KeyWordV2) && !(signRule instanceof SignRule_KeyWordV3))
    {
        throw  "SignatureConfig constructor parameter signRule invalid, should be instance of SignRule_KeyWord or SignRule_Tid or SignRule_XYZ";
    }

    this.signer = signer;//签名人信息，为必填项
    this.signRule = signRule;//签名放置到文档中的规则，如位置，大小等，为必填项
    this.cid = 30;
    this.commitment = "本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。";
    this.mass_words_in_single_line = 25;
    this.mass_word_height = 75;
    this.mass_word_width = 50;
    this.penColor = "#000000";//RGB，默认为黑色，每通道为0~255的16进制值，如#ffffff为白色
    this.nessesary = false;//是否为必签项
    this.isdistinguish = false;//是否开启识别
    this.ocrCapture = null;//识别参数
    this.isShowBgText = true;
    this.currentEditBarTextColor = "#FF0000"

}


function OCRCapture()
{
	this.text = "a";

	this.IPAdress = "";

	this.appID = "";

	this.serviceID = "";

	this.resolution = 80;

	this.language = Language.CHS;

	this.count = 10;
}

/**
 * 单位签章对象，配合AnySignApi实例的addCachetObj配置一个单位签章
 * @param signer 签名人，参考Signer
 * @param signRule 签名规则，参考SignRule_KeyWord和SignRule_Tid
 * @param isTss bool, 是否加盖时间戳，默认为false
 * @constructor
 */
function CachetConfig(signer, signRule, isTss)
{
    if(!(signer instanceof Signer))
    {
        throw "CachetConfig constructor parameter signer invalid";
    }
    this.Signer = signer;

    if(!(signRule instanceof SignRule_KeyWord) && !(signRule instanceof SignRule_Tid) && !(signRule instanceof SignRule_XYZ)
        && !(signRule instanceof SignRule_KeyWordV2) && !(signRule instanceof SignRule_KeyWordV3))
    {
        throw  "CachetConfig constructor parameter signRule invalid, should be instance of SignRule_KeyWord or SignRule_Tid or SignRule_XYZ";
    }
    this.SignRule = signRule;

    this.IsTSS = isTss;
}


/**
 * 关键字定位方式，寻找PDF中的关键字，根据关键字位置放置签名图片
 * @param keyword 关键字
 * @param keyWordAlignMethod 签字图片和关键字位置关系：等于1时，签字图片和关键字矩形重心重合
 *                            等于2时，签字图片位于关键字正下方，中心线对齐；等于3时，签字图片位于关键字正右方，中心线对齐；
 *                            等于4时，签字图片左上角和关键字右下角重合，可能额外附加偏移量，详见构造函数的offset参数
 * @param keyWordOffset 当keyWordAlignMethod非零时，额外附加的偏移量，单位pt
 * @param pageNo 寻找关键字的PDF起始页码
 * @param KWIndex KWIndex 第几个关键字
 * @constructor
 */
var SignRule_KeyWord = function(keyword, keyWordAlignMethod, keyWordOffset, pageNo, KWIndex)
{
    if(!keyword || keyword.length === 0)
    {
        throw "SignRule_KeyWordV2 constructor parameter keyword could not be null or empty";
    }

    if(keyWordAlignMethod !== 1 && keyWordAlignMethod !== 2 && keyWordAlignMethod !== 3 && keyWordAlignMethod != 4)
    {
        throw "SignRule_KeyWord constructor parameter keyWordAlignMethod invalid, should be one of '1' '2' '3' '4'";
    }

    this.RuleType = "0";

    if(!isNaN(pageNo) && !isNaN(keyWordOffset) && !isNaN(KWIndex))
    {
        this.KWRule = {KW:keyword, KWPos:keyWordAlignMethod, KWOffset:keyWordOffset, Pageno:pageNo,KWIndex:KWIndex, XOffset:0, YOffset:0};
    }
}



/**
   *根据关键字定位签名位置
   * @param keyWord 关键字字面值
   * @param xOffset X轴偏移量，适配关键字和规则
   * @param yOffset Y轴偏移量，适配关键字和规则
   * @param pageNo 签名在PDF中的页码，第几页查找关键字，正数为正序，当是负数为倒序
   * @param KWIndex KWIndex 第几个关键字
   * @constructor  批注暂不支持
   */
var SignRule_KeyWordV2 = function(keyword, xOffset, yOffset, pageNo,  KWIndex){
    if(!keyword || keyword.length === 0)
    {
        throw "SignRule_KeyWordV2 constructor parameter keyword could not be null or empty";
    }
    this.RuleType = "0";

    if(!isNaN(pageNo) && !isNaN(KWIndex))
    {
        this.KWRule = {KW:keyword, KWPos: 0,KWOffset:0,XOffset:xOffset, YOffset:yOffset, Pageno :pageNo,KWIndex:KWIndex};
    }

}

/**
 * 使用服务器规则配置签名
 * @param tid 服务器端生成的配置规则
 * @constructor
 */
var SignRule_Tid = function(tid)
{
    if(!tid || tid.length === 0)
    {
        throw "SignRule_Tid constructor parameter tid could not be null or empty";
    }

    this.RuleType = "2";

    this.Tid = tid;
}

/**
 * 根据坐标定位签名方式
 * @param left 签名图片最左边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param top 签名图片顶边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param right 签名图片最右边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param bottom 签名图片底边坐标值，相对于PDF当页最左下角(0,0)点，向上和向右分别为X轴、Y轴正方向
 * @param pageNo 签名在PDF中的页码，从1开始
 * @param unit 坐标系单位，目前支持"dp"和"pt"
 * @constructor
 */
var SignRule_XYZ = function(left, top, right, bottom, pageNo, unit)
{
    if(isNaN(left) || isNaN(top) || isNaN(right) || isNaN(bottom) || isNaN(pageNo))
    {
        throw "SignRule_XYZ constructor parameter invalid, only float or int permitted";
    }

    if(right < left)
    {
        throw "SignRule_XYZ constructor left must be less than right"
    }

    if(top < bottom)
    {
        throw "SignRule_XYZ constructor top must not be less than bottom"
    }

    if(!unit || (unit !== "pt" && unit !== "dp"))
    {
        throw "SignRule_XYZ constructor parameter unit can only be 'dp' or 'pt'";
    }

    this.RuleType = "1";

    this.XYZRule = {Left:left, Top:top, Right:right, Bottom:bottom, Pageno:pageNo, Unit:unit};
}

var Signer = function(name, id_num)
{
    if(!name || !id_num || name.length === 0 || id_num.length === 0)
    {
        throw "Signer constructor parameter name and id could not be null or empty";
    }

    this.UName = name;

    this.IDNumber = id_num;

    this.IDType = "1";
}

var TimeTag = function(position, format)
{
    if(!position || !format || position.length === 0 || format.length === 0)
    {
        throw "TimeTag constructor parameter { and position could not be null or empty";
    }

    this.Pos = position;//1:时间在上、2：时间在下、3：时间在右

    this.Format = format;
}

//用于DataConfig的format项，当此项为多媒体时使用，其它情况format项为null即可
var DataFormat =
{
    IMAGE_GIF : "image/gif",
    IMAGE_JPEG : "image/jpeg",
    IMAGE_PNG : "image/png",
    MEDIA_AU : "media/au",
    MEDIA_AIFF : "media/aiff",
    MEDIA_WAVE : "media/wave",
    MEDIA_MIDI : "media/midi",
    MEDIA_MP4 : "media/mp4",
    MEDIA_M4V : "media/m4v",
    MEDIA_3G2 : "media/3g2",
    MEDIA_3GP2 : "media/3gp2",
    MEDIA_3GP : "media/3gp",
    MEDIA_3GPP : "media/3gpp"
}

var TemplateType =
{
    XML : 10,
    HTML : 11,
    PDF : 12,
    JSON : 13,
    PRESERVED : 19
};

var EncAlgType =
{
    EncAlg : "RSA"
};

var BioType =
{
    /** 签名人居民身份证正面 **/
    PHOTO_SIGNER_IDENTITY_CARD_FRONT : 0,
    /** 签名人居民身份证背面 **/
    PHOTO_SIGNER_IDENTITY_CARD_BACK : 1,
    /** 签名人复述录音 **/
    SOUND_SIGNER_RETELL : 2,
    /** 签名人自定义录音 **/
    SOUND_SIGNER_OTHER : 3
};

var Language =
{
	CHS : 1,
	CHT : 2
}

export {AnySignApi, EncAlgType, OCRCapture, Language, BioType, TemplateType, DataFormat, Signer,SignRule_XYZ,SignatureConfig,CommentConfig,SignRule_Tid,CachetConfig,TimeTag,sign_confirm,clear_canvas,cancelSign}
