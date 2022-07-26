(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{937:function(_,t,v){"use strict";v.r(t);var s=v(26),a=Object(s.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"商城设计要点-七-mysql读写分离带来的数据不一致问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#商城设计要点-七-mysql读写分离带来的数据不一致问题"}},[_._v("#")]),_._v(" 商城设计要点(七)-MySQL读写分离带来的数据不一致问题")]),_._v(" "),v("h2",{attrs:{id:"_1-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[_._v("#")]),_._v(" 1. 简介")]),_._v(" "),v("p",[_._v("互联网业务大部分都是 "),v("code",[_._v("读多写少")]),_._v("，为了提升数据库集群的吞吐性能，我们通常会采用 "),v("code",[_._v("主从架构")]),_._v("、"),v("code",[_._v("读写分离")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326211746699.png",alt:"image-20220326211746699"}})]),_._v(" "),v("p",[_._v("部署一个主库实例，客户端请求"),v("code",[_._v("所有写操作")]),_._v("全部写到主库，然后借助 MySQL 自带的 "),v("code",[_._v("主从同步")]),_._v(" 功能，做一些简单配置，可以近乎实时的将主库的数据同步给 "),v("code",[_._v("多个从库实例")]),_._v("，主从延迟非常小，一般"),v("strong",[_._v("不超过 1 毫秒")]),_._v("。")]),_._v(" "),v("p",[_._v("客户端请求的"),v("code",[_._v("所有读操作")]),_._v("全部打到 "),v("code",[_._v("从库")]),_._v("，借助多实例集群提升"),v("code",[_._v("读请求")]),_._v("的整体处理能力。")]),_._v(" "),v("p",[_._v("这个方案看似天衣无缝，但实际有个 "),v("strong",[_._v("副作用")])]),_._v(" "),v("p",[_._v("主从同步虽然近乎实时，但还是有个 "),v("code",[_._v("时间差")]),_._v(" ，主库数据刚更新完，但数据还没来得及同步到从库，后续"),v("code",[_._v("读请求")]),_._v("直接访问了从库，看到的还是旧数据，影响用户体验。")]),_._v(" "),v("p",[_._v("任何事情都不是完美的，从主同步也是一样，没有完美的解决方案，我们要找到其中的平衡取舍点。")]),_._v(" "),v("p",[_._v("我们以电商为例，看看如何从 "),v("code",[_._v("产品层面")]),_._v(" 来化解这个问题")]),_._v(" "),v("h2",{attrs:{id:"_2-复现场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-复现场景"}},[_._v("#")]),_._v(" 2. 复现场景")]),_._v(" "),v("ol",[v("li",[_._v("在下单确认页面，点击购买按钮，进入了支付页面")])]),_._v(" "),v("p",[_._v("​\t"),v("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326212046726.png",alt:"image-20220326212046726"}})]),_._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[_._v("输入支付宝支付密码，进入"),v("strong",[_._v("支付成功页面")]),_._v("，页面有查看订单详情的入口。")])]),_._v(" "),v("p",[_._v("​\t"),v("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326212106205.png",alt:"image-20220326212106205"}})]),_._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[_._v("点击 "),v("code",[_._v("查看交易详情")]),_._v(" ，才跳到真正的 订单详情页，可以查看订单的支付状态（订单数据取自从库）")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326212128598.png",alt:"image-20220326212128598"}})])])]),_._v(" "),v("h2",{attrs:{id:"_3-方案解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-方案解析"}},[_._v("#")]),_._v(" 3. 方案解析")]),_._v(" "),v("p",[_._v("我们在支付成功后，并没有立即跳到 "),v("code",[_._v("订单详情页")]),_._v("，而是增加了一个 无关紧要的 "),v("code",[_._v("中间页（支付成功页）")]),_._v("，一是告诉你支付的结果是成功的，钱没丢，不要担心；另外也可以增加一些推荐商品，引流提升网站的GMV。最重要的，增加了一个缓冲期，为 "),v("code",[_._v("订单的主从库数据同步")]),_._v(" 争取了更多的时间。")]),_._v(" "),v("p",[_._v("可谓一举多得，其他互联网业务也是类似道理。")]),_._v(" "),v("h2",{attrs:{id:"参考文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[_._v("#")]),_._v(" 参考文章")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"}},[_._v("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);