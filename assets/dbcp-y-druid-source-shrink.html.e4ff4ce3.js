const e=JSON.parse('{"key":"v-a496a214","path":"/dependencies/database-connection-pool/dbcp-y-druid-source-shrink.html","title":"Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E94\uFF09-DruidDataSource\u7684shrink\u8FC7\u7A0B","lang":"zh-CN","frontmatter":{"summary":"Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E94\uFF09-DruidDataSource\u7684shrink\u8FC7\u7A0B 1. \u7B80\u4ECB shrink\u65B9\u6CD5\u662FDestroyTask\u7EBF\u7A0B\u4E2D\u56DE\u6536\u8FDE\u63A5\u7684\u5177\u4F53\u6267\u884C\u65B9\u6CD5\u3002 2. shrink\u65B9\u6CD5 2.1 \u9996\u5148\u83B7\u5F97\u9501\uFF1A 2.2 \u5224\u65AD\u521D\u59CB\u5316\u72B6\u6001\u662F\u5426\u5B8C\u6210 \u8981\u5224\u65AD\u521D\u59CB\u5316\u72B6\u6001\u662F\u5426\u5B8C\u6210\uFF0C\u5982\u679C\u91C7\u7528\u5F02\u6B65\u521D\u59CB\u5316\uFF0C\u53EF\u80FDDestoryTask\u7EBF\u7A0B\u5DF2\u7ECF\u542F\u52A8\uFF0C\u4F46\u662F\u8FDE\u63A5\u6C60\u8FD8\u6CA1\u6709\u521D\u59CB\u5316\u5B8C\u6210\u3002 2.3","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/database-connection-pool/dbcp-y-druid-source-shrink.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E94\uFF09-DruidDataSource\u7684shrink\u8FC7\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T03:01:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T03:01:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. shrink\u65B9\u6CD5","slug":"_2-shrink\u65B9\u6CD5","link":"#_2-shrink\u65B9\u6CD5","children":[{"level":3,"title":"2.1 \u9996\u5148\u83B7\u5F97\u9501\uFF1A","slug":"_2-1-\u9996\u5148\u83B7\u5F97\u9501","link":"#_2-1-\u9996\u5148\u83B7\u5F97\u9501","children":[]},{"level":3,"title":"2.2 \u5224\u65AD\u521D\u59CB\u5316\u72B6\u6001\u662F\u5426\u5B8C\u6210","slug":"_2-2-\u5224\u65AD\u521D\u59CB\u5316\u72B6\u6001\u662F\u5426\u5B8C\u6210","link":"#_2-2-\u5224\u65AD\u521D\u59CB\u5316\u72B6\u6001\u662F\u5426\u5B8C\u6210","children":[]},{"level":3,"title":"2.3 \u5BF9\u8FDE\u63A5\u6C60\u4E2D\u7684\u8FDE\u63A5\u8FDB\u884C\u904D\u5386","slug":"_2-3-\u5BF9\u8FDE\u63A5\u6C60\u4E2D\u7684\u8FDE\u63A5\u8FDB\u884C\u904D\u5386","link":"#_2-3-\u5BF9\u8FDE\u63A5\u6C60\u4E2D\u7684\u8FDE\u63A5\u8FDB\u884C\u904D\u5386","children":[]},{"level":3,"title":"2.4 \u8FDB\u5165checkTime\u903B\u8F91","slug":"_2-4-\u8FDB\u5165checktime\u903B\u8F91","link":"#_2-4-\u8FDB\u5165checktime\u903B\u8F91","children":[]},{"level":3,"title":"2.5 checkTime\u4E3Afalse","slug":"_2-5-checktime\u4E3Afalse","link":"#_2-5-checktime\u4E3Afalse","children":[]},{"level":3,"title":"2.6 removeCount\u7684\u5904\u7406","slug":"_2-6-removecount\u7684\u5904\u7406","link":"#_2-6-removecount\u7684\u5904\u7406","children":[]},{"level":3,"title":"2.7 \u89E3\u9501","slug":"_2-7-\u89E3\u9501","link":"#_2-7-\u89E3\u9501","children":[]},{"level":3,"title":"2.8 evict\u7684\u8FDE\u63A5\u5904\u7406","slug":"_2-8-evict\u7684\u8FDE\u63A5\u5904\u7406","link":"#_2-8-evict\u7684\u8FDE\u63A5\u5904\u7406","children":[]},{"level":3,"title":"2.9 keepAliveCount\u8FDE\u63A5\u5904\u7406","slug":"_2-9-keepalivecount\u8FDE\u63A5\u5904\u7406","link":"#_2-9-keepalivecount\u8FDE\u63A5\u5904\u7406","children":[]},{"level":3,"title":"2.10 keepAlive\u72B6\u6001\uFF0C\u4E14\u8FDE\u63A5\u6C60\u4E2D\u7684\u8FDE\u63A5\u52A0\u4E0A\u88AB\u4F7F\u7528\u7684\u8FDE\u63A5\u4ECD\u7136\u5C0F\u4E8EminIdle","slug":"_2-10-keepalive\u72B6\u6001-\u4E14\u8FDE\u63A5\u6C60\u4E2D\u7684\u8FDE\u63A5\u52A0\u4E0A\u88AB\u4F7F\u7528\u7684\u8FDE\u63A5\u4ECD\u7136\u5C0F\u4E8Eminidle","link":"#_2-10-keepalive\u72B6\u6001-\u4E14\u8FDE\u63A5\u6C60\u4E2D\u7684\u8FDE\u63A5\u52A0\u4E0A\u88AB\u4F7F\u7528\u7684\u8FDE\u63A5\u4ECD\u7136\u5C0F\u4E8Eminidle","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1663124461000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.31,"words":1592},"filePathRelative":"dependencies/database-connection-pool/dbcp-y-druid-source-shrink.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};