/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-borderradius-boxshadow-flexbox-rgba-cssanimations-csstransforms-csstransforms3d-csstransitions-canvas-audio-video-svg-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return G("flexWrap")},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.rgba=function(){return A("background-color:rgba(150,255,150,.5)"),D(j.backgroundColor,"rgba")},r.backgroundsize=function(){return G("backgroundSize")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.cssanimations=function(){return G("animationName")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*! waitForImages jQuery Plugin 2013-07-20 https://github.com/alexanderdickson/waitForImages */
!function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?h.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&i.push({src:b.attr("src"),element:b[0]}),a.each(j,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=k.exec(e);)i.push({src:d[2],element:b[0]})})}):h.find("img:uncached").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on("load."+b+" error."+b,function(a){return g++,d.call(i.element,g,f,"load"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);

/*! skrollr 0.6.21 (2014-01-06) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render},ft=r.forceHeight!==!1,ft&&(zt=r.scale||1),pt=r.mobileDeceleration||E,gt=r.smoothScrolling!==!1,vt=r.smoothScrollingDuration||x,dt={targetTop:it.getScrollTop()},_t=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),_t?(st=t.getElementById("skrollr-body"),st&&at(),X(),Ct(o,[y,S],[T])):Ct(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Lt)&&($t=t,Lt=e,Mt=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i=e.skrollr={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.21"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",v=g+"-before",d=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,x=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",N=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,V=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,z=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,$=/\{\?\}/g,M=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,B=/[a-z\-]+-gradient/g,_="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(_=n.match(e)||+n==n&&t[n].match(e))break;if(!_)return _=G="",r;_=_[0],"-"===_.slice(0,1)?(G=_,_={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[_]):G="-"+_.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[_.toLowerCase()+"RequestAnimationFrame"],r=Nt();return(_t||!t)&&(t=function(t){var n=Nt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Nt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[_.toLowerCase()+"CancelAnimationFrame"];return(_t||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=yt;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var v=m.name.match(V);if(null!==v){var d={props:m.value,element:i};s.push(d);var h=v[1];h&&(d.constant=h.substr(1));var y=v[2];/p$/.test(y)?(d.isPercentage=!0,d.offset=(0|y.slice(0,-1))/100):d.offset=0|y;var T=v[3],b=v[4]||T;T&&T!==A&&T!==F?(d.mode="relative",d.anchors=[T,b]):(d.mode="absolute",T===F?d.isEnd=!0:d.isPercentage||(d.offset=d.offset*zt))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=lt[k].styleAttr,w=lt[k].classAttr):(k=i[H]=Bt++,S=i.style.cssText,w=Ft(i)),lt[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},Ct(i,[g],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Nt(),o=it.getScrollTop();return mt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:U[t.easing||w],done:t.done},mt.topDiff||(mt.done&&mt.done.call(it,!1),mt=r),it},n.prototype.stopAnimateTo=function(){mt&&mt.done&&mt.done.call(it,!0),mt=r},n.prototype.isAnimatingTo=function(){return!!mt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,_t?Gt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return _t?Gt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),kt(),Ct(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Vt=0,zt=1,ut=r,pt=r,Ot="down",qt=-1,Lt=0,$t=0,Mt=!1,mt=r,gt=r,vt=r,dt=r,ht=r,Bt=0,yt=r,_t=!1,Gt=0,Tt=r};var X=function(){var n,i,l,c,g,v,d,h,y,T,b,S;St(o,[f,u,p,m].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(g=o.clientY,v=o.clientX,T=e.timeStamp,N.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=d=g,l=v,y=T;break;case u:N.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=g-d,S=T-b,it.setScrollTop(Gt-h,!0),d=g,b=T;break;default:case p:case m:var a=i-g,w=l-v,k=w*w+a*a;if(49>k){if(!N.test(n.tagName)){n.focus();var E=t.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(E)}return}n=r;var x=h/S;x=s.max(s.min(x,3),-3);var A=s.abs(x/pt),F=x*A+.5*pt*A*A,C=it.getScrollTop()-F,D=0;C>Vt?(D=(Vt-C)/F,C=Vt):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,p,m=o.clientHeight,g=xt();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,p=g[l.constant]||0,l.frame=u,l.isPercentage&&(u*=m,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=p,ft&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,At()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],p=g[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+p);e.keyFrames.sort(Pt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(Ct(c,[y?v:h],[v,d,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=nt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Ct(c,[g,d],[v,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],x=u[w+1];for(o in E.props)if(l.call(E.props,o)){var A=(f-E.frame)/(x.frame-E.frame);A=E.props[o].easing(A),a=rt(E.props[o].value,x.props[o].value,A),a=nt(a),i.setStyle(c,o,a)}break}}},Z=function(){Mt&&(Mt=!1,Et());var e,t,n=it.getScrollTop(),o=Nt();if(mt)o>=mt.endTime?(n=mt.targetTop,e=mt.done,mt=r):(t=mt.easing((o-mt.startTime)/mt.duration),n=0|mt.startTop+t*mt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=dt.targetTop-n;a&&(dt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:It,endTime:It+vt}),dt.endTime>=o&&(t=U.sqrt((o-dt.startTime)/vt),n=0|dt.startTop+t*dt.topDiff)}if(_t&&st&&i.setStyle(st,"transform","translate(0, "+-Gt+"px) "+Tt),ht||qt!==n){Ot=n>qt?"down":qt>n?"up":Ot,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Vt,direction:Ot},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}It=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=z.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return M.lastIndex=0,e=e.replace(M,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(B.lastIndex=0,e=e.replace(B,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return $.lastIndex=0,e[0].replace($,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Ct(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ft(n),n.style.cssText=r.styleAttr,Ct(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{_&&(n[_+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,pt,mt,gt,vt,dt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Kt.push({element:t,name:a,listener:n})},wt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},kt=function(){for(var e,t=0,r=Kt.length;r>t;t++)e=Kt[t],wt(e.element,e.name,e.listener);Kt=[]},Et=function(){var e=it.getScrollTop();Vt=0,ft&&!_t&&(a.style.height="auto"),j(),ft&&!_t&&(a.style.height=Vt+o.clientHeight+"px"),_t?it.setScrollTop(s.min(it.getScrollTop(),Vt)):it.setScrollTop(e,!0),ht=!0},xt=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},At=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ft=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Ct=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Ht(i).replace(Ht(o[l])," ");i=Dt(i);for(var c=0,f=n.length;f>c;c++)-1===Ht(i).indexOf(Ht(n[c]))&&(i+=" "+n[c]);t[a]=Dt(i)},Dt=function(e){return e.replace(P,"")},Ht=function(e){return" "+e+" "},Nt=Date.now||function(){return+new Date},Pt=function(e,t){return e.frame-t.frame},Vt=0,zt=1,Ot="down",qt=-1,It=Nt(),Lt=0,$t=0,Mt=!1,Bt=0,_t=!1,Gt=0,Kt=[]})(window,document);

/*
 *  jQuery OwlCarousel v1.3.2 - Hacked for Beetle
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */
if(typeof Object.create!=="function"){Object.create=function(e){function t(){}t.prototype=e;return new t}}(function(e,t,n){var r={init:function(t,n){var r=this;r.$elem=e(n);r.options=e.extend({},e.fn.owlCarousel.options,r.$elem.data(),t);r.userOptions=t;r.loadContent()},loadContent:function(){function r(e){var n,r="";if(typeof t.options.jsonSuccess==="function"){t.options.jsonSuccess.apply(this,[e])}else{for(n in e.owl){if(e.owl.hasOwnProperty(n)){r+=e.owl[n].item}}t.$elem.html(r)}t.logIn()}var t=this,n;if(typeof t.options.beforeInit==="function"){t.options.beforeInit.apply(this,[t.$elem])}if(typeof t.options.jsonPath==="string"){n=t.options.jsonPath;e.getJSON(n,r)}else{t.logIn()}},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")).data("owl-originalClasses",e.$elem.attr("class"));e.$elem.css({opacity:0});e.orignalItems=e.options.items;e.checkBrowser();e.wrapperWidth=0;e.checkVisible=null;e.setVars()},setVars:function(){var e=this;if(e.$elem.children().length===0){return false}e.baseClass();e.eventTypes();e.$userItems=e.$elem.children();e.itemsAmount=e.$userItems.length;e.wrapItems();e.$owlItems=e.$elem.find(".owl-item");e.$owlWrapper=e.$elem.find(".owl-wrapper");e.playDirection="next";e.prevItem=0;e.prevArr=[0];e.currentItem=0;e.customEvents();e.onStartup()},onStartup:function(){var e=this;e.updateItems();e.calculateAll();e.buildControls();e.updateControls();e.response();e.moveEvents();e.stopOnHover();e.owlStatus();if(e.options.transitionStyle!==false){e.transitionTypes(e.options.transitionStyle)}if(e.options.autoPlay===true){e.options.autoPlay=5e3}e.play();e.$elem.find(".owl-wrapper").css("display","block");if(!e.$elem.is(":visible")){e.watchVisibility()}else{e.$elem.css("opacity",1)}e.onstartup=false;e.eachMoveUpdate();if(typeof e.options.afterInit==="function"){e.options.afterInit.apply(this,[e.$elem])}},eachMoveUpdate:function(){var e=this;if(e.options.lazyLoad===true){e.lazyLoad()}if(e.options.autoHeight===true){e.autoHeight()}e.onVisibleItems();if(typeof e.options.afterAction==="function"){e.options.afterAction.apply(this,[e.$elem])}},updateVars:function(){var e=this;if(typeof e.options.beforeUpdate==="function"){e.options.beforeUpdate.apply(this,[e.$elem])}e.watchVisibility();e.updateItems();e.calculateAll();e.updatePosition();e.updateControls();e.eachMoveUpdate();if(typeof e.options.afterUpdate==="function"){e.options.afterUpdate.apply(this,[e.$elem])}},reload:function(){var e=this;t.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;if(e.$elem.is(":visible")===false){e.$elem.css({opacity:0});t.clearInterval(e.autoPlayInterval);t.clearInterval(e.checkVisible)}else{return false}e.checkVisible=t.setInterval(function(){if(e.$elem.is(":visible")){e.reload();e.$elem.animate({opacity:1},200);t.clearInterval(e.checkVisible)}},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');e.wrapperOuter=e.$elem.find(".owl-wrapper-outer");e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);if(!t){e.$elem.addClass(e.options.baseClass)}if(!n){e.$elem.addClass(e.options.theme)}},updateItems:function(){var t=this,n,r;if(t.options.responsive===false){return false}if(t.options.singleItem===true){t.options.items=t.orignalItems=1;t.options.itemsCustom=false;t.options.itemsDesktop=false;t.options.itemsDesktopSmall=false;t.options.itemsTablet=false;t.options.itemsTabletSmall=false;t.options.itemsMobile=false;return false}n=e(t.options.responsiveBaseWidth).width();if(n>(t.options.itemsDesktop[0]||t.orignalItems)){t.options.items=t.orignalItems}if(t.options.itemsCustom!==false){t.options.itemsCustom.sort(function(e,t){return e[0]-t[0]});for(r=0;r<t.options.itemsCustom.length;r+=1){if(t.options.itemsCustom[r][0]<=n){t.options.items=t.options.itemsCustom[r][1]}}}else{if(n<=t.options.itemsDesktop[0]&&t.options.itemsDesktop!==false){t.options.items=t.options.itemsDesktop[1]}if(n<=t.options.itemsDesktopSmall[0]&&t.options.itemsDesktopSmall!==false){t.options.items=t.options.itemsDesktopSmall[1]}if(n<=t.options.itemsTablet[0]&&t.options.itemsTablet!==false){t.options.items=t.options.itemsTablet[1]}if(n<=t.options.itemsTabletSmall[0]&&t.options.itemsTabletSmall!==false){t.options.items=t.options.itemsTabletSmall[1]}if(n<=t.options.itemsMobile[0]&&t.options.itemsMobile!==false){t.options.items=t.options.itemsMobile[1]}}if(t.options.items>t.itemsAmount&&t.options.itemsScaleUp===true){t.options.items=t.itemsAmount}},response:function(){var n=this,r,i;if(n.options.responsive!==true){return false}i=e(t).width();n.resizer=function(){if(e(t).width()!==i){if(n.options.autoPlay!==false){t.clearInterval(n.autoPlayInterval)}t.clearTimeout(r);r=t.setTimeout(function(){i=e(t).width();n.updateVars()},n.options.responsiveRefreshRate)}};e(t).resize(n.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem);if(e.options.autoPlay!==false){e.checkAp()}},appendItemsSizes:function(){var t=this,n=0,r=t.itemsAmount-t.options.items;t.$owlItems.each(function(i){var s=e(this);s.css({width:t.itemWidth}).data("owl-item",Number(i));if(i%t.options.items===0||i===r){if(!(i>r)){n+=1}}s.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:t*2,left:0});e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth();e.appendWrapperSizes();e.loops();e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,t=(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth)*-1;if(e.options.items>e.itemsAmount){e.maximumItem=0;t=0;e.maximumPixels=0}else{e.maximumItem=e.itemsAmount-e.options.items;e.maximumPixels=t}return t},min:function(){return 0},loops:function(){var t=this,n=0,r=0,i,s,o;t.positionsInArray=[0];t.pagesInArray=[];for(i=0;i<t.itemsAmount;i+=1){r+=t.itemWidth;t.positionsInArray.push(-r);if(t.options.scrollPerPage===true){s=e(t.$owlItems[i]);o=s.data("owl-roundPages");if(o!==n){t.pagesInArray[n]=t.positionsInArray[i];n=o}}}},buildControls:function(){var t=this;if(t.options.navigation===true||t.options.pagination===true){t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)}if(t.options.pagination===true){t.buildPagination()}if(t.options.navigation===true){t.buildButtons()}},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n);t.buttonPrev=e("<div/>",{"class":"owl-prev",html:t.options.navigationText[0]||""});t.buttonNext=e("<div/>",{"class":"owl-next",html:t.options.navigationText[1]||""});n.append(t.buttonPrev).append(t.buttonNext);n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()});n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault();if(e(this).hasClass("owl-next")){t.next()}else{t.prev()}})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>');t.owlControls.append(t.paginationWrapper);t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault();if(Number(e(this).data("owl-page"))!==t.currentItem){t.goTo(Number(e(this).data("owl-page")),true)}})},updatePagination:function(){var t=this,n,r,i,s,o,u;if(t.options.pagination===false){return false}t.paginationWrapper.html("");n=0;r=t.itemsAmount-t.itemsAmount%t.options.items;for(s=0;s<t.itemsAmount;s+=1){if(s%t.options.items===0){n+=1;if(r===s){i=t.itemsAmount-t.options.items}o=e("<div/>",{"class":"owl-page"});u=e("<span></span>",{text:t.options.paginationNumbers===true?n:"","class":t.options.paginationNumbers===true?"owl-numbers":""});o.append(u);o.data("owl-page",r===s?i:s);o.data("owl-roundPages",n);t.paginationWrapper.append(o)}}t.checkPagination()},checkPagination:function(){var t=this;if(t.options.pagination===false){return false}t.paginationWrapper.find(".owl-page").each(function(){if(e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")){t.paginationWrapper.find(".owl-page").removeClass("active");e(this).addClass("active")}})},checkNavigation:function(){var e=this;if(e.options.navigation===false){return false}if(e.options.rewindNav===false){if(e.currentItem===0&&e.maximumItem===0){e.buttonPrev.addClass("disabled");e.buttonNext.addClass("disabled")}else if(e.currentItem===0&&e.maximumItem!==0){e.buttonPrev.addClass("disabled");e.buttonNext.removeClass("disabled")}else if(e.currentItem===e.maximumItem){e.buttonPrev.removeClass("disabled");e.buttonNext.addClass("disabled")}else if(e.currentItem!==0&&e.currentItem!==e.maximumItem){e.buttonPrev.removeClass("disabled");e.buttonNext.removeClass("disabled")}}},updateControls:function(){var e=this;e.updatePagination();e.checkNavigation();if(e.owlControls){if(e.options.items>=e.itemsAmount){e.owlControls.hide()}else{e.owlControls.show()}}},destroyControls:function(){var e=this;if(e.owlControls){e.owlControls.remove()}},next:function(e){var t=this;if(t.isTransition){return false}t.currentItem+=t.options.scrollPerPage===true?t.options.items:1;if(t.currentItem>t.maximumItem+(t.options.scrollPerPage===true?t.options.items-1:0)){if(t.options.rewindNav===true){t.currentItem=0;e="rewind"}else{t.currentItem=t.maximumItem;return false}}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition){return false}if(t.options.scrollPerPage===true&&t.currentItem>0&&t.currentItem<t.options.items){t.currentItem=0}else{t.currentItem-=t.options.scrollPerPage===true?t.options.items:1}if(t.currentItem<0){if(t.options.rewindNav===true){t.currentItem=t.maximumItem;e="rewind"}else{t.currentItem=0;return false}}t.goTo(t.currentItem,e)},goTo:function(e,n,r){var i=this,s;if(i.isTransition){return false}if(typeof i.options.beforeMove==="function"){i.options.beforeMove.apply(this,[i.$elem])}if(e>=i.maximumItem){e=i.maximumItem}else if(e<=0){e=0}i.currentItem=i.owl.currentItem=e;if(i.options.transitionStyle!==false&&r!=="drag"&&i.options.items===1&&i.browser.support3d===true){i.swapSpeed(0);if(i.browser.support3d===true){i.transition3d(i.positionsInArray[e])}else{i.css2fade(i.positionsInArray[e],1)}i.afterGo();i.singleItemTransition();return false}s=i.positionsInArray[e];if(i.browser.support3d===true){i.isCss3Finish=false;if(n===true){i.swapSpeed("paginationSpeed");t.setTimeout(function(){i.isCss3Finish=true},i.options.paginationSpeed)}else if(n==="rewind"){i.swapSpeed(i.options.rewindSpeed);t.setTimeout(function(){i.isCss3Finish=true},i.options.rewindSpeed)}else{i.swapSpeed("slideSpeed");t.setTimeout(function(){i.isCss3Finish=true},i.options.slideSpeed)}i.transition3d(s)}else{if(n===true){i.css2fade(s,i.options.paginationSpeed)}else if(n==="rewind"){i.css2fade(s,i.options.rewindSpeed)}else{i.css2fade(s,i.options.slideSpeed)}}i.afterGo()},jumpTo:function(e){var t=this;if(typeof t.options.beforeMove==="function"){t.options.beforeMove.apply(this,[t.$elem])}if(e>=t.maximumItem||e===-1){e=t.maximumItem}else if(e<=0){e=0}t.swapSpeed(0);if(t.browser.support3d===true){t.transition3d(t.positionsInArray[e])}else{t.css2fade(t.positionsInArray[e],1)}t.currentItem=t.owl.currentItem=e;t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem);e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2];e.prevArr.shift(0);if(e.prevItem!==e.currentItem){e.checkPagination();e.checkNavigation();e.eachMoveUpdate();if(e.options.autoPlay!==false){e.checkAp()}}if(typeof e.options.afterMove==="function"&&e.prevItem!==e.currentItem){e.options.afterMove.apply(this,[e.$elem])}},stop:function(){var e=this;e.apStatus="stop";t.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;if(e.apStatus!=="stop"){e.play()}},play:function(){var e=this;e.apStatus="play";if(e.options.autoPlay===false){return false}t.clearInterval(e.autoPlayInterval);e.autoPlayInterval=t.setInterval(function(){e.next(true)},e.options.autoPlay)},swapSpeed:function(e){var t=this;if(e==="slideSpeed"){t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed))}else if(e==="paginationSpeed"){t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed))}else if(typeof e!=="string"){t.$owlWrapper.css(t.addCssSpeed(e))}},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){var t=this;t.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=false;n.$owlWrapper.stop(true,true).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=true}})},css2fade:function(){var e=this;$currentItem=e.$owlItems.eq(e.currentItem);e.isCssFinish=false;e.$owlWrapper.stop(true,true);e.$owlItems.hide();$currentItem.fadeIn(400)},checkBrowser:function(){var e=this,r="translate3d(0px, 0px, 0px)",i=n.createElement("div"),s,o,u,a;i.style.cssText="  -moz-transform:"+r+"; -ms-transform:"+r+"; -o-transform:"+r+"; -webkit-transform:"+r+"; transform:"+r;s=/translate3d\(0px, 0px, 0px\)/g;o=i.style.cssText.match(s);u=Modernizr.csstransforms3d;a="ontouchstart"in t||t.navigator.msMaxTouchPoints;e.browser={support3d:u,isTouch:a}},moveEvents:function(){var e=this;if(e.options.mouseDrag!==false||e.options.touchDrag!==false){e.gestures();e.disabledEvents()}},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={};if(e.options.mouseDrag===true&&e.options.touchDrag===true){t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]}else if(e.options.mouseDrag===false&&e.options.touchDrag===true){t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]}else if(e.options.mouseDrag===true&&e.options.touchDrag===false){t=["mousedown.owl","mousemove.owl","mouseup.owl"]}e.ev_types.start=t[0];e.ev_types.move=t[1];e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()});t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function s(e){if(e.touches!==undefined){return{x:e.touches[0].pageX,y:e.touches[0].pageY}}if(e.touches===undefined){if(e.pageX!==undefined){return{x:e.pageX,y:e.pageY}}if(e.pageX===undefined){return{x:e.clientX,y:e.clientY}}}}function o(t){if(t==="on"){e(n).on(r.ev_types.move,a);e(n).on(r.ev_types.end,f)}else if(t==="off"){e(n).off(r.ev_types.move);e(n).off(r.ev_types.end)}}function u(n){var u=n.originalEvent||n||t.event,a;if(u.which===3){return false}if(r.itemsAmount<=r.options.items){return}if(r.isCssFinish===false&&!r.options.dragBeforeAnimFinish){return false}if(r.isCss3Finish===false&&!r.options.dragBeforeAnimFinish){return false}if(r.options.autoPlay!==false){t.clearInterval(r.autoPlayInterval)}if(r.browser.isTouch!==true&&!r.$owlWrapper.hasClass("grabbing")){r.$owlWrapper.addClass("grabbing")}r.newPosX=0;r.newRelativeX=0;e(this).css(r.removeTransition());a=e(this).position();i.relativePos=a.left;i.offsetX=s(u).x-a.left;i.offsetY=s(u).y-a.top;o("on");i.sliding=false;i.targetElement=u.target||u.srcElement}function a(o){var u=o.originalEvent||o||t.event,a,f;r.newPosX=s(u).x-i.offsetX;r.newPosY=s(u).y-i.offsetY;r.newRelativeX=r.newPosX-i.relativePos;if(typeof r.options.startDragging==="function"&&i.dragging!==true&&r.newRelativeX!==0){i.dragging=true;r.options.startDragging.apply(r,[r.$elem])}if((r.newRelativeX>8||r.newRelativeX<-8)&&r.browser.isTouch===true){if(u.preventDefault!==undefined){u.preventDefault()}else{u.returnValue=false}i.sliding=true}if((r.newPosY>10||r.newPosY<-10)&&i.sliding===false){e(n).off("touchmove.owl")}a=function(){return r.newRelativeX/5};f=function(){return r.maximumPixels+r.newRelativeX/5};r.newPosX=Math.max(Math.min(r.newPosX,a()),f());if(r.browser.support3d===true){r.transition3d(r.newPosX)}else{r.css2move(r.newPosX)}}function f(n){var s=n.originalEvent||n||t.event,u,a,f;s.target=s.target||s.srcElement;i.dragging=false;if(r.browser.isTouch!==true){r.$owlWrapper.removeClass("grabbing")}if(r.newRelativeX<0){r.dragDirection=r.owl.dragDirection="left"}else{r.dragDirection=r.owl.dragDirection="right"}if(r.newRelativeX!==0){u=r.getNewPosition();r.goTo(u,false,"drag");if(i.targetElement===s.target&&r.browser.isTouch!==true){e(s.target).on("click.disable",function(t){t.stopImmediatePropagation();t.stopPropagation();t.preventDefault();e(t.target).off("click.disable")});a=e._data(s.target,"events").click;f=a.pop();a.splice(0,0,f)}}o("off")}var r=this,i={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};r.isCssFinish=true;r.$elem.on(r.ev_types.start,".owl-wrapper",u)},getNewPosition:function(){var e=this,t=e.closestItem();if(t>e.maximumItem){e.currentItem=e.maximumItem;t=e.maximumItem}else if(e.newPosX>=0){t=0;e.currentItem=0}return t},closestItem:function(){var t=this,n=t.options.scrollPerPage===true?t.pagesInArray:t.positionsInArray,r=t.newPosX,i=null;e.each(n,function(s,o){if(r-t.itemWidth/20>n[s+1]&&r-t.itemWidth/20<o&&t.moveDirection()==="left"){i=o;if(t.options.scrollPerPage===true){t.currentItem=e.inArray(i,t.positionsInArray)}else{t.currentItem=s}}else if(r+t.itemWidth/20<o&&r+t.itemWidth/20>(n[s+1]||n[s]-t.itemWidth)&&t.moveDirection()==="right"){if(t.options.scrollPerPage===true){i=n[s+1]||n[n.length-1];t.currentItem=e.inArray(i,t.positionsInArray)}else{i=n[s+1];t.currentItem=s+1}}});return t.currentItem},moveDirection:function(){var e=this,t;if(e.newRelativeX<0){t="right";e.playDirection="next"}else{t="left";e.playDirection="prev"}return t},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()});e.$elem.on("owl.prev",function(){e.prev()});e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n;e.play();e.hoverStatus="play"});e.$elem.on("owl.stop",function(){e.stop();e.hoverStatus="stop"});e.$elem.on("owl.goTo",function(t,n){e.goTo(n)});e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;if(e.options.stopOnHover===true&&e.browser.isTouch!==true&&e.options.autoPlay!==false){e.$elem.on("mouseover",function(){e.stop()});e.$elem.on("mouseout",function(){if(e.hoverStatus!=="stop"){e.play()}})}},lazyLoad:function(){var t=this,n,r,i,s,o;if(t.options.lazyLoad===false){return false}for(n=0;n<t.itemsAmount;n+=1){r=e(t.$owlItems[n]);if(r.data("owl-loaded")==="loaded"){continue}i=r.data("owl-item");s=r.find(".lazyOwl");if(typeof s.data("src")!=="string"){r.data("owl-loaded","loaded");continue}if(r.data("owl-loaded")===undefined){s.hide();r.addClass("loading").data("owl-loaded","checked")}if(t.options.lazyFollow===true){o=i>=t.currentItem}else{o=true}if(o&&i<t.currentItem+t.options.items&&s.length){t.lazyPreload(r,s)}}},lazyPreload:function(e,n){function o(){e.data("owl-loaded","loaded").removeClass("loading");n.removeAttr("data-src");if(r.options.lazyEffect==="fade"){n.fadeIn(400)}else{n.show()}if(typeof r.options.afterLazyLoad==="function"){r.options.afterLazyLoad.apply(this,[r.$elem])}}function u(){i+=1;if(r.completeImg(n.get(0))||s===true){o()}else if(i<=100){t.setTimeout(u,100)}else{o()}}var r=this,i=0,s;if(n.prop("tagName")==="DIV"){n.css("background-image","url("+n.data("src")+")");s=true}else{n[0].src=n.data("src")}u()},autoHeight:function(){function s(){var r=e(n.$owlItems[n.currentItem]).height();n.wrapperOuter.css("height",r+"px");if(!n.wrapperOuter.hasClass("autoHeight")){t.setTimeout(function(){n.wrapperOuter.addClass("autoHeight")},0)}}function o(){i+=1;if(n.completeImg(r.get(0))){s()}else if(i<=100){t.setTimeout(o,100)}else{n.wrapperOuter.css("height","")}}var n=this,r=e(n.$owlItems[n.currentItem]).find("img"),i;if(r.get(0)!==undefined){i=0;o()}else{s()}},completeImg:function(e){var t;if(!e.complete){return false}t=typeof e.naturalWidth;if(t!=="undefined"&&e.naturalWidth===0){return false}return true},onVisibleItems:function(){var t=this,n;if(t.options.addClassActive===true){t.$owlItems.removeClass("active")}t.visibleItems=[];for(n=t.currentItem;n<t.currentItem+t.options.items;n+=1){t.visibleItems.push(n);if(t.options.addClassActive===true){e(t.$owlItems[n]).addClass("active")}}t.owl.visibleItems=t.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out";t.inClass="owl-"+e+"-in"},singleItemTransition:function(){function a(e){return{position:"relative",left:e+"px"}}var e=this,t=e.outClass,n=e.inClass,r=e.$owlItems.eq(e.currentItem),i=e.$owlItems.eq(e.prevItem),s=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],o=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,u="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=true;e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":o+"px","-moz-perspective-origin":o+"px","perspective-origin":o+"px"});i.css(a(s,10)).addClass(t).on(u,function(){e.endPrev=true;i.off(u);e.clearTransStyle(i,t)});r.addClass(n).on(u,function(){e.endCurrent=true;r.off(u);e.clearTransStyle(r,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t);if(n.endPrev&&n.endCurrent){n.$owlWrapper.removeClass("owl-origin");n.endPrev=false;n.endCurrent=false;n.isTransition=false}},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var r=this;r.$elem.off(".owl owl mousedown.disableTextSelect");e(n).off(".owl owl");e(t).off("resize",r.resizer)},unWrap:function(){var e=this;if(e.$elem.children().length!==0){e.$owlWrapper.unwrap();e.$userItems.unwrap().unwrap();if(e.owlControls){e.owlControls.remove()}}e.clearEvents();e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop();t.clearInterval(e.checkVisible);e.unWrap();e.$elem.removeData()},reinit:function(t){var n=this,r=e.extend({},n.userOptions,t);n.unWrap();n.init(r,n.$elem)},addItem:function(e,t){var n=this,r;if(!e){return false}if(n.$elem.children().length===0){n.$elem.append(e);n.setVars();return false}n.unWrap();if(t===undefined||t===-1){r=-1}else{r=t}if(r>=n.$userItems.length||r===-1){n.$userItems.eq(-1).after(e)}else{n.$userItems.eq(r).before(e)}n.setVars()},removeItem:function(e){var t=this,n;if(t.$elem.children().length===0){return false}if(e===undefined||e===-1){n=-1}else{n=e}t.unWrap();t.$userItems.eq(n).remove();t.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(e(this).data("owl-init")===true){return false}e(this).data("owl-init",true);var n=Object.create(r);n.init(t,this);e.data(this,"owlCarousel",n)})};e.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}})(jQuery,window,document);

/* onScreen https://github.com/silvestreh/onScreen */
(function(e){e.fn.onScreen=function(t){var n=e.extend({container:window,direction:"vertical",toggleClass:null,doIn:null,doOut:null,tolerance:0,throttle:null,lazyAttr:null,lazyPlaceholder:"data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",debug:false},t);return this.each(function(){function m(){if(v){return p<f-n.tolerance&&r<p+c-n.tolerance}else{return p<u-n.tolerance&&p>-c+n.tolerance}}function g(){if(v){return p+(c-n.tolerance)<r||p>f-n.tolerance}else{return p>u-n.tolerance||-c+n.tolerance>p}}function y(){if(v){return d<l-n.tolerance&&i<d+h-n.tolerance}else{return d<a-n.tolerance&&d>-h+n.tolerance}}function b(){if(v){return d+(h-n.tolerance)<i||d>l-n.tolerance}else{return d>a-n.tolerance||-h+n.tolerance>d}}function w(){if(t){return false}if(n.direction==="horizontal"){return y()}else{return m()}}function E(){if(!t){return false}if(n.direction==="horizontal"){return b()}else{return g()}}function S(e,t,n){var r,i,s;return function(){i=arguments;s=true;n=n||this;if(!r){(function(){if(s){e.apply(n,i);s=false;r=setTimeout(arguments.callee,t)}else{r=null}})()}}}var t=false;var r;var i;var s=e(this);var o;var u;var a;var f;var l;var c;var h;var p;var d;var v=e.isWindow(n.container);var x=function(){if(!v&&e(n.container).css("position")==="static"){e(n.container).css("position","relative")}o=e(n.container);u=o.height();a=o.width();f=o.scrollTop()+u;l=o.scrollLeft()+a;c=s.outerHeight(true);h=s.outerWidth(true);if(v){var m=s.offset();p=m.top;d=m.left}else{var g=s.position();p=g.top;d=g.left}r=o.scrollTop();i=o.scrollLeft();if(n.debug){console.log("Container: "+n.container+"\n"+"Width: "+u+"\n"+"Height: "+a+"\n"+"Bottom: "+f+"\n"+"Right: "+l);console.log("Matched element: "+(s.attr("class")!==undefined?s.prop("tagName").toLowerCase()+"."+s.attr("class"):s.prop("tagName").toLowerCase())+"\n"+"Left: "+d+"\n"+"Top: "+p+"\n"+"Width: "+h+"\n"+"Height: "+c)}if(w()){if(n.toggleClass){s.addClass(n.toggleClass)}if(e.isFunction(n.doIn)){n.doIn.call(s[0])}if(n.lazyAttr&&s.prop("tagName")==="IMG"){var y=s.attr(n.lazyAttr);s.css({background:"url("+n.lazyPlaceholder+") 50% 50% no-repeat",minHeight:"5px",minWidth:"16px"});s.prop("src",y)}t=true}else if(E()){if(n.toggleClass){s.removeClass(n.toggleClass)}if(e.isFunction(n.doOut)){n.doOut.call(s[0])}t=false}};if(window.location.hash){S(x,50)}else{x()}if(n.throttle){x=S(x,n.throttle)}e(n.container).on("scroll resize",x);if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=jQuery}else{if(typeof define==="function"&&define.amd){define("jquery-onscreen",[],function(){return jQuery})}}})}})(jQuery);
/*
 *   Beetle
 *   Written by Pasquale Vitiello (pasqualevitiello@gmail.com),
 *   mokaine.com
 */

