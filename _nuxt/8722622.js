(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{450:function(t,e,n){"use strict";n(8),n(7),n(11),n(12);var r=n(2),o=(n(22),n(10),n(30),n(67),n(206),n(21),n(38),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(46),n(29),n(9),n(68),n(277),n(1)),c=n(48),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(y)};function _(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var v=S.get(l);return v||function(){var t,e;for(e in v=[],w)w[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),o)}})},451:function(t,e,n){"use strict";n(8),n(7),n(11),n(12);var r=n(2),o=(n(29),n(35),n(24),n(10),n(30),n(67),n(206),n(21),n(38),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(46),n(9),n(277),n(1)),c=n(48),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],f=["start","end","center"];function m(t,e){return h.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var y=function(t){return[].concat(f,["baseline","stretch"]).includes(t)},w=m("align",(function(){return{type:String,default:null,validator:y}})),_=function(t){return[].concat(f,["space-between","space-around"]).includes(t)},S=m("justify",(function(){return{type:String,default:null,validator:_}})),O=function(t){return[].concat(f,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:O}})),x={align:Object.keys(w),justify:Object.keys(S),alignContent:Object.keys(j)},k={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},w),{},{justify:{type:String,default:null,validator:_}},S),{},{alignContent:{type:String,default:null,validator:O}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var v=E.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,v)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},452:function(t,e,n){var content=n(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("21f7ded2",content,!0,{sourceMap:!1})},459:function(t,e,n){"use strict";n(452)},460:function(t,e,n){var r=n(15)(!1);r.push([t.i,"*[data-v-26f4a0d7]{margin:0;padding:0;box-sizing:border-box}.image-compare[data-v-26f4a0d7]{display:flex;align-items:center;justify-content:center;cursor:col-resize}.image-container[data-v-26f4a0d7]{position:absolute}.image-container.smooth[data-v-26f4a0d7]{transition:width .5s}.slider.smooth[data-v-26f4a0d7]{transition:left .5s}img[data-v-26f4a0d7]{-o-object-fit:cover;object-fit:cover;z-index:-100}.slider[data-v-26f4a0d7],img[data-v-26f4a0d7]{pointer-events:none}.slider[data-v-26f4a0d7]{position:absolute;top:0;left:50%;transform:translate(-50%);width:.25rem;background:grey;height:100%}",""]),t.exports=r},474:function(t,e,n){"use strict";n.r(e);n(47);var r=n(1).a.extend({name:"NeoImageCompare",props:{leftImgSrc:{type:String,required:!0},rightImgSrc:{type:String,required:!0},aspectRatio:{type:Object,required:!0}},data:function(){return{width:0,height:0,posX:0,dragActive:!1}},computed:{containerStyle:function(){return{position:"relative",width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},imageContainerBeforeStyle:function(){return{width:"".concat(this.posX,"px"),height:"".concat(this.height,"px"),overflow:"hidden"}},imageContainerAfterStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},imageStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},sliderStyle:function(){return{left:"".concat(this.posX,"px")}}},mounted:function(){var t=this,e=this.$refs.container;e.addEventListener("mouseenter",this.mouseEnter),e.addEventListener("mousemove",this.drag),e.addEventListener("mouseleave",this.mouseLeave),e.addEventListener("touchstart",this.touchStart),e.addEventListener("touchmove",this.touch),e.addEventListener("touchend",this.touchEnd),window.addEventListener("resize",this.onResize),window.setTimeout((function(){var e,n,r,o;t.width=(null===(o=null===(r=null===(n=null===(e=t.$el)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.clientWidth)||0,t.height=t.width/t.aspectRatio.width*t.aspectRatio.height,t.posX=t.width/2}),0)},beforeDestroy:function(){var t=this.$refs.container;t.removeEventListener("mouseenter",this.mouseEnter),t.removeEventListener("mousemove",this.drag),t.removeEventListener("mouseleave",this.mouseLeave),t.removeEventListener("touchstart",this.touchStart),t.removeEventListener("touchmove",this.touch),t.removeEventListener("touchend",this.touchEnd),window.removeEventListener("resize",this.onResize)},methods:{mouseEnter:function(){this.dragActive=!0},drag:function(t){this.posX=t.offsetX},mouseLeave:function(){this.posX=this.width/2,this.dragActive=!1},touchStart:function(){this.dragActive=!0},touchEnd:function(){this.posX=this.width/2,this.dragActive=!1},touch:function(t){var e,n;if(this.dragActive){t.preventDefault();var r=(null===(e=this.$el.querySelector(".slider"))||void 0===e?void 0:e.clientWidth)||0,o=(null===(n=this.$el.getBoundingClientRect())||void 0===n?void 0:n.left)||0;this.posX=t.touches[0].clientX-o+r/2}},onResize:function(){var t,e,n,r;this.width=(null===(r=null===(n=null===(e=null===(t=this.$el)||void 0===t?void 0:t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.clientWidth)||0,this.height=this.width/this.aspectRatio.width*this.aspectRatio.height,this.posX=this.width/2}}}),o=(n(459),n(96)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-compare"},[n("div",{ref:"container",style:t.containerStyle,attrs:{draggable:"true"}},[n("div",{staticClass:"image-container",style:t.imageContainerAfterStyle,attrs:{draggable:"true"}},[n("img",{style:t.imageStyle,attrs:{src:t.rightImgSrc,alt:"After"}})]),t._v(" "),n("div",{class:{smooth:!t.dragActive,"image-container":!0},style:t.imageContainerBeforeStyle,attrs:{draggable:"true"}},[n("img",{style:t.imageStyle,attrs:{src:t.leftImgSrc,alt:"Before"}})]),t._v(" "),n("div",{class:{smooth:!t.dragActive,slider:!0},style:t.sliderStyle,attrs:{draggable:"true"}})])])}),[],!1,null,"26f4a0d7",null);e.default=component.exports},547:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"Features"}),o=n(96),c=n(136),l=n.n(c),d=n(193),v=n(113),h=n(450),f=n(194),m=n(196),y=n(198),w=n(126),_=n(73),S=n(451),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",{staticClass:"mt-3"},[n("v-card-title",{staticClass:"text-h5"},[n("v-icon",{attrs:{left:""}},[t._v("mdi-star-circle-outline")]),t._v("\n        Features\n      ")],1),t._v(" "),n("v-card-text",[n("p",[t._v("Click on the different features to reveal additional information about them")]),t._v(" "),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-group",{attrs:{value:!0},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-theme-light-dark")]),t._v("\n                  Dark and light theme\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("NeoImageCompare",{attrs:{"left-img-src":"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/home-light.png","right-img-src":"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/home-dark.png","aspect-ratio":{width:1360,height:795}}}),t._v(" "),n("v-col",{staticClass:"text-center"},[n("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("Pick your poison 👀")])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-folder")]),t._v("\n                  Folder tabs\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"/screenshots/folder-tabs-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Folder tabs",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      You don't have to add single sounds. Just put them in a folder 📂 and add it as a\n                      tab. It will automatically populate with all the supported audio formats 🎧\n                    ")])])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-play-pause")]),t._v("\n                  Media controls\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/media-controls-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Media controls",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      We have individual media controls for each playing sound. You can play/pause ⏯,\n                      seek 🔼, repeat 🔂 or stop ⏹ them.\n                    ")])])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-headphones")]),t._v("\n                  Supports a variety of audio formats\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("\n                  As we make use of\n                  "),n("a",{attrs:{href:"https://miniaud.io/",target:"_blank",rel:"noopener"}},[t._v("miniaudio")]),t._v("\n                  we support common audio formats like mp3, wav, flac 🎛\n                ")])],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-magnify")]),t._v("\n                  Sound search\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/search-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Search",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      A global search for all tabs 🔎 "),n("br"),t._v("\n                      Can also be opened with "),n("code",[t._v("CTRL")]),t._v(" + "),n("code",[t._v("F")])])])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-gamepad-square-outline")]),t._v("\n                  Emulated Launchpad mode\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/launchpad-view-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Launchpad view",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      An emulated launchpad on your keyboard ⌨️ "),n("br"),t._v("\n                      Press the corresponding key seen in the top right to play a sound "),n("br"),t._v("\n                      Navigate pages with your arrow keys\n                    ")])])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-keyboard")]),t._v("\n                  Global hotkeys\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("\n                  ⌨ You can set hotkeys for each sound and to stop all sounds. There is also an option\n                  to only trigger hotkeys from the currently selected tab\n                ")])],1)],1)],1),t._v(" "),t.$store.getters.selectedOS&&"Linux"===t.$store.getters.selectedOS.name?n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-power-plug")]),t._v("\n                  Application pass-through\n                ")],1)],1)]},proxy:!0}],null,!1,2557001261)},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("figure",{staticStyle:{height:"225px",overflow:"hidden"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/pass-through-drawer-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"App pass through"}})]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      🔌 Application pass through allows you to redirect any application's sound to\n                      another. You can use it as a workaround for Discord's share audio feature"),n("br"),t._v("\n                      Can also be opened with "),n("code",[t._v("CTRL")]),t._v(" + "),n("code",[t._v("G")])])])],1)],1)],1)],1):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{NeoImageCompare:n(474).default}),l()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VCol:h.a,VIcon:f.a,VList:m.a,VListGroup:y.a,VListItem:w.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRow:S.a})}}]);