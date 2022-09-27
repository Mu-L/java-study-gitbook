const e=JSON.parse('{"key":"v-4fcc87c6","path":"/dependencies/spring/spring-x-framework-aop.html","title":"Spring\u57FA\u7840 - Spring\u6838\u5FC3\u4E4B\u9762\u5411\u5207\u9762\u7F16\u7A0B(AOP)","lang":"zh-CN","frontmatter":{"order":40,"category":["Spring"],"summary":"Spring\u57FA\u7840 - Spring\u6838\u5FC3\u4E4B\u9762\u5411\u5207\u9762\u7F16\u7A0B(AOP) \\"\u5728Spring\u57FA\u7840 - Spring\u7B80\u5355\u4F8B\u5B50\u5F15\u5165Spring\u7684\u6838\u5FC3\u4E2D\u5411\u4F60\u5C55\u793A\u4E86AOP\u7684\u57FA\u7840\u542B\u4E49\uFF0C\u540C\u65F6\u4EE5\u6B64\u53D1\u6563\u4E86\u4E00\u4E9BAOP\u76F8\u5173\u77E5\u8BC6\u70B9; \u672C\u8282\u5C06\u5728\u6B64\u57FA\u7840\u4E0A\u8FDB\u4E00\u6B65\u89E3\u8BFBAOP\u7684\u542B\u4E49\u4EE5\u53CAAOP\u7684\u4F7F\u7528\u65B9\u5F0F\u3002\\" 1. \u5F15\u5165 \\" \u6211\u4EEC\u5728Spring\u57FA\u7840 - Spring\u7B80\u5355\u4F8B\u5B50\u5F15\u5165Spring\u7684\u6838\u5FC3\u4E2D\u5411\u4F60\u5C55\u793A","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/spring/spring-x-framework-aop.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Spring\u57FA\u7840 - Spring\u6838\u5FC3\u4E4B\u9762\u5411\u5207\u9762\u7F16\u7A0B(AOP)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-27T15:27:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-27T15:27:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5F15\u5165","slug":"_1-\u5F15\u5165","link":"#_1-\u5F15\u5165","children":[]},{"level":2,"title":"2. Spring AOP \u7684\u5B9E\u73B0\u539F\u7406","slug":"_2-spring-aop-\u7684\u5B9E\u73B0\u539F\u7406","link":"#_2-spring-aop-\u7684\u5B9E\u73B0\u539F\u7406","children":[{"level":3,"title":"2.1 JDK\u52A8\u6001\u4EE3\u7406","slug":"_2-1-jdk\u52A8\u6001\u4EE3\u7406","link":"#_2-1-jdk\u52A8\u6001\u4EE3\u7406","children":[]},{"level":3,"title":"2.2 CGLib\u52A8\u6001\u4EE3\u7406","slug":"_2-2-cglib\u52A8\u6001\u4EE3\u7406","link":"#_2-2-cglib\u52A8\u6001\u4EE3\u7406","children":[]},{"level":3,"title":"2.3 \u4EE3\u7406\u65B9\u5F0F\u5BF9\u6BD4","slug":"_2-3-\u4EE3\u7406\u65B9\u5F0F\u5BF9\u6BD4","link":"#_2-3-\u4EE3\u7406\u65B9\u5F0F\u5BF9\u6BD4","children":[]}]},{"level":2,"title":"3. \u5982\u4F55\u7406\u89E3AOP","slug":"_3-\u5982\u4F55\u7406\u89E3aop","link":"#_3-\u5982\u4F55\u7406\u89E3aop","children":[{"level":3,"title":"3.1 AOP\u662F\u4EC0\u4E48","slug":"_3-1-aop\u662F\u4EC0\u4E48","link":"#_3-1-aop\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"3.2 AOP\u672F\u8BED","slug":"_3-2-aop\u672F\u8BED","link":"#_3-2-aop\u672F\u8BED","children":[]},{"level":3,"title":"3.3 Spring AOP\u548CAspectJ\u662F\u4EC0\u4E48\u5173\u7CFB","slug":"_3-3-spring-aop\u548Caspectj\u662F\u4EC0\u4E48\u5173\u7CFB","link":"#_3-3-spring-aop\u548Caspectj\u662F\u4EC0\u4E48\u5173\u7CFB","children":[]}]},{"level":2,"title":"4. AOP\u7684\u914D\u7F6E\u65B9\u5F0F","slug":"_4-aop\u7684\u914D\u7F6E\u65B9\u5F0F","link":"#_4-aop\u7684\u914D\u7F6E\u65B9\u5F0F","children":[{"level":3,"title":"4.1 XML Schema\u914D\u7F6E\u65B9\u5F0F","slug":"_4-1-xml-schema\u914D\u7F6E\u65B9\u5F0F","link":"#_4-1-xml-schema\u914D\u7F6E\u65B9\u5F0F","children":[]},{"level":3,"title":"4.2 AspectJ\u6CE8\u89E3\u65B9\u5F0F","slug":"_4-2-aspectj\u6CE8\u89E3\u65B9\u5F0F","link":"#_4-2-aspectj\u6CE8\u89E3\u65B9\u5F0F","children":[]}]},{"level":2,"title":"5. AOP\u4F7F\u7528\u95EE\u9898\u5C0F\u7ED3","slug":"_5-aop\u4F7F\u7528\u95EE\u9898\u5C0F\u7ED3","link":"#_5-aop\u4F7F\u7528\u95EE\u9898\u5C0F\u7ED3","children":[{"level":3,"title":"5.1 \u5207\u5165\u70B9\uFF08pointcut\uFF09\u7684\u7533\u660E\u89C4\u5219?","slug":"_5-1-\u5207\u5165\u70B9-pointcut-\u7684\u7533\u660E\u89C4\u5219","link":"#_5-1-\u5207\u5165\u70B9-pointcut-\u7684\u7533\u660E\u89C4\u5219","children":[]},{"level":3,"title":"5.2 \u591A\u79CD\u589E\u5F3A\u901A\u77E5\u7684\u987A\u5E8F\uFF1F","slug":"_5-2-\u591A\u79CD\u589E\u5F3A\u901A\u77E5\u7684\u987A\u5E8F","link":"#_5-2-\u591A\u79CD\u589E\u5F3A\u901A\u77E5\u7684\u987A\u5E8F","children":[]},{"level":3,"title":"5.3 Spring AOP \u548C AspectJ \u4E4B\u95F4\u7684\u5173\u952E\u533A\u522B\uFF1F","slug":"_5-3-spring-aop-\u548C-aspectj-\u4E4B\u95F4\u7684\u5173\u952E\u533A\u522B","link":"#_5-3-spring-aop-\u548C-aspectj-\u4E4B\u95F4\u7684\u5173\u952E\u533A\u522B","children":[]},{"level":3,"title":"5.4 Spring AOP\u8FD8\u662F\u5B8C\u5168\u7528AspectJ\uFF1F","slug":"_5-4-spring-aop\u8FD8\u662F\u5B8C\u5168\u7528aspectj","link":"#_5-4-spring-aop\u8FD8\u662F\u5B8C\u5168\u7528aspectj","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1664292448000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":27.08,"words":8125},"filePathRelative":"dependencies/spring/spring-x-framework-aop.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};