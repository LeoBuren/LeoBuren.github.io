var __wpo = {"assets":{"main":["./images/favicon.svg","./images/wood_selfie_1.jpg","./images/markus-spiske-666905-unsplash_w_1400.jpg","./images/long-card.jpg","./images/Leo_Buren_CV.pdf","./webpack-bundle.css","./webpack-bundle.js","./","./404.html","./about.html"],"additional":[],"optional":[]},"externals":[],"hashesMap":{"014aa3ef72cf2d84ee3776f0672b7e71e477463c":"./images/favicon.svg","92292e099a84a7ab068c4b9e7b2742c25889043a":"./images/wood_selfie_1.jpg","c816f8dab5f6892d07aa1d61cdf5dd4b73d25c48":"./images/markus-spiske-666905-unsplash_w_1400.jpg","e5009e9a1b035331ae94b0cac59d8050204dea11":"./images/long-card.jpg","f676868d0ec5afcd756041825f387e5c88a6eaea":"./images/Leo_Buren_CV.pdf","66295aaeab5c6cca816dde3b3fd4f5ab534e3213":"./webpack-bundle.css","85b7075fcc0b4017bb92853ad8f400505d210544":"./webpack-bundle.js","ee0c38aebdbf740daa83867672c33683f81e0b6b":"./","6c95845e623267fb840eeea7899e990f7b18fb0a":"./404.html","6b58a735197d51fb4365260d44074b5779772a8c":"./about.html"},"strategy":"changed","responseStrategy":"cache-first","version":"2019-5-21 02:29:50","name":"webpack-offline","pluginVersion":"5.0.7","relativePaths":true};

