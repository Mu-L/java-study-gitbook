(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{942:function(e,t,_){"use strict";_.r(t);var r=_(26),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"商城设计要点-六-账户余额更新-保证事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#商城设计要点-六-账户余额更新-保证事务"}},[e._v("#")]),e._v(" 商城设计要点(六)-账户余额更新，保证事务")]),e._v(" "),_("h2",{attrs:{id:"_1-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[e._v("#")]),e._v(" 1. 简介")]),e._v(" "),_("p",[e._v("用户支付，我们要从买家账户减掉一定金额，再往卖家增加一定金额，为了保证数据的"),_("code",[e._v("完整性")]),e._v("、"),_("code",[e._v("可追溯性")]),e._v("，变更余额时，我们通常会同时插入一条"),_("code",[e._v("记录流水")]),e._v("。")]),e._v(" "),_("p",[_("strong",[e._v("账户流水核心字段")]),e._v("：流水ID、金额、交易双方账户、交易时间戳、订单号、")]),e._v(" "),_("blockquote",[_("p",[e._v("注意：账户流水只能新增，不能修改和删除。流水号必须是自增的。")])]),e._v(" "),_("p",[e._v("后续，系统对账时，我们只需要对交易流水明细数据做累计即可，如果出现和余额不一致情况，一般以交易流水为准来修复余额数据。")]),e._v(" "),_("p",[_("code",[e._v("更新余额")]),e._v("、"),_("code",[e._v("记录流水")]),e._v(" 虽属于两个操作，但是要保证要么都成功，要么都失败。要做到事务。")]),e._v(" "),_("h2",{attrs:{id:"_2-解决"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决"}},[e._v("#")]),e._v(" 2. 解决")]),e._v(" "),_("p",[e._v("数据库的事务隔离级别有："),_("code",[e._v("读未提交（RU）")]),e._v("、"),_("code",[e._v("读已提交（RC）")]),e._v("、"),_("code",[e._v("可重复读（RR）")]),e._v("、"),_("code",[e._v("串行化（Serializable）")])]),e._v(" "),_("p",[e._v("常用的隔离级别是 RC 和 RR ，因为这两种隔离级别都可以避免脏读。")]),e._v(" "),_("ul",[_("li",[_("strong",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&mid=2247488721&idx=1&sn=28bbdd6818da9b6afeda46319e060fb3&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("跑了4个实验，实战讲解 MySQL的行锁、间隙锁..."),_("OutboundLink")],1)])]),e._v(" "),_("li",[_("strong",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg2NzYyNjQzNg==&mid=2247486613&idx=1&sn=1ce63f19e077d8230799bc0e4c41b04f&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("InnoDB解决幻读的方案 -- LBCC&MVCC"),_("OutboundLink")],1)])])]),e._v(" "),_("p",[e._v("当然，如果涉及多个微服务调用，会用到"),_("strong",[e._v("分布式事务")])]),e._v(" "),_("p",[e._v("分布式事务，细想下也很容易理解，就是将"),_("code",[e._v("一个大事务")]),e._v("拆分为多个"),_("code",[e._v("本地事务")]),e._v("，本地事务依然借助于数据库自身事务来解决，难点在于解决这个分布式一致性问题，借助"),_("strong",[e._v("重试")]),e._v("机制，保证最终一致是我们常用的方案")]),e._v(" "),_("h2",{attrs:{id:"参考文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"}},[e._v("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),_("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);