const e=JSON.parse('{"key":"v-446d4762","path":"/db/mysql/mysql-y-lock-overview.html","title":"锁机制","lang":"zh-CN","frontmatter":{"description":"1. 锁维度 锁有好几种维度 1.1 类型维度 共享锁（读锁/S锁）; 排他锁（写锁/X 锁）; 类型细分 意向共享锁; 意向排他（互斥）锁; 悲观锁（使用锁，既for update）; 乐观锁（使用版本号字段，类似 CAS 机制，既用户自己控制。缺点：并发很高的时候，多了很多无用的重试）; 1.2 锁的粒度（粒度维度） 表锁; 页锁（Mysql Be...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/mysql-y-lock-overview.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"锁机制"}],["meta",{"property":"og:description","content":"1. 锁维度 锁有好几种维度 1.1 类型维度 共享锁（读锁/S锁）; 排他锁（写锁/X 锁）; 类型细分 意向共享锁; 意向排他（互斥）锁; 悲观锁（使用锁，既for update）; 乐观锁（使用版本号字段，类似 CAS 机制，既用户自己控制。缺点：并发很高的时候，多了很多无用的重试）; 1.2 锁的粒度（粒度维度） 表锁; 页锁（Mysql Be..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 锁维度","slug":"_1-锁维度","link":"#_1-锁维度","children":[{"level":3,"title":"1.1 类型维度","slug":"_1-1-类型维度","link":"#_1-1-类型维度","children":[]},{"level":3,"title":"1.2 锁的粒度（粒度维度）","slug":"_1-2-锁的粒度-粒度维度","link":"#_1-2-锁的粒度-粒度维度","children":[]},{"level":3,"title":"1.3 锁的算法（算法维度）","slug":"_1-3-锁的算法-算法维度","link":"#_1-3-锁的算法-算法维度","children":[]}]},{"level":2,"title":"2. 默认的读操作，上锁吗？","slug":"_2-默认的读操作-上锁吗","link":"#_2-默认的读操作-上锁吗","children":[]},{"level":2,"title":"3 MySQL 的 SERIALIZABLE 有啥用呢？","slug":"_3-mysql-的-serializable-有啥用呢","link":"#_3-mysql-的-serializable-有啥用呢","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":1.32,"words":396},"filePathRelative":"db/mysql/mysql-y-lock-overview.md","localizedDate":"2022年9月9日","autoDesc":true}');export{e as data};