(function(e){function t(t){for(var n,i,a=t[0],l=t[1],c=t[2],u=0,p=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var a=o[i];0!==s[a]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},i={app:0},s={app:0},r=[];function a(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-3cd09560":"fb517ee0","chunk-45b36670":"7b852c00","chunk-8cc1055c":"297d1e5e","chunk-cfff46e6":"fb60245a"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={"chunk-3cd09560":1,"chunk-45b36670":1,"chunk-8cc1055c":1,"chunk-cfff46e6":1};i[e]?t.push(i[e]):0!==i[e]&&o[e]&&t.push(i[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-3cd09560":"2e385194","chunk-45b36670":"02d7c20d","chunk-8cc1055c":"74f3843e","chunk-cfff46e6":"5e9291b1"}[e]+".css",s=l.p+n,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var c=r[a],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return t()}var p=document.getElementsByTagName("style");for(a=0;a<p.length;a++){c=p[a],u=c.getAttribute("data-href");if(u===n||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[e],d.parentNode.removeChild(d),o(r)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){i[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,o){n=s[e]=[t,o]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=a(e);var p=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var o=s[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,o[1](p)}s[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"06ac":function(e,t,o){},2352:function(e,t,o){"use strict";var n=o("06ac"),i=o.n(n);i.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("b059"),o("619b"),o("6e25"),o("a347");var n=o("2b0e"),i=o("283e"),s=o.n(i),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("main",[o("nav",[o("span",[e._v(" ")]),e._v(" "),o("router-link",{class:{active:e.$route.name&&e.$route.name.match("petropolis")},attrs:{to:"/petropolis/Pipelines"},nativeOn:{click:function(t){e.routeClick("/petropolis/Pipelines")}}},[e._v("EXTINCTION REBELLION")]),e._v(" "),o("span",[e._v(" ")]),e._v(" "),o("div",{attrs:{id:"aside-scroll-to",title:"Skip To Content"},on:{click:e.scrollToAside}},[o("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])])],1),e._v(" "),o("router-view",{attrs:{name:"map",id:"map"}})],1),e._v(" "),o("AppNav"),e._v(" "),o("aside",{class:{"no-flex":this.asideHidden}},[o("div",{attrs:{id:"aside-wraper"}},[o("div",{attrs:{id:"aside-toggle",title:"Toggle Content"},on:{click:e.toggleAside}},[e.asideHidden?o("i",{staticClass:"material-icons"},[e._v("menu")]):o("i",{staticClass:"material-icons"},[e._v("close")])]),e._v(" "),o("p",{class:{hidden:this.asideHidden},attrs:{id:"aside-heading"}},[e._v("act now")])]),e._v(" "),o("div",{ref:"asideContent",class:{hidden:this.asideHidden},attrs:{id:"content"}},[o("router-view")],1)])],1)},a=[],l=(o("a4d3"),o("4de4"),o("4160"),o("e439"),o("dbb4"),o("b64b"),o("159b"),o("ade3")),c=o("2f62"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.asideHidden?e._e():o("div",[e.nav.items?o("div",{attrs:{id:"items"}},e._l(e.nav.items,(function(t){return o("router-link",{key:t.name,staticClass:"btn",attrs:{to:t.href},nativeOn:{click:function(o){e.routeClick(t.href)}}},[e._v(e._s(t.name))])}))):e._e(),e._v(" "),e.navSubItems?o("div",{attrs:{id:"subItems"}},e._l(e.navSubItems,(function(t){return o("router-link",{key:t.name,staticClass:"btn subItem",attrs:{to:t.href},nativeOn:{click:function(o){e.routeClick(t.href)}}},[e._v(e._s(t.name))])}))):e._e()])},p=[];o("b0c0");function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){Object(l["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var h={name:"AppNav",data:function(){return{nav:[],navSubItems:[],petropolis:{items:[{name:"Pipelines",href:"/petropolis/pipelines"},{name:"Tar Sands",href:"/petropolis/tarsands"},{name:"Chicago",href:"/petropolis/chicago"}]},subItems:{tarsands:[{name:"Bakken Shale Oil",href:"/petropolis/tarsands/bakken"},{name:"Gulf of Mexico",href:"/petropolis/tarsands/gulf"}]}}},computed:f({},Object(c["b"])(["asideHidden"])),watch:{$route:function(e,t){this.initNav()}},mounted:function(){this.initNav()},methods:{initNav:function(){/petropolis/.test(this.$route.name)?this.nav=this.petropolis:this.nav=[],/petropolisTarSands/.test(this.$route.name)?this.navSubItems=this.subItems.tarsands:this.navSubItems=[]},routeClick:function(e){e===this.$route.path&&Oe.$emit("route-click")}}},m=h,g=(o("adbf"),o("2877")),v=Object(g["a"])(m,u,p,!1,null,"2c5354f6",null),y=v.exports;function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function P(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){Object(l["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var k={name:"App",components:{AppNav:y},watch:{$route:function(e,t){document.querySelector("aside > #content").scrollTop=0}},computed:P({},Object(c["b"])(["asideHidden"])),methods:{toggleAside:function(){this.$store.dispatch("toggle")},scrollToAside:function(){this.$refs.asideContent.scrollIntoView()},routeClick:function(e){e===this.$route.path&&Oe.$emit("route-click")}}},O=k,j=(o("034f"),Object(g["a"])(O,r,a,!1,null,null,null)),w=j.exports,S=(o("d3b7"),o("8c4f")),L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"aside-content"},[o("div",[e._m(0),e._v(" "),o("img",{staticClass:"fullwidth",attrs:{src:"images/OilHead.jpg"}}),o("div",{staticClass:"caption"}),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),o("p",[e._v("The collapse of climate and ecosystems is accelerating. We are nearly out of time. Decades of protests, petitions and donations to environmental groups have done nothing to slow catastrophic change. Food and water shortages, resource wars, economic breakdown, and millions of new climate refugees are on the horizon. Human survival itself is at risk as temperatures continue to rise.")]),e._v(" "),o("p",[e._v("Extinction Rebellion uses nonviolent direct actions and peaceful civil disobedience to disrupt business-as-usual in order to compel governments to act now to save a livable climate.")]),e._v(" "),o("p"),e._v(" "),o("br"),e._v(" "),o("Accordion",{attrs:{open:!1}},[o("h3",{attrs:{slot:"header"},slot:"header"},[e._v("legend")]),e._v(" "),o("div",{staticClass:"flex"},[o("img",{attrs:{src:"images/Legend.png"}}),o("br"),e._v(" "),o("p",[e._v("* These appear when you zoom in."),o("br"),o("br"),e._v("Click any element to find out more."),o("br"),o("br"),e._v("Spyglass appears at full zoom."),o("br"),e._v('Press "shift" + ↑ to enlarge it.'),o("br"),e._v('Press "shift" + ↓ to shrink it.')])])])],1)])},_=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{"text-align":"center"}},[o("h1",{staticStyle:{color:"#E00607","font-size":"160%"}},[e._v("before it's too late")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("strong")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticStyle:{"font-size":"120%"}},[o("strong",[o("em",[e._v('From the Tars Sands to the Gulf of Mexico, the pipeline network pumps out a future of melting icecaps, sea-level rise, drought and forest fires. For the oilmen, every city is "Petropolis."')])])])}],C=o("e711"),N=o("d54e"),x={name:"PetropolisPipelines",components:{Accordion:N["a"],AppLightBox:C["a"]},methods:{emit:function(e,t){Oe.$emit(e,t)}}},G=x,V=(o("a73f"),Object(g["a"])(G,L,_,!1,null,"985d2eb2",null)),J=V.exports,T=(o("99af"),o("2909")),R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"map",attrs:{id:"map"}},[o("div",{ref:"vimeoPopup",staticClass:"ol-popup ol-vimeopopup"},[o("div",{ref:"vimeoPopupCloser",staticClass:"ol-popup-closer",on:{click:e.closePopup}}),e._v(" "),o("div",{ref:"vimeoPopupContent",staticClass:"ol-popup-content"})]),e._v(" "),o("div",{ref:"twitterPopup",staticClass:"ol-popup ol-twitterpopup"},[o("div",{ref:"twitterpopupCloser",staticClass:"ol-popup-closer",on:{click:e.closePopup}}),e._v(" "),o("div",{staticClass:"ol-popup-twitter-content"},[o("div",{ref:"loadingTweets",staticClass:"twitter-loading hidden"},[e._v("Loading Tweets...")]),e._v(" "),o("div",{ref:"twitterContent"})])]),e._v(" "),o("div",{ref:"popup",staticClass:"ol-popup"},[o("div",{ref:"popupCloser",staticClass:"ol-popup-closer",on:{click:e.closePopup}}),e._v(" "),o("div",{ref:"popupContent",staticClass:"ol-popup-content"})]),e._v(" "),o("div",{ref:"titletip",staticClass:"titletip"},[o("div",{ref:"titletipContent",staticClass:"titletip-content"})]),e._v(" "),o("div",{ref:"textitletip",staticClass:"textitletip"},[o("div",{ref:"textitletipContent",staticClass:"textitletip-content"})]),e._v(" "),o("div",{ref:"mileagetitletip",staticClass:"mileagetitletip"},[o("div",{ref:"mileagetitletipContent",staticClass:"mileagetitletip-content"})]),e._v(" "),o("div",{ref:"whitetitletip",staticClass:"whitetitletip"},[o("div",{ref:"whitetitletipContent",staticClass:"whitetitletip-content"})]),e._v(" "),o("div",{ref:"salmontip",staticClass:"salmontip"},[o("div",{ref:"salmontipContent",staticClass:"salmontip-content"})]),e._v(" "),o("div",{ref:"tooltip",staticClass:"ol-tooltip"})])},E=[],A=(o("d81d"),o("ac1f"),o("5319"),o("5bc0"),o("0710")),$=o("5eee"),M=o("a2c7"),H=o("3e6b"),B=o("5831"),F=o("a2e1"),I=o("6c77"),D=o("6cbf"),W=o("ce2c"),q=o("8682"),z=o("83a6"),Q=o("8f3a"),X=o("9d47"),U=o("256f");function K(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function Y(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?K(Object(o),!0).forEach((function(t){Object(l["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):K(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var Z,ee,te={name:"Map",data:function(){return{olmap:void 0,styleCache:{}}},created:function(){Oe.$on("set-map-view",this.setMapView)},beforeDestroy:function(){Oe.$off("set-map-view",this.setMapView)},computed:Y({},Object(c["b"])(["asideHidden"]),{vimeoPopup:function(){return new A["a"]({element:this.$refs.vimeoPopup,offset:[10,0],positioning:"center-right",autoPan:!0,autoPanAnimation:{duration:250}})},twitterPopup:function(){return new A["a"]({element:this.$refs.twitterPopup,autoPan:!0,autoPanAnimation:{duration:250},positioning:"center-right"})},popup:function(){return new A["a"]({element:this.$refs.popup,autoPan:!0,autoPanMargin:40,autoPanAnimation:{duration:250}})},titletip:function(){return new A["a"]({element:this.$refs.titletip,offset:[10,0],positioning:"center-left"})},textitletip:function(){return new A["a"]({element:this.$refs.textitletip,offset:[10,0],positioning:"center-left"})},whitetitletip:function(){return new A["a"]({element:this.$refs.whitetitletip,offset:[10,0],positioning:"center-left"})},mileagetitletip:function(){return new A["a"]({element:this.$refs.mileagetitletip})},salmontip:function(){return new A["a"]({element:this.$refs.salmontip,offset:[10,0],positioning:"center"})},tooltip:function(){return new A["a"]({element:this.$refs.tooltip,offset:[10,0],positioning:"center-left"})}}),watch:{$route:function(e,t){this.closePopup(),this.initMap()},asideHidden:function(){this.olmap.updateSize(),this.toggleScaleLine()}},methods:{initMap:function(){},initBaseMap:function(){var e=this;this.olmap||(this.olmap=new $["a"]({target:"map",overlays:[this.twitterPopup,this.popup,this.titletip,this.textitletip,this.mileagetitletip,this.whitetitletip,this.salmontip,this.tooltip,this.vimeoPopup],controls:Object(Q["a"])({attributionOptions:{collapsible:!0}}).extend([new X["a"]({units:"us",minWidth:150})])}),this.toggleScaleLine(),this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var n=o.getProperties();n.title&&n.image&&n.text1?(e.$refs.popupContent.innerHTML="<h4>"+n.title+"</h4>",e.$refs.popupContent.innerHTML+=n.image?n.image.replace("cascadia/",""):"",e.$refs.popupContent.innerHTML+=n.text1+"<br>",e.$refs.popupContent.innerHTML+=n.text2?n.text2+"<br>":"",e.$refs.popupContent.innerHTML+=n.text3?n.text3+"<br>":"",e.popup.setPosition(t.coordinate),e.closeTooltip()):n.key?(e.$refs.popupContent.innerHTML=n.key,e.popup.setPosition(t.coordinate)):n.images?(e.$refs.popupContent.innerHTML=n.images,e.popup.setPosition(t.coordinate)):n.vimeoSrc}else e.closePopup()})),window.addEventListener("keydown",(function(t){27===t.keyCode&&e.closePopup()})),window.addEventListener("resize",(function(t){e.toggleScaleLine()})),this.olmap.on("pointermove",(function(t){var o=e.olmap.getEventPixel(t.originalEvent),n=e.olmap.hasFeatureAtPixel(o);e.$refs.map.style.cursor=n?"pointer":""})))},closePopup:function(){return this.popup.setPosition(void 0),this.$refs.popupCloser.blur(),this.twitterPopup.setPosition(void 0),this.$refs.twitterpopupCloser.blur(),this.vimeoPopup.setPosition(void 0),this.$refs.vimeoPopupCloser.blur(),this.$refs.vimeoPopupContent.innerHTML="",!1},closeTitletip:function(){return this.titletip.setPosition(void 0),!1},closeTextitletip:function(){return this.textitletip.setPosition(void 0),!1},closeMileagetitletip:function(){return this.mileagetitletip.setPosition(void 0),!1},closeWhitetitletip:function(){return this.whitetitletip.setPosition(void 0),!1},closeSalmontip:function(){return this.salmontip.setPosition(void 0),!1},closeTooltip:function(){return this.tooltip.setPosition(void 0),!1},geoJSONPointVectorLayerStyle:function(e){return e.values_&&e.values_["icon"]&&!this.styleCache[e.values_["icon"]]&&(this.styleCache[e.values_["icon"]]=new I["b"]({image:new D["a"]({scale:1,rotateWithView:!1,anchor:[.5,43],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:1,src:e.values_["icon"]||"icons/XLspill.gif"})})),this.styleCache[e.values_["icon"]]},makeGeoJSONPointVectorLayerWithStyle:function(e,t,o,n,i){return new H["a"]({source:new B["a"]({url:e,format:new F["a"]}),minResolution:o,maxResolution:n,style:this.geoJSONPointVectorLayerStyle,label:t})},geoJSONPointVectorLayerCircleStyle:function(e){return e.values_&&e.values_["rad"]&&!this.styleCache[e.values_["rad"]]&&(this.styleCache[e.values_["rad"]]=new I["b"]({image:new W["a"]({stroke:new q["a"]({color:"rgba(134, 40, 26, 0.4)",width:1}),fill:new z["a"]({color:"rgba(134, 40, 26, 0.2)"}),radius:Math.sqrt(e.values_["rad"])})})),this.styleCache[e.values_["rad"]]},makeGeoJSONPointVectorLayerWithCircleStyle:function(e,t,o,n,i,s,r){return new H["a"]({source:new B["a"]({url:e,format:new F["a"]}),minResolution:o,maxResolution:n,style:this.geoJSONPointVectorLayerCircleStyle,label:t})},makeGeoJSONPointVectorLayer:function(e,t,o,n,i,s){return new H["a"]({source:new B["a"]({url:e,format:new F["a"]}),minResolution:n,maxResolution:i,style:new I["b"]({image:new D["a"]({src:t,opacity:void 0===s?1:s})}),label:o})},makeGeoJSONFillVectorLayer:function(e,t,o,n,i,s){return new H["a"]({source:new B["a"]({format:new F["a"],url:e}),minResolution:t,maxResolution:o,style:new I["b"]({stroke:new q["a"]({color:n,width:i}),fill:new z["a"]({color:s})}),fill:s,fillColor:s})},geoJSONLineVectorLayerStyle:function(e){return e.values_&&e.values_["color"]&&!this.styleCache[e.values_["color"]]&&(this.styleCache[e.values_["color"]]=new I["b"]({stroke:new q["a"]({color:e.values_["color"],width:3.5,lineDash:[4]})})),this.styleCache[e.values_["color"]]},makeGeoJSONLineVectorLayerWithStyle:function(e,t,o,n){return new H["a"]({source:new B["a"]({format:new F["a"],url:e}),minResolution:t,maxResolution:o,style:this.geoJSONLineVectorLayerStyle})},makeGeoJSONLineVectorLayer:function(e,t,o,n,i){return new H["a"]({source:new B["a"]({format:new F["a"],url:e}),minResolution:t,maxResolution:o,style:new I["b"]({stroke:new q["a"]({color:n,width:i})}),strokeColor:n})},toggleScaleLine:function(){this.asideHidden||window.innerWidth<850?document.querySelector(".ol-scale-line").classList.remove("hidden"):document.querySelector(".ol-scale-line").classList.add("hidden")},setMapView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};e.center&&(t["center"]=Object(U["c"])(e["center"])),e.resolution&&(t["resolution"]=e.resolution),e.minResolution?t["minResolution"]=e.minResolution:t["minResolution"]=1,e.maxResolution?t["maxResolution"]=e.maxResolution:t["maxResolution"]=16e3,this.olmap.setView(new M["a"](t))}}},oe=te,ne=Object(g["a"])(oe,R,E,!1,null,null,null),ie=ne.exports,se=o("480c"),re=o("9c78"),ae=o("a226"),le=o("2ef1"),ce=(o("4d63"),o("25f0"),o("d4ec")),ue=o("bee2"),pe=(o("fd4b"),function(){function e(t){Object(ce["a"])(this,e),this.url=t,this.root=document.querySelector("body")}return Object(ue["a"])(e,[{key:"open",value:function(){this.render(this.url),this.events()}},{key:"render",value:function(e){var t=this.template('<div class="mediabox-wrap" role="dialog" aria-hidden="false"><div class="mediabox-content" role="document" tabindex="0"><span id="mediabox-esc" class="mediabox-close" aria-label="close" tabindex="1"></span><iframe src="{embed}?autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>',{embed:e});this.lastFocusElement=document.activeElement,this.root.insertAdjacentHTML("beforeend",t),document.body.classList.add("stop-scroll")}},{key:"events",value:function(){var e=document.querySelector(".mediabox-wrap"),t=document.querySelector(".mediabox-content");e.addEventListener("click",function(t){(t.target&&"SPAN"===t.target.nodeName&&"mediabox-close"===t.target.className||"DIV"===t.target.nodeName&&"mediabox-wrap"===t.target.className||"mediabox-content"===t.target.className&&"IFRAME"!==t.target.nodeName)&&this.close(e)}.bind(this),!1),document.addEventListener("focus",(function(e){t&&!t.contains(e.target)&&(e.stopPropagation(),t.focus())}),!0),t.addEventListener("keypress",function(t){13===t.keyCode&&this.close(e)}.bind(this),!1)}},{key:"close",value:function(e){if(null===e)return!0;var t=null;t&&clearTimeout(t),e.classList.add("mediabox-hide"),t=setTimeout(function(){var e=document.querySelector(".mediabox-wrap");null!==e&&(document.body.classList.remove("stop-scroll"),this.root.removeChild(e),this.lastFocusElement.focus())}.bind(this),500)}},{key:"template",value:function(e,t){var o;for(o in t)t.hasOwnProperty(o)&&(e=e.replace(new RegExp("{"+o+"}","g"),t[o]));return e}}]),e}()),de={name:"MapPetropolis",extends:ie,data:function(){return{centerPoints:{pipelines:{center:[-95.9,41],resolution:7e3},tarsands:{center:[-111.439654,56.9275],resolution:180},bakken:{center:[-102.9,47.603],resolution:1600},gulf:{center:[-91.231,28.962],resolution:800},chicago:{center:[-87.75,41.767832],resolution:150}},radius:600,mousePosition:void 0}},computed:{baseLayers:function(){var e=this,t=new se["a"]({source:new ae["a"]({key:"Asxv26hh6HvBjw5idX-d8QS5vaJH1krMPBfZKjNmLjaQyr0Sc-BrHBoatyjwzc_k",imagerySet:"Aerial"}),minResolution:.25,maxResolution:4,zIndex:10});return t.on("precompose",(function(t){e.spyglass(t)})),t.on("postcompose",(function(e){e.context.restore()})),[new se["a"]({source:new le["a"]({url:"https://stamen-tiles-{a-d}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png"}),opacity:1,minResolution:.25}),t]},petropolisPipelineLayers:function(){return[].concat(Object(T["a"])(this.baseLayers),[this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONPointVectorLayerWithCircleStyle("geojson/Spills_20yrs.geojson",null,4,4e3,"rgba(134, 40, 26, 0.4)",1,"rgba(134, 40, 26, 0.3)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONLineVectorLayerWithStyle("geojson/ContestedPipelines.geojson",1,16e3,3.5),this.makeGeoJSONLineVectorLayer("geojson/GlobalPipelines-sm.geojson",16e3,13e5,"#c21313",1.5),this.makeGeoJSONLineVectorLayer("geojson/GlobalPipelines.geojson",200,16e3,"#c21313",3.5),this.makeGeoJSONPointVectorLayer("geojson/CoalPlants.geojson","icons/Coal.png",null,1,2e3),this.makeGeoJSONPointVectorLayer("geojson/OilHubs.geojson","icons/OilRR.png",null,1,2e3),this.makeGeoJSONPointVectorLayer("geojson/Refineries-outsideNA.geojson","icons/OilIcon2.png",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/Refineries-outsideNA-sm.geojson","icons/refinery-red-sm.gif",null,16e3,13e5),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/OilIcon2.png",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries-sm.geojson","icons/refinery-red-sm.gif",null,16e3,13e5),this.makeGeoJSONPointVectorLayer("geojson/CrudeDerailments.geojson","icons/Explosion.gif",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/Anthroquakes.geojson","icons/Anthroquake.png",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/StandingRock.geojson","icons/StandingRock.png",null,1,8e3),this.makeGeoJSONPointVectorLayer("geojson/BreakFreeProtests.geojson","icons/Break.gif",null,40,16e3),this.makeGeoJSONPointVectorLayer("geojson/Gasland.geojson","icons/Gasland2.gif",null,4,8e3)])},petropolisTarSandsLayers:function(){return[].concat(Object(T["a"])(this.baseLayers),[this.makeGeoJSONFillVectorLayer("geojson/TarSandsFootprints2.geojson",.25,4e3,"black",.6,"rgba(244, 164, 96, 0.6)"),this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONLineVectorLayer("geojson/Enbridge_Pipe****lines.geojson",1,16e3,"#000000",3.5),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/refinery-red.gif",null,1,8e3),this.makeGeoJSONPointVectorLayer("geojson/Question.geojson","icons/Question.gif",null,40,4e3),this.makeGeoJSONPointVectorLayer("geojson/ShylePierce.geojson","icons/ShylePierce.png",null,40,400),this.makeGeoJSONPointVectorLayer("geojson/Escape.geojson","icons/Escape.png",null,40,400),this.makeGeoJSONPointVectorLayer("geojson/Petropolis.geojson","icons/Petropolis.png",null,40,400)])},petropolisBakkenLayers:function(){return[].concat(Object(T["a"])(this.baseLayers),[this.makeGeoJSONFillVectorLayer("geojson/NAshaleplays.geojson",4,4e3,"rgba(134,82,63,0.2)",.2,"rgba(134,82,63,0.2)"),this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONLineVectorLayerWithStyle("geojson/ContestedPipelines.geojson",1,16e3,3.5),this.makeGeoJSONPointVectorLayer("geojson/OilHubs.geojson","icons/OilRR.png",null,1,2e3),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/OilIcon2.png",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/Emissions.geojson","icons/flare.png",null,2,4e3),this.makeGeoJSONPointVectorLayer("geojson/CrudeDerailments.geojson","icons/Explosion.gif",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/StandingRock.geojson","icons/StandingRock.png",null,1,8e3),this.makeGeoJSONPointVectorLayer("geojson/BombTrainOverlay2.geojson","icons/1267-lg.gif",null,1e3,4e3)])},petropolisGulfLayers:function(){return[].concat(Object(T["a"])(this.baseLayers),[this.makeGeoJSONLineVectorLayer("geojson/GulfPipelinesActive.geojson",1,16e3,"#c21313",1),this.makeGeoJSONPointVectorLayer("geojson/OperatingPlatforms.geojson","icons/Rig.gif",null,1,16e3),this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONLineVectorLayerWithStyle("geojson/ContestedPipelines.geojson",1,16e3,3.5),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/OilIcon2.png",null,1,16e3),this.makeGeoJSONPointVectorLayer("geojson/LNGterminals.geojson","icons/LNG.png",null,4,16e3),this.makeGeoJSONPointVectorLayer("geojson/Horizon.geojson","icons/leak2.png",null,600,1200)])},petropolisChicagoLayers:function(){return[].concat(Object(T["a"])(this.baseLayers),[new se["a"]({source:new le["a"]({url:"http://environmentalobservatory.net/Petropolis/tiles/{z}/{x}/{y}.png"}),opacity:1,minResolution:.25,updateWhileAnimating:!0}),this.makeGeoJSONFillVectorLayer("geojson/Crude_Terminals.geojson",.25,40,"rgba(134, 40, 26, 0.7)",3,"rgba(134, 40, 26, 0.1)"),this.makeGeoJSONLineVectorLayer("geojson/NA-RR.geojson",16,8e3,"dimgray",1),this.makeGeoJSONLineVectorLayer("geojson/Crude_Pipelines1.geojson",1,16e3,"#c21313",3.5),this.makeGeoJSONPointVectorLayer("geojson/Title.geojson","icons/Title3.png",null,140,180),this.makeGeoJSONPointVectorLayer("geojson/NA_Refineries.geojson","icons/refinery-red.gif",null,1,8e3),this.makeGeoJSONPointVectorLayer("geojson/BombTrainOverlay.geojson","icons/1267-lg.gif",null,100,4e3)])}},created:function(){Oe.$on("route-click",this.initMap)},beforeDestroy:function(){Oe.$off("route-click",this.initMap)},mounted:function(){var e=this;this.initMap(),window.addEventListener("keydown",(function(t){38===t.keyCode?(e.radius=Math.min(e.radius+5,800),e.olmap.render()):40===t.keyCode&&(e.radius=Math.max(e.radius-5,0),e.olmap.render())})),this.olmap.on("pointermove",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var n=o.getProperties();n.key&&(e.$refs.titletipContent.innerHTML=n.key,e.titletip.setPosition(t.coordinate))}else e.closeTitletip(),e.closeTooltip();e.mousePosition=e.olmap.getEventPixel(t.originalEvent),e.olmap.render()}))},methods:{initMap:function(){switch(this.$route.name){case"petropolisPipelines":this.initPetropolisPipelines();break;case"petropolisTarSands":this.initPetropolisTarSands();break;case"petropolisTarSandsBakken":this.initPetropolisTarSandsBakken();break;case"petropolisTarSandsGulf":this.initPetropolisTarSandsGulf();break;case"petropolisChicago":this.initPetropolisChicago();break;default:this.initPetropolisPipelines()}},initPetropolisPipelines:function(){var e=this;this.initBaseMap(),this.olmap.setLayerGroup(new re["a"]({layers:this.petropolisPipelineLayers})),this.olmap.setView(new M["a"]({center:Object(U["c"])(this.centerPoints.pipelines.center),resolution:this.centerPoints.pipelines.resolution,minResolution:.25,maxResolution:32e3})),this.olmap&&this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var n=o.getProperties();if(n.vimeoSrc){var i=new pe(n.vimeoSrc);i.open()}}}))},initPetropolisTarSands:function(){var e=this;this.initBaseMap(),this.olmap.setLayerGroup(new re["a"]({layers:this.petropolisTarSandsLayers})),this.olmap.setView(new M["a"]({center:Object(U["c"])(this.centerPoints.tarsands.center),resolution:this.centerPoints.tarsands.resolution,minResolution:.25,maxResolution:16e3})),this.olmap&&this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var n=o.getProperties();if(n.vimeoSrc2){var i=new pe(n.vimeoSrc2);i.open()}}}))},initPetropolisTarSandsBakken:function(){this.initBaseMap(),this.olmap.setLayerGroup(new re["a"]({layers:this.petropolisBakkenLayers})),this.olmap.setView(new M["a"]({center:Object(U["c"])(this.centerPoints.bakken.center),resolution:this.centerPoints.bakken.resolution,minResolution:.25,maxResolution:16e3}))},initPetropolisTarSandsGulf:function(){this.initBaseMap(),this.olmap.setLayerGroup(new re["a"]({layers:this.petropolisGulfLayers})),this.olmap.setView(new M["a"]({center:Object(U["c"])(this.centerPoints.gulf.center),resolution:this.centerPoints.gulf.resolution,minResolution:.25,maxResolution:16e3}))},initPetropolisChicago:function(){var e=this;this.initBaseMap(),this.olmap.setLayerGroup(new re["a"]({layers:this.petropolisChicagoLayers})),this.olmap.setView(new M["a"]({center:Object(U["c"])(this.centerPoints.chicago.center),resolution:this.centerPoints.chicago.resolution,minResolution:.5,maxResolution:16e3})),this.olmap&&this.olmap.on("singleclick",(function(t){var o=e.olmap.forEachFeatureAtPixel(t.pixel,(function(e){return e}));if(o){var n=o.getProperties();if(n.vimeoSrc3){var i=new pe(n.vimeoSrc3);i.open()}}}))},spyglass:function(e){var t=e.context,o=e.frameState.pixelRatio;t.save(),t.beginPath(),this.mousePosition&&(t.arc(this.mousePosition[0]*o,this.mousePosition[1]*o,this.radius*o,0,2*Math.PI),t.lineWidth=5*o,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}}},fe=de,he=Object(g["a"])(fe,Z,ee,!1,null,null,null),me=he.exports;n["a"].use(S["a"]);var ge=new S["a"]({routes:[{path:"/",redirect:"/petropolis/Pipelines"},{path:"/petropolis/Pipelines",name:"petropolisPipelines",components:{default:J,map:me}},{path:"/petropolis/tarsands",name:"petropolisTarSands",components:{default:function(){return o.e("chunk-cfff46e6").then(o.bind(null,"861c"))},map:me}},{path:"/petropolis/tarsands/bakken",name:"petropolisTarSandsBakken",components:{default:function(){return o.e("chunk-45b36670").then(o.bind(null,"d0da"))},map:me}},{path:"/petropolis/tarsands/gulf",name:"petropolisTarSandsGulf",components:{default:function(){return o.e("chunk-3cd09560").then(o.bind(null,"4e5c"))},map:me}},{path:"/petropolis/chicago",name:"petropolisChicago",components:{default:function(){return o.e("chunk-8cc1055c").then(o.bind(null,"5c4d"))},map:me}}]});n["a"].use(c["a"]);var ve={asideHidden:!1},ye={toggle:function(e){e.asideHidden=!e.asideHidden}},be={toggle:function(e){e.commit("toggle")}},Pe={asideHidden:function(e){return e.asideHidden}},ke=new c["a"].Store({state:ve,getters:Pe,actions:be,mutations:ye});o.d(t,"eventBus",(function(){return Oe})),n["a"].use(s.a),n["a"].config.productionTip=!1;var Oe=new n["a"];new n["a"]({router:ge,store:ke,render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,o){},a347:function(e,t,o){},a73f:function(e,t,o){"use strict";var n=o("b0f0"),i=o.n(n);i.a},aa5a:function(e,t,o){},adbf:function(e,t,o){"use strict";var n=o("aa5a"),i=o.n(n);i.a},b059:function(e,t,o){},b0f0:function(e,t,o){},d3c3:function(e,t,o){"use strict";var n=o("d602"),i=o.n(n);i.a},d54e:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{ref:"accordion",class:e.accordionClasses},[o("div",{staticClass:"heading",on:{click:e.toggleAccordion}},[e.isOpen?o("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_up")]):o("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")]),e._v(" "),o("span",{staticClass:"headingText"},[e._t("header")],2)]),e._v(" "),o("div",{staticClass:"body"},[o("div",{staticClass:"content"},[e._t("default")],2)])])},i=[],s={name:"Accordion",props:{open:Boolean},data:function(){return{isOpen:this.open}},computed:{accordionClasses:function(){return{"is-closed":!this.isOpen}}},methods:{toggleAccordion:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$refs.accordion.offsetTop>window.innerHeight&&setTimeout((function(){e.$refs.accordion.scrollIntoView()}),500)}}},r=s,a=(o("d3c3"),o("2877")),l=Object(a["a"])(r,n,i,!1,null,"2942699e",null);t["a"]=l.exports},d602:function(e,t,o){},e711:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"link",on:{click:e.open}},[e._t("default")],2),e._v(" "),e.isOpen?o("LightBox",{attrs:{images:e.images,showCaption:!0},on:{onOpened:e.onOpenChange}}):e._e()],1)},i=[],s=o("1c09"),r=o.n(s),a={name:"AppLightBox",components:{LightBox:r.a},props:{images:Array},data:function(){return{isOpen:!1}},methods:{open:function(){this.isOpen=!0},onOpenChange:function(e){this.isOpen=e}}},l=a,c=(o("2352"),o("2877")),u=Object(c["a"])(l,n,i,!1,null,"5cc4adc2",null);t["a"]=u.exports},fd4b:function(e,t,o){}});
//# sourceMappingURL=app.18cd413c.js.map