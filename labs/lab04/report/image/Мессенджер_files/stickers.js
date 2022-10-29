﻿(()=>{"use strict";var t,e,i,r,a={11666:(t,e,i)=>{i(40851),i(91181),i(56997),i(96253);var r=i(91963),a=(i(66108),i(61540)),n=(0,i(19331).partConfigEnabled)("rlottie")&&!(0,a.isMvk)(),o=function(){var t,e,i,r,a=!1,s=!1,l={},c={},d={},u={},f={};function v(t,e){var i=n&&!e,r=g(t),a=1;if(r){hide(geByClass1("sticker_img",t)),addClass(t,"animation_play"),r.play();var o=attr(t,"data-loop-count");if(o=parseInt(o),isNaN(o)&&(o=3),-1!==o){var s,l,c=i?null==r||null==(s=r.listeners)?void 0:s.loopComplete:null==r||null==(l=r._cbs)?void 0:l.loopComplete;(!c||0===(null==c?void 0:c.length))&&r.addEventListener("loopComplete",(function e(){a++;var n=!0;o>=a&&(n=!1),n&&(m(t,!1),r.removeEventListener("loopComplete",e),r[i?"pause":"stop"]())}))}}}function p(t){var e=attr(t,"data-uid");return e||(e=attr(t,"data-uid",Math.random().toString(32).substr(2))),e}function m(t,e){f[p(t)]=e}function g(t){var e=attr(t,"data-uniq-id");if(!geByClass1("svg_sticker_animation",t))return!1;var i=d[e];return i||!1}function h(t,e,a){var o=n&&!e,s=g(t);if(s)"function"==typeof a&&a(s);else{var u=attr(t,"data-uniq-id"),v=attr(t,"data-uid");if(!f[p(t)])if(!o||!hasClass(t,"animation_play")){m(t,!0);var h=attr(t,"data-animation-path"),k=attr(t,"data-sticker-id"),_=!1,b=o?c[k]:l[k];if(k&&(_=(b||h)&&y(t)),_){var w=attr(t,"data-animation-class")||"",S=o?{container:t,loop:!0,autoplay:!0,name:v,group:"sticker",className:`svg_sticker_animation ${w}`}:{container:t,renderer:"svg",loop:!0,autoplay:!1,name:u,rendererSettings:{scaleMode:"noScale",progressiveLoad:!0,hideOnTransparent:!0,className:`svg_sticker_animation ${w}`}};b?S.animationData=b:S[o?"animationUrl":"path"]=h;var A=geByClass1("svg_sticker_animation",t);if(A&&re(A),s=(o?r:i).loadAnimation(S),!l[k]||o)return s instanceof Promise||(s=Promise.resolve(s)),void s.then((t=>{var e=o?"firstFrame":"data_ready";t.addEventListener(e,(()=>{var e=t.animationData;o?c[k]=e:l[k]=e,d[u]=t,"function"==typeof a&&a(t)}))}))}"function"==typeof a&&(d[u]=s,a(s))}}}function k(t){return e(n&&!t).then((t=>{if(Array.isArray(t)){var e=t[0],a=t[1];r=e,i=a}else i=t;return i}))}return{init(t){e=t.animatorLoader},checkSettingsAndLoadInWeb:function(t){if(StickersSettings.getAutoplay()){var e=ge("fc_msg"+t),i=geByClass1("sticker_animation",e);o.loadAndPlaySticker(i)}},checkSettingsAndLoad:function(t){if(StickersSettings.getAutoplay()){var e=$(`.msg_id_${t} .sticker_animation`);o.loadAndPlaySticker(e)}},loadStickerInMvkIMAndPlay:function(t,e){var i="_msg"+t;e&&(i="msg_id_"+t);var r=geByClass1("sticker_animation",geByClass1(i));o.loadAndPlayStickerWithTimer(r,500)},loadAutoplayAnimationStickers:function(t){if(i){if(t){if(s)return;s=!0}if(!a){a=!0;var e=geByClass("sticker_animation_autoplay");e&&each(e,(function(t,e){h(e,!1,(function(){v(e,!1)}))})),a=!1}}else k().then((()=>{o.loadAutoplayAnimationStickers(t)}))},loadAndPlaySticker:function(t,e){t&&(i?requestAnimationFrame((()=>{h(t,e,(function(){v(t,e)}))})):k(e).then((()=>{o.loadAndPlaySticker(t,e)})))},loadAndPlayStickerWithTimer:function(t,e){if(t&&!u[t]){e||(e=1e3);var i=ge(t);hasClass(i,"sticker_animation_disabled_timer")||(u[t]=setTimeout((function(){!i&&(i=ge(t),hasClass(i,"sticker_animation_disabled_timer"))||(o.loadAndPlaySticker(i),clearTimeout(u[t]),u[t]=!1)}),e))}},reloadStickers:function(){d={}},touchStartSticker:function(e){e.addEventListener("contextmenu",o.preventContextMenu,!1),t=setTimeout((function(){o.loadAndPlaySticker(e)}),500)},touchEndSticker:function(){t&&clearTimeout(t)},preventContextMenu:function(t){t.preventDefault(),t.stopPropagation()},stopAnimation(t,e){var i=n&&!e,r=g(t);if(r&&r[i?"pause":"stop"](),i){var a=attr(t,"data-uniq-id");removeClass(t,"animation_play"),show(geByClass1("sticker_img",t)),delete d[a]}}};function y(t){var e=t.getBoundingClientRect().top,i=t.getBoundingClientRect().bottom;return e<window.innerHeight&&i>=0&&isVisible(t)}}();o.init({animatorLoader:()=>Promise.all([Promise.all([i.e(75514),i.e(68592),i.e(79344)]).then(i.bind(i,86621)).then((t=>t.LottieManager)),Promise.resolve(r.default)])});var s={autoplay:0,setAutoplay:function(t){this.autoplay=t},getAutoplay:function(){return!!s.autoplay&&!s.isPreventAutoplayByCalls()},isPreventAutoplayByCalls:function(){return!!window.Calls&&window.Calls.isInActiveCall}},l=(i(59357),i(11417));i(70655),i(40906);var c={},d=(t,e,i,r)=>{delete c[e],1===r?Emoji.favorite.addFavoriteSticker(t,e,i):-1===r&&Emoji.favorite.deleteFavoriteSticker(t,e,i)};function u(){if(!Emoji.favoriteLimitNoticed){var t=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var r=String(t),a=0;a<e.length;a+=2){if(null!=e[a]){var n=String(e[a]).startsWith("%")?e[a]:"{"+e[a]+"}";r=r.replace(n,e[a+1])}}return r}(getLang("purchases_stickers_favorite_limit_notice"),"%s",Emoji.favoriteLimit);setTimeout(window.showFastBox(getLang("global_error"),t).hide,3e3),ajax.post("stickers.php",{act:"favorite_limit_noticed",value:1}),Emoji.favoriteLimitNoticed=!0}}var f={toggleFavorite:function(t,e,i){if(e&&e.stopPropagation(),!t.classList.contains("on")&&((r=Emoji.stickers[Emoji.TAB_FAVORITE_STICKERS].stickers)&&!(r.length<Emoji.favoriteLimit)))return u(),!1;var r,a=t.getAttribute("data-sticker-id"),n=t.getAttribute("data-hash");return!(!a||!n)&&(!c[a]&&(c[a]=1,t.classList.toggle("on"),void ajax.post("/stickers.php",{act:"toggle_favorite",sticker_id:a,hash:n},{onDone:d.pbind(i,a,t)})))},getStickerUrl:function(t,e){var i=String(e);if(l.colorScheme.isDarkScheme()&&(i=i.replace(/b$/,"")+"b"),window.Emoji){var r,a,n,o=null==(r=Emoji.stickersById)||null==(a=r[t])||null==(n=a.sticker[Emoji.STICKER_FIELD_IMAGES])?void 0:n[i];if(o)return o}var s={id:t,size:i};if(window.isMVK){if(window.stickers_cache){var c=window.stickers_cache.getStickerImage(t,i);if(c)return c}return window.store.stickers&&window.rs(window.store.stickers.url_template,{id:t,size:i})}return window.getTemplate("stickers_sticker_url",s)}};window.StickersAnimation=o,window.StickersSettings=s,window.Stickers=f;try{window.stManager.done(window.jsc("web/stickers.js"))}catch(t){}}},n={};function o(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={id:t,loaded:!1,exports:{}};return a[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=a,t=[],o.O=(e,i,r,a)=>{if(!i){var n=1/0;for(d=0;d<t.length;d++){for(var[i,r,a]=t[d],s=!0,l=0;l<i.length;l++)(!1&a||n>=a)&&Object.keys(o.O).every((t=>o.O[t](i[l])))?i.splice(l--,1):(s=!1,a<n&&(n=a));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[i,r,a]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},i=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,o.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var a=Object.create(null);o.r(a);var n={};e=e||[null,i({}),i([]),i(i)];for(var s=2&r&&t;"object"==typeof s&&!~e.indexOf(s);s=i(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>t[e]));return n.default=()=>t,o.d(a,n),a},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,i)=>(o.f[i](t,e),e)),[])),o.u=t=>75514===t?"react.d61a856f521b08e0b588.js":79344===t?"sticker.ab7e8053bd428c0a10d1.js":26156===t?t+".537ef7e23b0ecfc0a47c.js":void 0,o.miniCssF=t=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r={},o.l=(t,e,i,a)=>{if(r[t])r[t].push(e);else{var n,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")=="vk:"+i){n=d;break}}n||(s=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack","vk:"+i),n.src=t),r[t]=[e];var u=(e,i)=>{n.onerror=n.onload=null,clearTimeout(f);var a=r[t];if(delete r[t],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((t=>t(i))),e)return e(i)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),s&&document.head.appendChild(n)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="/dist/",(()=>{o.b=document.baseURI||self.location.href;var t={54346:0};o.f.j=(e,i)=>{var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)i.push(r[2]);else{var a=new Promise(((i,a)=>r=t[e]=[i,a]));i.push(r[2]=a);var n=o.p+o.u(e),s=new Error;o.l(n,(i=>{if(o.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var a=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",s.name="ChunkLoadError",s.type=a,s.request=n,r[1](s)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,i)=>{var r,a,[n,s,l]=i,c=0;for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var d=l(o);for(e&&e(i);c<n.length;c++)a=n[c],o.o(t,a)&&t[a]&&t[a][0](),t[n[c]]=0;return o.O(d)},i=self.webpackChunkvk=self.webpackChunkvk||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var s=o.O(void 0,[76429,22897,38288,68592],(()=>o(11666)));s=o.O(s)})();