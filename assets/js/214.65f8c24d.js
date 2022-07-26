(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{591:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb大数据量查询慢问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb大数据量查询慢问题"}},[t._v("#")]),t._v(" mongodb大数据量查询慢问题")]),t._v(" "),a("h2",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),a("p",[t._v("我单个collection 有100多万数据，单单一个count查询就要1分多钟，其他分页查数据也是慢成狗了。甚至有时候服务器直接挂掉")]),t._v(" "),a("p",[t._v("但是这个数据量在robo 3t 很快，但在我的代码和idea 的datagrid 中就特别慢。")]),t._v(" "),a("p",[t._v("经过一系列的排查大致可以从几个方面入手")]),t._v(" "),a("h2",{attrs:{id:"_2-解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决"}},[t._v("#")]),t._v(" 2. 解决")]),t._v(" "),a("h3",{attrs:{id:"_2-1-降低mongodb-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-降低mongodb-版本"}},[t._v("#")]),t._v(" 2.1 降低mongodb 版本")]),t._v(" "),a("p",[t._v("原本spring-boot版本为2.5.x 关联的mongo版本为4.x")]),t._v(" "),a("blockquote",[a("p",[t._v("4.x版本改动比较大，查询的优化可能没做好导致")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220126164949424.png",alt:"image-20220126164949424"}})]),t._v(" "),a("p",[t._v("降低spring-boot版本为2.2.x 关联的mongo版本为3.x")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220126164746396.png",alt:"image-20220126164746396"}})]),t._v(" "),a("p",[t._v("速度快了好多")]),t._v(" "),a("h3",{attrs:{id:"_2-2-mongorepository-替换为mongotemplate-cursor-形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mongorepository-替换为mongotemplate-cursor-形式"}},[t._v("#")]),t._v(" 2.2 MongoRepository 替换为MongoTemplate.cursor 形式")]),t._v(" "),a("p",[t._v("使用MongoTemplate.cursor形式会快很多")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FindIterable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" findIterable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mongoTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCollection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        findIterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("limit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPageSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("skip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pageable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOffset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoCursor")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Document")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cursor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" findIterable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cursor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);