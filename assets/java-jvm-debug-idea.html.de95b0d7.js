import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as l,a as e,b as o,d as n,r as g}from"./app.75100209.js";const p={},t=n('<h1 id="\u8C03\u8BD5\u6392\u9519-java-\u95EE\u9898\u6392\u67E5\u4E4B\u4F7F\u7528idea\u672C\u5730\u8C03\u8BD5\u548C\u8FDC\u7A0B\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8BD5\u6392\u9519-java-\u95EE\u9898\u6392\u67E5\u4E4B\u4F7F\u7528idea\u672C\u5730\u8C03\u8BD5\u548C\u8FDC\u7A0B\u8C03\u8BD5" aria-hidden="true">#</a> \u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4B\u4F7F\u7528IDEA\u672C\u5730\u8C03\u8BD5\u548C\u8FDC\u7A0B\u8C03\u8BD5</h1><blockquote><p>Debug\u7528\u6765\u8FFD\u8E2A\u4EE3\u7801\u7684\u8FD0\u884C\u6D41\u7A0B\uFF0C\u901A\u5E38\u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u5F02\u5E38\uFF0C\u542F\u7528Debug\u6A21\u5F0F\u53EF\u4EE5\u5206\u6790\u5B9A\u4F4D\u5F02\u5E38\u53D1\u751F\u7684\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53C2\u6570\u7684\u53D8\u5316\uFF1B\u5E76\u4E14\u5728\u5B9E\u9645\u7684\u6392\u9519\u8FC7\u7A0B\u4E2D\uFF0C\u8FD8\u4F1A\u7528\u5230Remote Debug\u3002IDEA \u76F8\u6BD4 Eclipse/STS\u6548\u7387\u66F4\u9AD8\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u57FA\u4E8EIDEA\u7684Debug\u548CRemote Debug\u7684\u6280\u5DE7\u3002</p></blockquote><h2 id="_1-debug\u5F00\u7BC7" tabindex="-1"><a class="header-anchor" href="#_1-debug\u5F00\u7BC7" aria-hidden="true">#</a> 1. Debug\u5F00\u7BC7</h2><blockquote><p>\u9996\u5148\u770B\u4E0BIDEA\u4E2DDebug\u6A21\u5F0F\u4E0B\u7684\u754C\u9762\u3002</p></blockquote><p>\u5982\u4E0B\u662F\u5728IDEA\u4E2D\u542F\u52A8Debug\u6A21\u5F0F\uFF0C\u8FDB\u5165\u65AD\u70B9\u540E\u7684\u754C\u9762\uFF0C\u6211\u8FD9\u91CC\u662FWindows\uFF0C\u53EF\u80FD\u548CMac\u7684\u56FE\u6807\u7B49\u4F1A\u6709\u4E9B\u4E0D\u4E00\u6837\u3002\u5C31\u7B80\u5355\u8BF4\u4E0B\u56FE\u4E2D\u6807\u6CE8\u76848\u4E2A\u5730\u65B9\uFF1A</p><ul><li>\u2460 \u4EE5Debug\u6A21\u5F0F\u542F\u52A8\u670D\u52A1\uFF0C\u5DE6\u8FB9\u7684\u4E00\u4E2A\u6309\u94AE\u5219\u662F\u4EE5Run\u6A21\u5F0F\u542F\u52A8\u3002\u5728\u5F00\u53D1\u4E2D\uFF0C\u6211\u4E00\u822C\u4F1A\u76F4\u63A5\u542F\u52A8Debug\u6A21\u5F0F\uFF0C\u65B9\u4FBF\u968F\u65F6\u8C03\u8BD5\u4EE3\u7801\u3002</li><li>\u2461 \u65AD\u70B9\uFF1A\u5728\u5DE6\u8FB9\u884C\u53F7\u680F\u5355\u51FB\u5DE6\u952E\uFF0C\u6216\u8005\u5FEB\u6377\u952ECtrl+F8 \u6253\u4E0A/\u53D6\u6D88\u65AD\u70B9\uFF0C\u65AD\u70B9\u884C\u7684\u989C\u8272\u53EF\u81EA\u5DF1\u53BB\u8BBE\u7F6E\u3002</li><li>\u2462 Debug\u7A97\u53E3\uFF1A\u8BBF\u95EE\u8BF7\u6C42\u5230\u8FBE\u7B2C\u4E00\u4E2A\u65AD\u70B9\u540E\uFF0C\u4F1A\u81EA\u52A8\u6FC0\u6D3BDebug\u7A97\u53E3\u3002\u5982\u679C\u6CA1\u6709\u81EA\u52A8\u6FC0\u6D3B\uFF0C\u53EF\u4EE5\u53BB\u8BBE\u7F6E\u91CC\u8BBE\u7F6E\uFF0C\u5982\u56FE1.2\u3002</li><li>\u2463 \u8C03\u8BD5\u6309\u94AE\uFF1A\u4E00\u5171\u67098\u4E2A\u6309\u94AE\uFF0C\u8C03\u8BD5\u7684\u4E3B\u8981\u529F\u80FD\u5C31\u5BF9\u5E94\u7740\u8FD9\u51E0\u4E2A\u6309\u94AE\uFF0C\u9F20\u6807\u60AC\u505C\u5728\u6309\u94AE\u4E0A\u53EF\u4EE5\u67E5\u770B\u5BF9\u5E94\u7684\u5FEB\u6377\u952E\u3002\u5728\u83DC\u5355\u680FRun\u91CC\u53EF\u4EE5\u627E\u5230\u540C\u6837\u7684\u5BF9\u5E94\u7684\u529F\u80FD\uFF0C\u5982\u56FE1.4\u3002</li><li>\u2464 \u670D\u52A1\u6309\u94AE\uFF1A\u53EF\u4EE5\u5728\u8FD9\u91CC\u5173\u95ED/\u542F\u52A8\u670D\u52A1\uFF0C\u8BBE\u7F6E\u65AD\u70B9\u7B49\u3002</li><li>\u2465 \u65B9\u6CD5\u8C03\u7528\u6808\uFF1A\u8FD9\u91CC\u663E\u793A\u4E86\u8BE5\u7EBF\u7A0B\u8C03\u8BD5\u6240\u7ECF\u8FC7\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u52FE\u9009\u53F3\u4E0A\u89D2\u7684[Show All Frames]\u6309\u94AE\uFF0C\u5C31\u4E0D\u4F1A\u663E\u793A\u5176\u5B83\u7C7B\u5E93\u7684\u65B9\u6CD5\u4E86\uFF0C\u5426\u5219\u8FD9\u91CC\u4F1A\u6709\u4E00\u5927\u5806\u7684\u65B9\u6CD5\u3002</li><li>\u2466 Variables\uFF1A\u5728\u53D8\u91CF\u533A\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u65AD\u70B9\u4E4B\u524D\u7684\u5F53\u524D\u65B9\u6CD5\u5185\u7684\u53D8\u91CF\u3002</li><li>\u2467 Watches\uFF1A\u67E5\u770B\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5C06Variables\u533A\u4E2D\u7684\u53D8\u91CF\u62D6\u5230Watches\u4E2D\u67E5\u770B</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828203806237.png" alt="image-20220828203806237" loading="lazy"></p><p>\u5728\u8BBE\u7F6E\u91CC\u52FE\u9009Show debug window on breakpoint\uFF0C\u5219\u8BF7\u6C42\u8FDB\u5165\u5230\u65AD\u70B9\u540E\u81EA\u52A8\u6FC0\u6D3BDebug\u7A97\u53E3</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828204116868.png" alt="image-20220828204116868" loading="lazy"></p><p>\u5982\u679C\u4F60\u7684IDEA\u5E95\u90E8\u6CA1\u6709\u663E\u793A\u5DE5\u5177\u680F\u6216\u72B6\u6001\u680F\uFF0C\u53EF\u4EE5\u5728View\u91CC\u6253\u5F00\uFF0C\u663E\u793A\u51FA\u5DE5\u5177\u680F\u4F1A\u65B9\u4FBF\u6211\u4EEC\u4F7F\u7528\u3002\u53EF\u4EE5\u81EA\u5DF1\u53BB\u5C1D\u8BD5\u4E0B\u8FD9\u56DB\u4E2A\u9009\u9879\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828204149935.png" alt="image-20220828204149935" loading="lazy"></p><p>\u5728\u83DC\u5355\u680FRun\u91CC\u6709\u8C03\u8BD5\u5BF9\u5E94\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u53EF\u4EE5\u67E5\u770B\u5BF9\u5E94\u7684\u5FEB\u6377\u952E\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828204224378.png" alt="image-20220828204224378" loading="lazy"></p><h2 id="_2-\u57FA\u672C\u7528\u6CD5-\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u672C\u7528\u6CD5-\u5FEB\u6377\u952E" aria-hidden="true">#</a> 2. \u57FA\u672C\u7528\u6CD5&amp;\u5FEB\u6377\u952E</h2><p>Debug\u8C03\u8BD5\u7684\u529F\u80FD\u4E3B\u8981\u5BF9\u5E94\u7740\u56FE\u4E00\u4E2D4\u548C5\u4E24\u7EC4\u6309\u94AE\uFF1A</p><ul><li><strong>\u9996\u5148\u8BF4\u7B2C\u4E00\u7EC4\u6309\u94AE\uFF0C\u51718\u4E2A\u6309\u94AE</strong>\uFF0C\u4ECE\u5DE6\u5230\u53F3\u4F9D\u6B21\u5982\u4E0B\uFF1A</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828204244968.png" alt="image-20220828204244968" loading="lazy"></p><ul><li><p><code>Show Execution Point</code> (Alt + F10)\uFF1A\u5982\u679C\u4F60\u7684\u5149\u6807\u5728\u5176\u5B83\u884C\u6216\u5176\u5B83\u9875\u9762\uFF0C\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u53EF\u8DF3\u8F6C\u5230\u5F53\u524D\u4EE3\u7801\u6267\u884C\u7684\u884C\u3002</p></li><li><p><code>Step Over</code> (F8)\uFF1A\u6B65\u8FC7\uFF0C\u4E00\u884C\u4E00\u884C\u5730\u5F80\u4E0B\u8D70\uFF0C\u5982\u679C\u8FD9\u4E00\u884C\u4E0A\u6709\u65B9\u6CD5\u4E0D\u4F1A\u8FDB\u5165\u65B9\u6CD5\u3002</p></li><li><p><code>Step Into</code> (F7)\uFF1A\u6B65\u5165\uFF0C\u5982\u679C\u5F53\u524D\u884C\u6709\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8FDB\u5165\u65B9\u6CD5\u5185\u90E8\uFF0C\u4E00\u822C\u7528\u4E8E\u8FDB\u5165\u81EA\u5B9A\u4E49\u65B9\u6CD5\u5185\uFF0C\u4E0D\u4F1A\u8FDB\u5165\u5B98\u65B9\u7C7B\u5E93\u7684\u65B9\u6CD5\uFF0C\u5982\u7B2C25\u884C\u7684put\u65B9\u6CD5\u3002</p></li><li><p><code>Force Step Into</code> (Alt + Shift + F7)\uFF1A\u5F3A\u5236\u6B65\u5165\uFF0C\u80FD\u8FDB\u5165\u4EFB\u4F55\u65B9\u6CD5\uFF0C\u67E5\u770B\u5E95\u5C42\u6E90\u7801\u7684\u65F6\u5019\u53EF\u4EE5\u7528\u8FD9\u4E2A\u8FDB\u5165\u5B98\u65B9\u7C7B\u5E93\u7684\u65B9\u6CD5\u3002</p></li><li><p><code>Step Out</code> (Shift + F8)\uFF1A\u6B65\u51FA\uFF0C\u4ECE\u6B65\u5165\u7684\u65B9\u6CD5\u5185\u9000\u51FA\u5230\u65B9\u6CD5\u8C03\u7528\u5904\uFF0C\u6B64\u65F6\u65B9\u6CD5\u5DF2\u6267\u884C\u5B8C\u6BD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u5B8C\u6210\u8D4B\u503C\u3002</p></li><li><p><code>Drop Frame</code> (\u9ED8\u8BA4\u65E0)\uFF1A\u56DE\u9000\u65AD\u70B9\uFF0C\u540E\u9762\u7AE0\u8282\u8BE6\u7EC6\u8BF4\u660E\u3002</p></li><li><p><code>Run to Cursor</code> (Alt + F9)\uFF1A\u8FD0\u884C\u5230\u5149\u6807\u5904\uFF0C\u4F60\u53EF\u4EE5\u5C06\u5149\u6807\u5B9A\u4F4D\u5230\u4F60\u9700\u8981\u67E5\u770B\u7684\u90A3\u4E00\u884C\uFF0C\u7136\u540E\u4F7F\u7528\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4EE3\u7801\u4F1A\u8FD0\u884C\u81F3\u5149\u6807\u884C\uFF0C\u800C\u4E0D\u9700\u8981\u6253\u65AD\u70B9\u3002</p></li><li><p><code>Evaluate Expression</code> (Alt + F8)\uFF1A\u8BA1\u7B97\u8868\u8FBE\u5F0F\uFF0C\u540E\u9762\u7AE0\u8282\u8BE6\u7EC6\u8BF4\u660E\u3002</p></li><li><p><strong>\u7B2C\u4E8C\u7EC4\u6309\u94AE\uFF0C\u51717\u4E2A\u6309\u94AE</strong>\uFF0C\u4ECE\u4E0A\u5230\u4E0B\u4F9D\u6B21\u5982\u4E0B\uFF1A</p></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205303504.png" alt="image-20220828205303504" loading="lazy"></p><ul><li><p><code>Rerun &#39;xxxx&#39;</code>\uFF1A\u91CD\u65B0\u8FD0\u884C\u7A0B\u5E8F\uFF0C\u4F1A\u5173\u95ED\u670D\u52A1\u540E\u91CD\u65B0\u542F\u52A8\u7A0B\u5E8F\u3002</p></li><li><p><code>Update &#39;tech&#39; application</code> (Ctrl + F5)\uFF1A\u66F4\u65B0\u7A0B\u5E8F\uFF0C\u4E00\u822C\u5728\u4F60\u7684\u4EE3\u7801\u6709\u6539\u52A8\u540E\u53EF\u6267\u884C\u8FD9\u4E2A\u529F\u80FD\u3002\u800C\u8FD9\u4E2A\u529F\u80FD\u5BF9\u5E94\u7684\u64CD\u4F5C\u5219\u662F\u5728\u670D\u52A1\u914D\u7F6E\u91CC\uFF0C\u5982\u56FE2.3\u3002</p></li><li><p><code>Resume Program</code> (F9)\uFF1A\u6062\u590D\u7A0B\u5E8F\uFF0C\u6BD4\u5982\uFF0C\u4F60\u5728\u7B2C20\u884C\u548C25\u884C\u6709\u4E24\u4E2A\u65AD\u70B9\uFF0C\u5F53\u524D\u8FD0\u884C\u81F3\u7B2C20\u884C\uFF0C\u6309F9\uFF0C\u5219\u8FD0\u884C\u5230\u4E0B\u4E00\u4E2A\u65AD\u70B9(\u5373\u7B2C25\u884C)\uFF0C\u518D\u6309F9\uFF0C\u5219\u8FD0\u884C\u5B8C\u6574\u4E2A\u6D41\u7A0B\uFF0C\u56E0\u4E3A\u540E\u9762\u5DF2\u7ECF\u6CA1\u6709\u65AD\u70B9\u4E86\u3002</p></li><li><p><code>Pause Program</code>\uFF1A\u6682\u505C\u7A0B\u5E8F\uFF0C\u542F\u7528Debug\u3002\u76EE\u524D\u6CA1\u53D1\u73B0\u5177\u4F53\u7528\u6CD5\u3002</p></li><li><p><code>Stop &#39;xxx&#39;</code> (Ctrl + F2)\uFF1A\u8FDE\u7EED\u6309\u4E24\u4E0B\uFF0C\u5173\u95ED\u7A0B\u5E8F\u3002\u6709\u65F6\u5019\u4F60\u4F1A\u53D1\u73B0\u5173\u95ED\u670D\u52A1\u518D\u542F\u52A8\u65F6\uFF0C\u62A5\u7AEF\u53E3\u88AB\u5360\u7528\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6CA1\u5B8C\u5168\u5173\u95ED\u670D\u52A1\u7684\u539F\u56E0\uFF0C\u4F60\u5C31\u9700\u8981\u67E5\u6740\u6240\u6709JVM\u8FDB\u7A0B\u4E86\u3002</p></li><li><p><code>View Breakpoints</code> (Ctrl + Shift + F8)\uFF1A\u67E5\u770B\u6240\u6709\u65AD\u70B9\uFF0C\u540E\u9762\u7AE0\u8282\u4F1A\u6D89\u53CA\u5230\u3002</p></li><li><p><code>Mute Breakpoints</code>\uFF1A\u54D1\u7684\u65AD\u70B9\uFF0C\u9009\u62E9\u8FD9\u4E2A\u540E\uFF0C\u6240\u6709\u65AD\u70B9\u53D8\u4E3A\u7070\u8272\uFF0C\u65AD\u70B9\u5931\u6548\uFF0C\u6309F9\u5219\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C\u5B8C\u7A0B\u5E8F\u3002\u518D\u6B21\u70B9\u51FB\uFF0C\u65AD\u70B9\u53D8\u4E3A\u7EA2\u8272\uFF0C\u6709\u6548\u3002\u5982\u679C\u53EA\u60F3\u4F7F\u67D0\u4E00\u4E2A\u65AD\u70B9\u5931\u6548\uFF0C\u53EF\u4EE5\u5728\u65AD\u70B9\u4E0A\u53F3\u952E\u53D6\u6D88Enabled\uFF0C\u5219\u8BE5\u884C\u65AD\u70B9\u5931\u6548\u3002</p></li><li><p><strong>\u66F4\u65B0\u7A0B\u5E8F</strong></p></li></ul><p><code>On &#39;Update&#39; actions</code>\uFF0C\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\u65F6\u6240\u505A\u7684\u4E8B\u60C5\uFF0C\u4E00\u822C\u9009\u62E9<code>&#39;Update classes and resources&#39;</code>\uFF0C\u5373\u66F4\u65B0\u7C7B\u548C\u8D44\u6E90\u6587\u4EF6\u3002</p><p>\u4E00\u822C\u914D\u5408\u70ED\u90E8\u7F72\u63D2\u4EF6\u4F1A\u66F4\u597D\u7528\uFF0C\u5982JRebel\uFF0C\u8FD9\u6837\u5C31\u4E0D\u7528\u6BCF\u6B21\u66F4\u6539\u4EE3\u7801\u540E\u8FD8\u8981\u53BB\u91CD\u65B0\u542F\u52A8\u670D\u52A1\u3002\u5982\u4F55\u6FC0\u6D3BJRebel\uFF0C\u5728\u6700\u540E\u7AE0\u8282\u9644\u4E0A\u3002</p><p>\u4E0B\u9762\u7684<code>On frame deactivation</code>\uFF0C\u5728IDEA\u7A97\u53E3\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\uFF0C\u5373\u4E00\u822C\u4F60\u4ECEidea\u5207\u6362\u5230\u6D4F\u89C8\u5668\u7684\u65F6\u5019\uFF0Cidea\u4F1A\u81EA\u52A8\u5E2E\u4F60\u505A\u7684\u4E8B\u60C5\uFF0C\u4E00\u822C\u53EF\u4EE5\u8BBE\u7F6EDo nothing\uFF0C\u9891\u7E41\u5207\u6362\u4F1A\u6BD4\u8F83\u6D88\u8017\u8D44\u6E90\u7684\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205544563.png" alt="image-20220828205544563" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205639068.png" alt="image-20220828205639068" loading="lazy"></p><h2 id="_3-\u53D8\u91CF\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#_3-\u53D8\u91CF\u67E5\u770B" aria-hidden="true">#</a> 3. \u53D8\u91CF\u67E5\u770B</h2><blockquote><p>\u5728Debug\u8FC7\u7A0B\u4E2D\uFF0C\u8DDF\u8E2A\u67E5\u770B\u53D8\u91CF\u7684\u53D8\u5316\u662F\u975E\u5E38\u5FC5\u8981\u7684\uFF0C\u8FD9\u91CC\u5C31\u7B80\u5355\u8BF4\u4E0BIDEA\u4E2D\u53EF\u4EE5\u67E5\u770B\u53D8\u91CF\u7684\u51E0\u4E2A\u5730\u65B9\uFF0C\u76F8\u4FE1\u5927\u90E8\u5206\u4EBA\u90FD\u4E86\u89E3\u3002</p></blockquote><ul><li>\u5982\u4E0B\uFF0C\u5728IDEA\u4E2D\uFF0C\u53C2\u6570\u6240\u5728\u884C\u540E\u9762\u4F1A\u663E\u793A\u5F53\u524D\u53D8\u91CF\u7684\u503C\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205755453.png" alt="image-20220828205755453" loading="lazy"></p><ul><li>\u5149\u6807\u60AC\u505C\u5230\u53C2\u6570\u4E0A\uFF0C\u663E\u793A\u5F53\u524D\u53D8\u91CF\u4FE1\u606F\u3002\u70B9\u51FB\u6253\u5F00\u8BE6\u60C5\u5982\u4E0B\u56FE\u3002\u6211\u4E00\u822C\u4F1A\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5FEB\u6377\u65B9\u4FBF\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205819195.png" alt="image-20220828205819195" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205827074.png" alt="image-20220828205827074" loading="lazy"></p><ul><li>\u5728Variables\u91CC\u67E5\u770B\uFF0C\u8FD9\u91CC\u663E\u793A\u5F53\u524D\u65B9\u6CD5\u91CC\u7684\u6240\u6709\u53D8\u91CF\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205850946.png" alt="image-20220828205850946" loading="lazy"></p><ul><li>\u5728Watches\u91CC\uFF0C\u70B9\u51FBNew Watch\uFF0C\u8F93\u5165\u9700\u8981\u67E5\u770B\u7684\u53D8\u91CF\u3002\u6216\u8005\u53EF\u4EE5\u4ECEVariables\u91CC\u62D6\u5230Watche\u91CC\u67E5\u770B\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205933048.png" alt="image-20220828205933048" loading="lazy"></p><p>\u5982\u679C\u4F60\u53D1\u73B0\u4F60\u6CA1\u6709Watches\uFF0C\u53EF\u80FD\u5728\u4E0B\u56FE\u6240\u5728\u7684\u5730\u65B9\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828205958294.png" alt="image-20220828205958294" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210007986.png" alt="image-20220828210007986" loading="lazy"></p><h2 id="_4-\u8BA1\u7B97\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u8BA1\u7B97\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 4. \u8BA1\u7B97\u8868\u8FBE\u5F0F</h2><blockquote><p>\u5728\u524D\u9762\u63D0\u5230\u7684\u8BA1\u7B97\u8868\u8FBE\u5F0F\u5982\u4E0B\u56FE\u7684\u6309\u94AE\uFF0CEvaluate Expression (Alt + F8) \u3002\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u64CD\u4F5C\u5728\u8C03\u8BD5\u8FC7\u7A0B\u4E2D\u8BA1\u7B97\u67D0\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u800C\u4E0D\u7528\u518D\u53BB\u6253\u5370\u4FE1\u606F\u3002</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210534232.png" alt="image-20220828210534232" loading="lazy"></p><ul><li>\u6309Alt + F8\u6216\u6309\u94AE\uFF0C\u6216\u8005\uFF0C\u4F60\u53EF\u4EE5\u9009\u4E2D\u67D0\u4E2A\u8868\u8FBE\u5F0F\u518DAlt + F8\uFF0C\u5F39\u51FA\u8BA1\u7B97\u8868\u8FBE\u5F0F\u7684\u7A97\u53E3\uFF0C\u5982\u4E0B\uFF0C\u56DE\u8F66\u6216\u70B9\u51FBEvaluate\u8BA1\u7B97\u8868\u8FBE\u5F0F\u7684\u503C\u3002</li></ul><p>\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u4E0D\u4EC5\u53EF\u4EE5\u662F\u4E00\u822C\u53D8\u91CF\u6216\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u65B9\u6CD5\uFF0C\u5F53\u4F60\u7684\u4E00\u884C\u4EE3\u7801\u4E2D\u8C03\u7528\u4E86\u51E0\u4E2A\u65B9\u6CD5\u65F6\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u67E5\u770B\u67E5\u770B\u67D0\u4E2A\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210608852.png" alt="image-20220828210608852" loading="lazy"></p><p>\u8BBE\u7F6E\u53D8\u91CF\uFF0C\u5728\u8BA1\u7B97\u8868\u8FBE\u5F0F\u7684\u6846\u91CC\uFF0C\u53EF\u4EE5\u6539\u53D8\u53D8\u91CF\u7684\u503C\uFF0C\u8FD9\u6837\u6709\u65F6\u5019\u5C31\u80FD\u5F88\u65B9\u4FBF\u6211\u4EEC\u53BB\u8C03\u8BD5\u5404\u79CD\u503C\u7684\u60C5\u51B5\u4E86\u4E0D\u662F</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210634451.png" alt="image-20220828210634451" loading="lazy"></p><h2 id="_5-\u667A\u80FD\u6B65\u5165" tabindex="-1"><a class="header-anchor" href="#_5-\u667A\u80FD\u6B65\u5165" aria-hidden="true">#</a> 5. \u667A\u80FD\u6B65\u5165</h2><blockquote><p>\u60F3\u60F3\uFF0C\u4E00\u884C\u4EE3\u7801\u91CC\u6709\u597D\u51E0\u4E2A\u65B9\u6CD5\uFF0C\u600E\u4E48\u53EA\u9009\u62E9\u67D0\u4E00\u4E2A\u65B9\u6CD5\u8FDB\u5165\u3002\u4E4B\u524D\u63D0\u5230\u8FC7\u4F7F\u7528Step Into (Alt + F7) \u6216\u8005 Force Step Into (Alt + Shift + F7)\u8FDB\u5165\u5230\u65B9\u6CD5\u5185\u90E8\uFF0C\u4F46\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u4F1A\u6839\u636E\u65B9\u6CD5\u8C03\u7528\u987A\u5E8F\u4F9D\u6B21\u8FDB\u5165\uFF0C\u8FD9\u6BD4\u8F83\u9EBB\u70E6\u3002</p></blockquote><p>\u90A3\u4E48\u667A\u80FD\u6B65\u5165\u5C31\u5F88\u65B9\u4FBF\u4E86\uFF0C\u667A\u80FD\u6B65\u5165\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5728Run\u91CC\u53EF\u4EE5\u770B\u5230\uFF0CSmart Step Into (Shift + F7)\uFF0C\u5982\u4E0B\u56FE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210743318.png" alt="image-20220828210743318" loading="lazy"></p><p>\u6309Shift + F7\uFF0C\u4F1A\u81EA\u52A8\u5B9A\u4F4D\u5230\u5F53\u524D\u65AD\u70B9\u884C\uFF0C\u5E76\u5217\u51FA\u9700\u8981\u8FDB\u5165\u7684\u65B9\u6CD5\uFF0C\u5982\u56FE5.2\uFF0C\u70B9\u51FB\u65B9\u6CD5\u8FDB\u5165\u65B9\u6CD5\u5185\u90E8\u3002</p><p>\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5219\u76F4\u63A5\u8FDB\u5165\uFF0C\u7C7B\u4F3CForce Step Into\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210801987.png" alt="image-20220828210801987" loading="lazy"></p><h2 id="_6-\u65AD\u70B9\u6761\u4EF6\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_6-\u65AD\u70B9\u6761\u4EF6\u8BBE\u7F6E" aria-hidden="true">#</a> 6. \u65AD\u70B9\u6761\u4EF6\u8BBE\u7F6E</h2><blockquote><p>\u901A\u8FC7\u8BBE\u7F6E\u65AD\u70B9\u6761\u4EF6\uFF0C\u5728\u6EE1\u8DB3\u6761\u4EF6\u65F6\uFF0C\u624D\u505C\u5728\u65AD\u70B9\u5904\uFF0C\u5426\u5219\u76F4\u63A5\u8FD0\u884C\u3002</p></blockquote><p>\u901A\u5E38\uFF0C\u5F53\u6211\u4EEC\u5728\u904D\u5386\u4E00\u4E2A\u6BD4\u8F83\u5927\u7684\u96C6\u5408\u6216\u6570\u7EC4\u65F6\uFF0C\u5728\u5FAA\u73AF\u5185\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u65AD\u70B9\uFF0C\u96BE\u9053\u6211\u4EEC\u8981\u4E00\u4E2A\u4E00\u4E2A\u53BB\u770B\u53D8\u91CF\u7684\u503C\uFF1F\u90A3\u80AF\u5B9A\u5F88\u7D2F\uFF0C\u8BF4\u4E0D\u5B9A\u4F60\u8FD8\u9519\u8FC7\u8FD9\u4E2A\u503C\u5F97\u91CD\u65B0\u6765\u4E00\u6B21\u3002</p><ul><li>\u5728\u65AD\u70B9\u4E0A\u53F3\u952E\u76F4\u63A5<strong>\u8BBE\u7F6E\u5F53\u524D\u65AD\u70B9\u7684\u6761\u4EF6</strong>\uFF0C\u5982\u4E0B\u56FE\u8BBE\u7F6Eexist\u4E3Atrue\u65F6\u65AD\u70B9\u624D\u751F\u6548\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210844344.png" alt="image-20220828210844344" loading="lazy"></p><ul><li>\u70B9\u51FBView Breakpoints (Ctrl + Shift + F8)\uFF0C\u67E5\u770B\u6240\u6709\u65AD\u70B9 <ul><li>Java Line Breakpoints \u663E\u793A\u4E86\u6240\u6709\u7684\u65AD\u70B9\uFF0C\u5728\u53F3\u8FB9\u52FE\u9009Condition\uFF0C\u8BBE\u7F6E\u65AD\u70B9\u7684\u6761\u4EF6\u3002</li><li>\u52FE\u9009Log message to console\uFF0C\u5219\u4F1A\u5C06\u5F53\u524D\u65AD\u70B9\u884C\u8F93\u51FA\u5230\u63A7\u5236\u53F0\uFF0C\u5982\u56FE6.3</li><li>\u52FE\u9009Evaluate and log\uFF0C\u53EF\u4EE5\u5728\u6267\u884C\u8FD9\u884C\u4EE3\u7801\u662F\u8BA1\u7B97\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u5E76\u5C06\u7ED3\u679C\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u3002</li></ul></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210919557.png" alt="image-20220828210919557" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828210927575.png" alt="image-20220828210927575" loading="lazy"></p><ul><li>\u518D\u8BF4\u8BF4\u53F3\u8FB9\u7684Filters\u8FC7\u6EE4\uFF0C\u8FD9\u4E9B\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u5E38\u7528\uFF0C\u7B80\u5355\u8BF4\u4E0B\u610F\u601D\u3002 <ul><li>Instance filters\uFF1A\u5B9E\u4F8B\u8FC7\u6EE4\uFF0C\u8F93\u5165\u5B9E\u4F8BID(\u5982\u4E0B\u56FE\u4E2D\u7684\u5B9E\u4F8BID)\uFF0C\u4F46\u662F\u6211\u8FD9\u91CC\u6CA1\u6709\u6210\u529F\uFF0C\u4E0D\u77E5\u9053\u4EC0\u4E48\u539F\u56E0\uFF0C\u77E5\u9053\u7684\u670B\u53CB\u7559\u4E2A\u8A00\u3002</li><li>Class filters\uFF1A\u7C7B\u8FC7\u6EE4\uFF0C\u6839\u636E\u7C7B\u540D\u8FC7\u6EE4\uFF0C\u540C\u6837\u6CA1\u6709\u6210\u529F....</li><li>Pass count\uFF1A\u7528\u4E8E\u5FAA\u73AF\u4E2D\uFF0C\u5982\u679C\u65AD\u70B9\u5728\u5FAA\u73AF\u4E2D\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u8BE5\u503C\uFF0C\u5FAA\u73AF\u591A\u5C11\u6B21\u540E\u505C\u5728\u65AD\u70B9\u5904\uFF0C\u4E4B\u540E\u7684\u5FAA\u73AF\u90FD\u4F1A\u505C\u5728\u65AD\u70B9\u5904\u3002</li></ul></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211000796.png" alt="image-20220828211000796" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211011616.png" alt="image-20220828211011616" loading="lazy"></p><ul><li><strong>\u5F02\u5E38\u65AD\u70B9\uFF0C\u901A\u8FC7\u8BBE\u7F6E\u5F02\u5E38\u65AD\u70B9\uFF0C\u5728\u7A0B\u5E8F\u4E2D\u51FA\u73B0\u9700\u8981\u62E6\u622A\u7684\u5F02\u5E38\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5B9A\u4F4D\u5230\u5F02\u5E38\u884C</strong>\u3002</li></ul><p>\u5982\u4E0B\u56FE\uFF0C\u70B9\u51FB+\u53F7\u6DFB\u52A0Java Exception Breakpoints\uFF0C\u6DFB\u52A0\u5F02\u5E38\u65AD\u70B9\u3002\u7136\u540E\u8F93\u5165\u9700\u8981\u65AD\u70B9\u7684\u5F02\u5E38\u7C7B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211034808.png" alt="image-20220828211034808" loading="lazy"></p><p>\u4E4B\u540E\u53EF\u4EE5\u5728Java Exception Breakpoints\u91CC\u770B\u5230\u6DFB\u52A0\u7684\u5F02\u5E38\u65AD\u70B9\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211056741.png" alt="image-20220828211056741" loading="lazy"></p><p>\u8FD9\u91CC\u6DFB\u52A0\u4E86\u4E00\u4E2ANullPointerException\u5F02\u5E38\u65AD\u70B9\uFF0C\u51FA\u73B0\u7A7A\u6307\u9488\u5F02\u5E38\u540E\uFF0C\u81EA\u52A8\u5B9A\u4F4D\u5728\u7A7A\u6307\u9488\u5F02\u5E38\u884C\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211110725.png" alt="image-20220828211110725" loading="lazy"></p><h2 id="_7-\u591A\u7EBF\u7A0B\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_7-\u591A\u7EBF\u7A0B\u8C03\u8BD5" aria-hidden="true">#</a> 7. \u591A\u7EBF\u7A0B\u8C03\u8BD5</h2><blockquote><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u6211\u4EEC\u8C03\u8BD5\u7684\u65F6\u5019\u662F\u5728\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u7684\uFF0C\u4E00\u6B65\u4E00\u6B65\u5F80\u4E0B\u8D70\u3002\u4F46\u6709\u65F6\u5019\u4F60\u4F1A\u53D1\u73B0\u5728Debug\u7684\u65F6\u5019\uFF0C\u60F3\u53D1\u8D77\u53E6\u5916\u4E00\u4E2A\u8BF7\u6C42\u90FD\u65E0\u6CD5\u8FDB\u884C\u4E86\uFF1F</p></blockquote><p>\u90A3\u662F\u56E0\u4E3AIDEA\u5728Debug\u65F6\u9ED8\u8BA4\u963B\u585E\u7EA7\u522B\u662FALL\uFF0C\u4F1A\u963B\u585E\u5176\u5B83\u7EBF\u7A0B\uFF0C\u53EA\u6709\u5728\u5F53\u524D\u8C03\u8BD5\u7EBF\u7A0B\u8D70\u5B8C\u65F6\u624D\u4F1A\u8D70\u5176\u5B83\u7EBF\u7A0B\u3002\u53EF\u4EE5\u5728View Breakpoints\u91CC\u9009\u62E9Thread\uFF0C\u5982\u56FE7.1\uFF0C\u7136\u540E\u70B9\u51FBMake Default\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u9009\u9879\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211435272.png" alt="image-20220828211435272" loading="lazy"></p><p>\u5207\u6362\u7EBF\u7A0B\uFF0C\u5728\u4E0B\u56FE\u4E2DFrames\u7684\u4E0B\u62C9\u5217\u8868\u91CC\uFF0C\u53EF\u4EE5\u5207\u6362\u5F53\u524D\u7684\u7EBF\u7A0B\uFF0C\u5982\u4E0B\u6211\u8FD9\u91CC\u6709\u4E24\u4E2ADebug\u7684\u7EBF\u7A0B\uFF0C\u5207\u6362\u53E6\u5916\u4E00\u4E2A\u5219\u8FDB\u5165\u53E6\u4E00\u4E2ADebug\u7684\u7EBF\u7A0B\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211511341.png" alt="image-20220828211511341" loading="lazy"></p><h2 id="_8-\u56DE\u9000\u65AD\u70B9" tabindex="-1"><a class="header-anchor" href="#_8-\u56DE\u9000\u65AD\u70B9" aria-hidden="true">#</a> 8. \u56DE\u9000\u65AD\u70B9</h2><blockquote><p>\u5728\u8C03\u8BD5\u7684\u65F6\u5019\uFF0C\u60F3\u8981\u91CD\u65B0\u8D70\u4E00\u4E0B\u6D41\u7A0B\u800C\u4E0D\u7528\u518D\u6B21\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\uFF1F</p></blockquote><ul><li>\u9996\u5148\u8BA4\u8BC6\u4E0B\u8FD9\u4E2A<strong>\u65B9\u6CD5\u8C03\u7528\u6808</strong>\uFF0C\u5982\u56FE\u9996\u5148\u8BF7\u6C42\u8FDB\u5165DemoController\u7684insertDemo\u65B9\u6CD5\uFF0C\u7136\u540E\u8C03\u7528insert\u65B9\u6CD5\uFF0C\u5176\u5B83\u7684invoke\u6211\u4EEC\u4E14\u5148\u4E0D\u7BA1\uFF0C\u6700\u4E0A\u9762\u7684\u65B9\u6CD5\u662F\u5F53\u524D\u65AD\u70B9\u6240\u5728\u7684\u65B9\u6CD5\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211758926.png" alt="image-20220828211758926" loading="lazy"></p><ul><li><strong>\u65AD\u70B9\u56DE\u9000</strong></li></ul><p>\u6240\u8C13\u7684\u65AD\u70B9\u56DE\u9000\uFF0C\u5176\u5B9E\u5C31\u662F\u56DE\u9000\u5230\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u8C03\u7528\u7684\u5F00\u59CB\u5904\uFF0C\u5728IDEA\u91CC\u6D4B\u8BD5\u65E0\u6CD5\u4E00\u884C\u4E00\u884C\u5730\u56DE\u9000\u6216\u56DE\u5230\u5230\u4E0A\u4E00\u4E2A\u65AD\u70B9\u5904\uFF0C\u800C\u662F\u56DE\u5230\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u3002</p><p>\u56DE\u9000\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0C\u4E00\u79CD\u662FDrop Frame\u6309\u94AE\uFF0C\u6309\u8C03\u7528\u7684\u65B9\u6CD5\u9010\u6B65\u56DE\u9000\uFF0C\u5305\u62EC\u4E09\u65B9\u7C7B\u5E93\u7684\u5176\u5B83\u65B9\u6CD5</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211842780.png" alt="image-20220828211842780" loading="lazy"></p><p>\u53D6\u6D88Show All Frames\u6309\u94AE\u4F1A\u663E\u793A\u4E09\u65B9\u7C7B\u5E93\u7684\u65B9\u6CD5</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211856257.png" alt="image-20220828211856257" loading="lazy"></p><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF0C\u5728\u8C03\u7528\u6808\u65B9\u6CD5\u4E0A\u9009\u62E9\u8981\u56DE\u9000\u7684\u65B9\u6CD5\uFF0C\u53F3\u952E\u9009\u62E9Drop Frame\uFF0C\u56DE\u9000\u5230\u8BE5\u65B9\u6CD5\u7684\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u8C03\u7528\u5904\uFF0C\u6B64\u65F6\u518D\u6309F9(Resume Program)\uFF0C\u53EF\u4EE5\u770B\u5230\u7A0B\u5E8F\u8FDB\u5165\u5230\u8BE5\u65B9\u6CD5\u7684\u65AD\u70B9\u5904\u4E86\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828211921770.png" alt="image-20220828211921770" loading="lazy"></p><p>\u4F46\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF0C\u65AD\u70B9\u56DE\u9000\u53EA\u80FD\u91CD\u65B0\u8D70\u4E00\u4E0B\u6D41\u7A0B\uFF0C\u4E4B\u524D\u7684\u67D0\u4E9B\u53C2\u6570/\u6570\u636E\u7684\u72B6\u6001\u5DF2\u7ECF\u6539\u53D8\u4E86\u7684\u662F\u65E0\u6CD5\u56DE\u9000\u5230\u4E4B\u524D\u7684\u72B6\u6001\u7684\uFF0C\u5982\u5BF9\u8C61\u3001\u96C6\u5408\u3001\u66F4\u65B0\u4E86\u6570\u636E\u5E93\u6570\u636E\u7B49\u7B49\u3002</p><h2 id="_9-\u4E2D\u65ADdebug" tabindex="-1"><a class="header-anchor" href="#_9-\u4E2D\u65ADdebug" aria-hidden="true">#</a> 9. \u4E2D\u65ADDebug</h2><blockquote><p>\u60F3\u8981\u5728Debug\u7684\u65F6\u5019\uFF0C\u4E2D\u65AD\u8BF7\u6C42\uFF0C\u4E0D\u8981\u518D\u8D70\u5269\u4F59\u7684\u6D41\u7A0B\u4E86\uFF1F</p></blockquote><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u6211\u4EEC\u770B\u5230\u4F20\u5165\u7684\u53C2\u6570\u6709\u8BEF\u540E\uFF0C\u4E0D\u60F3\u8D70\u540E\u9762\u7684\u6D41\u7A0B\u4E86\uFF0C\u600E\u4E48\u4E2D\u65AD\u8FD9\u6B21\u8BF7\u6C42\u5462(\u540E\u9762\u7684\u6D41\u7A0B\u8981\u5220\u9664\u6570\u636E\u5E93\u6570\u636E\u5462....)\uFF0C\u96BE\u9053\u8981\u5173\u95ED\u670D\u52A1\u91CD\u65B0\u542F\u52A8\u7A0B\u5E8F\uFF1F\u55EF\uFF0C\u6211\u4EE5\u524D\u4E5F\u662F\u8FD9\u4E48\u5E72\u7684\u3002</p><p>\u786E\u5207\u7684\u8BF4\uFF0C\u6211\u4E5F\u6CA1\u53D1\u73B0\u53EF\u4EE5\u76F4\u63A5\u4E2D\u65AD\u8BF7\u6C42\u7684\u65B9\u5F0F(\u9664\u4E86\u5173\u95ED\u670D\u52A1)\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7Force Return\uFF0C\u5373\u5F3A\u5236\u8FD4\u56DE\u6765\u907F\u514D\u540E\u7EED\u7684\u6D41\u7A0B\uFF0C\u5982\u56FE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828212058768.png" alt="image-20220828212058768" loading="lazy"></p><p>\u70B9\u51FBForce Return\uFF0C\u5F39\u51FAReturn Value\u7684\u7A97\u53E3\uFF0C\u6211\u8FD9\u4E2A\u65B9\u6CD5\u7684\u8FD4\u56DE\u7C7B\u578B\u4E3AMap\uFF0C\u6240\u4EE5\uFF0C\u6211\u8FD9\u91CC\u76F4\u63A5\u8FD4\u56DE results\uFF0C\u6765\u5F3A\u5236\u8FD4\u56DE\uFF0C\u4ECE\u800C\u4E0D\u518D\u8FDB\u884C\u540E\u7EED\u7684\u6D41\u7A0B\u3002\u6216\u8005\u4F60\u53EF\u4EE5<code>new HashMap&lt;&gt;()</code>\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828212126359.png" alt="image-20220828212126359" loading="lazy"></p><h2 id="_10-\u8FDC\u7A0B\u8C03\u8BD5-remote-debug" tabindex="-1"><a class="header-anchor" href="#_10-\u8FDC\u7A0B\u8C03\u8BD5-remote-debug" aria-hidden="true">#</a> 10. \u8FDC\u7A0B\u8C03\u8BD5(Remote Debug)</h2><blockquote><p>\u6709\u65F6\u5019\uFF0C\u672C\u5730\u8C03\u8BD5\u7684\u65F6\u5019\u6CA1\u6709\u95EE\u9898\uFF0C\u6253\u5305\u90E8\u7F72\u5230\u6D4B\u8BD5\u73AF\u5883\u7684\u65F6\u5019\u5374\u7206\u51FA\u4E00\u5806\u83AB\u540D\u5176\u5999\u7684\u95EE\u9898\uFF0C\u8FD9\u65F6\u8BE5\u600E\u4E48\u529E\u5462\uFF1F</p></blockquote><h3 id="_10-1-\u4F7F\u7528\u7279\u5B9Ajvm\u53C2\u6570\u8FD0\u884C\u670D\u52A1\u7AEF\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_10-1-\u4F7F\u7528\u7279\u5B9Ajvm\u53C2\u6570\u8FD0\u884C\u670D\u52A1\u7AEF\u4EE3\u7801" aria-hidden="true">#</a> 10.1 \u4F7F\u7528\u7279\u5B9AJVM\u53C2\u6570\u8FD0\u884C\u670D\u52A1\u7AEF\u4EE3\u7801</h3><p>\u8981\u8BA9\u8FDC\u7A0B\u670D\u52A1\u5668\u8FD0\u884C\u7684\u4EE3\u7801\u652F\u6301\u8FDC\u7A0B\u8C03\u8BD5\uFF0C\u5219\u542F\u52A8\u7684\u65F6\u5019\u5FC5\u987B\u52A0\u4E0A\u7279\u5B9A\u7684JVM\u53C2\u6570\uFF0C\u8FD9\u4E9B\u53C2\u6570\u662F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-Xdebug</span> <span class="token parameter variable">-Xrunjdwp:transport</span><span class="token operator">=</span>dt_socket,suspend<span class="token operator">=</span>n,server<span class="token operator">=</span>y,address<span class="token operator">=</span><span class="token variable">${debug_port}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u4E2D\u7684<code>${debug_port}</code>\u662F\u7528\u6237\u81EA\u5B9A\u4E49\u7684\uFF0C\u4E3Adebug\u7AEF\u53E3\uFF0C\u672C\u4F8B\u4EE55555\u7AEF\u53E3\u4E3A\u4F8B\u3002</p><p>\u672C\u4EBA\u5728\u8FD9\u91CC\u8E29\u8FC7\u4E00\u4E2A\u5751\uFF0C\u5FC5\u987B\u8981\u8BF4\u4E00\u4E0B\u3002\u5728\u4F7F\u7528\u516C\u53F8\u5185\u90E8\u7684\u81EA\u52A8\u5316\u90E8\u7F72\u5E73\u53F0NDP\u8FDB\u884C\u5E94\u7528\u90E8\u7F72\u65F6\uFF0C\u8BE5\u5E73\u53F0\u53F7\u79F0\u652F\u6301\u8FDC\u7A0B\u8C03\u8BD5\uFF0C\u53EA\u9700\u8981\u5728\u67D0\u4E2A\u914D\u7F6E\u9875\u9762\u914D\u7F6E\u4E00\u4E0B\u8C03\u8BD5\u7AEF\u53E3\u53F7\uFF08\u6CA1\u6709\u586B\u5199\u4EFB\u4F55IP\u76F8\u5173\u7684\u4FE1\u606F\uFF09\uFF0C\u5E76\u4E14\u91CD\u65B0\u53D1\u5E03\u4E00\u4E0B\u5E94\u7528\u5373\u53EF\u3002\u4E8B\u5B9E\u4E0A\u4E5F\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4E0A\u8FF0JVM\u53C2\u6570\u4E2D\u552F\u4E00\u53EF\u53D8\u7684\u5C31\u662F${debug_port}\u3002\u4F46\u662F\u5B9E\u9645\u5728\u672C\u5730\u8FDE\u63A5\u65F6\u53D1\u73B0\u5374\u59CB\u7EC8\u8FDE\u4E0D\u4E0A5555 \u7684\u8C03\u8BD5\u7AEF\u53E3\uFF0C\u4ED4\u7EC6\u6392\u67E5\u624D\u53D1\u73B0\uFF0C\u4E0B\u9762\u622A\u53D6\u4E86NDP\u53D1\u5E03\u7684\u5E94\u7528\u6240\u6709JVM\u53C2\u6570\u5217\u8868\u4E2D\u4E0E\u8FDC\u7A0B\u8C03\u8BD5\u76F8\u5173\u7684JVM\u542F\u52A8\u53C2\u6570\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token parameter variable">-Xdebug</span> <span class="token parameter variable">-Xrunjdwp:transport</span><span class="token operator">=</span>dt_socket,suspend<span class="token operator">=</span>n,server<span class="token operator">=</span>y,address<span class="token operator">=</span><span class="token number">127.0</span>.0.1:5555\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06address\u8BBE\u7F6E\u4E3A127.0.0.1:5555\uFF0C\u8868\u793A\u5C06\u8C03\u8BD5\u7AEF\u53E3\u9650\u5236\u4E3A\u672C\u5730\u8BBF\u95EE\uFF0C\u8FDC\u7A0B\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8FD9\u4E2A\u5E94\u8BE5\u662FNDP\u5E73\u53F0\u7684\u4E00\u4E2Abug\uFF0C\u6211\u4EEC\u5728\u81EA\u5DF1\u8BBE\u7F6EJVM\u7684\u542F\u52A8\u53C2\u6570\u65F6\u4E5F\u9700\u8981\u683C\u5916\u6CE8\u610F\u3002</p><p>\u5982\u679C\u53EA\u662F\u4E34\u65F6\u8C03\u8BD5\uFF0C\u5728\u7AEF\u53E3\u53F7\u524D\u9762\u4E0D\u8981\u52A0\u4E0A\u9650\u5236\u8BBF\u95EE\u7684IP\u5730\u5740\uFF0C\u8C03\u8BD5\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C06\u4E0A\u8FF0JVM\u53C2\u6570\u53BB\u9664\u6389\u4E4B\u540E\u91CD\u65B0\u53D1\u5E03\u4E0B\uFF0C\u9632\u8303\u5F00\u653E\u8FDC\u7A0B\u8C03\u8BD5\u7AEF\u53E3\u53EF\u80FD\u5E26\u6765\u7684\u5B89\u5168\u98CE\u9669\u3002</p><h3 id="_10-2-\u672C\u5730\u8FDE\u63A5\u8FDC\u7A0B\u670D\u52A1\u5668debug\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_10-2-\u672C\u5730\u8FDE\u63A5\u8FDC\u7A0B\u670D\u52A1\u5668debug\u7AEF\u53E3" aria-hidden="true">#</a> 10.2 \u672C\u5730\u8FDE\u63A5\u8FDC\u7A0B\u670D\u52A1\u5668debug\u7AEF\u53E3</h3><p>\u6253\u5F00Intellij IDEA\uFF0C\u5728\u9876\u90E8\u9760\u53F3\u7684\u5730\u65B9\u9009\u62E9\u201DEdit Configurations\u2026\u201D\uFF0C\u8FDB\u53BB\u4E4B\u540E\u70B9\u51FB+\u53F7\uFF0C\u9009\u62E9\u201DRemote\u201D\uFF0C\u6309\u7167\u4E0B\u56FE\u7684\u53EA\u662F\u586B\u5199\u7EA2\u6846\u5185\u7684\u5185\u5BB9\uFF0C\u5176\u4E2DName\u586B\u5199\u540D\u79F0\uFF0C\u8FD9\u91CC\u4E3Aremote webserver\uFF0Chost\u4E3A\u8FDC\u7A0B\u4EE3\u7801\u8FD0\u884C\u7684\u673A\u5668\u7684ip/hostname\uFF0Cport\u4E3A\u4E0A\u4E00\u6B65\u6307\u5B9A\u7684debug_port\uFF0C\u672C\u4F8B\u662F5555\u3002\u7136\u540E\u70B9\u51FBApply\uFF0C\u6700\u540E\u70B9\u51FBOK\u5373\u53EF</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828212428418.png" alt="image-20220828212428418" loading="lazy"></p><p>\u73B0\u5728\u5728\u4E0A\u4E00\u6B65\u9009\u62E9\u201DEdit Configurations\u2026\u201D\u7684\u4E0B\u62C9\u6846\u7684\u4F4D\u7F6E\u9009\u62E9\u4E0A\u4E00\u6B65\u521B\u5EFA\u7684remote webserver\uFF0C\u7136\u540E\u70B9\u51FB\u53F3\u8FB9\u7684debug\u6309\u94AE(\u957F\u7684\u50CF\u81ED\u866B\u90A3\u4E2A)\uFF0C\u770B\u63A7\u5236\u53F0\u65E5\u5FD7\uFF0C\u5982\u679C\u51FA\u73B0\u7C7B\u4F3C\u201CConnected to the target VM, address: \u2018xx.xx.xx.xx:5555\u2019, transport: \u2018socket\u2019\u201D\u7684\u5B57\u6837\uFF0C\u5C31\u8868\u793A\u8FDE\u63A5\u6210\u529F\u8FC7\u4E86\u3002\u6211\u8FD9\u91CC\u5B9E\u9645\u663E\u793A\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Connected to the target VM, address: <span class="token string">&#39;10.185.0.192:15555&#39;</span>, transport: <span class="token string">&#39;socket&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10-3-\u8BBE\u7F6E\u65AD\u70B9-\u5F00\u59CB\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_10-3-\u8BBE\u7F6E\u65AD\u70B9-\u5F00\u59CB\u8C03\u8BD5" aria-hidden="true">#</a> 10.3 \u8BBE\u7F6E\u65AD\u70B9\uFF0C\u5F00\u59CB\u8C03\u8BD5</h3><p>\u8FDC\u7A0Bdebug\u6A21\u5F0F\u5DF2\u7ECF\u5F00\u542F\uFF0C\u73B0\u5728\u53EF\u4EE5\u5728\u9700\u8981\u8C03\u8BD5\u7684\u4EE3\u7801\u4E2D\u6253\u65AD\u70B9\u4E86\uFF0C\u6BD4\u5982\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828212524876.png" alt="image-20220828212524876" loading="lazy"></p><p>\u5982\u56FE\u4E2D\u6240\u793A\uFF0C\u5982\u679C\u65AD\u70B9\u5185\u6709\u221A\uFF0C\u5219\u8868\u793A\u9009\u53D6\u7684\u65AD\u70B9\u6B63\u786E\u3002</p><p>\u73B0\u5728\u5728\u672C\u5730\u53D1\u9001\u4E00\u4E2A\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u8BF7\u6C42\uFF0C\u770B\u672C\u5730\u63A7\u5236\u53F0\u7684bug\u754C\u9762\uFF0C\u5212\u5230debugger\u8FD9\u4E2A\u6807\u7B7E\uFF0C\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u8FDC\u7A0B\u670D\u52A1\u7684\u5185\u90E8\u72B6\u6001\uFF08\u5404\u79CD\u53D8\u91CF\uFF09\u5DF2\u7ECF\u5168\u90E8\u663E\u793A\u51FA\u6765\u4E86\uFF0C\u5E76\u4E14\u5728\u521A\u624D\u8BBE\u7F6E\u4E86\u65AD\u70B9\u7684\u5730\u65B9\uFF0C\u4E5F\u663E\u793A\u4E86\u8BE5\u884C\u7684\u53D8\u91CF\u503C\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220828212547345.png" alt="image-20220828212547345" loading="lazy"></p><blockquote><p>\u5907\u6CE8\uFF1A\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7528\u4E8E\u8FDC\u7A0Bdebug\u7684\u4EE3\u7801\u5FC5\u987B\u4E0E\u8FDC\u7A0B\u90E8\u7F72\u7684\u4EE3\u7801\u5B8C\u5168\u4E00\u81F4\uFF0C\u4E0D\u80FD\u53D1\u751F\u4EFB\u4F55\u7684\u4FEE\u6539\uFF0C\u5426\u5219\u6253\u4E0A\u7684\u65AD\u70B9\u5C06\u65E0\u6CD5\u547D\u4E2D\uFF0C\u5207\u8BB0\u5207\u8BB0\u3002</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',121),c={href:"https://pdai.tech/md/java/jvm/java-jvm-debug-idea.html",target:"_blank",rel:"noopener noreferrer"},r=e("strong",null,"\u8C03\u8BD5\u6392\u9519 - Java \u95EE\u9898\u6392\u67E5\u4E4B\u4F7F\u7528IDEA\u672C\u5730\u8C03\u8BD5\u548C\u8FDC\u7A0B\u8C03\u8BD5",-1);function d(b,u){const a=g("ExternalLinkIcon");return s(),l("div",null,[t,e("p",null,[e("a",c,[r,o(a)])])])}const h=i(p,[["render",d],["__file","java-jvm-debug-idea.html.vue"]]);export{h as default};