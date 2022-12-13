const e=JSON.parse('{"key":"v-854c7652","path":"/dependencies/mybatis-plus/mybatis-plus-x-mysql.html","title":"SpringBoot\u96C6\u6210MySQL MyBatis-Plus\u65B9\u5F0F","lang":"zh-CN","frontmatter":{"summary":"SpringBoot\u96C6\u6210MySQL MyBatis-Plus\u65B9\u5F0F \\"MyBatis-Plus\uFF08\u7B80\u79F0 MP\uFF09\u662F\u4E00\u4E2A MyBatis\u7684\u589E\u5F3A\u5DE5\u5177\uFF0C\u5728 MyBatis \u7684\u57FA\u7840\u4E0A\u53EA\u505A\u589E\u5F3A\u4E0D\u505A\u6539\u53D8\uFF0C\u4E3A\u7B80\u5316\u5F00\u53D1\u3001\u63D0\u9AD8\u6548\u7387\u800C\u751F\u3002MyBatis-Plus\u5728\u56FD\u5185\u4E5F\u6709\u5F88\u591A\u7684\u7528\u6237\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDMyBatis-Plus\u548CSpringBoot\u7684\u96C6\u6210\u3002\\" 1. \u77E5\u8BC6\u51C6\u5907 \\" MyBati","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/mybatis-plus/mybatis-plus-x-mysql.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"SpringBoot\u96C6\u6210MySQL MyBatis-Plus\u65B9\u5F0F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-06T16:20:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-06T16:20:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u77E5\u8BC6\u51C6\u5907","slug":"_1-\u77E5\u8BC6\u51C6\u5907","link":"#_1-\u77E5\u8BC6\u51C6\u5907","children":[{"level":3,"title":"1.1 \u4E3A\u4EC0\u4E48\u4F1A\u8BDE\u751FMyBatis-Plus\uFF1F","slug":"_1-1-\u4E3A\u4EC0\u4E48\u4F1A\u8BDE\u751Fmybatis-plus","link":"#_1-1-\u4E3A\u4EC0\u4E48\u4F1A\u8BDE\u751Fmybatis-plus","children":[]},{"level":3,"title":"1.2 \u652F\u6301\u6570\u636E\u5E93","slug":"_1-2-\u652F\u6301\u6570\u636E\u5E93","link":"#_1-2-\u652F\u6301\u6570\u636E\u5E93","children":[]},{"level":3,"title":"1.3 \u6574\u4F53\u67B6\u6784","slug":"_1-3-\u6574\u4F53\u67B6\u6784","link":"#_1-3-\u6574\u4F53\u67B6\u6784","children":[]}]},{"level":2,"title":"2. \u7B80\u5355\u793A\u4F8B","slug":"_2-\u7B80\u5355\u793A\u4F8B","link":"#_2-\u7B80\u5355\u793A\u4F8B","children":[{"level":3,"title":"2.1 \u51C6\u5907DB\u548C\u4F9D\u8D56\u914D\u7F6E","slug":"_2-1-\u51C6\u5907db\u548C\u4F9D\u8D56\u914D\u7F6E","link":"#_2-1-\u51C6\u5907db\u548C\u4F9D\u8D56\u914D\u7F6E","children":[]},{"level":3,"title":"2.2 \u5B9A\u4E49dao","slug":"_2-2-\u5B9A\u4E49dao","link":"#_2-2-\u5B9A\u4E49dao","children":[]},{"level":3,"title":"2.3 \u5B9A\u4E49Service\u63A5\u53E3\u548C\u5B9E\u73B0\u7C7B","slug":"_2-3-\u5B9A\u4E49service\u63A5\u53E3\u548C\u5B9E\u73B0\u7C7B","link":"#_2-3-\u5B9A\u4E49service\u63A5\u53E3\u548C\u5B9E\u73B0\u7C7B","children":[]},{"level":3,"title":"2.4 controller","slug":"_2-4-controller","link":"#_2-4-controller","children":[]},{"level":3,"title":"2.5 \u5206\u9875\u914D\u7F6E","slug":"_2-5-\u5206\u9875\u914D\u7F6E","link":"#_2-5-\u5206\u9875\u914D\u7F6E","children":[]}]},{"level":2,"title":"3. \u8FDB\u4E00\u6B65\u7406\u89E3","slug":"_3-\u8FDB\u4E00\u6B65\u7406\u89E3","link":"#_3-\u8FDB\u4E00\u6B65\u7406\u89E3","children":[{"level":3,"title":"3.1 \u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5","slug":"_3-1-\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5","link":"#_3-1-\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5","children":[]},{"level":3,"title":"3.2 \u9664\u4E86\u5206\u9875\u63D2\u4EF6\u4E4B\u5916\u8FD8\u63D0\u4F9B\u4E86\u54EA\u4E9B\u63D2\u4EF6\uFF1F","slug":"_3-2-\u9664\u4E86\u5206\u9875\u63D2\u4EF6\u4E4B\u5916\u8FD8\u63D0\u4F9B\u4E86\u54EA\u4E9B\u63D2\u4EF6","link":"#_3-2-\u9664\u4E86\u5206\u9875\u63D2\u4EF6\u4E4B\u5916\u8FD8\u63D0\u4F9B\u4E86\u54EA\u4E9B\u63D2\u4EF6","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1670343656000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":8.29,"words":2487},"filePathRelative":"dependencies/mybatis-plus/mybatis-plus-x-mysql.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};