(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12dea456"],{"0db1":function(t,e,s){"use strict";var a=s("b0b5"),n=s.n(a);n.a},"1ba3":function(t,e,s){"use strict";var a=s("6221"),n=s.n(a);n.a},"22de":function(t,e,s){"use strict";var a=s("3c65"),n=s.n(a);n.a},"2c36":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAGklEQVQ4y2NgGAVEg/9EAMo0jHp61NOjAAgAUWrXKeQhPE4AAAAASUVORK5CYII="},"3c65":function(t,e,s){},6221:function(t,e,s){},b0b5:function(t,e,s){},ca70:function(t,e,s){t.exports=s.p+"img/user.e63b92fb.jpeg"},cd56:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("Header"),s("el-container",{staticClass:"main-body"},[s("Aside"),s("router-view")],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-header",[a("el-menu",{attrs:{mode:"horizontal","background-color":"#4284f4","text-color":"#fff"}},[a("div",{staticClass:"menu"},[a("img",{attrs:{src:s("2c36"),alt:"切换主菜单"},on:{click:t.toggleAsideStatus}}),a("span",[t._v("全部文件")])]),a("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[a("div",{staticClass:"avatar-wrapper"},[a("img",{staticClass:"user-avatar",attrs:{src:s("ca70")}})]),a("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{staticClass:"inlineBlock",attrs:{to:"/"}},[a("el-dropdown-item",[t._v("\n            首页\n          ")])],1)],1)],1)],1)],1)},o=[],c={data:function(){return{activeIndex:"1"}},methods:{toggleAsideStatus:function(){this.$store.commit("toggleAside")}}},r=c,l=(s("0db1"),s("17cc")),u=Object(l["a"])(r,i,o,!1,null,"673fff40",null),d=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aside",style:{display:t.asideStatus}},[s("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":"1","background-color":"#fff","text-color":"#b5b4b4","active-text-color":"#000"}},[s("el-menu-item",{attrs:{index:"1"},on:{click:function(e){return t.linkTo("/file")}}},[s("i",{staticClass:"el-icon-document"}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("全部文件")])]),s("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.linkTo("/white")}}},[s("i",{staticClass:"el-icon-delete"}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v("回收站")])])],1)],1)},A=[],p={computed:{asideStatus:function(){return this.$store.state.asideStatus}},methods:{linkTo:function(t){this.$router.push({path:t})}}},m=p,v=(s("1ba3"),Object(l["a"])(m,f,A,!1,null,"afe8c2be",null)),b=v.exports,g={name:"home",components:{Header:d,Aside:b}},h=g,w=(s("22de"),Object(l["a"])(h,a,n,!1,null,null,null));e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-12dea456.d764ca7d.js.map