const e=JSON.parse('{"key":"v-120f8c36","path":"/db/mysql/mysql-y-lock-mvvc.html","title":"MySQL\u7684MVCC\u53CA\u5B9E\u73B0\u539F\u7406","lang":"zh-CN","frontmatter":{"summary":"MySQL\u7684MVCC\u53CA\u5B9E\u73B0\u539F\u7406 1. \u524D\u63D0\u6982\u8981 1.1 \u4EC0\u4E48\u662F MVCC ? \\" MVCC\\" \\" MVCC\uFF0C\u5168\u79F0 Multi-Version Concurrency Control \uFF0C\u5373\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\u3002MVCC \u662F\u4E00\u79CD\u5E76\u53D1\u63A7\u5236\u7684\u65B9\u6CD5\uFF0C\u4E00\u822C\u5728\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u4E2D\uFF0C\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7684\u5E76\u53D1\u8BBF\u95EE\uFF0C\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5B9E\u73B0\u4E8B\u52A1\u5185\u5B58\u3002\\" MVCC \u5728 MySQL InnoDB \u4E2D\u7684\u5B9E\u73B0","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/mysql-y-lock-mvvc.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"MySQL\u7684MVCC\u53CA\u5B9E\u73B0\u539F\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u524D\u63D0\u6982\u8981","slug":"_1-\u524D\u63D0\u6982\u8981","children":[{"level":3,"title":"1.1 \u4EC0\u4E48\u662F MVCC ?","slug":"_1-1-\u4EC0\u4E48\u662F-mvcc","children":[]},{"level":3,"title":"1.2 \u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB\uFF1F","slug":"_1-2-\u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB","children":[]},{"level":3,"title":"1.3 \u5F53\u524D\u8BFB\uFF0C\u5FEB\u7167\u8BFB\u548CMVCC\u7684\u5173\u7CFB","slug":"_1-3-\u5F53\u524D\u8BFB-\u5FEB\u7167\u8BFB\u548Cmvcc\u7684\u5173\u7CFB","children":[]},{"level":3,"title":"1.4 MVCC \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF0C\u597D\u5904\u662F\uFF1F","slug":"_1-4-mvcc-\u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898-\u597D\u5904\u662F","children":[]}]},{"level":2,"title":"2. MVCC \u7684\u5B9E\u73B0\u539F\u7406","slug":"_2-mvcc-\u7684\u5B9E\u73B0\u539F\u7406","children":[{"level":3,"title":"2.1 \u9690\u5F0F\u5B57\u6BB5","slug":"_2-1-\u9690\u5F0F\u5B57\u6BB5","children":[]},{"level":3,"title":"2.2 undo\u65E5\u5FD7","slug":"_2-2-undo\u65E5\u5FD7","children":[]},{"level":3,"title":"2.3 Read View \u8BFB\u89C6\u56FE","slug":"_2-3-read-view-\u8BFB\u89C6\u56FE","children":[]}]},{"level":2,"title":"3. \u6574\u4F53\u6D41\u7A0B","slug":"_3-\u6574\u4F53\u6D41\u7A0B","children":[]},{"level":2,"title":"4. MVCC \u76F8\u5173\u95EE\u9898","slug":"_4-mvcc-\u76F8\u5173\u95EE\u9898","children":[{"level":3,"title":"4.1 RR \u662F\u5982\u4F55\u5728 RC \u7EA7\u7684\u57FA\u7840\u4E0A\u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684\uFF1F","slug":"_4-1-rr-\u662F\u5982\u4F55\u5728-rc-\u7EA7\u7684\u57FA\u7840\u4E0A\u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684","children":[]},{"level":3,"title":"4.2 RC , RR \u7EA7\u522B\u4E0B\u7684 InnoDB \u5FEB\u7167\u8BFB\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F","slug":"_4-2-rc-rr-\u7EA7\u522B\u4E0B\u7684-innodb-\u5FEB\u7167\u8BFB\u6709\u4EC0\u4E48\u4E0D\u540C","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":15.3,"words":4589},"filePathRelative":"db/mysql/mysql-y-lock-mvvc.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
