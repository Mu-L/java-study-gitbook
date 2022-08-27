const e=JSON.parse('{"key":"v-3ebaed07","path":"/db/Elasticsearch/ES%E8%AF%A6%E8%A7%A3-%E6%9F%A5%E8%AF%A2%E5%92%8C%E8%81%9A%E5%90%88%E7%9A%84%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8.html","title":"ES\u8BE6\u89E3 - \u5165\u95E8\uFF1A\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528","lang":"zh-CN","frontmatter":{"order":40,"summary":"ES\u8BE6\u89E3 - \u5165\u95E8\uFF1A\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528 \\"\u5B89\u88C5\u5B8CElasticSearch \u548C Kibana\u540E\uFF0C\u4E3A\u4E86\u5FEB\u901F\u4E0A\u624B\uFF0C\u6211\u4EEC\u901A\u8FC7\u5B98\u7F51GitHub\u63D0\u4F9B\u7684\u4E00\u4E2A\u6570\u636E\u8FDB\u884C\u5165\u95E8\u5B66\u4E60\uFF0C\u4E3B\u8981\u5305\u62EC\u67E5\u8BE2\u6570\u636E\u548C\u805A\u5408\u6570\u636E\u3002\\" 1. \u5165\u95E8\uFF1A\u4ECE\u7D22\u5F15\u6587\u6863\u5F00\u59CB \u7D22\u5F15\u4E00\u4E2A\u6587\u6863; \u4E3A\u4E86\u65B9\u4FBF\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u4F7F\u7528kibana\u7684dev tool\u6765\u8FDB\u884C\u5B66\u4E60\u6D4B\u8BD5\uFF1A \u67E5\u8BE2\u521A\u624D\u63D2\u5165\u7684\u6587\u6863 2. \u5B66\u4E60\u51C6\u5907\uFF1A\u6279\u91CF\u7D22\u5F15\u6587\u6863 ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/Elasticsearch/ES%E8%AF%A6%E8%A7%A3-%E6%9F%A5%E8%AF%A2%E5%92%8C%E8%81%9A%E5%90%88%E7%9A%84%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ES\u8BE6\u89E3 - \u5165\u95E8\uFF1A\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-10T15:03:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-10T15:03:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5165\u95E8\uFF1A\u4ECE\u7D22\u5F15\u6587\u6863\u5F00\u59CB","slug":"_1-\u5165\u95E8-\u4ECE\u7D22\u5F15\u6587\u6863\u5F00\u59CB","children":[]},{"level":2,"title":"2. \u5B66\u4E60\u51C6\u5907\uFF1A\u6279\u91CF\u7D22\u5F15\u6587\u6863","slug":"_2-\u5B66\u4E60\u51C6\u5907-\u6279\u91CF\u7D22\u5F15\u6587\u6863","children":[]},{"level":2,"title":"3. \u67E5\u8BE2\u6570\u636E","slug":"_3-\u67E5\u8BE2\u6570\u636E","children":[{"level":3,"title":"3.1 \u67E5\u8BE2\u6240\u6709","slug":"_3-1-\u67E5\u8BE2\u6240\u6709","children":[]},{"level":3,"title":"3.2 \u5206\u9875\u67E5\u8BE2(from+size)","slug":"_3-2-\u5206\u9875\u67E5\u8BE2-from-size","children":[]},{"level":3,"title":"3.3 \u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2\uFF1Amatch","slug":"_3-3-\u6307\u5B9A\u5B57\u6BB5\u67E5\u8BE2-match","children":[]},{"level":3,"title":"3.4 \u67E5\u8BE2\u6BB5\u843D\u5339\u914D\uFF1Amatch_phrase","slug":"_3-4-\u67E5\u8BE2\u6BB5\u843D\u5339\u914D-match-phrase","children":[]},{"level":3,"title":"3.5 \u591A\u6761\u4EF6\u67E5\u8BE2: bool","slug":"_3-5-\u591A\u6761\u4EF6\u67E5\u8BE2-bool","children":[]},{"level":3,"title":"3.6 \u67E5\u8BE2\u6761\u4EF6\uFF1Aquery or filter","slug":"_3-6-\u67E5\u8BE2\u6761\u4EF6-query-or-filter","children":[]}]},{"level":2,"title":"4. \u805A\u5408\u67E5\u8BE2\uFF1AAggregation","slug":"_4-\u805A\u5408\u67E5\u8BE2-aggregation","children":[{"level":3,"title":"4.1 \u7B80\u5355\u805A\u5408","slug":"_4-1-\u7B80\u5355\u805A\u5408","children":[]},{"level":3,"title":"4.2 \u5D4C\u5957\u805A\u5408","slug":"_4-2-\u5D4C\u5957\u805A\u5408","children":[]},{"level":3,"title":"4.3 \u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F","slug":"_4-3-\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1660045757000,"updatedTime":1660143826000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":4.91,"words":1473},"filePathRelative":"db/Elasticsearch/ES\u8BE6\u89E3-\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528.md","localizedDate":"2022\u5E748\u67089\u65E5"}');export{e as data};
