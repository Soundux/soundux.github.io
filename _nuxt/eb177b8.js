(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{457:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("21f7ded2",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n(457)},466:function(t,e,n){var r=n(15)(!1);r.push([t.i,"*[data-v-26f4a0d7]{margin:0;padding:0;box-sizing:border-box}.image-compare[data-v-26f4a0d7]{display:flex;align-items:center;justify-content:center;cursor:col-resize}.image-container[data-v-26f4a0d7]{position:absolute}.image-container.smooth[data-v-26f4a0d7]{transition:width .5s}.slider.smooth[data-v-26f4a0d7]{transition:left .5s}img[data-v-26f4a0d7]{-o-object-fit:cover;object-fit:cover;z-index:-100}.slider[data-v-26f4a0d7],img[data-v-26f4a0d7]{pointer-events:none}.slider[data-v-26f4a0d7]{position:absolute;top:0;left:50%;transform:translate(-50%);width:.25rem;background:grey;height:100%}",""]),t.exports=r},478:function(t,e,n){"use strict";n.r(e);n(48);var r=n(1).a.extend({name:"NeoImageCompare",props:{leftImgSrc:{type:String,required:!0},rightImgSrc:{type:String,required:!0},aspectRatio:{type:Object,required:!0}},data:function(){return{width:0,height:0,posX:0,dragActive:!1}},computed:{containerStyle:function(){return{position:"relative",width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},imageContainerBeforeStyle:function(){return{width:"".concat(this.posX,"px"),height:"".concat(this.height,"px"),overflow:"hidden"}},imageContainerAfterStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},imageStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},sliderStyle:function(){return{left:"".concat(this.posX,"px")}}},mounted:function(){var t=this,e=this.$refs.container;e.addEventListener("mouseenter",this.mouseEnter),e.addEventListener("mousemove",this.drag),e.addEventListener("mouseleave",this.mouseLeave),e.addEventListener("touchstart",this.touchStart),e.addEventListener("touchmove",this.touch),e.addEventListener("touchend",this.touchEnd),window.addEventListener("resize",this.onResize),window.setTimeout((function(){var e,n,r,o;t.width=(null===(o=null===(r=null===(n=null===(e=t.$el)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.parentElement)||void 0===o?void 0:o.clientWidth)||0,t.height=t.width/t.aspectRatio.width*t.aspectRatio.height,t.posX=t.width/2}),0)},beforeDestroy:function(){var t=this.$refs.container;t.removeEventListener("mouseenter",this.mouseEnter),t.removeEventListener("mousemove",this.drag),t.removeEventListener("mouseleave",this.mouseLeave),t.removeEventListener("touchstart",this.touchStart),t.removeEventListener("touchmove",this.touch),t.removeEventListener("touchend",this.touchEnd),window.removeEventListener("resize",this.onResize)},methods:{mouseEnter:function(){this.dragActive=!0},drag:function(t){this.posX=t.offsetX},mouseLeave:function(){this.posX=this.width/2,this.dragActive=!1},touchStart:function(){this.dragActive=!0},touchEnd:function(){this.posX=this.width/2,this.dragActive=!1},touch:function(t){var e,n;if(this.dragActive){t.preventDefault();var r=(null===(e=this.$el.querySelector(".slider"))||void 0===e?void 0:e.clientWidth)||0,o=(null===(n=this.$el.getBoundingClientRect())||void 0===n?void 0:n.left)||0;this.posX=t.touches[0].clientX-o+r/2}},onResize:function(){var t,e,n,r;this.width=(null===(r=null===(n=null===(e=null===(t=this.$el)||void 0===t?void 0:t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.clientWidth)||0,this.height=this.width/this.aspectRatio.width*this.aspectRatio.height,this.posX=this.width/2}}}),o=(n(465),n(96)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-compare"},[n("div",{ref:"container",style:t.containerStyle,attrs:{draggable:"true"}},[n("div",{staticClass:"image-container",style:t.imageContainerAfterStyle,attrs:{draggable:"true"}},[n("img",{style:t.imageStyle,attrs:{src:t.rightImgSrc,alt:"After"}})]),t._v(" "),n("div",{class:{smooth:!t.dragActive,"image-container":!0},style:t.imageContainerBeforeStyle,attrs:{draggable:"true"}},[n("img",{style:t.imageStyle,attrs:{src:t.leftImgSrc,alt:"Before"}})]),t._v(" "),n("div",{class:{smooth:!t.dragActive,slider:!0},style:t.sliderStyle,attrs:{draggable:"true"}})])])}),[],!1,null,"26f4a0d7",null);e.default=component.exports},558:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"Features"}),o=n(96),l=n(136),c=n.n(l),d=n(209),v=n(113),h=n(441),m=n(210),f=n(212),_=n(214),w=n(127),y=n(73),x=n(442),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",{staticClass:"mt-3"},[n("v-card-title",{staticClass:"text-h5"},[n("v-icon",{attrs:{left:""}},[t._v("mdi-star-circle-outline")]),t._v("\n        "+t._s(t.$t("features.title"))+"\n      ")],1),t._v(" "),n("v-card-text",[n("p",[t._v(t._s(t.$t("features.clickToShowAdditionalInformation")))]),t._v(" "),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-group",{attrs:{value:!0},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-theme-light-dark")]),t._v("\n                  "+t._s(t.$t("features.darkAndLightTheme.title"))+"\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("NeoImageCompare",{attrs:{"left-img-src":"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/home-light.png","right-img-src":"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/home-dark.png","aspect-ratio":{width:1360,height:795}}}),t._v(" "),n("v-col",{staticClass:"text-center"},[n("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("\n                    "+t._s(t.$t("features.darkAndLightTheme.description"))+" 👀\n                  ")])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-folder")]),t._v("\n                  "+t._s(t.$t("features.folderTabs.title"))+"\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"/screenshots/folder-tabs-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Folder tabs",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      "+t._s(t.$t("features.folderTabs.description"))+"\n                    ")])])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-play-pause")]),t._v("\n                  "+t._s(t.$t("features.mediaControls.title"))+"\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/media-controls-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Media controls",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      "+t._s(t.$t("features.mediaControls.description"))+"\n                    ")])])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-headphones")]),t._v("\n                  "+t._s(t.$t("features.audioFormats.title"))+"\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("i18n",{attrs:{path:"features.audioFormats.description"}},[n("a",{attrs:{slot:"miniaudio",href:"https://miniaud.io/",target:"_blank",rel:"noopener"},slot:"miniaudio"},[t._v("miniaudio")])]),t._v("\n                  🎛\n                ")],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-magnify")]),t._v("\n                  "+t._s(t.$t("features.soundSearch.title"))+"\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/search-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Search",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      "+t._s(t.$t("features.soundSearch.description"))+" 🔎\n                      "),n("br"),t._v(" "),n("i18n",{attrs:{path:"features.soundSearch.description2"}},[n("code",{attrs:{slot:"ctrl"},slot:"ctrl"},[t._v(t._s(t.$t("input.ctrl")))]),t._v(" "),n("code",{attrs:{slot:"f"},slot:"f"},[t._v("F")])])],1)])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-gamepad-square-outline")]),t._v("\n                  "+t._s(t.$t("features.emulatedLaunchpad.title"))+"\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/launchpad-view-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"Launchpad view",width:"100%"}}),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      "+t._s(t.$t("features.emulatedLaunchpad.description"))+" ⌨️ "),n("br"),t._v("\n                      "+t._s(t.$t("features.emulatedLaunchpad.description2"))+" "),n("br"),t._v("\n                      "+t._s(t.$t("features.emulatedLaunchpad.description3"))+"\n                    ")])])],1)],1)],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-keyboard")]),t._v("\n                  "+t._s(t.$t("features.globalHotkeys.title"))+"\n                ")],1)],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[t._v("\n                  ⌨ "+t._s(t.$t("features.globalHotkeys.description"))+"\n                ")])],1)],1)],1),t._v(" "),t.$store.getters.selectedOS&&"Linux"===t.$store.getters.selectedOS.name?n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[n("v-icon",{attrs:{left:""}},[t._v("mdi-power-plug")]),t._v("\n                  "+t._s(t.$t("features.passThrough.title"))+"\n                ")],1)],1)]},proxy:!0}],null,!1,3681019425)},[t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",{staticClass:"text-wrap"},[n("v-col",{staticClass:"text-center"},[n("figure",{staticStyle:{height:"225px",overflow:"hidden"}},[n("img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/pass-through-drawer-"+(t.$vuetify.theme.dark?"dark":"light")+".png",alt:"App pass through"}})]),t._v(" "),n("br"),t._v(" "),n("span",[t._v("\n                      🔌 "+t._s(t.$t("features.passThrough.description"))+"\n                      "),n("br"),t._v(" "),n("i18n",{attrs:{path:"features.passThrough.description2"}},[n("code",{attrs:{slot:"ctrl"},slot:"ctrl"},[t._v(t._s(t.$t("input.ctrl")))]),t._v(" "),n("code",{attrs:{slot:"g"},slot:"g"},[t._v("G")])])],1)])],1)],1)],1)],1):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{NeoImageCompare:n(478).default}),c()(component,{VCard:d.a,VCardText:v.c,VCardTitle:v.d,VCol:h.a,VIcon:m.a,VList:f.a,VListGroup:_.a,VListItem:w.a,VListItemContent:y.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VRow:x.a})}}]);