!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var r,o,i;if(r=ExtendableEvent.prototype.waitUntil,o=FetchEvent.prototype.respondWith,i=new WeakMap,ExtendableEvent.prototype.waitUntil=function(e){var n=this,t=i.get(n);if(!t)return t=[Promise.resolve(e)],i.set(n,t),r.call(n,Promise.resolve().then(function e(){var r=t.length;return Promise.all(t.map(function(e){return e.catch(function(){})})).then(function(){return t.length!=r?e():(i.delete(n),Promise.all(t))})}));t.push(Promise.resolve(e))},FetchEvent.prototype.respondWith=function(e){return this.waitUntil(e),o.call(this,e)},void 0===a)var a=!1;function c(e,n){return caches.match(e,{cacheName:n}).then(function(t){return s(t)?t:u(t).then(function(t){return caches.open(n).then(function(n){return n.put(e,t)}).then(function(){return t})})}).catch(function(){})}function s(e){return!e||!e.redirected||!e.ok||"opaqueredirect"===e.type}function u(e){return s(e)?Promise.resolve(e):("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status})})}function f(e,n){console.groupCollapsed("[SW]:",e),n.forEach(function(e){console.log("Asset:",e)}),console.groupEnd()}!function(e,n){var t=n.cacheMaps,r=n.navigationPreload,o=e.strategy,i=e.responseStrategy,s=e.assets,l=e.hashesMap,h=e.externals,d=e.prefetchRequest||{credentials:"same-origin",mode:"cors"},p=e.name,v=e.version,m=p+":"+v,g=p+"$preload",w="__offline_webpack__data";Object.keys(s).forEach(function(e){s[e]=s[e].map(function(e){var n=new URL(e,location);return n.hash="",-1===h.indexOf(e)&&(n.search=""),n.toString()})}),l=Object.keys(l).reduce(function(e,n){var t=new URL(l[n],location);return t.search="",t.hash="",e[n]=t.toString(),e},{}),h=h.map(function(e){var n=new URL(e,location);return n.hash="",n.toString()});var y=[].concat(s.main,s.additional,s.optional);function b(n){var t=s[n];return caches.open(m).then(function(r){return R(r,t,{bust:e.version,request:d,failAll:"main"===n})}).then(function(){f("Cached assets: "+n,t)}).catch(function(e){throw console.error(e),e})}function P(n){return caches.keys().then(function(e){for(var n=e.length,t=void 0;n--&&0!==(t=e[n]).indexOf(p););if(t){var r=void 0;return caches.open(t).then(function(e){return r=e,e.match(new URL(w,location).toString())}).then(function(e){if(e)return Promise.all([r,r.keys(),e.json()])})}}).then(function(t){if(!t)return b(n);var r=t[0],o=t[1],i=t[2],a=i.hashmap,c=i.version;if(!i.hashmap||c===e.version)return b(n);var u=Object.keys(a).map(function(e){return a[e]}),h=o.map(function(e){var n=new URL(e.url);return n.search="",n.hash="",n.toString()}),p=s[n],v=[],g=p.filter(function(e){return-1===h.indexOf(e)||-1===u.indexOf(e)});Object.keys(l).forEach(function(e){var n=l[e];if(-1!==p.indexOf(n)&&-1===g.indexOf(n)&&-1===v.indexOf(n)){var t=a[e];t&&-1!==h.indexOf(t)?v.push([t,n]):g.push(n)}}),f("Changed assets: "+n,g),f("Moved assets: "+n,v);var w=Promise.all(v.map(function(e){return r.match(e[0]).then(function(n){return[e[1],n]})}));return caches.open(m).then(function(t){var r=w.then(function(e){return Promise.all(e.map(function(e){return t.put(e[0],e[1])}))});return Promise.all([r,R(t,g,{bust:e.version,request:d,failAll:"main"===n,deleteFirst:"main"!==n})])})})}function O(){return caches.keys().then(function(e){var n=e.map(function(e){if(0===e.indexOf(p)&&0!==e.indexOf(m))return console.log("[SW]:","Delete cache:",e),caches.delete(e)});return Promise.all(n)})}function S(){return caches.open(m).then(function(n){var t=new Response(JSON.stringify({version:e.version,hashmap:l}));return n.put(new URL(w,location).toString(),t)})}self.addEventListener("install",function(e){console.log("[SW]:","Install event");var n=void 0;n="changed"===o?P("main"):b("main"),e.waitUntil(n)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=function(){if(!s.additional.length)return Promise.resolve();a&&console.log("[SW]:","Caching additional");return("changed"===o?P("additional"):b("additional")).catch(function(e){console.error("[SW]:","Cache section `additional` failed to load")})}();n=(n=(n=n.then(S)).then(O)).then(function(){if(self.clients&&self.clients.claim)return self.clients.claim()}),r&&self.registration.navigationPreload&&(n=Promise.all([n,self.registration.navigationPreload.enable()])),e.waitUntil(n)}),self.addEventListener("fetch",function(e){if("GET"===e.request.method&&("only-if-cached"!==e.request.cache||"same-origin"===e.request.mode)){var n=new URL(e.request.url);n.hash="";var o=n.toString();-1===h.indexOf(o)&&(n.search="",o=n.toString());var s=-1!==y.indexOf(o),u=o;if(!s){var f=function(e){var n=e.url,r=new URL(n),o=void 0;o=function(e){return"navigate"===e.mode||e.headers.get("Upgrade-Insecure-Requests")||-1!==(e.headers.get("Accept")||"").indexOf("text/html")}(e)?"navigate":r.origin===location.origin?"same-origin":"cross-origin";for(var i=0;i<t.length;i++){var a=t[i];if(a&&(!a.requestTypes||-1!==a.requestTypes.indexOf(o))){var c=void 0;if((c="function"==typeof a.match?a.match(r,e):n.replace(a.match,a.to))&&c!==n)return c}}}(e.request);f&&(u=f,s=!0)}if(s){var l=void 0;l="network-first"===i?function(e,n,t){return x(e).then(function(e){if(e.ok)return a&&console.log("[SW]:","URL ["+n+"] from network"),e;throw e}).catch(function(e){return a&&console.log("[SW]:","URL ["+n+"] from cache if possible"),c(t,m).then(function(n){if(n)return n;if(e instanceof Response)return e;throw e})})}(e,o,u):function(e,n,t){return function(e){if(r&&"function"==typeof r.map&&e.preloadResponse&&"navigate"===e.request.mode){var n=r.map(new URL(e.request.url),e.request);n&&function(e,n){var t=new URL(e,location),r=n.preloadResponse;U.set(r,{url:t,response:r});var o=function(){return U.has(r)},i=r.then(function(e){if(e&&o()){var n=e.clone();return caches.open(g).then(function(e){if(o())return e.put(t,n).then(function(){if(!o())return caches.open(g).then(function(e){return e.delete(t)})})})}});n.waitUntil(i)}(n,e)}}(e),c(t,m).then(function(r){return r?(a&&console.log("[SW]:","URL ["+t+"]("+n+") from cache"),r):fetch(e.request).then(function(r){return r.ok?(a&&console.log("[SW]:","URL ["+n+"] from network"),t===n&&(o=r.clone(),i=caches.open(m).then(function(e){return e.put(n,o)}).then(function(){console.log("[SW]:","Cache asset: "+n)}),e.waitUntil(i)),r):(a&&console.log("[SW]:","URL ["+n+"] wrong response: ["+r.status+"] "+r.type),r);var o,i})})}(e,o,u),e.respondWith(l)}else{if("navigate"===e.request.mode&&!0===r)return void e.respondWith(x(e));if(r){var d=function(e){var n=new URL(e.request.url);if(self.registration.navigationPreload&&r&&r.test&&r.test(n,e.request)){var t=function(e){if(U){var n=void 0,t=void 0;return U.forEach(function(r,o){r.url.href===e.href&&(n=r.response,t=o)}),n?(U.delete(t),n):void 0}}(n),o=e.request;return t?(e.waitUntil(caches.open(g).then(function(e){return e.delete(o)})),t):c(o,g).then(function(n){return n&&e.waitUntil(caches.open(g).then(function(e){return e.delete(o)})),n||fetch(e.request)})}}(e);if(d)return void e.respondWith(d)}}}}),self.addEventListener("message",function(e){var n=e.data;if(n)switch(n.action){case"skipWaiting":self.skipWaiting&&self.skipWaiting()}});var U=new Map;function R(e,n,t){n=n.slice();var r=t.bust,o=!1!==t.failAll,i=!0===t.deleteFirst,a=t.request||{credentials:"omit",mode:"cors"},c=Promise.resolve();return i&&(c=Promise.all(n.map(function(n){return e.delete(n).catch(function(){})}))),Promise.all(n.map(function(e){var n,t,o;return r&&(t=r,o=-1!==(n=e).indexOf("?"),e=n+(o?"&":"?")+"__uncache="+encodeURIComponent(t)),fetch(e,a).then(u).then(function(e){return e.ok?{response:e}:{error:!0}},function(){return{error:!0}})})).then(function(t){return o&&t.some(function(e){return e.error})?Promise.reject(new Error("Wrong response status")):(o||(t=t.filter(function(e,t){return!e.error||(n.splice(t,1),!1)})),c.then(function(){var r=t.map(function(t,r){var o=t.response;return e.put(n[r],o)});return Promise.all(r)}))})}function x(e){return e.preloadResponse&&!0===r?e.preloadResponse.then(function(n){return n||fetch(e.request)}):fetch(e.request)}}(__wpo,{loaders:{},cacheMaps:[],navigationPreload:!1}),e.exports=t(1)},function(e,n){}]);