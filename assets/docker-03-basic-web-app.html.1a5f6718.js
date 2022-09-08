const e=JSON.parse('{"key":"v-15e88d2d","path":"/deploy/docker/docker-03-basic-web-app.html","title":"Docker\u57FA\u7840-\u4E00\u4E2Aweb\u5E94\u7528\u5B9E\u4F8B1","lang":"zh-CN","frontmatter":{"order":20,"category":["\u90E8\u7F72","Docker"],"summary":"Docker\u57FA\u7840-\u4E00\u4E2Aweb\u5E94\u7528\u5B9E\u4F8B1 1. \u4E00\u4E2Aweb \u5E94\u7528\u8FD0\u884C\u548C\u8BBF\u95EE 1.1 \u8FD0\u884C\u4E00\u4E2A web \u5E94\u7528 \\" \u6211\u4EEC\u53EA\u9700\u8981\u627E\u4E00\u4E2Awebapp\u7684\u955C\u50CF\u5373\u53EF\uFF0C\u65E0\u9700\u81EA\u5DF1\u518D\u5199\u4E2A\u7A0B\u5E8F\u5565\u7684\u3002\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u4F7F\u7528 docker \u6784\u5EFA\u4E00\u4E2A web \u5E94\u7528\u7A0B\u5E8F\u3002\\" \u8FD9\u91CC\u627E\u4E86\u4E00\u4E2Atraining/webapp\uFF0C\u5B83\u662F\u5C06\u5728docker\u5BB9\u5668\u4E2D\u8FD0\u884C\u4E00\u4E2A Python Flask web\u5E94\u7528\u3002","head":[["meta",{"property":"og:url","content":"https://java.isture.com/deploy/docker/docker-03-basic-web-app.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Docker\u57FA\u7840-\u4E00\u4E2Aweb\u5E94\u7528\u5B9E\u4F8B1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-03T15:00:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-03T15:00:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E00\u4E2Aweb \u5E94\u7528\u8FD0\u884C\u548C\u8BBF\u95EE","slug":"_1-\u4E00\u4E2Aweb-\u5E94\u7528\u8FD0\u884C\u548C\u8BBF\u95EE","children":[{"level":3,"title":"1.1 \u8FD0\u884C\u4E00\u4E2A web \u5E94\u7528","slug":"_1-1-\u8FD0\u884C\u4E00\u4E2A-web-\u5E94\u7528","children":[]},{"level":3,"title":"1.2 \u8BBF\u95EEwebapp","slug":"_1-2-\u8BBF\u95EEwebapp","children":[]},{"level":3,"title":"1.3 \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6620\u5C04\u7AEF\u53E3","slug":"_1-3-\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u6620\u5C04\u7AEF\u53E3","children":[]}]},{"level":2,"title":"2. \u5176\u5B83\u5E38\u7528\u529F\u80FD","slug":"_2-\u5176\u5B83\u5E38\u7528\u529F\u80FD","children":[{"level":3,"title":"2.1 \u67E5\u770Bweb \u5E94\u7528\u7F51\u7EDC\u7AEF\u53E3","slug":"_2-1-\u67E5\u770Bweb-\u5E94\u7528\u7F51\u7EDC\u7AEF\u53E3","children":[]},{"level":3,"title":"2.2 \u67E5\u770B WEB \u5E94\u7528\u7A0B\u5E8F\u65E5\u5FD7","slug":"_2-2-\u67E5\u770B-web-\u5E94\u7528\u7A0B\u5E8F\u65E5\u5FD7","children":[]},{"level":3,"title":"2.3 \u67E5\u770BWEB\u5E94\u7528\u7A0B\u5E8F\u5BB9\u5668\u7684\u8FDB\u7A0B","slug":"_2-3-\u67E5\u770Bweb\u5E94\u7528\u7A0B\u5E8F\u5BB9\u5668\u7684\u8FDB\u7A0B","children":[]},{"level":3,"title":"2.4 \u68C0\u67E5 WEB \u5E94\u7528\u7A0B\u5E8F","slug":"_2-4-\u68C0\u67E5-web-\u5E94\u7528\u7A0B\u5E8F","children":[]},{"level":3,"title":"2.5 \u505C\u6B62 WEB \u5E94\u7528\u5BB9\u5668","slug":"_2-5-\u505C\u6B62-web-\u5E94\u7528\u5BB9\u5668","children":[]},{"level":3,"title":"2.6 \u91CD\u542FWEB\u5E94\u7528\u5BB9\u5668","slug":"_2-6-\u91CD\u542Fweb\u5E94\u7528\u5BB9\u5668","children":[]},{"level":3,"title":"2.7 \u79FB\u9664WEB\u5E94\u7528\u5BB9\u5668","slug":"_2-7-\u79FB\u9664web\u5E94\u7528\u5BB9\u5668","children":[]}]},{"level":2,"title":"3. \u4E0E\u5176\u5B83\u5BB9\u5668\uFF08DB\u5BB9\u5668\uFF09\u4E92\u8054","slug":"_3-\u4E0E\u5176\u5B83\u5BB9\u5668-db\u5BB9\u5668-\u4E92\u8054","children":[{"level":3,"title":"3.1 \u4E0E\u6570\u636E\u5E93\u5BB9\u5668\u4E92\u8054","slug":"_3-1-\u4E0E\u6570\u636E\u5E93\u5BB9\u5668\u4E92\u8054","children":[]},{"level":3,"title":"3.2\u5BB9\u5668\u516C\u5F00\u7684\u8FDE\u63A5\u4FE1\u606F","slug":"_3-2\u5BB9\u5668\u516C\u5F00\u7684\u8FDE\u63A5\u4FE1\u606F","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1662217239000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":10.26,"words":3077},"filePathRelative":"deploy/docker/docker-03-basic-web-app.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};