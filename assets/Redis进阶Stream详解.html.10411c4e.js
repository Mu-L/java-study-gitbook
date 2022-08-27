const e=JSON.parse('{"key":"v-582c9562","path":"/db/redis/advanced/Redis%E8%BF%9B%E9%98%B6Stream%E8%AF%A6%E8%A7%A3.html","title":"Redis\u8FDB\u9636-\u6570\u636E\u7C7B\u578B\uFF1AStream\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":20,"category":["\u6570\u636E\u5E93","\u7F13\u5B58"],"summary":"Redis\u8FDB\u9636-\u6570\u636E\u7C7B\u578B\uFF1AStream\u8BE6\u89E3 \\"Redis5.0 \u4E2D\u8FD8\u589E\u52A0\u4E86\u4E00\u4E2A\u6570\u636E\u7C7B\u578BStream\uFF0C\u5B83\u501F\u9274\u4E86Kafka\u7684\u8BBE\u8BA1\uFF0C\u662F\u4E00\u4E2A\u65B0\u7684\u5F3A\u5927\u7684\u652F\u6301\u591A\u64AD\u7684\u53EF\u6301\u4E45\u5316\u7684\u6D88\u606F\u961F\u5217\u3002\\" 1. \u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1Stream \\" Redis5.0 \u4E2D\u8FD8\u589E\u52A0\u4E86\u4E00\u4E2A\u6570\u636E\u7ED3\u6784Stream\uFF0C\u4ECE\u5B57\u9762\u4E0A\u770B\u662F\u6D41\u7C7B\u578B\uFF0C\u4F46\u5176\u5B9E\u4ECE\u529F\u80FD\u4E0A\u770B\uFF0C\u5E94\u8BE5\u662FRedis\u5BF9\u6D88\u606F\u961F\u5217\uFF08MQ\uFF0CMessage Que","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/advanced/Redis%E8%BF%9B%E9%98%B6Stream%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u8FDB\u9636-\u6570\u636E\u7C7B\u578B\uFF1AStream\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-10T14:25:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-10T14:25:06.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1Stream","slug":"_1-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1stream","children":[]},{"level":2,"title":"2. Stream\u8BE6\u89E3","slug":"_2-stream\u8BE6\u89E3","children":[{"level":3,"title":"2.1 Stream\u7684\u7ED3\u6784","slug":"_2-1-stream\u7684\u7ED3\u6784","children":[]},{"level":3,"title":"2.2 \u589E\u5220\u6539\u67E5","slug":"_2-2-\u589E\u5220\u6539\u67E5","children":[]},{"level":3,"title":"2.3 \u72EC\u7ACB\u6D88\u8D39","slug":"_2-3-\u72EC\u7ACB\u6D88\u8D39","children":[]},{"level":3,"title":"2.4 \u6D88\u8D39\u7EC4\u6D88\u8D39","slug":"_2-4-\u6D88\u8D39\u7EC4\u6D88\u8D39","children":[]},{"level":3,"title":"2.5 \u4FE1\u606F\u76D1\u63A7","slug":"_2-5-\u4FE1\u606F\u76D1\u63A7","children":[]}]},{"level":2,"title":"3. \u66F4\u6DF1\u5165\u7406\u89E3","slug":"_3-\u66F4\u6DF1\u5165\u7406\u89E3","children":[{"level":3,"title":"3.1 Stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F","slug":"_3-1-stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F","children":[]},{"level":3,"title":"3.2 \u6D88\u606FID\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898\uFF1F","slug":"_3-2-\u6D88\u606Fid\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898","children":[]},{"level":3,"title":"3.3 \u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898?","slug":"_3-3-\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898","children":[]},{"level":3,"title":"3.4 \u6D88\u8D39\u8005\u5F7B\u5E95\u5B95\u673A\u540E\u5982\u4F55\u8F6C\u79FB\u7ED9\u5176\u5B83\u6D88\u8D39\u8005\u5904\u7406\uFF1F","slug":"_3-4-\u6D88\u8D39\u8005\u5F7B\u5E95\u5B95\u673A\u540E\u5982\u4F55\u8F6C\u79FB\u7ED9\u5176\u5B83\u6D88\u8D39\u8005\u5904\u7406","children":[]},{"level":3,"title":"3.5 \u574F\u6D88\u606F\u95EE\u9898\uFF0CDead Letter\uFF0C\u6B7B\u4FE1\u95EE\u9898","slug":"_3-5-\u574F\u6D88\u606F\u95EE\u9898-dead-letter-\u6B7B\u4FE1\u95EE\u9898","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1660045757000,"updatedTime":1660141506000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":16.86,"words":5059},"filePathRelative":"db/redis/advanced/Redis\u8FDB\u9636Stream\u8BE6\u89E3.md","localizedDate":"2022\u5E748\u67089\u65E5"}');export{e as data};
