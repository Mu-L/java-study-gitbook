const e=JSON.parse('{"key":"v-4f57ec60","path":"/dependencies/database-connection-pool/dbcp-y-druid-source-recycle.html","title":"Druid源码学习（七）-DruidDataSource的recycle过程","lang":"zh-CN","frontmatter":{"description":"1. 简介 Druid 中的Connection在使用之后，要进行回收，而回收连接的方法就是recycle方法。 回收的主要目的是将连接的状态清空/重置之后，放置到连接池的connections数组的尾部，然后发送连接池lock的notEmpty条件变量 通知消息，让等待的消费者线程来获取连接。 2.回收过程 回收方法首先要做的是，判断回收线程是否为同...","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/database-connection-pool/dbcp-y-druid-source-recycle.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Druid源码学习（七）-DruidDataSource的recycle过程"}],["meta",{"property":"og:description","content":"1. 简介 Druid 中的Connection在使用之后，要进行回收，而回收连接的方法就是recycle方法。 回收的主要目的是将连接的状态清空/重置之后，放置到连接池的connections数组的尾部，然后发送连接池lock的notEmpty条件变量 通知消息，让等待的消费者线程来获取连接。 2.回收过程 回收方法首先要做的是，判断回收线程是否为同..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T06:41:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-26T06:41:27.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2.回收过程","slug":"_2-回收过程","link":"#_2-回收过程","children":[]},{"level":2,"title":"3. recycle的调用时机","slug":"_3-recycle的调用时机","link":"#_3-recycle的调用时机","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1672036887000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":3.41,"words":1023},"filePathRelative":"dependencies/database-connection-pool/dbcp-y-druid-source-recycle.md","localizedDate":"2022年9月14日","autoDesc":true}');export{e as data};