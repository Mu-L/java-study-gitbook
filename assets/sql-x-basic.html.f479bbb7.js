const e=JSON.parse('{"key":"v-422f4f78","path":"/db/sql/sql-x-basic.html","title":"SQL\u8BED\u6CD5\u57FA\u7840","lang":"zh-CN","frontmatter":{"order":10,"category":["\u6570\u636E\u5E93"],"summary":"SQL\u8BED\u6CD5\u57FA\u7840 1. \u57FA\u7840 \u6A21\u5F0F\u5B9A\u4E49\u4E86\u6570\u636E\u5982\u4F55\u5B58\u50A8\u3001\u5B58\u50A8\u4EC0\u4E48\u6837\u7684\u6570\u636E\u4EE5\u53CA\u6570\u636E\u5982\u4F55\u5206\u89E3\u7B49\u4FE1\u606F\uFF0C\u6570\u636E\u5E93\u548C\u8868\u90FD\u6709\u6A21\u5F0F\u3002 \u4E3B\u952E\u7684\u503C\u4E0D\u5141\u8BB8\u4FEE\u6539\uFF0C\u4E5F\u4E0D\u5141\u8BB8\u590D\u7528(\u4E0D\u80FD\u4F7F\u7528\u5DF2\u7ECF\u5220\u9664\u7684\u4E3B\u952E\u503C\u8D4B\u7ED9\u65B0\u6570\u636E\u884C\u7684\u4E3B\u952E)\u3002 SQL(Structured Query Language)\uFF0C\u6807\u51C6 SQL \u7531 ANSI \u6807\u51C6\u59D4\u5458\u4F1A\u7BA1\u7406\uFF0C\u4ECE\u800C\u79F0\u4E3A ANSI SQL\u3002\u5404\u4E2A DBMS \u90FD\u6709\u81EA\u5DF1\u7684\u5B9E\u73B0","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/sql/sql-x-basic.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"SQL\u8BED\u6CD5\u57FA\u7840"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u57FA\u7840","slug":"_1-\u57FA\u7840","children":[{"level":3,"title":"1.1 SQL \u652F\u6301\u4EE5\u4E0B\u4E09\u79CD\u6CE8\u91CA:","slug":"_1-1-sql-\u652F\u6301\u4EE5\u4E0B\u4E09\u79CD\u6CE8\u91CA","children":[]},{"level":3,"title":"1.2 \u6570\u636E\u5E93\u521B\u5EFA\u4E0E\u4F7F\u7528:","slug":"_1-2-\u6570\u636E\u5E93\u521B\u5EFA\u4E0E\u4F7F\u7528","children":[]}]},{"level":2,"title":"2. \u521B\u5EFA\u8868","slug":"_2-\u521B\u5EFA\u8868","children":[]},{"level":2,"title":"3. \u4FEE\u6539\u8868","slug":"_3-\u4FEE\u6539\u8868","children":[]},{"level":2,"title":"4. \u63D2\u5165","slug":"_4-\u63D2\u5165","children":[]},{"level":2,"title":"5. \u66F4\u65B0","slug":"_5-\u66F4\u65B0","children":[]},{"level":2,"title":"6. \u5220\u9664","slug":"_6-\u5220\u9664","children":[]},{"level":2,"title":"7. \u67E5\u8BE2","slug":"_7-\u67E5\u8BE2","children":[{"level":3,"title":"7.1 DISTINCT","slug":"_7-1-distinct","children":[]},{"level":3,"title":"7.2 LIMIT","slug":"_7-2-limit","children":[]}]},{"level":2,"title":"8 \u6392\u5E8F","slug":"_8-\u6392\u5E8F","children":[]},{"level":2,"title":"9. \u8FC7\u6EE4","slug":"_9-\u8FC7\u6EE4","children":[]},{"level":2,"title":"10. \u901A\u914D\u7B26","slug":"_10-\u901A\u914D\u7B26","children":[]},{"level":2,"title":"11. \u8BA1\u7B97\u5B57\u6BB5","slug":"_11-\u8BA1\u7B97\u5B57\u6BB5","children":[]},{"level":2,"title":"12. \u51FD\u6570","slug":"_12-\u51FD\u6570","children":[{"level":3,"title":"12.1 \u6C47\u603B","slug":"_12-1-\u6C47\u603B","children":[]},{"level":3,"title":"12.2 \u6587\u672C\u5904\u7406","slug":"_12-2-\u6587\u672C\u5904\u7406","children":[]},{"level":3,"title":"12.3 \u65E5\u671F\u548C\u65F6\u95F4\u5904\u7406","slug":"_12-3-\u65E5\u671F\u548C\u65F6\u95F4\u5904\u7406","children":[]},{"level":3,"title":"12.4 \u6570\u503C\u5904\u7406","slug":"_12-4-\u6570\u503C\u5904\u7406","children":[]}]},{"level":2,"title":"13. \u5206\u7EC4","slug":"_13-\u5206\u7EC4","children":[]},{"level":2,"title":"14. \u5B50\u67E5\u8BE2","slug":"_14-\u5B50\u67E5\u8BE2","children":[]},{"level":2,"title":"15. \u8FDE\u63A5","slug":"_15-\u8FDE\u63A5","children":[{"level":3,"title":"15.1 \u5185\u8FDE\u63A5","slug":"_15-1-\u5185\u8FDE\u63A5","children":[]},{"level":3,"title":"15.2 \u81EA\u8FDE\u63A5","slug":"_15-2-\u81EA\u8FDE\u63A5","children":[]},{"level":3,"title":"15.3 \u81EA\u7136\u8FDE\u63A5","slug":"_15-3-\u81EA\u7136\u8FDE\u63A5","children":[]},{"level":3,"title":"15.4 \u5916\u8FDE\u63A5","slug":"_15-4-\u5916\u8FDE\u63A5","children":[]}]},{"level":2,"title":"16. \u7EC4\u5408\u67E5\u8BE2","slug":"_16-\u7EC4\u5408\u67E5\u8BE2","children":[]},{"level":2,"title":"17. \u89C6\u56FE","slug":"_17-\u89C6\u56FE","children":[]},{"level":2,"title":"18. \u5B58\u50A8\u8FC7\u7A0B","slug":"_18-\u5B58\u50A8\u8FC7\u7A0B","children":[]},{"level":2,"title":"19. \u6E38\u6807","slug":"_19-\u6E38\u6807","children":[]},{"level":2,"title":"20. \u89E6\u53D1\u5668","slug":"_20-\u89E6\u53D1\u5668","children":[]},{"level":2,"title":"21. \u4E8B\u52A1\u7BA1\u7406","slug":"_21-\u4E8B\u52A1\u7BA1\u7406","children":[]},{"level":2,"title":"22. \u5B57\u7B26\u96C6","slug":"_22-\u5B57\u7B26\u96C6","children":[]},{"level":2,"title":"23. \u6743\u9650\u7BA1\u7406","slug":"_23-\u6743\u9650\u7BA1\u7406","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":13.34,"words":4003},"filePathRelative":"db/sql/sql-x-basic.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
