parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KrVb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){void 0===t&&(t=5),this.strength=t,this.x=0,this.y=0}return t.prototype.actionDetected=function(t){},t.prototype.actionTime=function(t){var e,s,n=t.el,i=t.mouseX,r=t.mouseY,h=t.elX,o=t.elY;i>h?r>o?(e=-this.strength,s=-this.strength):(e=-this.strength,s=this.strength):r>o?(e=this.strength,s=-this.strength):(e=this.strength,s=this.strength),e+=this.x,s+=this.y,this.x=e,this.y=s,n.style.transform="translate("+e+"px, "+s+"px)"},t.prototype.dispose=function(t){t.el.style.transform="none"},t}();exports.default=t;
},{}],"RNG9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){void 0===t&&(t=100),this.wait=t}return t.prototype.actionDetected=function(t){t.el.style.animation="vibrate 0.1s infinite ease",setTimeout(function(){t.el.style.animation="none",t.el.style.transform="translateY(-50px)"},this.wait)},t.prototype.actionTime=function(t){},t.prototype.dispose=function(t){t.el.style.animation="none",t.el.style.transform="none"},t}();exports.default=t;
},{}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"Yxnh":[function(require,module,exports) {
var process = require("process");
var t=require("process");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getExtension=a,exports.getMimeType=s,exports.delay=c,exports.isDataUrl=u,exports.toDataURL=p,exports.getDataURLContent=f,exports.canvasToBlob=g,exports.toArray=d,exports.getNodeWidth=m,exports.getNodeHeight=w,exports.getPixelRatio=x,exports.createImage=v,exports.svgToDataURL=y,exports.getBlobFromImageURL=b,exports.uuid=void 0;var e=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{c(o.next(t))}catch(e){i(e)}}function s(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,s)}c((o=o.apply(t,e||[])).next())})};const n="application/font-woff",o="image/jpeg",r={woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o,jpeg:o,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"},i=function(){let t=0;return()=>(t+=1,`u${(()=>`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4))()}${t}`)}();function a(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function s(t){const e=a(t).toLowerCase();return r[e]||""}function c(t){return e=>new Promise(n=>{setTimeout(()=>{n(e)},t)})}function u(t){return-1!==t.search(/^(data:)/)}function p(t,e){return`data:${e};base64,${t}`}function f(t){return t.split(/,/)[1]}function l(t){return new Promise(e=>{const n=window.atob(t.toDataURL().split(",")[1]),o=n.length,r=new Uint8Array(o);for(let t=0;t<o;t+=1)r[t]=n.charCodeAt(t);e(new Blob([r],{type:"image/png"}))})}function g(t){return t.toBlob?new Promise(e=>t.toBlob(e)):l(t)}function d(t){const e=[];for(let n=0,o=t.length;n<o;n+=1)e.push(t[n]);return e}function h(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}function m(t){const e=h(t,"border-left-width"),n=h(t,"border-right-width");return t.clientWidth+e+n}function w(t){const e=h(t,"border-top-width"),n=h(t,"border-bottom-width");return t.clientHeight+e+n}function x(){let e,n;try{n=t}catch(r){}const o=n&&n.env?n.env.devicePixelRatio:null;return o&&(e=parseInt(o,10),isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}function v(t){return new Promise((e,n)=>{const o=new Image;o.onload=(()=>e(o)),o.onerror=n,o.crossOrigin="anonymous",o.src=t})}function y(t){return e(this,void 0,void 0,function*(){return Promise.resolve().then(()=>(new XMLSerializer).serializeToString(t)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)})}function b(t){return e(this,void 0,void 0,function*(){return v(t).then(e=>{const{width:n,height:o}=e,r=document.createElement("canvas"),i=r.getContext("2d"),a=x();return r.width=n*a,r.height=o*a,r.style.width=`${n}`,r.style.height=`${o}`,i.scale(a,a),i.drawImage(e,0,0),f(r.toDataURL(s(t)))})})}exports.uuid=i;
},{"process":"pBGv"}],"w9Wj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBlobFromURL=r;var e=require("./util");const t=3e4,o={};function n(e){return/ttf|otf|eot|woff2?/i.test(e)}function r(r,s){let a=r.replace(/\?.*/,"");if(n(a)&&(a=a.replace(/.*\//,"")),o[a])return o[a];s.cacheBust&&(r+=(/\?/.test(r)?"&":"?")+(new Date).getTime());const c=(window.fetch?window.fetch(r).then(e=>e.blob().then(t=>({blob:t,contentType:e.headers.get("Content-Type")||""}))).then(({blob:e,contentType:t})=>new Promise((o,n)=>{const r=new FileReader;r.onloadend=(()=>o({contentType:t,blob:r.result})),r.onerror=n,r.readAsDataURL(e)})).then(({blob:t,contentType:o})=>({contentType:o,blob:(0,e.getDataURLContent)(t)})):new Promise((o,n)=>{const s=new XMLHttpRequest;s.onreadystatechange=(()=>{if(4!==s.readyState)return;if(200!==s.status)return void n(new Error(`Failed to fetch resource: ${r}, status: ${s.status}`));const t=new FileReader;t.onloadend=(()=>{o({blob:(0,e.getDataURLContent)(t.result),contentType:s.getResponseHeader("Content-Type")||""})}),t.readAsDataURL(s.response)}),s.ontimeout=(()=>{n(new Error(`Timeout of ${t}ms occured while fetching resource: ${r}`))}),s.responseType="blob",s.timeout=t,s.open("GET",r,!0),s.send()})).catch(e=>{let t="";if(s.imagePlaceholder){const e=s.imagePlaceholder.split(/,/);e&&e[1]&&(t=e[1])}let o=`Failed to fetch resource: ${r}`;return e&&(o="string"==typeof e?e:e.message),o&&console.error(o),t});return o[a]=c,c}
},{"./util":"Yxnh"}],"ooin":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clonePseudoElements=n;var e,t=require("./util");function n(t,n){[":before",":after"].forEach(o=>e.clonePseudoElement(t,n,o))}!function(e){e.clonePseudoElement=function(e,n,o){const r=window.getComputedStyle(e,o),c=r.getPropertyValue("content");if(""===c||"none"===c)return;const u=(0,t.uuid)();try{n.className=`${n.className} ${u}`}catch(a){return}const s=document.createElement("style");s.appendChild(function(e,n,o){const r=`.${e}:${n}`,c=o.cssText?function(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(o):function(e){return(0,t.toArray)(e).map(t=>{const n=e.getPropertyValue(t),o=e.getPropertyPriority(t);return`${t}: ${n}${o?" !important":""};`}).join(" ")}(o);return document.createTextNode(`${r}{${c}}`)}(u,o,r)),n.appendChild(s)}}(e||(e={}));
},{"./util":"Yxnh"}],"kKSF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cloneNode=l;var e=require("./getBlobFromURL"),t=require("./clonePseudoElements"),n=require("./util"),o=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function u(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,u)}c((o=o.apply(e,t||[])).next())})};function r(t,r){return o(this,void 0,void 0,function*(){if(t instanceof HTMLCanvasElement){const e=t.toDataURL();return"data:,"===e?Promise.resolve(t.cloneNode(!1)):(0,n.createImage)(e)}return t instanceof HTMLVideoElement&&t.poster?Promise.resolve(t.poster).then(t=>(0,e.getBlobFromURL)(t,r)).then(e=>(0,n.toDataURL)(e.blob,(0,n.getMimeType)(t.poster)||e.contentType)).then(e=>(0,n.createImage)(e)):Promise.resolve(t.cloneNode(!1))})}function i(e,t,r){var i;return o(this,void 0,void 0,function*(){const o=(0,n.toArray)((null!==(i=e.shadowRoot)&&void 0!==i?i:e).childNodes);return 0===o.length?Promise.resolve(t):o.reduce((e,n)=>e.then(()=>l(n,r)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()).then(()=>t)})}function s(e,n){return o(this,void 0,void 0,function*(){return n instanceof Element?Promise.resolve().then(()=>u(e,n)).then(()=>(0,t.clonePseudoElements)(e,n)).then(()=>c(e,n)).then(()=>n):n})}function u(e,t){const o=window.getComputedStyle(e),r=t.style;r&&(o.cssText?r.cssText=o.cssText:(0,n.toArray)(o).forEach(e=>{r.setProperty(e,o.getPropertyValue(e),o.getPropertyPriority(e))}))}function c(e,t){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function l(e,t,n){return o(this,void 0,void 0,function*(){return n||!t.filter||t.filter(e)?Promise.resolve(e).then(e=>r(e,t)).then(n=>i(e,n,t)).then(t=>s(e,t)):Promise.resolve(null)})}
},{"./getBlobFromURL":"w9Wj","./clonePseudoElements":"ooin","./util":"Yxnh"}],"ZV9H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.shouldEmbed=s,exports.embedResources=u,exports.filterPreferredFontFormat=c,exports.parseURLs=i,exports.embed=a;var e=require("./getBlobFromURL"),r=require("./util");const t=/url\((['"]?)([^'"]+?)\1\)/g,n=/url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,o=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function s(e){return-1!==e.search(t)}function u(e,r,t){if(!s(e))return Promise.resolve(e);const n=c(e,t);return Promise.resolve(n).then(i).then(e=>e.reduce((e,n)=>e.then(e=>a(e,n,r,t)),Promise.resolve(n)))}function c(e,{preferredFontFormat:r}){return r?e.replace(o,e=>{for(;;){const[t,,o]=n.exec(e)||[];if(!o)return"";if(o===r)return`src: ${t};`}}):e}function i(e){const n=[];return e.replace(t,(e,r,t)=>(n.push(t),e)),n.filter(e=>!(0,r.isDataUrl)(e))}function a(t,n,o,s,u){const c=o?l(n,o):n;return Promise.resolve(c).then(r=>u?u(r):(0,e.getBlobFromURL)(r,s)).then(e=>"string"==typeof e?(0,r.toDataURL)(e,(0,r.getMimeType)(n)):(0,r.toDataURL)(e.blob,(0,r.getMimeType)(n)||e.contentType)).then(e=>t.replace(f(n),`$1${e}$3`)).then(e=>e,()=>c)}function l(e,r){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const t=document.implementation.createHTMLDocument(),n=t.createElement("base"),o=t.createElement("a");return t.head.appendChild(n),t.body.appendChild(o),r&&(n.href=r),o.href=e,o.href}function f(e){return new RegExp(`(url\\(['"]?)(${p(e)})(['"]?\\))`,"g")}function p(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}
},{"./getBlobFromURL":"w9Wj","./util":"Yxnh"}],"oUqf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.embedImages=o;var e=require("./getBlobFromURL"),t=require("./embedResources"),r=require("./util"),n=function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function s(e){try{c(n.next(e))}catch(t){i(t)}}function u(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,u)}c((n=n.apply(e,t||[])).next())})};function o(e,t){return n(this,void 0,void 0,function*(){return e instanceof Element?Promise.resolve(e).then(e=>i(e,t)).then(e=>s(e,t)).then(e=>u(e,t)):Promise.resolve(e)})}function i(e,r){var o;return n(this,void 0,void 0,function*(){const n=null===(o=e.style)||void 0===o?void 0:o.getPropertyValue("background");return n?Promise.resolve(n).then(e=>(0,t.embedResources)(e,null,r)).then(t=>(e.style.setProperty("background",t,e.style.getPropertyPriority("background")),e)):Promise.resolve(e)})}function s(t,n){if(!(t instanceof HTMLImageElement)||(0,r.isDataUrl)(t.src))return Promise.resolve(t);const o=t.src;return Promise.resolve(o).then(t=>(0,e.getBlobFromURL)(t,n)).then(e=>(0,r.toDataURL)(e.blob,(0,r.getMimeType)(o)||e.contentType)).then(e=>new Promise((r,n)=>{t.onload=r,t.onerror=n,t.srcset="",t.src=e})).then(()=>t,()=>t)}function u(e,t){return n(this,void 0,void 0,function*(){const n=(0,r.toArray)(e.childNodes).map(e=>o(e,t));return Promise.all(n).then(()=>e)})}
},{"./getBlobFromURL":"w9Wj","./embedResources":"ZV9H","./util":"Yxnh"}],"ACkI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseWebFontRules=s,exports.embedWebFonts=o,exports.getWebFontCss=l,exports.getCssRules=i;var e=require("./util"),t=require("./embedResources"),r=function(e,t,r,n){return new(r||(r=Promise))(function(s,o){function l(e){try{c(n.next(e))}catch(t){o(t)}}function i(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(l,i)}c((n=n.apply(e,t||[])).next())})};const n={};function s(t){return r(this,void 0,void 0,function*(){return new Promise((r,n)=>{t.ownerDocument||n(new Error("Provided element is not within a Document")),r((0,e.toArray)(t.ownerDocument.styleSheets))}).then(e=>i(e)).then(c)})}function o(e,t){return r(this,void 0,void 0,function*(){return(null!=t.fontEmbedCss?Promise.resolve(t.fontEmbedCss):l(e,t)).then(t=>{const r=document.createElement("style"),n=document.createTextNode(t);return r.appendChild(n),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),e})})}function l(e,n){return r(this,void 0,void 0,function*(){return s(e).then(e=>Promise.all(e.map(e=>{const r=e.parentStyleSheet?e.parentStyleSheet.href:null;return(0,t.embedResources)(e.cssText,r,n)}))).then(e=>e.join("\n"))})}function i(t){return r(this,void 0,void 0,function*(){const r=[],n=[];return t.forEach(r=>{if("cssRules"in r)try{(0,e.toArray)(r.cssRules).forEach((e,t)=>{if(e.type===CSSRule.IMPORT_RULE){let s=t+1;n.push(h(e.href,r).then(a).then(e=>{u(e).forEach(e=>{try{r.insertRule(e,e.startsWith("@import")?s+=1:r.cssRules.length)}catch(t){console.log("Error inserting rule from remote css",{rule:e,error:t})}})}).catch(e=>{console.log("Error loading remote css",e.toString())}))}})}catch(s){const e=t.find(e=>null===e.href)||document.styleSheets[0];null!=r.href&&n.push(h(r.href,e).then(a).then(t=>{u(t).forEach(t=>{e.insertRule(t,r.cssRules.length)})}).catch(e=>{console.log("Error loading remote stylesheet",e.toString())})),console.log("Error inlining remote css file",s.toString())}}),Promise.all(n).then(()=>(t.forEach(t=>{if("cssRules"in t)try{(0,e.toArray)(t.cssRules).forEach(e=>{r.push(e)})}catch(n){console.log(`Error while reading CSS rules from ${t.href}`,n.toString())}}),r))})}function c(e){return e.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>(0,t.shouldEmbed)(e.style.getPropertyValue("src")))}function u(e){if(void 0===e)return[];let t=e;const r=[],n=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;t=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");let o;for(;null!==(o=s.exec(t));)r.push(o[0]);t=t.replace(s,"");const l=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){if(null===(o=n.exec(t))){if(null===(o=l.exec(t)))break;n.lastIndex=l.lastIndex}else l.lastIndex=n.lastIndex;r.push(o[0])}return r}function h(e,t){if(n[e])return n[e];const r=fetch(e).then(t=>({url:e,cssText:t.text()}),e=>{console.log("ERROR FETCHING CSS: ",e.toString())});return n[e]=r,r}function a(e){return r(this,void 0,void 0,function*(){return e.cssText.then(t=>{let r=t;const n=/url\(["']?([^"')]+)["']?\)/g,s=(r.match(/url\([^)]+\)/g)||[]).map(t=>{let s=t.replace(n,"$1");if(!s.startsWith("https://")){const t=e.url;s=new URL(s,t).href}return new Promise((e,n)=>{fetch(s).then(e=>e.blob()).then(n=>{const s=new FileReader;s.addEventListener("load",n=>{r=r.replace(t,`url(${s.result})`),e([t,s.result])}),s.readAsDataURL(n)}).catch(n)})});return Promise.all(s).then(()=>r)})})}
},{"./util":"Yxnh","./embedResources":"ZV9H"}],"ozQZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSvgDataURL=e;var t=require("./util");function e(e,r,i){const u="http://www.w3.org/2000/svg",s=document.createElementNS(u,"svg"),n=document.createElementNS(u,"foreignObject");return s.setAttributeNS("","width",`${r}`),s.setAttributeNS("","height",`${i}`),s.setAttributeNS("","viewBox",`0 0 ${r} ${i}`),n.setAttributeNS("","width","100%"),n.setAttributeNS("","height","100%"),n.setAttributeNS("","x","0"),n.setAttributeNS("","y","0"),n.setAttributeNS("","externalResourcesRequired","true"),s.appendChild(n),n.appendChild(e),(0,t.svgToDataURL)(s)}
},{"./util":"Yxnh"}],"LQiV":[function(require,module,exports) {
"use strict";function t(t,e){const{style:o}=t;e.backgroundColor&&(o.backgroundColor=e.backgroundColor),e.width&&(o.width=`${e.width}px`),e.height&&(o.height=`${e.height}px`);const r=e.style;return null!=r&&Object.keys(r).forEach(t=>{o[t]=r[t]}),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyStyleWithOptions=t;
},{}],"Lrom":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toSvg=u,exports.toCanvas=d,exports.toPixelData=s,exports.toPng=g,exports.toJpeg=v,exports.toBlob=l,exports.getWebFontEmbedCss=f,exports.toSvgDataURL=void 0;var t=require("./cloneNode"),e=require("./embedImages"),n=require("./embedWebFonts"),o=require("./createSvgDataURL"),i=require("./applyStyleWithOptions"),r=require("./util"),a=function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function a(t){try{u(o.next(t))}catch(e){r(e)}}function h(t){try{u(o.throw(t))}catch(e){r(e)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,h)}u((o=o.apply(t,e||[])).next())})};function h(t,e={}){return{width:e.width||(0,r.getNodeWidth)(t),height:e.height||(0,r.getNodeHeight)(t)}}function u(r,u={}){return a(this,void 0,void 0,function*(){const{width:a,height:c}=h(r,u);return(0,t.cloneNode)(r,u,!0).then(t=>(0,n.embedWebFonts)(t,u)).then(t=>(0,e.embedImages)(t,u)).then(t=>(0,i.applyStyleWithOptions)(t,u)).then(t=>(0,o.createSvgDataURL)(t,a,c))})}const c=u;function d(t,e={}){return a(this,void 0,void 0,function*(){return u(t,e).then(r.createImage).then((0,r.delay)(100)).then(n=>{const o=document.createElement("canvas"),i=o.getContext("2d"),a=e.pixelRatio||(0,r.getPixelRatio)(),{width:u,height:c}=h(t,e),d=e.canvasWidth||u,s=e.canvasHeight||c;return o.width=d*a,o.height=s*a,o.style.width=`${d}`,o.style.height=`${s}`,e.backgroundColor&&(i.fillStyle=e.backgroundColor,i.fillRect(0,0,o.width,o.height)),i.drawImage(n,0,0,o.width,o.height),o})})}function s(t,e={}){return a(this,void 0,void 0,function*(){const{width:n,height:o}=h(t,e);return d(t,e).then(t=>{return t.getContext("2d").getImageData(0,0,n,o).data})})}function g(t,e={}){return a(this,void 0,void 0,function*(){return d(t,e).then(t=>t.toDataURL())})}function v(t,e={}){return a(this,void 0,void 0,function*(){return d(t,e).then(t=>t.toDataURL("image/jpeg",e.quality||1))})}function l(t,e={}){return a(this,void 0,void 0,function*(){return d(t,e).then(r.canvasToBlob)})}function f(t,e={}){return a(this,void 0,void 0,function*(){return(0,n.getWebFontCss)(t,e)})}exports.toSvgDataURL=c;
},{"./cloneNode":"kKSF","./embedImages":"oUqf","./embedWebFonts":"ACkI","./createSvgDataURL":"ozQZ","./applyStyleWithOptions":"LQiV","./util":"Yxnh"}],"Fen8":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function a(t){try{s(o.next(t))}catch(e){i(e)}}function l(t){try{s(o.throw(t))}catch(e){i(e)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(a,l)}s((o=o.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(l){i=[6,l],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("html-to-image"),o=function(){function o(t,e){void 0===t&&(t=5),void 0===e&&(e=500),this.numClones=t,this.wait=e,this.clonesArray=[]}return o.prototype.makePositions=function(t){var e=document.body.clientHeight-t.clientHeight,n=document.body.clientWidth-t.clientWidth;return{x:Math.floor(Math.random()*e),y:Math.floor(Math.random()*n),z:Math.floor(360*Math.random())}},o.prototype.actionDetected=function(o){return t(this,void 0,Promise,function(){var t,r,i,a,l,s,c=this;return e(this,function(e){switch(e.label){case 0:return[4,(0,n.toPng)(o.el)];case 1:for(t=e.sent(),r=0;r<this.numClones;r++)(i=new Image).src=t,i.className="cloned-img",a=this.makePositions(o.el),l=a.x,s=a.y,i.style.top=l+"px",i.style.left=s+"px",this.clonesArray.push(i),document.body.appendChild(i);return this.interval=setInterval(function(){c.clonesArray.forEach(function(t){var e=c.makePositions(t),n=e.x,o=e.y,r=e.z;t.style.top=n+"px",t.style.left=o+"px",t.style.transform="rotate("+r+"deg)"})},this.wait),[2]}})})},o.prototype.actionTime=function(t){},o.prototype.dispose=function(t){for(var e=0;e<this.numClones;e++)document.body.removeChild(this.clonesArray.pop());clearInterval(this.interval)},o}();exports.default=o;
},{"html-to-image":"Lrom"}],"K2Ja":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){void 0===e&&(e=100),this.wait=e}return e.prototype.actionDetected=function(e){e.el.style.animation="fade 0.5s ease forwards",e.el.style.pointerEvents="none"},e.prototype.actionTime=function(e){},e.prototype.dispose=function(e){e.el.style.animation="none",e.el.style.pointerEvents="default"},e}();exports.default=e;
},{}],"ex3U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){void 0===e&&(e=100),this.wait=e}return e.prototype.actionDetected=function(e){var t=this,l=e.el.clientWidth+10,o=e.el.clientHeight+10;this.wall=document.createElement("div"),this.wall.className="wall";var i=Math.floor(o/35);console.log(i);for(var a=0;a<i;a++){var n=document.createElement("div");n.className="row";for(var s=0;s<10;s++){var r=document.createElement("div");r.className="brick",n.appendChild(r)}this.wall.appendChild(n)}document.body.appendChild(this.wall),this.wall.style.width=l+"px",setTimeout(function(){t.wall.style.top=e.elY-o/2+"px",t.wall.style.left=e.elX-l/2+"px"},50)},e.prototype.actionTime=function(e){},e.prototype.dispose=function(e){e.el.style.animation="none",e.el.style.pointerEvents="default",document.body.removeChild(this.wall)},e}();exports.default=e;
},{}],"Gpqn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];function a(a){var r=new Array(a),o=e.length,i=new Array(o);if(a>o)throw new RangeError("getRandom: more elements taken than available");for(;a--;){var t=Math.floor(Math.random()*o);r[a]=e[t in i?i[t]:t],i[t]=--o in i?i[o]:o}return r}var r=function(){function e(e,a){void 0===e&&(e=.25),void 0===a&&(a=5),this.wait=e,this.numColors=a,this.spheres=[]}return e.prototype.actionDetected=function(e){var r=this,o=a(this.numColors);document.body.style.overflow="hidden",this.audio=document.createElement("audio"),this.audio.src="https://media1.vocaroo.com/mp3/1gfHBu9eh62R",this.audio.onloadstart=function(){r.audio.play();for(var a=0;a<o.length;a++){var i=document.createElement("div");i.className="za-warudo-sphere",i.style.top=e.elY+"px",i.style.left=e.elX+"px",i.style.backgroundColor=o[Math.floor(Math.random()*o.length)],i.style.animation="zw-grow 5.2s ease forwards "+r.wait*a+"s",r.spheres.push(i),document.body.appendChild(i)}}},e.prototype.actionTime=function(e){},e.prototype.dispose=function(e){for(;this.spheres.length;)document.body.removeChild(this.spheres.pop());this.audio.pause()},e}();exports.default=r;
},{}],"eIZ9":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./moveAround")),u=e(require("./flyUp")),a=e(require("./shadowClones")),l=e(require("./fade")),t=e(require("./wall")),d=e(require("./zaWarudo"));exports.default={moveAround:r.default,flyUp:u.default,shadowClones:a.default,fade:l.default,wall:t.default,zaWarudo:d.default};
},{"./moveAround":"KrVb","./flyUp":"RNG9","./shadowClones":"Fen8","./fade":"K2Ja","./wall":"ex3U","./zaWarudo":"Gpqn"}],"EVHm":[function(require,module,exports) {

},{}],"fUdq":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))(function(r,n){function o(e){try{u(s.next(e))}catch(t){n(t)}}function a(e){try{u(s.throw(e))}catch(t){n(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(o,a)}u((s=s.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var i,s,r,n,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,s&&(r=2&n[0]?s.return:n[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,n[1])).done)return r;switch(s=0,r&&(n=[2&n[0],r.value]),n[0]){case 0:case 1:r=n;break;case 4:return o.label++,{value:n[1],done:!1};case 5:o.label++,s=n[1],n=[0];continue;case 7:n=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){o=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){o.label=n[1];break}if(6===n[0]&&o.label<r[1]){o.label=r[1],r=n;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(n);break}r[2]&&o.ops.pop(),o.trys.pop();continue}n=t.call(e,o)}catch(a){n=[6,a],s=0}finally{i=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.effects=exports.Annoy=void 0;var s=i(require("./effects"));exports.effects=s.default,require("./utils/main.css");var r=function(){function i(i,s){var r=this;void 0===s&&(s=5),this.radius=5,this.debugMode=!1,this.debugAnimationSpeed=2,this.itemMap=new Map,this.act=function(i){return e(r,void 0,void 0,function(){var e,s,r,n,o,a,u;return t(this,function(t){switch(t.label){case 0:this.debugMode&&(void 0===this.cursorDiv&&this.generateDebugItems(this.debugAnimationSpeed),this.cursorDiv.style.top=i.clientY-20*this.radius+"px",this.cursorDiv.style.left=i.clientX-20*this.radius+"px"),e=0,t.label=1;case 1:return e<this.dataset.length?(s=this.dataset[e],r=s.offsetLeft+s.clientWidth/2,n=s.offsetTop+s.clientHeight/2,o=i.clientX,a=i.clientY,u=Math.sqrt(Math.pow(o-r,2)+Math.pow(a-n,2)),this.debugMode&&(s.style.border="none"),u-20*this.radius<0?(this.debugMode&&(s.style.border="2px solid black"),this.itemMap.get(s).active?[3,3]:(this.itemMap.get(s).active=!0,[4,this.effect.actionDetected({el:s,elX:r,elY:n,mouseX:o,mouseY:a})])):[3,5]):[3,8];case 2:t.sent(),t.label=3;case 3:return[4,this.effect.actionTime({el:s,elX:r,elY:n,mouseX:o,mouseY:a})];case 4:return t.sent(),[3,7];case 5:return this.itemMap.get(s).active?(this.itemMap.get(s).active=!1,[4,this.effect.dispose({el:s,elX:r,elY:n,mouseX:o,mouseY:a})]):[3,7];case 6:t.sent(),t.label=7;case 7:return e++,[3,1];case 8:return[2]}})})},this.radius=s,this.dataset=i;for(var n=0;n<this.dataset.length;n++){var o=this.dataset[n],a=(o.offsetLeft,o.clientWidth,o.offsetTop,o.clientHeight,{el:o,className:o.className,id:o.id,x:0,y:0,active:!1});this.itemMap.set(o,a)}}return i.prototype.generateDebugItems=function(e){var t=document.createElement("style");document.getElementsByTagName("head")[0].appendChild(t),this.cursorDiv=document.createElement("div"),this.cursorDiv.style.border="0.2px solid green",this.cursorDiv.style.width=20*this.radius*2+"px",this.cursorDiv.style.height=20*this.radius*2+"px",this.cursorDiv.style.borderRadius="100%",this.cursorDiv.style.position="absolute",this.cursorDiv.style.pointerEvents="none",this.cursorDiv.id="cursorDiv",this.cursorDiv.style.animation="cursorDivAnimation ease-out "+.75*(4-e)+"s infinite",document.body.append(this.cursorDiv)},i.prototype.startAnnoying=function(e){this.effect=e,document.addEventListener("mousemove",this.act,!0)},i.prototype.stopIt=function(){return e(this,void 0,void 0,function(){return t(this,function(e){return this.setDebugMode(!1),document.removeEventListener("mousemove",this.act,!0),[2]})})},i.prototype.setDebugMode=function(e,t){void 0===t&&(t=2),this.debugMode=e,this.debugAnimationSpeed=t,!1===this.debugMode&&(this.cursorDiv&&this.cursorDiv.remove(),this.cursorDiv=null)},i}();exports.Annoy=r;
},{"./effects":"eIZ9","./utils/main.css":"EVHm"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("../src/index"),t=document.getElementsByClassName("fun"),n=document.getElementById("effects"),c=Object.keys(e.effects),a=0;c.forEach(function(e){var t=document.createElement("option");t.text=e,t.value=a,n.add(t),a++});var s=null;function u(n){s&&s.stopIt(),(s=new e.Annoy(t,8)).startAnnoying(new(Object.values(e.effects)[n]))}n.addEventListener("change",function(e){u(e.target.value)}),u(0);
},{"../src/index":"fUdq"}]},{},["Focm"], null)
//# sourceMappingURL=/annoy.js/pages.c34ac8f7.js.map