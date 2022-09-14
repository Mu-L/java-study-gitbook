const e=JSON.parse('{"key":"v-6dc0c823","path":"/java/thread/java-thread-y-threadpoolexecutor.html","title":"ThreadPoolExecutor\u7C7B","lang":"zh-CN","frontmatter":{"summary":"ThreadPoolExecutor\u7C7B 1. ThreadPoolExecutor\u7C7B\u6784\u9020\u5668 java.uitl.concurrent.ThreadPoolExecutor\u7C7B\u662F\u7EBF\u7A0B\u6C60\u4E2D\u6700\u6838\u5FC3\u7684\u4E00\u4E2A\u7C7B\uFF0C\u56E0\u6B64\u5982\u679C\u8981\u900F\u5F7B\u4E86\u89E3Java\u4E2D\u7EBF\u7A0B\u6C60\uFF0C\u5C31\u9700\u8981\u5148\u4E86\u89E3\u8FD9\u4E2A\u7C7B\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00ThreadPoolExecutor\u7C7B\u7684\u5177\u4F53\u5B9E\u73B0\u6E90\u7801 \u5728ThreadPoolExecutor","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/thread/java-thread-y-threadpoolexecutor.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ThreadPoolExecutor\u7C7B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T09:13:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T09:13:33.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. ThreadPoolExecutor\u7C7B\u6784\u9020\u5668","slug":"_1-threadpoolexecutor\u7C7B\u6784\u9020\u5668","children":[]},{"level":2,"title":"2. \u6784\u9020\u5668\u53C2\u6570\u542B\u4E49","slug":"_2-\u6784\u9020\u5668\u53C2\u6570\u542B\u4E49","children":[{"level":3,"title":"2.1 corePoolSize\uFF1A\u6838\u5FC3\u6C60\u7684\u5927\u5C0F","slug":"_2-1-corepoolsize-\u6838\u5FC3\u6C60\u7684\u5927\u5C0F","children":[]},{"level":3,"title":"2.2 maximumPoolSize\uFF1A\u7EBF\u7A0B\u6C60\u6700\u5927\u7EBF\u7A0B\u6570","slug":"_2-2-maximumpoolsize-\u7EBF\u7A0B\u6C60\u6700\u5927\u7EBF\u7A0B\u6570","children":[]},{"level":3,"title":"2.3 keepAliveTime\uFF1A\u7EBF\u7A0B\u6CA1\u6709\u4EFB\u52A1\u6267\u884C\u65F6\u6700\u591A\u4FDD\u6301\u591A\u4E45\u65F6\u95F4\u4F1A\u7EC8\u6B62","slug":"_2-3-keepalivetime-\u7EBF\u7A0B\u6CA1\u6709\u4EFB\u52A1\u6267\u884C\u65F6\u6700\u591A\u4FDD\u6301\u591A\u4E45\u65F6\u95F4\u4F1A\u7EC8\u6B62","children":[]},{"level":3,"title":"2.4 unit\uFF1A\u53C2\u6570keepAliveTime\u7684\u65F6\u95F4\u5355\u4F4D","slug":"_2-4-unit-\u53C2\u6570keepalivetime\u7684\u65F6\u95F4\u5355\u4F4D","children":[]},{"level":3,"title":"2.5 workQueue: \u963B\u585E\u961F\u5217","slug":"_2-5-workqueue-\u963B\u585E\u961F\u5217","children":[]},{"level":3,"title":"2.6 threadFactory: \u7EBF\u7A0B\u5DE5\u5382","slug":"_2-6-threadfactory-\u7EBF\u7A0B\u5DE5\u5382","children":[]},{"level":3,"title":"2.7 handler\uFF1A\u62D2\u7EDD\u5904\u7406\u4EFB\u52A1\u65F6\u7684\u7B56\u7565","slug":"_2-7-handler-\u62D2\u7EDD\u5904\u7406\u4EFB\u52A1\u65F6\u7684\u7B56\u7565","children":[]}]},{"level":2,"title":"3. ThreadPoolExecutor\u7684\u7EE7\u627F\u5173\u7CFB","slug":"_3-threadpoolexecutor\u7684\u7EE7\u627F\u5173\u7CFB","children":[]},{"level":2,"title":"4. \u5728ThreadPoolExecutor\u7C7B\u4E2D\u6709\u51E0\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u65B9\u6CD5\uFF1A","slug":"_4-\u5728threadpoolexecutor\u7C7B\u4E2D\u6709\u51E0\u4E2A\u975E\u5E38\u91CD\u8981\u7684\u65B9\u6CD5","children":[{"level":3,"title":"4.1 execute()\u65B9\u6CD5","slug":"_4-1-execute-\u65B9\u6CD5","children":[]},{"level":3,"title":"4.2 submit()\u65B9\u6CD5","slug":"_4-2-submit-\u65B9\u6CD5","children":[]},{"level":3,"title":"4.3 shutdown()\u548CshutdownNow()\uFF1A\u5173\u95ED\u7EBF\u7A0B\u6C60","slug":"_4-3-shutdown-\u548Cshutdownnow-\u5173\u95ED\u7EBF\u7A0B\u6C60","children":[]},{"level":3,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}]}],"git":{"createdTime":1663146813000,"updatedTime":1663146813000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.44,"words":1631},"filePathRelative":"java/thread/java-thread-y-threadpoolexecutor.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
