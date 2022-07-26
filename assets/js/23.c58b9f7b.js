(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{399:function(a,s,t){"use strict";t.r(s);var e=t(26),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"分布式算法-一致性hash算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式算法-一致性hash算法"}},[a._v("#")]),a._v(" 分布式算法-一致性Hash算法")]),a._v(" "),t("blockquote",[t("p",[a._v("一致性Hash算法是个经典算法，Hash环的引入是为解决"),t("code",[a._v("单调性(Monotonicity)")]),a._v("的问题；虚拟节点的引入是为了解决"),t("code",[a._v("平衡性(Balance)")]),a._v("问题。")])]),a._v(" "),t("h2",{attrs:{id:"_1-一致性hash算法引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-一致性hash算法引入"}},[a._v("#")]),a._v(" 1. 一致性Hash算法引入")]),a._v(" "),t("p",[a._v("在分布式集群中，对机器的添加删除，或者机器故障后自动脱离集群这些操作是分布式集群管理最基本的功能。如果采用常用的hash(object)%N算法，那么在有机器添加或者删除后，很多原有的数据就无法找到了，这样严重的违反了单调性原则。")]),a._v(" "),t("h2",{attrs:{id:"_2-一致性hash算法简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-一致性hash算法简介"}},[a._v("#")]),a._v(" 2.一致性Hash算法简介")]),a._v(" "),t("p",[a._v("一致性哈希算法在1997年由麻省理工学院提出的一种分布式哈希(DHT)实现算法，设计目标是为了解决因特网中的热点(Hot spot)问题，初衷和CARP十分类似。一致性哈希修正了CARP使用的简 单哈希算法带来的问题，使得分布式哈希(DHT)可以在P2P环境中真正得到应用。")]),a._v(" "),t("p",[a._v("一致性hash算法提出了在动态变化的Cache环境中，判定哈希算法好坏的四个定义:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("平衡性(Balance)")]),a._v(": 平衡性是指哈希的结果能够尽可能分布到所有的缓冲中去，这样可以使得所有的缓冲空间都得到利用。很多哈希算法都能够满足这一条件。")]),a._v(" "),t("li",[t("code",[a._v("单调性(Monotonicity)")]),a._v(": 单调性是指如果已经有一些内容通过哈希分派到了相应的缓冲中，又有新的缓冲加入到系统中。哈希的结果应能够保证原有已分配的内容可以被映射到原有的或者新的缓冲中去，而不会被映射到旧的缓冲集合中的其他缓冲区。")]),a._v(" "),t("li",[t("code",[a._v("分散性(Spread)")]),a._v(": 在分布式环境中，终端有可能看不到所有的缓冲，而是只能看到其中的一部分。当终端希望通过哈希过程将内容映射到缓冲上时，由于不同终端所见的缓冲范围有可能不同，从而导致哈希的结果不一致，最终的结果是相同的内容被不同的终端映射到不同的缓冲区中。这种情况显然是应该避免的，因为它导致相同内容被存储到不同缓冲中去，降低了系统存储的效率。分散性的定义就是上述情况发生的严重程度。好的哈希算法应能够尽量避免不一致的情况发生，也就是尽量降低分散性。")]),a._v(" "),t("li",[t("code",[a._v("负载(Load)")]),a._v(": 负载问题实际上是从另一个角度看待分散性问题。既然不同的终端可能将相同的内容映射到不同的缓冲区中，那么对于一个特定的缓冲区而言，也可能被不同的用户映射为不同 的内容。与分散性一样，这种情况也是应当避免的，因此好的哈希算法应能够尽量降低缓冲的负荷。")])]),a._v(" "),t("h2",{attrs:{id:"_3-一致性hash算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-一致性hash算法"}},[a._v("#")]),a._v(" 3. 一致性Hash算法")]),a._v(" "),t("h3",{attrs:{id:"_3-1-hash环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-hash环"}},[a._v("#")]),a._v(" 3.1 Hash环")]),a._v(" "),t("p",[a._v("使用常见的hash算法可以把一个key值哈希到一个具有2^32个桶的空间中。也可以理解成，将key值哈希到 [0, 2^32) 的一个数字空间中。 我们假设这个是个首尾连接的环形空间。如下图:")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205553148.png",alt:"image-20220618205553148"}}),a._v(" "),t("p",[a._v("假设我们现在有key1,key2,key3,key4 4个key值，我们通过一定的hash算法，将其对应到上面的环形hash空间中。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("k1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("k2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("k3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("k4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205634068.png",alt:"image-20220618205634068"}}),a._v(" "),t("p",[a._v("同样的，假设我们有3台cache服务器，把缓存服务器通过hash算法，加入到上述的环中。一般情况下是根据机器的IP地址或者唯一的计算机别名进行哈希。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("c1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cache1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("c2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cache2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("c3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cache3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205731230.png",alt:"image-20220618205731230"}}),a._v(" "),t("p",[a._v("接下来就是数据如何存储到cache服务器上了，key值哈希之后的结果顺时针找上述环形hash空间中，距离自己最近的机器节点，然后将数据存储到上面， 如上图所示，k1 存储到 c3 服务器上， k4,k3存储到c1服务器上， k2存储在c2服务器上。用图表示如下:")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205821327.png",alt:"image-20220618205821327"}})]),a._v(" "),t("h3",{attrs:{id:"_3-2-删除节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-删除节点"}},[a._v("#")]),a._v(" 3.2 删除节点")]),a._v(" "),t("p",[a._v("假设cache3服务器宕机，这时候需要从集群中将其摘除。那么，之前存储再c3上的k1，将会顺时针寻找距离它最近的一个节点，也就是c1节点，这样，k1就会存储到c1上了，看一看下下面的图，比较清晰。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618205958465.png",alt:"image-20220618205958465"}}),a._v(" "),t("p",[a._v("摘除c3节点之后，只影响到了原先存储再c3上的k1，而k3、k4、k2都没有受到影响，也就意味着解决了最开始的解决方案(hash(key)%N)中可能带来的雪崩问题。")]),a._v(" "),t("h3",{attrs:{id:"_3-3-增加节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-增加节点"}},[a._v("#")]),a._v(" 3.3 增加节点")]),a._v(" "),t("p",[a._v("新增C4节点之后，原先存储到C1的k4，迁移到了C4，分担了C1上的存储压力和流量压力。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210103372.png",alt:"image-20220618210103372"}}),a._v(" "),t("h3",{attrs:{id:"_3-4-不平衡的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-不平衡的问题"}},[a._v("#")]),a._v(" 3.4 不平衡的问题")]),a._v(" "),t("p",[a._v("上面的简单的一致性hash的方案在某些情况下但依旧存在问题: 一个节点宕机之后，数据需要落到距离他最近的节点上，会导致下个节点的压力突然增大，可能导致雪崩，整个服务挂掉。")]),a._v(" "),t("p",[a._v("如下图所示:")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210148722.png",alt:"image-20220618210148722"}}),a._v(" "),t("p",[a._v("当节点C3摘除之后，之前再C3上的k1就要迁移到C1上，这时候带来了两部分的压力:")]),a._v(" "),t("ul",[t("li",[a._v("之前请求到C3上的流量转嫁到了C1上,会导致C1的流量增加，如果之前C3上存在热点数据，则可能导致C1扛不住压力挂掉。")]),a._v(" "),t("li",[a._v("之前存储到C3上的key值转义到了C1，会导致C1的内容占用量增加，可能存在瓶颈。")])]),a._v(" "),t("p",[a._v("当上面两个压力发生的时候，可能导致C1节点也宕机了。那么压力便会传递到C2上，又出现了类似滚雪球的情况，服务压力出现了雪崩，导致整个服务不可用。这一点违背了最开始提到的四个原则中的 "),t("code",[a._v("平衡性")]),a._v("， 节点宕机之后，流量及内存的分配方式打破了原有的平衡。")]),a._v(" "),t("h3",{attrs:{id:"_3-5-虚拟节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-虚拟节点"}},[a._v("#")]),a._v(" 3.5 虚拟节点")]),a._v(" "),t("p",[a._v("“虚拟节点”( virtual node )是实际节点(机器)在 hash 空间的复制品( replica )，一实际个节点(机器)对应了若干个“虚拟节点”，这个对应个数也称为“复制个数”，“虚拟节点”在 hash 空间中以hash值排列。")]),a._v(" "),t("p",[a._v("依旧用图片来解释，假设存在以下的真实节点和虚拟节点的对应关系。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("Visual100—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real1\nVisual101—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real1\nVisual200—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real2\nVisual201—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real2\nVisual300—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real3\nVisual301—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real3\n")])])]),t("p",[a._v("同样的，hash之后的结果如下:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Visual100"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" V100  —"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real1\nhash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Visual101"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" V101  —"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real1\nhash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Visual200"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" V200  —"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real2\nhash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Visual201"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" V201  —"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real2\nhash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Visual300"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" V300  —"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real3\nhash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Visual301"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("—"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" V301  —"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" Real3\n")])])]),t("p",[a._v("key值的hash结果如上，这里暂时不写了。")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210446327.png",alt:"image-20220618210446327"}}),a._v(" "),t("p",[a._v("和之前介绍的不添加虚拟节点的类似，主要聊下如果宕机之后的情况。")]),a._v(" "),t("p",[a._v("假设Real1机器宕机，则会发生一下情况。")]),a._v(" "),t("ul",[t("li",[a._v("原先存储在虚拟节点V100上的k1数据将迁移到V301上，也就意味着迁移到了Real3机器上。")]),a._v(" "),t("li",[a._v("原先存储再虚拟节点V101上的k4数据将迁移到V200上，也就意味着迁移到了Real2机器上。")])]),a._v(" "),t("p",[a._v("结果如下图:")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618210602989.png",alt:"image-20220618210602989"}}),a._v(" "),t("p",[a._v("这个就解决之前的问题了，某个节点宕机之后，存储及流量压力并没有全部转移到某台机器上，而是分散到了多台节点上。解决了节点宕机可能存在的雪崩问题。")]),a._v(" "),t("p",[a._v("当物理节点多的时候，虚拟节点多，这个的雪崩可能就越小。")]),a._v(" "),t("h2",{attrs:{id:"_4-一致性hash的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-一致性hash的应用"}},[a._v("#")]),a._v(" 4. 一致性Hash的应用")]),a._v(" "),t("h3",{attrs:{id:"_4-1-nginx负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-nginx负载均衡"}},[a._v("#")]),a._v(" 4.1 nginx负载均衡")]),a._v(" "),t("blockquote",[t("p",[a._v("一致性Hash是一种特殊的Hash算法，由于其均衡性、持久性的映射特点，被广泛的应用于负载均衡领域，如nginx和memcached都采用了一致性Hash来作为集群负载均衡的方案。")])]),a._v(" "),t("h3",{attrs:{id:"_4-2-redis集群模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-redis集群模式"}},[a._v("#")]),a._v(" 4.2 Redis集群模式")]),a._v(" "),t("blockquote",[t("p",[a._v("Redis集群模式也使用了一致性hash算法：")])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("所有的redis节点彼此互联(PING-PONG机制),内部使用二进制协议优化传输速度和带宽.")])]),a._v(" "),t("li",[t("p",[a._v("节点的fail是通过集群中超过半数的节点检测失效时才生效.")])]),a._v(" "),t("li",[t("p",[a._v("客户端与redis节点直连,不需要中间proxy层.客户端不需要连接集群所有节点,连接集群中任何一个可用节点即可")])]),a._v(" "),t("li",[t("p",[a._v("redis-cluster把所有的物理节点映射到[0-16383]slot（插槽）上,cluster 负责维护node<->slot<->value")])])]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://pdai.tech/md/algorithm/alg-domain-distribute-x-consistency-hash.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("分布式算法 - 一致性Hash算法"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);