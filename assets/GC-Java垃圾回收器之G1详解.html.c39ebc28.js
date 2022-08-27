const e=JSON.parse('{"key":"v-c632f114","path":"/java/jvm/GC-Java%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8%E4%B9%8BG1%E8%AF%A6%E8%A7%A3.html","title":"GC - Java \u5783\u573E\u56DE\u6536\u5668\u4E4BG1\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":120,"category":["Java"],"summary":"GC - Java \u5783\u573E\u56DE\u6536\u5668\u4E4BG1\u8BE6\u89E3 1. \u6982\u8FF0 G1\u5783\u573E\u56DE\u6536\u5668\u662F\u5728Java7 update 4\u4E4B\u540E\u5F15\u5165\u7684\u4E00\u4E2A\u65B0\u7684\u5783\u573E\u56DE\u6536\u5668\u3002G1\u662F\u4E00\u4E2A\u5206\u4EE3\u7684\uFF0C\u589E\u91CF\u7684\uFF0C\u5E76\u884C\u4E0E\u5E76\u53D1\u7684\u6807\u8BB0-\u590D\u5236\u5783\u573E\u56DE\u6536\u5668\u3002\u5B83\u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u4E3A\u4E86\u9002\u5E94\u73B0\u5728\u4E0D\u65AD\u6269\u5927\u7684\u5185\u5B58\u548C\u4E0D\u65AD\u589E\u52A0\u7684\u5904\u7406\u5668\u6570\u91CF\uFF0C\u8FDB\u4E00\u6B65\u964D\u4F4E\u6682\u505C\u65F6\u95F4\uFF08pause time\uFF09\uFF0C\u540C\u65F6\u517C\u987E\u826F\u597D\u7684\u541E\u5410\u91CF\u3002G1\u56DE\u6536\u5668\u548CCMS\u6BD4\u8D77\u6765\uFF0C\u6709\u4EE5\u4E0B\u4E0D\u540C\uFF1A ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/jvm/GC-Java%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E5%99%A8%E4%B9%8BG1%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"GC - Java \u5783\u573E\u56DE\u6536\u5668\u4E4BG1\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-24T13:07:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-08-24T13:07:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6982\u8FF0","slug":"_1-\u6982\u8FF0","children":[]},{"level":2,"title":"2. G1\u7684\u5185\u5B58\u6A21\u578B","slug":"_2-g1\u7684\u5185\u5B58\u6A21\u578B","children":[{"level":3,"title":"2.1 \u5206\u533A\u6982\u5FF5","slug":"_2-1-\u5206\u533A\u6982\u5FF5","children":[]},{"level":3,"title":"2.2 \u5206\u4EE3\u6A21\u578B","slug":"_2-2-\u5206\u4EE3\u6A21\u578B","children":[]},{"level":3,"title":"2.3 \u5206\u533A\u6A21\u578B","slug":"_2-3-\u5206\u533A\u6A21\u578B","children":[]},{"level":3,"title":"2.4 \u6536\u96C6\u96C6\u5408 (CSet)","slug":"_2-4-\u6536\u96C6\u96C6\u5408-cset","children":[]}]},{"level":2,"title":"3. G1\u7684\u6D3B\u52A8\u5468\u671F","slug":"_3-g1\u7684\u6D3B\u52A8\u5468\u671F","children":[{"level":3,"title":"3.1 G1\u5783\u573E\u6536\u96C6\u6D3B\u52A8\u6C47\u603B","slug":"_3-1-g1\u5783\u573E\u6536\u96C6\u6D3B\u52A8\u6C47\u603B","children":[]},{"level":3,"title":"3.2 RSet\u7684\u7EF4\u62A4","slug":"_3-2-rset\u7684\u7EF4\u62A4","children":[]},{"level":3,"title":"3.3 \u5E76\u53D1\u6807\u8BB0\u5468\u671F Concurrent Marking Cycle","slug":"_3-3-\u5E76\u53D1\u6807\u8BB0\u5468\u671F-concurrent-marking-cycle","children":[]},{"level":3,"title":"3.4 \u5E74\u8F7B\u4EE3\u6536\u96C6/\u6DF7\u5408\u6536\u96C6\u5468\u671F","slug":"_3-4-\u5E74\u8F7B\u4EE3\u6536\u96C6-\u6DF7\u5408\u6536\u96C6\u5468\u671F","children":[]},{"level":3,"title":"3.5 \u5E76\u53D1\u6807\u8BB0\u5468\u671F\u540E\u7684\u5E74\u8F7B\u4EE3\u6536\u96C6 Young Collection Following Concurrent Marking Cycle","slug":"_3-5-\u5E76\u53D1\u6807\u8BB0\u5468\u671F\u540E\u7684\u5E74\u8F7B\u4EE3\u6536\u96C6-young-collection-following-concurrent-marking-cycle","children":[]}]},{"level":2,"title":"4. \u603B\u7ED3","slug":"_4-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1661301696000,"updatedTime":1661346446000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":32.84,"words":9851},"filePathRelative":"java/jvm/GC-Java\u5783\u573E\u56DE\u6536\u5668\u4E4BG1\u8BE6\u89E3.md","localizedDate":"2022\u5E748\u670824\u65E5"}');export{e as data};
