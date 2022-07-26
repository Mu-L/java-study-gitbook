(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1244:function(e,t,r){"use strict";r.r(t);var s=r(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"如何解决-redis-的并发竞争-key-问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何解决-redis-的并发竞争-key-问题"}},[e._v("#")]),e._v(" 如何解决 Redis 的并发竞争 Key 问题")]),e._v(" "),r("h3",{attrs:{id:"_1-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[e._v("#")]),e._v(" 1. 简介")]),e._v(" "),r("p",[e._v("所谓 redis 的并发竞争 key 的问题也就是多个系统同时对一个key 进行操作，但是最后执行的顺序和我们期望的顺序不同，这样也就导致了结果的不同")]),e._v(" "),r("h2",{attrs:{id:"_2-解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案"}},[e._v("#")]),e._v(" 2.解决方案")]),e._v(" "),r("h2",{attrs:{id:"_2-1-分布式锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-分布式锁"}},[e._v("#")]),e._v(" 2.1 分布式锁")]),e._v(" "),r("p",[e._v("分布式锁（zookeeper 和 redis 都可以实现分布式锁）。（如果不存在 Redis 的并发竞争 Key 问题，不要使用分布式锁，这样会影响性能）")]),e._v(" "),r("blockquote",[r("p",[e._v("基于zookeeper临时有序节点可以实现的分布式锁。大致思想为：每个客户端对某个方法加锁时，在zookeeper上的与该方法对应的指定节点的目录下，生成一个唯一的瞬时有序节点。 判断是否获取锁的方式很简单，只需要判断有序节点中序号最小的一个。 当释放锁的时候，只需将这个瞬时节点删除即可。同时，其可以避免服务宕机导致的锁无法释放，而产生的死锁问题。完成业务流程后，删除对应的子节点释放锁。")]),e._v(" "),r("p",[e._v("在实践中，当然是从以可靠性为主。所以首推Zookeeper。")])])])}),[],!1,null,null,null);t.default=a.exports}}]);