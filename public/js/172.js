"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[172],{2598:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9669),a=r.n(n);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,o=void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===s(o)?o:String(o)),n)}var a,o}const i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n;return t=e,(r=[{key:"get",value:function(){return a().get("/api/guest").then((function(e){return console.log("response getGuests"),console.log(e),e}))}},{key:"store",value:function(e){return e.post("api/guest").then((function(e){return console.log("response storeGuest"),console.log(e),e}))}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())},3073:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(3645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".content-wrapper[data-v-1c74b910],.main-footer[data-v-1c74b910],.main-header[data-v-1c74b910]{margin-left:0!important}.main-header[data-v-1c74b910]{--bs-navbar-padding-x:1rem!important}",""]);const s=a},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(a[o]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);n&&a[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},3379:(e,t,r)=>{var n,a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),o=[];function i(e){for(var t=-1,r=0;r<o.length;r++)if(o[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],a=0;a<e.length;a++){var s=e[a],l=t.base?s[0]+t.base:s[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var d=i(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:u,updater:b(m,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,r,n){var a=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var s=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function f(e,t,r){var n=r.css,a=r.media,s=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,p=0;function b(e,t){var r,n,a;if(t.singleton){var s=p++;r=h||(h=c(t)),n=m.bind(null,r,s,!1),a=m.bind(null,r,s,!0)}else r=c(t),n=f.bind(null,r,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var a=i(r[n]);o[a].references--}for(var s=l(e,t),c=0;c<r.length;c++){var u=i(r[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}r=s}}}},5714:(e,t,r)=>{r.d(t,{ZP:()=>E});var n=r(9669),a=r.n(n),s=Object.defineProperty,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&c(e,r,t[r]);return e};const d=e=>void 0===e,m=e=>Array.isArray(e),f=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,h=(e,t,r,n)=>((t=t||{}).indices=!d(t.indices)&&t.indices,t.nullsAsUndefineds=!d(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!d(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!d(t.allowEmptyArrays)&&t.allowEmptyArrays,r=r||new FormData,d(e)||(null===e?t.nullsAsUndefineds||r.append(n,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?r.append(n,e?1:0):r.append(n,e):m(e)?e.length?e.forEach(((e,a)=>{const s=n+"["+(t.indices?a:"")+"]";h(e,t,r,s)})):t.allowEmptyArrays&&r.append(n+"[]",""):(e=>e instanceof Date)(e)?r.append(n,e.toISOString()):!(e=>e===Object(e))(e)||(e=>f(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||f(e)?r.append(n,e):Object.keys(e).forEach((a=>{const s=e[a];if(m(s))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);h(s,t,r,n?n+"["+a+"]":a)}))),r);var p={serialize:h};function b(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((r=>{t[r]=b(e[r])})),t}function g(e){return Array.isArray(e)?e:[e]}function v(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>v(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(u(u({},this.errors),{[e]:g(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return g(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const r=this.get(e);r&&t.push(r)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((r=>{r!==e&&(t[r]=this.errors[r])})),this.set(t)}}class k{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,b(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>u(u({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!k.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),k.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!k.ignore.includes(e))).forEach((e=>{this[e]=b(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,r={}){return this.startProcessing(),r=u({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===e.toLowerCase()?r.params=u(u({},this.data()),r.params):(r.data=u(u({},this.data()),r.data),v(r.data)&&!r.transformRequest&&(r.transformRequest=[e=>p.serialize(e)])),new Promise(((e,t)=>{(k.axios||a()).request(r).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?u({},e.data.errors):e.data.message?{error:e.data.message}:u({},e.data):{error:k.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let r=e;return Object.prototype.hasOwnProperty.call(k.routes,e)&&(r=decodeURI(k.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{r=r.replace(`{${e}}`,t[e])})),r}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}k.routes={},k.errorMessage="Something went wrong. Please try again.",k.recentlySuccessfulTimeout=2e3,k.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const E=k},8065:(e,t,r)=>{r.d(t,{ne:()=>h,qz:()=>i});var n=r(821);Boolean;var a=r(3744);const s=["innerHTML"];const o={name:"HasError",extends:{props:{form:{type:Object,required:!0},field:{type:String,required:!0}}}},i=(0,a.Z)(o,[["render",function(e,t,r,a,o,i){return e.form.errors.has(e.field)?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:"invalid-feedback d-block",innerHTML:e.form.errors.get(e.field)},null,8,s)):(0,n.createCommentVNode)("",!0)}]]),l={key:0,class:"alert alert-danger alert-dismissible",role:"alert"},c=["innerHTML"],u=["innerHTML"],d=["innerHTML"];const m={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss(){this.dismissible&&this.form.clear()}}},f={name:"AlertError",extends:{extends:m,props:{message:{type:String,default:"There were some problems with your input."}}}},h=(0,a.Z)(f,[["render",function(e,t,r,a,s,o){return e.form.errors.any()?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[e.dismissible?((0,n.openBlock)(),(0,n.createElementBlock)("button",{key:0,type:"button",class:"btn-close","aria-label":"Dismiss",onClick:t[0]||(t[0]=(...t)=>e.dismiss&&e.dismiss(...t))})):(0,n.createCommentVNode)("",!0),(0,n.renderSlot)(e.$slots,"default",{},(()=>[e.form.errors.has("error")?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,innerHTML:e.form.errors.get("error")},null,8,c)):e.form.errors.has("message")?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:1,innerHTML:e.form.errors.get("message")},null,8,u)):((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:2,innerHTML:e.message},null,8,d))]))])):(0,n.createCommentVNode)("",!0)}]])},9172:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(821),a=function(e){return(0,n.pushScopeId)("data-v-1c74b910"),e=e(),(0,n.popScopeId)(),e},s={class:"main-header navbar navbar-expand-md navbar-light navbar-white"},o={class:"container"},i=(0,n.createStaticVNode)('<a href="/landing" class="navbar-brand" data-v-1c74b910><img src="http://res.cloudinary.com/kemenagpessel/image/upload/v1678080743/arsip_masuk/o2w50c0hdc98alyizelk.jpg" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity:.8;" data-v-1c74b910><span class="brand-text font-weight-light" data-v-1c74b910>Buku Tamu - Kemenag Pessel</span></a><button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" data-v-1c74b910><span class="navbar-toggler-icon" data-v-1c74b910></span></button>',2),l={class:"collapse navbar-collapse order-3",id:"navbarCollapse"},c={class:"navbar-nav"},u={class:"nav-item"},d=(0,n.createTextVNode)("Dashboard"),m=(0,n.createStaticVNode)('<li class="nav-item" data-v-1c74b910><a href="https://ptsp.kemenagpessel.com" class="nav-link" data-v-1c74b910>Pelayanan Publik</a></li><li class="nav-item" data-v-1c74b910><a href="https://ppid.kemenagpessel.com" class="nav-link" data-v-1c74b910>Pelayanan Informasi</a></li><li class="nav-item" data-v-1c74b910><a href="https://datuak.kemenagpessel.com" class="nav-link" data-v-1c74b910>Satu Data</a></li><li class="nav-item" data-v-1c74b910><a href="#" class="nav-link" data-v-1c74b910>Kontak</a></li>',4),f={key:0,class:"nav-item"},h=(0,n.createTextVNode)("Login"),p={key:1,class:"nav-item"},b=[a((function(){return(0,n.createElementVNode)("p",null,"Logout",-1)}))],g={class:"content-wrapper"},v=(0,n.createStaticVNode)('<div class="content-header" data-v-1c74b910><div class="container" data-v-1c74b910><div class="row mb-2 justify-content-md-center" data-v-1c74b910><div class="col-sm-5" data-v-1c74b910><h1 class="m-0" data-v-1c74b910> Silahkan isi <strong data-v-1c74b910>Buku Tamu</strong></h1></div><div class="col-sm-5" data-v-1c74b910><ol class="breadcrumb float-sm-right" data-v-1c74b910><li class="breadcrumb-item" data-v-1c74b910><a href="#" data-v-1c74b910>Buku Tamu</a></li><li class="breadcrumb-item" data-v-1c74b910><a href="#" data-v-1c74b910>Formulir</a></li><li class="breadcrumb-item active" data-v-1c74b910>Isi Formulir</li></ol></div></div></div></div>',1),y={class:"content"},k={class:"container"},E={class:"row justify-content-md-center"},w={class:"col-lg-10 justify-content-md-center text-center mt-5"},S=a((function(){return(0,n.createElementVNode)("h3",null,".::| Terima Kasih telah mengisi Buku Tamu |::.",-1)})),T=a((function(){return(0,n.createElementVNode)("br",null,null,-1)})),j=a((function(){return(0,n.createElementVNode)("aside",{class:"control-sidebar control-sidebar-dark"},null,-1)})),N=a((function(){return(0,n.createElementVNode)("footer",{class:"main-footer"},[(0,n.createElementVNode)("div",{class:"float-right d-none d-sm-inline"}," Anything you want "),(0,n.createElementVNode)("strong",null,[(0,n.createTextVNode)("Copyright © 2014-2021 "),(0,n.createElementVNode)("a",{href:"https://adminlte.io"},"AdminLTE.io"),(0,n.createTextVNode)(".")]),(0,n.createTextVNode)(" All rights reserved. ")],-1)}));var O=r(2598),V=r(5714),A=r(6455),C=r.n(A),B=r(8065);const P={name:"Landing",components:{"has-error":B.qz,"alert-error":B.ne},data:function(){return{loading:!1,disabled:!1,editModal:!1,form:new V.ZP({id:"",name:"",gender:"",no_hp:"",email:"",address:"",organisasi:"",jabatan:"",keperluan:"",tujuan:""})}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")},submitAnother:function(){return this.$router.push({name:"Landing"})},saveData:function(){var e=this;this.$Progress.start(),this.loading=!0,this.disabled=!0,console.log("this.form"),console.log(this.form),console.log("this.form.name"),console.log(this.form.name),O.Z.store(this.form).then((function(t){var r;Toast.fire({icon:"success",title:"Data saved successfully"}),C().fire({title:"Berhasil!",icon:"success",text:"Data Anda berhasil tersimpan!",html:"Data Anda berhasil tersimpan! <br> Modal akan ditutup dalam waktu <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:function(){C().showLoading();var e=C().getHtmlContainer().querySelector("b");r=setInterval((function(){e.textContent=C().getTimerLeft()}),100)},willClose:function(){clearInterval(r)}}).then((function(t){t.dismiss===C().DismissReason.timer&&(console.log("I was closed by the timer"),e.$router.push("/thanks"))})),e.loading=!1,e.disabled=!1,e.$Progress.finish(),console.log("response local"),console.log(t)}),(function(t){console.log("error local"),console.log(t),console.log("error local message"),console.log(t.message),e.loading=!1,e.disabled=!1,e.$Progress.fail(),C().fire("Failed","Mohon untuk mengisi kolom yang kosong","warning")}))}}};var x=r(3379),I=r.n(x),M=r(3073),L={insert:"head",singleton:!1};I()(M.Z,L);M.Z.locals;const D=(0,r(3744).Z)(P,[["render",function(e,t,r,a,O,V){var A=(0,n.resolveComponent)("router-link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("nav",s,[(0,n.createElementVNode)("div",o,[i,(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("ul",c,[(0,n.createElementVNode)("li",u,[(0,n.createVNode)(A,{to:"dashboard",class:"nav-link"},{default:(0,n.withCtx)((function(){return[d]})),_:1})]),m,e.currentUser?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createElementBlock)("li",f,[(0,n.createVNode)(A,{to:"login",class:"nav-link"},{default:(0,n.withCtx)((function(){return[h]})),_:1})])),e.currentUser?((0,n.openBlock)(),(0,n.createElementBlock)("li",p,[(0,n.createElementVNode)("a",{onClick:t[0]||(t[0]=(0,n.withModifiers)((function(){return V.logOut&&V.logOut.apply(V,arguments)}),["prevent"])),class:"nav-link"},b)])):(0,n.createCommentVNode)("",!0)])])])]),(0,n.createElementVNode)("div",g,[v,(0,n.createElementVNode)("div",y,[(0,n.createElementVNode)("div",k,[(0,n.createElementVNode)("div",E,[(0,n.createElementVNode)("div",w,[S,T,(0,n.createElementVNode)("button",{onClick:t[1]||(t[1]=function(e){return V.submitAnother()})},"Submit another response")])])])])]),j,N],64)}],["__scopeId","data-v-1c74b910"]])}}]);