var je=Object.defineProperty,_e=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var B=Math.pow,oe=(a,e,t)=>e in a?je(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,E=(a,e)=>{for(var t in e||(e={}))Le.call(e,t)&&oe(a,t,e[t]);if(re)for(var t of re(e))Re.call(e,t)&&oe(a,t,e[t]);return a},j=(a,e)=>_e(a,Oe(e));import{a as se,ah as Ne,r as $,V as be,al as pe,ac as Ge,_ as C,S as Q,J as _,j as R,T as ee,aa as me,aq as Be,U as $e,O as Ue,a3 as ke,a7 as ze,aj as Fe,aR as Ve,I as Ye,b1 as K,b as qe,f as We,k as H,aH as Ke,aJ as He,o as ie,h as Ze,aK as Xe,b2 as Je,b3 as Qe,p as et,aW as tt,b4 as nt,b5 as st,b6 as at,aL as rt,i as ce,n as Z,b7 as ot}from"./index.bde7963b.js";var it=globalThis&&globalThis.__rest||function(a,e){var t={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(a);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(a,n[s])&&(t[n[s]]=a[n[s]]);return t},ct={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:me.any,required:Boolean},lt=se({name:"Checkbox",inheritAttrs:!1,props:Ne(ct,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,t){var n=t.attrs,s=t.emit,r=t.expose,o=$(e.checked===void 0?e.defaultChecked:e.checked),i=$();be(function(){return e.checked},function(){o.value=e.checked}),pe(function(){Ge(function(){})}),r({focus:function(){var h;(h=i.value)===null||h===void 0||h.focus()},blur:function(){var h;(h=i.value)===null||h===void 0||h.blur()}});var c=$(),l=function(h){if(!e.disabled){e.checked===void 0&&(o.value=h.target.checked),h.shiftKey=c.value;var p={target:C(C({},e),{checked:h.target.checked}),stopPropagation:function(){h.stopPropagation()},preventDefault:function(){h.preventDefault()},nativeEvent:h};e.checked!==void 0&&(i.value.checked=!!e.checked),s("change",p),c.value=!1}},b=function(h){s("click",h),c.value=h.shiftKey};return function(){var u,h=e.prefixCls,p=e.name,f=e.id,k=e.type,w=e.disabled,m=e.readonly,g=e.tabindex,v=e.autofocus,y=e.value,x=e.required,P=it(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),L=n.class,T=n.onFocus,D=n.onBlur,F=n.onKeydown,V=n.onKeypress,Y=n.onKeyup,U=C(C({},P),n),S=Object.keys(U).reduce(function(G,I){return(I.substr(0,5)==="aria-"||I.substr(0,5)==="data-"||I==="role")&&(G[I]=U[I]),G},{}),q=Q(h,L,(u={},_(u,"".concat(h,"-checked"),o.value),_(u,"".concat(h,"-disabled"),w),u)),W=C(C({name:p,id:f,type:k,readonly:m,disabled:w,tabindex:g,class:"".concat(h,"-input"),checked:!!o.value,autofocus:v,value:y},S),{onChange:l,onClick:b,onFocus:T,onBlur:D,onKeydown:F,onKeypress:V,onKeyup:Y,required:x});return R("span",{class:q},[R("input",ee({ref:i},W),null),R("span",{class:"".concat(h,"-inner")},null)])}}}),ut=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},jn=function(){return C(C({},ut()),{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},ht=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:me.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},dt=function(){return C(C({},ht()),{indeterminate:{type:Boolean,default:!1}})},ft=Symbol("CheckboxGroupContext"),le=globalThis&&globalThis.__rest||function(a,e){var t={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(a);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(a,n[s])&&(t[n[s]]=a[n[s]]);return t},_n=se({name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:dt(),setup:function(e,t){var n=t.emit,s=t.attrs,r=t.slots,o=t.expose,i=Be(),c=$e("checkbox",e),l=c.prefixCls,b=c.direction,u=Ue(ft,void 0),h=Symbol("checkboxUniId");ke(function(){!e.skipGroup&&u&&u.registerValue(h,e.value)}),ze(function(){u&&u.cancelValue(h)}),pe(function(){Fe(e.checked!==void 0||u||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var p=function(g){var v=g.target.checked;n("update:checked",v),n("change",g)},f=$(),k=function(){var g;(g=f.value)===null||g===void 0||g.focus()},w=function(){var g;(g=f.value)===null||g===void 0||g.blur()};return o({focus:k,blur:w}),function(){var m,g,v=Ve((g=r.default)===null||g===void 0?void 0:g.call(r)),y=e.indeterminate,x=e.skipGroup,P=e.id,L=P===void 0?i.id.value:P,T=le(e,["indeterminate","skipGroup","id"]),D=s.onMouseenter,F=s.onMouseleave;s.onInput;var V=s.class,Y=s.style,U=le(s,["onMouseenter","onMouseleave","onInput","class","style"]),S=C(C(C({},T),{id:L,prefixCls:l.value}),U);u&&!x?(S.onChange=function(){for(var G=arguments.length,I=new Array(G),z=0;z<G;z++)I[z]=arguments[z];n.apply(void 0,["change"].concat(I)),u.toggleOption({label:v,value:e.value})},S.name=u.name.value,S.checked=u.mergedValue.value.indexOf(e.value)!==-1,S.disabled=e.disabled||u.disabled.value,S.indeterminate=y):S.onChange=p;var q=Q((m={},_(m,"".concat(l.value,"-wrapper"),!0),_(m,"".concat(l.value,"-rtl"),b.value==="rtl"),_(m,"".concat(l.value,"-wrapper-checked"),S.checked),_(m,"".concat(l.value,"-wrapper-disabled"),S.disabled),m),V),W=Q(_({},"".concat(l.value,"-indeterminate"),y));return R("label",{class:q,style:Y,onMouseenter:D,onMouseleave:F},[R(lt,ee(ee({},S),{},{class:W,ref:f}),null),v.length?R("span",null,[v]):null])}}});const gt=a=>Object.keys(a).length===0,te=(a,e)=>a.push.apply(a,e),bt=(a,e)=>a.split("").map(n=>e[n]||n).join(""),N=a=>a.sort((e,t)=>e.i-t.i||e.j-t.j),ue=a=>{const e={};let t=1;return a.forEach(n=>{e[n]=t,t+=1}),e};var pt={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const he=2050,de=1e3,mt=pt,kt=10,vt=1e4,ve=10,ye=50,xe=20,we=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,yt=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,xt=/^[A-Z\xbf-\xdf]+$/,Me=/^[^a-z\xdf-\xff]+$/,wt=/^[a-z\xdf-\xff]+$/,Mt=/^[^A-Z\xbf-\xdf]+$/,Ct=/[a-z\xdf-\xff]/,St=/[A-Z\xbf-\xdf]/,Et=/[^A-Za-z\xbf-\xdf]/gi,Tt=/^\d+$/,ae=new Date().getFullYear(),At={recentYear:/19\d\d|200\d|201\d|202\d/g};class Dt{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],n=this.filterNoise(t);return N(n)}getMatchesWithSeparator(e){const t=[],n=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let s=0;s<=Math.abs(e.length-6);s+=1)for(let r=s+5;r<=s+9&&!(r>=e.length);r+=1){const o=e.slice(s,+r+1||9e9),i=n.exec(o);if(i!=null){const c=this.mapIntegersToDayMonthYear([parseInt(i[1],10),parseInt(i[3],10),parseInt(i[4],10)]);c!=null&&t.push({pattern:"date",token:o,i:s,j:r,separator:i[2],year:c.year,month:c.month,day:c.day})}}return t}getMatchesWithoutSeparator(e){const t=[],n=/^\d{4,8}$/,s=r=>Math.abs(r.year-ae);for(let r=0;r<=Math.abs(e.length-4);r+=1)for(let o=r+3;o<=r+7&&!(o>=e.length);o+=1){const i=e.slice(r,+o+1||9e9);if(n.exec(i)){const c=[],l=i.length;if(mt[l].forEach(([u,h])=>{const p=this.mapIntegersToDayMonthYear([parseInt(i.slice(0,u),10),parseInt(i.slice(u,h),10),parseInt(i.slice(h),10)]);p!=null&&c.push(p)}),c.length>0){let u=c[0],h=s(c[0]);c.slice(1).forEach(p=>{const f=s(p);f<h&&(u=p,h=f)}),t.push({pattern:"date",token:i,i:r,j:o,separator:"",year:u.year,month:u.month,day:u.day})}}}return t}filterNoise(e){return e.filter(t=>{let n=!1;const s=e.length;for(let r=0;r<s;r+=1){const o=e[r];if(t!==o&&o.i<=t.i&&o.j>=t.j){n=!0;break}}return!n})}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,n=0,s=0;for(let r=0,o=e.length;r<o;r+=1){const i=e[r];if(i>99&&i<de||i>he)return null;i>31&&(n+=1),i>12&&(t+=1),i<=0&&(s+=1)}return n>=2||t===3||s>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],n=t.length;for(let s=0;s<n;s+=1){const[r,o]=t[s];if(de<=r&&r<=he){const i=this.mapIntegersToDayMonth(o);return i!=null?{year:r,month:i.month,day:i.day}:null}}for(let s=0;s<n;s+=1){const[r,o]=t[s],i=this.mapIntegersToDayMonth(o);if(i!=null)return{year:this.twoToFourDigitYear(r),month:i.month,day:i.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let n=0;n<t.length;n+=1){const s=t[n],r=s[0],o=s[1];if(r>=1&&r<=31&&o>=1&&o<=12)return{day:r,month:o}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}const A=new Uint32Array(65536),It=(a,e)=>{const t=a.length,n=e.length,s=1<<t-1;let r=-1,o=0,i=t,c=t;for(;c--;)A[a.charCodeAt(c)]|=1<<c;for(c=0;c<n;c++){let l=A[e.charCodeAt(c)];const b=l|o;l|=(l&r)+r^r,o|=~(l|r),r&=l,o&s&&i++,r&s&&i--,o=o<<1|1,r=r<<1|~(b|o),o&=b}for(c=t;c--;)A[a.charCodeAt(c)]=0;return i},Pt=(a,e)=>{const t=a.length,n=e.length,s=[],r=[],o=Math.ceil(t/32),i=Math.ceil(n/32);let c=n;for(let f=0;f<o;f++)r[f]=-1,s[f]=0;let l=0;for(;l<i-1;l++){let f=0,k=-1;const w=l*32,m=Math.min(32,n)+w;for(let g=w;g<m;g++)A[e.charCodeAt(g)]|=1<<g;c=n;for(let g=0;g<t;g++){const v=A[a.charCodeAt(g)],y=r[g/32|0]>>>g&1,x=s[g/32|0]>>>g&1,P=v|f,L=((v|x)&k)+k^k|v|x;let T=f|~(L|k),D=k&L;T>>>31^y&&(r[g/32|0]^=1<<g),D>>>31^x&&(s[g/32|0]^=1<<g),T=T<<1|y,D=D<<1|x,k=D|~(P|T),f=T&P}for(let g=w;g<m;g++)A[e.charCodeAt(g)]=0}let b=0,u=-1;const h=l*32,p=Math.min(32,n-h)+h;for(let f=h;f<p;f++)A[e.charCodeAt(f)]|=1<<f;c=n;for(let f=0;f<t;f++){const k=A[a.charCodeAt(f)],w=r[f/32|0]>>>f&1,m=s[f/32|0]>>>f&1,g=k|b,v=((k|m)&u)+u^u|k|m;let y=b|~(v|u),x=u&v;c+=y>>>n-1&1,c-=x>>>n-1&1,y>>>31^w&&(r[f/32|0]^=1<<f),x>>>31^m&&(s[f/32|0]^=1<<f),y=y<<1|w,x=x<<1|m,u=x|~(g|y),b=y&g}for(let f=h;f<p;f++)A[e.charCodeAt(f)]=0;return c},Ce=(a,e)=>{if(a.length>e.length){const t=e;e=a,a=t}return a.length===0?e.length:a.length<=32?It(a,e):Pt(a,e)},jt=(a,e)=>{let t=1/0,n=0;for(let s=0;s<e.length;s++){const r=Ce(a,e[s]);r<t&&(t=r,n=s)}return e[n]};var _t={closest:jt,distance:Ce};const Ot=(a,e,t)=>{const n=a.length<=e.length,s=a.length<=t;return n||s?Math.ceil(a.length/4):t},Lt=(a,e,t)=>{let n=0;const s=Object.keys(e).find(r=>{const o=Ot(a,r,t),i=_t.distance(a,r),c=i<=o;return c&&(n=i),c});return s?{levenshteinDistance:n,levenshteinDistanceEntry:s}:{}};var Rt={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},X={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs",pwned:"pwned"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed",pwned:"pwned"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class Nt{constructor(){this.matchers={},this.l33tTable=Rt,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.translations=X,this.graphs={},this.availableGraphs=[],this.useLevenshteinDistance=!1,this.levenshteinThreshold=2,this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs),e.useLevenshteinDistance!==void 0&&(this.useLevenshteinDistance=e.useLevenshteinDistance),e.levenshteinThreshold!==void 0&&(this.levenshteinThreshold=e.levenshteinThreshold)}setTranslations(e){if(this.checkCustomTranslations(e))this.translations=e;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(e){let t=!0;return Object.keys(X).forEach(n=>{if(n in e){const s=n;Object.keys(X[s]).forEach(r=>{r in e[s]||(t=!1)})}else t=!1}),t}setRankedDictionaries(){const e={};Object.keys(this.dictionary).forEach(t=>{e[t]=this.getRankedDictionary(t)}),this.rankedDictionaries=e}getRankedDictionary(e){const t=this.dictionary[e];if(e==="userInputs"){const n=[];return t.forEach(s=>{const r=typeof s;(r==="string"||r==="number"||r==="boolean")&&n.push(s.toString().toLowerCase())}),ue(n)}return ue(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs")}addMatcher(e,t){this.matchers[e]?console.info("Matcher already exists"):this.matchers[e]=t}}const d=new Nt;class Gt{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map(n=>j(E({},n),{token:n.token.split("").reverse().join(""),reversed:!0,i:e.length-1-n.j,j:e.length-1-n.i}))}}class Bt{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],n=this.enumerateL33tSubs(this.relevantL33tSubtable(e,d.l33tTable));for(let s=0;s<n.length;s+=1){const r=n[s];if(gt(r))break;const o=bt(e,r);this.defaultMatch({password:o}).forEach(c=>{const l=e.slice(c.i,+c.j+1||9e9);if(l.toLowerCase()!==c.matchedWord){const b={};Object.keys(r).forEach(h=>{const p=r[h];l.indexOf(h)!==-1&&(b[h]=p)});const u=Object.keys(b).map(h=>`${h} -> ${b[h]}`).join(", ");t.push(j(E({},c),{l33t:!0,token:l,sub:b,subDisplay:u}))}})}return t.filter(s=>s.token.length>1)}relevantL33tSubtable(e,t){const n={},s={};return e.split("").forEach(r=>{n[r]=!0}),Object.keys(t).forEach(r=>{const i=t[r].filter(c=>c in n);i.length>0&&(s[r]=i)}),s}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map(s=>{const r={};return s.forEach(([o,i])=>{r[o]=i}),r})}getSubs(e,t,n){if(!e.length)return t;const s=e[0],r=e.slice(1),o=[];n[s].forEach(c=>{t.forEach(l=>{let b=-1;for(let u=0;u<l.length;u+=1)if(l[u][0]===c){b=u;break}if(b===-1){const u=l.concat([[c,s]]);o.push(u)}else{const u=l.slice(0);u.splice(b,1),u.push([c,s]),o.push(l),o.push(u)}})});const i=this.dedup(o);return r.length?this.getSubs(r,i,n):i}dedup(e){const t=[],n={};return e.forEach(s=>{const r=s.map((i,c)=>[i,c]);r.sort();const o=r.map(([i,c])=>`${i},${c}`).join("-");o in n||(n[o]=!0,t.push(s))}),t}}class $t{constructor(){this.l33t=new Bt(this.defaultMatch),this.reverse=new Gt(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return N(t)}defaultMatch({password:e}){const t=[],n=e.length,s=e.toLowerCase();return Object.keys(d.rankedDictionaries).forEach(r=>{const o=d.rankedDictionaries[r];for(let i=0;i<n;i+=1)for(let c=i;c<n;c+=1){const l=s.slice(i,+c+1||9e9),b=l in o;let u={};const h=i===0&&c===n-1;d.useLevenshteinDistance&&h&&!b&&(u=Lt(l,o,d.levenshteinThreshold));const p=Object.keys(u).length!==0;if(b||p){const f=p?u.levenshteinDistanceEntry:l,k=o[f];t.push(E({pattern:"dictionary",i,j:c,token:e.slice(i,+c+1||9e9),matchedWord:l,rank:k,dictionaryName:r,reversed:!1,l33t:!1},u))}}}),t}}class Ut{match({password:e,regexes:t=At}){const n=[];return Object.keys(t).forEach(s=>{const r=t[s];r.lastIndex=0;const o=r.exec(e);if(o){const i=o[0];n.push({pattern:"regex",token:i,i:o.index,j:o.index+o[0].length-1,regexName:s,regexMatch:o})}}),N(n)}}var O={nCk(a,e){let t=a;if(e>t)return 0;if(e===0)return 1;let n=1;for(let s=1;s<=e;s+=1)n*=t,n/=s,t-=1;return n},log10(a){return Math.log(a)/Math.log(10)},log2(a){return Math.log(a)/Math.log(2)},factorial(a){let e=1;for(let t=2;t<=a;t+=1)e*=t;return e}},zt=({token:a})=>{let e=B(kt,a.length);e===Number.POSITIVE_INFINITY&&(e=Number.MAX_VALUE);let t;return a.length===1?t=ve+1:t=ye+1,Math.max(e,t)},Ft=({year:a,separator:e})=>{let n=Math.max(Math.abs(a-ae),xe)*365;return e&&(n*=4),n};const Vt=a=>{const e=a.split(""),t=e.filter(o=>o.match(Ct)).length,n=e.filter(o=>o.match(St)).length;let s=0;const r=Math.min(t,n);for(let o=1;o<=r;o+=1)s+=O.nCk(t+n,o);return s};var Yt=a=>{const e=a.replace(Et,"");if(e.match(Mt)||e.toLowerCase()===e)return 1;const t=[we,yt,Me],n=t.length;for(let s=0;s<n;s+=1){const r=t[s];if(e.match(r))return 2}return Vt(e)};const qt=({subs:a,subbed:e,token:t})=>{const n=a[e],s=t.toLowerCase().split(""),r=s.filter(i=>i===e).length,o=s.filter(i=>i===n).length;return{subbedCount:r,unsubbedCount:o}};var Wt=({l33t:a,sub:e,token:t})=>{if(!a)return 1;let n=1;const s=e;return Object.keys(s).forEach(r=>{const{subbedCount:o,unsubbedCount:i}=qt({subs:s,subbed:r,token:t});if(o===0||i===0)n*=2;else{const c=Math.min(i,o);let l=0;for(let b=1;b<=c;b+=1)l+=O.nCk(i+o,b);n*=l}}),n},Kt=({rank:a,reversed:e,l33t:t,sub:n,token:s})=>{const r=a,o=Yt(s),i=Wt({l33t:t,sub:n,token:s}),c=e&&2||1,l=r*o*i*c;return{baseGuesses:r,uppercaseVariations:o,l33tVariations:i,calculation:l}},Ht=({regexName:a,regexMatch:e,token:t})=>{const n={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(a in n)return B(n[a],t.length);switch(a){case"recentYear":return Math.max(Math.abs(parseInt(e[0],10)-ae),xe)}return 0},Zt=({baseGuesses:a,repeatCount:e})=>a*e,Xt=({token:a,ascending:e})=>{const t=a.charAt(0);let n=0;return["a","A","z","Z","0","1","9"].includes(t)?n=4:t.match(/\d/)?n=10:n=26,e||(n*=2),n*a.length};const Jt=a=>{let e=0;return Object.keys(a).forEach(t=>{e+=a[t].filter(s=>!!s).length}),e/=Object.entries(a).length,e},Qt=({token:a,graph:e,turns:t})=>{const n=Object.keys(d.graphs[e]).length,s=Jt(d.graphs[e]);let r=0;const o=a.length;for(let i=2;i<=o;i+=1){const c=Math.min(t,i-1);for(let l=1;l<=c;l+=1)r+=O.nCk(i-1,l-1)*n*B(s,l)}return r};var en=({graph:a,token:e,shiftedCount:t,turns:n})=>{let s=Qt({token:e,graph:a,turns:n});if(t){const r=e.length-t;if(t===0||r===0)s*=2;else{let o=0;for(let i=1;i<=Math.min(t,r);i+=1)o+=O.nCk(t+r,i);s*=o}}return Math.round(s)};const tn=(a,e)=>{let t=1;return a.token.length<e.length&&(a.token.length===1?t=ve:t=ye),t},fe={bruteforce:zt,date:Ft,dictionary:Kt,regex:Ht,repeat:Zt,sequence:Xt,spatial:en},nn=(a,e)=>fe[a]?fe[a](e):d.matchers[a]&&"scoring"in d.matchers[a]?d.matchers[a].scoring(e):0;var sn=(a,e)=>{const t={};if("guesses"in a&&a.guesses!=null)return a;const n=tn(a,e),s=nn(a.pattern,a);let r=0;typeof s=="number"?r=s:a.pattern==="dictionary"&&(r=s.calculation,t.baseGuesses=s.baseGuesses,t.uppercaseVariations=s.uppercaseVariations,t.l33tVariations=s.l33tVariations);const o=Math.max(r,n);return j(E(E({},a),t),{guesses:o,guessesLog10:O.log10(o)})};const M={password:"",optimal:{},excludeAdditive:!1,fillArray(a,e){const t=[];for(let n=0;n<a;n+=1){let s=[];e==="object"&&(s={}),t.push(s)}return t},makeBruteforceMatch(a,e){return{pattern:"bruteforce",token:this.password.slice(a,+e+1||9e9),i:a,j:e}},update(a,e){const t=a.j,n=sn(a,this.password);let s=n.guesses;e>1&&(s*=this.optimal.pi[n.i-1][e-1]);let r=O.factorial(e)*s;this.excludeAdditive||(r+=B(vt,e-1));let o=!1;Object.keys(this.optimal.g[t]).forEach(i=>{const c=this.optimal.g[t][i];parseInt(i,10)<=e&&c<=r&&(o=!0)}),o||(this.optimal.g[t][e]=r,this.optimal.m[t][e]=n,this.optimal.pi[t][e]=s)},bruteforceUpdate(a){let e=this.makeBruteforceMatch(0,a);this.update(e,1);for(let t=1;t<=a;t+=1){e=this.makeBruteforceMatch(t,a);const n=this.optimal.m[t-1];Object.keys(n).forEach(s=>{n[s].pattern!=="bruteforce"&&this.update(e,parseInt(s,10)+1)})}},unwind(a){const e=[];let t=a-1,n=0,s=1/0;const r=this.optimal.g[t];for(r&&Object.keys(r).forEach(o=>{const i=r[o];i<s&&(n=parseInt(o,10),s=i)});t>=0;){const o=this.optimal.m[t][n];e.unshift(o),t=o.i-1,n-=1}return e}};var ne={mostGuessableMatchSequence(a,e,t=!1){M.password=a,M.excludeAdditive=t;const n=a.length;let s=M.fillArray(n,"array");e.forEach(c=>{s[c.j].push(c)}),s=s.map(c=>c.sort((l,b)=>l.i-b.i)),M.optimal={m:M.fillArray(n,"object"),pi:M.fillArray(n,"object"),g:M.fillArray(n,"object")};for(let c=0;c<n;c+=1)s[c].forEach(l=>{l.i>0?Object.keys(M.optimal.m[l.i-1]).forEach(b=>{M.update(l,parseInt(b,10)+1)}):M.update(l,1)}),M.bruteforceUpdate(c);const r=M.unwind(n),o=r.length,i=this.getGuesses(a,o);return{password:a,guesses:i,guessesLog10:O.log10(i),sequence:r}},getGuesses(a,e){const t=a.length;let n=0;return a.length===0?n=1:n=M.optimal.g[t-1][e],n}};class an{match({password:e,omniMatch:t}){const n=[];let s=0;for(;s<e.length;){const o=this.getGreedyMatch(e,s),i=this.getLazyMatch(e,s);if(o==null)break;const{match:c,baseToken:l}=this.setMatchToken(o,i);if(c){const b=c.index+c[0].length-1,u=this.getBaseGuesses(l,t);n.push(this.normalizeMatch(l,b,c,u)),s=b+1}}return n.some(o=>o instanceof Promise)?Promise.all(n):n}normalizeMatch(e,t,n,s){const r={pattern:"repeat",i:n.index,j:t,token:n[0],baseToken:e,baseGuesses:0,repeatCount:n[0].length/e.length};return s instanceof Promise?s.then(o=>j(E({},r),{baseGuesses:o})):j(E({},r),{baseGuesses:s})}getGreedyMatch(e,t){const n=/(.+)\1+/g;return n.lastIndex=t,n.exec(e)}getLazyMatch(e,t){const n=/(.+?)\1+/g;return n.lastIndex=t,n.exec(e)}setMatchToken(e,t){const n=/^(.+?)\1+$/;let s,r="";if(t&&e[0].length>t[0].length){s=e;const o=n.exec(s[0]);o&&(r=o[1])}else s=t,s&&(r=s[1]);return{match:s,baseToken:r}}getBaseGuesses(e,t){const n=t.match(e);return n instanceof Promise?n.then(r=>ne.mostGuessableMatchSequence(e,r).guesses):ne.mostGuessableMatchSequence(e,n).guesses}}class rn{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(e.length===1)return[];let n=0,s=null;const r=e.length;for(let o=1;o<r;o+=1){const i=e.charCodeAt(o)-e.charCodeAt(o-1);if(s==null&&(s=i),i!==s){const c=o-1;this.update({i:n,j:c,delta:s,password:e,result:t}),n=c,s=i}}return this.update({i:n,j:r-1,delta:s,password:e,result:t}),t}update({i:e,j:t,delta:n,password:s,result:r}){if(t-e>1||Math.abs(n)===1){const o=Math.abs(n);if(o>0&&o<=this.MAX_DELTA){const i=s.slice(e,+t+1||9e9),{sequenceName:c,sequenceSpace:l}=this.getSequence(i);return r.push({pattern:"sequence",i:e,j:t,token:s.slice(e,+t+1||9e9),sequenceName:c,sequenceSpace:l,ascending:n>0})}}return null}getSequence(e){let t="unicode",n=26;return wt.test(e)?(t="lower",n=26):xt.test(e)?(t="upper",n=26):Tt.test(e)&&(t="digits",n=10),{sequenceName:t,sequenceSpace:n}}}class on{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(d.graphs).forEach(n=>{const s=d.graphs[n];te(t,this.helper(e,s,n))}),N(t)}checkIfShifted(e,t,n){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(n))?1:0}helper(e,t,n){let s;const r=[];let o=0;const i=e.length;for(;o<i-1;){let c=o+1,l=0,b=0;for(s=this.checkIfShifted(n,e,o);;){const u=e.charAt(c-1),h=t[u]||[];let p=!1,f=-1,k=-1;if(c<i){const w=e.charAt(c),m=h.length;for(let g=0;g<m;g+=1){const v=h[g];if(k+=1,v){const y=v.indexOf(w);if(y!==-1){p=!0,f=k,y===1&&(s+=1),l!==f&&(b+=1,l=f);break}}}}if(p)c+=1;else{c-o>2&&r.push({pattern:"spatial",i:o,j:c-1,token:e.slice(o,c),graph:n,turns:b,shiftedCount:s}),o=c;break}}}return r}}class cn{constructor(){this.matchers={date:Dt,dictionary:$t,regex:Ut,repeat:an,sequence:rn,spatial:on}}match(e){const t=[],n=[];return[...Object.keys(this.matchers),...Object.keys(d.matchers)].forEach(r=>{if(!this.matchers[r]&&!d.matchers[r])return;const o=this.matchers[r]?this.matchers[r]:d.matchers[r].Matching,c=new o().match({password:e,omniMatch:this});c instanceof Promise?(c.then(l=>{te(t,l)}),n.push(c)):te(t,c)}),n.length>0?new Promise(r=>{Promise.all(n).then(()=>{r(N(t))})}):N(t)}}const Se=1,Ee=Se*60,Te=Ee*60,Ae=Te*24,De=Ae*31,Ie=De*12,ln=Ie*100,J={second:Se,minute:Ee,hour:Te,day:Ae,month:De,year:Ie,century:ln};class un{translate(e,t){let n=e;t!==void 0&&t!==1&&(n+="s");const{timeEstimation:s}=d.translations;return s[n].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/.027777777777777776,onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},n={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach(s=>{const r=t[s];n[s]=this.displayTime(r)}),{crackTimesSeconds:t,crackTimesDisplay:n,score:this.guessesToScore(e)}}guessesToScore(e){return e<1e3+5?0:e<1e6+5?1:e<1e8+5?2:e<1e10+5?3:4}displayTime(e){let t="centuries",n;const s=Object.keys(J),r=s.findIndex(o=>e<J[o]);return r>-1&&(t=s[r-1],r!==0?n=Math.round(e/J[t]):t="ltSecond"),this.translate(t,n)}}var hn=()=>null,dn=()=>({warning:d.translations.warnings.dates,suggestions:[d.translations.suggestions.dates]});const fn=(a,e)=>{let t="";return e&&!a.l33t&&!a.reversed?a.rank<=10?t=d.translations.warnings.topTen:a.rank<=100?t=d.translations.warnings.topHundred:t=d.translations.warnings.common:a.guessesLog10<=4&&(t=d.translations.warnings.similarToCommon),t},gn=(a,e)=>{let t="";return e&&(t=d.translations.warnings.wordByItself),t},bn=(a,e)=>e?d.translations.warnings.namesByThemselves:d.translations.warnings.commonNames,pn=(a,e)=>{let t="";const n=a.dictionaryName,s=n==="lastnames"||n.toLowerCase().includes("firstnames");return n==="passwords"?t=fn(a,e):n.includes("wikipedia")?t=gn(a,e):s?t=bn(a,e):n==="userInputs"&&(t=d.translations.warnings.userInputs),t};var mn=(a,e)=>{const t=pn(a,e),n=[],s=a.token;return s.match(we)?n.push(d.translations.suggestions.capitalization):s.match(Me)&&s.toLowerCase()!==s&&n.push(d.translations.suggestions.allUppercase),a.reversed&&a.token.length>=4&&n.push(d.translations.suggestions.reverseWords),a.l33t&&n.push(d.translations.suggestions.l33t),{warning:t,suggestions:n}},kn=a=>a.regexName==="recentYear"?{warning:d.translations.warnings.recentYears,suggestions:[d.translations.suggestions.recentYears,d.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},vn=a=>{let e=d.translations.warnings.extendedRepeat;return a.baseToken.length===1&&(e=d.translations.warnings.simpleRepeat),{warning:e,suggestions:[d.translations.suggestions.repeated]}},yn=()=>({warning:d.translations.warnings.sequences,suggestions:[d.translations.suggestions.sequences]}),xn=a=>{let e=d.translations.warnings.keyPattern;return a.turns===1&&(e=d.translations.warnings.straightRow),{warning:e,suggestions:[d.translations.suggestions.longerKeyboardPattern]}};const ge={warning:"",suggestions:[]};class wn{constructor(){this.matchers={bruteforce:hn,date:dn,dictionary:mn,regex:kn,repeat:vn,sequence:yn,spatial:xn},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(d.translations.suggestions.useWords,d.translations.suggestions.noNeed)}getFeedback(e,t){if(t.length===0)return this.defaultFeedback;if(e>2)return ge;const n=d.translations.suggestions.anotherWord,s=this.getLongestMatch(t);let r=this.getMatchFeedback(s,t.length===1);return r!=null?(r.suggestions.unshift(n),r.warning==null&&(r.warning="")):r={warning:"",suggestions:[n]},r}getLongestMatch(e){let t=e[0];return e.slice(1).forEach(s=>{s.token.length>t.token.length&&(t=s)}),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):d.matchers[e.pattern]&&"feedback"in d.matchers[e.pattern]?d.matchers[e.pattern].feedback(e,t):ge}}const Pe=()=>new Date().getTime(),Mn=(a,e,t)=>{const n=new wn,s=new un,r=ne.mostGuessableMatchSequence(e,a),o=Pe()-t,i=s.estimateAttackTimes(r.guesses);return j(E(E({calcTime:o},r),i),{feedback:n.getFeedback(i.score,r.sequence)})},Cn=(a,e)=>(e&&d.extendUserInputsDictionary(e),new cn().match(a)),Sn=(a,e)=>{const t=Pe(),n=Cn(a,e);if(n instanceof Promise)throw new Error("You are using a Promised matcher, please use `zxcvbnAsync` for it.");return Mn(n,a,t)};const En=se({name:"StrengthMeter",components:{InputPassword:Ye.Password},props:{value:K.string,showInput:K.bool.def(!0),disabled:K.bool},emits:["score-change","change"],setup(a,{emit:e}){const t=$(""),{prefixCls:n}=qe("strength-meter"),s=We(()=>{const{disabled:o}=a;if(o)return-1;const c=H(t)?Sn(H(t)).score:-1;return e("score-change",c),c});function r(o){t.value=o.target.value}return ke(()=>{t.value=a.value||""}),be(()=>H(t),o=>{e("change",o)}),{getPasswordStrength:s,handleChange:r,prefixCls:n,innerValueRef:t}}}),Tn=["data-score"];function An(a,e,t,n,s,r){const o=He("InputPassword");return ie(),Ze("div",{class:Z([a.prefixCls,"relative"])},[a.showInput?(ie(),Xe(o,at({key:0},a.$attrs,{allowClear:"",value:a.innerValueRef,onChange:a.handleChange,disabled:a.disabled}),Je({_:2},[Qe(Object.keys(a.$slots),i=>({name:i,fn:et(c=>[tt(a.$slots,i,nt(st(c||{})),void 0,!0)])}))]),1040,["value","onChange","disabled"])):rt("",!0),ce("div",{class:Z(`${a.prefixCls}-bar`)},[ce("div",{class:Z(`${a.prefixCls}-bar--fill`),"data-score":a.getPasswordStrength},null,10,Tn)],2)],2)}var Dn=Ke(En,[["render",An],["__scopeId","data-v-367aeb21"]]);const On=ot(Dn);export{ft as C,On as S,lt as V,_n as a,jn as c};
