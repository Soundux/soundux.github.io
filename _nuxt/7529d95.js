(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{445:function(n,e,t){var content=t(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(16).default)("3ab84706",content,!0,{sourceMap:!1})},452:function(n,e,t){"use strict";t(445)},453:function(n,e,t){var r=t(15)(!1);r.push([n.i,".markdown-render,.markdown-render>*,.markdown-render>*>*{max-width:100%}",""]),n.exports=r},464:function(n,e,t){"use strict";t.r(e),t.d(e,"Options",(function(){return o.Options}));var r=t(1),o=t(444),d=t.n(o),c=r.a.extend({name:"VueMarkdown",props:{source:{type:String,required:!0},options:{type:Object,required:!1,default:{}}},data:function(){return{md:null}},computed:{content:function(){var n,e=this.source;return null===(n=this.md)||void 0===n?void 0:n.render(e)}},created:function(){this.md=new d.a(this.options)}}),l=(t(452),t(96)),component=Object(l.a)(c,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("div",{staticClass:"markdown-render",domProps:{innerHTML:n._s(n.content)}})}),[],!1,null,null,null);e.default=component.exports}}]);