import{Z as y,$ as g,k as i,r as w,a0 as A,K as E}from"./BftIUcDm.js";function x(v,l,n){let a;y(n)?a={evaluating:n}:a={};const{lazy:u=!1,evaluating:e=void 0,shallow:h=!0,onError:d=g}=a,o=i(!u),s=h?i(l):w(l);let t=0;return A(async m=>{if(!o.value)return;t++;const f=t;let c=!1;e&&Promise.resolve().then(()=>{e.value=!0});try{const r=await v(p=>{m(()=>{e&&(e.value=!1),c||p()})});f===t&&(s.value=r)}catch(r){d(r)}finally{e&&f===t&&(e.value=!1),c=!0}}),u?E(()=>(o.value=!0,s.value)):s}export{x as c};
