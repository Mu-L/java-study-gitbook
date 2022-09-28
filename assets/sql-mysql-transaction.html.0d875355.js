import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,e as o}from"./app.258ed467.js";const s={},i=o(`<h1 id="mysql-\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#mysql-\u4E8B\u52A1" aria-hidden="true">#</a> MySQL - \u4E8B\u52A1</h1><h2 id="_1-\u4EC0\u4E48\u662F\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u4E8B\u52A1" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u4E8B\u52A1</h2><p><strong>\u4E8B\u52A1\u5C31\u662F\u903B\u8F91\u4E0A\u7684\u4E00\u7EC4\u64CD\u4F5C\uFF0C\u8981\u4E48\u90FD\u6267\u884C\uFF0C\u8981\u4E48\u90FD\u4E0D\u6267\u884C</strong></p><h3 id="_1-1-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6848\u4F8B" aria-hidden="true">#</a> 1.1 \u6848\u4F8B</h3><p>\u4E8B\u52A1\u6700\u7ECF\u5178\u4F8B\u5B50\u8F6C\u8D26\uFF1A\u5047\u8BBE\u5C0F\u660E\u8981\u7ED9\u5C0F\u7EA2\u8F6C\u8D261000\u5143\uFF0C\u8FD9\u4E2A\u8F6C\u8D26\u4F1A\u6D89\u53CA\u5230\u4E24\u4E2A\u5173\u952E\u64CD\u4F5C</p><ul><li>\u5C06\u5C0F\u660E\u7684\u4F59\u989D\u51CF\u5C111000\u5143</li><li>\u5C06\u5C0F\u7EA2\u7684\u4F59\u989D\u589E\u52A01000\u5143</li></ul><p>\u4E07\u4E00\u5728\u8FD9\u4E24\u4E2A\u64CD\u4F5C\u4E4B\u95F4\u7A81\u7136\u51FA\u73B0\u9519\u8BEF\u6BD4\u5982\u94F6\u884C\u7CFB\u7EDF\u5954\u6E83\uFF0C\u5BFC\u81F4\u5C0F\u660E\u4F59\u989D\u51CF\u5C11\u800C\u5C0F\u7EA2\u7684\u4F59\u989D\u6CA1\u6709\u589E\u52A0\uFF0C\u8FD9\u5C31\u4E0D\u5BF9\u4E86\u3002 \u4E8B\u52A1\u5C31\u662F\u4FDD\u8BC1\u8FD9\u4E24\u4E2A\u5173\u952E\u64CD\u4F5C\u8981\u4E48\u90FD\u6210\u529F\uFF0C\u8981\u4E48\u90FD\u5931\u8D25</p><h2 id="_2-\u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027-acid" tabindex="-1"><a class="header-anchor" href="#_2-\u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027-acid" aria-hidden="true">#</a> 2. \u4E8B\u52A1\u7684\u56DB\u5927\u7279\u6027\uFF08ACID\uFF09</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190911000830006.png" alt="image-20190911000830006" loading="lazy"></p><ol><li><p><strong>\u539F\u5B50\u6027\uFF08Atomicity\uFF09</strong>:</p><p>\u4E8B\u52A1\u662F<strong>\u6700\u5C0F\u7684\u6267\u884C\u5355\u4F4D\uFF0C\u4E0D\u4E88\u8BB8\u5206\u5272</strong>\uFF0C\u4E8B\u52A1\u7684\u539F\u5B50\u6027\u4FDD\u8BC1\u52A8\u4F5C\u4E48\u5168\u90E8\u5B8C\u6210\uFF0C\u8981\u4E48\u5B8C\u5168\u4E0D\u8D77\u4F5C\u7528</p></li><li><p><strong>\u4E00\u81F4\u6027\uFF08Consistency\uFF09</strong>:</p><p>\u6267\u884C\u4E8B\u52A1\u524D\u540E\uFF0C\u6570\u636E\u4FDD\u6301\u4E00\u81F4\uFF0C<strong>\u591A\u4E2A\u4E8B\u52A1\u5BF9\u540C\u4E00\u4E2A\u6570\u636E\u8BFB\u53D6\u7ED3\u679C\u662F\u76F8\u540C\u7684</strong></p></li><li><p><strong>\u9694\u79BB\u6027\uFF08Isolation\uFF09</strong>\uFF1A</p><p>\u5E76\u53D1\u8BBF\u95EE\u6570\u636E\u5E93\u65F6\uFF0C\u4E00\u4E2A\u7528\u6237\u7684\u4E8B\u52A1\u4E0D\u88AB\u5176\u4ED6\u4E8B\u52A1\u6240\u5E72\u6270\uFF0C<strong>\u5404\u5E76\u53D1\u4E8B\u52A1\u4E4B\u95F4\u6570\u636E\u5E93\u662F\u72EC\u7ACB\u7684</strong></p></li><li><p><strong>\u6301\u4E45\u6027\uFF08Durability\uFF09</strong></p><p>\u4E00\u4E2A\u4E8B\u52A1\u88AB\u63D0\u4EA4\u4E4B\u540E\uFF0C\u5B83<strong>\u5BF9\u6570\u636E\u5E93\u4E2D\u6570\u636E\u7684\u6539\u53D8\u662F\u6301\u4E45\u7684</strong>\uFF0C\u5373\u4F7F\u6570\u636E\u5E93\u53D1\u751F\u6545\u969C\u4E5F\u4E0D\u5E94\u8BE5\u5BF9\u5176\u6709\u4EFB\u4F55\u5F71\u54CD</p></li></ol><h3 id="_2-1-\u6570\u636E\u5E93\u662F\u5982\u4F55\u4FDD\u8BC1acid\u7684" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6570\u636E\u5E93\u662F\u5982\u4F55\u4FDD\u8BC1acid\u7684" aria-hidden="true">#</a> 2.1 \u6570\u636E\u5E93\u662F\u5982\u4F55\u4FDD\u8BC1ACID\u7684</h3><ul><li><p>\u56DB\u4E2A\u7279\u6027\uFF0C\u6700\u91CD\u8981\u7684\u5C31\u662F\u4E00\u81F4\u6027\u3002\u800C<strong>\u4E00\u81F4\u6027</strong>\u7531\u539F\u5B50\u6027\u3001\u9694\u79BB\u6027\u3001\u6301\u4E45\u6027\u6765\u4FDD\u8BC1</p></li><li><p>\u539F\u5B50\u6027\u7531Undo log\u4FDD\u8BC1\uFF1A</p><p>Undo Log \u4F1A\u4FDD\u5B58\u6BCF\u6B21\u53D8\u66F4\u4E4B\u524D\u7684\u8BB0\u5F55\uFF0C\u4ECE\u800C\u5728\u53D1\u751F\u9519\u8BEF\u65F6\u8FDB\u884C\u56DE\u6EDA</p></li><li><p>\u9694\u79BB\u6027\u7531MVVC\u548CLock\u4FDD\u8BC1</p></li><li><p>\u6301\u4E45\u6027\u6709Redo Log\u4FDD\u8BC1</p><p>\u6BCF\u6B21\u771F\u6B63\u4FEE\u6539\u6570\u636E\u4E4B\u524D\uFF0C\u90FD\u4F1A\u5C06\u8BB0\u5F55\u5199\u5230Redo Log\u4E2D\uFF0C\u53EA\u6709redo log \u5199\u5165\u6210\u529F\uFF0C\u624D\u4F1A\u771F\u6B63\u5199\u5165\u5230B+tree\u4E2D\u3002\u5982\u679C\u63D0\u4EA4\u4E4B\u524D\u65AD\u7535\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7Redo log\u6062\u590D\u8BB0\u5F55</p></li></ul><h2 id="_3-\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-\u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898" aria-hidden="true">#</a> 3. \u5E76\u53D1\u4E8B\u52A1\u5E26\u6765\u54EA\u4E9B\u95EE\u9898</h2><p>\u5728\u5178\u578B\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u591A\u4E2A\u4E8B\u52A1\u5E76\u53D1\u8FD0\u884C\uFF0C\u7ECF\u5E38\u4F1A\u64CD\u4F5C\u76F8\u540C\u7684\u6570\u636E\u6765\u5B8C\u6210\u5404\u81EA\u7684\u4EFB\u52A1\uFF08<strong>\u591A\u4E2A\u7528\u6237\u5BF9\u540C\u4E00\u6570\u636E\u8FDB\u884C\u64CD\u4F5C</strong>\uFF09\u3002</p><p>\u5E76\u53D1\u867D\u7136\u662F\u5FC5\u987B\u7684\uFF0C\u4F46\u662F\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4EE5\u4E0B\u95EE\u9898</p><ul><li><p><strong>\u810F\u8BFB\uFF08Dirty read\uFF09</strong></p><ul><li>\u5F53\u4E00\u4E2A\u4E8B\u52A1\u6B63\u5728\u8BBF\u95EE\u6570\u636E\u5E76\u4E14\u5BF9\u6570\u636E\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C<strong>\u8FD9\u79CD\u4FEE\u6539\u8FD8\u6CA1\u6709\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u4E2D</strong></li><li>\u8FD9\u65F6\u53E6\u5916\u4E00\u4E2A\u4E8B\u52A1\u4E5F\u8BBF\u95EE\u4E86\u8FD9\u4E2A\u6570\u636E\uFF0C\u7136\u540E<strong>\u4F7F\u7528\u4E86\u8FD9\u4E2A\u6570\u636E</strong></li><li>\u56E0\u4E3A\u8FD9\u4E2A\u6570\u636E\u662F\u8FD8\u6CA1\u6709\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u90A3\u4E48\u53E6\u5916\u4E00\u4E2A\u4E8B\u52A1\u8BFB\u5230\u8FD9\u4E2A\u6570\u636E\u662F\u201C\u810F\u6570\u636E\u201D\uFF0C<strong>\u4F9D\u636E\u201C\u810F\u6570\u636E\u201D<strong>\u6240\u505A\u7684</strong>\u64CD\u4F5C\u53EF\u80FD\u662F\u4E0D\u6B63\u786E\u7684</strong></li></ul></li><li><p><strong>\u4E22\u5931\u4FEE\u6539\uFF08Lost to modify\uFF09</strong></p><ul><li><p>\u5728<strong>\u4E00\u4E2A\u4E8B\u52A1\u8BFB\u53D6</strong>\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53E6\u5916\u4E00\u4E2A\u4E8B\u52A1<strong>\u4E5F\u8BBF\u95EE\u4E86\u8BE5\u6570\u636E</strong></p></li><li><p>\u90A3\u4E48\u5728<strong>\u7B2C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u4FEE\u6539</strong>\u4E86\u6570\u636E\u6570\u636E\u540E\uFF0C<strong>\u7B2C\u4E8C\u4E2A\u4E8B\u52A1\u4E5F\u4FEE\u6539</strong>\u4E86\u8FD9\u4E2A\u6570\u636E</p></li><li><p>\u8FD9\u6837<strong>\u7B2C\u4E00\u4E2A\u4E8B\u52A1\u5185\u7684\u4FEE\u6539\u5C31\u88AB\u4E22\u5931</strong>\uFF0C\u56E0\u6B64\u79F0\u4E3A\u4E22\u5931\u4FEE\u6539</p><p>\u4F8B\u5982\uFF1A\u4E8B\u52A11 \u8BFB\u53D6\u67D0\u8868\u4E2D\u7684\u6570\u636EA=20\uFF0C\u4E8B\u52A12\u4E5F\u8BFB\u53D6\u4E86A=20\uFF0C\u4E8B\u52A11\u4FEE\u6539A=A-1,\u4E8B\u52A12\u4E5F\u4FEE\u6539\u4E86A-1\uFF0C\u6700\u7EC8\u7ED3\u679CA=19\uFF0C\u4E8B\u52A11\u7684\u4FEE\u6539\u88AB\u4E22\u5931</p></li></ul></li><li><p><strong>\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF08Unrepeatableread\uFF09</strong></p><ul><li><p>\u6307\u5728\u4E00\u4E2A\u4E8B\u52A1\u5185<strong>\u591A\u6B21\u8BFB\u540C\u4E00\u6570\u636E</strong>\uFF0C\u5728\u8FD9\u4E2A\u4E8B\u52A1\u8FD8\u6CA1\u6709\u7ED3\u675F\u65F6\uFF0C<strong>\u53E6\u4E00\u4E2A\u4E8B\u52A1\u4E5F\u8BBF\u95EE\u8BE5\u6570\u636E</strong></p></li><li><p>\u90A3\u4E48\uFF0C\u5728\u7B2C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u7684\u4E24\u6B21\u8BFB\u6570\u636E\u4E4B\u95F4\uFF0C<strong>\u7531\u4E8E\u7B2C\u4E8C\u4E2A\u4E8B\u52A1\u7684\u4FEE\u6539</strong>\u5BFC\u81F4<strong>\u7B2C\u4E00\u4E2A\u4E8B\u52A1\u4E24\u6B21\u8BFB\u53D6</strong>\u7684\u6570\u636E\u53EF\u80FD\u4E0D\u592A\u4E00\u6837</p><p>\u8FD9\u6837\u5C31\u53D1\u751F\u4E86\u5728\u4E00\u4E2A\u4E8B\u52A1\u5185\u4E24\u6B21\u8BFB\u5230\u7684\u6570\u636E\u662F\u4E0D\u4E00\u6837\u7684\u60C5\u51B5\uFF0C\u56E0\u6B64\u79F0\u4E3A\u4E0D\u53EF\u91CD\u8BFB\u8BFB</p></li></ul></li><li><p><strong>\u5E7B\u8BFB\uFF08Phantom read\uFF09</strong></p><ul><li>\u5E7B\u8BFB\u4E0E\u4E0D\u53EF\u91CD\u590D\u8BFB\u7C7B\u4F3C\u3002</li><li>\u4ED6\u53D1\u751F\u5728<strong>\u4E00\u4E2A\u4E8B\u52A1\uFF08T1\uFF09\u8BFB\u53D6\u4E86\u51E0\u884C\u6570\u636E</strong>\uFF0C\u63A5\u7740\u53E6\u4E00\u4E2A\u5E76\u53D1<strong>\u4E8B\u52A1\uFF08T2\uFF09\u63D2\u5165\u4E86\u4E00\u4E9B\u6570\u636E</strong>\u65F6</li><li>\u5728\u968F\u540E\u7684\u67E5\u8BE2\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u4E8B\u52A1\uFF08T1\uFF09\u5C31\u4F1A\u53D1\u73B0<strong>\u591A\u4E86\u4E00\u4E9B\u6839\u672C\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55</strong></li></ul><p>\u5C31\u597D\u50CF\u53D1\u751F\u4E86\u5E7B\u89C9\u4E00\u6837\uFF0C\u6240\u4EE5\u79F0\u4E3A\u5E7B\u8BFB</p></li></ul><h3 id="_3-1-\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u533A\u522B" aria-hidden="true">#</a> 3.1 \u4E0D\u53EF\u91CD\u590D\u8BFB\u548C\u5E7B\u8BFB\u533A\u522B</h3><ul><li><p>\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684<strong>\u91CD\u70B9\u662F\u4FEE\u6539</strong></p><p>\u6BD4\u5982\uFF1A\u591A\u6B21\u8BFB\u53D6\u4E00\u6761\u8BB0\u5F55\uFF0C\u53D1\u73B0\u5176\u4E2D\u67D0\u4E9B\u5217\u7684\u503C\u88AB\u4FEE\u6539</p></li><li><p>\u5E7B\u8BFB\u7684<strong>\u91CD\u70B9\u5728\u4E0E\u65B0\u589E\u6216\u8005\u5220\u9664</strong></p><p>\u6BD4\u5982\uFF1A\u591A\u6B21\u8BFB\u53D6\u4E00\u6761\u8BB0\u5F55\uFF0C\u53D1\u73B0\u8BB0\u5F55\u589E\u591A\u6216\u51CF\u5C11\u4E86</p></li></ul><h2 id="_4-\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_4-\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 4. \u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B</h2><p>SQL \u6807\u51C6\u5B9A\u4E49\u4E86\u56DB\u4E2A\u9694\u79BB\u7EA7\u522B</p><ul><li><p><strong>READ-UNCOMMITTED(\u8BFB\u53D6\u672A\u63D0\u4EA4)\uFF1A</strong></p><p>\u6700\u4F4E\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u5141\u8BB8\u8BFB\u53D6\u5C1A\u672A\u63D0\u4EA4\u7684\u6570\u636E\u53D8\u66F4\uFF0C<strong>\u53EF\u80FD\u4F1A\u5BFC\u81F4\u810F\u8BFB\uFF0C\u5E7B\u8BFB\uFF0C\u6216\u4E0D\u53EF\u91CD\u590D\u8BFB</strong></p></li><li><p><strong>READ-COMMITTED(\u8BFB\u53D6\u5DF2\u63D0\u4EA4)\uFF1A</strong></p><p>\u5141\u8BB8\u8BFB\u53D6\u5E76\u53D1\u4E8B\u52A1\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E\uFF0C<strong>\u53EF\u4EE5\u963B\u6B62\u810F\u8BFB\uFF0C\u4F46\u662F\u5E7B\u8BFB\u6216\u8005\u4E0D\u53EF\u91CD\u590D\u8BFB\u4ECD\u7136\u6709\u53EF\u80FD\u53D1\u751F</strong></p></li><li><p><strong>REPEATABLE-READ(\u53EF\u91CD\u590D\u8BFB)\uFF1A</strong></p><p>\u5BF9\u540C\u4E00\u4E2A\u5B57\u6BB5\u7684\u591A\u6B21\u8BFB\u53D6\u7ED3\u679C\u7ED3\u679C\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u9664\u975E\u6570\u636E\u662F\u88AB\u672C\u8EAB\u4E8B\u52A1\u81EA\u5DF1\u6240\u4FEE\u6539\uFF0C<strong>\u53EF\u4EE5\u963B\u6B62\u810F\u8BFB\u548C\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF0C\u4F46\u5E7B\u8BFB\u4ECD\u6709\u53EF\u80FD\u53D1\u751F</strong></p></li><li><p><strong>SERIALIZABLE(\u53EF\u4E32\u884C\u5316)\uFF1A</strong></p><p>\u6700\u9AD8\u7684\u9694\u79BB\u7EA7\u522B\uFF0C\u5B8C\u5168\u670D\u4ECEACID\u7684\u9694\u79BB\u7EA7\u522B\u3002<strong>\u6240\u6709\u7684\u4E8B\u52A1\u4F9D\u6B21\u9010\u4E2A\u6267\u884C</strong>\uFF0C\u8FD9\u6837\u4E8B\u52A1\u4E4B\u95F4\u4E0D\u53EF\u80FD\u4EA7\u751F\u5E72\u6270\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u8BE5\u7EA7\u522B\u53EF\u4EE5\u9632\u6B62\u810F\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB\u4EE5\u53CA\u5E7B\u8BFB</strong></p></li></ul><p>\u200B</p><table><thead><tr><th>\u9694\u79BB\u7EA7\u522B</th><th>\u810F\u8BFB</th><th>\u4E0D\u53EF\u91CD\u590D\u8BFB</th><th>\u5E7B\u5F71\u8BFB</th></tr></thead><tbody><tr><td>READ-UNCOMMITTED</td><td>\u221A</td><td>\u221A</td><td>\u221A</td></tr><tr><td>READ-COMMITTED</td><td>\xD7</td><td>\u221A</td><td>\u221A</td></tr><tr><td>REPEATABLE-READ</td><td>\xD7</td><td>\xD7</td><td>\u221A</td></tr><tr><td>SERIALIZABLE</td><td>\xD7</td><td>\xD7</td><td>\xD7</td></tr></tbody></table><h2 id="_5-mysql-innodb-\u7684\u9694\u79BB\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#_5-mysql-innodb-\u7684\u9694\u79BB\u7EA7\u522B" aria-hidden="true">#</a> 5. MySQL innoDB \u7684\u9694\u79BB\u7EA7\u522B</h2><p>MySQL innoDB \u5B58\u50A8\u5F15\u64CE\u7684\u9ED8\u8BA4\u652F\u6301\u7684\u9694\u79BB\u7EA7\u522B\u662F<strong>REPEATABLE-READ\uFF08\u53EF\u91CD\u590D\u8BFB\uFF09</strong></p><p>\u53EF\u4EE5\u901A\u8FC7<code>SELECT @@tx_isolation;</code>\u547D\u4EE4\u6765\u67E5\u770B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; SELECT @@tx_isolation;
+-----------------+
| @@tx_isolation  |
+-----------------+
| REPEATABLE-READ |
+-----------------+
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-innodb-\u7684-repeatable-read\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB" tabindex="-1"><a class="header-anchor" href="#_5-1-innodb-\u7684-repeatable-read\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB" aria-hidden="true">#</a> 5.1 InnoDB \u7684 REPEATABLE-READ\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB</h3><ul><li><p><strong>Next-key Lock\u9501\u7B97\u6CD5</strong>\u3002\u56E0\u6B64\u53EF\u4EE5\u907F\u514D\u5E7B\u8BFB\u7684\u4EA7\u751F</p><ul><li>\u4E0ESQL \u6807\u51C6\u4E0D\u540C\u7684\u5730\u65B9\u5728\u4E8EInnoDB \u5B58\u50A8\u5728 <strong>REPEATABLE-READ\uFF08\u53EF\u91CD\u8BFB\uFF09<strong>\u4E8B\u52A1\u9694\u79BB\u754C\u522B\u4E0B\u4F7F\u7528\u7684\u662F</strong>Next-key Lock\u9501\u7B97\u6CD5</strong>\u3002\u56E0\u6B64\u53EF\u4EE5<strong>\u907F\u514D\u5E7B\u8BFB\u7684\u4EA7\u751F</strong></li><li>\u8FD9\u4E0E\u5176\u4ED6\u6570\u636E\u5E93\u7CFB\u7EDF\uFF08\u5982\uFF1ASQL Server\uFF09\u662F\u4E0D\u540C\u7684\uFF0C\u6240\u4EE5\u8BF4InnoDB \u5B58\u5728\u5F15\u64CE\u7684\u9ED8\u8BA4\u652F\u6301\u7684\u9694\u79BB\u7EA7\u522B\u662FREPEATABLE-READ\uFF08\u53EF\u91CD\u8BFB\uFF09\uFF0C\u5DF2\u7ECF\u53EF\u4EE5\u5B8C\u5168\u4FDD\u8BC1\u4E8B\u52A1\u7684\u9694\u79BB\u6027\u8981\u6C42\uFF0C\u65E2\u8FBE\u5230\u4E86SQL \u6807\u51C6\u7684<strong>SERIALIZABLE(\u53EF\u4E32\u884C\u5316)</strong> \u9694\u79BB\u7EA7\u522B</li><li>\u56E0\u4E3A\u9694\u79BB\u7EA7\u522B\u8D8A\u4F4E\uFF0C\u4E8B\u52A1\u8BF7\u6C42\u7684\u9501\u8D8A\u5C11\uFF0C\u4F46\u662F\u5927\u90E8\u5206\u6570\u636E\u5E93\u7684\u9694\u79BB\u7EA7\u522B\u90FD\u662F<strong>READ-COMMITTED(\u8BFB\u53D6\u63D0\u4EA4\u5185\u5BB9)</strong> \uFF0C\u4F46\u662F\u4F60\u8981\u77E5\u9053\u7684\u662FInnoDB \u5B58\u50A8\u5F15\u64CE\u9ED8\u8BA4\u4F7F\u7528 <strong>REPEAaTABLE-READ\uFF08\u53EF\u91CD\u8BFB\uFF09</strong> \u5E76\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6027\u80FD\u635F\u5931\u3002</li></ul></li><li><p>InnoDB \u5B58\u50A8\u5F15\u64CE\u5728 <strong>\u5206\u5E03\u5F0F\u4E8B\u52A1</strong> \u7684\u60C5\u51B5\u4E0B\u4E00\u822C\u4F1A\u7528\u5230 <strong>SERIALIZABLE(\u53EF\u4E32\u884C\u5316)</strong> \u9694\u79BB\u7EA7\u522B\u3002</p></li></ul>`,29),l=[i];function e(a,d){return n(),r("div",null,l)}const h=t(s,[["render",e],["__file","sql-mysql-transaction.html.vue"]]);export{h as default};
