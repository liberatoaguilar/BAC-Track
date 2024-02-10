(function(){"use strict";var e={1532:function(e,t,l){var n=l(7764),i=l(4108),a=l(9096),r=l(2386),o=l(4460),s=l(8096),u=l(4624),d=l(3160),c=l(6176),f=l(588),m=l(1884),h=l(5200),g=l(4019),p=l(7136),_=l(8163),K=l(5400),k=l(3432),b=l(1252),v=l(4820),Q=l(4968),C=l(1279),D=l(6128);const A=["src"],w=(0,i.QD)("b",null,"Last Drink",-1),y=(0,i.QD)("b",null,"Sober",-1),B=(0,i.QD)("b",null,"Drive",-1);function x(e,t,n,x,O,S){const E=(0,i.E1)("BACLabel"),T=(0,i.E1)("DrinkButton"),V=(0,i.E1)("ClearDrink"),Y=(0,i.E1)("CustomDrink");return(0,i.Wz)(),(0,i.Az)(r.m,null,{default:(0,i.Ql)((()=>[(0,i.K2)(b.m,null,{default:(0,i.Ql)((()=>[(0,i.K2)(f.G,{modelValue:e.showRefresh,"onUpdate:modelValue":t[1]||(t[1]=t=>e.showRefresh=t),"max-width":"500px",style:{padding:"20px"}},{default:(0,i.Ql)((()=>[(0,i.K2)(s.S,null,{default:(0,i.Ql)((()=>[(0,i.K2)(u.m,null,{default:(0,i.Ql)((()=>[(0,i.mY)(" Refresh? ")])),_:1}),(0,i.K2)(d.i,null,{default:(0,i.Ql)((()=>[(0,i.K2)(h.O),(0,i.K2)(o.i,{color:"error",onClick:t[0]||(t[0]=t=>e.showRefresh=!1)},{default:(0,i.Ql)((()=>[(0,i.mY)("Cancel")])),_:1}),(0,i.K2)(h.O),(0,i.K2)(o.i,{color:"green",onClick:S.clearData},{default:(0,i.Ql)((()=>[(0,i.mY)("Confirm")])),_:1},8,["onClick"]),(0,i.K2)(h.O)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.K2)(D.s,{density:"normal",style:{padding:"5px"},color:"red-darken-3"},{default:(0,i.Ql)((()=>[(0,i.QD)("b",null,[(0,i.K2)(k.E,{color:"white",style:{padding:"0","padding-left":"10px","font-size":"22px"}},{default:(0,i.Ql)((()=>[(0,i.mY)("BAC-Track")])),_:1})]),(0,i.K2)(h.O),(0,i.QD)("img",{src:e.images.logo,width:"35px"},null,8,A),(0,i.K2)(h.O),(0,i.K2)(o.i,{icon:"",color:"grey-lighten-2",onClick:t[2]||(t[2]=t=>e.showRefresh=!0)},{default:(0,i.Ql)((()=>[(0,i.K2)(K.G,null,{default:(0,i.Ql)((()=>[(0,i.mY)("mdi-refresh")])),_:1})])),_:1}),(0,i.K2)(o.i,{icon:"",color:"grey-lighten-2",onClick:t[3]||(t[3]=t=>e.showDialog=!0)},{default:(0,i.Ql)((()=>[(0,i.K2)(K.G,null,{default:(0,i.Ql)((()=>[(0,i.mY)("mdi-cog")])),_:1})])),_:1})])),_:1}),(0,i.K2)(g.K,null,{default:(0,i.Ql)((()=>[(0,i.K2)(p.s,{class:"text-center",style:{height:"20vh"},dense:""},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.K2)(g.K,{style:{margin:"0",padding:"0"}},{default:(0,i.Ql)((()=>[(0,i.K2)(p.s,{style:{height:"80%"},dense:""},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,null,{default:(0,i.Ql)((()=>[(0,i.K2)(E,{BAC:e.total_BAC},null,8,["BAC"])])),_:1})])),_:1}),(0,i.K2)(p.s,{style:{height:"20%","padding-top":"10px"},dense:""},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[w])),_:1}),(0,i.K2)(h.O),(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(S.lastDrink()),1)])),_:1})])),_:1}),(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.QD)("b",null,"Total Drink"+(0,a.WA)(1==S.totalDrinks()?"":"s"),1)])),_:1}),(0,i.K2)(h.O),(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(S.totalDrinks()),1)])),_:1})])),_:1}),(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[y])),_:1}),(0,i.K2)(h.O),(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(S.formatTime(e.sober_time)),1)])),_:1})])),_:1}),(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[B])),_:1}),(0,i.K2)(h.O),(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(S.formatTime(e.drive_time)),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.K2)(p.s,{class:"text-center",style:{height:"65vh","padding-top":"0px"},align:"stretch"},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.K2)(g.K,{style:{height:"100%"}},{default:(0,i.Ql)((()=>[(0,i.K2)(p.s,{style:{height:"100%"}},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(T,{onDrinkClick:S.addDrink,text:"Beer",std:1,added:S.calcAddedBAC(1),image:l(3074)},null,8,["onDrinkClick","added","image"])])),_:1}),(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(T,{onDrinkClick:S.addDrink,text:"Shot",std:1.5,added:S.calcAddedBAC(1.5),image:l(1816)},null,8,["onDrinkClick","added","image"])])),_:1}),(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(V,{onRemoveDrink:S.removeDrink,image:l(8520)},null,8,["onRemoveDrink","image"])])),_:1}),(0,i.K2)(_.m,{cols:"6"},{default:(0,i.Ql)((()=>[(0,i.K2)(Y,{onDrinkClick:S.addDrink,image:l(4888)},null,8,["onDrinkClick","image"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.K2)(f.G,{modelValue:e.showDialog,"onUpdate:modelValue":t[7]||(t[7]=t=>e.showDialog=t),"max-width":"500px",style:{padding:"20px"}},{default:(0,i.Ql)((()=>[(0,i.K2)(s.S,null,{default:(0,i.Ql)((()=>[(0,i.K2)(u.m,null,{default:(0,i.Ql)((()=>[(0,i.mY)(" Settings ")])),_:1}),(0,i.K2)(m.q,{ref:"settings"},{default:(0,i.Ql)((()=>[(0,i.K2)(c.c,null,{default:(0,i.Ql)((()=>[(0,i.K2)(Q.a,{modelValue:e.gender,"onUpdate:modelValue":t[4]||(t[4]=t=>e.gender=t),row:""},{default:(0,i.Ql)((()=>[(0,i.K2)(v.K,{value:0,label:"Male"}),(0,i.K2)(v.K,{value:1,label:"Female"})])),_:1},8,["modelValue"]),(0,i.K2)(C.y,{modelValue:e.weight,"onUpdate:modelValue":t[5]||(t[5]=t=>e.weight=t),label:"lbs",rules:[...e.numberRule]},null,8,["modelValue","rules"])])),_:1}),(0,i.K2)(d.i,null,{default:(0,i.Ql)((()=>[(0,i.K2)(h.O),(0,i.K2)(o.i,{color:"error",onClick:t[6]||(t[6]=t=>e.showDialog=!1)},{default:(0,i.Ql)((()=>[(0,i.mY)("Cancel")])),_:1}),(0,i.K2)(h.O),(0,i.K2)(o.i,{color:"green",onClick:S.submitForm},{default:(0,i.Ql)((()=>[(0,i.mY)("Save")])),_:1},8,["onClick"]),(0,i.K2)(h.O)])),_:1})])),_:1},512)])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}l(3248);const O=e=>((0,i.ED)("data-v-6df7ed7d"),e=e(),(0,i.ii)(),e),S=["src"],E=O((()=>(0,i.QD)("br",null,null,-1)));function T(e,t,l,n,r,s){return(0,i.Wz)(),(0,i.Az)(o.i,{block:"",onClick:s.clickEvent,class:"button"},{default:(0,i.Ql)((()=>[(0,i.K2)(g.K,{style:{padding:"0",margin:"0"}},{default:(0,i.Ql)((()=>[(0,i.K2)(p.s,{class:"text-center",dense:""},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.QD)("img",{width:"60px",src:l.image},null,8,S)])),_:1}),(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(l.text),1)])),_:1})])),_:1}),(0,i.K2)(_.m,{cols:"12",style:{"font-size":"10pt",color:"grey"}},{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(l.std)+" Drink"+(0,a.WA)(l.std>1?"s":"")+" ",1),E,(0,i.mY)(" +"+(0,a.WA)(l.added.toFixed(2))+" BAC ",1)])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"])}var V={name:"DrinkButton",props:{text:String,image:String,std:Number,added:Number},methods:{clickEvent(){this.$emit("drinkClick",this.std)}}},Y=l(4100);const j=(0,Y.c)(V,[["render",T],["__scopeId","data-v-6df7ed7d"]]);var I=j;const W=["src"];function M(e,t,l,n,a,r){return(0,i.Wz)(),(0,i.An)(i.ae,null,[(0,i.K2)(o.i,{block:"",onClick:t[0]||(t[0]=e=>a.showDialog=!0),class:"button"},{default:(0,i.Ql)((()=>[(0,i.K2)(g.K,null,{default:(0,i.Ql)((()=>[(0,i.K2)(p.s,{class:"text-center"},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.QD)("img",{width:"60px",src:l.image},null,8,W)])),_:1}),(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.mY)("Custom")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.K2)(f.G,{modelValue:a.showDialog,"onUpdate:modelValue":t[4]||(t[4]=e=>a.showDialog=e),"max-width":"500px"},{default:(0,i.Ql)((()=>[(0,i.K2)(s.S,{style:{padding:"20px"}},{default:(0,i.Ql)((()=>[(0,i.K2)(u.m,null,{default:(0,i.Ql)((()=>[(0,i.mY)(" Custom Drink ")])),_:1}),(0,i.K2)(m.q,{ref:"form"},{default:(0,i.Ql)((()=>[(0,i.K2)(c.c,null,{default:(0,i.Ql)((()=>[(0,i.K2)(C.y,{modelValue:a.percentage,"onUpdate:modelValue":t[1]||(t[1]=e=>a.percentage=e),label:"ABV","append-inner-icon":"mdi-percent",rules:[...a.numberRule]},null,8,["modelValue","rules"]),(0,i.K2)(C.y,{modelValue:a.ounces,"onUpdate:modelValue":t[2]||(t[2]=e=>a.ounces=e),label:"Oz",rules:[...a.numberRule]},null,8,["modelValue","rules"])])),_:1}),(0,i.K2)(d.i,null,{default:(0,i.Ql)((()=>[(0,i.K2)(h.O),(0,i.K2)(o.i,{color:"error",onClick:t[3]||(t[3]=e=>a.showDialog=!1)},{default:(0,i.Ql)((()=>[(0,i.mY)("Cancel")])),_:1}),(0,i.K2)(h.O),(0,i.K2)(o.i,{color:"green",onClick:r.submitForm},{default:(0,i.Ql)((()=>[(0,i.mY)("Save")])),_:1},8,["onClick"]),(0,i.K2)(h.O)])),_:1})])),_:1},512)])),_:1})])),_:1},8,["modelValue"])],64)}var R={name:"CustomDrink",props:{image:String},data(){return{showDialog:!1,percentage:"",ounces:"",numberRule:[e=>/^\d+(\.\d+)?$/.test(e)||"Must be a number"]}},methods:{submitForm(){this.$refs.form.validate()&&(this.$emit("drinkClick",this.percentage/100*this.ounces*28.35/14),this.percentage="",this.ounces="",this.showDialog=!1)}}};const z=(0,Y.c)(R,[["render",M],["__scopeId","data-v-31fa678c"]]);var F=z;const N=["src"];function P(e,t,l,n,a,r){return(0,i.Wz)(),(0,i.Az)(o.i,{block:"",onClick:r.clickEvent,class:"button"},{default:(0,i.Ql)((()=>[(0,i.K2)(g.K,null,{default:(0,i.Ql)((()=>[(0,i.K2)(p.s,{class:"text-center"},{default:(0,i.Ql)((()=>[(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.QD)("img",{width:"60px",src:l.image},null,8,N)])),_:1}),(0,i.K2)(_.m,{cols:"12"},{default:(0,i.Ql)((()=>[(0,i.K2)(k.E,null,{default:(0,i.Ql)((()=>[(0,i.mY)("Remove")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["onClick"])}var $={name:"ClearDrink",props:{image:String},methods:{clickEvent(){this.$emit("removeDrink")}}};const U=(0,Y.c)($,[["render",P],["__scopeId","data-v-50487fb8"]]);var L=U;function q(e,t,l,n,r,o){return(0,i.Wz)(),(0,i.Az)(k.E,{class:(0,a.WN)(o.bacClass())},{default:(0,i.Ql)((()=>[(0,i.mY)((0,a.WA)(l.BAC.toFixed(2)),1)])),_:1},8,["class"])}var G={name:"BACLabel",props:{BAC:Number},methods:{bacClass(){return this.BAC<.08?"green-bac":this.BAC>=.08&&this.BAC<.2?"yellow-bac":this.BAC>=.2&&this.BAC<.3?"orange-bac":this.BAC>=.3?"red-bac":void 0}},data:()=>({ecosystem:[]})};const H=(0,Y.c)(G,[["render",q],["__scopeId","data-v-2df5a5c8"]]);var J=H,X={name:"App",components:{DrinkButton:I,CustomDrink:F,ClearDrink:L,BACLabel:J},methods:{clearData(){localStorage.clear(),location.reload()},saveData(){localStorage.setItem("gender",this.gender),localStorage.setItem("weight",this.weight),localStorage.setItem("drinks",JSON.stringify(this.drinks))},loadData(){const e=localStorage.getItem("gender");null!==e&&(this.gender=parseInt(e));const t=localStorage.getItem("weight");null!==t&&(this.weight=parseInt(t));const l=localStorage.getItem("drinks");if(null!==l){this.drinks=JSON.parse(l),this.drinks.map((e=>({...e,time:new Date(e.time)})));for(const e of this.drinks)this.total_BAC+=this.calcAddedBAC(e.std);this.sober_time=this.calculateSoberTime(),this.drive_time=this.calculateDriveTime()}},drinksThisHour(){if(0==this.drinks.length)return 0;const e=new Date,t=new Date;t.setHours(t.getHours()-1);let l=0;for(const n of this.drinks)n.time>t&&n.time<=e&&l++;return l},calculateSoberTime(){const e=new Date;if(0==this.total_BAC)return this.formatTime(e);let t=this.total_BAC;while(t>=0)e.setMinutes(e.getMinutes()+1),t-=25e-5;return e},calculateDriveTime(){const e=new Date;if(0==this.total_BAC)return this.formatTime(e);let t=this.total_BAC;while(t>=.08)e.setMinutes(e.getMinutes()+1),t-=25e-5;return e},totalDrinks(){return this.drinks.reduce(((e,t)=>e+t.std),0).toFixed(1)},formatTime(e){const t=e.getHours().toString().padStart(2,"0"),l=e.getMinutes().toString().padStart(2,"0"),n=`${t%12==0?12:t%12}:${l} ${t>12?"PM":"AM"}`;return n},lastDrink(){return this.drinks.length>0?this.formatTime(new Date(Math.max(...this.drinks.map((e=>new Date(e.time)))))):"--:--"},calcAddedBAC(e){const t=0==this.gender?.68:.55,l=453.6*this.weight,n=14*e;return n/(l*t)*100},addDrink(e){e&&(this.drinks.push({std:e,time:(new Date).toISOString(),added_BAC:this.calcAddedBAC(e)}),this.total_BAC+=this.calcAddedBAC(e),this.sober_time=this.calculateSoberTime(),this.drive_time=this.calculateDriveTime(),this.saveData())},updateBAC(){this.total_BAC-25e-5<=0?this.total_BAC=0:this.total_BAC-=25e-5},removeDrink(){let e=this.drinks.pop();if(0==this.drinks.length)return this.total_BAC=0,this.sober_time=new Date,void(this.drive_time=new Date);this.total_BAC-=e.added_BAC,this.sober_time=this.calculateSoberTime(),this.drive_time=this.calculateDriveTime(),this.saveData()},submitForm(){if(this.$refs.settings.validate()){this.showDialog=!1,this.total_BAC=0;for(const e of this.drinks)this.total_BAC+=this.calcAddedBAC(e.std);this.sober_time=this.calculateSoberTime(),this.drive_time=this.calculateDriveTime(),this.saveData()}}},created(){this.updateBAC(),this.intervalId=setInterval(this.updateBAC,6e4),this.loadData()},beforeUnmount(){clearInterval(this.intervalId)},data:()=>({gender:0,weight:175,showDialog:!1,showRefresh:!1,numberRule:[e=>/^\d+(\.\d+)?$/.test(e)||"Must be a number"],total_BAC:0,drinks:[],intervalId:-1,sober_time:new Date,drive_time:new Date,images:{logo:l(656),beer:l(656),tequila:l(656),water:l(656),custom:l(656)}})};const Z=(0,Y.c)(X,[["render",x]]);var ee=Z,te=(l(8985),l(2448)),le=(0,te.W_)({theme:{defaultTheme:"dark"}});async function ne(){const e=await l.e(32).then(l.t.bind(l,296,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ne(),(0,n.W0)(ee).use(le).mount("#app")},3074:function(e,t,l){e.exports=l.p+"img/beer.5375245a.png"},4888:function(e,t,l){e.exports=l.p+"img/custom.8fef8d1d.png"},656:function(e,t,l){e.exports=l.p+"img/logo.e2a8233f.png"},1816:function(e,t,l){e.exports=l.p+"img/tequila.f6314892.png"},8520:function(e,t,l){e.exports=l.p+"img/water.e0ddf623.png"}},t={};function l(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,n,i,a){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],a=e[d][2];for(var o=!0,s=0;s<n.length;s++)(!1&a||r>=a)&&Object.keys(l.O).every((function(e){return l.O[e](n[s])}))?n.splice(s--,1):(o=!1,a<r&&(r=a));if(o){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};l.t=function(n,i){if(1&i&&(n=this(n)),8&i)return n;if("object"===typeof n&&n){if(4&i&&n.__esModule)return n;if(16&i&&"function"===typeof n.then)return n}var a=Object.create(null);l.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var o=2&i&&n;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((function(e){r[e]=function(){return n[e]}}));return r["default"]=function(){return n},l.d(a,r),a}}(),function(){l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,n){return l.f[n](e,t),t}),[]))}}(),function(){l.u=function(e){return"js/webfontloader.8d91ae89.js"}}(),function(){l.miniCssF=function(e){}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bactrack:";l.l=function(n,i,a,r){if(e[n])e[n].push(i);else{var o,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+a){o=c;break}}o||(s=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",t+a),o.src=n),e[n]=[i];var f=function(t,l){o.onerror=o.onload=null,clearTimeout(m);var i=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(l)})),t)return t(l)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),s&&document.head.appendChild(o)}}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/BAC-Track/"}(),function(){var e={524:0};l.f.j=function(t,n){var i=l.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(l,n){i=e[t]=[l,n]}));n.push(i[2]=a);var r=l.p+l.u(t),o=new Error,s=function(n){if(l.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,i[1](o)}};l.l(r,s,"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,r=n[0],o=n[1],s=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)l.o(o,i)&&(l.m[i]=o[i]);if(s)var d=s(l)}for(t&&t(n);u<r.length;u++)a=r[u],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(d)},n=self["webpackChunkbactrack"]=self["webpackChunkbactrack"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=l.O(void 0,[999],(function(){return l(1532)}));n=l.O(n)})();
//# sourceMappingURL=app.e219d5ae.js.map