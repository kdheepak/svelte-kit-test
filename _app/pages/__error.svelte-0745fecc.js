import{S as P,i as S,s as j,e as m,t as p,k as q,c as d,a as h,h as v,d as f,m as y,g as c,J as k,j as E,K as x}from"../chunks/vendor-f0095a1c.js";function C(n){let t,r=n[0].message+"",l,i,a,o=n[0].stack+"",u;return{c(){t=m("p"),l=p(r),i=q(),a=m("pre"),u=p(o)},l(e){t=d(e,"P",{});var s=h(t);l=v(s,r),s.forEach(f),i=y(e),a=d(e,"PRE",{});var _=h(a);u=v(_,o),_.forEach(f)},m(e,s){c(e,t,s),k(t,l),c(e,i,s),c(e,a,s),k(a,u)},p(e,[s]){s&1&&r!==(r=e[0].message+"")&&E(l,r),s&1&&o!==(o=e[0].stack+"")&&E(u,o)},i:x,o:x,d(e){e&&f(t),e&&f(i),e&&f(a)}}}function R({error:n,status:t}){return{props:{error:n,status:t}}}function J(n,t,r){let{status:l}=t,{error:i}=t;return n.$$set=a=>{"status"in a&&r(1,l=a.status),"error"in a&&r(0,i=a.error)},[i,l]}class b extends P{constructor(t){super();S(this,t,J,C,j,{status:1,error:0})}}export{b as default,R as load};