(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{547:function(t,e,r){"use strict";r.r(e);var a=r(26),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"notlike优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notlike优化"}},[t._v("#")]),t._v(" notlike优化")]),t._v(" "),r("h2",{attrs:{id:"_1-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),r("p",[t._v("我们有些查询条件需要使用not like ，过滤掉不包含某些文字的数据。但dot like 会导致全表扫描。有没有什么办法既能满足我们需求又保证效率呢？")]),t._v(" "),r("h2",{attrs:{id:"_2-解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决"}},[t._v("#")]),t._v(" 2. 解决")]),t._v(" "),r("p",[t._v("instr(title,’手册’)>0 相当于like")]),t._v(" "),r("p",[t._v("instr(title,’手册’)=0 相当于not like")]),t._v(" "),r("p",[t._v("对于LIKE语句，我们可以使用instr函数来进行SQL调优")]),t._v(" "),r("h2",{attrs:{id:"参考文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/weixin_30715523/article/details/101579345",target:"_blank",rel:"noopener noreferrer"}},[t._v("like not like 优化"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);