;jQuery(document).ready(function ($) {


    /* Define some vars */

    var win = $(window),
        body = $('body'),
        header = $('header'),
        headerHeight = header.outerHeight(true),
        headerNav = $('nav'),
        content = $('main'),
        pxWrapper = $('#intro-wrap'),
        pxContainer = $('#intro'),
        pxImg = $('.intro-item'),
        pxImgCaption = pxContainer.find('.caption'),
        testimonial = $('.testimonial-slider'),
        cCarousel = $('.custom-carousel'),
        loaderIntro = '<div class="landing landing-slider"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
        loader = '<div class="landing landing-els"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
        loaderLightbox = '<div class="landing landing-els lightbox"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>',
        moreBtnIcon = '<div class="more"><a href="#main"><i class="icon icon-arrow-down"></i></a></div>';


    /* Determine viewport width matching with media queries */

    function viewport() {

        var e = window,
            a = 'inner';

        if (!('innerWidth' in window)) {

            a = 'client';
            e = document.documentElement || document.body;

        }

        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };

    }


    /* Toggle "mobile" class */

    function mobileClass() {

        var vpWidth = viewport().width; // This should match media queries

        if ((vpWidth <= 768) && (!body.hasClass('mobile'))) {

            body.addClass('mobile');

        } else if ((vpWidth > 768) && (body.hasClass('mobile'))) {

            body.removeClass('mobile');

        }

    }

    mobileClass();
    $(window).resize(mobileClass);


    /* Intro Height */

    function introHeight() {

        var $this = pxWrapper,
            dataHeight = $this.data('height');

        if ($this.hasClass('full-height')) {

            var recalcHeaderH = header.outerHeight(true);

            if (!body.hasClass('mobile')) {

                $this.css({
                    'height': (win.height())
                });

            } else {

                $this.css({
                    'height': (win.height() - recalcHeaderH)
                });

            }

        } else {

            $this.css({
                'height': dataHeight + 'em'
            });

        }

    }


    /* Initialize Intro */

    function initIntro() {

        var $this = pxContainer;

        $this.append(loaderIntro);

        $this.addClass(function () {
            return $this.find('.intro-item').length > 1 ? "big-slider" : "";
        });

        $this.waitForImages({

            finished: function () {

                // console.log('All images have loaded.');
                $('.landing-slider').remove();

                if ($this.hasClass('big-slider')) {

                    var autoplay = $this.data('autoplay'),
                        navigation = $this.data('navigation'),
                        pagination = $this.data('pagination'),
                        transition = $this.data('transition');

                    $this.owlCarousel({
                        singleItem: true,
                        autoPlay: autoplay || false, // || = if data- is empty or if it does not exists
                        transitionStyle: transition || false,
                        stopOnHover: true,
                        responsiveBaseWidth: ".slider",
                        responsiveRefreshRate: 0,
                        addClassActive: true,
                        navigation: navigation || false,
                        navigationText: [
                            "<i class='icon icon-arrow-left-simple'></i>",
                            "<i class='icon icon-arrow-right-simple'></i>"
                        ],
                        pagination: pagination || false,
                        rewindSpeed: 2000,
                    });

                }

                $this.removeClass('preload');

                if (pxWrapper.length && $this.hasClass('more-button') && $this.attr('data-pagination') !== 'true') {
                    $this.append(moreBtnIcon);
                    smoothScroll();
                }

            },
            waitForAll: true
        });

    }

    if (pxContainer.length) {

        initIntro();
        introHeight();
        $(window).resize(introHeight);

    }


    /* Smooth scroll */

    function smoothScroll() {

        $('a[href*=#]:not([href=#])').click(function () {

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);

                    return false;

                }

            }

        });

    }

    smoothScroll();


    /* Fixed header if there's no Big slider */

    if (!pxWrapper.length) {

        header.addClass('fixed-header');

    }


    /* Parallax data attributes according to #intro's height */

    function parallax() {

        if (pxWrapper.length) {

            var touchDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            if (touchDevice && body.hasClass('no-parallax-touch')) {

                body.addClass('no-parallax');

            }

            if (!body.hasClass('mobile') && !body.hasClass('no-parallax')) {

                pxContainer.attr('data-anchor-target', '#intro-wrap');
                pxContainer.attr('data-top', 'transform:translateY(0px);');
                header.attr('data-anchor-target', '#intro-wrap');
                header.attr('data-top', 'transform:translateY(0px);');
                if (touchDevice) {
                    pxContainer.attr('data-top-bottom', 'transform:translateY(0px);');
                    header.attr('data-top-bottom', 'transform:translateY(0px);');
                    header.addClass('transition');
                    // console.log('Disable Parallax');

                } else {
                    pxContainer.attr('data-top-bottom', 'transform:translateY(' + '-' + pxWrapper.height() / 4 + 'px);');
                    header.attr('data-top-bottom', 'transform:translateY(' + '-' + pxWrapper.height() / 4 + 'px);');
                }
                animDone = false;

                skrollr.init({
                    forceHeight: false,
                    smoothScrolling: false,
                    mobileCheck: function () {
                        //hack - forces mobile version to be off
                        return false;
                    },
                    /* easing: 'swing', */
                    render: function () {

                        if (header.hasClass('skrollable-after')) {

                            if (!animDone) {

                                animDone = true;
                                header.addClass('fixed-header').css({
                                    'display': 'none'
                                }).fadeIn(300);

                            }

                        } else {

                            animDone = false;
                            header.removeClass('fixed-header');

                        }

                    }
                    /*
                    render: function(data) {
                        //Log the current scroll position.
                        console.log(data.curTop);
                    }
                    */
                }).refresh();

                pxImgCaption.each(function () {

                    var $this = $(this);

                    $this.css({
                        top: ((pxWrapper.height() + headerHeight / 2) - $this.outerHeight()) / 2 + 25
                    });

                });

            } else {

                skrollr.init().destroy();
                content.css({
                    marginTop: 0 + 'px'
                });

                var parallaxEls = $('header, #intro'),
                    attrs = parallaxEls[0].attributes,
                    name,
                    index;

                for (index = attrs.length - 1; index >= 0; --index) {
                    name = attrs[index].nodeName;

                    if (name.substring(0, 5) === "data-") {
                        parallaxEls.removeAttr(name);
                    }

                }

                parallaxEls.css({
                    '-webkit-transform': '',
                    '-moz-transform': '',
                    'transform': '',
                    'backgroundPosition': ''
                }).removeClass('skrollable-after');

                pxImgCaption.each(function () {

                    var $this = $(this);

                    if (!body.hasClass('mobile') && body.hasClass('no-parallax')) {

                        $this.css({
                            top: ((pxWrapper.height() + headerHeight) - $this.outerHeight()) / 2
                        });

                    } else {

                        $this.css({
                            top: (pxWrapper.height() - $this.outerHeight()) / 2 + 8
                        });

                    }

                });

            }

        } else {

            if (!body.hasClass('mobile')) {

                content.css({
                    marginTop: headerHeight + 'px'
                });

            } else {

                content.css({
                    marginTop: 0
                });

            }

        }

    }

    parallax();
    $(window).resize(parallax);


    /* Submenus */

    var menuToggle = $('#menu-toggle'),
        headerNavUl = headerNav.children('ul'),
        liWithSub = headerNavUl.children('li:has(ul.sub-menu)'),
        ulSub = $('ul.sub-menu'),
        parent = ulSub.children('li:has(ul.sub-menu)').children('a'),
        menuArrow = '<span class="sub-arrow"><i class="fa fa-chevron-down"></i></span>';

    liWithSub.addClass('parent').children('a').append(menuArrow);
    parent.addClass('parent');

    menuToggle.click(function () {

        headerNavUl.slideToggle(200);
        $(this).children('i').toggleClass('active');

        return false;

    });

    $(window).resize(function () {

        if (!body.hasClass('mobile')) {

            headerNavUl.removeAttr('style');
            menuToggle.children('i').removeClass('active');

        }

    });


    /* Make page's odd sections darker */

    var page = $('.page'),
        pageSections = page.find('.section'),
        oddSections = pageSections.filter(':odd');

    if (body.hasClass('page') && pageSections.length > 1) {

        oddSections.addClass('greyish');

    }


    /* Overlay content absolute centering */

    function centerOverlay() {

        var PortfolioOverlay = $('.overlay-content'),
            BlogOverlay = $('.blog-overlay');

        if (PortfolioOverlay.length) {

            PortfolioOverlay.each(function () {

                var $this = $(this),
                    itemPortfolioHeight = $this.closest('.item').height(),
                    PortfolioOverlayHeight = $this.height(),
                    PortfolioIcon = $this.children('.post-type');
                PortfolioIconHeight = PortfolioIcon.children('i').height();

                if ((PortfolioOverlayHeight + 30) > itemPortfolioHeight) {

                    $this.children('p').css({
                        'visibility': 'hidden'
                    });
                    $this.children('h2').css({
                        'visibility': 'hidden'
                    });

                    $this.css({
                        marginTop: (itemPortfolioHeight - PortfolioIconHeight) / 2
                    });

                } else {

                    $this.children('p').css({
                        'visibility': 'visible'
                    });
                    $this.children('h2').css({
                        'visibility': 'visible'
                    });
                    $this.css({
                        marginTop: (itemPortfolioHeight - PortfolioOverlayHeight) / 2
                    });

                }

            });

        }

        if (BlogOverlay.length) {

            BlogOverlay.each(function () {

                var $this = $(this),
                    itemBlogHeight = $this.prev('img').height(),
                    BlogOverlayIcon = $this.children('i'),
                    BlogOverlayIconHeight = BlogOverlayIcon.height();

                BlogOverlayIcon.css({
                    top: (itemBlogHeight - BlogOverlayIconHeight) / 2
                });

            });

        }

    }

    centerOverlay();
    $(window).on('resize', centerOverlay);


    /* fix Blog Excerpt Heights */

    var blogExcerpt = $('.item.column.three .blog-excerpt');

    function fixBlogH() {

        var gridW = parseInt($('.grid-items').width()),
            sizerBigW = (gridW / 100) * 48,
            sizerBigH = sizerBigW * 0.75,
            sizerSmallW = (gridW / 100) * 22.05,
            sizerSmallH = sizerSmallW * 0.75,
            difference = sizerBigH - sizerSmallH + 0.5;

        // console.log(difference);

        if (!body.hasClass('mobile')) {

            blogExcerpt.css({
                'height': difference
            });

        } else {

            blogExcerpt.css({
                'height': 'auto'
            });

        }

    }

    if (blogExcerpt.length) {

        fixBlogH();
        $(window).on('resize', fixBlogH);

    }

    /* Chart numbers absolute centering */

    var chart = $('.chart'),
        chartNr = $('.chart-content'),
        chartParent = chart.parent();

    function centerChartsNr() {

        chartNr.css({
            top: (chart.height() - chartNr.outerHeight()) / 2
        });

    }

    if (chart.length) {

        centerChartsNr();
        $(window).resize(centerChartsNr);

        chartParent.each(function () {

            $(this).onScreen({
                doIn: function () {
                    $(this).find('.chart').easyPieChart({
                        scaleColor: false,
                        lineWidth: 12,
                        size: 178,
                        trackColor: false,
                        lineCap: 'square',
                        animate: 2000,
                        onStep: function (from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                },
            });

            $(this).find('.chart').wrapAll('<div class="centertxt" />');

        });

    }


    /* Milestone */

    var countItem = $('.count-item');

    function milestone() {

        countItem.each(function () {

            var $this = $(this);

            $this.onScreen({
                doIn: function () {
                    var countNumber = $this.find('.count-number'),
                        countTitle = $this.find('.count-subject');
                    countNumber.countTo({
                        onComplete: function () {
                            countTitle.delay(100).addClass('subject-on');
                            countNumber.removeClass('count-number').addClass('count-number-done');
                        }
                    });
                },
            });

        });
    }

    if (countItem.length) {

        milestone();

    }


    /* Timeline's circle color */

    var timeline = $('.timeline'),
        circle = timeline.find('.circle');

    if (timeline.length) {

        circle.each(function () {

            var circleColor = $(this).parents('section').css('background-color');
            $(this).css({
                backgroundColor: circleColor
            });

        });

    }


    /* Testimonial Carousel */

    function initTestimonial() {

        testimonial.each(function () {

            var $this = $(this),
                autoplay = $this.data('autoplay'),
                pagination = $this.data('pagination'),
                transition = $this.data('transition'),
                autoheight = $this.data('autoheight');

            $this.owlCarousel({
                singleItem: true,
                autoPlay: autoplay || false,
                transitionStyle: transition || false,
                autoHeight: autoheight || false,
                stopOnHover: true,
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: true,
                pagination: pagination || false,
                rewindSpeed: 2000,
            });

        });

    }

    if (testimonial.length) {

        initTestimonial();

    }


    /* Custom Carousel */

    function initCCarousel() {

        cCarousel.each(function () {

            var $this = $(this),
                autoplay = $this.data('autoplay'),
                pagination = $this.data('pagination'),
                transition = $this.data('transition'),
                autoheight = $this.data('autoheight');

            $this.owlCarousel({
                singleItem: true,
                autoPlay: autoplay || false,
                transitionStyle: transition || false,
                autoHeight: autoheight || false,
                stopOnHover: true,
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: true,
                pagination: pagination || false,
                rewindSpeed: 2000,
            });

        });

    }

    if (cCarousel.length) {

        initCCarousel();

    }


    /* onScreen Animations */

    var onScreenAnims = $('.animation');

    if (onScreenAnims.length) {

        onScreenAnims.onScreen({
            toggleClass: false,
            doIn: function () {
                $(this).addClass('onscreen')
            }
        });

    }


    /* Return the right mockup according to the class & initialize sliders */

    var findDevice = $('.slider');

    function useMockup() {

        findDevice.each(function () {

            var $this = $(this),
                slideHeight = $this.find('.owl-item').outerHeight(true),
                iphoneBlack = '<div class="mockup iphone-mockup black"></div>',
                iphoneWhite = '<div class="mockup iphone-mockup white"></div>',
                iphoneGrey = '<div class="mockup iphone-mockup grey"></div>',
                ipadBlack = '<div class="mockup ipad-mockup black"></div>',
                ipadWhite = '<div class="mockup ipad-mockup white"></div>',
                ipadGrey = '<div class="mockup ipad-mockup grey"></div>',
                desktop = '<div class="mockup desktop-mockup"></div>',
                deviceWrapper = $this.parent('.row-content'),
                mockupslider = $this.children('figure'),
                autoplay = $this.data('autoplay');

            if (!$this.parent('div').hasClass('side-mockup')) {

                mockupslider.owlCarousel({
                    singleItem: true,
                    autoPlay: autoplay || false,
                    stopOnHover: true,
                    responsiveBaseWidth: ".slider",
                    responsiveRefreshRate: 0,
                    addClassActive: true,
                    navigation: true,
                    navigationText: [
                        "<i class='fa fa-chevron-left'></i>",
                        "<i class='fa fa-chevron-right'></i>"
                    ],
                    pagination: false,
                    rewindSpeed: 2000,
                });

            } else {

                mockupslider.owlCarousel({
                    singleItem: true,
                    autoPlay: autoplay || false,
                    stopOnHover: true,
                    transitionStyle: "fade",
                    responsiveBaseWidth: ".slider",
                    responsiveRefreshRate: 0,
                    addClassActive: true,
                    navigation: false,
                    pagination: true,
                    rewindSpeed: 2000,
                    mouseDrag: false,
                    touchDrag: false
                });

            }

            if ($this.hasClass('iphone-slider black')) {

                $this.find('.owl-wrapper-outer').after(iphoneBlack);

            } else if ($this.hasClass('iphone-slider white')) {

                $this.find('.owl-wrapper-outer').after(iphoneWhite);

            } else if ($this.hasClass('iphone-slider grey')) {

                $this.find('.owl-wrapper-outer').after(iphoneGrey);

            } else if ($this.hasClass('ipad-slider black')) {

                $this.find('.owl-wrapper-outer').after(ipadBlack);

            } else if ($this.hasClass('ipad-slider white')) {

                $this.find('.owl-wrapper-outer').after(ipadWhite);

            } else if ($this.hasClass('ipad-slider grey')) {

                $this.find('.owl-wrapper-outer').after(ipadGrey);

            } else if ($this.hasClass('desktop-slider')) {

                $this.find('.owl-wrapper-outer').after(desktop);

            }

            $this.waitForImages({

                finished: function () {

                    $this.fadeIn('slow');

                },
                waitForAll: true
            });

            deviceWrapper.css({
                'padding-left': '0',
                'padding-right': '0'
            })


        });

    }

    if ((findDevice.length) && (!findDevice.hasClass('gallery'))) {

        useMockup();

        function fixArrowPos() {

            findDevice.each(function () {

                var slideHeight = $(this).find('.owl-item').outerHeight(true);

                $(this).find('.owl-prev, .owl-next').css('top', slideHeight / 2);

            });

        }

        fixArrowPos();
        $(window).resize(fixArrowPos);

    }


    /* Side mockups fixes */

    var sideMockup = $('.side-mockup');

    function sideMockups() {

        sideMockup.each(function () {

            var $this = $(this),
                sideMockupHeight = parseInt($this.find('.slider').height()),
                sideMockupParent = $this.parent('.row-content'),
                sideMockupParentPad = parseInt(sideMockupParent.css('padding-top')),
                sideMockupFix = sideMockupHeight + (sideMockupParentPad * 2) + 'px';

            if (!body.hasClass('mobile')) {

                if ($this.hasClass('right-mockup')) {

                    $this.css({
                        'position': 'absolute',
                        'left': '52%'
                    });

                } else if ($this.hasClass('left-mockup')) {

                    $this.css({
                        'position': 'absolute',
                        'right': '52%'
                    });

                }

                sideMockupParent.css({
                    'position': 'relative',
                    'min-height': sideMockupFix
                });

            } else {

                $this.css({
                    'position': 'relative',
                    'left': 'auto',
                    'right': 'auto'
                });

                sideMockupParent.css({
                    'position': 'relative',
                    'min-height': '0'
                });

            }

        });

    }


    if (sideMockup.length) {

        sideMockups();
        $(window).resize(sideMockups);

    }


    /* Initialize Gallery Sliders */

    var galleryslidercontainer = $('.gallery.slider');

    function gallerySlider() {

        galleryslidercontainer.each(function () {

            var $this = $(this),
                galleryslider = $this.children('figure'),
                autoplay = $this.data('autoplay'),
                autoheight = $this.data('autoheight');

            galleryslider.owlCarousel({
                singleItem: true,
                autoHeight: autoheight || false,
                autoPlay: autoplay || false,
                transitionStyle: "fade",
                stopOnHover: true,
                responsiveBaseWidth: ".slider",
                responsiveRefreshRate: 0,
                addClassActive: true,
                navigation: true,
                navigationText: [
                    "<i class='icon  icon-arrow-up'></i>",
                    "<i class='icon icon-arrow-down'></i>"
                ],
                pagination: false,
                rewindSpeed: 2000,
            });

            $this.fadeIn('slow');

        });

    }

    if (galleryslidercontainer.length) {

        gallerySlider();

    }


    /* Create unique data-lightbox attributes http://stackoverflow.com/questions/11044876/how-to-auto-generate-id-for-child-div-in-jquery */

    var lightboxContainer = $('.lightbox');

    if (lightboxContainer.length) {

        var $this = lightboxContainer;

        for (var i = 0; i < $this.length; i++) {

            $($this[i]).find('.item a').attr("data-lightbox", "gallery-" + i);

        }

        lightboxContainer.each(function () {

            var $this = $(this);

            var activityIndicatorOn = function () {
                $(loaderLightbox).appendTo('body');
            },
                activityIndicatorOff = function () {
                    $('.landing-els').remove();
                },
                overlayOn = function () {
                    $('<div id="imagelightbox-overlay"></div>').appendTo('body');
                },
                overlayOff = function () {
                    $('#imagelightbox-overlay').remove();
                },
                closeButtonOn = function (instance) {
                    $('<a href="#" id="imagelightbox-close"><i class="icon icon-close"></i></a>').appendTo('body').on('click', function () {
                        $(this).remove();
                        instance.quitImageLightbox();
                        return false;
                    });
                },
                closeButtonOff = function () {
                    $('#imagelightbox-close').remove();
                },
                captionOn = function () {
                    var description = $('a[href="' + $('#imagelightbox').attr('src') + '"]').find('h2').html();
                    if (description.length > 0)
                        $('<div id="imagelightbox-caption"><h3>' + description + '</h3></div>').appendTo('body');
                },
                captionOff = function () {
                    $('#imagelightbox-caption').remove();
                };


            var instance = $this.find('.item a[data-lightbox^="gallery-"]').imageLightbox({
                onStart: function () {
                    overlayOn();
                    closeButtonOn(instance);
                },
                onEnd: function () {
                    overlayOff();
                    captionOff();
                    closeButtonOff();
                    activityIndicatorOff();
                },
                onLoadStart: function () {
                    captionOff();
                    activityIndicatorOn();
                },
                onLoadEnd: function () {
                    captionOn();
                    activityIndicatorOff();
                }
            });

        });

    }

    /* Add some "last" classes */

    headerNav.find('.menu-item').last('li').addClass('last');
    $('#top-footer').find('.column').last('.column').addClass('last');
    $('.blog.list-style').find('article').last('article').addClass('last');
    $('.search.list-style').find('article').last('article').addClass('last');


    /* Clear columns */

    var lastColumn = $('.column.last');

    if (lastColumn.length) {

        lastColumn.after('<div class="clear"></div>');

    }



});

/*!
* Parsleyjs
* Guillaume Potier - <guillaume@wisembly.com>
* Version 2.0.2 - built Tue Jun 17 2014 15:26:34
* MIT Licensed
*
*/
(function($) {
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(){var a={attr:function(a,b,c){var d,e={},f=this.msieversion(),g=new RegExp("^"+b,"i");if("undefined"==typeof a||"undefined"==typeof a[0])return{};for(var h in a[0].attributes)if(d=a[0].attributes[h],"undefined"!=typeof d&&null!==d&&(!f||f>=8||d.specified)&&g.test(d.name)){if("undefined"!=typeof c&&new RegExp(c+"$","i").test(d.name))return!0;e[this.camelize(d.name.replace(b,""))]=this.deserializeValue(d.value)}return"undefined"==typeof c?e:!1},setAttr:function(a,b,c,d){a[0].setAttribute(this.dasherize(b+c),String(d))},get:function(a,b){for(var c=0,d=(b||"").split(".");this.isObject(a)||this.isArray(a);)if(a=a[d[c++]],c===d.length)return a;return void 0},hash:function(a){return String(Math.random()).substring(2,a?a+2:9)},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},isObject:function(a){return a===Object(a)},deserializeValue:function(a){var b;try{return a?"true"==a||("false"==a?!1:"null"==a?null:isNaN(b=Number(a))?/^[\[\{]/.test(a)?$.parseJSON(a):a:b):a}catch(c){return a}},camelize:function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},dasherize:function(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},msieversion:function(){var a=window.navigator.userAgent,b=a.indexOf("MSIE ");return b>0||navigator.userAgent.match(/Trident.*rv\:11\./)?parseInt(a.substring(b+5,a.indexOf(".",b)),10):0}},b={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(){},errorsContainer:function(){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},c=function(){};c.prototype={asyncSupport:!1,actualizeOptions:function(){return this.options=this.OptionsFactory.get(this),this},validateThroughValidator:function(a,b,c){return window.ParsleyValidator.validate.apply(window.ParsleyValidator,[a,b,c])},subscribe:function(a,b){return $.listenTo(this,a.toLowerCase(),b),this},unsubscribe:function(a){return $.unsubscribeTo(this,a.toLowerCase()),this},reset:function(){if("ParsleyForm"!==this.__class__)return $.emit("parsley:field:reset",this);for(var a=0;a<this.fields.length;a++)$.emit("parsley:field:reset",this.fields[a]);$.emit("parsley:form:reset",this)},destroy:function(){if("ParsleyForm"!==this.__class__)return this.$element.removeData("Parsley"),this.$element.removeData("ParsleyFieldMultiple"),void $.emit("parsley:field:destroy",this);for(var a=0;a<this.fields.length;a++)this.fields[a].destroy();this.$element.removeData("Parsley"),$.emit("parsley:form:destroy",this)}},function(a){var b=function(a){return this.__class__="Validator",this.__version__="0.5.8",this.options=a||{},this.bindingKey=this.options.bindingKey||"_validatorjsConstraint",this};b.prototype={constructor:b,validate:function(a,b,c){if("string"!=typeof a&&"object"!=typeof a)throw new Error("You must validate an object or a string");return"string"==typeof a||g(a)?this._validateString(a,b,c):this.isBinded(a)?this._validateBindedObject(a,b):this._validateObject(a,b,c)},bind:function(a,b){if("object"!=typeof a)throw new Error("Must bind a Constraint to an object");return a[this.bindingKey]=new c(b),this},unbind:function(a){return"undefined"==typeof a._validatorjsConstraint?this:(delete a[this.bindingKey],this)},isBinded:function(a){return"undefined"!=typeof a[this.bindingKey]},getBinded:function(a){return this.isBinded(a)?a[this.bindingKey]:null},_validateString:function(a,b,c){var f,h=[];g(b)||(b=[b]);for(var i=0;i<b.length;i++){if(!(b[i]instanceof e))throw new Error("You must give an Assert or an Asserts array to validate a string");f=b[i].check(a,c),f instanceof d&&h.push(f)}return h.length?h:!0},_validateObject:function(a,b,d){if("object"!=typeof b)throw new Error("You must give a constraint to validate an object");return b instanceof c?b.check(a,d):new c(b).check(a,d)},_validateBindedObject:function(a,b){return a[this.bindingKey].check(a,b)}},b.errorCode={must_be_a_string:"must_be_a_string",must_be_an_array:"must_be_an_array",must_be_a_number:"must_be_a_number",must_be_a_string_or_array:"must_be_a_string_or_array"};var c=function(a,b){if(this.__class__="Constraint",this.options=b||{},this.nodes={},a)try{this._bootstrap(a)}catch(c){throw new Error("Should give a valid mapping object to Constraint",c,a)}return this};c.prototype={constructor:c,check:function(a,b){var c,d={};for(var h in this.options.strict?this.nodes:a)if(this.options.strict?this.has(h,a):this.has(h))c=this._check(h,a[h],b),(g(c)&&c.length>0||!g(c)&&!f(c))&&(d[h]=c);else if(this.options.strict)try{(new e).HaveProperty(h).validate(a)}catch(i){d[h]=i}return f(d)?!0:d},add:function(a,b){if(b instanceof e||g(b)&&b[0]instanceof e)return this.nodes[a]=b,this;if("object"==typeof b&&!g(b))return this.nodes[a]=b instanceof c?b:new c(b),this;throw new Error("Should give an Assert, an Asserts array, a Constraint",b)},has:function(a,b){return b="undefined"!=typeof b?b:this.nodes,"undefined"!=typeof b[a]},get:function(a,b){return this.has(a)?this.nodes[a]:b||null},remove:function(a){var b=[];for(var c in this.nodes)c!==a&&(b[c]=this.nodes[c]);return this.nodes=b,this},_bootstrap:function(a){if(a instanceof c)return this.nodes=a.nodes;for(var b in a)this.add(b,a[b])},_check:function(a,b,d){if(this.nodes[a]instanceof e)return this._checkAsserts(b,[this.nodes[a]],d);if(g(this.nodes[a]))return this._checkAsserts(b,this.nodes[a],d);if(this.nodes[a]instanceof c)return this.nodes[a].check(b,d);throw new Error("Invalid node",this.nodes[a])},_checkAsserts:function(a,b,c){for(var d,e=[],f=0;f<b.length;f++)d=b[f].check(a,c),"undefined"!=typeof d&&!0!==d&&e.push(d);return e}};var d=function(a,b,c){if(this.__class__="Violation",!(a instanceof e))throw new Error("Should give an assertion implementing the Assert interface");this.assert=a,this.value=b,"undefined"!=typeof c&&(this.violation=c)};d.prototype={show:function(){var a={assert:this.assert.__class__,value:this.value};return this.violation&&(a.violation=this.violation),a},__toString:function(){return"undefined"!=typeof this.violation&&(this.violation='", '+this.getViolation().constraint+" expected was "+this.getViolation().expected),this.assert.__class__+' assert failed for "'+this.value+this.violation||""},getViolation:function(){var a,b;for(a in this.violation)b=this.violation[a];return{constraint:a,expected:b}}};var e=function(a){return this.__class__="Assert",this.__parentClass__=this.__class__,this.groups=[],"undefined"!=typeof a&&this.addGroup(a),this};e.prototype={construct:e,check:function(a,b){if(!(b&&!this.hasGroup(b)||!b&&this.hasGroups()))try{return this.validate(a,b)}catch(c){return c}},hasGroup:function(a){return g(a)?this.hasOneOf(a):"Any"===a?!0:this.hasGroups()?-1!==this.groups.indexOf(a):"Default"===a},hasOneOf:function(a){for(var b=0;b<a.length;b++)if(this.hasGroup(a[b]))return!0;return!1},hasGroups:function(){return this.groups.length>0},addGroup:function(a){return g(a)?this.addGroups(a):(this.hasGroup(a)||this.groups.push(a),this)},removeGroup:function(a){for(var b=[],c=0;c<this.groups.length;c++)a!==this.groups[c]&&b.push(this.groups[c]);return this.groups=b,this},addGroups:function(a){for(var b=0;b<a.length;b++)this.addGroup(a[b]);return this},HaveProperty:function(a){return this.__class__="HaveProperty",this.node=a,this.validate=function(a){if("undefined"==typeof a[this.node])throw new d(this,a,{value:this.node});return!0},this},Blank:function(){return this.__class__="Blank",this.validate=function(a){if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string});if(""!==a.replace(/^\s+/g,"").replace(/\s+$/g,""))throw new d(this,a);return!0},this},Callback:function(a){if(this.__class__="Callback",this.arguments=Array.prototype.slice.call(arguments),1===this.arguments.length?this.arguments=[]:this.arguments.splice(0,1),"function"!=typeof a)throw new Error("Callback must be instanciated with a function");return this.fn=a,this.validate=function(a){var b=this.fn.apply(this,[a].concat(this.arguments));if(!0!==b)throw new d(this,a,{result:b});return!0},this},Choice:function(a){if(this.__class__="Choice",!g(a)&&"function"!=typeof a)throw new Error("Choice must be instanciated with an array or a function");return this.list=a,this.validate=function(a){for(var b="function"==typeof this.list?this.list():this.list,c=0;c<b.length;c++)if(a===b[c])return!0;throw new d(this,a,{choices:b})},this},Collection:function(a){return this.__class__="Collection",this.constraint="undefined"!=typeof a?new c(a):!1,this.validate=function(a,c){var e,h=new b,i=0,j={},k=this.groups.length?this.groups:c;if(!g(a))throw new d(this,array,{value:b.errorCode.must_be_an_array});for(var l=0;l<a.length;l++)e=this.constraint?h.validate(a[l],this.constraint,k):h.validate(a[l],k),f(e)||(j[i]=e),i++;return f(j)?!0:j},this},Count:function(a){return this.__class__="Count",this.count=a,this.validate=function(a){if(!g(a))throw new d(this,a,{value:b.errorCode.must_be_an_array});var c="function"==typeof this.count?this.count(a):this.count;if(isNaN(Number(c)))throw new Error("Count must be a valid interger",c);if(c!==a.length)throw new d(this,a,{count:c});return!0},this},Email:function(){return this.__class__="Email",this.validate=function(a){var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string});if(!c.test(a))throw new d(this,a);return!0},this},Eql:function(a){if(this.__class__="Eql","undefined"==typeof a)throw new Error("Equal must be instanciated with an Array or an Object");return this.eql=a,this.validate=function(a){var b="function"==typeof this.eql?this.eql(a):this.eql;if(!h.eql(b,a))throw new d(this,a,{eql:b});return!0},this},EqualTo:function(a){if(this.__class__="EqualTo","undefined"==typeof a)throw new Error("EqualTo must be instanciated with a value or a function");return this.reference=a,this.validate=function(a){var b="function"==typeof this.reference?this.reference(a):this.reference;if(b!==a)throw new d(this,a,{value:b});return!0},this},GreaterThan:function(a){if(this.__class__="GreaterThan","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number});if(this.threshold>=a)throw new d(this,a,{threshold:this.threshold});return!0},this},GreaterThanOrEqual:function(a){if(this.__class__="GreaterThanOrEqual","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number});if(this.threshold>a)throw new d(this,a,{threshold:this.threshold});return!0},this},InstanceOf:function(a){if(this.__class__="InstanceOf","undefined"==typeof a)throw new Error("InstanceOf must be instanciated with a value");return this.classRef=a,this.validate=function(a){if(!0!=a instanceof this.classRef)throw new d(this,a,{classRef:this.classRef});return!0},this},IPv4:function(){return this.__class__="IPv4",this.validate=function(a){var c=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string});if(!c.test(a))throw new d(this,a);return!0},this},Length:function(a){if(this.__class__="Length",!a.min&&!a.max)throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");return this.min=a.min,this.max=a.max,this.validate=function(a){if("string"!=typeof a&&!g(a))throw new d(this,a,{value:b.errorCode.must_be_a_string_or_array});if("undefined"!=typeof this.min&&this.min===this.max&&a.length!==this.min)throw new d(this,a,{min:this.min,max:this.max});if("undefined"!=typeof this.max&&a.length>this.max)throw new d(this,a,{max:this.max});if("undefined"!=typeof this.min&&a.length<this.min)throw new d(this,a,{min:this.min});return!0},this},LessThan:function(a){if(this.__class__="LessThan","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number});if(this.threshold<=a)throw new d(this,a,{threshold:this.threshold});return!0},this},LessThanOrEqual:function(a){if(this.__class__="LessThanOrEqual","undefined"==typeof a)throw new Error("Should give a threshold value");return this.threshold=a,this.validate=function(a){if(""===a||isNaN(Number(a)))throw new d(this,a,{value:b.errorCode.must_be_a_number});if(this.threshold<a)throw new d(this,a,{threshold:this.threshold});return!0},this},Mac:function(){return this.__class__="Mac",this.validate=function(a){var c=/^(?:[0-9A-F]{2}:){5}[0-9A-F]{2}$/i;if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string});if(!c.test(a))throw new d(this,a);return!0},this},NotNull:function(){return this.__class__="NotNull",this.validate=function(a){if(null===a||"undefined"==typeof a)throw new d(this,a);return!0},this},NotBlank:function(){return this.__class__="NotBlank",this.validate=function(a){if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string});if(""===a.replace(/^\s+/g,"").replace(/\s+$/g,""))throw new d(this,a);return!0},this},Null:function(){return this.__class__="Null",this.validate=function(a){if(null!==a)throw new d(this,a);return!0},this},Range:function(a,b){if(this.__class__="Range","undefined"==typeof a||"undefined"==typeof b)throw new Error("Range assert expects min and max values");return this.min=a,this.max=b,this.validate=function(a){try{return"string"==typeof a&&isNaN(Number(a))||g(a)?(new e).Length({min:this.min,max:this.max}).validate(a):(new e).GreaterThanOrEqual(this.min).validate(a)&&(new e).LessThanOrEqual(this.max).validate(a),!0}catch(b){throw new d(this,a,b.violation)}return!0},this},Regexp:function(a,c){if(this.__class__="Regexp","undefined"==typeof a)throw new Error("You must give a regexp");return this.regexp=a,this.flag=c||"",this.validate=function(a){if("string"!=typeof a)throw new d(this,a,{value:b.errorCode.must_be_a_string});if(!new RegExp(this.regexp,this.flag).test(a))throw new d(this,a,{regexp:this.regexp,flag:this.flag});return!0},this},Required:function(){return this.__class__="Required",this.validate=function(a){if("undefined"==typeof a)throw new d(this,a);try{"string"==typeof a?(new e).NotNull().validate(a)&&(new e).NotBlank().validate(a):!0===g(a)&&(new e).Length({min:1}).validate(a)}catch(b){throw new d(this,a)}return!0},this},Unique:function(a){return this.__class__="Unique","object"==typeof a&&(this.key=a.key),this.validate=function(a){var c,e=[];if(!g(a))throw new d(this,a,{value:b.errorCode.must_be_an_array});for(var f=0;f<a.length;f++)if(c="object"==typeof a[f]?a[f][this.key]:a[f],"undefined"!=typeof c){if(-1!==e.indexOf(c))throw new d(this,a,{value:c});e.push(c)}return!0},this}},a.Assert=e,a.Validator=b,a.Violation=d,a.Constraint=c,Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!==d&&1/0!=d&&d!=-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1});var f=function(a){for(var b in a)return!1;return!0},g=function(a){return"[object Array]"===Object.prototype.toString.call(a)},h={eql:function(a,b){if(a===b)return!0;if("undefined"!=typeof Buffer&&Buffer.isBuffer(a)&&Buffer.isBuffer(b)){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}return a instanceof Date&&b instanceof Date?a.getTime()===b.getTime():"object"!=typeof a&&"object"!=typeof b?a==b:this.objEquiv(a,b)},isUndefinedOrNull:function(a){return null===a||"undefined"==typeof a},isArguments:function(a){return"[object Arguments]"==Object.prototype.toString.call(a)},keys:function(a){if(Object.keys)return Object.keys(a);var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b},objEquiv:function(a,b){if(this.isUndefinedOrNull(a)||this.isUndefinedOrNull(b))return!1;if(a.prototype!==b.prototype)return!1;if(this.isArguments(a))return this.isArguments(b)?eql(pSlice.call(a),pSlice.call(b)):!1;try{var c,d,e=this.keys(a),f=this.keys(b);if(e.length!==f.length)return!1;for(e.sort(),f.sort(),d=e.length-1;d>=0;d--)if(e[d]!=f[d])return!1;for(d=e.length-1;d>=0;d--)if(c=e[d],!this.eql(a[c],b[c]))return!1;return!0}catch(g){return!1}}};"function"==typeof define&&define.amd&&define("validator",[],function(){return a})}("undefined"==typeof exports?this["undefined"!=typeof validatorjs_ns?validatorjs_ns:"Validator"]={}:exports);var d=function(a,b){this.__class__="ParsleyValidator",this.Validator=Validator,this.locale="en",this.init(a||{},b||{})};d.prototype={init:function(a,b){this.catalog=b;for(var c in a)this.addValidator(c,a[c].fn,a[c].priority,a[c].requirementsTransformer);$.emit("parsley:validator:init")},setLocale:function(a){if("undefined"==typeof this.catalog[a])throw new Error(a+" is not available in the catalog");return this.locale=a,this},addCatalog:function(a,b,c){return"object"==typeof b&&(this.catalog[a]=b),!0===c?this.setLocale(a):this},addMessage:function(a,b,c){return void 0===typeof this.catalog[a]&&(this.catalog[a]={}),this.catalog[a][b.toLowerCase()]=c,this},validate:function(){return(new this.Validator.Validator).validate.apply(new Validator.Validator,arguments)},addValidator:function(a,b,c,d){return this.validators[a.toLowerCase()]=function(a){return $.extend((new Validator.Assert).Callback(b,a),{priority:c,requirementsTransformer:d})},this},updateValidator:function(a,b,c,d){return this.addValidator(a,b,c,d)},removeValidator:function(a){return delete this.validators[a],this},getErrorMessage:function(a){var b;return b="type"===a.name?this.catalog[this.locale][a.name][a.requirements]:this.formatMessage(this.catalog[this.locale][a.name],a.requirements),""!==b?b:this.catalog[this.locale].defaultMessage},formatMessage:function(a,b){if("object"==typeof b){for(var c in b)a=this.formatMessage(a,b[c]);return a}return"string"==typeof a?a.replace(new RegExp("%s","i"),b):""},validators:{notblank:function(){return $.extend((new Validator.Assert).NotBlank(),{priority:2})},required:function(){return $.extend((new Validator.Assert).Required(),{priority:512})},type:function(a){var b;switch(a){case"email":b=(new Validator.Assert).Email();break;case"range":case"number":b=(new Validator.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");break;case"integer":b=(new Validator.Assert).Regexp("^-?\\d+$");break;case"digits":b=(new Validator.Assert).Regexp("^\\d+$");break;case"alphanum":b=(new Validator.Assert).Regexp("^\\w+$","i");break;case"url":b=(new Validator.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)","i");break;default:throw new Error("validator type `"+a+"` is not supported")}return $.extend(b,{priority:256})},pattern:function(a){var b="";return/^\/.*\/(?:[gimy]*)$/.test(a)&&(b=a.replace(/.*\/([gimy]*)$/,"$1"),a=a.replace(new RegExp("^/(.*?)/"+b+"$"),"$1")),$.extend((new Validator.Assert).Regexp(a,b),{priority:64})},minlength:function(a){return $.extend((new Validator.Assert).Length({min:a}),{priority:30,requirementsTransformer:function(){return"string"!=typeof a||isNaN(a)?a:parseInt(a,10)}})},maxlength:function(a){return $.extend((new Validator.Assert).Length({max:a}),{priority:30,requirementsTransformer:function(){return"string"!=typeof a||isNaN(a)?a:parseInt(a,10)}})},length:function(a){return $.extend((new Validator.Assert).Length({min:a[0],max:a[1]}),{priority:32})},mincheck:function(a){return this.minlength(a)},maxcheck:function(a){return this.maxlength(a)},check:function(a){return this.length(a)},min:function(a){return $.extend((new Validator.Assert).GreaterThanOrEqual(a),{priority:30,requirementsTransformer:function(){return"string"!=typeof a||isNaN(a)?a:parseInt(a,10)}})},max:function(a){return $.extend((new Validator.Assert).LessThanOrEqual(a),{priority:30,requirementsTransformer:function(){return"string"!=typeof a||isNaN(a)?a:parseInt(a,10)}})},range:function(a){return $.extend((new Validator.Assert).Range(a[0],a[1]),{priority:32,requirementsTransformer:function(){for(var b=0;b<a.length;b++)a[b]="string"!=typeof a[b]||isNaN(a[b])?a[b]:parseInt(a[b],10);return a}})},equalto:function(a){return $.extend((new Validator.Assert).EqualTo(a),{priority:256,requirementsTransformer:function(){return $(a).length?$(a).val():a}})}}};var e=function(){this.__class__="ParsleyUI"};e.prototype={listen:function(){return $.listen("parsley:form:init",this,this.setupForm),$.listen("parsley:field:init",this,this.setupField),$.listen("parsley:field:validated",this,this.reflow),$.listen("parsley:form:validated",this,this.focus),$.listen("parsley:field:reset",this,this.reset),$.listen("parsley:form:destroy",this,this.destroy),$.listen("parsley:field:destroy",this,this.destroy),this},reflow:function(a){if("undefined"!=typeof a._ui&&!1!==a._ui.active){var b=this._diff(a.validationResult,a._ui.lastValidationResult);a._ui.lastValidationResult=a.validationResult,a._ui.validatedOnce=!0,this.manageStatusClass(a),this.manageErrorsMessages(a,b),this.actualizeTriggers(a),(b.kept.length||b.added.length)&&"undefined"==typeof a._ui.failedOnce&&this.manageFailingFieldTrigger(a)}},getErrorsMessages:function(a){if(!0===a.validationResult)return[];for(var b=[],c=0;c<a.validationResult.length;c++)b.push(this._getErrorMessage(a,a.validationResult[c].assert));return b},manageStatusClass:function(a){!0===a.validationResult?this._successClass(a):a.validationResult.length>0?this._errorClass(a):this._resetClass(a)},manageErrorsMessages:function(a,b){if("undefined"==typeof a.options.errorsMessagesDisabled){if("undefined"!=typeof a.options.errorMessage)return b.added.length||b.kept.length?(0===a._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&a._ui.$errorsWrapper.append($(a.options.errorTemplate).addClass("parsley-custom-error-message")),a._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(a.options.errorMessage)):a._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var c=0;c<b.removed.length;c++)this.removeError(a,b.removed[c].assert.name,!0);for(c=0;c<b.added.length;c++)this.addError(a,b.added[c].assert.name,void 0,b.added[c].assert,!0);for(c=0;c<b.kept.length;c++)this.updateError(a,b.kept[c].assert.name,void 0,b.kept[c].assert,!0)}},addError:function(a,b,c,d,e){a._ui.$errorsWrapper.addClass("filled").append($(a.options.errorTemplate).addClass("parsley-"+b).html(c||this._getErrorMessage(a,d))),!0!==e&&this._errorClass(a)},updateError:function(a,b,c,d,e){a._ui.$errorsWrapper.addClass("filled").find(".parsley-"+b).html(c||this._getErrorMessage(a,d)),!0!==e&&this._errorClass(a)},removeError:function(a,b,c){a._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+b).remove(),!0!==c&&this.manageStatusClass(a)},focus:function(a){if(!0===a.validationResult||"none"===a.options.focus)return a._focusedField=null;a._focusedField=null;for(var b=0;b<a.fields.length;b++)if(!0!==a.fields[b].validationResult&&a.fields[b].validationResult.length>0&&"undefined"==typeof a.fields[b].options.noFocus){if("first"===a.options.focus)return a._focusedField=a.fields[b].$element,a._focusedField.focus();a._focusedField=a.fields[b].$element}return null===a._focusedField?null:a._focusedField.focus()},_getErrorMessage:function(a,b){var c=b.name+"Message";return"undefined"!=typeof a.options[c]?window.ParsleyValidator.formatMessage(a.options[c],b.requirements):window.ParsleyValidator.getErrorMessage(b)},_diff:function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++){for(var g=!1,h=0;h<b.length;h++)if(a[f].assert.name===b[h].assert.name){g=!0;break}g?e.push(a[f]):d.push(a[f])}return{kept:e,added:d,removed:c?[]:this._diff(b,a,!0).added}},setupForm:function(a){a.$element.on("submit.Parsley",!1,$.proxy(a.onSubmitValidate,a)),!1!==a.options.uiEnabled&&a.$element.attr("novalidate","")},setupField:function(a){var b={active:!1};!1!==a.options.uiEnabled&&(b.active=!0,a.$element.attr(a.options.namespace+"id",a.__id__),b.$errorClassHandler=this._manageClassHandler(a),b.errorsWrapperId="parsley-id-"+("undefined"!=typeof a.options.multiple?"multiple-"+a.options.multiple:a.__id__),b.$errorsWrapper=$(a.options.errorsWrapper).attr("id",b.errorsWrapperId),b.lastValidationResult=[],b.validatedOnce=!1,b.validationInformationVisible=!1,a._ui=b,this._insertErrorWrapper(a),this.actualizeTriggers(a))},_manageClassHandler:function(a){if("string"==typeof a.options.classHandler&&$(a.options.classHandler).length)return $(a.options.classHandler);var b=a.options.classHandler(a);return"undefined"!=typeof b&&b.length?b:"undefined"==typeof a.options.multiple||a.$element.is("select")?a.$element:a.$element.parent()},_insertErrorWrapper:function(a){var b;if("string"==typeof a.options.errorsContainer){if($(a.options.errorsContainer).length)return $(a.options.errorsContainer).append(a._ui.$errorsWrapper);window.console&&window.console.warn&&window.console.warn("The errors container `"+a.options.errorsContainer+"` does not exist in DOM")}else"function"==typeof a.options.errorsContainer&&(b=a.options.errorsContainer(a));return"undefined"!=typeof b&&b.length?b.append(a._ui.$errorsWrapper):"undefined"==typeof a.options.multiple?a.$element.after(a._ui.$errorsWrapper):a.$element.parent().after(a._ui.$errorsWrapper)},actualizeTriggers:function(a){var b=this;if(a.options.multiple?$("["+a.options.namespace+'multiple="'+a.options.multiple+'"]').each(function(){$(this).off(".Parsley")}):a.$element.off(".Parsley"),!1!==a.options.trigger){var c=a.options.trigger.replace(/^\s+/g,"").replace(/\s+$/g,"");""!==c&&(a.options.multiple?$("["+a.options.namespace+'multiple="'+a.options.multiple+'"]').each(function(){$(this).on(c.split(" ").join(".Parsley ")+".Parsley",!1,$.proxy("function"==typeof a.eventValidate?a.eventValidate:b.eventValidate,a))}):a.$element.on(c.split(" ").join(".Parsley ")+".Parsley",!1,$.proxy("function"==typeof a.eventValidate?a.eventValidate:this.eventValidate,a)))}},eventValidate:function(a){new RegExp("key").test(a.type)&&!this._ui.validationInformationVisible&&this.getValue().length<=this.options.validationThreshold||(this._ui.validatedOnce=!0,this.validate())},manageFailingFieldTrigger:function(a){return a._ui.failedOnce=!0,a.options.multiple&&$("["+a.options.namespace+'multiple="'+a.options.multiple+'"]').each(function(){return new RegExp("change","i").test($(this).parsley().options.trigger||"")?void 0:$(this).on("change.ParsleyFailedOnce",!1,$.proxy(a.validate,a))}),a.$element.is("select")&&!new RegExp("change","i").test(a.options.trigger||"")?a.$element.on("change.ParsleyFailedOnce",!1,$.proxy(a.validate,a)):new RegExp("keyup","i").test(a.options.trigger||"")?void 0:a.$element.on("keyup.ParsleyFailedOnce",!1,$.proxy(a.validate,a))},reset:function(a){a.$element.off(".Parsley"),a.$element.off(".ParsleyFailedOnce"),"undefined"!=typeof a._ui&&"ParsleyForm"!==a.__class__&&(a._ui.$errorsWrapper.children().each(function(){$(this).remove()}),this._resetClass(a),a._ui.validatedOnce=!1,a._ui.lastValidationResult=[],a._ui.validationInformationVisible=!1)},destroy:function(a){this.reset(a),"ParsleyForm"!==a.__class__&&("undefined"!=typeof a._ui&&a._ui.$errorsWrapper.remove(),delete a._ui)},_successClass:function(a){a._ui.validationInformationVisible=!0,a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)},_errorClass:function(a){a._ui.validationInformationVisible=!0,a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)},_resetClass:function(a){a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)}};var f=function(b,c,d,e){this.__class__="OptionsFactory",this.__id__=a.hash(4),this.formOptions=null,this.fieldOptions=null,this.staticOptions=$.extend(!0,{},b,c,d,{namespace:e})};f.prototype={get:function(a){if("undefined"==typeof a.__class__)throw new Error("Parsley Instance expected");switch(a.__class__){case"Parsley":return this.staticOptions;case"ParsleyForm":return this.getFormOptions(a);case"ParsleyField":case"ParsleyFieldMultiple":return this.getFieldOptions(a);default:throw new Error("Instance "+a.__class__+" is not supported")}},getFormOptions:function(b){return this.formOptions=a.attr(b.$element,this.staticOptions.namespace),$.extend({},this.staticOptions,this.formOptions)},getFieldOptions:function(b){return this.fieldOptions=a.attr(b.$element,this.staticOptions.namespace),null===this.formOptions&&"undefined"!=typeof b.parent&&(this.formOptions=this.getFormOptions(b.parent)),$.extend({},this.staticOptions,this.formOptions,this.fieldOptions)}};var g=function(b,c){if(this.__class__="ParsleyForm",this.__id__=a.hash(4),"OptionsFactory"!==a.get(c,"__class__"))throw new Error("You must give an OptionsFactory instance");this.OptionsFactory=c,this.$element=$(b),this.validationResult=null,this.options=this.OptionsFactory.get(this)};g.prototype={onSubmitValidate:function(a){return this.validate(void 0,void 0,a),!1===this.validationResult&&a instanceof $.Event&&(a.stopImmediatePropagation(),a.preventDefault()),this},validate:function(a,b,c){this.submitEvent=c,this.validationResult=!0;var d=[];this._refreshFields(),$.emit("parsley:form:validate",this);for(var e=0;e<this.fields.length;e++)a&&a!==this.fields[e].options.group||(d=this.fields[e].validate(b),!0!==d&&d.length>0&&this.validationResult&&(this.validationResult=!1));return $.emit("parsley:form:validated",this),this.validationResult},isValid:function(a,b){this._refreshFields();for(var c=0;c<this.fields.length;c++)if((!a||a===this.fields[c].options.group)&&!1===this.fields[c].isValid(b))return!1;return!0},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var a=this;return this.fields=[],this.fieldsMappedById={},this.$element.find(this.options.inputs).each(function(){var b=new window.Parsley(this,{},a);"ParsleyField"!==b.__class__&&"ParsleyFieldMultiple"!==b.__class__||b.$element.is(b.options.excluded)||"undefined"==typeof a.fieldsMappedById[b.__class__+"-"+b.__id__]&&(a.fieldsMappedById[b.__class__+"-"+b.__id__]=b,a.fields.push(b))}),this}};var h=function(b,c,d,e,f){if(!new RegExp("ParsleyField").test(a.get(b,"__class__")))throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");if("function"!=typeof window.ParsleyValidator.validators[c]&&"Assert"!==window.ParsleyValidator.validators[c](d).__parentClass__)throw new Error("Valid validator expected");var g=function(b,c){return"undefined"!=typeof b.options[c+"Priority"]?b.options[c+"Priority"]:a.get(window.ParsleyValidator.validators[c](d),"priority")||2
};return e=e||g(b,c),"function"==typeof window.ParsleyValidator.validators[c](d).requirementsTransformer&&(d=window.ParsleyValidator.validators[c](d).requirementsTransformer()),$.extend(window.ParsleyValidator.validators[c](d),{name:c,requirements:d,priority:e,groups:[e],isDomConstraint:f||a.attr(b.$element,b.options.namespace,c)})},i=function(b,c,d){this.__class__="ParsleyField",this.__id__=a.hash(4),this.$element=$(b),"undefined"!=typeof d?(this.parent=d,this.OptionsFactory=this.parent.OptionsFactory,this.options=this.OptionsFactory.get(this)):(this.OptionsFactory=c,this.options=this.OptionsFactory.get(this)),this.constraints=[],this.constraintsByName={},this.validationResult=[],this._bindConstraints()};i.prototype={validate:function(a){return this.value=this.getValue(),$.emit("parsley:field:validate",this),$.emit("parsley:field:"+(this.isValid(a,this.value)?"success":"error"),this),$.emit("parsley:field:validated",this),this.validationResult},isValid:function(a,b){this.refreshConstraints();var c=this._getConstraintsSortedPriorities();if(b=b||this.getValue(),0===b.length&&!this._isRequired()&&"undefined"==typeof this.options.validateIfEmpty&&!0!==a)return this.validationResult=[];if(!1===this.options.priorityEnabled)return!0===(this.validationResult=this.validateThroughValidator(b,this.constraints,"Any"));for(var d=0;d<c.length;d++)if(!0!==(this.validationResult=this.validateThroughValidator(b,this.constraints,c[d])))return!1;return!0},getValue:function(){var a;return a="undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof a||null===a?"":!0===this.options.trimValue?a.replace(/^\s+|\s+$/g,""):a},refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},addConstraint:function(a,b,c,d){if(a=a.toLowerCase(),"function"==typeof window.ParsleyValidator.validators[a]){var e=new h(this,a,b,c,d);"undefined"!==this.constraintsByName[e.name]&&this.removeConstraint(e.name),this.constraints.push(e),this.constraintsByName[e.name]=e}return this},removeConstraint:function(a){for(var b=0;b<this.constraints.length;b++)if(a===this.constraints[b].name){this.constraints.splice(b,1);break}return this},updateConstraint:function(a,b,c){return this.removeConstraint(a).addConstraint(a,b,c)},_bindConstraints:function(){for(var a=[],b=0;b<this.constraints.length;b++)!1===this.constraints[b].isDomConstraint&&a.push(this.constraints[b]);this.constraints=a;for(var c in this.options)this.addConstraint(c,this.options[c]);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){(this.$element.hasClass("required")||this.$element.attr("required"))&&this.addConstraint("required",!0,void 0,!0),"string"==typeof this.$element.attr("pattern")&&this.addConstraint("pattern",this.$element.attr("pattern"),void 0,!0),"undefined"!=typeof this.$element.attr("min")&&"undefined"!=typeof this.$element.attr("max")?this.addConstraint("range",[this.$element.attr("min"),this.$element.attr("max")],void 0,!0):"undefined"!=typeof this.$element.attr("min")?this.addConstraint("min",this.$element.attr("min"),void 0,!0):"undefined"!=typeof this.$element.attr("max")&&this.addConstraint("max",this.$element.attr("max"),void 0,!0);var a=this.$element.attr("type");return"undefined"==typeof a?this:"number"===a?this.addConstraint("type","integer",void 0,!0):new RegExp(a,"i").test("email url range")?this.addConstraint("type",a,void 0,!0):this},_isRequired:function(){return"undefined"==typeof this.constraintsByName.required?!1:!1!==this.constraintsByName.required.requirements},_getConstraintsSortedPriorities:function(){for(var a=[],b=0;b<this.constraints.length;b++)-1===a.indexOf(this.constraints[b].priority)&&a.push(this.constraints[b].priority);return a.sort(function(a,b){return b-a}),a}};var j=function(){this.__class__="ParsleyFieldMultiple"};j.prototype={addElement:function(a){return this.$elements.push(a),this},refreshConstraints:function(){var a;if(this.constraints=[],this.$element.is("select"))return this.actualizeOptions()._bindConstraints(),this;for(var b=0;b<this.$elements.length;b++)if($("html").has(this.$elements[b]).length){a=this.$elements[b].data("ParsleyFieldMultiple").refreshConstraints().constraints;for(var c=0;c<a.length;c++)this.addConstraint(a[c].name,a[c].requirements,a[c].priority,a[c].isDomConstraint)}else this.$elements.splice(b,1);return this},getValue:function(){if("undefined"!=typeof this.options.value)return this.options.value;if(this.$element.is("input[type=radio]"))return $("["+this.options.namespace+'multiple="'+this.options.multiple+'"]:checked').val()||"";if(this.$element.is("input[type=checkbox]")){var a=[];return $("["+this.options.namespace+'multiple="'+this.options.multiple+'"]:checked').each(function(){a.push($(this).val())}),a.length?a:[]}return this.$element.is("select")&&null===this.$element.val()?[]:this.$element.val()},_init:function(a){return this.$elements=[this.$element],this.options.multiple=a,this}};var k=$({}),l={};$.listen=function(a){if("undefined"==typeof l[a]&&(l[a]=[]),"function"==typeof arguments[1])return l[a].push({fn:arguments[1]});if("object"==typeof arguments[1]&&"function"==typeof arguments[2])return l[a].push({fn:arguments[2],ctxt:arguments[1]});throw new Error("Wrong parameters")},$.listenTo=function(a,b,c){if("undefined"==typeof l[b]&&(l[b]=[]),!(a instanceof i||a instanceof g))throw new Error("Must give Parsley instance");if("string"!=typeof b||"function"!=typeof c)throw new Error("Wrong parameters");l[b].push({instance:a,fn:c})},$.unsubscribe=function(a,b){if("undefined"!=typeof l[a]){if("string"!=typeof a||"function"!=typeof b)throw new Error("Wrong arguments");for(var c=0;c<l[a].length;c++)if(l[a][c].fn===b)return l[a].splice(c,1)}},$.unsubscribeTo=function(a,b){if("undefined"!=typeof l[b]){if(!(a instanceof i||a instanceof g))throw new Error("Must give Parsley instance");for(var c=0;c<l[b].length;c++)if("undefined"!=typeof l[b][c].instance&&l[b][c].instance.__id__===a.__id__)return l[b].splice(c,1)}},$.unsubscribeAll=function(a){"undefined"!=typeof l[a]&&delete l[a]},$.emit=function(a,b){if("undefined"!=typeof l[a])for(var c=0;c<l[a].length;c++)if("undefined"!=typeof l[a][c].instance){if(b instanceof i||b instanceof g)if(l[a][c].instance.__id__!==b.__id__){if(l[a][c].instance instanceof g&&b instanceof i)for(var d=0;d<l[a][c].instance.fields.length;d++)if(l[a][c].instance.fields[d].__id__===b.__id__){l[a][c].fn.apply(k,Array.prototype.slice.call(arguments,1));continue}}else l[a][c].fn.apply(k,Array.prototype.slice.call(arguments,1))}else l[a][c].fn.apply("undefined"!=typeof l[a][c].ctxt?l[a][c].ctxt:k,Array.prototype.slice.call(arguments,1))},$.subscribed=function(){return l},window.ParsleyConfig=window.ParsleyConfig||{},window.ParsleyConfig.i18n=window.ParsleyConfig.i18n||{},window.ParsleyConfig.i18n.en=$.extend(window.ParsleyConfig.i18n.en||{},{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or less.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or less.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),"undefined"!=typeof window.ParsleyValidator&&window.ParsleyValidator.addCatalog("en",window.ParsleyConfig.i18n.en,!0);var m=function(b,c,d){if(this.__class__="Parsley",this.__version__="2.0.2",this.__id__=a.hash(4),"undefined"==typeof b)throw new Error("You must give an element");if("undefined"!=typeof d&&"ParsleyForm"!==d.__class__)throw new Error("Parent instance must be a ParsleyForm instance");return this.init($(b),c,d)};m.prototype={init:function(c,d,e){if(!c.length)throw new Error("You must bind Parsley on an existing element.");if(this.$element=c,this.$element.data("Parsley")){var g=this.$element.data("Parsley");return"undefined"!=typeof e&&(g.parent=e),g}return this.OptionsFactory=new f(b,a.get(window,"ParsleyConfig")||{},d,this.getNamespace(d)),this.options=this.OptionsFactory.get(this),this.$element.is("form")||a.attr(this.$element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.$element.is(this.options.inputs)&&!this.$element.is(this.options.excluded)?this.isMultiple()?this.handleMultiple(e):this.bind("parsleyField",e):this},isMultiple:function(){return this.$element.is("input[type=radio], input[type=checkbox]")&&"undefined"==typeof this.options.multiple||this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple")},handleMultiple:function(b){var c,d,e,f=this;if(this.options=$.extend(this.options,b?b.OptionsFactory.get(b):{},a.attr(this.$element,this.options.namespace)),this.options.multiple?d=this.options.multiple:"undefined"!=typeof this.$element.attr("name")&&this.$element.attr("name").length?d=c=this.$element.attr("name"):"undefined"!=typeof this.$element.attr("id")&&this.$element.attr("id").length&&(d=this.$element.attr("id")),this.$element.is("select")&&"undefined"!=typeof this.$element.attr("multiple"))return this.bind("parsleyFieldMultiple",b,d||this.__id__);if("undefined"==typeof d)return window.console&&window.console.warn&&window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;if(d=d.replace(/(:|\.|\[|\]|\$)/g,""),"undefined"!=typeof c&&$('input[name="'+c+'"]').each(function(){$(this).is("input[type=radio], input[type=checkbox]")&&$(this).attr(f.options.namespace+"multiple",d)}),$("["+this.options.namespace+"multiple="+d+"]").length)for(var g=0;g<$("["+this.options.namespace+"multiple="+d+"]").length;g++)if("undefined"!=typeof $($("["+this.options.namespace+"multiple="+d+"]").get(g)).data("Parsley")){e=$($("["+this.options.namespace+"multiple="+d+"]").get(g)).data("Parsley"),this.$element.data("ParsleyFieldMultiple")||(e.addElement(this.$element),this.$element.attr(this.options.namespace+"id",e.__id__));break}return this.bind("parsleyField",b,d,!0),e||this.bind("parsleyFieldMultiple",b,d)},getNamespace:function(c){return"undefined"!=typeof this.$element.data("parsleyNamespace")?this.$element.data("parsleyNamespace"):"undefined"!=typeof a.get(c,"namespace")?c.namespace:"undefined"!=typeof a.get(window,"ParsleyConfig.namespace")?window.ParsleyConfig.namespace:b.namespace},bind:function(b,d,e,f){var h;switch(b){case"parsleyForm":h=$.extend(new g(this.$element,this.OptionsFactory),new c,window.ParsleyExtend)._bindFields();break;case"parsleyField":h=$.extend(new i(this.$element,this.OptionsFactory,d),new c,window.ParsleyExtend);break;case"parsleyFieldMultiple":h=$.extend(new i(this.$element,this.OptionsFactory,d),new c,new j,window.ParsleyExtend)._init(e);break;default:throw new Error(b+"is not a supported Parsley type")}return"undefined"!=typeof e&&a.setAttr(this.$element,this.options.namespace,"multiple",e),"undefined"!=typeof f?(this.$element.data("ParsleyFieldMultiple",h),h):(new RegExp("ParsleyF","i").test(h.__class__)&&(this.$element.data("Parsley",h),$.emit("parsley:"+("parsleyForm"===b?"form":"field")+":init",h)),h)}},$.fn.parsley=$.fn.psly=function(a){if(this.length>1){var b=[];return this.each(function(){b.push($(this).parsley(a))}),b}return $(this).length?new m(this,a):void(window.console&&window.console.warn&&window.console.warn("You must bind Parsley on an existing element."))},window.ParsleyUI="function"==typeof a.get(window,"ParsleyConfig.ParsleyUI")?(new window.ParsleyConfig.ParsleyUI).listen():(new e).listen(),"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),"undefined"==typeof window.ParsleyConfig&&(window.ParsleyConfig={}),window.Parsley=window.psly=m,window.ParsleyUtils=a,window.ParsleyValidator=new d(window.ParsleyConfig.validators,window.ParsleyConfig.i18n),!1!==a.get(window,"ParsleyConfig.autoBind")&&$(document).ready(function(){$("[data-parsley-validate]").length&&$("[data-parsley-validate]").parsley()})});
})(jQuery);
(function($) {

	$('#sass-yes').change(function() {
	    $('#compass').toggleClass('active');
	});

	$('#cpt-yes').change(function() {
	    $('#cpt-number-wrapper').toggleClass('active');
	});

	// Watch for change of CPT number and then create that many form fields
	$('#cpt-number').change(function() {
		var cpt_number = $('#cpt-number').val();

		while (cpt_number > 0) {
			var html_string = '<div class="question"><label>What is the CPT name?</label><input required class="name plain buffer" type="text" name="cpt_name_' + cpt_number.toString() + '" data-parsley-required="true"></div>';

			$('#cpt-name-wrapper').append(html_string);

			cpt_number = cpt_number - 1;
		}
	});
})(jQuery);