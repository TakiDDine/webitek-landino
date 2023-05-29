// !*****************************

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});

/*! @license ScrollReveal v4.0.0

	Copyright 2018 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
var ScrollReveal=function(){"use strict";var r={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!0,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},n={clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}};function o(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}function u(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(o);if(o(e))return[e];if(n=e,i=Object.prototype.toString.call(n),"object"==typeof window.NodeList?n instanceof window.NodeList:null!==n&&"object"==typeof n&&"number"==typeof n.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(i)&&(0===n.length||o(n[0])))return Array.prototype.slice.call(e);var n,i;if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch(e){return[]}return[]}function s(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(n,i){if(s(n))return Object.keys(n).forEach(function(e){return i(n[e],e,n)});if(n instanceof Array)return n.forEach(function(e,t){return i(e,t,n)});throw new TypeError("Expected either an array or object literal.")}function h(e){for(var t=[],n=arguments.length-1;0<n--;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n — "+e}),console.log(i,"color: #ea654b;")}}function t(){var n=this,i={active:[],stale:[]},t={active:[],stale:[]},r={active:[],stale:[]};try{f(u("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(e){throw e}f(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),f(i.stale,function(e){return delete n.store.elements[e]}),f(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===t.active.indexOf(e.sequence.id)&&t.active.push(e.sequence.id)}),f(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),f(r.stale,function(e){var t=n.store.containers[e].node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate),delete n.store.containers[e]}),f(this.store.sequences,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),f(t.stale,function(e){return delete n.store.sequences[e]})}function p(e){var i,r=this;try{f(u(e),function(e){var t=e.getAttribute("data-sr-id");if(null!==t){i=!0;var n=r.store.elements[t];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),e.setAttribute("style",n.styles.inline.generated),e.removeAttribute("data-sr-id"),delete r.store.elements[t]}})}catch(e){return h.call(this,"Clean failed.",e.message)}if(i)try{t.call(this)}catch(e){return h.call(this,"Clean failed.",e.message)}}function N(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=z();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function z(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function F(e,t){for(var n=N(e),i=N(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var c=4*a,l=[i[c],i[c+1],i[c+2],i[c+3]],d=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];r[o+c]=d}return r}function D(e,t){var n=z();return n[0]=e,n[5]="number"==typeof t?t:e,n}var S=function(){var n={},i=document.documentElement.style;function e(e,t){if(void 0===t&&(t=i),e&&"string"==typeof e){if(n[e])return n[e];if("string"==typeof t[e])return n[e]=e;if("string"==typeof t["-webkit-"+e])return n[e]="-webkit-"+e;throw new RangeError('Unable to find "'+e+'" style property.')}throw new TypeError("Expected a string.")}return e.clearCache=function(){return n={}},e}();function m(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c,l,d,u,f,h,p,m,y,v,g,b=parseFloat(t.opacity),w=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),E={computed:b!==w?"opacity: "+b+";":"",generated:b!==w?"opacity: "+w+";":""},j=[];if(parseFloat(i.distance)){var T="top"===i.origin||"bottom"===i.origin?"Y":"X",O=i.distance;"top"!==i.origin&&"left"!==i.origin||(O=/^-/.test(O)?O.substr(1):"-"+O);var k=O.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),x=k[0];switch(k[1]){case"em":O=parseInt(t.fontSize)*x;break;case"px":O=x;break;case"%":O="Y"===T?e.node.getBoundingClientRect().height*x/100:e.node.getBoundingClientRect().width*x/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===T?j.push((c=O,(l=z())[13]=c,l)):j.push((s=O,(a=z())[12]=s,a))}i.rotate.x&&j.push((d=i.rotate.x,u=Math.PI/180*d,(f=z())[5]=f[10]=Math.cos(u),f[6]=f[9]=Math.sin(u),f[9]*=-1,f)),i.rotate.y&&j.push((h=i.rotate.y,p=Math.PI/180*h,(m=z())[0]=m[10]=Math.cos(p),m[2]=m[8]=Math.sin(p),m[2]*=-1,m)),i.rotate.z&&j.push((y=i.rotate.z,v=Math.PI/180*y,(g=z())[0]=g[5]=Math.cos(v),g[1]=g[4]=Math.sin(v),g[4]*=-1,g)),1!==i.scale&&(0===i.scale?j.push(D(2e-4)):j.push(D(i.scale)));var A={};if(j.length){A.property=S("transform"),A.computed={raw:t[A.property],matrix:function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return N(t[2].split(", ").map(parseFloat))}return z()}(t[A.property])},j.unshift(A.computed.matrix);var R=j.reduce(F);A.generated={initial:A.property+": matrix3d("+R.join(", ")+");",final:A.property+": matrix3d("+A.computed.matrix.join(", ")+");"}}else A.generated={initial:"",final:""};var q={};if(E.generated||A.generated.initial){q.property=S("transition"),q.computed=t[q.property],q.fragments=[];var P=i.delay,I=i.duration,L=i.easing;E.generated&&q.fragments.push({delayed:"opacity "+I/1e3+"s "+L+" "+P/1e3+"s",instant:"opacity "+I/1e3+"s "+L+" 0s"}),A.generated.initial&&q.fragments.push({delayed:A.property+" "+I/1e3+"s "+L+" "+P/1e3+"s",instant:A.property+" "+I/1e3+"s "+L+" 0s"}),q.computed&&!q.computed.match(/all 0s/)&&q.fragments.unshift({delayed:q.computed,instant:q.computed});var M=q.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});q.generated={delayed:q.property+": "+M.delayed+";",instant:q.property+": "+M.instant+";"}}else q.generated={delayed:"",instant:""};return{inline:r,opacity:E,position:n,transform:A,transition:q}}function c(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?function(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant);e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter(function(e){return""!==e}).join(" ")),a.call(this,e,t)}.call(this,e,i):t.reset||o?function(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" ")),a.call(this,e)}.call(this,e):void 0}function a(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&p.call(n,e.node)},i-s)}}var e,y=(e=0,function(){return e++});function l(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return c.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new d(n,"visible",this.store),o=new d(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return g.call(this,n,r.body[0],-1,t),g.call(this,n,r.body[0],1,t),c.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return g.call(this,n,i,-1,t),c.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return g.call(this,n,i,1,t),c.call(this,e,{reveal:!0,pristine:t})}}function v(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=y(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function d(e,i,r){var o=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(e,t){var n=r.elements[e];n&&n[i]&&o.body.push(t)}),this.body.length&&f(e.members,function(e,t){var n=r.elements[e];n&&!n[i]&&(t<o.body[0]?o.head.push(t):o.foot.push(t))})}function g(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&l.call(r,a,i)},e.interval)}function b(){var n=this;t.call(this),f(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final)):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial)),e.node.setAttribute("style",t.filter(function(e){return""!==e}).join(" "))}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.addEventListener("scroll",n.delegate),t.addEventListener("resize",n.delegate)}),this.delegate(),this.initTimeout=null}function w(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function E(n){for(var e=[],t=arguments.length-1;0<t--;)e[t]=arguments[t+1];if(s(n))return f(e,function(e){f(e,function(e,t){s(e)?(n[t]&&s(n[t])||(n[t]={}),E(n[t],e)):n[t]=e})}),n;throw new TypeError("Target must be an object literal.")}function i(e,a,t){var c=this;void 0===a&&(a={}),void 0===t&&(t=!1);var l,d=[],n=a.interval||r.interval;try{n&&(l=new v(n));var i=u(e);if(!i.length)throw new Error("Invalid reveal target.");f(i.reduce(function(e,t){var n={},i=t.getAttribute("data-sr-id");i?(E(n,c.store.elements[i]),n.node.setAttribute("style",n.styles.inline.computed)):(n.id=y(),n.node=t,n.seen=!1,n.revealed=!1,n.visible=!1);var r=E({},n.config||c.defaults,a);if(!r.mobile&&w()||!r.desktop&&!w())return i&&p.call(c,n),e;var o,s=u(r.container)[0];if(!s)throw new Error("Invalid container.");return s.contains(t)&&(null===(o=function(t){var e=[],n=arguments.length-1;for(;0<n--;)e[n]=arguments[n+1];var i=null;return f(e,function(e){f(e,function(e){null===i&&e.node===t&&(i=e.id)})}),i}(s,d,c.store.containers))&&(o=y(),d.push({id:o,node:s})),n.config=r,n.containerId=o,n.styles=m(n),l&&(n.sequence={id:l.id,index:l.members.length},l.members.push(n.id)),e.push(n)),e},[]),function(e){(c.store.elements[e.id]=e).node.setAttribute("data-sr-id",e.id)})}catch(e){return h.call(this,"Reveal failed.",e.message)}f(d,function(e){c.store.containers[e.id]={id:e.id,node:e.node}}),l&&(this.store.sequences[l.id]=l),!0!==t&&(this.store.history.push({target:e,options:a}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(b.bind(this),0))}var j,T=Math.sign||function(e){return(0<e)-(e<0)||+e},O=(j=Date.now(),function(e){var t=Date.now();16<t-j?e(j=t):setTimeout(function(){return O(e)},0)}),k=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||O;function x(e,t){for(var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent;);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function A(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),k(function(){var n="init"===e.type||"resize"===e.type;f(i.store.containers,function(e){n&&(e.geometry=x.call(i,e,!0));var t=function(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}.call(i,e);e.scroll&&(e.direction={x:T(t.left-e.scroll.left),y:T(t.top-e.scroll.top)}),e.scroll=t}),f(t,function(e){n&&(e.geometry=x.call(i,e)),e.visible=function(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&u<o&&c<s&&a<l||"fixed"===e.styles.position}}.call(i,e)}),f(t,function(e){e.sequence?l.call(i,e):c.call(i,e)}),i.pristine=!1})}var R,q,P,I,L,M,C,W,Y="4.0.0";function $(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==$.prototype)return new $(e);if(!$.isSupported())return h.call(this,"Instantiation failed.","This browser is not supported."),n;try{t=E({},M||r,e)}catch(e){return h.call(this,"Instantiation failed.","Invalid configuration.",e.message),n}try{if(!u(t.container)[0])throw new Error("Invalid container.");if(!t.mobile&&w()||!t.desktop&&!w())throw new Error("This device is disabled.")}catch(e){return h.call(this,"Instantiation failed.",e.message),n}return M=t,document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"}),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,R=R||A.bind(this),q=q||function(){var n=this;f(this.store.elements,function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(e){var t=e.node===document.documentElement?window:e.node;t.removeEventListener("scroll",n.delegate),t.removeEventListener("resize",n.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}.bind(this),P=P||i.bind(this),I=I||p.bind(this),L=L||function(){var t=this;f(this.store.history,function(e){i.call(t,e.target,e.options,!0)}),b.call(this)}.bind(this),Object.defineProperty(this,"delegate",{get:function(){return R}}),Object.defineProperty(this,"destroy",{get:function(){return q}}),Object.defineProperty(this,"reveal",{get:function(){return P}}),Object.defineProperty(this,"clean",{get:function(){return I}}),Object.defineProperty(this,"sync",{get:function(){return L}}),Object.defineProperty(this,"defaults",{get:function(){return M}}),Object.defineProperty(this,"version",{get:function(){return Y}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),W||(W=this)}return $.isSupported=function(){return("transform"in(t=document.documentElement.style)||"WebkitTransform"in t)&&("transition"in(e=document.documentElement.style)||"WebkitTransition"in e);var e,t},Object.defineProperty($,"debug",{get:function(){return C||!1},set:function(e){return C="boolean"==typeof e?e:C}}),$(),$}();
//* 


(function () {
    const doc = document.documentElement
  
    doc.classList.remove('no-js')
    doc.classList.add('js')
  
    // Reveal animations
    if (document.querySelector(".has-animations")) {

    /* remove class light */
    document.querySelector(".has-animations").classList.remove("light")

      /* global ScrollReveal */
      const sr = window.sr = ScrollReveal()
  
      sr.reveal('.feature, .testimonial', {
        duration: 600,
        distance: '50px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 100
      })
  
      /* global anime */
      const heroAnimation = anime.timeline({ autoplay: false })
      const strokedElement = document.querySelector('.stroke-animation')
  
      strokedElement.setAttribute('stroke-dashoffset', anime.setDashoffset(strokedElement))
  
      heroAnimation.add({
        targets: '.stroke-animation',
        strokeDashoffset: {
          value: 0,
          duration: 2000,
          easing: 'easeInOutQuart'
        },
        strokeWidth: {
          value: [0, 2],
          duration: 2000,
          easing: 'easeOutCubic'
        },
        strokeOpacity: {
          value: [1, 0],
          duration: 1000,
          easing: 'easeOutCubic',
          delay: 1000
        },
        fillOpacity: {
          value: [0, 1],
          duration: 500,
          easing: 'easeOutCubic',
          delay: 1300
        }
      }).add({
        targets: '.fadeup-animation',
        offset: 1300, // Starts at 1300ms of the timeline
        translateY: {
          value: [100, 0],
          duration: 1500,
          easing: 'easeOutElastic',
          delay: function (el, i) {
            return i * 150
          }
        },
        opacity: {
          value: [0, 1],
          duration: 200,
          easing: 'linear',
          delay: function (el, i) {
            return i * 150
          }
        }
      }).add({
        targets: '.fadeleft-animation',
        offset: 1300, // Starts at 1300ms of the timeline
        translateX: {
          value: [40, 0],
          duration: 400,
          easing: 'easeOutCubic',
          delay: function (el, i) {
            return i * 100
          }
        },
        opacity: {
          value: [0, 1],
          duration: 200,
          easing: 'linear',
          delay: function (el, i) {
            return i * 100
          }
        }
      })
  
      doc.classList.add('anime-ready')
      heroAnimation.play()
    }
  }())

  // Select Form In Page
