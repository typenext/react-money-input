!function(e,r){if("object"===typeof exports&&"object"===typeof module)module.exports=r(require("react"),require("currency.js"));else if("function"===typeof define&&define.amd)define(["react","currency.js"],r);else{var t="object"===typeof exports?r(require("react"),require("currency.js")):r(e.react,e["currency.js"]);for(var n in t)("object"===typeof exports?exports:e)[n]=t[n]}}(this,(function(e,r){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=2)}([function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r,t){e.exports=t(3)},function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r);var o=t(0),u=t.n(o),c=t(1),i=t.n(c);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var l=/^[1-9]{1}$/,s=/^[0-9]{1}$/,f=function(e){var r=e.className,t=void 0===r?"":r,c=e.style,f=void 0===c?{}:c,p=e.currencyConfig,y=void 0===p?{locale:"en-US",currencyCode:"USD",currencyDisplay:"symbol",useGrouping:!0,minimumFractionDigits:void 0}:p,b=e.customInput,d=e.name,m=e.id,v=e.max,j=void 0===v?Number.MAX_SAFE_INTEGER:v,g=e.onChange,O=e.value,x={target:{type:"number",name:d,id:m}},P=i()(O).intValue,D=Math.trunc(Math.abs(P));if(P!==D||!Number.isFinite(P)||Number.isNaN(P))throw new Error("invalid value property");var S=Object(o.useCallback)((function(e){var r=e.key,t=e.keyCode;if((0!==P||l.test(r))&&(0===P||s.test(r)||8===t)){var n,o=P.toString();if(8!==t){var u=0===P?r:"".concat(o).concat(r);n=Number.parseInt(u,10)}else{var c=o.slice(0,-1);n=""===c?0:Number.parseInt(c,10)}n>j||(x.target.value=i()(n/100).value,g(x))}}),[j,g,P]),h=Object(o.useCallback)((function(){}),[]),w=y.locale,N=y.currencyCode,C=y.currencyDisplay,E=y.useGrouping,M=y.minimumFractionDigits,_={"data-testid":"currency-input",className:t,inputMode:"numeric",onChange:h,onKeyDown:S,style:f,value:i()(P/100).value.toLocaleString(w,{style:"currency",currency:N,currencyDisplay:C,useGrouping:E,minimumFractionDigits:M})};if(b){var k=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e,{},_);delete k.customInput,delete k.currencyConfig;var F=b;return u.a.createElement(F,k)}return u.a.createElement("input",_)};r.default=f}])}));
//# sourceMappingURL=index.js.map