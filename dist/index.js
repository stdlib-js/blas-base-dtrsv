"use strict";var V=function(o,n){return function(){return n||o((n={exports:{}}).exports,n),n.exports}};var R=V(function(ir,F){
var G=require('@stdlib/ndarray-base-assert-is-row-major/dist');function H(o,n,p,u,i,y,f,w,r,t,T){var h,q,s,g,E,m,a,v,e,l,d;if(q=G([y,f]),h=p==="non-unit",q?(g=f,E=y):(g=y,E=f),d=T,!q&&n==="no-transpose"&&o==="upper"||q&&n!=="no-transpose"&&o==="lower"){for(a=d+(u-1)*t,e=u-1;e>=0;e--){if(r[a]!==0)for(l=w+E*e,h&&(r[a]/=i[l+g*e]),s=r[a],m=a,v=e-1;v>=0;v--)m-=t,r[m]-=s*i[l+g*v];a-=t}return r}if(!q&&n==="no-transpose"&&o==="lower"||q&&n!=="no-transpose"&&o==="upper"){for(a=d,e=0;e<u;e++){if(r[a]!==0)for(l=w+E*e,h&&(r[a]/=i[l+g*e]),s=r[a],m=a,v=e+1;v<u;v++)m+=t,r[m]-=s*i[l+g*v];a+=t}return r}if(!q&&n!=="no-transpose"&&o==="upper"||q&&n==="no-transpose"&&o==="lower"){for(a=d,e=0;e<u;e++){for(s=r[a],l=w+E*e,m=d,v=0;v<=e-1;v++)s-=r[m]*i[l+g*v],m+=t;h&&(s/=i[l+g*e]),r[a]=s,a+=t}return r}for(d+=(u-1)*t,a=d,e=u-1;e>=0;e--){for(s=r[a],l=w+E*e,m=d,v=u-1;v>e;v--)s-=r[m]*i[l+g*v],m-=t;h&&(s/=i[l+g*e]),r[a]=s,a-=t}return r}F.exports=H
});var O=V(function(tr,M){
var I=require('@stdlib/math-base-special-fast-max/dist'),J=require('@stdlib/blas-base-assert-is-layout/dist'),K=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),P=require('@stdlib/blas-base-assert-is-transpose-operation/dist'),Q=require('@stdlib/blas-base-assert-is-diagonal-type/dist'),U=require('@stdlib/strided-base-stride2offset/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),W=R();function Y(o,n,p,u,i,y,f,w,r){var t,T,h;if(!J(o))throw new TypeError(c('nullFx',o));if(!K(n))throw new TypeError(c('nullFy',n));if(!P(p))throw new TypeError(c('nullGO',p));if(!Q(u))throw new TypeError(c('nullGP',u));if(i<0)throw new RangeError(c('nullGQ',i));if(f<I(1,i))throw new RangeError(c('nullGR',i,f));if(r===0)throw new RangeError(c('nullGS',r));return i===0?w:(o==="column-major"?(t=1,T=f):(t=f,T=1),h=U(i,r),W(n,p,u,i,y,t,T,0,w,r,h))}M.exports=Y
});var z=V(function(ur,S){
var Z=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),$=require('@stdlib/blas-base-assert-is-transpose-operation/dist'),D=require('@stdlib/blas-base-assert-is-diagonal-type/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),L=R();function x(o,n,p,u,i,y,f,w,r,t,T){if(!Z(o))throw new TypeError(b('nullGT',o));if(!$(n))throw new TypeError(b('nullGG',n));if(!D(p))throw new TypeError(b('nullGU',p));if(u<0)throw new RangeError(b('nullGH',u));if(t===0)throw new RangeError(b('nullG3',t));return u===0?r:L(o,n,p,u,i,y,f,w,r,t,T)}S.exports=x
});var B=V(function(or,k){
var X=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=O(),N=z();X(_,"ndarray",N);k.exports=_
});var A=require("path").join,rr=require('@stdlib/utils-try-require/dist'),er=require('@stdlib/assert-is-error/dist'),ar=B(),j,C=rr(A(__dirname,"./native.js"));er(C)?j=ar:j=C;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
