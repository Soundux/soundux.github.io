(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{455:function(t,e,n){"use strict";n(8),n(7),n(11),n(12);var r=n(2),c=(n(22),n(10),n(30),n(67),n(206),n(21),n(38),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(46),n(29),n(9),n(68),n(280),n(1)),o=n(48),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),O=v.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(y),offset:Object.keys(O),order:Object.keys(j)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var m=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},O),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=m.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var r=n[t],c=w(e,t,r);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),c)}})},456:function(t,e,n){"use strict";n(8),n(7),n(11),n(12);var r=n(2),c=(n(29),n(35),n(24),n(10),n(30),n(67),n(206),n(21),n(38),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(46),n(9),n(280),n(1)),o=n(48),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=["start","end","center"];function O(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var j=function(t){return[].concat(y,["baseline","stretch"]).includes(t)},h=O("align",(function(){return{type:String,default:null,validator:j}})),w=function(t){return[].concat(y,["space-between","space-around"]).includes(t)},m=O("justify",(function(){return{type:String,default:null,validator:w}})),S=function(t){return[].concat(y,["space-between","space-around","stretch"]).includes(t)},C=O("alignContent",(function(){return{type:String,default:null,validator:S}})),P={align:Object.keys(h),justify:Object.keys(m),alignContent:Object.keys(C)},k={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var r=k[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var D=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},h),{},{justify:{type:String,default:null,validator:w}},m),{},{alignContent:{type:String,default:null,validator:S}},C),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=D.get(l);return d||function(){var t,e;for(e in d=[],P)P[e].forEach((function(t){var r=n[t],c=x(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),D.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},560:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"Screenshots",data:function(){return{screenshots:["playing","grid-view","multiple-playing","pass-through","search","settings"]}}}),c=n(96),o=n(136),l=n.n(o),f=n(193),d=n(113),v=n(455),y=n(194),O=n(164),j=n(456),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"10"}},[n("v-card",{staticClass:"mt-3"},[n("v-card-title",{staticClass:"text-h5"},[n("v-icon",{attrs:{left:""}},[t._v("mdi-image")]),t._v("\n        Screenshots\n      ")],1),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"text-subtitle-1",attrs:{justify:"center"}},[t._v("\n          Here you can see screenshots of the current version\n        ")]),t._v(" "),n("v-row",{staticClass:"my-5",attrs:{justify:"center"}},t._l(t.screenshots,(function(e){return n("v-col",{key:e,attrs:{cols:"auto"}},[n("v-img",{attrs:{src:"https://raw.githubusercontent.com/Soundux/screenshots/screenshots/"+e+(t.$vuetify.theme.dark?"-dark":"-light")+".png",width:"500",contain:""}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VCardText:d.c,VCardTitle:d.d,VCol:v.a,VIcon:y.a,VImg:O.a,VRow:j.a})}}]);