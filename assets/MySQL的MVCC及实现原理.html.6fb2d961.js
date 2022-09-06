import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as a,a as i,b as n,e as r,d as t,r as s}from"./app.e5cb29cd.js";const d={},g=r('<h1 id="mysql\u7684mvcc\u53CA\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#mysql\u7684mvcc\u53CA\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> MySQL\u7684MVCC\u53CA\u5B9E\u73B0\u539F\u7406</h1><h2 id="_1-\u524D\u63D0\u6982\u8981" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u63D0\u6982\u8981" aria-hidden="true">#</a> 1. \u524D\u63D0\u6982\u8981</h2><h3 id="_1-1-\u4EC0\u4E48\u662F-mvcc" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662F-mvcc" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662F MVCC ?</h3><blockquote><p>MVCC MVCC\uFF0C\u5168\u79F0 Multi-Version Concurrency Control \uFF0C\u5373\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\u3002MVCC \u662F\u4E00\u79CD\u5E76\u53D1\u63A7\u5236\u7684\u65B9\u6CD5\uFF0C\u4E00\u822C\u5728\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u4E2D\uFF0C\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7684\u5E76\u53D1\u8BBF\u95EE\uFF0C\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5B9E\u73B0\u4E8B\u52A1\u5185\u5B58\u3002</p></blockquote><p>MVCC \u5728 MySQL InnoDB \u4E2D\u7684\u5B9E\u73B0\u4E3B\u8981\u662F\u4E3A\u4E86\u63D0\u9AD8\u6570\u636E\u5E93\u5E76\u53D1\u6027\u80FD\uFF0C\u7528\u66F4\u597D\u7684\u65B9\u5F0F\u53BB\u5904\u7406\u8BFB-\u5199\u51B2\u7A81\uFF0C\u505A\u5230\u5373\u4F7F\u6709\u8BFB\u5199\u51B2\u7A81\u65F6\uFF0C\u4E5F\u80FD\u505A\u5230\u4E0D\u52A0\u9501\uFF0C\u975E\u963B\u585E\u5E76\u53D1\u8BFB</p><h3 id="_1-2-\u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB" aria-hidden="true">#</a> 1.2 \u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB\uFF1F</h3><p>\u5728\u5B66\u4E60 MVCC \u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\u4E4B\u524D\uFF0C\u6211\u4EEC\u5FC5\u987B\u5148\u4E86\u89E3\u4E00\u4E0B\uFF0C\u4EC0\u4E48\u662F MySQL InnoDB \u4E0B\u7684\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB?</p><ul><li><p>\u5F53\u524D\u8BFB \u50CF select lock in share mode (<strong>\u5171\u4EAB\u9501</strong>), select for update; update; insert; delete (<strong>\u6392\u4ED6\u9501</strong>)\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u662F\u4E00\u79CD\u5F53\u524D\u8BFB\uFF0C\u4E3A\u4EC0\u4E48\u53EB\u5F53\u524D\u8BFB\uFF1F\u5C31\u662F\u5B83\u8BFB\u53D6\u7684\u662F\u8BB0\u5F55\u7684\u6700\u65B0\u7248\u672C\uFF0C\u8BFB\u53D6\u65F6\u8FD8\u8981\u4FDD\u8BC1\u5176\u4ED6\u5E76\u53D1\u4E8B\u52A1\u4E0D\u80FD\u4FEE\u6539\u5F53\u524D\u8BB0\u5F55\uFF0C\u4F1A\u5BF9\u8BFB\u53D6\u7684\u8BB0\u5F55\u8FDB\u884C\u52A0\u9501</p></li><li><p>\u5FEB\u7167\u8BFB \u50CF<strong>\u4E0D\u52A0\u9501</strong>\u7684 select \u64CD\u4F5C\u5C31\u662F\u5FEB\u7167\u8BFB\uFF0C\u5373\u4E0D\u52A0\u9501\u7684\u975E\u963B\u585E\u8BFB\uFF1B\u5FEB\u7167\u8BFB\u7684\u524D\u63D0\u662F\u9694\u79BB\u7EA7\u522B\u4E0D\u662F\u4E32\u884C\u7EA7\u522B\uFF0C\u4E32\u884C\u7EA7\u522B\u4E0B\u7684\u5FEB\u7167\u8BFB\u4F1A\u9000\u5316\u6210\u5F53\u524D\u8BFB\uFF1B\u4E4B\u6240\u4EE5\u51FA\u73B0\u5FEB\u7167\u8BFB\u7684\u60C5\u51B5\uFF0C\u662F\u57FA\u4E8E\u63D0\u9AD8\u5E76\u53D1\u6027\u80FD\u7684\u8003\u8651\uFF0C\u5FEB\u7167\u8BFB\u7684\u5B9E\u73B0\u662F\u57FA\u4E8E\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF0C\u5373 MVCC ,\u53EF\u4EE5\u8BA4\u4E3A MVCC \u662F\u884C\u9501\u7684\u4E00\u4E2A\u53D8\u79CD\uFF0C\u4F46\u5B83\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u907F\u514D\u4E86\u52A0\u9501\u64CD\u4F5C\uFF0C\u964D\u4F4E\u4E86\u5F00\u9500\uFF1B\u65E2\u7136\u662F\u57FA\u4E8E\u591A\u7248\u672C\uFF0C\u5373\u5FEB\u7167\u8BFB\u53EF\u80FD\u8BFB\u5230\u7684\u5E76\u4E0D\u4E00\u5B9A\u662F\u6570\u636E\u7684\u6700\u65B0\u7248\u672C\uFF0C\u800C\u6709\u53EF\u80FD\u662F\u4E4B\u524D\u7684\u5386\u53F2\u7248\u672C</p></li></ul><p><strong>\u8BF4\u767D\u4E86 MVCC \u5C31\u662F\u4E3A\u4E86\u5B9E\u73B0\u8BFB-\u5199\u51B2\u7A81\u4E0D\u52A0\u9501\uFF0C\u800C\u8FD9\u4E2A\u8BFB\u6307\u7684\u5C31\u662F\u5FEB\u7167\u8BFB, \u800C\u975E\u5F53\u524D\u8BFB\uFF0C\u5F53\u524D\u8BFB\u5B9E\u9645\u4E0A\u662F\u4E00\u79CD\u52A0\u9501\u7684\u64CD\u4F5C\uFF0C\u662F\u60B2\u89C2\u9501\u7684\u5B9E\u73B0</strong></p><h3 id="_1-3-\u5F53\u524D\u8BFB-\u5FEB\u7167\u8BFB\u548Cmvcc\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5F53\u524D\u8BFB-\u5FEB\u7167\u8BFB\u548Cmvcc\u7684\u5173\u7CFB" aria-hidden="true">#</a> 1.3 \u5F53\u524D\u8BFB\uFF0C\u5FEB\u7167\u8BFB\u548CMVCC\u7684\u5173\u7CFB</h3><ul><li>MVCC \u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\u662F \u300C\u7EF4\u6301\u4E00\u4E2A\u6570\u636E\u7684\u591A\u4E2A\u7248\u672C\uFF0C\u4F7F\u5F97\u8BFB\u5199\u64CD\u4F5C\u6CA1\u6709\u51B2\u7A81\u300D \u7684\u6982\u5FF5\uFF0C\u53EA\u662F\u4E00\u4E2A\u62BD\u8C61\u6982\u5FF5\uFF0C\u5E76\u975E\u5B9E\u73B0</li><li>\u56E0\u4E3A MVCC \u53EA\u662F\u4E00\u4E2A\u62BD\u8C61\u6982\u5FF5\uFF0C\u8981\u5B9E\u73B0\u8FD9\u4E48\u4E00\u4E2A\u6982\u5FF5\uFF0CMySQL \u5C31\u9700\u8981\u63D0\u4F9B\u5177\u4F53\u7684\u529F\u80FD\u53BB\u5B9E\u73B0\u5B83\uFF0C\u300C\u5FEB\u7167\u8BFB\u5C31\u662F MySQL \u5B9E\u73B0 MVCC \u7406\u60F3\u6A21\u578B\u7684\u5176\u4E2D\u4E00\u4E2A\u975E\u963B\u585E\u8BFB\u529F\u80FD\u300D\u3002\u800C\u76F8\u5BF9\u800C\u8A00\uFF0C<strong>\u5F53\u524D\u8BFB\u5C31\u662F\u60B2\u89C2\u9501\u7684\u5177\u4F53\u529F\u80FD\u5B9E\u73B0</strong></li><li>\u8981\u8BF4\u7684\u518D\u7EC6\u81F4\u4E00\u4E9B\uFF0C<strong>\u5FEB\u7167\u8BFB\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u62BD\u8C61\u6982\u5FF5\uFF0C\u518D\u6DF1\u5165\u7814\u7A76\u3002MVCC \u6A21\u578B\u5728 MySQL \u4E2D\u7684\u5177\u4F53\u5B9E\u73B0\u5219\u662F\u7531 3 \u4E2A\u9690\u5F0F\u5B57\u6BB5\uFF0Cundo \u65E5\u5FD7 \uFF0CRead View \u7B49\u53BB\u5B8C\u6210\u7684</strong>\uFF0C\u5177\u4F53\u53EF\u4EE5\u770B\u4E0B\u9762\u7684 MVCC \u5B9E\u73B0\u539F\u7406</li></ul><h3 id="_1-4-mvcc-\u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898-\u597D\u5904\u662F" tabindex="-1"><a class="header-anchor" href="#_1-4-mvcc-\u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898-\u597D\u5904\u662F" aria-hidden="true">#</a> 1.4 MVCC \u80FD\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF0C\u597D\u5904\u662F\uFF1F</h3><p>\u6570\u636E\u5E93\u5E76\u53D1\u573A\u666F\u6709\u4E09\u79CD\uFF0C\u5206\u522B\u4E3A\uFF1A</p><ul><li><p>\u8BFB-\u8BFB\uFF1A\u4E0D\u5B58\u5728\u4EFB\u4F55\u95EE\u9898\uFF0C\u4E5F\u4E0D\u9700\u8981\u5E76\u53D1\u63A7\u5236</p></li><li><p>\u8BFB-\u5199\uFF1A\u6709\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u4E8B\u52A1\u9694\u79BB\u6027\u95EE\u9898\uFF0C\u53EF\u80FD\u9047\u5230\u810F\u8BFB\uFF0C\u5E7B\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB</p></li><li><p>\u5199-\u5199\uFF1A\u6709\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u66F4\u65B0\u4E22\u5931\u95EE\u9898\uFF0C\u6BD4\u5982\u7B2C\u4E00\u7C7B\u66F4\u65B0\u4E22\u5931\uFF0C\u7B2C\u4E8C\u7C7B\u66F4\u65B0\u4E22\u5931</p></li></ul><p><strong>MVCC \u5E26\u6765\u7684\u597D\u5904\u662F\uFF1F</strong></p><p>\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF08MVCC\uFF09\u662F\u4E00\u79CD<strong>\u7528\u6765\u89E3\u51B3\u8BFB-\u5199\u51B2\u7A81\u7684\u65E0\u9501\u5E76\u53D1\u63A7\u5236</strong>\uFF0C\u4E5F\u5C31\u662F<strong>\u4E3A\u4E8B\u52A1\u5206\u914D\u5355\u5411\u589E\u957F\u7684\u65F6\u95F4\u6233\uFF0C\u4E3A\u6BCF\u4E2A\u4FEE\u6539\u4FDD\u5B58\u4E00\u4E2A\u7248\u672C\uFF0C\u7248\u672C\u4E0E\u4E8B\u52A1\u65F6\u95F4\u6233\u5173\u8054\uFF0C\u8BFB\u64CD\u4F5C\u53EA\u8BFB\u8BE5\u4E8B\u52A1\u5F00\u59CB\u524D\u7684\u6570\u636E\u5E93\u7684\u5FEB\u7167\u3002</strong> \u6240\u4EE5 MVCC \u53EF\u4EE5\u4E3A\u6570\u636E\u5E93\u89E3\u51B3\u4EE5\u4E0B\u95EE\u9898</p><ul><li><p>\u5728\u5E76\u53D1\u8BFB\u5199\u6570\u636E\u5E93\u65F6\uFF0C\u53EF\u4EE5\u505A\u5230\u5728\u8BFB\u64CD\u4F5C\u65F6\u4E0D\u7528\u963B\u585E\u5199\u64CD\u4F5C\uFF0C\u5199\u64CD\u4F5C\u4E5F\u4E0D\u7528\u963B\u585E\u8BFB\u64CD\u4F5C\uFF0C\u63D0\u9AD8\u4E86\u6570\u636E\u5E93\u5E76\u53D1\u8BFB\u5199\u7684\u6027\u80FD</p></li><li><p>\u540C\u65F6\u8FD8\u53EF\u4EE5\u89E3\u51B3\u810F\u8BFB\uFF0C\u5E7B\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB\u7B49\u4E8B\u52A1\u9694\u79BB\u95EE\u9898\uFF0C\u4F46\u4E0D\u80FD\u89E3\u51B3\u66F4\u65B0\u4E22\u5931\u95EE\u9898</p></li></ul><p><strong>\u5C0F\u7ED3\u4E00\u4E0B\u54AF</strong></p><p>\u7B80\u800C\u8A00\u4E4B\uFF0CMVCC \u5C31\u662F\u56E0\u4E3A\u5927\u4F6C\u4EEC\uFF0C\u4E0D\u6EE1\u610F\u53EA\u8BA9\u6570\u636E\u5E93\u91C7\u7528\u60B2\u89C2\u9501\u8FD9\u6837\u6027\u80FD\u4E0D\u4F73\u7684\u5F62\u5F0F\u53BB\u89E3\u51B3\u8BFB-\u5199\u51B2\u7A81\u95EE\u9898\uFF0C\u800C\u63D0\u51FA\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6240\u4EE5\u5728\u6570\u636E\u5E93\u4E2D\uFF0C<strong>\u56E0\u4E3A\u6709\u4E86 MVCC\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5F62\u6210\u4E24\u4E2A\u7EC4\u5408\uFF1A</strong></p><ul><li><code>MVCC + \u60B2\u89C2\u9501</code> MVCC\u89E3\u51B3\u8BFB\u5199\u51B2\u7A81\uFF0C\u60B2\u89C2\u9501\u89E3\u51B3\u5199\u5199\u51B2\u7A81</li><li><code>MVCC + \u4E50\u89C2\u9501</code> MVCC \u89E3\u51B3\u8BFB\u5199\u51B2\u7A81\uFF0C\u4E50\u89C2\u9501\u89E3\u51B3\u5199\u5199\u51B2\u7A81</li></ul><p>\u8FD9\u79CD\u7EC4\u5408\u7684\u65B9\u5F0F\u5C31\u53EF\u4EE5\u6700\u5927\u7A0B\u5EA6\u7684\u63D0\u9AD8\u6570\u636E\u5E93\u5E76\u53D1\u6027\u80FD\uFF0C\u5E76\u89E3\u51B3\u8BFB\u5199\u51B2\u7A81\uFF0C\u548C\u5199\u5199\u51B2\u7A81\u5BFC\u81F4\u7684\u95EE\u9898</p><h2 id="_2-mvcc-\u7684\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-mvcc-\u7684\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> 2. MVCC \u7684\u5B9E\u73B0\u539F\u7406</h2><p>MVCC \u7684\u76EE\u7684\u5C31\u662F\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF0C\u5728\u6570\u636E\u5E93\u4E2D\u7684\u5B9E\u73B0\uFF0C\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8BFB\u5199\u51B2\u7A81\uFF0C\u5B83\u7684<strong>\u5B9E\u73B0\u539F\u7406\u4E3B\u8981\u662F\u4F9D\u8D56\u8BB0\u5F55\u4E2D\u7684 3\u4E2A\u9690\u5F0F\u5B57\u6BB5\uFF0Cundo\u65E5\u5FD7 \uFF0CRead View \u6765\u5B9E\u73B0\u7684</strong>\u3002\u6240\u4EE5\u6211\u4EEC\u5148\u6765\u770B\u770B\u8FD9\u4E2A\u4E09\u4E2A point \u7684\u6982\u5FF5</p><h3 id="_2-1-\u9690\u5F0F\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u9690\u5F0F\u5B57\u6BB5" aria-hidden="true">#</a> 2.1 \u9690\u5F0F\u5B57\u6BB5</h3><p>\u6BCF\u884C\u8BB0\u5F55\u9664\u4E86\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u5B57\u6BB5\u5916\uFF0C\u8FD8\u6709\u6570\u636E\u5E93\u9690\u5F0F\u5B9A\u4E49\u7684 <strong>DB_TRX_ID, DB_ROLL_PTR, DB_ROW_ID</strong> \u7B49\u5B57\u6BB5</p><ul><li><strong>DB_TRX_ID</strong> 6 byte\uFF0C<strong>\u6700\u8FD1\u4FEE\u6539(\u4FEE\u6539/\u63D2\u5165)\u4E8B\u52A1 ID</strong>\uFF1A\u8BB0\u5F55\u521B\u5EFA\u8FD9\u6761\u8BB0\u5F55/\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u8BE5\u8BB0\u5F55\u7684\u4E8B\u52A1 ID</li><li><strong>DB_ROLL_PTR</strong> 7 byte\uFF0C<strong>\u56DE\u6EDA\u6307\u9488</strong>\uFF0C\u6307\u5411\u8FD9\u6761\u8BB0\u5F55\u7684\u4E0A\u4E00\u4E2A\u7248\u672C\uFF08\u5B58\u50A8\u4E8E rollback segment \u91CC\uFF09</li><li><strong>DB_ROW_ID</strong> 6 byte\uFF0C<strong>\u9690\u542B\u7684\u81EA\u589E ID\uFF08\u9690\u85CF\u4E3B\u952E\uFF09</strong>\uFF0C\u5982\u679C\u6570\u636E\u8868\u6CA1\u6709\u4E3B\u952E\uFF0CInnoDB \u4F1A\u81EA\u52A8\u4EE5DB_ROW_ID\u4EA7\u751F\u4E00\u4E2A\u805A\u7C07\u7D22\u5F15</li><li>\u5B9E\u9645\u8FD8\u6709\u4E00\u4E2A\u5220\u9664 flag \u9690\u85CF\u5B57\u6BB5, \u65E2\u8BB0\u5F55\u88AB\u66F4\u65B0\u6216\u5220\u9664\u5E76\u4E0D\u4EE3\u8868\u771F\u7684\u5220\u9664\uFF0C\u800C\u662F\u5220\u9664 flag \u53D8\u4E86</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609230228840.png" alt="image-20220609230228840" loading="lazy"></p><p>\u5982\u4E0A\u56FE\uFF0C<code>DB_ROW_ID</code> \u662F\u6570\u636E\u5E93\u9ED8\u8BA4\u4E3A\u8BE5\u884C\u8BB0\u5F55\u751F\u6210\u7684\u552F\u4E00\u9690\u5F0F\u4E3B\u952E\uFF0C<code>DB_TRX_ID</code> \u662F\u5F53\u524D\u64CD\u4F5C\u8BE5\u8BB0\u5F55\u7684\u4E8B\u52A1 ID ,\u800C <code>DB_ROLL_PTR</code> \u662F\u4E00\u4E2A\u56DE\u6EDA\u6307\u9488\uFF0C\u7528\u4E8E\u914D\u5408 undo\u65E5\u5FD7\uFF0C\u6307\u5411\u4E0A\u4E00\u4E2A\u65E7\u7248\u672C</p><h3 id="_2-2-undo\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-2-undo\u65E5\u5FD7" aria-hidden="true">#</a> 2.2 undo\u65E5\u5FD7</h3><p>undo log \u4E3B\u8981\u5206\u4E3A\u4E24\u79CD\uFF1A</p><ul><li><strong>insert undo log</strong> \u4EE3\u8868\u4E8B\u52A1\u5728 <strong>insert</strong> \u65B0\u8BB0\u5F55\u65F6\u4EA7\u751F\u7684 <strong>undo log</strong>, \u53EA\u5728\u4E8B\u52A1\u56DE\u6EDA\u65F6\u9700\u8981\uFF0C\u5E76\u4E14\u5728\u4E8B\u52A1\u63D0\u4EA4\u540E\u53EF\u4EE5\u88AB\u7ACB\u5373\u4E22\u5F03</li><li><strong>update undo log</strong> \u4E8B\u52A1\u5728\u8FDB\u884C <strong>update</strong> \u6216 <strong>delete</strong> \u65F6\u4EA7\u751F\u7684 <strong>undo log</strong> ; <strong>\u4E0D\u4EC5\u5728\u4E8B\u52A1\u56DE\u6EDA\u65F6\u9700\u8981\uFF0C\u5728\u5FEB\u7167\u8BFB\u65F6\u4E5F\u9700\u8981\uFF1B\u6240\u4EE5\u4E0D\u80FD\u968F\u4FBF\u5220\u9664</strong>\uFF0C\u53EA\u6709\u5728\u5FEB\u901F\u8BFB\u6216\u4E8B\u52A1\u56DE\u6EDA\u4E0D\u6D89\u53CA\u8BE5\u65E5\u5FD7\u65F6\uFF0C\u5BF9\u5E94\u7684\u65E5\u5FD7\u624D\u4F1A\u88AB purge \u7EBF\u7A0B\u7EDF\u4E00\u6E05\u9664</li></ul><blockquote><p>purge</p><ul><li><p>\u4ECE\u524D\u9762\u7684\u5206\u6790\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E3A\u4E86\u5B9E\u73B0 InnoDB \u7684 MVCC \u673A\u5236\uFF0C\u66F4\u65B0\u6216\u8005\u5220\u9664\u64CD\u4F5C\u90FD\u53EA\u662F\u8BBE\u7F6E\u4E00\u4E0B\u8001\u8BB0\u5F55\u7684 deleted_bit \uFF0C\u5E76\u4E0D\u771F\u6B63\u5C06\u8FC7\u65F6\u7684\u8BB0\u5F55\u5220\u9664\u3002</p></li><li><p>\u4E3A\u4E86\u8282\u7701\u78C1\u76D8\u7A7A\u95F4\uFF0CInnoDB \u6709\u4E13\u95E8\u7684 purge \u7EBF\u7A0B\u6765\u6E05\u7406 deleted_bit \u4E3A true \u7684\u8BB0\u5F55\u3002\u4E3A\u4E86\u4E0D\u5F71\u54CD MVCC \u7684\u6B63\u5E38\u5DE5\u4F5C\uFF0Cpurge \u7EBF\u7A0B\u81EA\u5DF1\u4E5F\u7EF4\u62A4\u4E86\u4E00\u4E2Aread view\uFF08\u8FD9\u4E2A read view \u76F8\u5F53\u4E8E\u7CFB\u7EDF\u4E2D\u6700\u8001\u6D3B\u8DC3\u4E8B\u52A1\u7684 read view \uFF09;\u5982\u679C\u67D0\u4E2A\u8BB0\u5F55\u7684 deleted_bit \u4E3A true \uFF0C\u5E76\u4E14 DB_TRX_ID \u76F8\u5BF9\u4E8E purge \u7EBF\u7A0B\u7684 read view \u53EF\u89C1\uFF0C\u90A3\u4E48\u8FD9\u6761\u8BB0\u5F55\u4E00\u5B9A\u662F\u53EF\u4EE5\u88AB\u5B89\u5168\u6E05\u9664\u7684\u3002</p></li></ul></blockquote><p>\u5BF9 MVCC \u6709\u5E2E\u52A9\u7684\u5B9E\u8D28\u662F <strong>update undo log</strong> \uFF0C<strong>undo log</strong> \u5B9E\u9645\u4E0A\u5C31\u662F\u5B58\u5728 <strong>rollback segment</strong> \u4E2D\u65E7\u8BB0\u5F55\u94FE\uFF0C\u5B83\u7684\u6267\u884C\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><h4 id="_2-2-1-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u793A\u4F8B" aria-hidden="true">#</a> 2.2.1 \u793A\u4F8B</h4><ol><li>\u6BD4\u5982\u4E00\u4E2A\u6709\u4E2A\u4E8B\u52A1\u63D2\u5165 persion \u8868\u63D2\u5165\u4E86\u4E00\u6761\u65B0\u8BB0\u5F55\uFF0C\u8BB0\u5F55\u5982\u4E0B\uFF0Cname \u4E3A Jerry , age \u4E3A 24 \u5C81\uFF0C<strong>\u9690\u5F0F\u4E3B\u952E\u662F 1\uFF0C\u4E8B\u52A1 ID\u548C\u56DE\u6EDA\u6307\u9488</strong>\uFF0C\u6211\u4EEC\u5047\u8BBE\u4E3A NULL</li></ol><p>\u200B <img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609230825307.png" alt="image-20220609230825307" loading="lazy"></p><ol start="2"><li><strong>\u73B0\u5728\u6765\u4E86\u4E00\u4E2A<code>\u4E8B\u52A1 1</code>\u5BF9\u8BE5\u8BB0\u5F55\u7684 <code>name</code> \u505A\u51FA\u4E86\u4FEE\u6539\uFF0C\u6539\u4E3A Tom</strong></li></ol><ul><li>\u5728<code>\u4E8B\u52A1 1</code>\u4FEE\u6539\u8BE5\u884C(\u8BB0\u5F55)\u6570\u636E\u65F6\uFF0C\u6570\u636E\u5E93\u4F1A\u5148\u5BF9\u8BE5\u884C\u52A0<code>\u6392\u4ED6\u9501</code></li><li>\u7136\u540E\u628A\u8BE5\u884C\u6570\u636E\u62F7\u8D1D\u5230 undo log \u4E2D\uFF0C\u4F5C\u4E3A\u65E7\u8BB0\u5F55\uFF0C\u65E2\u5728 undo log \u4E2D\u6709\u5F53\u524D\u884C\u7684\u62F7\u8D1D\u526F\u672C</li><li>\u62F7\u8D1D\u5B8C\u6BD5\u540E\uFF0C\u4FEE\u6539\u8BE5\u884Cname\u4E3ATom\uFF0C\u5E76\u4E14\u4FEE\u6539\u9690\u85CF\u5B57\u6BB5\u7684\u4E8B\u52A1 ID \u4E3A\u5F53\u524D\u4E8B\u52A1 1\u7684 ID, \u6211\u4EEC\u9ED8\u8BA4\u4ECE 1 \u5F00\u59CB\uFF0C\u4E4B\u540E\u9012\u589E\uFF0C\u56DE\u6EDA\u6307\u9488\u6307\u5411\u62F7\u8D1D\u5230 undo log \u7684\u526F\u672C\u8BB0\u5F55\uFF0C\u65E2\u8868\u793A\u6211\u7684\u4E0A\u4E00\u4E2A\u7248\u672C\u5C31\u662F\u5B83</li><li>\u4E8B\u52A1\u63D0\u4EA4\u540E\uFF0C\u91CA\u653E\u9501</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609231103326.png" alt="image-20220609231103326" loading="lazy"></p><ol start="3"><li><p>\u53C8\u6765\u4E86\u4E2A\u4E8B\u52A1 2\u4FEE\u6539person \u8868\u7684\u540C\u4E00\u4E2A\u8BB0\u5F55\uFF0C\u5C06age\u4FEE\u6539\u4E3A 30 \u5C81</p><ul><li>\u5728\u4E8B\u52A12\u4FEE\u6539\u8BE5\u884C\u6570\u636E\u65F6\uFF0C\u6570\u636E\u5E93\u4E5F\u5148\u4E3A\u8BE5\u884C\u52A0\u9501</li><li><strong>\u7136\u540E\u628A\u8BE5\u884C\u6570\u636E\u62F7\u8D1D\u5230 undo log \u4E2D\uFF0C\u4F5C\u4E3A\u65E7\u8BB0\u5F55\uFF0C\u53D1\u73B0\u8BE5\u884C\u8BB0\u5F55\u5DF2\u7ECF\u6709 undo log \u4E86\uFF0C\u90A3\u4E48\u6700\u65B0\u7684\u65E7\u6570\u636E\u4F5C\u4E3A\u94FE\u8868\u7684\u8868\u5934\uFF0C\u63D2\u5728\u8BE5\u884C\u8BB0\u5F55\u7684 undo log \u6700\u524D\u9762</strong></li><li>\u4FEE\u6539\u8BE5\u884C age \u4E3A 30 \u5C81\uFF0C\u5E76\u4E14\u4FEE\u6539\u9690\u85CF\u5B57\u6BB5\u7684\u4E8B\u52A1 ID \u4E3A\u5F53\u524D\u4E8B\u52A1 2\u7684 ID, \u90A3\u5C31\u662F 2 \uFF0C\u56DE\u6EDA\u6307\u9488\u6307\u5411\u521A\u521A\u62F7\u8D1D\u5230 undo log \u7684\u526F\u672C\u8BB0\u5F55</li><li>\u4E8B\u52A1\u63D0\u4EA4\uFF0C\u91CA\u653E\u9501</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609231216790.png" alt="image-20220609231216790" loading="lazy"></p></li></ol><p>\u4ECE\u4E0A\u9762\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E0D\u540C\u4E8B\u52A1\u6216\u8005\u76F8\u540C\u4E8B\u52A1\u7684\u5BF9\u540C\u4E00\u8BB0\u5F55\u7684\u4FEE\u6539\uFF0C\u4F1A\u5BFC\u81F4\u8BE5\u8BB0\u5F55\u7684undo log\u6210\u4E3A\u4E00\u6761\u8BB0\u5F55\u7248\u672C\u7EBF\u6027\u8868\uFF0C\u65E2<strong>\u94FE\u8868</strong>\uFF0C**undo log \u7684\u94FE\u9996\u5C31\u662F\u6700\u65B0\u7684\u65E7\u8BB0\u5F55\uFF0C\u94FE\u5C3E\u5C31\u662F\u6700\u65E9\u7684\u65E7\u8BB0\u5F55\uFF08**\u5F53\u7136\u5C31\u50CF\u4E4B\u524D\u8BF4\u7684\u8BE5 undo log \u7684\u8282\u70B9\u53EF\u80FD\u662F\u4F1A purge \u7EBF\u7A0B\u6E05\u9664\u6389\uFF0C\u5411\u56FE\u4E2D\u7684\u7B2C\u4E00\u6761 insert undo log\uFF0C\u5176\u5B9E\u5728\u4E8B\u52A1\u63D0\u4EA4\u4E4B\u540E\u53EF\u80FD\u5C31\u88AB\u5220\u9664\u4E22\u5931\u4E86\uFF0C\u4E0D\u8FC7\u8FD9\u91CC\u4E3A\u4E86\u6F14\u793A\uFF0C\u6240\u4EE5\u8FD8\u653E\u5728\u8FD9\u91CC\uFF09</p><h3 id="_2-3-read-view-\u8BFB\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#_2-3-read-view-\u8BFB\u89C6\u56FE" aria-hidden="true">#</a> 2.3 Read View \u8BFB\u89C6\u56FE</h3><h4 id="_2-3-1-\u4EC0\u4E48\u662F-read-view" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u4EC0\u4E48\u662F-read-view" aria-hidden="true">#</a> 2.3.1 \u4EC0\u4E48\u662F Read View?</h4><p>\u4EC0\u4E48\u662F Read View\uFF0C\u8BF4\u767D\u4E86 Read View \u5C31\u662F\u4E8B\u52A1\u8FDB\u884C<strong>\u5FEB\u7167\u8BFB</strong>\u64CD\u4F5C\u7684\u65F6\u5019\u751F\u4EA7\u7684<strong>\u8BFB\u89C6\u56FE (Read View)</strong>\uFF0C\u5728\u8BE5\u4E8B\u52A1\u6267\u884C\u7684\u5FEB\u7167\u8BFB\u7684\u90A3\u4E00\u523B\uFF0C\u4F1A\u751F\u6210\u6570\u636E\u5E93\u7CFB\u7EDF\u5F53\u524D\u7684\u4E00\u4E2A\u5FEB\u7167\uFF0C\u8BB0\u5F55\u5E76\u7EF4\u62A4\u7CFB\u7EDF\u5F53\u524D\u6D3B\u8DC3\u4E8B\u52A1\u7684 ID (<strong>\u5F53\u6BCF\u4E2A\u4E8B\u52A1\u5F00\u542F\u65F6\uFF0C\u90FD\u4F1A\u88AB\u5206\u914D\u4E00\u4E2A ID , \u8FD9\u4E2A ID \u662F\u9012\u589E\u7684\uFF0C\u6240\u4EE5\u6700\u65B0\u7684\u4E8B\u52A1\uFF0CID \u503C\u8D8A\u5927)</strong></p><p>\u6240\u4EE5\u6211\u4EEC\u77E5\u9053 Read View \u4E3B\u8981\u662F\u7528\u6765\u505A\u53EF\u89C1\u6027\u5224\u65AD\u7684, \u5373\u5F53\u6211\u4EEC\u67D0\u4E2A\u4E8B\u52A1\u6267\u884C\u5FEB\u7167\u8BFB\u7684\u65F6\u5019\uFF0C\u5BF9\u8BE5\u8BB0\u5F55\u521B\u5EFA\u4E00\u4E2A Read View \u8BFB\u89C6\u56FE\uFF0C\u628A\u5B83\u6BD4\u4F5C\u6761\u4EF6\u7528\u6765\u5224\u65AD\u5F53\u524D\u4E8B\u52A1\u80FD\u591F\u770B\u5230\u54EA\u4E2A\u7248\u672C\u7684\u6570\u636E\uFF0C\u65E2\u53EF\u80FD\u662F\u5F53\u524D\u6700\u65B0\u7684\u6570\u636E\uFF0C\u4E5F\u6709\u53EF\u80FD\u662F\u8BE5\u884C\u8BB0\u5F55\u7684undo log\u91CC\u9762\u7684\u67D0\u4E2A\u7248\u672C\u7684\u6570\u636E\u3002</p><p>Read View\u9075\u5FAA\u4E00\u4E2A\u53EF\u89C1\u6027\u7B97\u6CD5\uFF0C\u4E3B\u8981\u662F\u5C06<strong>\u8981\u88AB\u4FEE\u6539\u7684\u6570\u636E</strong>\u7684\u6700\u65B0\u8BB0\u5F55\u4E2D\u7684 DB_TRX_ID\uFF08\u5373\u5F53\u524D\u4E8B\u52A1 ID \uFF09\u53D6\u51FA\u6765\uFF0C\u4E0E\u7CFB\u7EDF\u5F53\u524D\u5176\u4ED6\u6D3B\u8DC3\u4E8B\u52A1\u7684 ID \u53BB\u5BF9\u6BD4\uFF08\u7531 Read View \u7EF4\u62A4\uFF09\uFF0C\u5982\u679C DB_TRX_ID \u8DDF Read View \u7684\u5C5E\u6027\u505A\u4E86\u67D0\u4E9B\u6BD4\u8F83\uFF0C\u4E0D\u7B26\u5408\u53EF\u89C1\u6027\uFF0C\u90A3\u5C31\u901A\u8FC7 DB_ROLL_PTR \u56DE\u6EDA\u6307\u9488\u53BB\u53D6\u51FA Undo Log \u4E2D\u7684 DB_TRX_ID \u518D\u6BD4\u8F83\uFF0C\u5373\u904D\u5386\u94FE\u8868\u7684 DB_TRX_ID\uFF08\u4ECE\u94FE\u9996\u5230\u94FE\u5C3E\uFF0C\u5373\u4ECE\u6700\u8FD1\u7684\u4E00\u6B21\u4FEE\u6539\u67E5\u8D77\uFF09\uFF0C\u76F4\u5230\u627E\u5230\u6EE1\u8DB3\u7279\u5B9A\u6761\u4EF6\u7684 DB_TRX_ID , <strong>\u90A3\u4E48\u8FD9\u4E2A DB_TRX_ID \u6240\u5728\u7684\u65E7\u8BB0\u5F55\u5C31\u662F\u5F53\u524D\u4E8B\u52A1\u80FD\u770B\u89C1\u7684\u6700\u65B0\u8001\u7248\u672C</strong></p><blockquote><p>\u603B\u4E4B\uFF1A\u5C31\u662F\u4E3A\u4E86\u627E\u5230\u6700\u65B0\u7684\u8001\u7248\u672C</p></blockquote><p>\u90A3\u4E48\u8FD9\u4E2A\u5224\u65AD\u6761\u4EF6\u662F\u4EC0\u4E48\u5462\uFF1F</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609232020276.png" alt="image-20220609232020276" loading="lazy"></p><p>\u5982\u4E0A\uFF0C\u5B83\u662F\u4E00\u6BB5 MySQL \u5224\u65AD\u53EF\u89C1\u6027\u7684\u4E00\u6BB5\u6E90\u7801\uFF0C\u5373 changes_visible \u65B9\u6CD5\uFF08\u4E0D\u5B8C\u5168\u54C8\uFF0C\u4F46\u80FD\u770B\u51FA\u5927\u81F4\u903B\u8F91\uFF09\uFF0C\u8BE5\u65B9\u6CD5\u5C55\u793A\u4E86\u6211\u4EEC\u62FF DB_TRX_ID \u53BB\u8DDF Read View \u67D0\u4E9B\u5C5E\u6027\u8FDB\u884C\u600E\u4E48\u6837\u7684\u6BD4\u8F83</p><p>\u5728\u5C55\u793A\u4E4B\u524D\uFF0C\u6211\u5148\u7B80\u5316\u4E00\u4E0B Read View\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A Read View \u7B80\u5355\u7684\u7406\u89E3\u6210\u6709\u4E09\u4E2A\u5168\u5C40\u5C5E\u6027</p><blockquote><ul><li>trx_list\uFF08\u540D\u79F0\u6211\u968F\u610F\u53D6\u7684\uFF09</li><li>\u4E00\u4E2A\u6570\u503C\u5217\u8868</li><li>\u7528\u4E8E\u7EF4\u62A4 Read View \u751F\u6210\u65F6\u523B\u7CFB\u7EDF \u6B63\u6D3B\u8DC3\u7684\u4E8B\u52A1 ID \u5217\u8868</li><li>up_limit_id</li><li>lower water remark</li><li>\u662F trx_list \u5217\u8868\u4E2D\u4E8B\u52A1 ID \u6700\u5C0F\u7684 ID</li><li>low_limit_id</li><li>hight water mark</li><li>ReadView \u751F\u6210\u65F6\u523B\u7CFB\u7EDF\u5C1A\u672A\u5206\u914D\u7684\u4E0B\u4E00\u4E2A\u4E8B\u52A1 ID \uFF0C\u4E5F\u5C31\u662F \u76EE\u524D\u5DF2\u51FA\u73B0\u8FC7\u7684\u4E8B\u52A1 ID \u7684\u6700\u5927\u503C + 1</li><li>\u4E3A\u4EC0\u4E48\u662F low_limit ? \u56E0\u4E3A\u5B83\u4E5F\u662F\u7CFB\u7EDF\u6B64\u523B\u53EF\u5206\u914D\u7684\u4E8B\u52A1 ID \u7684\u6700\u5C0F\u503C</li></ul></blockquote><ul><li>\u9996\u5148\u6BD4\u8F83 DB_TRX_ID &lt; up_limit_id , \u5982\u679C\u5C0F\u4E8E\uFF0C\u5219\u5F53\u524D\u4E8B\u52A1\u80FD\u770B\u5230 DB_TRX_ID \u6240\u5728\u7684\u8BB0\u5F55\uFF0C\u5982\u679C\u5927\u4E8E\u7B49\u4E8E\u8FDB\u5165\u4E0B\u4E00\u4E2A\u5224\u65AD</li><li>\u63A5\u4E0B\u6765\u5224\u65AD DB_TRX_ID &gt;= low_limit_id , \u5982\u679C\u5927\u4E8E\u7B49\u4E8E\u5219\u4EE3\u8868 DB_TRX_ID \u6240\u5728\u7684\u8BB0\u5F55\u5728 Read View \u751F\u6210\u540E\u624D\u51FA\u73B0\u7684\uFF0C\u90A3\u5BF9\u5F53\u524D\u4E8B\u52A1\u80AF\u5B9A\u4E0D\u53EF\u89C1\uFF0C\u5982\u679C\u5C0F\u4E8E\u5219\u8FDB\u5165\u4E0B\u4E00\u4E2A\u5224\u65AD</li><li>\u5224\u65AD DB_TRX_ID \u662F\u5426\u5728\u6D3B\u8DC3\u4E8B\u52A1\u4E4B\u4E2D\uFF0Ctrx_list.contains (DB_TRX_ID)\uFF0C\u5982\u679C\u5728\uFF0C\u5219\u4EE3\u8868\u6211 Read View \u751F\u6210\u65F6\u523B\uFF0C\u4F60\u8FD9\u4E2A\u4E8B\u52A1\u8FD8\u5728\u6D3B\u8DC3\uFF0C\u8FD8\u6CA1\u6709 Commit\uFF0C\u4F60\u4FEE\u6539\u7684\u6570\u636E\uFF0C\u6211\u5F53\u524D\u4E8B\u52A1\u4E5F\u662F\u770B\u4E0D\u89C1\u7684\uFF1B\u5982\u679C\u4E0D\u5728\uFF0C\u5219\u8BF4\u660E\uFF0C\u4F60\u8FD9\u4E2A\u4E8B\u52A1\u5728 Read View \u751F\u6210\u4E4B\u524D\u5C31\u5DF2\u7ECF Commit \u4E86\uFF0C\u4F60\u4FEE\u6539\u7684\u7ED3\u679C\uFF0C\u6211\u5F53\u524D\u4E8B\u52A1\u662F\u80FD\u770B\u89C1\u7684</li></ul><h2 id="_3-\u6574\u4F53\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-\u6574\u4F53\u6D41\u7A0B" aria-hidden="true">#</a> 3. \u6574\u4F53\u6D41\u7A0B</h2><p>\u6211\u4EEC\u5728\u4E86\u89E3\u4E86 <strong>\u9690\u5F0F\u5B57\u6BB5\uFF0Cundo log\uFF0C \u4EE5\u53CA Read View</strong> \u7684\u6982\u5FF5\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u6765\u770B\u770B MVCC \u5B9E\u73B0\u7684\u6574\u4F53\u6D41\u7A0B\u662F\u600E\u4E48\u6837\u4E86</p><p><strong>\u6574\u4F53\u7684\u6D41\u7A0B\u662F\u600E\u4E48\u6837\u7684\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u6A21\u62DF\u4E00\u4E0B</strong></p><ul><li><p>\u5F53\u4E8B\u52A1 2\u5BF9\u67D0\u884C\u6570\u636E\u6267\u884C\u4E86\u5FEB\u7167\u8BFB\uFF0C\u6570\u636E\u5E93\u4E3A\u8BE5\u884C\u6570\u636E\u751F\u6210\u4E00\u4E2ARead View\u8BFB\u89C6\u56FE\uFF0C\u5047\u8BBE\u5F53\u524D\u4E8B\u52A1 ID \u4E3A 2\uFF0C\u6B64\u65F6\u8FD8\u6709\u4E8B\u52A11\u548C\u4E8B\u52A13\u5728\u6D3B\u8DC3\u4E2D\uFF0C\u4E8B\u52A1 4\u5728\u4E8B\u52A1 2\u5FEB\u7167\u8BFB\u524D\u4E00\u523B\u63D0\u4EA4\u66F4\u65B0\u4E86\uFF0C\u6240\u4EE5 Read View \u8BB0\u5F55\u4E86\u7CFB\u7EDF\u5F53\u524D\u6D3B\u8DC3\u4E8B\u52A1 1\uFF0C3 \u7684 ID\uFF0C\u7EF4\u62A4\u5728\u4E00\u4E2A\u5217\u8868\u4E0A\uFF0C\u5047\u8BBE\u6211\u4EEC\u79F0\u4E3Atrx_list</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609232400027.png" alt="image-20220609232400027" loading="lazy"></p></li><li><p>Read View \u4E0D\u4EC5\u4EC5\u4F1A\u901A\u8FC7\u4E00\u4E2A\u5217\u8868 trx_list \u6765\u7EF4\u62A4\u4E8B\u52A1 2\u6267\u884C\u5FEB\u7167\u8BFB\u90A3\u523B\u7CFB\u7EDF\u6B63\u6D3B\u8DC3\u7684\u4E8B\u52A1 ID \u5217\u8868\uFF0C\u8FD8\u4F1A\u6709\u4E24\u4E2A\u5C5E\u6027 up_limit_id\uFF08 trx_list \u5217\u8868\u4E2D\u4E8B\u52A1 ID \u6700\u5C0F\u7684 ID \uFF09\uFF0Clow_limit_id ( \u5FEB\u7167\u8BFB\u65F6\u523B\u7CFB\u7EDF\u5C1A\u672A\u5206\u914D\u7684\u4E0B\u4E00\u4E2A\u4E8B\u52A1 ID \uFF0C\u4E5F\u5C31\u662F\u76EE\u524D\u5DF2\u51FA\u73B0\u8FC7\u7684\u4E8B\u52A1ID\u7684\u6700\u5927\u503C + 1\u3002\u6240\u4EE5\u5728\u8FD9\u91CC\u4F8B\u5B50\u4E2D up_limit_id \u5C31\u662F1\uFF0Clow_limit_id \u5C31\u662F 4 + 1 = 5\uFF0Ctrx_list \u96C6\u5408\u7684\u503C\u662F 1, 3\uFF0CRead View \u5982\u4E0B\u56FE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609232430132.png" alt="image-20220609232430132" loading="lazy"></p></li><li><p>\u6211\u4EEC\u7684\u4F8B\u5B50\u4E2D\uFF0C\u53EA\u6709\u4E8B\u52A1 4 \u4FEE\u6539\u8FC7\u8BE5\u884C\u8BB0\u5F55\uFF0C\u5E76\u5728\u4E8B\u52A1 2 \u6267\u884C\u5FEB\u7167\u8BFB\u524D\uFF0C\u5C31\u63D0\u4EA4\u4E86\u4E8B\u52A1\uFF0C\u6240\u4EE5\u5F53\u524D\u8BE5\u884C\u5F53\u524D\u6570\u636E\u7684 undo log \u5982\u4E0B\u56FE\u6240\u793A\uFF1B\u6211\u4EEC\u7684\u4E8B\u52A1 2 \u5728\u5FEB\u7167\u8BFB\u8BE5\u884C\u8BB0\u5F55\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u62FF\u8BE5\u884C\u8BB0\u5F55\u7684 DB_TRX_ID \u53BB\u8DDF up_limit_id , low_limit_id \u548C\u6D3B\u8DC3\u4E8B\u52A1 ID \u5217\u8868( trx_list )\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5224\u65AD\u5F53\u524D\u4E8B\u52A1 2\u80FD\u770B\u5230\u8BE5\u8BB0\u5F55\u7684\u7248\u672C\u662F\u54EA\u4E2A\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609232509367.png" alt="image-20220609232509367" loading="lazy"></p></li><li><p>\u6240\u4EE5\u5148\u62FF\u8BE5\u8BB0\u5F55 DB_TRX_ID \u5B57\u6BB5\u8BB0\u5F55\u7684\u4E8B\u52A1 ID 4 \u53BB\u8DDF Read View \u7684 up_limit_id \u6BD4\u8F83\uFF0C\u770B 4 \u662F\u5426\u5C0F\u4E8E up_limit_id( 1 )\uFF0C\u6240\u4EE5\u4E0D\u7B26\u5408\u6761\u4EF6\uFF0C\u7EE7\u7EED\u5224\u65AD 4 \u662F\u5426\u5927\u4E8E\u7B49\u4E8E low_limit_id( 5 )\uFF0C\u4E5F\u4E0D\u7B26\u5408\u6761\u4EF6\uFF0C\u6700\u540E\u5224\u65AD 4 \u662F\u5426\u5904\u4E8E trx_list \u4E2D\u7684\u6D3B\u8DC3\u4E8B\u52A1, \u6700\u540E\u53D1\u73B0\u4E8B\u52A1 ID \u4E3A 4 \u7684\u4E8B\u52A1\u4E0D\u5728\u5F53\u524D\u6D3B\u8DC3\u4E8B\u52A1\u5217\u8868\u4E2D, \u7B26\u5408\u53EF\u89C1\u6027\u6761\u4EF6\uFF0C\u6240\u4EE5\u4E8B\u52A1 4\u4FEE\u6539\u540E\u63D0\u4EA4\u7684\u6700\u65B0\u7ED3\u679C\u5BF9\u4E8B\u52A1 2 \u5FEB\u7167\u8BFB\u65F6\u662F\u53EF\u89C1\u7684\uFF0C\u6240\u4EE5\u4E8B\u52A1 2 \u80FD\u8BFB\u5230\u7684\u6700\u65B0\u6570\u636E\u8BB0\u5F55\u662F\u4E8B\u52A14\u6240\u63D0\u4EA4\u7684\u7248\u672C\uFF0C\u800C\u4E8B\u52A14\u63D0\u4EA4\u7684\u7248\u672C\u4E5F\u662F\u5168\u5C40\u89D2\u5EA6\u4E0A\u6700\u65B0\u7684\u7248\u672C</p></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609232531276.png" alt="image-20220609232531276" loading="lazy"></p><ul><li>\u4E5F\u6B63\u662F Read View \u751F\u6210\u65F6\u673A\u7684\u4E0D\u540C\uFF0C\u4ECE\u800C\u9020\u6210 RC , RR \u7EA7\u522B\u4E0B\u5FEB\u7167\u8BFB\u7684\u7ED3\u679C\u7684\u4E0D\u540C</li></ul><h2 id="_4-mvcc-\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-mvcc-\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> 4. MVCC \u76F8\u5173\u95EE\u9898</h2><h3 id="_4-1-rr-\u662F\u5982\u4F55\u5728-rc-\u7EA7\u7684\u57FA\u7840\u4E0A\u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684" tabindex="-1"><a class="header-anchor" href="#_4-1-rr-\u662F\u5982\u4F55\u5728-rc-\u7EA7\u7684\u57FA\u7840\u4E0A\u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684" aria-hidden="true">#</a> 4.1 RR \u662F\u5982\u4F55\u5728 RC \u7EA7\u7684\u57FA\u7840\u4E0A\u89E3\u51B3\u4E0D\u53EF\u91CD\u590D\u8BFB\u7684\uFF1F</h3><p>\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB\u5728 RR \u7EA7\u522B\u4E0B\u7684\u533A\u522B\uFF1A \u88681:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609232704533.png" alt="image-20220609232704533" loading="lazy"> \u5728\u4E0A\u8868\u7684\u987A\u5E8F\u4E0B\uFF0C\u4E8B\u52A1 B \u7684\u5728\u4E8B\u52A1 A \u63D0\u4EA4\u4FEE\u6539\u540E\u7684\u5FEB\u7167\u8BFB\u662F\u65E7\u7248\u672C\u6570\u636E\uFF0C\u800C\u5F53\u524D\u8BFB\u662F\u5B9E\u65F6\u65B0\u6570\u636E 400</p><p>\u88682:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609232910320.png" alt="image-20220609232910320" loading="lazy"> \u800C\u5728\u8868 2\u8FD9\u91CC\u7684\u987A\u5E8F\u4E2D\uFF0C\u4E8B\u52A1 B \u5728\u4E8B\u52A1 A \u63D0\u4EA4\u540E\u7684\u5FEB\u7167\u8BFB\u548C\u5F53\u524D\u8BFB\u90FD\u662F\u5B9E\u65F6\u7684\u65B0\u6570\u636E 400\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><ul><li>\u8FD9\u91CC\u4E0E\u4E0A\u8868\u7684\u552F\u4E00\u533A\u522B\u4EC5\u4EC5\u662F<code>\u8868 1</code>\u7684<strong>\u4E8B\u52A1 B \u5728\u4E8B\u52A1 A \u4FEE\u6539\u91D1\u989D\u524D<code>\u5FEB\u7167\u8BFB</code>\u8FC7\u4E00\u6B21\u91D1\u989D\u6570\u636E</strong>\uFF0C\u800C<code>\u8868 2</code>\u7684\u4E8B\u52A1B\u5728\u4E8B\u52A1A\u4FEE\u6539\u91D1\u989D\u524D\u6CA1\u6709\u8FDB\u884C\u8FC7\u5FEB\u7167\u8BFB\u3002</li></ul><p>\u6240\u4EE5\u6211\u4EEC\u77E5\u9053\u4E8B\u52A1\u4E2D\u5FEB\u7167\u8BFB\u7684\u7ED3\u679C\u662F\u975E\u5E38\u4F9D\u8D56\u8BE5\u4E8B\u52A1\u9996\u6B21\u51FA\u73B0\u5FEB\u7167\u8BFB\u7684\u5730\u65B9\uFF0C\u5373\u67D0\u4E2A\u4E8B\u52A1\u4E2D\u9996\u6B21\u51FA\u73B0\u5FEB\u7167\u8BFB\u7684\u5730\u65B9\u975E\u5E38\u5173\u952E\uFF0C\u5B83\u6709\u51B3\u5B9A\u8BE5\u4E8B\u52A1\u540E\u7EED\u5FEB\u7167\u8BFB\u7ED3\u679C\u7684\u80FD\u529B</p><p>\u6211\u4EEC\u8FD9\u91CC\u6D4B\u8BD5\u7684\u662F\u66F4\u65B0\uFF0C\u540C\u65F6\u5220\u9664\u548C\u66F4\u65B0\u4E5F\u662F\u4E00\u6837\u7684\uFF0C\u5982\u679C\u4E8B\u52A1B\u7684\u5FEB\u7167\u8BFB\u662F\u5728\u4E8B\u52A1A\u64CD\u4F5C\u4E4B\u540E\u8FDB\u884C\u7684\uFF0C\u4E8B\u52A1B\u7684\u5FEB\u7167\u8BFB\u4E5F\u662F\u80FD\u8BFB\u53D6\u5230\u6700\u65B0\u7684\u6570\u636E\u7684</p><h3 id="_4-2-rc-rr-\u7EA7\u522B\u4E0B\u7684-innodb-\u5FEB\u7167\u8BFB\u6709\u4EC0\u4E48\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_4-2-rc-rr-\u7EA7\u522B\u4E0B\u7684-innodb-\u5FEB\u7167\u8BFB\u6709\u4EC0\u4E48\u4E0D\u540C" aria-hidden="true">#</a> 4.2 RC , RR \u7EA7\u522B\u4E0B\u7684 InnoDB \u5FEB\u7167\u8BFB\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F</h3><p>\u6B63\u662F Read View \u751F\u6210\u65F6\u673A\u7684\u4E0D\u540C\uFF0C\u4ECE\u800C\u9020\u6210 RC , RR \u7EA7\u522B\u4E0B\u5FEB\u7167\u8BFB\u7684\u7ED3\u679C\u7684\u4E0D\u540C</p><ul><li><p>\u5728 RR \u7EA7\u522B\u4E0B\u7684\u67D0\u4E2A\u4E8B\u52A1\u7684\u5BF9\u67D0\u6761\u8BB0\u5F55\u7684\u7B2C\u4E00\u6B21\u5FEB\u7167\u8BFB\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5FEB\u7167\u53CA Read View, \u5C06\u5F53\u524D\u7CFB\u7EDF\u6D3B\u8DC3\u7684\u5176\u4ED6\u4E8B\u52A1\u8BB0\u5F55\u8D77\u6765\uFF0C\u6B64\u540E\u5728\u8C03\u7528\u5FEB\u7167\u8BFB\u7684\u65F6\u5019\uFF0C\u8FD8\u662F\u4F7F\u7528\u7684\u662F\u540C\u4E00\u4E2A Read View\uFF0C\u6240\u4EE5\u53EA\u8981\u5F53\u524D\u4E8B\u52A1\u5728\u5176\u4ED6\u4E8B\u52A1\u63D0\u4EA4\u66F4\u65B0\u4E4B\u524D\u4F7F\u7528\u8FC7\u5FEB\u7167\u8BFB\uFF0C\u90A3\u4E48\u4E4B\u540E\u7684\u5FEB\u7167\u8BFB\u4F7F\u7528\u7684\u90FD\u662F\u540C\u4E00\u4E2A Read View\uFF0C\u6240\u4EE5\u5BF9\u4E4B\u540E\u7684\u4FEE\u6539\u4E0D\u53EF\u89C1\uFF1B</p></li><li><p>\u5373 RR \u7EA7\u522B\u4E0B\uFF0C\u5FEB\u7167\u8BFB\u751F\u6210 Read View \u65F6\uFF0CRead View \u4F1A\u8BB0\u5F55\u6B64\u65F6\u6240\u6709\u5176\u4ED6\u6D3B\u52A8\u4E8B\u52A1\u7684\u5FEB\u7167\uFF0C\u8FD9\u4E9B\u4E8B\u52A1\u7684\u4FEE\u6539\u5BF9\u4E8E\u5F53\u524D\u4E8B\u52A1\u90FD\u662F\u4E0D\u53EF\u89C1\u7684\u3002\u800C\u65E9\u4E8ERead View\u521B\u5EFA\u7684\u4E8B\u52A1\u6240\u505A\u7684\u4FEE\u6539\u5747\u662F\u53EF\u89C1</p></li><li><p>\u800C\u5728 RC \u7EA7\u522B\u4E0B\u7684\uFF0C\u4E8B\u52A1\u4E2D\uFF0C\u6BCF\u6B21\u5FEB\u7167\u8BFB\u90FD\u4F1A\u65B0\u751F\u6210\u4E00\u4E2A\u5FEB\u7167\u548C Read View , \u8FD9\u5C31\u662F\u6211\u4EEC\u5728 RC \u7EA7\u522B\u4E0B\u7684\u4E8B\u52A1\u4E2D\u53EF\u4EE5\u770B\u5230\u522B\u7684\u4E8B\u52A1\u63D0\u4EA4\u7684\u66F4\u65B0\u7684\u539F\u56E0</p></li></ul><p><strong>\u603B\u4E4B\u5728 RC \u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u662F\u6BCF\u4E2A\u5FEB\u7167\u8BFB\u90FD\u4F1A\u751F\u6210\u5E76\u83B7\u53D6\u6700\u65B0\u7684 Read View\uFF1B\u800C\u5728 RR \u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u5219\u662F\u540C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5FEB\u7167\u8BFB\u624D\u4F1A\u521B\u5EFA Read View, \u4E4B\u540E\u7684\u5FEB\u7167\u8BFB\u83B7\u53D6\u7684\u90FD\u662F\u540C\u4E00\u4E2A Read View\u3002</strong></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',73),c={href:"https://blog.csdn.net/SnailMann/article/details/94724197",target:"_blank",rel:"noopener noreferrer"},p=t("\u3010MySQL\u7B14\u8BB0\u3011\u6B63\u786E\u7684\u7406\u89E3MySQL\u7684MVCC\u53CA\u5B9E\u73B0\u539F\u7406");function _(h,u){const e=s("ExternalLinkIcon");return o(),a("div",null,[g,i("ul",null,[i("li",null,[i("a",c,[p,n(e)])])])])}var D=l(d,[["render",_],["__file","MySQL\u7684MVCC\u53CA\u5B9E\u73B0\u539F\u7406.html.vue"]]);export{D as default};
