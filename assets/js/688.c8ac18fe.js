(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{1064:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"分布式理论-base"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式理论-base"}},[t._v("#")]),t._v(" 分布式理论-BASE")]),t._v(" "),s("blockquote",[s("p",[t._v("BASE是“Basically Available, Soft state, Eventually consistent(基本可用、软状态、最终一致性)”的首字母缩写。其中的软状态和最终一致性这两种技巧擅于对付存在分区的场合，并因此提高了可用性")])]),t._v(" "),s("h2",{attrs:{id:"_1-什么是base"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是base"}},[t._v("#")]),t._v(" 1. 什么是BASE")]),t._v(" "),s("blockquote",[s("p",[t._v("eBay 的架构师 Dan Pritchett 源于对大规模分布式系统的实践总结，在 ACM 上发表文章提出 BASE 理论，BASE 理论是对 CAP 理论的延伸，"),s("strong",[t._v("核心思想是即使无法做到强一致性（Strong Consistency，CAP 的一致性就是强一致性），但应用可以采用适合的方式达到最终一致性（Eventual Consitency）。")])])]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("Basically Available")]),t._v("（基本可用）分布式系统在出现不可预知故障的时候，允许损失部分可用性")]),t._v(" "),s("li",[s("strong",[t._v("Soft state")]),t._v("（软状态）软状态也称为弱状态，和硬状态相对，是指允许系统中的数据存在中间状态，并认为该中间状态的存在不会影响系统的整体可用性，即允许系统在不同节点的数据副本之间进行数据同步的过程存在延时。")]),t._v(" "),s("li",[s("strong",[t._v("Eventually consistent")]),t._v("（最终一致性）最终一致性强调的是系统中所有的数据副本，在经过一段时间的同步后，最终能够达到一个一致的状态。因此，最终一致性的本质是需要系统保证最终数据能够达到一致，而不需要实时保证系统数据的强一致性")])]),t._v(" "),s("h2",{attrs:{id:"_2-cap-与-base-关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-cap-与-base-关系"}},[t._v("#")]),t._v(" 2. CAP 与 BASE 关系")]),t._v(" "),s("p",[t._v("BASE是对CAP中一致性和可用性权衡的结果，其来源于对大规模互联网系统分布式实践的结论，是基于CAP定理逐步演化而来的，其核心思想是即使无法做到强一致性（Strong consistency），更具体地说，是对 CAP 中 AP 方案的一个补充。其基本思路就是：通过业务，牺牲强一致性而获得可用性，并允许数据在一段时间内是不一致的，但是最终达到一致性状态。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220617214817618.png",alt:"image-20220617214817618"}}),t._v(" "),s("h2",{attrs:{id:"_3-cap-与-acid-关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-cap-与-acid-关系"}},[t._v("#")]),t._v(" 3. CAP 与 ACID 关系")]),t._v(" "),s("p",[t._v("ACID 是传统数据库常用的设计理念，追求强一致性模型。BASE 支持的是大型分布式系统，提出通过牺牲强一致性获得高可用性。")]),t._v(" "),s("p",[t._v("ACID 和 BASE 代表了两种截然相反的设计哲学，在分布式系统设计的场景中，系统组件对一致性要求是不同的，因此 ACID 和 BASE 又会结合使用。")])])}),[],!1,null,null,null);a.default=n.exports}}]);