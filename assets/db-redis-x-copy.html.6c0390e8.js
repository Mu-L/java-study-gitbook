const e=JSON.parse('{"key":"v-5f807a7a","path":"/db/redis/db-redis-x-copy.html","title":"Redis\u9AD8\u53EF\u7528\u4E3B\u4ECE\u590D\u5236\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":10,"category":["\u6570\u636E\u5E93","\u7F13\u5B58"],"summary":"Redis\u9AD8\u53EF\u7528\u4E3B\u4ECE\u590D\u5236\u8BE6\u89E3 \\"\u6211\u4EEC\u77E5\u9053\u8981\u907F\u514D\u5355\u70B9\u6545\u969C\uFF0C\u5373\u4FDD\u8BC1\u9AD8\u53EF\u7528\uFF0C\u4FBF\u9700\u8981\u5197\u4F59\uFF08\u526F\u672C\uFF09\u65B9\u5F0F\u63D0\u4F9B\u96C6\u7FA4\u670D\u52A1\u3002\u800CRedis \u63D0\u4F9B\u4E86\u4E3B\u4ECE\u5E93\u6A21\u5F0F\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u526F\u672C\u7684\u4E00\u81F4\uFF0C\u4E3B\u4ECE\u5E93\u4E4B\u95F4\u91C7\u7528\u7684\u662F\u8BFB\u5199\u5206\u79BB\u7684\u65B9\u5F0F\u3002\u672C\u6587\u4E3B\u8981\u9610\u8FF0Redis\u7684\u4E3B\u4ECE\u590D\u5236\u3002\\" 1. \u4E3B\u4ECE\u590D\u5236\u6982\u8FF0 \\" \u4E3B\u4ECE\u590D\u5236\uFF0C\u662F\u6307\u5C06\u4E00\u53F0Redis\u670D\u52A1\u5668\u7684\u6570\u636E\uFF0C\u590D\u5236\u5230\u5176\u4ED6\u7684Redis\u670D\u52A1\u5668\u3002\u524D\u8005\u79F0\u4E3A\u4E3B\u8282\u70B9(master)","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/db-redis-x-copy.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u9AD8\u53EF\u7528\u4E3B\u4ECE\u590D\u5236\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E3B\u4ECE\u590D\u5236\u6982\u8FF0","slug":"_1-\u4E3B\u4ECE\u590D\u5236\u6982\u8FF0","children":[]},{"level":2,"title":"2. \u4E3B\u4ECE\u590D\u5236\u539F\u7406","slug":"_2-\u4E3B\u4ECE\u590D\u5236\u539F\u7406","children":[{"level":3,"title":"2.1 \u5168\u91CF\u590D\u5236","slug":"_2-1-\u5168\u91CF\u590D\u5236","children":[]},{"level":3,"title":"2.2 \u589E\u91CF\u590D\u5236","slug":"_2-2-\u589E\u91CF\u590D\u5236","children":[]},{"level":3,"title":"2.3 \u547D\u4EE4\u4F20\u64AD","slug":"_2-3-\u547D\u4EE4\u4F20\u64AD","children":[]}]},{"level":2,"title":"3. \u66F4\u6DF1\u5165\u7406\u89E3","slug":"_3-\u66F4\u6DF1\u5165\u7406\u89E3","children":[{"level":3,"title":"3.1 \u5F53\u4E3B\u670D\u52A1\u5668\u4E0D\u8FDB\u884C\u6301\u4E45\u5316\u65F6\u590D\u5236\u7684\u5B89\u5168\u6027","slug":"_3-1-\u5F53\u4E3B\u670D\u52A1\u5668\u4E0D\u8FDB\u884C\u6301\u4E45\u5316\u65F6\u590D\u5236\u7684\u5B89\u5168\u6027","children":[]},{"level":3,"title":"3.2 \u4E3A\u4EC0\u4E48\u4E3B\u4ECE\u5168\u91CF\u590D\u5236\u4F7F\u7528RDB\u800C\u4E0D\u4F7F\u7528AOF\uFF1F","slug":"_3-2-\u4E3A\u4EC0\u4E48\u4E3B\u4ECE\u5168\u91CF\u590D\u5236\u4F7F\u7528rdb\u800C\u4E0D\u4F7F\u7528aof","children":[]},{"level":3,"title":"3.3 \u4E3A\u4EC0\u4E48\u8FD8\u6709\u65E0\u78C1\u76D8\u590D\u5236\u6A21\u5F0F\uFF1F","slug":"_3-3-\u4E3A\u4EC0\u4E48\u8FD8\u6709\u65E0\u78C1\u76D8\u590D\u5236\u6A21\u5F0F","children":[]},{"level":3,"title":"3.4 \u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u6709\u4ECE\u5E93\u7684\u4ECE\u5E93\u7684\u8BBE\u8BA1\uFF1F","slug":"_3-4-\u4E3A\u4EC0\u4E48\u8FD8\u4F1A\u6709\u4ECE\u5E93\u7684\u4ECE\u5E93\u7684\u8BBE\u8BA1","children":[]}]},{"level":2,"title":"4. \u8BFB\u5199\u5206\u79BB\u53CA\u5176\u4E2D\u7684\u95EE\u9898","slug":"_4-\u8BFB\u5199\u5206\u79BB\u53CA\u5176\u4E2D\u7684\u95EE\u9898","children":[{"level":3,"title":"4.1 \u5EF6\u8FDF\u4E0E\u4E0D\u4E00\u81F4\u95EE\u9898","slug":"_4-1-\u5EF6\u8FDF\u4E0E\u4E0D\u4E00\u81F4\u95EE\u9898","children":[]},{"level":3,"title":"4.2 \u6570\u636E\u8FC7\u671F\u95EE\u9898\uFF08\u8FC7\u671F\u952E\u7684\u5220\u9664\u7B56\u7565\uFF09","slug":"_4-2-\u6570\u636E\u8FC7\u671F\u95EE\u9898-\u8FC7\u671F\u952E\u7684\u5220\u9664\u7B56\u7565","children":[]},{"level":3,"title":"4.3 \u6545\u969C\u5207\u6362\u95EE\u9898","slug":"_4-3-\u6545\u969C\u5207\u6362\u95EE\u9898","children":[]}]},{"level":2,"title":"5. \u603B\u7ED3","slug":"_5-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":17.86,"words":5358},"filePathRelative":"db/redis/db-redis-x-copy.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
