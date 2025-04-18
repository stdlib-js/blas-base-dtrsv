// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-max@v0.3.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-matrix-triangle@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-transpose-operation@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-diagonal-type@v0.0.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@v0.2.2-esm/index.mjs";function d(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function f(r,e){for(var t=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var p=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,h=function(r){return p.exec(r).slice(1)};function g(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=f(V(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function v(r){var e=c(r),t="/"===T(r,-1);return(r=f(V(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function c(r){return"/"===r.charAt(0)}function b(){return v(V(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function j(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=g(r).substr(1),e=g(e).substr(1);for(var n=t(r.split("/")),s=t(e.split("/")),i=Math.min(n.length,s.length),o=i,a=0;a<i;a++)if(n[a]!==s[a]){o=a;break}var u=[];for(a=o;a<n.length;a++)u.push("..");return(u=u.concat(s.slice(o))).join("/")}function w(r){var e=h(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function y(r,e){var t=h(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function x(r){return h(r)[3]}var E={extname:x,basename:y,dirname:w,sep:"/",delimiter:":",relative:j,join:b,isAbsolute:c,normalize:v,resolve:g};function V(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var T="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},R=d(Object.freeze({__proto__:null,basename:y,default:E,delimiter:":",dirname:w,extname:x,isAbsolute:c,join:b,normalize:v,relative:j,resolve:g,sep:"/"}));function _(r,e,t,n,s,i,o,a,u,l,d){var f,p,h,g,v,c,b,j,w,y,x;if(f="non-unit"===t,(p=m([i,o]))?(g=o,v=i):(g=i,v=o),x=d,!p&&"no-transpose"===e&&"upper"===r||p&&"no-transpose"!==e&&"lower"===r){for(b=x+(n-1)*l,w=n-1;w>=0;w--){if(0!==u[b])for(y=a+v*w,f&&(u[b]/=s[y+g*w]),h=u[b],c=b,j=w-1;j>=0;j--)u[c-=l]-=h*s[y+g*j];b-=l}return u}if(!p&&"no-transpose"===e&&"lower"===r||p&&"no-transpose"!==e&&"upper"===r){for(b=x,w=0;w<n;w++){if(0!==u[b])for(y=a+v*w,f&&(u[b]/=s[y+g*w]),h=u[b],c=b,j=w+1;j<n;j++)u[c+=l]-=h*s[y+g*j];b+=l}return u}if(!p&&"no-transpose"!==e&&"upper"===r||p&&"no-transpose"===e&&"lower"===r){for(b=x,w=0;w<n;w++){for(h=u[b],y=a+v*w,c=x,j=0;j<=w-1;j++)h-=u[c]*s[y+g*j],c+=l;f&&(h/=s[y+g*w]),u[b]=h,b+=l}return u}for(b=x+=(n-1)*l,w=n-1;w>=0;w--){for(h=u[b],y=a+v*w,c=x,j=n-1;j>w;j--)h-=u[c]*s[y+g*j],c-=l;f&&(h/=s[y+g*w]),u[b]=h,b-=l}return u}function z(r,e,t,m,d,f,p,h,g){var v,c;if(!s(r))throw new TypeError(l("invalid argument. First argument must be a valid order. Value: `%s`.",r));if(!i(e))throw new TypeError(l("invalid argument. Second argument must specify whether the lower or upper triangular matrix is supplied. Value: `%s`.",e));if(!o(t))throw new TypeError(l("invalid argument. Third argument must be a valid transpose operation. Value: `%s`.",t));if(!a(m))throw new TypeError(l("invalid argument. Fourth argument must be a valid diagonal type. Value: `%s`.",m));if(d<0)throw new RangeError(l("invalid argument. Fifth argument must be a nonnegative integer. Value: `%d`.",d));if(p<n(1,d))throw new RangeError(l("invalid argument. Seventh argument must be greater than or equal to max(1,%d). Value: `%d`.",d,p));if(0===g)throw new RangeError(l("invalid argument. Ninth argument must be non-zero. Value: `%d`.",g));return 0===d?h:("column-major"===r?(v=1,c=p):(v=p,c=1),_(e,t,m,d,f,v,c,0,h,g,u(d,g)))}t(z,"ndarray",(function(r,e,t,n,s,u,m,d,f,p,h){if(!i(r))throw new TypeError(l("invalid argument. First argument must specify whether the lower or upper triangular matrix is supplied. Value: `%s`.",r));if(!o(e))throw new TypeError(l("invalid argument. Second argument must be a valid transpose operation. Value: `%s`.",e));if(!a(t))throw new TypeError(l("invalid argument. Third argument must be a valid diagonal type. Value: `%s`.",t));if(n<0)throw new RangeError(l("invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.",n));if(0===u)throw new RangeError(l("invalid argument. Sixth argument must be non-zero. Value: `%d`.",u));if(0===m)throw new RangeError(l("invalid argument. Seventh argument must be non-zero. Value: `%d`.",m));if(0===p)throw new RangeError(l("invalid argument. Tenth argument must be non-zero. Value: `%d`.",p));return 0===n?f:_(r,e,t,n,s,u,m,d,f,p,h)}));var A,O=r((0,R.join)("/home/runner/work/blas-base-dtrsv/blas-base-dtrsv/lib","./native.js")),S=A=e(O)?z:O;const{ndarray:F}=A;export{S as default,F as ndarray};
//# sourceMappingURL=index.mjs.map
