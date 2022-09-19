const e=JSON.parse('{"key":"v-115d712e","path":"/db/redis/db-redis-x-cluster.html","title":"Redis\u8FDB\u9636 - \u9AD8\u53EF\u62D3\u5C55\uFF1A\u5206\u7247\u6280\u672F\uFF08Redis Cluster\uFF09\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":230,"category":["\u6570\u636E\u5E93","Redis"],"summary":"Redis\u8FDB\u9636 - \u9AD8\u53EF\u62D3\u5C55\uFF1A\u5206\u7247\u6280\u672F\uFF08Redis Cluster\uFF09\u8BE6\u89E3 \\"\u524D\u9762\u4E24\u7BC7\u6587\u7AE0\uFF0C\u4E3B\u4ECE\u590D\u5236\u548C\u54E8\u5175\u673A\u5236\u4FDD\u969C\u4E86\u9AD8\u53EF\u7528\uFF0C\u5C31\u8BFB\u5199\u5206\u79BB\u800C\u8A00\u867D\u7136slave\u8282\u70B9\u6269\u5C55\u4E86\u4E3B\u4ECE\u7684\u8BFB\u5E76\u53D1\u80FD\u529B\uFF0C\u4F46\u662F\u5199\u80FD\u529B\u548C\u5B58\u50A8\u80FD\u529B\u662F\u65E0\u6CD5\u8FDB\u884C\u6269\u5C55\uFF0C\u5C31\u53EA\u80FD\u662Fmaster\u8282\u70B9\u80FD\u591F\u627F\u8F7D\u7684\u4E0A\u9650\u3002\u5982\u679C\u9762\u5BF9\u6D77\u91CF\u6570\u636E\u90A3\u4E48\u5FC5\u7136\u9700\u8981\u6784\u5EFAmaster\uFF08\u4E3B\u8282\u70B9\u5206\u7247)\u4E4B\u95F4\u7684\u96C6\u7FA4\uFF0C\u540C\u65F6\u5FC5\u7136\u9700\u8981\u5438\u6536\u9AD8\u53EF\u7528\uFF08\u4E3B\u4ECE\u590D\u5236\u548C\u54E8","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/db-redis-x-cluster.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u8FDB\u9636 - \u9AD8\u53EF\u62D3\u5C55\uFF1A\u5206\u7247\u6280\u672F\uFF08Redis Cluster\uFF09\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-19T12:33:19.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-19T12:33:19.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. Redis \u96C6\u7FA4\u7684\u8BBE\u8BA1\u76EE\u6807","slug":"_1-redis-\u96C6\u7FA4\u7684\u8BBE\u8BA1\u76EE\u6807","link":"#_1-redis-\u96C6\u7FA4\u7684\u8BBE\u8BA1\u76EE\u6807","children":[{"level":3,"title":"1.1 Redis \u96C6\u7FA4\u8BBE\u8BA1\u76EE\u6807","slug":"_1-1-redis-\u96C6\u7FA4\u8BBE\u8BA1\u76EE\u6807","link":"#_1-1-redis-\u96C6\u7FA4\u8BBE\u8BA1\u76EE\u6807","children":[]},{"level":3,"title":"1.2 Redis\u96C6\u7FA4\u534F\u8BAE\u4E2D\u7684\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u89D2\u8272","slug":"_1-2-redis\u96C6\u7FA4\u534F\u8BAE\u4E2D\u7684\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u89D2\u8272","link":"#_1-2-redis\u96C6\u7FA4\u534F\u8BAE\u4E2D\u7684\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u89D2\u8272","children":[]},{"level":3,"title":"1.3 \u5199\u5B89\u5168","slug":"_1-3-\u5199\u5B89\u5168","link":"#_1-3-\u5199\u5B89\u5168","children":[]},{"level":3,"title":"1.4 \u53EF\u7528\u6027(Availability)","slug":"_1-4-\u53EF\u7528\u6027-availability","link":"#_1-4-\u53EF\u7528\u6027-availability","children":[]},{"level":3,"title":"1.5 \u6027\u80FD(Performance)","slug":"_1-5-\u6027\u80FD-performance","link":"#_1-5-\u6027\u80FD-performance","children":[]},{"level":3,"title":"1.6 \u907F\u514D\u5408\u5E76(merge)\u64CD\u4F5C","slug":"_1-6-\u907F\u514D\u5408\u5E76-merge-\u64CD\u4F5C","link":"#_1-6-\u907F\u514D\u5408\u5E76-merge-\u64CD\u4F5C","children":[]}]},{"level":2,"title":"2. \u4E3B\u8981\u6A21\u5757\u4ECB\u7ECD","slug":"_2-\u4E3B\u8981\u6A21\u5757\u4ECB\u7ECD","link":"#_2-\u4E3B\u8981\u6A21\u5757\u4ECB\u7ECD","children":[{"level":3,"title":"2.1 \u54C8\u5E0C\u69FD(Hash Slot)","slug":"_2-1-\u54C8\u5E0C\u69FD-hash-slot","link":"#_2-1-\u54C8\u5E0C\u69FD-hash-slot","children":[]},{"level":3,"title":"2.2 Keys hash tags","slug":"_2-2-keys-hash-tags","link":"#_2-2-keys-hash-tags","children":[]},{"level":3,"title":"2.3 Cluster nodes\u5C5E\u6027","slug":"_2-3-cluster-nodes\u5C5E\u6027","link":"#_2-3-cluster-nodes\u5C5E\u6027","children":[]},{"level":3,"title":"2.4 Cluster\u603B\u7EBF","slug":"_2-4-cluster\u603B\u7EBF","link":"#_2-4-cluster\u603B\u7EBF","children":[]},{"level":3,"title":"2.5 \u96C6\u7FA4\u62D3\u6251","slug":"_2-5-\u96C6\u7FA4\u62D3\u6251","link":"#_2-5-\u96C6\u7FA4\u62D3\u6251","children":[]},{"level":3,"title":"2.6 \u8282\u70B9\u63E1\u624B","slug":"_2-6-\u8282\u70B9\u63E1\u624B","link":"#_2-6-\u8282\u70B9\u63E1\u624B","children":[]}]},{"level":2,"title":"3. \u8BF7\u6C42\u91CD\u5B9A\u5411","slug":"_3-\u8BF7\u6C42\u91CD\u5B9A\u5411","link":"#_3-\u8BF7\u6C42\u91CD\u5B9A\u5411","children":[{"level":3,"title":"3.1 Moved \u91CD\u5B9A\u5411","slug":"_3-1-moved-\u91CD\u5B9A\u5411","link":"#_3-1-moved-\u91CD\u5B9A\u5411","children":[]},{"level":3,"title":"3.2 ASK \u91CD\u5B9A\u5411","slug":"_3-2-ask-\u91CD\u5B9A\u5411","link":"#_3-2-ask-\u91CD\u5B9A\u5411","children":[]},{"level":3,"title":"3.3 smart\u5BA2\u6237\u7AEF","slug":"_3-3-smart\u5BA2\u6237\u7AEF","link":"#_3-3-smart\u5BA2\u6237\u7AEF","children":[]}]},{"level":2,"title":"4. \u72B6\u6001\u68C0\u6D4B\u53CA\u7EF4\u62A4","slug":"_4-\u72B6\u6001\u68C0\u6D4B\u53CA\u7EF4\u62A4","link":"#_4-\u72B6\u6001\u68C0\u6D4B\u53CA\u7EF4\u62A4","children":[{"level":3,"title":"4.1 Gossip\u534F\u8BAE","slug":"_4-1-gossip\u534F\u8BAE","link":"#_4-1-gossip\u534F\u8BAE","children":[]},{"level":3,"title":"4.2 \u901A\u8BAF\u72B6\u6001\u548C\u7EF4\u62A4","slug":"_4-2-\u901A\u8BAF\u72B6\u6001\u548C\u7EF4\u62A4","link":"#_4-2-\u901A\u8BAF\u72B6\u6001\u548C\u7EF4\u62A4","children":[]}]},{"level":2,"title":"5. \u6545\u969C\u6062\u590D\uFF08Failover\uFF09","slug":"_5-\u6545\u969C\u6062\u590D-failover","link":"#_5-\u6545\u969C\u6062\u590D-failover","children":[]},{"level":2,"title":"6. \u6269\u5BB9&\u7F29\u5BB9","slug":"_6-\u6269\u5BB9-\u7F29\u5BB9","link":"#_6-\u6269\u5BB9-\u7F29\u5BB9","children":[{"level":3,"title":"6.1 \u6269\u5BB9","slug":"_6-1-\u6269\u5BB9","link":"#_6-1-\u6269\u5BB9","children":[]},{"level":3,"title":"6.2 \u7F29\u5BB9","slug":"_6-2-\u7F29\u5BB9","link":"#_6-2-\u7F29\u5BB9","children":[]}]},{"level":2,"title":"7. \u66F4\u6DF1\u5165\u7406\u89E3","slug":"_7-\u66F4\u6DF1\u5165\u7406\u89E3","link":"#_7-\u66F4\u6DF1\u5165\u7406\u89E3","children":[{"level":3,"title":"7.1 \u4E3A\u4EC0\u4E48Redis Cluster\u7684Hash Slot \u662F16384\uFF1F","slug":"_7-1-\u4E3A\u4EC0\u4E48redis-cluster\u7684hash-slot-\u662F16384","link":"#_7-1-\u4E3A\u4EC0\u4E48redis-cluster\u7684hash-slot-\u662F16384","children":[]},{"level":3,"title":"7.2 \u4E3A\u4EC0\u4E48Redis Cluster\u4E2D\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u53D1\u5E03\u8BA2\u9605\u5462\uFF1F","slug":"_7-2-\u4E3A\u4EC0\u4E48redis-cluster\u4E2D\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u53D1\u5E03\u8BA2\u9605\u5462","link":"#_7-2-\u4E3A\u4EC0\u4E48redis-cluster\u4E2D\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u53D1\u5E03\u8BA2\u9605\u5462","children":[]}]},{"level":2,"title":"8. \u5176\u5B83\u5E38\u89C1\u65B9\u6848","slug":"_8-\u5176\u5B83\u5E38\u89C1\u65B9\u6848","link":"#_8-\u5176\u5B83\u5E38\u89C1\u65B9\u6848","children":[{"level":3,"title":"8.1 Redis Sentinel \u96C6\u7FA4 + Keepalived/Haproxy","slug":"_8-1-redis-sentinel-\u96C6\u7FA4-keepalived-haproxy","link":"#_8-1-redis-sentinel-\u96C6\u7FA4-keepalived-haproxy","children":[]},{"level":3,"title":"8.2 Twemproxy","slug":"_8-2-twemproxy","link":"#_8-2-twemproxy","children":[]},{"level":3,"title":"8.3 Codis","slug":"_8-3-codis","link":"#_8-3-codis","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1663590799000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":34.17,"words":10251},"filePathRelative":"db/redis/db-redis-x-cluster.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
