"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[837],{2598:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5121);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(s=n.key,i=void 0,i=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(s,"string"),"symbol"===a(i)?i:String(i)),n)}var s,i}const i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,(r=[{key:"get",value:function(){return n.Z.get("/api/guest").then((function(e){return console.log("response getGuests"),console.log(e),e}))}},{key:"store",value:function(e){return e.post("api/guest").then((function(e){return console.log("response storeGuest"),console.log(e),e}))}}])&&s(t.prototype,r),a&&s(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}())},1390:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(3645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".content-wrapper[data-v-0be81ee7],.main-footer[data-v-0be81ee7],.main-header[data-v-0be81ee7]{margin-left:0!important}.main-header[data-v-0be81ee7]{--bs-navbar-padding-x:1rem!important}",""]);const s=a},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);n&&a[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},3379:(e,t,r)=>{var n,a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function o(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],a=0;a<e.length;a++){var s=e[a],l=t.base?s[0]+t.base:s[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var d=o(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:b(f,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,r,n){var a=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function h(e,t,r){var n=r.css,a=r.media,s=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,m=0;function b(e,t){var r,n,a;if(t.singleton){var s=m++;r=p||(p=c(t)),n=f.bind(null,r,s,!1),a=f.bind(null,r,s,!0)}else r=c(t),n=h.bind(null,r,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var a=o(r[n]);i[a].references--}for(var s=l(e,t),c=0;c<r.length;c++){var u=o(r[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=s}}}},5714:(e,t,r)=>{r.d(t,{ZP:()=>k});var n=r(5121),a=Object.defineProperty,s=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))o.call(t,r)&&l(e,r,t[r]);return e};const u=e=>void 0===e,d=e=>Array.isArray(e),f=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,h=(e,t,r,n)=>((t=t||{}).indices=!u(t.indices)&&t.indices,t.nullsAsUndefineds=!u(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!u(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!u(t.allowEmptyArrays)&&t.allowEmptyArrays,r=r||new FormData,u(e)||(null===e?t.nullsAsUndefineds||r.append(n,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?r.append(n,e?1:0):r.append(n,e):d(e)?e.length?e.forEach(((e,a)=>{const s=n+"["+(t.indices?a:"")+"]";h(e,t,r,s)})):t.allowEmptyArrays&&r.append(n+"[]",""):(e=>e instanceof Date)(e)?r.append(n,e.toISOString()):!(e=>e===Object(e))(e)||(e=>f(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||f(e)?r.append(n,e):Object.keys(e).forEach((a=>{const s=e[a];if(d(s))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);h(s,t,r,n?n+"["+a+"]":a)}))),r);var p={serialize:h};function m(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((r=>{t[r]=m(e[r])})),t}function b(e){return Array.isArray(e)?e:[e]}function g(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>g(e)))}class v{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(c(c({},this.errors),{[e]:b(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return b(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const r=this.get(e);r&&t.push(r)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((r=>{r!==e&&(t[r]=this.errors[r])})),this.set(t)}}class y{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new v,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,m(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>c(c({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!y.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),y.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!y.ignore.includes(e))).forEach((e=>{this[e]=m(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,r={}){return this.startProcessing(),r=c({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},r),"get"===e.toLowerCase()?r.params=c(c({},this.data()),r.params):(r.data=c(c({},this.data()),r.data),g(r.data)&&!r.transformRequest&&(r.transformRequest=[e=>p.serialize(e)])),new Promise(((e,t)=>{(y.axios||n.Z).request(r).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?c({},e.data.errors):e.data.message?{error:e.data.message}:c({},e.data):{error:y.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let r=e;return Object.prototype.hasOwnProperty.call(y.routes,e)&&(r=decodeURI(y.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{r=r.replace(`{${e}}`,t[e])})),r}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}y.routes={},y.errorMessage="Something went wrong. Please try again.",y.recentlySuccessfulTimeout=2e3,y.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const k=y},8065:(e,t,r)=>{r.d(t,{ne:()=>p,qz:()=>o});var n=r(821);Boolean;var a=r(3744);const s=["innerHTML"];const i={name:"HasError",extends:{props:{form:{type:Object,required:!0},field:{type:String,required:!0}}}},o=(0,a.Z)(i,[["render",function(e,t,r,a,i,o){return e.form.errors.has(e.field)?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,class:"invalid-feedback d-block",innerHTML:e.form.errors.get(e.field)},null,8,s)):(0,n.createCommentVNode)("",!0)}]]),l={key:0,class:"alert alert-danger alert-dismissible",role:"alert"},c=["innerHTML"],u=["innerHTML"],d=["innerHTML"];const f={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss(){this.dismissible&&this.form.clear()}}},h={name:"AlertError",extends:{extends:f,props:{message:{type:String,default:"There were some problems with your input."}}}},p=(0,a.Z)(h,[["render",function(e,t,r,a,s,i){return e.form.errors.any()?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[e.dismissible?((0,n.openBlock)(),(0,n.createElementBlock)("button",{key:0,type:"button",class:"btn-close","aria-label":"Dismiss",onClick:t[0]||(t[0]=(...t)=>e.dismiss&&e.dismiss(...t))})):(0,n.createCommentVNode)("",!0),(0,n.renderSlot)(e.$slots,"default",{},(()=>[e.form.errors.has("error")?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,innerHTML:e.form.errors.get("error")},null,8,c)):e.form.errors.has("message")?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:1,innerHTML:e.form.errors.get("message")},null,8,u)):((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:2,innerHTML:e.message},null,8,d))]))])):(0,n.createCommentVNode)("",!0)}]])},3837:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=(0,r(821).createStaticVNode)('<div class="content-header" data-v-0be81ee7><div class="container" data-v-0be81ee7><div class="row mb-2 justify-content-md-center" data-v-0be81ee7><div class="col-sm-5" data-v-0be81ee7><h1 class="m-0" data-v-0be81ee7> Tentang <strong data-v-0be81ee7>Buku Tamu Digital</strong></h1></div><div class="col-sm-5" data-v-0be81ee7><ol class="breadcrumb float-sm-right" data-v-0be81ee7><li class="breadcrumb-item" data-v-0be81ee7><a href="#" data-v-0be81ee7>Buku Tamu</a></li><li class="breadcrumb-item" data-v-0be81ee7><a href="#" data-v-0be81ee7>Tentang</a></li><li class="breadcrumb-item active" data-v-0be81ee7>Index</li></ol></div></div></div></div><div class="content" data-v-0be81ee7><div class="container" data-v-0be81ee7><div class="row justify-content-md-center" data-v-0be81ee7><div class="col-lg-10" data-v-0be81ee7><div class="card" data-v-0be81ee7><div class="card-header" data-v-0be81ee7><h4 class="card-title m-0" data-v-0be81ee7>Tentang Buku Tamu Digital </h4></div><div class="card-body" data-v-0be81ee7><div class="row" data-v-0be81ee7><h5 data-v-0be81ee7><p data-v-0be81ee7> Kita semua menyadari, penggunaan buku tamu digital di masa pandemi seperti saat ini bermanfaat untuk mencegah penyebaran Covid-19. Dengan hadirnya buku tamu digital, memungkinkan pemilik bisnis untuk menjaga kapasitas pengunjung agar tetap terkendali dan sesuai dengan protokol kesehatan yang berlaku. </p><p data-v-0be81ee7> Buku tamu digital biasanya berbentuk QR Code. Seperti yang Anda temui saat ini, ada prosedur yang harus Anda lakukan sebelum memasuki suatu lokasi tertentu. Terdapat QR Code yang dapat dipindai oleh smartphone Anda, lalu Anda diminta untuk mengisi data informasi diri. </p><p data-v-0be81ee7> Buku Tamu Digital merupakan salah satu proses untuk mencatat data pengunjung yang telah mengunjungi SMAN 3 Painan yang berguna untuk mencatat siapa saja dengan keperluan apa saja sehingga mereka datang ke SMAN 3 Painan. </p></h5></div></div></div></div></div></div></div>',2);r(2598);var a=r(5714),s=(r(6455),r(8065));const i={name:"Tentang",components:{"has-error":s.qz,"alert-error":s.ne},data:function(){return{loading:!1,disabled:!1,editModal:!1,form:new a.ZP({id:"",name:"",gender:"",no_hp:"",email:"",address:"",organisasi:"",jabatan:"",keperluan:"",tujuan:""})}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")},submitAnother:function(){return this.$router.push({name:"Landing"})}},created:function(){this.$Progress.start()},mounted:function(){this.$Progress.finish()}};var o=r(3379),l=r.n(o),c=r(1390),u={insert:"head",singleton:!1};l()(c.Z,u);c.Z.locals;const d=(0,r(3744).Z)(i,[["render",function(e,t,r,a,s,i){return n}],["__scopeId","data-v-0be81ee7"]])}}]);