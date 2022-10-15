const e=JSON.parse('{"key":"v-011213f6","path":"/db/es/elasticsearch-x-index-template.html","title":"ES\u8BE6\u89E3 - \u7D22\u5F15\uFF1A\u7D22\u5F15\u6A21\u677F(Index Template)\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":70,"category":["ElasticSearch"],"summary":"ES\u8BE6\u89E3 - \u7D22\u5F15\uFF1A\u7D22\u5F15\u6A21\u677F(Index Template)\u8BE6\u89E3 \\"\u524D\u6587\u4ECB\u7ECD\u4E86\u7D22\u5F15\u7684\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u7279\u522B\u662F\u624B\u52A8\u521B\u5EFA\u7D22\u5F15\uFF0C\u4F46\u662F\u6279\u91CF\u548C\u811A\u672C\u5316\u5FC5\u7136\u9700\u8981\u63D0\u4F9B\u4E00\u79CD\u6A21\u677F\u65B9\u5F0F\u5FEB\u901F\u6784\u5EFA\u548C\u7BA1\u7406\u7D22\u5F15\uFF0C\u8FD9\u5C31\u662F\u672C\u6587\u8981\u4ECB\u7ECD\u7684\u7D22\u5F15\u6A21\u677F(Index Template)\uFF0C\u5B83\u662F\u4E00\u79CD\u544A\u8BC9Elasticsearch\u5728\u521B\u5EFA\u7D22\u5F15\u65F6\u5982\u4F55\u914D\u7F6E\u7D22\u5F15\u7684\u65B9\u6CD5\u3002\u4E3A\u4E86\u66F4\u597D\u7684\u590D\u7528\u6027\uFF0C\u57287.8\u4E2D\u8FD8\u5F15\u5165\u4E86\u7EC4\u4EF6\u6A21\u677F\u3002\\" 1.1","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/es/elasticsearch-x-index-template.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ES\u8BE6\u89E3 - \u7D22\u5F15\uFF1A\u7D22\u5F15\u6A21\u677F(Index Template)\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-15T14:22:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-15T14:22:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.1. \u7D22\u5F15\u6A21\u677F","slug":"_1-1-\u7D22\u5F15\u6A21\u677F","link":"#_1-1-\u7D22\u5F15\u6A21\u677F","children":[{"level":3,"title":"1.2. \u6A21\u677F\u7C7B\u578B","slug":"_1-2-\u6A21\u677F\u7C7B\u578B","link":"#_1-2-\u6A21\u677F\u7C7B\u578B","children":[]},{"level":3,"title":"1.3. \u7D22\u5F15\u6A21\u677F\u4E2D\u7684\u4F18\u5148\u7EA7","slug":"_1-3-\u7D22\u5F15\u6A21\u677F\u4E2D\u7684\u4F18\u5148\u7EA7","link":"#_1-3-\u7D22\u5F15\u6A21\u677F\u4E2D\u7684\u4F18\u5148\u7EA7","children":[]},{"level":3,"title":"1.4. \u5185\u7F6E\u7D22\u5F15\u6A21\u677F","slug":"_1-4-\u5185\u7F6E\u7D22\u5F15\u6A21\u677F","link":"#_1-4-\u5185\u7F6E\u7D22\u5F15\u6A21\u677F","children":[]},{"level":3,"title":"1.5 \u6848\u4F8B","slug":"_1-5-\u6848\u4F8B","link":"#_1-5-\u6848\u4F8B","children":[]}]},{"level":2,"title":"2. \u6A21\u62DF\u591A\u7EC4\u4EF6\u6A21\u677F","slug":"_2-\u6A21\u62DF\u591A\u7EC4\u4EF6\u6A21\u677F","link":"#_2-\u6A21\u62DF\u591A\u7EC4\u4EF6\u6A21\u677F","children":[{"level":3,"title":"2.1 \u6A21\u62DF\u67D0\u4E2A\u7D22\u5F15\u7ED3\u679C","slug":"_2-1-\u6A21\u62DF\u67D0\u4E2A\u7D22\u5F15\u7ED3\u679C","link":"#_2-1-\u6A21\u62DF\u67D0\u4E2A\u7D22\u5F15\u7ED3\u679C","children":[]},{"level":3,"title":"2.2 \u6A21\u62DF\u7EC4\u4EF6\u6A21\u677F\u7ED3\u679C","slug":"_2-2-\u6A21\u62DF\u7EC4\u4EF6\u6A21\u677F\u7ED3\u679C","link":"#_2-2-\u6A21\u62DF\u7EC4\u4EF6\u6A21\u677F\u7ED3\u679C","children":[]},{"level":3,"title":"2.3 \u6A21\u62DF\u7EC4\u4EF6\u6A21\u677F\u548C\u81EA\u8EAB\u6A21\u677F\u7ED3\u5408\u540E\u7684\u7ED3\u679C","slug":"_2-3-\u6A21\u62DF\u7EC4\u4EF6\u6A21\u677F\u548C\u81EA\u8EAB\u6A21\u677F\u7ED3\u5408\u540E\u7684\u7ED3\u679C","link":"#_2-3-\u6A21\u62DF\u7EC4\u4EF6\u6A21\u677F\u548C\u81EA\u8EAB\u6A21\u677F\u7ED3\u5408\u540E\u7684\u7ED3\u679C","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1665843748000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":3.65,"words":1094},"filePathRelative":"db/es/elasticsearch-x-index-template.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};