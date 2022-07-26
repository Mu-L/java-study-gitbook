(window.webpackJsonp=window.webpackJsonp||[]).push([[841],{1217:function(s,t,a){"use strict";a.r(t);var r=a(26),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis面试-事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis面试-事务"}},[s._v("#")]),s._v(" Redis面试-事务")]),s._v(" "),a("h2",{attrs:{id:"_1-什么是redis事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是redis事务"}},[s._v("#")]),s._v(" 1 什么是redis事务？")]),s._v(" "),a("p",[s._v("Redis 事务的本质是一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。")]),s._v(" "),a("p",[s._v("总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。")]),s._v(" "),a("h2",{attrs:{id:"_2-redis事务相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis事务相关命令"}},[s._v("#")]),s._v(" 2 Redis事务相关命令？")]),s._v(" "),a("p",[s._v("MULTI 、 EXEC 、 DISCARD 和 WATCH 是 Redis 事务相关的命令。")]),s._v(" "),a("ul",[a("li",[s._v("MULTI ：开启事务，redis会将后续的命令逐个放入队列中，然后使用EXEC命令来原子化执行这个命令系列。")]),s._v(" "),a("li",[s._v("EXEC：执行事务中的所有操作命令。")]),s._v(" "),a("li",[s._v("DISCARD：取消事务，放弃执行事务块中的所有命令。")]),s._v(" "),a("li",[s._v("WATCH：监视一个或多个key,如果事务在执行前，这个key(或多个key)被其他命令修改，则事务被中断，不会执行事务中的任何命令。")]),s._v(" "),a("li",[s._v("UNWATCH：取消WATCH对所有key的监视")])]),s._v(" "),a("h2",{attrs:{id:"_3-redis事务的三个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis事务的三个阶段"}},[s._v("#")]),s._v(" 3 Redis事务的三个阶段？")]),s._v(" "),a("p",[s._v("Redis事务执行是三个阶段：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("开启")]),s._v("：以MULTI开始一个事务")]),s._v(" "),a("li",[a("strong",[s._v("入队")]),s._v("：将多个命令入队到事务中，接到这些命令并不会立即执行，而是放到等待执行的事务队列里面")]),s._v(" "),a("li",[a("strong",[s._v("执行")]),s._v("：由EXEC命令触发事务")])]),s._v(" "),a("p",[s._v("当一个客户端切换到事务状态之后， 服务器会根据这个客户端发来的不同命令执行不同的操作：")]),s._v(" "),a("ul",[a("li",[s._v("如果客户端发送的命令为 EXEC 、 DISCARD 、 WATCH 、 MULTI 四个命令的其中一个， 那么服务器立即执行这个命令。")]),s._v(" "),a("li",[s._v("与此相反， 如果客户端发送的命令是 EXEC 、 DISCARD 、 WATCH 、 MULTI 四个命令以外的其他命令， 那么服务器并不立即执行这个命令， 而是将这个命令放入一个事务队列里面， 然后向客户端返回 QUEUED 回复。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628223526301.png",alt:"image-20220628223526301"}})]),s._v(" "),a("h2",{attrs:{id:"_4-redis事务其它实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis事务其它实现"}},[s._v("#")]),s._v(" 4 Redis事务其它实现？")]),s._v(" "),a("ul",[a("li",[s._v("基于Lua脚本，Redis可以保证脚本内的命令一次性、按顺序地执行，其同时也不提供事务运行错误的回滚，执行过程中如果部分命令运行错误，剩下的命令还是会继续运行完")]),s._v(" "),a("li",[s._v("基于中间标记变量，通过另外的标记变量来标识事务是否执行完成，读取数据时先读取该标记变量判断是否事务执行完成。但这样会需要额外写代码实现，比较繁琐")])]),s._v(" "),a("h2",{attrs:{id:"_5-redis事务中出现错误的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis事务中出现错误的处理"}},[s._v("#")]),s._v(" 5 Redis事务中出现错误的处理？")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("语法错误（编译器错误）")])])]),s._v(" "),a("p",[s._v("在开启事务后，修改k1值为11，k2值为22，但k2语法错误，"),a("strong",[s._v("最终导致事务提交失败，k1、k2保留原值")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v1\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k2 v2\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MULTI\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" sets k2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ERR unknown "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("sets"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", with args beginning with: "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("k2"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" EXECABORT Transaction discarded because of previous errors.\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k1\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k2\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v2"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n")])])]),a("ul",[a("li",[a("strong",[s._v("Redis类型错误（运行时错误）")])])]),s._v(" "),a("p",[s._v("在开启事务后，修改k1值为11，k2值为22，但将k2的类型作为List，"),a("strong",[s._v("在运行时检测类型错误，最终导致事务提交失败，此时事务并没有回滚，而是跳过错误命令继续执行")]),s._v("， 结果k1值改变、k2保留原值")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v1\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v2\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" MULTI\nOK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" lpush k2 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nQUEUED\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" EXEC\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" OK\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" WRONGTYPE Operation against a key holding the wrong kind of value\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k1\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" get k2\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v2"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v("\n\n  \n")])])]),a("h2",{attrs:{id:"_6-redis事务中watch是如何监视实现的呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-redis事务中watch是如何监视实现的呢"}},[s._v("#")]),s._v(" 6 Redis事务中watch是如何监视实现的呢？")]),s._v(" "),a("p",[s._v("Redis使用WATCH命令来决定事务是继续执行还是回滚，那就需要在MULTI之前使用WATCH来监控某些键值对，然后使用MULTI命令来开启事务，执行对数据结构操作的各种命令，此时这些命令入队列。")]),s._v(" "),a("p",[s._v("当使用EXEC执行事务时，首先会比对WATCH所监控的键值对，如果没发生改变，它会执行事务队列中的命令，提交事务；如果发生变化，将不会执行事务中的任何命令，同时事务回滚。当然无论是否回滚，Redis都会取消执行事务前的WATCH命令。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628223740040.png",alt:"image-20220628223740040"}})]),s._v(" "),a("h2",{attrs:{id:"_7-为什么-redis-不支持回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-为什么-redis-不支持回滚"}},[s._v("#")]),s._v(" 7 为什么 Redis 不支持回滚？")]),s._v(" "),a("p",[s._v("以下是这种做法的优点：")]),s._v(" "),a("ul",[a("li",[s._v("Redis 命令只会因为错误的语法而失败（并且这些问题不能在入队时发现），或是命令用在了错误类型的键上面：这也就是说，从实用性的角度来说，失败的命令是由编程错误造成的，而这些错误应该在开发的过程中被发现，而不应该出现在生产环境中。")]),s._v(" "),a("li",[s._v("因为不需要对回滚进行支持，所以 Redis 的内部可以保持简单且快速。")])]),s._v(" "),a("p",[s._v("有种观点认为 Redis 处理事务的做法会产生 bug ， 然而需要注意的是， 在通常情况下， "),a("strong",[s._v("回滚并不能解决编程错误带来的问题")]),s._v("。 举个例子， 如果你本来想通过 INCR 命令将键的值加上 1 ， 却不小心加上了 2 ， 又或者对错误类型的键执行了 INCR ， 回滚是没有办法处理这些情况的。")]),s._v(" "),a("h2",{attrs:{id:"_8-redis-对-acid的支持性理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-redis-对-acid的支持性理解"}},[s._v("#")]),s._v(" 8 Redis 对 ACID的支持性理解？")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("原子性atomicity")])])]),s._v(" "),a("p",[s._v("首先通过上文知道 运行期的错误是不会回滚的，很多文章由此说Redis事务违背原子性的；而官方文档认为是遵从原子性的。")]),s._v(" "),a("p",[s._v("Redis官方文档给的理解是，"),a("strong",[s._v("Redis的事务是原子性的：所有的命令，要么全部执行，要么全部不执行")]),s._v("。而不是完全成功。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("一致性consistency")])])]),s._v(" "),a("p",[s._v("redis事务可以保证命令失败的情况下得以回滚，数据能恢复到没有执行之前的样子，是保证一致性的，除非redis进程意外终结。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("隔离性Isolation")])])]),s._v(" "),a("p",[s._v("redis事务是严格遵守隔离性的，原因是redis是单进程单线程模式(v6.0之前），可以保证命令执行过程中不会被其他客户端命令打断。")]),s._v(" "),a("p",[s._v("但是，Redis不像其它结构化数据库有隔离级别这种设计。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("持久性Durability")])])]),s._v(" "),a("p",[a("strong",[s._v("redis事务是不保证持久性的")]),s._v("，这是因为redis持久化策略中不管是RDB还是AOF都是异步执行的，不保证持久性是出于对性能的考虑。")]),s._v(" "),a("h2",{attrs:{id:"_9-redis事务其他实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-redis事务其他实现"}},[s._v("#")]),s._v(" 9 Redis事务其他实现？")]),s._v(" "),a("p",[s._v("基于Lua脚本，Redis可以保证脚本内的命令一次性、按顺序地执行，其同时也不提供事务运行错误的回滚，执行过程中如果部分命令运行错误，剩下的命令还是会继续运行完")]),s._v(" "),a("p",[s._v("基于中间标记变量，通过另外的标记变量来标识事务是否执行完成，读取数据时先读取该标记变量判断是否事务执行完成。但这样会需要额外写代码实现，比较繁琐")])])}),[],!1,null,null,null);t.default=e.exports}}]);