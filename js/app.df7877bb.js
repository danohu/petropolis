(function(e){function t(t){for(var i,n,a=t[0],c=t[1],l=t[2],u=0,p=[];u<a.length;u++)n=a[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,n=1;n<o.length;n++){var a=o[n];0!==s[a]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=o[0]))}return e}var i={},n={app:0},s={app:0},r=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-70249842":"c9253ba4","chunk-8fcdd0d8":"5426b11c"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={"chunk-70249842":1,"chunk-8fcdd0d8":1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var i="css/"+({}[e]||e)+"."+{"chunk-70249842":"1759e4c3","chunk-8fcdd0d8":"eceb0357"}[e]+".css",s=c.p+i,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var l=r[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===s))return t()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){l=p[a],u=l.getAttribute("data-href");if(u===i||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[e],d.parentNode.removeChild(d),o(r)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){n[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise((function(t,o){i=s[e]=[t,o]}));t.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var o=s[e];if(0!==o){if(o){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",p.name="ChunkLoadError",p.type=i,p.request=n,o[1](p)}s[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(o,i,function(t){return e[t]}.bind(null,i));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var i=o("85ec"),n=o.n(i);n.a},"06ac":function(e,t,o){},2352:function(e,t,o){"use strict";var i=o("06ac"),n=o.n(i);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("b059"),o("619b"),o("6e25"),o("a347");var i=o("2b0e"),n=o("283e"),s=o.n(n),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("main",[o("nav",[o("span",[e._v(" ")]),e._v(" "),o("router-link",{class:{active:e.$route.name&&e.$route.name.match("petropolis")},attrs:{to:"/petropolis/Pipelines"},nativeOn:{click:function(t){e.routeClick("/petropolis/Pipelines")}}},[e._v("EXTINCTION REBELLION")]),e._v(" "),o("span",[e._v(" ")]),e._v(" "),o("div",{attrs:{id:"aside-scroll-to",title:"Skip To Content"},on:{click:e.scrollToAside}},[o("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])])],1),e._v(" "),o("router-view",{attrs:{name:"map",id:"map"}})],1),e._v(" "),o("AppNav"),e._v(" "),o("aside",{class:{"no-flex":this.asideHidden}},[o("div",{attrs:{id:"aside-wraper"}},[o("div",{attrs:{id:"aside-toggle",title:"Toggle Content"},on:{click:e.toggleAside}},[e.asideHidden?o("i",{staticClass:"material-icons"},[e._v("menu")]):o("i",{staticClass:"material-icons"},[e._v("close")])]),e._v(" "),o("p",{class:{hidden:this.asideHidden},attrs:{id:"aside-heading"}},[e._v("act now")])]),e._v(" "),o("div",{ref:"asideContent",class:{hidden:this.asideHidden},attrs:{id:"content"}},[o("router-view")],1)])],1)},a=[],c=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),l=o("2f62"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.asideHidden?e._e():o("div",[e.nav.items?o("div",{attrs:{id:"items"}},e._l(e.nav.items,(function(t){return o("router-link",{key:t.name,staticClass:"btn",attrs:{to:t.href},nativeOn:{click:function(o){e.routeClick(t.href)}}},[e._v(e._s(t.name))])}))):e._e(),e._v(" "),e.navSubItems?o("div",{attrs:{id:"subItems"}},e._l(e.navSubItems,(function(t){return o("router-link",{key:t.name,staticClass:"btn subItem",attrs:{to:t.href},nativeOn:{click:function(o){e.routeClick(t.href)}}},[e._v(e._s(t.name))])}))):e._e()])},p=[];o("b0c0");function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){Object(c["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m={name:"AppNav",data:function(){return{nav:[],navSubItems:[],petropolis:{items:[{name:"Pipelines",href:"/petropolis/pipelines"},{name:"Tar Sands",href:"/petropolis/tarsands"},{name:"Chicago",href:"/petropolis/chicago"}]}}},computed:f({},Object(l["b"])(["asideHidden"])),watch:{$route:function(e,t){this.initNav()}},mounted:function(){this.initNav()},methods:{initNav:function(){/petropolis/.test(this.$route.name)?this.nav=this.petropolis:this.nav=[],/petropolisTarSands/.test(this.$route.name)?this.navSubItems=this.subItems.tarsands:this.navSubItems=[]},routeClick:function(e){e===this.$route.path&&we.$emit("route-click")}}},h=m,v=(o("e4b0"),o("2877")),g=Object(v["a"])(h,u,p,!1,null,"4ed50961",null),y=g.exports;function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){Object(c["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var P={name:"App",components:{AppNav:y},watch:{$route:function(e,t){document.querySelector("aside > #content").scrollTop=0}},computed:w({},Object(l["b"])(["asideHidden"])),methods:{toggleAside:function(){this.$store.dispatch("toggle")},scrollToAside:function(){this.$refs.asideContent.scrollIntoView()},routeClick:function(e){e===this.$route.path&&we.$emit("route-click")}}},O=P,j=(o("034f"),Object(v["a"])(O,r,a,!1,null,null,null)),k=j.exports,_=(o("d3b7"),o("8c4f")),C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"aside-content"},[e._m(0),e._v(" "),o("img",{staticClass:"fullwidth",attrs:{src:"images/OilHead.jpg"}}),o("div",{staticClass:"caption"}),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),o("p",[e._v("The collapse of climate and ecosystems is accelerating. We are nearly out of time. Decades of protests, petitions and donations to environmental groups have done nothing to slow catastrophic change. Food and water shortages, resource wars, economic breakdown, and millions of new climate refugees are on the horizon. Human survival itself is at risk as temperatures continue to rise.")]),e._v(" "),o("p",[e._v("Extinction Rebellion uses nonviolent direct actions and peaceful civil disobedience to disrupt business-as-usual in order to compel governments to act now to save a livable climate.")]),e._v(" "),o("p"),e._v(" "),o("br"),e._v(" "),o("Accordion",{attrs:{open:!1}},[o("h3",{attrs:{slot:"header"},slot:"header"},[e._v("legend")]),e._v(" "),o("div",{staticClass:"flex"},[o("p",[o("strong",[e._v("coming soon")])])])])],1)},S=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"text-align":"center"}},[o("h1",{staticStyle:{color:"#E00607","font-size":"170%"}},[e._v("before it's too late")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("strong")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticStyle:{"font-size":"120%"}},[o("strong",[o("em",[e._v('From the Tars Sands to the Gulf of Mexico, the North American pipeline network pumps a future of melting icecaps, sea-level rise, drought and forest fires. Every refinery is a "bomb train" for the world.')])])])}],x=o("e711"),L=o("d54e"),N={name:"PetropolisPipelines",components:{Accordion:L["a"],AppLightBox:x["a"]},methods:{emit:function(e,t){we.$emit(e,t)}}},E=N,T=(o("bb14"),Object(v["a"])(E,C,S,!1,null,"0297e3e6",null)),$=T.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"map",attrs:{id:"map"}},[o("div",{ref:"vimeoPopup",staticClass:"ol-popup ol-vimeopopup"},[o("div",{ref:"vimeoPopupCloser",staticClass:"ol-popup-closer",on:{click:e.closePopup}}),e._v(" "),o("div",{ref:"vimeoPopupContent",staticClass:"ol-popup-content"})]),e._v(" "),o("div",{ref:"twitterPopup",staticClass:"ol-popup ol-twitterpopup"},[o("div",{ref:"twitterpopupCloser",staticClass:"ol-popup-closer",on:{click:e.closePopup}}),e._v(" "),o("div",{staticClass:"ol-popup-twitter-content"},[o("div",{ref:"loadingTweets",staticClass:"twitter-loading hidden"},[e._v("Loading Tweets...")]),e._v(" "),o("div",{ref:"twitterContent"})])]),e._v(" "),o("div",{ref:"popup",staticClass:"ol-popup"},[o("div",{ref:"popupCloser",staticClass:"ol-popup-closer",on:{click:e.closePopup}}),e._v(" "),o("div",{ref:"popupContent",staticClass:"ol-popup-content"})]),e._v(" "),o("div",{ref:"titletip",staticClass:"titletip"},[o("div",{ref:"titletipContent",staticClass:"titletip-content"})]),e._v(" "),o("div",{ref:"textitletip",staticClass:"textitletip"},[o("div",{ref:"textitletipContent",staticClass:"textitletip-content"})]),e._v(" "),o("div",{ref:"mileagetitletip",staticClass:"mileagetitletip"},[o("div",{ref:"mileagetitletipContent",staticClass:"mileagetitletip-content"})]),e._v(" "),o("div",{ref:"whitetitletip",staticClass:"whitetitletip"},[o("div",{ref:"whitetitletipContent",staticClass:"whitetitletip-content"})]),e._v(" "),o("div",{ref:"salmontip",staticClass:"salmontip"},[o("div",{ref:"salmontipContent",staticClass:"salmontip-content"})]),e._v(" "),o("div",{ref:"tooltip",staticClass:"ol-tooltip"})])},R=[],V=(o("d81d"),o("ac1f"),o("5319"),o("5bc0"),o("0710")),M=o("5eee"),H=o("a2c7"),J=o("3e6b"),G=o("5831"),B=o("a2e1"),D=o("6c77"),F=o("6cbf"),I=o("8682"),z=o("83a6"),q=o("8f3a"),Q=o("9d47"),W=o("256f");function X(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function K(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?X(Object(o),!0).forEach((function(t){Object(c["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):X(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var U,Z,Y={name:"Map",data:function(){return{olmap:void 0,styleCache:{}}},created:function(){we.$on("set-map-view",this.setMapView)},beforeDestroy:function(){we.$off("set-map-view",this.setMapView)},computed:K({},Object(l["b"])(["asideHidden"]),{vimeoPopup:function(){return new V["a"]({element:this.$refs.vimeoPopup,offset:[10,0],positioning:"center-right",autoPan:!0,autoPanAnimation:{duration:250}})},twitterPopup:function(){return new V["a"]({element:this.$refs.twitterPopup,autoPan:!0,autoPanAnimation:{duration:250},positioning:"center-right"})},popup:function(){return new V["a"]({element:this.$refs.popup,autoPan:!0,autoPanMargin:40,autoPanAnimation:{duration:250}})},titletip:function(){return new V["a"]({element:this.$refs.titletip,offset:[10,0],positioning:"center-left"})},textitletip:function(){return new V["a"]({element:this.$refs.textitletip,offset:[10,0],positioning:"center-left"})},whitetitletip:function(){return new V["a"]({element:this.$refs.whitetitletip,offset:[10,0],positioning:"center-left"})},mileagetitletip:function(){return new V["a"]({element:this.$refs.mileagetitletip})},salmontip:function(){return new V["a"]({element:this.$refs.salmontip,offset:[10,0],positioning:"center"})},tooltip:function(){return new V["a"]({element:this.$refs.tooltip,offset:[10,0],positioning:"center-left"})}}),watch:{$route:function(e,t){this.closePopup(),this.initMap()},asideHidden:function(){this.olmap.updateSize(),this.toggleScaleLine()}},methods:{initMap:function(){},initBaseMap:function(){var e=this;this.olmap||(this.olmap=new M["a"]({target:"map",overlays:[this.twitterPopup,this.popup,this.titletip,this.textitletip,this.mileagetitletip,this.whitetitletip,this.salmontip,this.tooltip,this.vimeoPopup],controls:Object(q["a"])({attributionOptions:{collapsible:!0}}).extend([new Q["a"]({units:"us",minWidth:150})])}),this.toggleScaleLine(),this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var i=o.getProperties();i.title&&i.image&&i.text1?(e.$refs.popupContent.innerHTML="<h4>"+i.title+"</h4>",e.$refs.popupContent.innerHTML+=i.image?i.image.replace("cascadia/",""):"",e.$refs.popupContent.innerHTML+=i.text1+"<br>",e.$refs.popupContent.innerHTML+=i.text2?i.text2+"<br>":"",e.$refs.popupContent.innerHTML+=i.text3?i.text3+"<br>":"",e.popup.setPosition(t.coordinate),e.closeTooltip()):i.key?(e.$refs.popupContent.innerHTML=i.key,e.popup.setPosition(t.coordinate)):i.vimeoSrc}else e.closePopup()})),window.addEventListener("keydown",(function(t){27===t.keyCode&&e.closePopup()})),window.addEventListener("resize",(function(t){e.toggleScaleLine()})),this.olmap.on("pointermove",(function(t){var o=e.olmap.getEventPixel(t.originalEvent),i=e.olmap.hasFeatureAtPixel(o);e.$refs.map.style.cursor=i?"pointer":""})))},closePopup:function(){return this.popup.setPosition(void 0),this.$refs.popupCloser.blur(),this.twitterPopup.setPosition(void 0),this.$refs.twitterpopupCloser.blur(),this.vimeoPopup.setPosition(void 0),this.$refs.vimeoPopupCloser.blur(),this.$refs.vimeoPopupContent.innerHTML="",!1},closeTitletip:function(){return this.titletip.setPosition(void 0),!1},closeTextitletip:function(){return this.textitletip.setPosition(void 0),!1},closeMileagetitletip:function(){return this.mileagetitletip.setPosition(void 0),!1},closeWhitetitletip:function(){return this.whitetitletip.setPosition(void 0),!1},closeSalmontip:function(){return this.salmontip.setPosition(void 0),!1},closeTooltip:function(){return this.tooltip.setPosition(void 0),!1},geoJSONPointVectorLayerStyle:function(e){return e.values_&&e.values_["icon"]&&!this.styleCache[e.values_["icon"]]&&(this.styleCache[e.values_["icon"]]=new D["b"]({image:new F["a"]({scale:1,rotateWithView:!1,anchor:[.5,43],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:1,src:e.values_["icon"]||"icons/dam.png"})})),this.styleCache[e.values_["icon"]]},makeGeoJSONPointVectorLayerWithStyle:function(e,t,o,i,n){return new J["a"]({source:new G["a"]({url:e,format:new B["a"]}),minResolution:o,maxResolution:i,style:this.geoJSONPointVectorLayerStyle,label:t})},makeGeoJSONPointVectorLayer:function(e,t,o,i,n,s){return new J["a"]({source:new G["a"]({url:e,format:new B["a"]}),minResolution:i,maxResolution:n,style:new D["b"]({image:new F["a"]({src:t,opacity:void 0===s?1:s})}),label:o})},makeGeoJSONFillVectorLayer:function(e,t,o,i,n,s){return new J["a"]({source:new G["a"]({format:new B["a"],url:e}),minResolution:t,maxResolution:o,style:new D["b"]({stroke:new I["a"]({color:i,width:n}),fill:new z["a"]({color:s})}),fill:s,fillColor:s})},makeGeoJSONLineVectorLayer:function(e,t,o,i,n){return new J["a"]({source:new G["a"]({format:new B["a"],url:e}),minResolution:t,maxResolution:o,style:new D["b"]({stroke:new I["a"]({color:i,width:n})}),strokeColor:i})},toggleScaleLine:function(){this.asideHidden||window.innerWidth<850?document.querySelector(".ol-scale-line").classList.remove("hidden"):document.querySelector(".ol-scale-line").classList.add("hidden")},setMapView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};e.center&&(t["center"]=Object(W["c"])(e["center"])),e.resolution&&(t["resolution"]=e.resolution),e.minResolution?t["minResolution"]=e.minResolution:t["minResolution"]=1,e.maxResolution?t["maxResolution"]=e.maxResolution:t["maxResolution"]=16e3,this.olmap.setView(new H["a"](t))}}},ee=Y,te=Object(v["a"])(ee,A,R,!1,null,null,null),oe=te.exports,ie=o("480c"),ne=o("9c78"),se=o("a226"),re=o("2ef1"),ae=(o("4d63"),o("25f0"),o("d4ec")),ce=o("bee2"),le=(o("fd4b"),function(){function e(t){Object(ae["a"])(this,e),this.url=t,this.root=document.querySelector("body")}return Object(ce["a"])(e,[{key:"open",value:function(){this.render(this.url),this.events()}},{key:"render",value:function(e){var t=this.template('<div class="mediabox-wrap" role="dialog" aria-hidden="false"><div class="mediabox-content" role="document" tabindex="0"><span id="mediabox-esc" class="mediabox-close" aria-label="close" tabindex="1"></span><iframe src="{embed}?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>',{embed:e});this.lastFocusElement=document.activeElement,this.root.insertAdjacentHTML("beforeend",t),document.body.classList.add("stop-scroll")}},{key:"events",value:function(){var e=document.querySelector(".mediabox-wrap"),t=document.querySelector(".mediabox-content");e.addEventListener("click",function(t){(t.target&&"SPAN"===t.target.nodeName&&"mediabox-close"===t.target.className||"DIV"===t.target.nodeName&&"mediabox-wrap"===t.target.className||"mediabox-content"===t.target.className&&"IFRAME"!==t.target.nodeName)&&this.close(e)}.bind(this),!1),document.addEventListener("focus",(function(e){t&&!t.contains(e.target)&&(e.stopPropagation(),t.focus())}),!0),t.addEventListener("keypress",function(t){13===t.keyCode&&this.close(e)}.bind(this),!1)}},{key:"close",value:function(e){if(null===e)return!0;var t=null;t&&clearTimeout(t),e.classList.add("mediabox-hide"),t=setTimeout(function(){var e=document.querySelector(".mediabox-wrap");null!==e&&(document.body.classList.remove("stop-scroll"),this.root.removeChild(e),this.lastFocusElement.focus())}.bind(this),500)}},{key:"template",value:function(e,t){var o;for(o in t)t.hasOwnProperty(o)&&(e=e.replace(new RegExp("{"+o+"}","g"),t[o]));return e}}]),e}()),ue={name:"MapPetropolis",extends:oe,data:function(){return{centerPoints:{pipelines:{center:[-95.2128,42.8],resolution:6e3},tarsands:{center:[-111.439654,56.9275],resolution:180},chicago:{center:[-87.75,41.767832],resolution:150}},radius:250,mousePosition:void 0}},computed:{baseLayers:function(){var e=this,t=new ie["a"]({source:new se["a"]({key:"Asxv26hh6HvBjw5idX-d8QS5vaJH1krMPBfZKjNmLjaQyr0Sc-BrHBoatyjwzc_k",imagerySet:"Aerial"}),minResolution:1,maxResolution:10});return t.on("precompose",(function(t){e.spyglass(t)})),t.on("postcompose",(function(e){e.context.restore()})),[new ie["a"]({source:new re["a"]({url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"}),opacity:1,minResolution:.25}),this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONLineVectorLayer("geojson/Enbridge_Pipe***lines.geojson",1,16e3,"#000000",3.5),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/OilIcon2.png",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/CrudeDerailments.geojson","icons/Explosion.gif",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/Anthroquakes.geojson","icons/Earthquake.gif",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/BreakFreeProtests.geojson","icons/Break.gif",null,40,16e3),t]},petropolisTarSandsLayers:function(){var e=this,t=new ie["a"]({source:new se["a"]({key:"Asxv26hh6HvBjw5idX-d8QS5vaJH1krMPBfZKjNmLjaQyr0Sc-BrHBoatyjwzc_k",imagerySet:"Aerial"}),minResolution:1,maxResolution:10});return t.on("precompose",(function(t){e.spyglass(t)})),t.on("postcompose",(function(e){e.context.restore()})),[new ie["a"]({source:new re["a"]({url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"}),opacity:1,minResolution:.25}),this.makeGeoJSONFillVectorLayer("geojson/TarSandsFootprints2.geojson",.25,4e3,"black",.6,"rgba(244, 164, 96, 0.6)"),this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONLineVectorLayer("geojson/Enbridge_Pipe****lines.geojson",1,16e3,"#000000",3.5),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/refinery-red.gif",null,1,8e3),this.makeGeoJSONPointVectorLayer("geojson/Question.geojson","icons/Question.gif",null,40,4e3),this.makeGeoJSONPointVectorLayer("geojson/ShylePierce.geojson","icons/ShylePierce.png",null,40,400),this.makeGeoJSONPointVectorLayer("geojson/Escape.geojson","icons/Escape.png",null,40,400),this.makeGeoJSONPointVectorLayer("geojson/Petropolis.geojson","icons/Petropolis.png",null,40,400),t]},petropolisChicagoLayers:function(){var e=this,t=new ie["a"]({source:new se["a"]({key:"Asxv26hh6HvBjw5idX-d8QS5vaJH1krMPBfZKjNmLjaQyr0Sc-BrHBoatyjwzc_k",imagerySet:"Aerial"}),minResolution:1,maxResolution:10});return t.on("precompose",(function(t){e.spyglass(t)})),t.on("postcompose",(function(e){e.context.restore()})),[new ie["a"]({source:new re["a"]({url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"}),opacity:1,minResolution:.25}),new ie["a"]({source:new re["a"]({url:"http://environmentalobservatory.net/Petropolis/tiles/{z}/{x}/{y}.png"}),opacity:1,minResolution:.25}),this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONLineVectorLayer("geojson/Enbridge_Pipe****lines.geojson",1,16e3,"#000000",3.5),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/refinery-red.gif",null,1,8e3),this.makeGeoJSONPointVectorLayer("geojson/Chakrabarty***.geojson","icons/Title3.png",null,140,160),t]}},created:function(){we.$on("route-click",this.initMap)},beforeDestroy:function(){we.$off("route-click",this.initMap)},mounted:function(){var e=this;this.initMap(),window.addEventListener("keydown",(function(t){38===t.keyCode?(e.radius=Math.min(e.radius+5,800),e.olmap.render()):40===t.keyCode&&(e.radius=Math.max(e.radius-5,0),e.olmap.render())})),this.olmap.on("pointermove",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var i=o.getProperties();i.key&&(e.$refs.titletipContent.innerHTML=i.key,e.titletip.setPosition(t.coordinate))}else e.closeTitletip(),e.closeTooltip();e.mousePosition=e.olmap.getEventPixel(t.originalEvent),e.olmap.render()}))},methods:{initMap:function(){switch(this.$route.name){case"petropolisPipelines":this.initPetropolisPipelines();break;case"petropolisTarSands":this.initPetropolisTarSands();break;case"petropolisChicago":this.initPetropolisChicago();break;default:this.initPetropolisPipelines()}},initPetropolisPipelines:function(){var e=this;this.initBaseMap(),this.olmap.setLayerGroup(new ne["a"]({layers:this.baseLayers})),this.olmap.setView(new H["a"]({center:Object(W["c"])(this.centerPoints.pipelines.center),resolution:this.centerPoints.pipelines.resolution,minResolution:1,maxResolution:32e3})),this.olmap&&this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var i=o.getProperties();if(i.vimeoSrc){var n=new le(i.vimeoSrc);n.open()}}}))},initPetropolisTarSands:function(){var e=this;this.initBaseMap(),this.olmap.setLayerGroup(new ne["a"]({layers:this.petropolisTarSandsLayers})),this.olmap.setView(new H["a"]({center:Object(W["c"])(this.centerPoints.tarsands.center),resolution:this.centerPoints.tarsands.resolution,minResolution:1,maxResolution:16e3})),this.olmap&&this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var i=o.getProperties();if(i.vimeoSrc2){var n=new le(i.vimeoSrc2);n.open()}}}))},initPetropolisChicago:function(){var e=this;this.initBaseMap(),this.olmap.setLayerGroup(new ne["a"]({layers:this.petropolisChicagoLayers})),this.olmap.setView(new H["a"]({center:Object(W["c"])(this.centerPoints.chicago.center),resolution:this.centerPoints.chicago.resolution,minResolution:1,maxResolution:16e3})),this.olmap&&this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var i=o.getProperties();if(i.vimeoSrc3){var n=new le(i.vimeoSrc2);n.open()}}}))},spyglass:function(e){var t=e.context,o=e.frameState.pixelRatio;t.save(),t.beginPath(),this.mousePosition&&(t.arc(this.mousePosition[0]*o,this.mousePosition[1]*o,this.radius*o,0,2*Math.PI),t.lineWidth=5*o,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}}},pe=ue,de=Object(v["a"])(pe,U,Z,!1,null,null,null),fe=de.exports;i["a"].use(_["a"]);var me=new _["a"]({routes:[{path:"/",redirect:"/petropolis/Pipelines"},{path:"/petropolis/Pipelines",name:"petropolisPipelines",components:{default:$,map:fe}},{path:"/petropolis/tarsands",name:"petropolisTarSands",components:{default:function(){return o.e("chunk-70249842").then(o.bind(null,"861c"))},map:fe}},{path:"/petropolis/chicago",name:"petropolisChicago",components:{default:function(){return o.e("chunk-8fcdd0d8").then(o.bind(null,"5c4d"))},map:fe}}]});i["a"].use(l["a"]);var he={asideHidden:!1},ve={toggle:function(e){e.asideHidden=!e.asideHidden}},ge={toggle:function(e){e.commit("toggle")}},ye={asideHidden:function(e){return e.asideHidden}},be=new l["a"].Store({state:he,getters:ye,actions:ge,mutations:ve});o.d(t,"eventBus",(function(){return we})),i["a"].use(s.a),i["a"].config.productionTip=!1;var we=new i["a"];new i["a"]({router:me,store:be,render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,o){},a10e:function(e,t,o){},a347:function(e,t,o){},b059:function(e,t,o){},bb14:function(e,t,o){"use strict";var i=o("a10e"),n=o.n(i);n.a},d3c3:function(e,t,o){"use strict";var i=o("d602"),n=o.n(i);n.a},d54e:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{ref:"accordion",class:e.accordionClasses},[o("div",{staticClass:"heading",on:{click:e.toggleAccordion}},[e.isOpen?o("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_up")]):o("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")]),e._v(" "),o("span",{staticClass:"headingText"},[e._t("header")],2)]),e._v(" "),o("div",{staticClass:"body"},[o("div",{staticClass:"content"},[e._t("default")],2)])])},n=[],s={name:"Accordion",props:{open:Boolean},data:function(){return{isOpen:this.open}},computed:{accordionClasses:function(){return{"is-closed":!this.isOpen}}},methods:{toggleAccordion:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$refs.accordion.offsetTop>window.innerHeight&&setTimeout((function(){e.$refs.accordion.scrollIntoView()}),500)}}},r=s,a=(o("d3c3"),o("2877")),c=Object(a["a"])(r,i,n,!1,null,"2942699e",null);t["a"]=c.exports},d602:function(e,t,o){},de32:function(e,t,o){},e4b0:function(e,t,o){"use strict";var i=o("de32"),n=o.n(i);n.a},e711:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"link",on:{click:e.open}},[e._t("default")],2),e._v(" "),e.isOpen?o("LightBox",{attrs:{images:e.images,showCaption:!0},on:{onOpened:e.onOpenChange}}):e._e()],1)},n=[],s=o("1c09"),r=o.n(s),a={name:"AppLightBox",components:{LightBox:r.a},props:{images:Array},data:function(){return{isOpen:!1}},methods:{open:function(){this.isOpen=!0},onOpenChange:function(e){this.isOpen=e}}},c=a,l=(o("2352"),o("2877")),u=Object(l["a"])(c,i,n,!1,null,"5cc4adc2",null);t["a"]=u.exports},fd4b:function(e,t,o){}});
//# sourceMappingURL=app.df7877bb.js.map