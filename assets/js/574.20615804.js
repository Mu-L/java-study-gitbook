(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{951:function(_,v,l){"use strict";l.r(v);var t=l(26),i=Object(t.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("h1",{attrs:{id:"mall商城下单流程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mall商城下单流程"}},[_._v("#")]),_._v(" mall商城下单流程")]),_._v(" "),l("blockquote",[l("p",[_._v("该篇文章主要参考"),l("a",{attrs:{href:"http://www.macrozheng.com/#/README",target:"_blank",rel:"noopener noreferrer"}},[_._v("mall官方文档"),l("OutboundLink")],1),_._v("，并结合自己的使用感受做的一些笔记")])]),_._v(" "),l("h2",{attrs:{id:"_1-流程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-流程"}},[_._v("#")]),_._v(" 1. 流程")]),_._v(" "),l("h3",{attrs:{id:"_1-1-将商品添加进购物车"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-将商品添加进购物车"}},[_._v("#")]),_._v(" 1.1 将商品添加进购物车")]),_._v(" "),l("ol",[l("li",[_._v("点击"),l("strong",[_._v("直接购买的商品")]),_._v("，"),l("strong",[_._v("也需要将商品加入购物车")]),_._v("，然后从购物车结算（只是程序帮我们做了）")]),_._v(" "),l("li",[_._v("添加进购物车时，需要将商品加入购物车时价格、商品主图，名称等基本信息就记录下来，以免商品修改导致的前后不一致问题")])]),_._v(" "),l("h3",{attrs:{id:"_1-2-根据购物车信息生成确认单"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-根据购物车信息生成确认单"}},[_._v("#")]),_._v(" 1.2 根据购物车信息生成确认单")]),_._v(" "),l("ol",[l("li",[_._v("根据购物车id列表生确认单")]),_._v(" "),l("li",[_._v("确认单包含\n"),l("ol",[l("li",[_._v("促销信息")]),_._v(" "),l("li",[_._v("用户收货地址")]),_._v(" "),l("li",[_._v("可用的优惠券信息")]),_._v(" "),l("li",[_._v("积分和积分使用规则")]),_._v(" "),l("li",[_._v("计算金额\n"),l("ol",[l("li",[_._v("总金额")]),_._v(" "),l("li",[_._v("应付金额")]),_._v(" "),l("li",[_._v("优惠金额")])])])])])]),_._v(" "),l("h3",{attrs:{id:"_1-3-生成订单"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-生成订单"}},[_._v("#")]),_._v(" 1.3 生成订单")]),_._v(" "),l("p",[_._v("选择确认单中的优惠券，收货地址")]),_._v(" "),l("ol",[l("li",[_._v("需要的参数\n"),l("ol",[l("li",[_._v("选中的购物车商品id列表")]),_._v(" "),l("li",[_._v("收货地址")]),_._v(" "),l("li",[_._v("优惠券id")]),_._v(" "),l("li",[_._v("支付方式")])])]),_._v(" "),l("li",[_._v("流程\n"),l("ol",[l("li",[_._v("获取购物车及优惠信息\n"),l("ol",[l("li",[_._v("根据商品id列表获取商品信息\n"),l("ol",[l("li",[_._v("获取用户id的获取购物车中的商品信息\n"),l("ol",[l("li",[_._v("**为什么不直接通过购物车id去查？**因为担心用户在其他客户端已删除商品")])])]),_._v(" "),l("li",[_._v("判断是否包含购物车id，有则添加")])])]),_._v(" "),l("li",[l("strong",[_._v("计算优惠后的商品信息")]),_._v(" "),l("ol",[l("li",[_._v("先根据productId对CartItem进行分组，以spu为单位进行计算优惠")]),_._v(" "),l("li",[_._v("查询所有商品的优惠相关信息")]),_._v(" "),l("li",[l("strong",[_._v("根据商品促销类型计算商品促销优惠价格（计算促销还比较麻烦）")]),_._v(" "),l("ol",[l("li",[_._v("促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购")])])]),_._v(" "),l("li",[_._v("计算库存\n"),l("ol",[l("li",[_._v("获取sku的库存信息-锁定的库存信息")])])])])])])]),_._v(" "),l("li",[_._v("生成下单商品信息")]),_._v(" "),l("li",[_._v("判断购物车中商品是否都有库存")]),_._v(" "),l("li",[_._v("判断使用使用了优惠券")]),_._v(" "),l("li",[_._v("判断是否使用积分")]),_._v(" "),l("li",[_._v("计算order_item的实付金额")]),_._v(" "),l("li",[_._v("进行库存锁定")]),_._v(" "),l("li",[_._v("根据商品合计、运费、活动优惠、优惠券、积分计算应付金额")]),_._v(" "),l("li",[_._v("收货人信息：姓名、电话、邮编、地址")]),_._v(" "),l("li",[_._v("计算赠送积分、成长值")]),_._v(" "),l("li",[_._v("设置自动收货天数")]),_._v(" "),l("li",[l("strong",[_._v("插入order表和order_item表")])]),_._v(" "),l("li",[_._v("如使用优惠券更新优惠券使用状态")]),_._v(" "),l("li",[_._v("如使用积分需要扣除积分")]),_._v(" "),l("li",[_._v("删除购物车中的下单商品")]),_._v(" "),l("li",[_._v("发送延迟消息取消订单")])])])]),_._v(" "),l("h2",{attrs:{id:"_2-疑问"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-疑问"}},[_._v("#")]),_._v(" 2. 疑问")]),_._v(" "),l("h3",{attrs:{id:"_2-1-什么时候锁的库存"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-什么时候锁的库存"}},[_._v("#")]),_._v(" 2.1 什么时候锁的库存？")]),_._v(" "),l("p",[_._v("​\t在生成订单的时候，用户支付前。进行锁定")])])}),[],!1,null,null,null);v.default=i.exports}}]);