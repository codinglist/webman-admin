import{as as y,at as d,au as M,L as _,av as E,aw as O,ax as P,ay as p,az as C,aA as L}from"./index.bde7963b.js";function I(n){return function(r){return r==null?void 0:r[n]}}var w=1,D=2;function G(n,r,e,t){var i=e.length,a=i,A=!t;if(n==null)return!a;for(n=Object(n);i--;){var f=e[i];if(A&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++i<a;){f=e[i];var u=f[0],s=n[u],o=f[1];if(A&&f[2]){if(s===void 0&&!(u in n))return!1}else{var l=new y;if(t)var R=t(s,o,u,n,r,l);if(!(R===void 0?d(o,s,w|D,t,l):R))return!1}}return!0}function g(n){return n===n&&!M(n)}function F(n){for(var r=_(n),e=r.length;e--;){var t=r[e],i=n[t];r[e]=[t,i,g(i)]}return r}function h(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function c(n){var r=F(n);return r.length==1&&r[0][2]?h(r[0][0],r[0][1]):function(e){return e===n||G(e,n,r)}}function x(n,r,e){var t=n==null?void 0:E(n,r);return t===void 0?e:t}var S=1,m=2;function v(n,r){return O(n)&&g(r)?h(P(n),r):function(e){var t=x(e,n);return t===void 0&&t===r?p(e,n):d(r,t,S|m)}}function K(n){return function(r){return E(r,n)}}function N(n){return O(n)?I(P(n)):K(n)}function U(n){return typeof n=="function"?n:n==null?C:typeof n=="object"?L(n)?v(n[0],n[1]):c(n):N(n)}export{U as b,x as g};
