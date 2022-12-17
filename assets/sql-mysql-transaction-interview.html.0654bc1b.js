import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,a as o,b as l,d as r,e as s,r as a}from"./app.89cd0885.js";const g={},d=r('<h1 id="mysql-\u4E8B\u52A1-\u9762\u8BD5\u573A\u666F\u5207\u5165" tabindex="-1"><a class="header-anchor" href="#mysql-\u4E8B\u52A1-\u9762\u8BD5\u573A\u666F\u5207\u5165" aria-hidden="true">#</a> MySQL - \u4E8B\u52A1\uFF08\u9762\u8BD5\u573A\u666F\u5207\u5165\uFF09</h1><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015100314961.png" alt="image-20221015100314961" loading="lazy"></p><h2 id="_1-\u4E8B\u52A1\u7684\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u4E8B\u52A1\u7684\u7279\u6027" aria-hidden="true">#</a> 1. \u4E8B\u52A1\u7684\u7279\u6027</h2><p><strong>\u9762\u8BD5\u5B98\uFF1A</strong> \u770B\u4F60\u7B80\u5386\u4E0A\u9762\u5199\u7740\u7CBE\u901AMySQL\uFF0C\u6211\u5148\u95EE\u4F60\u4E8B\u52A1\u7684\u7279\u6027\u662F\u4EC0\u4E48\uFF1F</p><blockquote><p>\u8001\u751F\u5E38\u8C08\uFF0C\u8FD9\u4E2A\u8FD8\u6709\u8C01\u4E0D\u4F1A\u80CC\u7684\u5417\uFF1F</p></blockquote><p><strong>\u6211\uFF1A</strong> \u8FD9\u4E2A\u6211\u77E5\u9053\uFF0C\u4E8B\u52A1\u6709\u56DB\u5927\u7279\u6027\uFF0C\u5206\u522B\u662F\u539F\u5B50\u6027\uFF08Atomicity\uFF09\u3001\u4E00\u81F4\u6027\uFF08Consistency\uFF09\u3001\u9694\u79BB\u6027\uFF08Isolation\uFF09\u3001\u6301\u4E45\u6027\uFF08Durability\uFF09\uFF0C\u7B80\u79F0ACID\u3002</p><ul><li><strong>\u539F\u5B50\u6027</strong>\u662F\u6307\u4E8B\u52A1\u4E2D\u6240\u6709\u64CD\u4F5C\u8981\u4E48\u5168\u90E8\u6210\u529F\uFF0C\u8981\u4E48\u5168\u90E8\u5931\u8D25\u3002</li><li><strong>\u4E00\u81F4\u6027</strong>\u662F\u6307\u4E8B\u52A1\u6267\u884C\u524D\u540E\uFF0C\u6570\u636E\u59CB\u7EC8\u5904\u4E8E\u4E00\u81F4\u6027\u72B6\u6001\uFF0C\u4E0D\u4F1A\u51FA\u73B0\u6570\u636E\u4E22\u5931\u3002</li><li><strong>\u9694\u79BB\u6027</strong>\u662F\u6307\u4E8B\u52A1\u63D0\u4EA4\u524D\u7684\u4E2D\u95F4\u72B6\u6001\u5BF9\u5176\u4ED6\u4E8B\u52A1\u4E0D\u53EF\u89C1\uFF0C\u5373\u76F8\u4E92\u9694\u79BB\u3002</li><li><strong>\u6301\u4E45\u6027</strong>\u662F\u6307\u4E8B\u52A1\u63D0\u4EA4\u540E\uFF0C\u6570\u636E\u7684\u4FEE\u6539\u6C38\u4E45\u4FDD\u5B58\u5728\u6570\u636E\u5E93\u4E2D\u3002</li></ul><h2 id="_2-mysql\u600E\u4E48\u5B9E\u73B0\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#_2-mysql\u600E\u4E48\u5B9E\u73B0\u4E8B\u52A1" aria-hidden="true">#</a> 2. Mysql\u600E\u4E48\u5B9E\u73B0\u4E8B\u52A1\uFF1F</h2><p><strong>\u9762\u8BD5\u5B98\uFF1A</strong> \u55EF\uFF0C\u56DE\u7B54\u5F97\u4E0D\u9519\u3002\u90A3\u4F60\u77E5\u9053MySQL\u5E95\u5C42\u662F\u600E\u4E48\u5B9E\u73B0\u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027\uFF1F</p><blockquote><p>\u8FD9\u9053\u9898\u6709\u70B9\u6DF1\u4E86\uFF0C\u9700\u8981\u80CC\u4F1Aredo log\u3001undo log\u3001mvcc\u3002 \u5343\u4E07\u522B\u8BF4\u4E0D\u77E5\u9053\u8FD9\u51E0\u4E2A\u4E1C\u897F\u662F\u5E72\u561B\u7528\u7684\u3002 \u4E0D\u4F46\u8981\u77E5\u9053\uFF0C\u8FD8\u8981\u8DDF\u4E8B\u52A1\u626F\u4E0A\u5173\u7CFB\u3002</p></blockquote><p><strong>\u6211\uFF1A</strong> \u539F\u5B50\u6027\u662Fundo log\u5B9E\u73B0\u7684\uFF0C\u4E00\u81F4\u6027\u662F\u7531\u4EE3\u7801\u903B\u8F91\u5C42\u9762\u4FDD\u8BC1\u7684\uFF0C\u9694\u79BB\u6027\u662F\u7531mvcc\u5B9E\u73B0\u7684\uFF0C\u6301\u4E45\u6027\u662F\u57FA\u4E8Eredo log\u5B9E\u73B0\u7684\u3002</p><h3 id="_2-1-redo-log-\u91CD\u505A\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-1-redo-log-\u91CD\u505A\u65E5\u5FD7" aria-hidden="true">#</a> 2.1 <strong>Redo Log\uFF08\u91CD\u505A\u65E5\u5FD7\uFF09</strong></h3><p>Redo Log\u8BB0\u5F55\u7684\u662F\u7269\u7406\u65E5\u5FD7\uFF0C\u4E5F\u5C31\u662F\u78C1\u76D8\u6570\u636E\u7684\u4FEE\u6539\u3002 \u7528\u6765\u4FDD\u8BC1\u670D\u52A1\u5D29\u6E83\u540E\uFF0C\u4ECD\u80FD\u628A\u4E8B\u52A1\u4E2D\u53D8\u66F4\u7684\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E0A\u3002</p><p>\u5982\u679C\u6CA1\u6709Redo Log\u7684\u8BDD\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</p><p>\u4FEE\u6539\u6570\u636E\u7684\u8FC7\u7A0B\u5C31\u53D8\u6210\u8FD9\u6837\u4E86\uFF1A</p><ol><li>\u4ECE\u78C1\u76D8\u52A0\u8F7D\u6570\u636E\u5230\u5185\u5B58</li><li>\u5728\u5185\u5B58\u4E2D\u4FEE\u6539\u6570\u636E</li><li>\u628A\u65B0\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015094002165.png" alt="image-20221015094002165" loading="lazy"></p><p>\u8FD9\u6837\u505A\uFF0C\u4F1A\u6709\u4E25\u91CD\u7684\u6027\u80FD\u95EE\u9898\u3002</p><ol><li>InnoDB\u5728\u78C1\u76D8\u4E2D\u5B58\u50A8\u7684\u57FA\u672C\u5355\u5143\u662F\u9875\uFF0C\u53EF\u80FD\u672C\u6B21\u4FEE\u6539\u53EA\u53D8\u66F4\u4E00\u9875\u4E2D\u51E0\u4E2A\u5B57\u8282\uFF0C\u4F46\u662F\u9700\u8981\u5237\u65B0\u6574\u9875\u7684\u6570\u636E\uFF0C\u5C31\u5F88\u6D6A\u8D39\u8D44\u6E90\u3002</li><li>\u4E00\u4E2A\u4E8B\u52A1\u53EF\u80FD\u4FEE\u6539\u4E86\u591A\u9875\u4E2D\u7684\u6570\u636E\uFF0C\u9875\u4E4B\u95F4\u53C8\u662F\u4E0D\u8FDE\u7EED\u7684\uFF0C\u5C31\u4F1A\u4EA7\u751F\u968F\u673AIO\uFF0C\u6027\u80FD\u66F4\u5DEE\u3002</li></ol><p>\u6240\u4EE5\u4E3A\u4E86\u63D0\u9AD8\u5199\u5165\u6027\u80FD\uFF0C\u4E8E\u662F\u5C31\u5F15\u5165\u4E86Redo Log\u3002</p><p>\u770B\u4E00\u4E0B\u5F15\u5165Redo Log\u540E\u4FEE\u6539\u6D41\u7A0B\uFF1A</p><ol><li>\u4ECE\u78C1\u76D8\u52A0\u8F7D\u6570\u636E\u5230\u5185\u5B58</li><li>\u5728\u5185\u5B58\u4E2D\u4FEE\u6539\u6570\u636E</li><li>\u628A\u65B0\u6570\u636E\u5199\u5230<strong>Redo Log Buffer</strong>\u4E2D</li><li>\u628A<strong>Redo Log Buffer</strong>\u4E2D\u6570\u636E\u6301\u4E45\u5316\u5230<strong>Redo Log</strong>\u6587\u4EF6\u4E2D</li><li>\u628A<strong>Redo Log</strong>\u6587\u4EF6\u4E2D\u6570\u636E\u6301\u4E45\u5316\u5230\u6570\u636E\u5E93\u78C1\u76D8\u4E2D</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015094221790.png" alt="image-20221015094221790" loading="lazy"></p><h3 id="_2-2-undo-log-\u56DE\u6EDA\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-2-undo-log-\u56DE\u6EDA\u65E5\u5FD7" aria-hidden="true">#</a> 2.2 <strong>Undo Log\uFF08\u56DE\u6EDA\u65E5\u5FD7\uFF09\uFF1A</strong></h3><p>Undo Log\u8BB0\u5F55\u7684\u662F\u903B\u8F91\u65E5\u5FD7\uFF0C\u7528\u6765\u56DE\u6EDA\u4E8B\u52A1\u65F6\uFF0C\u6062\u590D\u5230\u4FEE\u6539\u524D\u7684\u6570\u636E\u3002</p><p>\u6BD4\u5982\uFF1A\u5F53\u6211\u4EEC\u6267\u884C\u4E00\u6761insert\u8BED\u53E5\u65F6\uFF0CUndo Log\u5C31\u8BB0\u5F55\u4E00\u6761\u76F8\u53CD\u7684delete\u8BED\u53E5\u3002</p><p>\u52A0\u5165Undo Log\u4E4B\u540E\u7684\u4FEE\u6539\u6D41\u7A0B\u5C31\u662F\u8FD9\u6837\u7684\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015094600542.png" alt="image-20221015094600542" loading="lazy"></p><h3 id="_2-3-mvcc-\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236-multi-version-concurrency-control" tabindex="-1"><a class="header-anchor" href="#_2-3-mvcc-\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236-multi-version-concurrency-control" aria-hidden="true">#</a> 2.3 <strong>MVCC\uFF08\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF0CMulti-Version Concurrency Control\uFF09\uFF1A</strong></h3><p>\u8BB0\u5F55\u7684\u662F\u67D0\u4E2A\u65F6\u95F4\u70B9\u4E0A\u7684\u6570\u636E\u5FEB\u7167\uFF0C\u7528\u6765\u5B9E\u73B0\u4E0D\u540C\u4E8B\u52A1\u4E4B\u95F4\u6570\u636E\u7684\u9694\u79BB\u6027\u3002</p><p>\u63D0\u5230\u9694\u79BB\u6027\uFF0C\u4E00\u5B9A\u8981\u8BF4\u4E00\u4E0B\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B\u3002</p><p>\u8BF4\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u4E4B\u524D\uFF0C\u5FC5\u987B\u8981\u5148\u8BF4\u4E00\u4E0B\u5E76\u53D1\u4E8B\u52A1\u4EA7\u751F\u7684\u95EE\u9898\uFF1A</p><ul><li><strong>\u810F\u8BFB\uFF1A</strong> \u4E00\u4E2A\u4E8B\u52A1\u8BFB\u5230\u5176\u4ED6\u4E8B\u52A1\u672A\u63D0\u4EA4\u7684\u6570\u636E\u3002</li><li><strong>\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF1A</strong> \u591A\u6B21\u8BFB\u53D6\u76F8\u540C\u7684\u6570\u636E\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u96C6\u4E0D\u4E00\u81F4\uFF0C\u5373\u8BFB\u5230\u5176\u4ED6\u4E8B\u52A1\u63D0\u4EA4\u540E\u7684\u6570\u636E\u3002</li><li><strong>\u5E7B\u8BFB\uFF1A</strong> \u76F8\u540C\u7684\u67E5\u8BE2\u6761\u4EF6\uFF0C\u591A\u6B21\u8BFB\u53D6\u7684\u7ED3\u679C\u4E0D\u4E00\u81F4\uFF0C\u5373\u8BFB\u5230\u5176\u4ED6\u4E8B\u52A1\u63D0\u4EA4\u540E\u7684\u6570\u636E\u3002</li><li><strong>\u4E0D\u53EF\u91CD\u590D\u8BFB\u4E0E\u5E7B\u8BFB\u7684\u533A\u522B\u662F\uFF1A</strong> \u4E0D\u53EF\u91CD\u590D\u8BFB\u662F\u8BFB\u5230\u4E86\u5176\u4ED6\u4E8B\u52A1\u6267\u884Cupdate\u3001delete\u540E\u7684\u6570\u636E\uFF0C\u800C\u5E7B\u8BFB\u662F\u8BFB\u5230\u5176\u4ED6\u4E8B\u52A1\u6267\u884Cinsert\u540E\u7684\u6570\u636E\u3002</li></ul><p><strong>\u9694\u79BB\u7EA7\u522B</strong></p><ul><li><strong>Read UnCommitted\uFF08\u8BFB\u672A\u63D0\u4EA4\uFF09\uFF1A</strong> \u8BFB\u5230\u5176\u4ED6\u4E8B\u52A1\u672A\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u4F1A\u51FA\u73B0\u810F\u8BFB\u3001\u4E0D\u53EF\u91CD\u590D\u8BFB\u3001\u5E7B\u8BFB\u3002</li><li><strong>Read Committed\uFF08\u8BFB\u5DF2\u63D0\u4EA4\uFF09\uFF1A</strong> \u8BFB\u5230\u5176\u4ED6\u4E8B\u52A1\u5DF2\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u89E3\u51B3\u4E86\u810F\u8BFB\uFF0C\u4F1A\u51FA\u73B0\u4E0D\u53EF\u91CD\u590D\u8BFB\u3001\u5E7B\u8BFB\u3002</li><li><strong>Repeatable Read\uFF08\u53EF\u91CD\u590D\u8BFB\uFF09\uFF1A</strong> \u76F8\u540C\u7684\u6570\u636E\uFF0C\u591A\u6B21\u8BFB\u53D6\u5230\u7684\u7ED3\u679C\u96C6\u4E00\u81F4\u3002\u89E3\u51B3\u4E86\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF0C\u8FD8\u662F\u4F1A\u51FA\u73B0\u5E7B\u8BFB\u3002</li><li><strong>Serializable\uFF08\u4E32\u884C\u5316\uFF09\uFF1A</strong> \u6240\u6709\u4E8B\u52A1\u4E32\u884C\u6267\u884C\uFF0C\u89E3\u51B3\u4E86\u5E7B\u8BFB\u3002</li></ul><p><strong>\u518D\u8C08MVCC\uFF1A</strong></p><p>MVCC\u89E3\u51B3\u4E86\u8BFB\u5199\u51B2\u7A81\uFF0C\u5B9E\u73B0\u4E86\u8BFB\u5199\u5E76\u884C\uFF0C\u63D0\u5347\u4E86\u4E8B\u52A1\u7684\u6027\u80FD\u3002</p><p>\u7531\u4E8ERead UnCommitted\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u6BCF\u6B21\u90FD\u8BFB\u53D6\u6700\u65B0\u7684\u6570\u636E\u3002\u800CSerializable\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u5BF9\u6240\u6709\u8BFB\u53D6\u6570\u636E\u90FD\u52A0\u9501\u3002\u8FD9\u4E24\u79CD\u9694\u79BB\u7EA7\u4E0D\u9700\u8981MVCC\uFF0C\u6240\u4EE5MVCC\u53EA\u5728Read Committed\u548CRepeatable Read\u4E24\u79CD\u9694\u79BB\u7EA7\u522B\u4E0B\u8D77\u4F5C\u7528\u3002</p><p>MVCC\u7684\u5B9E\u73B0\u65B9\u5F0F\u901A\u8FC7\u4E24\u4E2A\u9690\u85CF\u5217trx_id\uFF08\u6700\u8FD1\u4E00\u6B21\u63D0\u4EA4\u4E8B\u52A1\u7684ID\uFF09\u548Croll_pointer\uFF08\u4E0A\u4E2A\u7248\u672C\u7684\u5730\u5740\uFF09\uFF0C\u5EFA\u7ACB\u4E00\u4E2A\u7248\u672C\u94FE\u3002\u5E76\u5728\u4E8B\u52A1\u4E2D\u8BFB\u53D6\u7684\u65F6\u5019\u751F\u6210\u4E00\u4E2AReadView\uFF08\u8BFB\u89C6\u56FE\uFF09\uFF0C\u5728Read Committed\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u6BCF\u6B21\u8BFB\u53D6\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u8BFB\u89C6\u56FE\uFF0C\u800C\u5728Repeatable Read\u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u53EA\u4F1A\u5728\u7B2C\u4E00\u6B21\u8BFB\u53D6\u65F6\u751F\u6210\u4E00\u4E2A\u8BFB\u89C6\u56FE\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015100152621.png" alt="image-20221015100152621" loading="lazy"></p><p><strong>InnoDB\u5982\u4F55\u89E3\u51B3\u5E7B\u8BFB\u7684\uFF1F</strong></p><p>\u5148\u666E\u53CA\u4E00\u4E0B\u5FEB\u7167\u8BFB\u548C\u5F53\u524D\u8BFB\u3002</p><ul><li><strong>\u5F53\u524D\u8BFB\uFF1A</strong> \u8BFB\u53D6\u6570\u636E\u7684\u6700\u65B0\u7248\u672C\uFF0C\u5E76\u5BF9\u6570\u636E\u8FDB\u884C\u52A0\u9501\u3002 \u4F8B\u5982\uFF1Ainsert\u3001update\u3001delete\u3001select for update</li><li><strong>\u5FEB\u7167\u8BFB\uFF1A</strong> \u8BFB\u53D6\u6570\u636E\u7684\u5386\u53F2\u7248\u672C\uFF0C\u4E0D\u5BF9\u6570\u636E\u52A0\u9501\u3002 \u4F8B\u5982\uFF1Aselect</li></ul><p>\u5728\u5F53\u524D\u8BFB\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u901A\u8FC7\u52A0\u9501\u6765\u89E3\u51B3\u5E7B\u8BFB\u3002</p><p>\u5728\u5FEB\u7167\u8BFB\u7684\u60C5\u51B5\u4E0B\uFF0C\u662F\u901A\u8FC7MVCC\u6765\u89E3\u51B3\u5E7B\u8BFB\u3002</p><h2 id="_3-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-\u603B\u7ED3" aria-hidden="true">#</a> 3. \u603B\u7ED3</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221015100314961.png" alt="image-20221015100314961" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',48),p={href:"https://zhuanlan.zhihu.com/p/515386351",target:"_blank",rel:"noopener noreferrer"},c=s("\u9762\u8BD5\u5B98\u7ADF\u7136\u95EE\u6211MySQL\u4E8B\u52A1\u7684\u5E95\u5C42\u539F\u7406\uFF1F\u5E78\u4E8F\u6211\u603B\u7ED3\u4E86\u5168\u5957\u516B\u80A1\u6587");function h(m,u){const e=a("ExternalLinkIcon");return t(),i("div",null,[d,o("p",null,[o("a",p,[c,l(e)])])])}const z=n(g,[["render",h],["__file","sql-mysql-transaction-interview.html.vue"]]);export{z as default};
