!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,v=c||d||Function("return this")(),s=Object.prototype.toString,y=Math.max,m=Math.min,b=function(){return v.Date.now()};function p(e,t,n){var r,o,u,a,f,l,c=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(w,t),d?p(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function w(){var e=b();if(S(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return v?m(n,u-(e-c)):n}(e))}function O(e){return f=void 0,s&&r?p(e):(r=o=void 0,a)}function T(){var e=b(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(w,t),p(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=h(t)||0,g(n)&&(d=!!n.leading,u=(v="maxWait"in n)?y(h(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:O(b())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var j,S,w="feedback-form-state",O=document.querySelector(".feedback-form"),T=O.querySelectorAll("[name]"),x=Array.from(T).map((function(e){return e.name})),N=null!==(j=(S=localStorage.getItem(w))?JSON.parse(S):null)&&void 0!==j?j:{};!function(){var e=Object.keys(N),t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var u=i.value;O.elements[u].value=N[u]}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}(),O.addEventListener("input",e(t)((function(e){var t=e.target;N[t.name]=t.value,localStorage.setItem(w,JSON.stringify(N))}),500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),!function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=x[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var u=i.value;if(!N[u]||""===N[u])return null==e||e(),!1}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return!0}((function(){alert("Please fill in all the fields!")})))return;console.log(N),N={},localStorage.removeItem(w),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.c9dbe416.js.map