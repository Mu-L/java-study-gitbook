(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{637:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-子查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-子查询"}},[t._v("#")]),t._v(" MySQL-子查询")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 子查询 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("------------------")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 子查询需用括号包裹。\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- from型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("后要求是一个表，必须给子查询结果取个别名。\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 简化每个查询内的条件。\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("型需将结果生成一个临时表格，可用以原表的锁定的释放。\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 子查询返回一个表，表型子查询。\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" subfrom "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- where型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 子查询返回一个值，标量子查询。\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 不需要给子查询取别名。\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("子查询内的表，不能直接用以更新。\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" money "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("money"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 列子查询")]),t._v("\n        如果子查询结果返回的是一列。\n        使用 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" 或 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" 完成查询\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" 和 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" 条件\n            如果子查询返回数据，则返回"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("或"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("。常用于判断条件。\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" column1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exists")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 行子查询")]),t._v("\n        查询条件是一个行。\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gender "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        行构造符："),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 或 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ROW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("col1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" col2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        行构造符通常用于与对能返回两个或两个以上列的子查询进行比较。\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 特殊运算符")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    相当于 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    相当于 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v("。"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("any")]),t._v(" 是 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("some")]),t._v(" 的别名\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   不等同于 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v("，不等于其中某一个。\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("some")]),t._v(" 可以配合其他运算符一起使用。\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://javaguide.cn/database/mysql/a-thousand-lines-of-mysql-study-notes/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("一千行 MySQL 学习笔记"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);