const form = document.querySelector("form");
/* 
		Form Validation.
*/
/* 
		Fetch Script For Forms POST Req.
		We Have 2 Paths :
		---1--- Has GOOGLE SHEETS FIELD: 'yes'
		---2--- Has GOOGLE SHEETS FIELD: 'no'
*/
// Declare The GOOGLE SHEETS Input
let gsInput = form.querySelector(".form-group.interface-field-group input[data-csrf][name=interface]");
// GOOGLE SHEETS ID
if (gsInput) {
	console.log("===HAS GOOGLE SHEETS===")

	// google sheets link
	let gsUrl = `${window.atob(gsInput.getAttribute("data-csrf"))}`;

	// GET SUBMIT BUTTON
	let submit = form.querySelector("button[type=submit]");

	// ONSUBMIT FORM EVENT
	form.addEventListener("submit", (e) => {
		// PREVENT FROM SUBMIT
		e.preventDefault()

		const formValidation = () => {
			let isValid = true;

			let name = form.querySelector(".text-field-group input[type='text']")
			let email = form.querySelector(".email-field-group input[type='email']")
			let textarea = form.querySelector(".textarea-group textarea")
			let phone = form.querySelector(".phone-field-group input[type='tel']")
			let select = form.querySelector(".select-group select")
			let radios = form.querySelectorAll(".radio-group .radio-inline input[type='radio']")
			let date = form.querySelector(".datepicker-group .datepicker-input")

			if (name) {
				let span = document.createElement("span")
				if (!/^([a-zA-Z ]){5,30}(\s)*$/.test(name.value)) {
					span.innerHTML = "please enter a valid name less that 30 characters";
					if (!form.querySelector(".text-field-group span")) {
						form.querySelector(".text-field-group").appendChild(span)
					}
					isValid = false;
				}
				else {
					span.innerHTML = null
				}
			}

			if (phone) {
				let phoneFormat = phone.getAttribute('data-format')
				let regex = /^\+\d{1,3}\s(\d{3,16})$/gm;

				if (!regex.test(phone.value)) {
					let span = document.createElement("span")
					span.innerHTML = `please enter a valid phone format: ${phoneFormat}`;
					span.style.color = "red";
					if (!form.querySelector(".phone-field-group span")) {
						form.querySelector(".phone-field-group").appendChild(span)
					}
					isValid = false;
				}

			}

			if (email) {
				if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3}(\s)*)+$/g.test(email.value)) {
					let span = document.createElement("span")
					span.innerHTML = "please enter a valid email address";
					if (!form.querySelector(".email-field-group span")) {
						form.querySelector(".email-field-group").appendChild(span)
					}
					isValid = false;
				}
			}

			if (textarea) {
				if (!/^\S.*(?:\r?\n\s.*)*$/gmu.test(textarea.value)) {
					let span = document.createElement("span")
					span.innerHTML = "please describe your message in more than 50 character";
					if (!form.querySelector(".textarea-group span")) {
						form.querySelector(".textarea-group").appendChild(span)
					}
					isValid = false;
				}
			}

			if (select) {
				if (!select.selectedIndex) {
					let span = document.createElement("span")
					span.innerHTML = "please choose a value from the select menu";
					if (!form.querySelector(".select-group span")) {
						form.querySelector(".select-group").appendChild(span)
					}
					isValid = false;
				}
			}

			if (radios.length > 0) {
				let radioValid = false;
				let i = 0
				while (!radioValid && i < radios.length) {
					if (radios[i].checked) radioValid = true;
					i++;
				}
				if (!radioValid) {
					let span = document.createElement("span")
					span.innerHTML = "please choose a value from the select menu";
					if (!form.querySelector(".radio-group > span")) {
						form.querySelector(".radio-group").appendChild(span)
					}
					isValid = false;
				}
				return radioValid;
			}

			if (date) {
				/* !/^\d{1,2}.\d{1,2}.\d{4}$/gm.test(date.value) &&  */
				if (!/^\d{1,2}.\d{1,2}.\d{4}$/gm.test(date.value)) {
					let span = document.createElement("span")
					span.innerHTML = "Please insert a valide Date";
					if (!form.querySelector(".datepicker-group span")) {
						form.querySelector(".datepicker-group").appendChild(span)
					}
					isValid = false;
				}
			}

			return isValid;
		};

		const valide = formValidation();

		if (valide) {
			// GET FORM DATA
			let data = new FormData(form);
			// Send Google Sheets Form to data form
			data.append('INTERFACE', gsUrl)
			// Security
			data.append('cbr', form.getAttribute('cbr'))
			data.append('tbs', form.getAttribute('tbs'))

			// Fetch "POST" Request
			fetch("https://larabuilde3.takiddine.art/api/interface", {
				method: "POST",
				body: data
			}).then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.text();
			}).then(response => {
				const res = response;
				console.log(res)
				submit.innerHTML = 'Success Request 🍎';
			}).catch(error => {
				console.error(error)
			})

		} else {
			return false;
		}


	})
} else {
	form.addEventListener("submit", (e) => {
		// OTHER CODE REQUEST NEDDED
		console.log("===HASN'T GOOGLE SHEETS===")
	})
}