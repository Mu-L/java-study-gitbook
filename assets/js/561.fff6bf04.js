(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{939:function(t,_,a){"use strict";a.r(_);var r=a(26),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"商城设计要点-八-历史订单-归档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商城设计要点-八-历史订单-归档"}},[t._v("#")]),t._v(" 商城设计要点(八)-历史订单，归档")]),t._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),a("h3",{attrs:{id:"_1-1-冷热数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-冷热数据"}},[t._v("#")]),t._v(" 1.1 冷热数据")]),t._v(" "),a("p",[t._v("根据"),a("strong",[t._v("二八定律")]),t._v("，系统绝大部分的性能开销花在20%的业务。数据也不例外，从数据的使用频率来看，经常被业务访问的数据称为热点数据；反之，称之为冷数据。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-订单数据划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-订单数据划分"}},[t._v("#")]),t._v(" 1.2 订单数据划分")]),t._v(" "),a("p",[t._v("在了解的数据的冷、热特性后，便可以指导我们做一些有针对性的性能优化。这里面有业务层面的优化，也有技术层面的优化。比如：电商网站，一般只能查询3个月内的订单，如果你想看看3个月前的订单，需要访问历史订单页面。")]),t._v(" "),a("h2",{attrs:{id:"_2-实现思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现思路"}},[t._v("#")]),t._v(" 2. 实现思路")]),t._v(" "),a("h3",{attrs:{id:"_2-1-冷热数据区分的标准是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-冷热数据区分的标准是什么"}},[t._v("#")]),t._v(" 2.1 冷热数据区分的标准是什么？")]),t._v(" "),a("p",[t._v("冷热数据区分的标准是什么？要结合业务思考，可能要找产品同学一块讨论才能做决策，切记不要拍脑袋。以电商订单为例：")]),t._v(" "),a("ul",[a("li",[t._v("方案一：以“下单时间”为标准，将3 个月前的订单数据当作冷数据，3 个月内的当作热数据。")]),t._v(" "),a("li",[t._v("方案二：根据“订单状态”字段来区分，已完结的订单当作冷数据，未完结的订单当作热数据。")]),t._v(" "),a("li",[t._v("方案三：组合方式，把下单时间 > 3 个月且状态为“已完结”的订单标识为冷数据，其他的当作热数据。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2-如何触发冷热数据的分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-如何触发冷热数据的分离"}},[t._v("#")]),t._v(" 2.2 如何触发冷热数据的分离")]),t._v(" "),a("ul",[a("li",[t._v("方案一：直接修改业务代码，每次业务请求触发冷热数据判断，根据结果路由到对应的冷数据表或热数据表。缺点：如果判断标准是 "),a("code",[t._v("时间维度")]),t._v("，数据过期了无法主动感知。")]),t._v(" "),a("li",[t._v("方案二：如果觉得修改业务代码，耦合性高，不易于后期维护。可以通过监听数据库变更日志 binlog 方式来触发")]),t._v(" "),a("li",[t._v("方案三："),a("strong",[t._v("常用的手段是跑定时任务，一般是选择凌晨系统压力小的时候，通过跑批任务，将满足条件的冷数据迁移到其他存储介质。在途业务表中只留下来少量的热点数据。")])])]),t._v(" "),a("h2",{attrs:{id:"_3-如何实现冷热数据分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何实现冷热数据分离"}},[t._v("#")]),t._v(" 3. 如何实现冷热数据分离")]),t._v(" "),a("p",[t._v("过程大概分为三步：")]),t._v(" "),a("ul",[a("li",[t._v("判断数据是冷、还是热")]),t._v(" "),a("li",[t._v("将冷数据插入冷数据表中")]),t._v(" "),a("li",[t._v("然后，从原来的热库中删除迁移的数据")])]),t._v(" "),a("h2",{attrs:{id:"_4-如何使用冷热数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何使用冷热数据"}},[t._v("#")]),t._v(" 4. 如何使用冷热数据")]),t._v(" "),a("ul",[a("li",[t._v("方案一：界面设计时会有选项区分，如上面举例的电商订单")]),t._v(" "),a("li",[t._v("方案二：直接在业务代码里区分。")])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),a("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=s.exports}}]);