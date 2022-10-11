import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as l,e as s}from"./app.f305e04f.js";const r={},d=s('<h1 id="redis\u9762\u8BD5-\u5E38\u89C4\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#redis\u9762\u8BD5-\u5E38\u89C4\u95EE\u9898" aria-hidden="true">#</a> Redis\u9762\u8BD5 - \u5E38\u89C4\u95EE\u9898</h1><h2 id="_1-\u4EC0\u4E48\u662Fredis-\u4E3A\u4EC0\u4E48\u7528redis" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662Fredis-\u4E3A\u4EC0\u4E48\u7528redis" aria-hidden="true">#</a> 1 \u4EC0\u4E48\u662FRedis\uFF0C\u4E3A\u4EC0\u4E48\u7528Redis\uFF1F</h2><p>Redis\u662F\u4E00\u79CD\u652F\u6301key-value\u7B49\u591A\u79CD\u6570\u636E\u7ED3\u6784\u7684\u5B58\u50A8\u7CFB\u7EDF\u3002\u53EF\u7528\u4E8E\u7F13\u5B58\uFF0C\u4E8B\u4EF6\u53D1\u5E03\u6216\u8BA2\u9605\uFF0C\u9AD8\u901F\u961F\u5217\u7B49\u573A\u666F\u3002\u652F\u6301\u7F51\u7EDC\uFF0C\u63D0\u4F9B\u5B57\u7B26\u4E32\uFF0C\u54C8\u5E0C\uFF0C\u5217\u8868\uFF0C\u961F\u5217\uFF0C\u96C6\u5408\u7ED3\u6784\u76F4\u63A5\u5B58\u53D6\uFF0C\u57FA\u4E8E\u5185\u5B58\uFF0C\u53EF\u6301\u4E45\u5316\u3002</p><ul><li>\u8BFB\u5199\u6027\u80FD\u4F18\u5F02 <ul><li>Redis\u80FD\u8BFB\u7684\u901F\u5EA6\u662F110000\u6B21/s,\u5199\u7684\u901F\u5EA6\u662F81000\u6B21/s \uFF08\u6D4B\u8BD5\u6761\u4EF6\u89C1\u4E0B\u4E00\u8282\uFF09\u3002</li></ul></li><li>\u6570\u636E\u7C7B\u578B\u4E30\u5BCC <ul><li>Redis\u652F\u6301\u4E8C\u8FDB\u5236\u6848\u4F8B\u7684 Strings, Lists, Hashes, Sets \u53CA Ordered Sets \u6570\u636E\u7C7B\u578B\u64CD\u4F5C\u3002</li></ul></li><li>\u539F\u5B50\u6027 <ul><li>Redis\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u539F\u5B50\u6027\u7684\uFF0C\u540C\u65F6Redis\u8FD8\u652F\u6301\u5BF9\u51E0\u4E2A\u64CD\u4F5C\u5168\u5E76\u540E\u7684\u539F\u5B50\u6027\u6267\u884C\u3002</li></ul></li><li>\u4E30\u5BCC\u7684\u7279\u6027 <ul><li>Redis\u652F\u6301 publish/subscribe, \u901A\u77E5, key \u8FC7\u671F\u7B49\u7279\u6027\u3002</li></ul></li><li>\u6301\u4E45\u5316 <ul><li>Redis\u652F\u6301RDB, AOF\u7B49\u6301\u4E45\u5316\u65B9\u5F0F</li></ul></li><li>\u53D1\u5E03\u8BA2\u9605 <ul><li>Redis\u652F\u6301\u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F</li></ul></li><li>\u5206\u5E03\u5F0F <ul><li>Redis Cluster</li></ul></li></ul><h2 id="_2-\u4E3A\u4EC0\u4E48redis-\u662F\u5355\u7EBF\u7A0B\u7684\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48redis-\u662F\u5355\u7EBF\u7A0B\u7684\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48Redis \u662F\u5355\u7EBF\u7A0B\u7684\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5FEB\uFF1F</h2><ul><li>redis\u5B8C\u5168\u57FA\u4E8E\u5185\u5B58,\u7EDD\u5927\u90E8\u5206\u8BF7\u6C42\u662F\u7EAF\u7CB9\u7684\u5185\u5B58\u64CD\u4F5C,\u975E\u5E38\u5FEB\u901F.</li><li>\u6570\u636E\u7ED3\u6784\u7B80\u5355,\u5BF9\u6570\u636E\u64CD\u4F5C\u4E5F\u7B80\u5355,redis\u4E2D\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E13\u95E8\u8FDB\u884C\u8BBE\u8BA1\u7684</li><li>\u91C7\u7528\u5355\u7EBF\u7A0B\u6A21\u578B, \u907F\u514D\u4E86\u4E0D\u5FC5\u8981\u7684\u4E0A\u4E0B\u6587\u5207\u6362\u548C\u7ADE\u4E89\u6761\u4EF6, \u4E5F\u4E0D\u5B58\u5728\u591A\u7EBF\u7A0B\u6216\u8005\u591A\u7EBF\u7A0B\u5207\u6362\u800C\u6D88\u8017CPU, \u4E0D\u7528\u8003\u8651\u5404\u79CD\u9501\u7684\u95EE\u9898, \u4E0D\u5B58\u5728\u52A0\u9501, \u91CA\u653E\u9501\u7684\u64CD\u4F5C, \u6CA1\u6709\u56E0\u4E3A\u53EF\u80FD\u51FA\u73B0\u6B7B\u9501\u800C\u5BFC\u81F4\u6027\u80FD\u6D88\u8017</li><li>\u4F7F\u7528\u4E86\u591A\u8DEFIO\u590D\u7528\u6A21\u578B,\u975E\u963B\u585EIO</li><li>\u4F7F\u7528\u5E95\u5C42\u6A21\u578B\u4E0D\u540C,\u5B83\u4EEC\u4E4B\u95F4\u5E95\u5C42\u5B9E\u73B0\u65B9\u5F0F\u53CA\u4E0E\u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684 \u901A\u4FE1\u7684\u5E94\u7528\u534F\u8BAE\u4E0D\u4E00\u6837,Redis\u76F4\u63A5\u6784\u5EFA\u4E86\u81EA\u5DF1\u7684VM\u673A\u5236,\u56E0\u4E3A\u4E00\u822C\u7684\u7CFB\u7EDF\u8C03\u7528\u7CFB\u7EDF\u51FD\u6570\u7684\u8BDD,\u4F1A\u6D6A\u8D39\u4E00\u5B9A\u7684\u65F6\u95F4\u53BB\u79FB\u52A8\u548C\u8BF7\u6C42</li></ul><h2 id="_3-redis-\u4E00\u822C\u6709\u54EA\u4E9B\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-redis-\u4E00\u822C\u6709\u54EA\u4E9B\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 3. Redis \u4E00\u822C\u6709\u54EA\u4E9B\u4F7F\u7528\u573A\u666F\uFF1F</h2><p>\u53EF\u4EE5\u7ED3\u5408\u81EA\u5DF1\u7684\u9879\u76EE\u8BB2\u8BB2\uFF0C\u6BD4\u5982</p><ul><li><strong>\u70ED\u70B9\u6570\u636E\u7684\u7F13\u5B58</strong></li></ul><p>\u7F13\u5B58\u662FRedis\u6700\u5E38\u89C1\u7684\u5E94\u7528\u573A\u666F\uFF0C\u4E4B\u6240\u6709\u8FD9\u4E48\u4F7F\u7528\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3ARedis\u8BFB\u5199\u6027\u80FD\u4F18\u5F02\u3002\u800C\u4E14\u9010\u6E10\u6709\u53D6\u4EE3memcached\uFF0C\u6210\u4E3A\u9996\u9009\u670D\u52A1\u7AEF\u7F13\u5B58\u7684\u7EC4\u4EF6\u3002\u800C\u4E14\uFF0CRedis\u5185\u90E8\u662F\u652F\u6301\u4E8B\u52A1\u7684\uFF0C\u5728\u4F7F\u7528\u65F6\u5019\u80FD\u6709\u6548\u4FDD\u8BC1\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002</p><ul><li><strong>\u9650\u65F6\u4E1A\u52A1\u7684\u8FD0\u7528</strong></li></ul><p>redis\u4E2D\u53EF\u4EE5\u4F7F\u7528expire\u547D\u4EE4\u8BBE\u7F6E\u4E00\u4E2A\u952E\u7684\u751F\u5B58\u65F6\u95F4\uFF0C\u5230\u65F6\u95F4\u540Eredis\u4F1A\u5220\u9664\u5B83\u3002\u5229\u7528\u8FD9\u4E00\u7279\u6027\u53EF\u4EE5\u8FD0\u7528\u5728\u9650\u65F6\u7684\u4F18\u60E0\u6D3B\u52A8\u4FE1\u606F\u3001\u624B\u673A\u9A8C\u8BC1\u7801\u7B49\u4E1A\u52A1\u573A\u666F\u3002</p><ul><li><strong>\u8BA1\u6570\u5668\u76F8\u5173\u95EE\u9898</strong></li></ul><p>redis\u7531\u4E8Eincrby\u547D\u4EE4\u53EF\u4EE5\u5B9E\u73B0\u539F\u5B50\u6027\u7684\u9012\u589E\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8FD0\u7528\u4E8E\u9AD8\u5E76\u53D1\u7684\u79D2\u6740\u6D3B\u52A8\u3001\u5206\u5E03\u5F0F\u5E8F\u5217\u53F7\u7684\u751F\u6210\u3001\u5177\u4F53\u4E1A\u52A1\u8FD8\u4F53\u73B0\u5728\u6BD4\u5982\u9650\u5236\u4E00\u4E2A\u624B\u673A\u53F7\u53D1\u591A\u5C11\u6761\u77ED\u4FE1\u3001\u4E00\u4E2A\u63A5\u53E3\u4E00\u5206\u949F\u9650\u5236\u591A\u5C11\u8BF7\u6C42\u3001\u4E00\u4E2A\u63A5\u53E3\u4E00\u5929\u9650\u5236\u8C03\u7528\u591A\u5C11\u6B21\u7B49\u7B49\u3002</p><ul><li><strong>\u5206\u5E03\u5F0F\u9501</strong></li></ul><p>\u8FD9\u4E2A\u4E3B\u8981\u5229\u7528redis\u7684setnx\u547D\u4EE4\u8FDB\u884C\uFF0Csetnx\uFF1A&quot;set if not exists&quot;\u5C31\u662F\u5982\u679C\u4E0D\u5B58\u5728\u5219\u6210\u529F\u8BBE\u7F6E\u7F13\u5B58\u540C\u65F6\u8FD4\u56DE1\uFF0C\u5426\u5219\u8FD4\u56DE0 \uFF0C\u8FD9\u4E2A\u7279\u6027\u5728\u4FDE\u4F60\u5954\u8FDC\u65B9\u7684\u540E\u53F0\u4E2D\u6709\u6240\u8FD0\u7528\uFF0C\u56E0\u4E3A\u6211\u4EEC\u670D\u52A1\u5668\u662F\u96C6\u7FA4\u7684\uFF0C\u5B9A\u65F6\u4EFB\u52A1\u53EF\u80FD\u5728\u4E24\u53F0\u673A\u5668\u4E0A\u90FD\u4F1A\u8FD0\u884C\uFF0C\u6240\u4EE5\u5728\u5B9A\u65F6\u4EFB\u52A1\u4E2D\u9996\u5148 \u901A\u8FC7setnx\u8BBE\u7F6E\u4E00\u4E2Alock\uFF0C\u5982\u679C\u6210\u529F\u8BBE\u7F6E\u5219\u6267\u884C\uFF0C\u5982\u679C\u6CA1\u6709\u6210\u529F\u8BBE\u7F6E\uFF0C\u5219\u8868\u660E\u8BE5\u5B9A\u65F6\u4EFB\u52A1\u5DF2\u6267\u884C\u3002 \u5F53\u7136\u7ED3\u5408\u5177\u4F53\u4E1A\u52A1\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9\u8FD9\u4E2Alock\u52A0\u4E00\u4E2A\u8FC7\u671F\u65F6\u95F4\uFF0C\u6BD4\u5982\u8BF430\u5206\u949F\u6267\u884C\u4E00\u6B21\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A\u5C0F\u4E8E30\u5206\u949F\u7684\u4E00\u4E2A\u65F6\u95F4\u5C31\u53EF\u4EE5\uFF0C\u8FD9\u4E2A\u4E0E\u5B9A\u65F6\u4EFB\u52A1\u7684\u5468\u671F\u4EE5\u53CA\u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u6D88\u8017\u65F6\u95F4\u76F8\u5173\u3002</p><p>\u5728\u5206\u5E03\u5F0F\u9501\u7684\u573A\u666F\u4E2D\uFF0C\u4E3B\u8981\u7528\u5728\u6BD4\u5982\u79D2\u6740\u7CFB\u7EDF\u7B49\u3002</p>',17),t=[d];function a(n,u){return e(),l("div",null,t)}const h=i(r,[["render",a],["__file","redis-z-interview-basic.html.vue"]]);export{h as default};