import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as r,e as t}from"./app.24aaacd5.js";const o={},n=t(`<h1 id="jvm-\u57FA\u7840-java\u5185\u5B58\u7ED3\u6784-\u7CBE\u7B80\u7248" tabindex="-1"><a class="header-anchor" href="#jvm-\u57FA\u7840-java\u5185\u5B58\u7ED3\u6784-\u7CBE\u7B80\u7248" aria-hidden="true">#</a> JVM \u57FA\u7840 - Java\u5185\u5B58\u7ED3\u6784(\u7CBE\u7B80\u7248)</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1. \u6982\u8FF0</h2><p>\u5BF9\u4E8Ejava\u7A0B\u5E8F\u5458\u6765\u8BF4\uFF0C\u5728\u865A\u62DF\u673A\u81EA\u52A8\u5185\u5B58\u7BA1\u7406\u673A\u5236\u4E0B\uFF0C\u4E0D\u518D\u9700\u8981\u50CFC/C++\u7A0B\u5E8F\u5F00\u53D1\u7A0B\u5E8F\u5458\u8FD9\u6837\u4E3A\u6BCF\u4E00\u4E2Anew \u64CD\u4F5C\u53BB\u5C51\u5BF9\u5E94\u7684delete/free\u64CD\u4F5C\uFF0C\u4E0D\u5BB9\u6613\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u548C\u5185\u5B58\u6EA2\u51FA\u95EE\u9898\u3002\u6B63\u5F0F\u56E0\u4E3AJava\u7A0B\u5E8F\u5458\u628A\u5185\u5B58\u63A7\u5236\u6743\u4EA4\u7ED9Java\u865A\u62DF\u673A\uFF0C\u4E00\u65E6\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u548C\u6EA2\u51FA\u65B9\u9762\u7684\u95EE\u9898\u3002\u5982\u679C\u4E0D\u4E86\u89E3\u865A\u62DF\u673A\u662F\u600E\u6837\u4F7F\u7528\u5185\u5B58\u7684\uFF0C\u90A3\u4E48\u6392\u67E5\u9519\u8BEF\u5C06\u4F1A\u662F\u4E00\u4E2A\u975E\u5E38\u8270\u5DE8\u7684\u4EFB\u52A1</p><h2 id="_2-\u8FD0\u884C\u65F6\u6570\u636E\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#_2-\u8FD0\u884C\u65F6\u6570\u636E\u533A\u57DF" aria-hidden="true">#</a> 2. \u8FD0\u884C\u65F6\u6570\u636E\u533A\u57DF</h2><p>Java\u865A\u62DF\u673A\u5728\u6267\u884C java \u7A0B\u5E8F\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u628A\u5B83\u7BA1\u7406\u7684\u5185\u5B58\u5212\u5206\u6210\u82E5\u5E72\u4E2A\u4E0D\u540C\u7684\u6570\u636E\u533A\u57DF\u3002JDK 1.8\u548C\u4E4B\u524D\u7684\u7248\u672C\u7565\u6709\u4E0D\u540C\uFF0C\u4E0B\u9762\u4F1A\u4ECB\u7ECD</p><p>JDK 1.8 \u4E4B\u524D</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190923234434594.png" alt="image-20190923234434594"></p><p>\u5728JDK 1.8</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190923235103550.png" alt="image-20190923235103550"></p><p><strong>\u7EBF\u7A0B\u79C1\u6709\u7684\uFF1A</strong></p><ul><li><p>\u7A0B\u5E8F\u8BA1\u6570\u5668</p></li><li><p>\u865A\u62DF\u673A\u6808</p></li><li><p>\u672C\u5730\u65B9\u6CD5\u6808</p></li></ul><p><strong>\u7EBF\u7A0B\u5171\u4EAB\u7684</strong></p><ul><li>\u5806</li><li>\u65B9\u6CD5\u533A</li><li>\u76F4\u63A5\u5185\u5B58\uFF08\u975E\u8FD0\u884C\u65F6\u6570\u636E\u533A\u7684\u4E00\u90E8\u5206\uFF09</li></ul><h3 id="_2-1-\u7A0B\u5E8F\u8BA1\u6570\u5668" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7A0B\u5E8F\u8BA1\u6570\u5668" aria-hidden="true">#</a> 2.1 \u7A0B\u5E8F\u8BA1\u6570\u5668</h3><ul><li><strong>\u4F9D\u6B21\u8BFB\u53D6\u6307\u4EE4</strong>\uFF0C\u4ECE\u800C<strong>\u5B9E\u73B0\u4EE3\u7801\u7684\u6D41\u7A0B\u63A7\u5236</strong></li><li>\u5728<strong>\u591A\u7EBF\u7A0B</strong>\u7684\u60C5\u51B5\u4E0B\uFF0C\u7A0B\u5E8F\u8BA1\u6570\u5668\u7528\u4E8E<strong>\u8BB0\u5F55\u5F53\u524D\u7EBF\u7A0B\u6267\u884C\u7684\u4F4D\u7F6E</strong></li></ul><blockquote><p>\u7A0B\u5E8F\u8BA1\u6570\u5668\u662F\u4E00\u5757\u8F83\u5C0F\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F\u5F53\u524D\u7EBF\u7A0B\u6240\u6267\u884C\u7684\u5B57\u8282\u7801\u7684\u884C\u53F7\u6307\u793A\u5668\u3002<strong>\u5B57\u8282\u7801\u89E3\u91CA\u5668\u5DE5\u4F5C\u65F6\u901A\u8FC7\u6539\u53D8\u8FD9\u4E2A\u8BA1\u6570\u5668\u7684\u503C\u6765\u9009\u53D6\u4E0B\u4E00\u6761\u9700\u8981\u6267\u884C\u7684\u5B57\u8282\u7801\u6307\u4EE4\uFF0C\u5206\u652F\u3001\u5FAA\u73AF\u3001\u8DF3\u8F6C\u3001\u5F02\u5E38\u5904\u7406\u3001\u7EBF\u7A0B\u6062\u590D\u7B49\u529F\u80FD\u90FD\u9700\u8981\u4F9D\u8D56\u8FD9\u4E2A\u8BA1\u6570\u5668\u6765\u5B8C\u6210\u3002</strong></p><p>\u53E6\u5916\uFF0C<strong>\u4E3A\u4E86\u7EBF\u7A0B\u5207\u6362\u540E\u80FD\u6062\u590D\u5230\u6B63\u786E\u7684\u6267\u884C\u4F4D\u7F6E\uFF0C\u6BCF\u6761\u7EBF\u7A0B\u90FD\u9700\u8981\u6709\u4E00\u4E2A\u72EC\u7ACB\u7684\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF0C\u5404\u7EBF\u7A0B\u4E4B\u95F4\u8BA1\u6570\u5668\u4E92\u4E0D\u5F71\u54CD\uFF0C\u72EC\u7ACB\u5B58\u50A8\uFF0C\u6211\u4EEC\u79F0\u8FD9\u7C7B\u5185\u5B58\u533A\u57DF\u4E3A\u201C\u7EBF\u7A0B\u79C1\u6709\u201D\u7684\u5185\u5B58\u3002</strong></p><p><strong>\u4ECE\u4E0A\u9762\u7684\u4ECB\u7ECD\u4E2D\u6211\u4EEC\u77E5\u9053\u7A0B\u5E8F\u8BA1\u6570\u5668\u4E3B\u8981\u6709\u4E24\u4E2A\u4F5C\u7528\uFF1A</strong></p><ol><li>\u5B57\u8282\u7801\u89E3\u91CA\u5668\u901A\u8FC7\u6539\u53D8\u7A0B\u5E8F\u8BA1\u6570\u5668\u6765\u4F9D\u6B21\u8BFB\u53D6\u6307\u4EE4\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4EE3\u7801\u7684\u6D41\u7A0B\u63A7\u5236\uFF0C\u5982\uFF1A\u987A\u5E8F\u6267\u884C\u3001\u9009\u62E9\u3001\u5FAA\u73AF\u3001\u5F02\u5E38\u5904\u7406\u3002</li><li>\u5728\u591A\u7EBF\u7A0B\u7684\u60C5\u51B5\u4E0B\uFF0C\u7A0B\u5E8F\u8BA1\u6570\u5668\u7528\u4E8E\u8BB0\u5F55\u5F53\u524D\u7EBF\u7A0B\u6267\u884C\u7684\u4F4D\u7F6E\uFF0C\u4ECE\u800C\u5F53\u7EBF\u7A0B\u88AB\u5207\u6362\u56DE\u6765\u7684\u65F6\u5019\u80FD\u591F\u77E5\u9053\u8BE5\u7EBF\u7A0B\u4E0A\u6B21\u8FD0\u884C\u5230\u54EA\u513F\u4E86\u3002</li></ol><p><strong>\u6CE8\u610F\uFF1A\u7A0B\u5E8F\u8BA1\u6570\u5668\u662F\u552F\u4E00\u4E00\u4E2A\u4E0D\u4F1A\u51FA\u73B0 OutOfMemoryError \u7684\u5185\u5B58\u533A\u57DF\uFF0C\u5B83\u7684\u751F\u547D\u5468\u671F\u968F\u7740\u7EBF\u7A0B\u7684\u521B\u5EFA\u800C\u521B\u5EFA\uFF0C\u968F\u7740\u7EBF\u7A0B\u7684\u7ED3\u675F\u800C\u6B7B\u4EA1\u3002</strong></p></blockquote><h3 id="_2-2-java-\u865A\u62DF\u673A\u6808" tabindex="-1"><a class="header-anchor" href="#_2-2-java-\u865A\u62DF\u673A\u6808" aria-hidden="true">#</a> 2.2 Java \u865A\u62DF\u673A\u6808</h3><p><strong>\u4E0E\u7A0B\u5E8F\u8BA1\u6570\u5668\u4E00\u6837\uFF0CJava \u865A\u62DF\u673A\u6808\u4E5F\u662F\u7EBF\u7A0B\u79C1\u6709\u7684\uFF0C\u5B83\u7684\u751F\u547D\u5468\u671F\u548C\u7EBF\u7A0B\u76F8\u540C\uFF0C\u63CF\u8FF0\u7684\u662F Java \u65B9\u6CD5\u6267\u884C\u7684\u5185\u5B58\u6A21\u578B\uFF0C\u6BCF\u6B21\u65B9\u6CD5\u8C03\u7528\u7684\u6570\u636E\u90FD\u662F\u901A\u8FC7\u6808\u4F20\u9012\u7684\u3002</strong></p><p><strong>Java \u5185\u5B58\u53EF\u4EE5\u7C97\u7CD9\u7684\u533A\u5206\u4E3A\u5806\u5185\u5B58\uFF08Heap\uFF09\u548C\u6808\u5185\u5B58 (Stack),\u5176\u4E2D\u6808\u5C31\u662F\u73B0\u5728\u8BF4\u7684\u865A\u62DF\u673A\u6808\uFF0C\u6216\u8005\u8BF4\u662F\u865A\u62DF\u673A\u6808\u4E2D\u5C40\u90E8\u53D8\u91CF\u8868\u90E8\u5206\u3002</strong> \uFF08\u5B9E\u9645\u4E0A\uFF0CJava \u865A\u62DF\u673A\u6808\u662F\u7531\u4E00\u4E2A\u4E2A\u6808\u5E27\u7EC4\u6210\uFF0C\u800C\u6BCF\u4E2A\u6808\u5E27\u4E2D\u90FD\u62E5\u6709\uFF1A\u5C40\u90E8\u53D8\u91CF\u8868\u3001\u64CD\u4F5C\u6570\u6808\u3001\u52A8\u6001\u94FE\u63A5\u3001\u65B9\u6CD5\u51FA\u53E3\u4FE1\u606F\u3002\uFF09</p><p><strong>\u5C40\u90E8\u53D8\u91CF\u8868\u4E3B\u8981\u5B58\u653E\u4E86\u7F16\u8BD1\u5668\u53EF\u77E5\u7684\u5404\u79CD\u6570\u636E\u7C7B\u578B</strong>\uFF08boolean\u3001byte\u3001char\u3001short\u3001int\u3001float\u3001long\u3001double\uFF09\u3001<strong>\u5BF9\u8C61\u5F15\u7528</strong>\uFF08reference \u7C7B\u578B\uFF0C\u5B83\u4E0D\u540C\u4E8E\u5BF9\u8C61\u672C\u8EAB\uFF0C\u53EF\u80FD\u662F\u4E00\u4E2A\u6307</p><p><strong>Java \u865A\u62DF\u673A\u6808\u4F1A\u51FA\u73B0\u4E24\u79CD\u5F02\u5E38\uFF1AStackOverFlowError \u548C OutOfMemoryError\u3002</strong></p><ul><li><strong>StackOverFlowError\uFF1A</strong> \u82E5 Java \u865A\u62DF\u673A\u6808\u7684\u5185\u5B58\u5927\u5C0F\u4E0D\u5141\u8BB8\u52A8\u6001\u6269\u5C55\uFF0C\u90A3\u4E48\u5F53\u7EBF\u7A0B\u8BF7\u6C42\u6808\u7684\u6DF1\u5EA6\u8D85\u8FC7\u5F53\u524D Java \u865A\u62DF\u673A\u6808\u7684\u6700\u5927\u6DF1\u5EA6\u7684\u65F6\u5019\uFF0C\u5C31\u629B\u51FA StackOverFlowError \u5F02\u5E38\u3002</li><li><strong>OutOfMemoryError\uFF1A</strong> \u82E5 Java \u865A\u62DF\u673A\u6808\u7684\u5185\u5B58\u5927\u5C0F\u5141\u8BB8\u52A8\u6001\u6269\u5C55\uFF0C\u4E14\u5F53\u7EBF\u7A0B\u8BF7\u6C42\u6808\u65F6\u5185\u5B58\u7528\u5B8C\u4E86\uFF0C\u65E0\u6CD5\u518D\u52A8\u6001\u6269\u5C55\u4E86\uFF0C\u6B64\u65F6\u629B\u51FA OutOfMemoryError \u5F02\u5E38\u3002</li></ul><p>Java \u865A\u62DF\u673A\u6808\u4E5F\u662F\u7EBF\u7A0B\u79C1\u6709\u7684\uFF0C\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u6709\u5404\u81EA\u7684 Java \u865A\u62DF\u673A\u6808\uFF0C\u800C\u4E14\u968F\u7740\u7EBF\u7A0B\u7684\u521B\u5EFA\u800C\u521B\u5EFA\uFF0C\u968F\u7740\u7EBF\u7A0B\u7684\u6B7B\u4EA1\u800C\u6B7B\u4EA1\u3002</p><h4 id="_2-2-1-\u90A3\u4E48\u65B9\u6CD5-\u51FD\u6570\u5982\u4F55\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u90A3\u4E48\u65B9\u6CD5-\u51FD\u6570\u5982\u4F55\u8C03\u7528" aria-hidden="true">#</a> 2.2.1 \u90A3\u4E48\u65B9\u6CD5/\u51FD\u6570\u5982\u4F55\u8C03\u7528</h4><p>java \u6808\u53EF\u4EE5\u7C7B\u6BD4\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u6808\uFF0Cjava \u6808\u4E2D\u4FDD\u5B58\u7684\u5185\u5BB9\u4E3B\u8981\u662F\u6808\u5E27\uFF0C\u6BCF\u4E00\u6B21\u51FD\u6570\u8C03\u7528\u90FD\u4F1A\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684\u6808\u5E27\u88AB\u538B\u5165 Java \u6808\u3002\u6BCF\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u7ED3\u675F\u540E\uFF0C\u90FD\u4F1A\u6709\u4E00\u4E2A\u6808\u5E27\u88AB\u5F39\u51FA</p><h4 id="_2-2-2-java-\u65B9\u6CD5\u7684\u4E24\u79CD\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#_2-2-2-java-\u65B9\u6CD5\u7684\u4E24\u79CD\u8FD4\u56DE" aria-hidden="true">#</a> 2.2.2 Java \u65B9\u6CD5\u7684\u4E24\u79CD\u8FD4\u56DE</h4><ol><li>return \u8BED\u53E5</li><li>\u629B\u51FA\u5F02\u5E38</li></ol><p>\u4E0D\u7BA1\u54EA\u79CD\u8FD4\u56DE\u65B9\u5F0F\u90FD\u4F1A\u5BFC\u81F4\u6808\u5E27\u88AB\u5F39\u51FA</p><h3 id="_2-3-\u672C\u5730\u65B9\u6CD5\u6808" tabindex="-1"><a class="header-anchor" href="#_2-3-\u672C\u5730\u65B9\u6CD5\u6808" aria-hidden="true">#</a> 2.3 \u672C\u5730\u65B9\u6CD5\u6808</h3><p>\u548C\u865A\u62DF\u673A\u6808\u6240\u53D1\u6325\u7684\u4F5C\u7528\u975E\u5E38\u76F8\u4F3C\uFF0C\u533A\u522B\u662F\uFF1A <strong>\u865A\u62DF\u673A\u6808\u4E3A\u865A\u62DF\u673A\u6267\u884C Java \u65B9\u6CD5 \uFF08\u4E5F\u5C31\u662F\u5B57\u8282\u7801\uFF09\u670D\u52A1\uFF0C\u800C\u672C\u5730\u65B9\u6CD5\u6808\u5219\u4E3A\u865A\u62DF\u673A\u4F7F\u7528\u5230\u7684 Native \u65B9\u6CD5\u670D\u52A1\u3002</strong> \u5728 HotSpot \u865A\u62DF\u673A\u4E2D\u548C Java \u865A\u62DF\u673A\u6808\u5408\u4E8C\u4E3A\u4E00\u3002</p><p>\u672C\u5730\u65B9\u6CD5\u88AB\u6267\u884C\u7684\u65F6\u5019\uFF0C\u5728\u672C\u5730\u65B9\u6CD5\u6808\u4E5F\u4F1A\u521B\u5EFA\u4E00\u4E2A\u6808\u5E27\uFF0C\u7528\u4E8E\u5B58\u653E\u8BE5\u672C\u5730\u65B9\u6CD5\u7684\u5C40\u90E8\u53D8\u91CF\u8868\u3001\u64CD\u4F5C\u6570\u6808\u3001\u52A8\u6001\u94FE\u63A5\u3001\u51FA\u53E3\u4FE1\u606F\u3002</p><p>\u65B9\u6CD5\u6267\u884C\u5B8C\u6BD5\u540E\u76F8\u5E94\u7684\u6808\u5E27\u4E5F\u4F1A\u51FA\u6808\u5E76\u91CA\u653E\u5185\u5B58\u7A7A\u95F4\uFF0C\u4E5F\u4F1A\u51FA\u73B0 StackOverFlowError \u548C OutOfMemoryError \u4E24\u79CD\u5F02\u5E38\u3002</p><h3 id="_2-4-\u5806" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5806" aria-hidden="true">#</a> 2.4 \u5806</h3><p>Java \u865A\u62DF\u673A\u4E2D\u6240\u7BA1\u7406\u7684\u5185\u5B58\u4E2D\u6700\u5927\u7684\u4E00\u5757\uFF0Cjava \u5806\u662F\u6240\u6709\u7EBF\u7A0B\u5171\u4EAB\u7684\u4E00\u5757\u5185\u5B58\u533A\u57DF\uFF0C\u5728\u865A\u62DF\u673A\u542F\u52A8\u65F6\u521B\u5EFA\u3002<strong>\u6B64\u5185\u5B58\u533A\u57DF\u7684\u552F\u4E00\u76EE\u7684\u5C31\u662F\u5B58\u653E\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u5BF9\u8C61\u5B9E\u4F8B\u4EE5\u53CA\u6570\u7EC4\u90FD\u5728\u8FD9\u91CC\u5206\u914D\u5185\u5B58</strong></p><p>java\u5806\u662F\u5783\u573E\u6536\u96C6\u5668\u7BA1\u7406\u7684\u4E3B\u8981\u533A\u57DF\uFF0C\u56E0\u6B64\u4E5F\u88AB\u79F0\u4F5C<strong>GC \u5806\uFF08Garbage Collected Heap\uFF09</strong>.\u4ECE\u5783\u573E\u56DE\u6536\u7684\u89D2\u5EA6\uFF0C\u7531\u4E8E\u73B0\u5728\u6536\u96C6\u5668\u57FA\u672C\u90FD\u91C7\u7528\u5206\u4EE3\u5783\u573E\u6536\u96C6\u7B97\u6CD5\uFF0C\u6240\u4EE5 Java \u5806\u8FD8\u53EF\u4EE5\u7EC6\u5206\u4E3A\uFF1A\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\uFF1A\u518D\u7EC6\u81F4\u4E00\u70B9\u6709\uFF1AEden \u7A7A\u95F4\u3001From Survivor\u3001To Survivor \u7A7A\u95F4\u7B49\u3002<strong>\u8FDB\u4E00\u6B65\u5212\u5206\u7684\u76EE\u7684\u662F\u66F4\u597D\u7684\u56DE\u6536\u5185\u5B58\uFF0C\u66F4\u5FEB\u7684\u5206\u914D\u5185\u5B58</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190924001743226.png" alt="image-20190924001743226"></p><p>\u4E0A\u56FE\u6240\u793A\u7684eden \u533A\uFF0Cs0 \u533A\uFF0Cs1\u533A\u90FD\u662F\u5C5E\u4E8E\u65B0\u751F\u4EE3\uFF0Ctentired\u533A\u5C5E\u4E8E\u8001\u5E74\u4EE3\uFF0C\u5927\u90E8\u5206\u60C5\u51B5</p><ul><li><p>\u5BF9\u8C61\u90FD\u4F1A\u9996\u5148\u5728Eden \u533A\u57DF\u5206\u914D</p></li><li><p>\u5728\u4E00\u6B21\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536\u540E\uFF0C\u5982\u679C\u5BF9\u8C61\u8FD8\u5B58\u6D3B\uFF0C\u5219\u4F1A\u8FDB\u5165s0\u6216\u8005s1,\u5E76\u4E14\u5BF9\u8C61\u7684\u5E74\u9F84\u8FD8\u4F1A\u52A01\uFF08Eden\u533A-&gt;Survivor \u533A\u540E\u5BF9\u8C61\u7684\u521D\u59CB\u5E74\u9F84\u53D8\u4E3A1\uFF09</p></li><li><p>\u5F53\u5B83\u7684\u5E74\u9F84\u589E\u52A0\u5230\u4E00\u5B9A\u7A0B\u5EA6\uFF08\u9ED8\u8BA4\u4E3A15\u5C81\uFF09\uFF0C\u5C31\u4F1A\u88AB\u664B\u5347\u5230\u8001\u5E74\u4EE3</p><p>\u5BF9\u8C61\u664B\u5347\u5230\u8001\u5E74\u4EE3\u7684\u5E74\u9F84\u9608\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570 <code>-XX:MaxTenuringThreshold</code> \u6765\u8BBE\u7F6E\u3002</p></li></ul><blockquote><p>\u95EE\uFF1A\u4EC0\u4E48\u65F6\u5019\u89E6\u53D1\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536\uFF1F</p><p>\u7B54\uFF1A\u5F53Eden\u6CA1\u6709\u8DB3\u591F\u7A7A\u95F4\u7684\u65F6\u5019\u5C31\u4F1A \u89E6\u53D1jvm\u53D1\u8D77\u4E00\u6B21Minor GC</p><p>\u95EE\uFF1A\u4EC0\u4E48\u65F6\u5019\u89E6\u53D1\u8001\u5E74\u4EE3\u5783\u573E\u56DE\u6536</p><p>\u89E6\u53D1MinorGC\u7684\u6761\u4EF6\uFF1A 1 \u5728\u8FDB\u884CMajorGC\u4E4B\u524D\uFF0C\u4E00\u822C\u90FD\u5148\u8FDB\u884C\u4E86\u4E00\u6B21MinorGC\uFF0C\u4F7F\u5F97\u6709\u65B0\u751F\u4EE3\u7684\u5BF9\u8C61\u8FDB\u5165\u8001\u5E74\u4EE3\uFF0C\u5F53\u8001\u5E74\u4EE3\u7A7A\u95F4\u4E0D\u8DB3\u65F6\u5C31\u4F1A\u89E6\u53D1MajorGC\u3002 2 \u5F53\u65E0\u6CD5\u627E\u5230\u8DB3\u591F\u5927\u7684\u8FDE\u7EED\u7A7A\u95F4\u5206\u914D\u7ED9\u65B0\u521B\u5EFA\u7684\u8F83\u5927\u5BF9\u8C61\u65F6\uFF0C\u4E5F\u4F1A\u89E6\u53D1MajorGC\u8FDB\u884C\u5783\u573E\u56DE\u6536\u817E\u51FA\u7A7A\u95F4\u3002</p></blockquote><h3 id="_2-5-\u65B9\u6CD5\u533A" tabindex="-1"><a class="header-anchor" href="#_2-5-\u65B9\u6CD5\u533A" aria-hidden="true">#</a> 2.5 \u65B9\u6CD5\u533A</h3><p>\u65B9\u6CD5\u533A\u4E0E Java \u5806\u4E00\u6837\uFF0C\u662F\u5404\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u7684\u5185\u5B58\u533A\u57DF\uFF0C\u5B83\u7528\u4E8E\u5B58\u50A8\u5DF2\u88AB\u865A\u62DF\u673A\u52A0\u8F7D\u7684\u7C7B\u4FE1\u606F\u3001\u5E38\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5373\u65F6\u7F16\u8BD1\u5668\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u7B49\u6570\u636E\u3002\u867D\u7136 Java \u865A\u62DF\u673A\u89C4\u8303\u628A\u65B9\u6CD5\u533A\u63CF\u8FF0\u4E3A\u5806\u7684\u4E00\u4E2A\u903B\u8F91\u90E8\u5206\uFF0C\u4F46\u662F\u5B83\u5374\u6709\u4E00\u4E2A\u522B\u540D\u53EB\u505A <strong>Non-Heap\uFF08\u975E\u5806\uFF09</strong>\uFF0C\u76EE\u7684\u5E94\u8BE5\u662F\u4E0E Java \u5806\u533A\u5206\u5F00\u6765\u3002</p><p>\u65B9\u6CD5\u533A\u4E5F\u88AB\u79F0\u4E3A\u6C38\u4E45\u4EE3\u3002\u5F88\u591A\u4EBA\u90FD\u4F1A\u5206\u4E0D\u6E05\u65B9\u6CD5\u533A\u548C\u6C38\u4E45\u4EE3\u7684\u5173\u7CFB\uFF0C\u4E3A\u6B64\u6211\u4E5F\u67E5\u9605\u4E86\u6587\u732E\u3002</p><h4 id="_2-5-1-\u65B9\u6CD5\u533A\u548C\u6C38\u4E45\u4EE3\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-5-1-\u65B9\u6CD5\u533A\u548C\u6C38\u4E45\u4EE3\u7684\u5173\u7CFB" aria-hidden="true">#</a> 2.5.1 \u65B9\u6CD5\u533A\u548C\u6C38\u4E45\u4EE3\u7684\u5173\u7CFB</h4><blockquote><p>\u300AJava \u865A\u62DF\u673A\u89C4\u8303\u300B\u53EA\u662F\u89C4\u5B9A\u4E86\u6709\u65B9\u6CD5\u533A\u8FD9\u4E48\u4E2A\u6982\u5FF5\u548C\u5B83\u7684\u4F5C\u7528\uFF0C\u5E76\u6CA1\u6709\u89C4\u5B9A\u5982\u4F55\u53BB\u5B9E\u73B0\u5B83\u3002\u90A3\u4E48\uFF0C\u5728\u4E0D\u540C\u7684 JVM \u4E0A\u65B9\u6CD5\u533A\u7684\u5B9E\u73B0\u80AF\u5B9A\u662F\u4E0D\u540C\u7684\u4E86\u3002 <strong>\u65B9\u6CD5\u533A\u548C\u6C38\u4E45\u4EE3\u7684\u5173\u7CFB\u5F88\u50CF Java \u4E2D\u63A5\u53E3\u548C\u7C7B\u7684\u5173\u7CFB\uFF0C\u7C7B\u5B9E\u73B0\u4E86\u63A5\u53E3\uFF0C\u800C\u6C38\u4E45\u4EE3\u5C31\u662F HotSpot \u865A\u62DF\u673A\u5BF9\u865A\u62DF\u673A\u89C4\u8303\u4E2D\u65B9\u6CD5\u533A\u7684\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002</strong> \u4E5F\u5C31\u662F\u8BF4\uFF0C\u6C38\u4E45\u4EE3\u662F HotSpot \u7684\u6982\u5FF5\uFF0C\u65B9\u6CD5\u533A\u662F Java \u865A\u62DF\u673A\u89C4\u8303\u4E2D\u7684\u5B9A\u4E49\uFF0C\u662F\u4E00\u79CD\u89C4\u8303\uFF0C\u800C\u6C38\u4E45\u4EE3\u662F\u4E00\u79CD\u5B9E\u73B0\uFF0C\u4E00\u4E2A\u662F\u6807\u51C6\u4E00\u4E2A\u662F\u5B9E\u73B0\uFF0C\u5176\u4ED6\u7684\u865A\u62DF\u673A\u5B9E\u73B0\u5E76\u6CA1\u6709\u6C38\u4E45\u4EE3\u8FD9\u4E00\u8BF4\u6CD5\u3002</p></blockquote><h4 id="_2-5-2-\u5E38\u7528\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-5-2-\u5E38\u7528\u53C2\u6570" aria-hidden="true">#</a> 2.5.2 \u5E38\u7528\u53C2\u6570</h4><p>JDK 1.8 \u4E4B\u524D\u6C38\u4E45\u4EE3\u8FD8\u6CA1\u88AB\u5F7B\u5E95\u79FB\u9664\u7684\u65F6\u5019\u901A\u5E38\u901A\u8FC7\u4E0B\u9762\u8FD9\u4E9B\u53C2\u6570\u6765\u8C03\u8282\u65B9\u6CD5\u533A\u5927\u5C0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-XX:PermSize=N //\u65B9\u6CD5\u533A (\u6C38\u4E45\u4EE3) \u521D\u59CB\u5927\u5C0F
-XX:MaxPermSize=N //\u65B9\u6CD5\u533A (\u6C38\u4E45\u4EE3) \u6700\u5927\u5927\u5C0F,\u8D85\u8FC7\u8FD9\u4E2A\u503C\u5C06\u4F1A\u629B\u51FA OutOfMemoryError \u5F02\u5E38:java.lang.OutOfMemoryError: PermGen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F8\u5BF9\u800C\u8A00\uFF0C\u5783\u573E\u6536\u96C6\u884C\u4E3A\u5728\u8FD9\u4E2A\u533A\u57DF\u662F\u6BD4\u8F83\u5C11\u51FA\u73B0\u7684\uFF0C\u4F46\u5E76\u975E\u6570\u636E\u8FDB\u5165\u65B9\u6CD5\u533A\u540E\u5C31\u201C\u6C38\u4E45\u5B58\u5728\u201D\u4E86\u3002</p><p>JDK 1.8 \u7684\u65F6\u5019\uFF0C\u65B9\u6CD5\u533A\uFF08HotSpot \u7684\u6C38\u4E45\u4EE3\uFF09\u88AB\u5F7B\u5E95\u79FB\u9664\u4E86\uFF08JDK1.7 \u5C31\u5DF2\u7ECF\u5F00\u59CB\u4E86\uFF09\uFF0C\u53D6\u800C\u4EE3\u4E4B\u662F\u5143\u7A7A\u95F4\uFF0C\u5143\u7A7A\u95F4\u4F7F\u7528\u7684\u662F\u76F4\u63A5\u5185\u5B58\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-XX:MetaspaceSize=N //\u8BBE\u7F6E Metaspace \u7684\u521D\u59CB\uFF08\u548C\u6700\u5C0F\u5927\u5C0F\uFF09
-XX:MaxMetaspaceSize=N //\u8BBE\u7F6E Metaspace \u7684\u6700\u5927\u5927\u5C0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0E\u6C38\u4E45\u4EE3\u5F88\u5927\u7684\u4E0D\u540C\u5C31\u662F\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u5927\u5C0F\u7684\u8BDD\uFF0C\u968F\u7740\u66F4\u591A\u7C7B\u7684\u521B\u5EFA\uFF0C\u865A\u62DF\u673A\u4F1A\u8017\u5C3D\u6240\u6709\u53EF\u7528\u7684\u7CFB\u7EDF\u5185\u5B58\u3002</p><h4 id="_2-5-3-\u4E3A\u4EC0\u4E48\u8981\u5C06\u6C38\u4E45\u4EE3-permgen-\u66FF\u6362\u4E3A\u5143\u7A7A\u95F4-metaspace-\u5462" tabindex="-1"><a class="header-anchor" href="#_2-5-3-\u4E3A\u4EC0\u4E48\u8981\u5C06\u6C38\u4E45\u4EE3-permgen-\u66FF\u6362\u4E3A\u5143\u7A7A\u95F4-metaspace-\u5462" aria-hidden="true">#</a> 2.5.3 \u4E3A\u4EC0\u4E48\u8981\u5C06\u6C38\u4E45\u4EE3 (PermGen) \u66FF\u6362\u4E3A\u5143\u7A7A\u95F4 (MetaSpace) \u5462?</h4><p><strong>\u6574\u4E2A\u6C38\u4E45\u4EE3\u6709\u4E00\u4E2A JVM \u672C\u8EAB\u8BBE\u7F6E\u56FA\u5B9A\u5927\u5C0F\u4E0A\u7EBF\uFF0C\u65E0\u6CD5\u8C03\u6574\uFF0C\u800C\u5143\u7A7A\u95F4\u4F7F\u7528\u76F4\u63A5\u5185\u5B58\uFF0C\u53D7\u672C\u673A\u53EF\u7528\u5185\u5B58\u7684\u9650\u5236</strong>\uFF0C\u5E76\u4E14\u6C38\u8FDC\u4E0D\u4F1A\u5F97\u5230 java.lang.OutOfMemoryError\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>-XX\uFF1AMaxMetaspaceSize</code> \u6807\u5FD7\u8BBE\u7F6E\u6700\u5927\u5143\u7A7A\u95F4\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u503C\u4E3A unlimited\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u53EA\u53D7\u7CFB\u7EDF\u5185\u5B58\u7684\u9650\u5236\u3002<code>-XX\uFF1AMetaspaceSize</code> \u8C03\u6574\u6807\u5FD7\u5B9A\u4E49\u5143\u7A7A\u95F4\u7684\u521D\u59CB\u5927\u5C0F\u5982\u679C\u672A\u6307\u5B9A\u6B64\u6807\u5FD7\uFF0C\u5219 Metaspace \u5C06\u6839\u636E\u8FD0\u884C\u65F6\u7684\u5E94\u7528\u7A0B\u5E8F\u9700\u6C42\u52A8\u6001\u5730\u91CD\u65B0\u8C03\u6574\u5927\u5C0F\u3002</p><h3 id="_2-6-\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60" tabindex="-1"><a class="header-anchor" href="#_2-6-\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60" aria-hidden="true">#</a> 2.6 \u8FD0\u884C\u65F6\u5E38\u91CF\u6C60</h3><p>\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60\u662F\u65B9\u6CD5\u533A\u7684\u4E00\u90E8\u5206\u3002Class \u6587\u4EF6\u4E2D\u9664\u4E86\u6709\u7C7B\u7684\u7248\u672C\u3001\u5B57\u6BB5\u3001\u65B9\u6CD5\u3001\u63A5\u53E3\u7B49\u63CF\u8FF0\u4FE1\u606F\u5916\uFF0C\u8FD8\u6709\u5E38\u91CF\u6C60\u4FE1\u606F\uFF08\u7528\u4E8E\u5B58\u653E\u7F16\u8BD1\u671F\u751F\u6210\u7684\u5404\u79CD\u5B57\u9762\u91CF\u548C\u7B26\u53F7\u5F15\u7528\uFF09</p><p>\u65E2\u7136\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60\u662F\u65B9\u6CD5\u533A\u7684\u4E00\u90E8\u5206\uFF0C\u81EA\u7136\u53D7\u5230\u65B9\u6CD5\u533A\u5185\u5B58\u7684\u9650\u5236\uFF0C\u5F53\u5E38\u91CF\u6C60\u65E0\u6CD5\u518D\u7533\u8BF7\u5230\u5185\u5B58\u65F6\u4F1A\u629B\u51FA OutOfMemoryError \u5F02\u5E38\u3002</p><p><strong>JDK1.7 \u53CA\u4E4B\u540E\u7248\u672C\u7684 JVM \u5DF2\u7ECF\u5C06\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60\u4ECE\u65B9\u6CD5\u533A\u4E2D\u79FB\u4E86\u51FA\u6765\uFF0C\u5728 Java \u5806\uFF08Heap\uFF09\u4E2D\u5F00\u8F9F\u4E86\u4E00\u5757\u533A\u57DF\u5B58\u653E\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60\u3002</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190924003048984.png" alt="image-20190924003048984"></p><h3 id="_2-7-\u76F4\u63A5\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-7-\u76F4\u63A5\u5185\u5B58" aria-hidden="true">#</a> 2.7 \u76F4\u63A5\u5185\u5B58</h3><p><strong>\u76F4\u63A5\u5185\u5B58\u5E76\u4E0D\u662F\u865A\u62DF\u673A\u8FD0\u884C\u65F6\u6570\u636E\u533A\u7684\u4E00\u90E8\u5206\uFF0C\u4E5F\u4E0D\u662F\u865A\u62DF\u673A\u89C4\u8303\u4E2D\u5B9A\u4E49\u7684\u5185\u5B58\u533A\u57DF\uFF0C\u4F46\u662F\u8FD9\u90E8\u5206\u5185\u5B58\u4E5F\u88AB\u9891\u7E41\u5730\u4F7F\u7528\u3002\u800C\u4E14\u4E5F\u53EF\u80FD\u5BFC\u81F4 OutOfMemoryError \u5F02\u5E38\u51FA\u73B0\u3002</strong></p><p>JDK1.4 \u4E2D\u65B0\u52A0\u5165\u7684 <strong>NIO(New Input/Output) \u7C7B</strong>\uFF0C\u5F15\u5165\u4E86\u4E00\u79CD\u57FA\u4E8E<strong>\u901A\u9053\uFF08Channel\uFF09</strong> \u4E0E<strong>\u7F13\u5B58\u533A\uFF08Buffer\uFF09</strong> \u7684 I/O \u65B9\u5F0F\uFF0C\u5B83\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Native \u51FD\u6570\u5E93\u76F4\u63A5\u5206\u914D\u5806\u5916\u5185\u5B58\uFF0C\u7136\u540E\u901A\u8FC7\u4E00\u4E2A\u5B58\u50A8\u5728 Java \u5806\u4E2D\u7684 DirectByteBuffer \u5BF9\u8C61\u4F5C\u4E3A\u8FD9\u5757\u5185\u5B58\u7684\u5F15\u7528\u8FDB\u884C\u64CD\u4F5C\u3002\u8FD9\u6837\u5C31\u80FD\u5728\u4E00\u4E9B\u573A\u666F\u4E2D\u663E\u8457\u63D0\u9AD8\u6027\u80FD\uFF0C\u56E0\u4E3A<strong>\u907F\u514D\u4E86\u5728 Java \u5806\u548C Native \u5806\u4E4B\u95F4\u6765\u56DE\u590D\u5236\u6570\u636E</strong>\u3002</p><p>\u672C\u673A\u76F4\u63A5\u5185\u5B58\u7684\u5206\u914D\u4E0D\u4F1A\u53D7\u5230 Java \u5806\u7684\u9650\u5236\uFF0C\u4F46\u662F\uFF0C\u65E2\u7136\u662F\u5185\u5B58\u5C31\u4F1A\u53D7\u5230\u672C\u673A\u603B\u5185\u5B58\u5927\u5C0F\u4EE5\u53CA\u5904\u7406\u5668\u5BFB\u5740\u7A7A\u95F4\u7684\u9650\u5236\u3002</p>`,63),i=[n];function s(p,l){return e(),r("div",null,i)}var c=a(o,[["render",s],["__file","JVM\u57FA\u7840-Java\u5185\u5B58\u7ED3\u6784-\u7CBE\u7B80\u7248.html.vue"]]);export{c as default};
