import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as t,a as e,b as l,d as a,e as o,r as s}from"./app.b742c861.js";const d={},h=a('<h1 id="mysql\u7684\u4E50\u89C2\u9501-\u60B2\u89C2\u9501\u4E0Emvcc" tabindex="-1"><a class="header-anchor" href="#mysql\u7684\u4E50\u89C2\u9501-\u60B2\u89C2\u9501\u4E0Emvcc" aria-hidden="true">#</a> MySQL\u7684\u4E50\u89C2\u9501\uFF0C\u60B2\u89C2\u9501\u4E0EMVCC</h1><h2 id="_1-\u524D\u63D0\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u63D0\u6982\u5FF5" aria-hidden="true">#</a> 1. \u524D\u63D0\u6982\u5FF5</h2><h3 id="_1-1-\u6570\u636E\u5E93\u5E76\u53D1\u7684\u4E09\u79CD\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6570\u636E\u5E93\u5E76\u53D1\u7684\u4E09\u79CD\u573A\u666F" aria-hidden="true">#</a> 1.1 \u6570\u636E\u5E93\u5E76\u53D1\u7684\u4E09\u79CD\u573A\u666F</h3><p><strong>\u6570\u636E\u5E93\u5E76\u53D1\u573A\u666F\u6709\u4E09\u79CD\uFF0C\u5206\u522B\u4E3A\uFF1A</strong></p><ul><li><code>\u8BFB-\u8BFB</code>\uFF1A\u4E0D\u5B58\u5728\u4EFB\u4F55\u95EE\u9898\uFF0C\u4E5F\u4E0D\u9700\u8981\u5E76\u53D1\u63A7\u5236</li><li><code>\u8BFB-\u5199</code>\uFF1A\u6709\u9694\u79BB\u6027\u95EE\u9898\uFF0C\u53EF\u80FD\u9047\u5230\u810F\u8BFB\uFF0C\u5E7B\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB</li><li><code>\u5199-\u5199</code>\uFF1A\u53EF\u80FD\u5B58\u66F4\u65B0\u4E22\u5931\u95EE\u9898\uFF0C\u6BD4\u5982\u7B2C\u4E00\u7C7B\u66F4\u65B0\u4E22\u5931\uFF0C\u7B2C\u4E8C\u7C7B\u66F4\u65B0\u4E22\u5931</li></ul><h3 id="_1-2-\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6F84\u6E05" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6F84\u6E05" aria-hidden="true">#</a> 1.2 \u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6F84\u6E05</h3><ul><li>\u65E0\u8BBA\u662F\u60B2\u89C2\u9501\u8FD8\u662F\u4E50\u89C2\u9501\uFF0C\u4ED6\u4EEC\u672C\u8D28\u4E0A\u4E0D\u662F\u6570\u636E\u5E93\u4E2D\u5177\u4F53\u7684\u9501\u6982\u5FF5\uFF0C\u800C\u662F\u6211\u4EEC\u5B9A\u4E49\u51FA\u6765\uFF0C\u7528\u6765\u63CF\u8FF0\u4E24\u79CD\u7C7B\u522B\u7684\u9501\u7684\u601D\u60F3\u3002\u6240\u4EE5\u6709\u4E86\u8BBE\u8BA1\u7684\u5206\u7C7B\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u5206\u7C7B\u53BB\u5BF9\u6570\u636E\u5E93\u4E2D\u5177\u4F53\u7684\u9501\u8FDB\u884C\u5206\u95E8\u522B\u7C7B\uFF1B</li><li>\u4E0D\u8FC7\u6570\u636E\u5E93\u4E2D\u7684\u4E50\u89C2\u9501\u66F4\u503E\u5411\u53EB\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\uFF08OCC\uFF09\uFF0C\u60B2\u89C2\u9501\u53EB\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\uFF08PCC\uFF09\uFF0C\u8FD8\u6709\u533A\u522B\u4E8E\u4E50\u89C2\u60B2\u89C2\u9501\u7684\u4E00\u79CD\u63A7\u5236\u53EBMVCC\uFF0C\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236</li><li>\u4E5F\u4E0D\u8981\u628A\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u4E0E\u6570\u636E\u5E93\u4E2D\u7684\u884C\u9501\uFF0C\u8868\u9501\uFF0C\u6392\u4ED6\u9501\uFF0C\u5171\u4EAB\u9501\u6DF7\u4E3A\u4E00\u8C08\uFF0C\u4ED6\u4EEC\u5E76\u4E0D\u662F\u4E00\u4E2A\u7EF4\u5EA6\u7684\u4E1C\u897F\uFF1B\u524D\u8005\u662F\u4E00\u4E2A\u9501\u601D\u60F3\uFF0C\u53EF\u4EE5\u5C06\u540E\u8005\u6839\u636E\u662F\u5426\u8FDB\u884C\u8D8B\u8FD1\u4E8E\u4E50\u89C2\u6216\u60B2\u89C2\u9501\u7684\u601D\u60F3\u8FDB\u884C\u5206\u7C7B</li><li>\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6982\u5FF5\u4E0D\u4EC5\u4EC5\u5B58\u5728\u4E8E\u6570\u636E\u5E93\u9886\u57DF\uFF0C\u53EF\u4EE5\u8BF4\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\uFF0C\u5B58\u5728\u5E76\u53D1\u7684\u573A\u666F\u51E0\u4E4E\u90FD\u6709\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u9002\u7528\u573A\u666F\uFF0C\u6BD4\u5982Java\u4E2D\u4E5F\u6709\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u601D\u60F3\u7684\u5177\u4F53\u5B9E\u73B0\uFF1B\u4F46\u4E0D\u540C\u9886\u57DF\u7684\u4E50\u89C2\u548C\u60B2\u89C2\u9501\u7684\u5177\u4F53\u5B9E\u73B0\u90FD\u4E0D\u5C3D\u76F8\u540C\uFF0C\u8981\u89E3\u51B3\u7684\u95EE\u9898\u4E5F\u53EF\u80FD\u6709\u6240\u4E0D\u4E00\u6837</li></ul><blockquote><p><strong>\u6240\u4EE5\u8981\u662F\u522B\u4EBA\u518D\u95EE\u4F60\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u662F\u4EC0\u4E48\uFF0C\u4F60\u5343\u4E07\u522B\u8BF4\u5B83\u662F\u4E00\u79CD\u5177\u4F53\u7684\u9501\uFF0C\u5B83\u53EA\u662F\u4E00\u79CD\u9501\u7684\u8BBE\u8BA1\u601D\u60F3\uFF0C\u4ED6\u53EF\u4EE5\u6709\u5F88\u591A\u5177\u4F53\u7684\u5B9E\u73B0\u7C7B</strong></p></blockquote><h2 id="_2-\u60B2\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#_2-\u60B2\u89C2\u9501" aria-hidden="true">#</a> 2 \u60B2\u89C2\u9501</h2><h3 id="_2-1-\u4EC0\u4E48\u662F\u60B2\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4EC0\u4E48\u662F\u60B2\u89C2\u9501" aria-hidden="true">#</a> 2.1 \u4EC0\u4E48\u662F\u60B2\u89C2\u9501\uFF1F</h3><p>\u5728\u5173\u7CFB\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u91CC\uFF0C\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\uFF08\u53C8\u540D\u201C\u60B2\u89C2\u9501\u201D\uFF0CPessimistic Concurrency Control\uFF0C\u7F29\u5199\u201CPCC\u201D\uFF09\u662F\u4E00\u79CD\u5E76\u53D1\u63A7\u5236\u7684\u65B9\u6CD5; \u60B2\u89C2\u9501\u6307\u7684\u662F\u91C7\u7528\u4E00\u79CD\u6301\u60B2\u89C2\u6D88\u6781\u7684\u6001\u5EA6\uFF0C\u9ED8\u8BA4\u6570\u636E\u88AB\u5916\u754C\u8BBF\u95EE\u65F6\uFF0C\u5FC5\u7136\u4F1A\u4EA7\u751F\u51B2\u7A81\uFF0C\u6240\u4EE5\u5728\u6570\u636E\u5904\u7406\u7684\u6574\u4E2A\u8FC7\u7A0B\u4E2D\u90FD\u91C7\u7528\u52A0\u9501\u7684\u72B6\u6001\uFF0C\u4FDD\u8BC1\u540C\u4E00\u65F6\u95F4\uFF0C\u53EA\u6709\u4E00\u4E2A\u7EBF\u7A0B\u53EF\u4EE5\u8BBF\u95EE\u5230\u6570\u636E\uFF0C\u5B9E\u73B0\u6570\u636E\u7684\u6392\u4ED6\u6027\uFF1B\u901A\u5E38\uFF0C\u6570\u636E\u5E93\u7684\u60B2\u89C2\u9501\u662F\u5229\u7528\u6570\u636E\u5E93\u672C\u8EAB\u63D0\u4F9B\u7684\u9501\u673A\u5236\u53BB\u5B9E\u73B0\u7684.</p><p>\u6570\u636E\u5E93\u7684\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\u53EF\u4EE5\u89E3\u51B3<strong>\u8BFB-\u5199\u51B2\u7A81\u548C\u5199-\u5199\u51B2\u7A81</strong>,\u6307\u5728\u7528\u52A0\u9501\u7684\u65B9\u5F0F\u53BB\u89E3\u51B3</p><h3 id="_2-2-\u60B2\u89C2\u9501\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-2-\u60B2\u89C2\u9501\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 2.2 \u60B2\u89C2\u9501\u7684\u5B9E\u73B0</h3><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6570\u636E\u5E93\u7684\u60B2\u89C2\u9501\u5C31\u662F\u5229\u7528\u6570\u636E\u5E93\u672C\u8EAB\u63D0\u4F9B\u7684\u9501\u53BB\u5B9E\u73B0\u7684</p><ul><li>\u5916\u754C\u8981\u8BBF\u95EE\u67D0\u6761\u6570\u636E\uFF0C\u90A3\u5B83\u5C31\u8981\u9996\u5148\u5411\u6570\u636E\u5E93\u7533\u8BF7\u8BE5\u6570\u636E\u7684\u9501(\u67D0\u79CD\u9501)</li><li>\u5982\u679C\u83B7\u5F97\u6210\u529F\uFF0C\u90A3\u5B83\u5C31\u53EF\u4EE5\u64CD\u4F5C\u8BE5\u6570\u636E\uFF0C\u5728\u5B83\u64CD\u4F5C\u671F\u95F4\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u5C31\u65E0\u6CD5\u518D\u64CD\u4F5C\u8BE5\u6570\u636E\u4E86</li></ul><p>\u5982\u679C\u83B7\u5F97\u5931\u8D25\uFF0C\u5219\u4EE3\u8868\u540C\u4E00\u65F6\u95F4\u5DF2\u6709\u5176\u4ED6\u5BA2\u6237\u7AEF\u83B7\u5F97\u4E86\u8BE5\u9501\uFF0C\u90A3\u5C31\u5FC5\u987B\u7B49\u5F85\u5176\u4ED6\u5BA2\u6237\u7AEF\u91CA\u653E\u9501 \u5F53\u7136\u6570\u636E\u5E93\u63D0\u4F9B\u4E86\u975E\u5E38\u591A\u7684\u9501\uFF0C\u6BCF\u79CD\u6570\u636E\u5E93\u63D0\u4F9B\u7684\u9501\u4E5F\u4E0D\u5C3D\u7136\u76F8\u540C\uFF0C\u6240\u4EE5\u5177\u4F53\u60C5\u51B5\u5C31\u8981\u770B\u662F\u4EC0\u4E48\u9501\u4E86,\u6BD4\u5982\u884C\u9501\uFF0C\u8868\u9501\u7B49</p><h3 id="_2-3-\u4F18\u70B9\u4E0E\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4F18\u70B9\u4E0E\u7F3A\u70B9" aria-hidden="true">#</a> 2.3 \u4F18\u70B9\u4E0E\u7F3A\u70B9</h3><blockquote><p>\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\u5B9E\u9645\u4E0A\u662F\u201C\u5148\u53D6\u9501\u518D\u8BBF\u95EE\u201D\u7684\u4FDD\u5B88\u7B56\u7565\uFF0C\u4E3A\u6570\u636E\u5904\u7406\u7684\u5B89\u5168\u63D0\u4F9B\u4E86\u4FDD\u8BC1\u3002\u4F46\u662F\u5728\u6548\u7387\u65B9\u9762\uFF0C\u5904\u7406\u52A0\u9501\u7684\u673A\u5236\u4F1A\u8BA9\u6570\u636E\u5E93\u4EA7\u751F\u989D\u5916\u7684\u5F00\u9500\uFF0C\u8FD8\u6709\u589E\u52A0\u4EA7\u751F\u6B7B\u9501\u7684\u673A\u4F1A\uFF1B\u53E6\u5916\uFF0C\u5728\u53EA\u8BFB\u578B\u4E8B\u52A1\u5904\u7406\u4E2D\u7531\u4E8E\u4E0D\u4F1A\u4EA7\u751F\u51B2\u7A81\uFF0C\u4E5F\u6CA1\u5FC5\u8981\u4F7F\u7528\u9501\uFF0C\u8FD9\u6837\u505A\u53EA\u80FD\u589E\u52A0\u7CFB\u7EDF\u8D1F\u8F7D\uFF1B\u8FD8\u6709\u4F1A\u964D\u4F4E\u4E86\u5E76\u884C\u6027\uFF0C\u4E00\u4E2A\u4E8B\u52A1\u5982\u679C\u9501\u5B9A\u4E86\u67D0\u884C\u6570\u636E\uFF0C\u5176\u4ED6\u4E8B\u52A1\u5C31\u5FC5\u987B\u7B49\u5F85\u8BE5\u4E8B\u52A1\u5904\u7406\u5B8C\u624D\u53EF\u4EE5\u5904\u7406\u90A3\u884C\u6570</p></blockquote><ul><li>\u4F18\u70B9\uFF1A \u9002\u5408\u5728\u5199\u591A\u8BFB\u5C11\u7684\u5E76\u53D1\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u867D\u7136\u65E0\u6CD5\u7EF4\u6301\u975E\u5E38\u9AD8\u7684\u6027\u80FD\uFF0C\u4F46\u662F\u5728\u4E50\u89C2\u9501\u65E0\u6CD5\u63D0\u66F4\u597D\u7684\u6027\u80FD\u524D\u63D0\u4E0B\uFF0C\u53EF\u4EE5\u505A\u5230\u6570\u636E\u7684\u5B89\u5168\u6027</li><li>\u7F3A\u70B9\uFF1A \u52A0\u9501\u4F1A\u589E\u52A0\u7CFB\u7EDF\u5F00\u9500\uFF0C\u867D\u7136\u80FD\u4FDD\u8BC1\u6570\u636E\u7684\u5B89\u5168\uFF0C\u4F46\u6570\u636E\u5904\u7406\u541E\u5410\u91CF\u4F4E\uFF0C\u4E0D\u9002\u5408\u5728\u8BFB\u591A\u5199\u5C11\u7684\u573A\u5408\u4E0B\u4F7F\u7528</li></ul><h2 id="_3-\u4E50\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#_3-\u4E50\u89C2\u9501" aria-hidden="true">#</a> 3. \u4E50\u89C2\u9501</h2><h3 id="_3-1-\u4EC0\u4E48\u662F\u4E50\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4EC0\u4E48\u662F\u4E50\u89C2\u9501" aria-hidden="true">#</a> 3.1 \u4EC0\u4E48\u662F\u4E50\u89C2\u9501\uFF1F</h3><p>\u5728\u5173\u7CFB\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u91CC\uFF0C\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\uFF08\u53C8\u540D\u201C\u4E50\u89C2\u9501\u201D\uFF0COptimistic Concurrency Control\uFF0C\u7F29\u5199\u201COCC\u201D\uFF09\u662F\u4E00\u79CD\u5E76\u53D1\u63A7\u5236\u7684\u65B9\u6CD5\uFF1B\u4E50\u89C2\u9501\uFF08 Optimistic Locking \uFF09 \u662F\u76F8\u5BF9\u60B2\u89C2\u9501\u800C\u8A00\uFF0C\u4E50\u89C2\u9501\u662F\u5047\u8BBE\u8BA4\u4E3A\u5373\u4F7F\u5728\u5E76\u53D1\u73AF\u5883\u4E2D\uFF0C\u5916\u754C\u5BF9\u6570\u636E\u7684\u64CD\u4F5C\u4E00\u822C\u662F\u4E0D\u4F1A\u9020\u6210\u51B2\u7A81\uFF0C\u6240\u4EE5\u5E76\u4E0D\u4F1A\u53BB\u52A0\u9501(\u6240\u4EE5\u4E50\u89C2\u9501\u4E0D\u662F\u4E00\u628A\u9501)\uFF0C\u800C\u662F\u5728\u6570\u636E\u8FDB\u884C\u63D0\u4EA4\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u6B63\u5F0F\u5BF9\u6570\u636E\u7684\u51B2\u7A81\u4E0E\u5426\u8FDB\u884C\u68C0\u6D4B\uFF0C\u5982\u679C\u53D1\u73B0\u51B2\u7A81\u4E86\uFF0C\u5219\u8BA9\u8FD4\u56DE\u51B2\u7A81\u4FE1\u606F\uFF0C\u8BA9\u7528\u6237\u51B3\u5B9A\u5982\u4F55\u53BB\u505A\u4E0B\u4E00\u6B65\uFF0C\u6BD4\u5982\u8BF4\u91CD\u8BD5\uFF0C\u76F4\u81F3\u6210\u529F\u4E3A\u6B62\uFF1B\u6570\u636E\u5E93\u7684\u4E50\u89C2\u9501\uFF0C\u5E76\u4E0D\u662F\u5229\u7528\u6570\u636E\u5E93\u672C\u8EAB\u7684\u9501\u53BB\u5B9E\u73B0\u7684\uFF0C\u53EF\u80FD\u662F\u5229\u7528\u67D0\u79CD\u5B9E\u73B0\u903B\u8F91\u53BB\u5B9E\u73B0\u505A\u5230\u4E50\u89C2\u9501\u7684\u601D\u60F3</p><p>\u6570\u636E\u5E93\u7684\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\u8981\u89E3\u51B3\u7684\u662F\u6570\u636E\u5E93\u5E76\u53D1\u573A\u666F\u4E0B\u7684<strong>\u5199-\u5199\u51B2\u7A81</strong>\uFF0C\u6307\u5728\u7528<strong>\u65E0\u9501\u7684\u65B9\u5F0F\u53BB\u89E3\u51B3</strong></p><h3 id="_3-2-cas\u601D\u60F3" tabindex="-1"><a class="header-anchor" href="#_3-2-cas\u601D\u60F3" aria-hidden="true">#</a> 3.2 CAS\u601D\u60F3</h3><p>\u5176\u5B9E\u6570\u636E\u5E93\u4E50\u89C2\u9501\u7684\u5177\u4F53\u5B9E\u73B0\u51E0\u4E4E\u5C31\u8DDFJava\u4E2D\u4E50\u89C2\u9501\u91C7\u7528\u7684CAS\u7B97\u6CD5\u601D\u60F3\u662F\u4E00\u81F4\uFF0C<strong>\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u4ECECAS\u7B97\u6CD5\u4E2D\u5B66\u4E60\u5230\u6570\u636E\u5E93\u4E50\u89C2\u9501\u7684\u8BBE\u8BA1\uFF1A</strong></p><p>CAS\u6307\u4EE4\u5168\u79F0\u4E3ACompare and Swap\uFF0C\u5B83\u662F\u7CFB\u7EDF\u7684\u6307\u4EE4\u96C6\uFF0C\u6574\u4E2ACAS\u64CD\u4F5C\u662F\u4E00\u4E2A\u539F\u5B50\u64CD\u4F5C\uFF0C\u662F\u4E0D\u53EF\u5206\u5272\u7684\u3002\u4ECE\u5177\u4F53\u7684\u63CF\u8FF0\u4E0A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u770BCAS\u64CD\u4F5C\uFF1A</p><blockquote><p>CAS\u6307\u4EE4\u9700\u89813\u4E2A\u64CD\u4F5C\u6570\uFF0C\u5206\u522B\u662F\u5185\u5B58\u4F4D\u7F6EV\uFF0C\u65E7\u7684\u9884\u671F\u503CA,\u548C\u65B0\u503CB\u3002CAS\u6307\u4EE4\u6267\u884C\u65F6\uFF0C\u5F53\u6211\u4EEC\u8BFB\u53D6\u7684\u5185\u7F6E\u4F4D\u7F6EV\u7684\u73B0\u503C\u7B49\u4E8E\u65E7\u9884\u671F\u503CA\u65F6\uFF0C\u5904\u7406\u5668\u624D\u4F1A\u5C06\u65B0\u503CB\u53BB\u66F4\u65B0\u5185\u7F6E\u4F4D\u7F6EV\u7684\u503C\u3002\u5426\u5219\u5B83\u5C31\u4E0D\u6267\u884C\u66F4\u65B0\uFF0C\u4F46\u65E0\u8BBA\u662F\u5426\u66F4\u65B0V\u7684\u503C\uFF0C\u90FD\u4F1A\u8FD4\u56DEV\u7684\u65E7\u503C\u3002</p></blockquote><p>\u6211\u4EEC\u901A\u4FD7\u7684\u653E\u5230\u4EE3\u7801\u5C42\u6B21\u4E0A\u53BB\u7406\u89E3i = 2; i++\uFF0C\u5C31\u662F\u8BF4\uFF1A</p><ul><li>\u9996\u5148\u7EBF\u7A0B1\u4ECE\u5185\u5B58\u4F4D\u7F6EV\u4E2D\u8BFB\u53D6\u5230\u4E86\u503C\uFF0C\u4FDD\u5B58\u5E76\u4F5C\u4E3A\u65E7\u9884\u671F\u503CA. (v = 2 ,a = 2)</li><li>\u7136\u540E\u5728\u56E0\u4E3Ai\u8981\u8FDB\u884C++\u64CD\u4F5C\uFF0C\u7CFB\u7EDF\u4F1A\u6BD4\u8F83\u5185\u5B58\u4F4D\u7F6EV\u7684\u73B0\u503C\u8DDF\u65E7\u9884\u671F\u503CA\u8FDB\u884C\u6BD4\u8F83\uFF0C\u65E2V =? A\u3002</li><li>\u5982\u679C\u76F8\u7B49\uFF0CB = i++ = 3 \uFF0C\u65B0\u503CB\u5C31\u4F1A\u5BF9\u5185\u5B58\u4F4D\u7F6EV\u8FDB\u884C\u66F4\u65B0\uFF0C\u6240\u4EE5\u5185\u5B58\u4F4D\u7F6EV\u7684\u503C\u5C31\u53D8\u6210\u4E86B\u7684\u503C\uFF0C3</li><li>\u5982\u679C\u4E0D\u76F8\u7B49\uFF0C\u5219\u8BF4\u660E\u6709\u5176\u4ED6\u7684\u7EBF\u7A0B\u4FEE\u6539\u8FC7\u4E86\u5185\u5B58\u4F4D\u7F6EV\u7684\u503C\uFF0C\u6BD4\u5982\u7EBF\u7A0B2\u5728\u7EBF\u7A0B1\u4FEE\u6539i\u7684\u503C\u524D\u5C31\u66F4\u65B0\u4E86i\u7684\u503C\u3002\uFF0C\u6240\u4EE5\u7EBF\u7A0B1\u4F1A\u66F4\u65B0\u53D8\u91CFi\u5931\u8D25\u3002\u4F46\u7EBF\u7A0B\u4E0D\u4F1A\u6302\u8D77\uFF0C\u800C\u662F\u8FD4\u56DE\u5931\u8D25\u72B6\u6001\uFF0C\u7B49\u5F85\u8C03\u7528\u7EBF\u7A0B\u51B3\u5B9A\u662F\u5426\u91CD\u8BD5\u6216\u5176\u4ED6\u64CD\u4F5C\u3002(\u901A\u5E38\u4F1A\u91CD\u8BD5\u76F4\u5230\u6210\u529F) \u6570\u636E\u5E93\u5C42\u7684\u4E50\u89C2\u9501\u5B9E\u73B0\u4E5F\u7C7B\u4F3C\u4EE3\u7801\u5C42\u9762\u7684\u5B9E\u73B0</li></ul><p>\u6570\u636E\u5E93\u5C42\u7684\u4E50\u89C2\u9501\u5B9E\u73B0\u4E5F\u7C7B\u4F3C\u4EE3\u7801\u5C42\u9762\u7684\u5B9E\u73B0</p><h3 id="_3-3-\u6570\u636E\u5E93\u4E2D\u4E50\u89C2\u9501\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6570\u636E\u5E93\u4E2D\u4E50\u89C2\u9501\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 3.3 \u6570\u636E\u5E93\u4E2D\u4E50\u89C2\u9501\u7684\u5B9E\u73B0</h3><p><strong>\u901A\u5E38\u4E50\u89C2\u9501\u7684\u5B9E\u73B0\u6709\u4E24\u79CD\uFF0C\u4F46\u5B83\u4EEC\u7684\u5185\u5728\u90FD\u662FCAS\u601D\u60F3\u7684\u8BBE\u8BA1\uFF1A</strong></p>',32),c=e("ul",null,[e("li",null,[e("p",null,"\u65B9\u5F0F\u4E00\uFF1A \u4F7F\u7528\u6570\u636E\u7248\u672C\uFF08version\uFF09\u5B9E\u73B0"),e("blockquote",null,[e("ul",null,[e("li",null,"\u8FD9\u662F\u4E50\u89C2\u9501\u6700\u5E38\u7528\u7684\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002\u4EC0\u4E48\u662F\u6570\u636E\u7248\u672C\u5462\uFF1F\u5C31\u662F\u5728\u8868\u4E2D\u589E\u6DFB\u4E00\u4E2A\u5B57\u6BB5\u4F5C\u4E3A\u8BE5\u8BB0\u5F55\u7684\u7248\u672C\u6807\u8BC6\uFF0C\u6BD4\u5982\u53EBversion\uFF0C\u6BCF\u6B21\u5BF9\u8BE5\u8BB0\u5F55\u7684\u5199\u64CD\u4F5C\u90FD\u4F1A\u8BA9 version+ 1\u3002"),e("li",null,"\u6240\u4EE5\u5F53\u6211\u4EEC\u8BFB\u53D6\u4E86\u6570\u636E(\u5305\u62ECversion)\uFF0C\u505A\u51FA\u66F4\u65B0\uFF0C\u8981\u63D0\u4EA4\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u62FF\u53D6\u5F97\u7684version\u53BB\u8DDF\u6570\u636E\u5E93\u4E2D\u7684version\u6BD4\u8F83\u662F\u5426\u4E00\u81F4\uFF0C\u5982\u679C\u4E00\u81F4\u5219\u4EE3\u8868\u8FD9\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u5E76\u6CA1\u6709\u5176\u4ED6\u7684\u7EBF\u7A0B\u7684\u4E5F\u4FEE\u6539\u8FC7\u8FD9\u4E2A\u6570\u636E\uFF0C\u7ED9\u4E88\u66F4\u65B0\uFF0C\u540C\u65F6version + 1\uFF1B\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u5219\u4EE3\u8868\u5728\u8FD9\u4E2A\u65F6\u95F4\u6BB5\uFF0C\u8BE5\u8BB0\u5F55\u4EE5\u53CA\u88AB\u5176\u4ED6\u7EBF\u7A0B\u4FEE\u6539\u8FC7\u4E86\uFF0C \u8BA4\u4E3A\u662F\u8FC7\u671F\u6570\u636E\uFF0C\u8FD4\u56DE\u51B2\u7A81\u4FE1\u606F\uFF0C\u8BA9\u7528\u6237\u51B3\u5B9A\u4E0B\u4E00\u6B65\u52A8\u4F5C\uFF0C\u6BD4\u5982\u91CD\u8BD5\uFF08\u91CD\u65B0\u8BFB\u53D6\u6700\u65B0\u6570\u636E\uFF0C\u518D\u8FC7\u66F4\u65B0\uFF09"),e("li",{id:""},"update table set num = num + 1 , version = version + 1 where version = #{version} and id = #")])])]),e("li",null,[e("p",null,"\u65B9\u5F0F\u4E8C\uFF1A \u4F7F\u7528\u65F6\u95F4\u6233(timestamp)\u5B9E\u73B0"),e("blockquote",null,[e("ul",null,[e("li",null,"\u8868\u4E2D\u589E\u52A0\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u540D\u79F0\u65E0\u6240\u8C13\uFF0C\u6BD4\u5982\u53EBupdate_time, \u5B57\u6BB5\u7C7B\u578B\u4F7F\u7528\u65F6\u95F4\u6233\uFF08timestamp\uFF09"),e("li",null,"\u539F\u7406\u548C\u65B9\u5F0F\u4E00\u4E00\u81F4\uFF0C\u4E5F\u662F\u5728\u66F4\u65B0\u63D0\u4EA4\u7684\u65F6\u68C0\u67E5\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u6570\u636E\u7684\u65F6\u95F4\u6233\u548C\u81EA\u5DF1\u66F4\u65B0\u524D\u53D6\u5230\u7684\u65F6\u95F4\u6233\u662F\u5426\u4E00\u81F4\uFF0C\u5982\u679C\u4E00\u81F4\u5219\u4EE3\u8868\u6B64\u523B\u6CA1\u6709\u51B2\u7A81\uFF0C\u53EF\u4EE5\u63D0\u4EA4\u66F4\u65B0\uFF0C\u540C\u65F6\u65F6\u95F4\u6233\u66F4\u65B0\u4E3A\u5F53\u524D\u65F6\u95F4\uFF0C\u5426\u5219\u5C31\u662F\u8BE5\u65F6\u95F4\u6BB5\u6709\u5176\u4ED6\u7EBF\u7A0B\u4E5F\u66F4\u65B0\u63D0\u4EA4\u8FC7\uFF0C\u8FD4\u56DE\u51B2\u7A81\u4FE1\u606F\uFF0C\u7B49\u5F85\u7528\u6237\u4E0B\u4E00\u6B65\u52A8\u4F5C\u3002"),e("li",{updateTime:""},"update table set num = num + 1 ,update_time = unix_timestamp(now()) where id = #{id} and update_time = #")])])])],-1),p=a('<p>\u4F46\u662F\u6211\u4EEC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8981\u5B9E\u73B0\u4E50\u89C2\u9501\u7684\u601D\u60F3\u7684\u540C\u65F6\uFF0C\u6211\u4EEC\u5FC5\u987B\u8981\u8981\u4FDD\u8BC1CAS\u591A\u4E2A\u64CD\u4F5C\u7684\u539F\u5B50\u6027\uFF0C\u5373\u83B7\u53D6\u6570\u636E\u5E93\u6570\u636E\u7684\u7248\u672C\uFF0C\u62FF\u6570\u636E\u5E93\u7684\u6570\u636E\u7248\u672C\u4E0E\u4E4B\u524D\u62FF\u5230\u7684\u7248\u672C\u7684\u6BD4\u8F83\uFF0C\u4EE5\u53CA\u66F4\u65B0\u6570\u636E\u7B49\u8FD9\u51E0\u4E2A\u64CD\u4F5C\u7684\u6267\u884C\u5FC5\u987B\u662F\u8FDE\u8D2F\u6267\u884C\uFF0C\u5177\u6709\u590D\u5408\u64CD\u4F5C\u7684\u539F\u5B50\u6027\uFF1B\u6240\u4EE5\u5982\u679C\u662F\u6570\u636E\u5E93\u7684SQL,\u90A3\u4E48\u6211\u4EEC\u5C31\u8981\u4FDD\u8BC1\u591A\u4E2ASQL\u64CD\u4F5C\u5904\u4E8E\u540C\u4E00\u4E2A\u4E8B\u52A1\u4E2D</p><h3 id="_3-4-\u4F18\u70B9\u4E0E\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-4-\u4F18\u70B9\u4E0E\u7F3A\u70B9" aria-hidden="true">#</a> 3.4 \u4F18\u70B9\u4E0E\u7F3A\u70B9</h3><p><strong>\u4F18\u70B9\uFF1A</strong> \u5728\u8BFB\u591A\u5199\u5C11\u7684\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u53EF\u4EE5\u907F\u514D\u6570\u636E\u5E93\u52A0\u9501\u7684\u5F00\u9500\uFF0C\u63D0\u9AD8Dao\u5C42\u7684\u54CD\u5E94\u6027\u80FD \u5176\u5B9E\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EECorm\u5DE5\u5177\u90FD\u6709\u5E26\u6709\u4E50\u89C2\u9501\u7684\u5B9E\u73B0\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u65B9\u6CD5\u4E0D\u4E00\u5B9A\u9700\u8981\u6211\u4EEC\u4EBA\u4E3A\u7684\u53BB\u5B9E\u73B0</p><p><strong>\u7F3A\u70B9\uFF1A</strong> \u5728\u5199\u591A\u8BFB\u5C11\u7684\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u5373\u5728\u5199\u64CD\u4F5C\u7ADE\u4E89\u6FC0\u70C8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u5BFC\u81F4CAS\u591A\u6B21\u91CD\u8BD5\uFF0C\u51B2\u7A81\u9891\u7387\u8FC7\u9AD8\uFF0C\u5BFC\u81F4\u5F00\u9500\u6BD4\u60B2\u89C2\u9501\u66F4\u9AD8</p><h2 id="_4-mvcc\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_4-mvcc\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236" aria-hidden="true">#</a> 4. MVCC\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236</h2><h3 id="_4-1-\u4EC0\u4E48\u662Fmvcc" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4EC0\u4E48\u662Fmvcc" aria-hidden="true">#</a> 4.1 \u4EC0\u4E48\u662FMVCC?</h3><blockquote><p>MVCC MVCC\uFF0C\u5168\u79F0Multi-Version Concurrency Control\uFF0C\u5373\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\u3002MVCC\u662F\u4E00\u79CD\u5E76\u53D1\u63A7\u5236\u7684\u65B9\u6CD5\uFF0C\u4E00\u822C\u5728\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u4E2D\uFF0C\u5B9E\u73B0\u5BF9\u6570\u636E\u5E93\u7684\u5E76\u53D1\u8BBF\u95EE\uFF0C\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5B9E\u73B0\u4E8B\u52A1\u5185\u5B58\u3002</p></blockquote><p>MVCC\u5728MySQL InnoDB\u4E2D\u7684\u5B9E\u73B0\u4E3B\u8981\u662F\u4E3A\u4E86\u63D0\u9AD8\u6570\u636E\u5E93\u5E76\u53D1\u6027\u80FD\uFF0C\u7528\u66F4\u597D\u7684\u65B9\u5F0F\u53BB\u5904\u7406\u8BFB-\u5199\u51B2\u7A81\uFF0C\u505A\u5230\u5373\u4F7F\u6709\u8BFB\u5199\u51B2\u7A81\u65F6\uFF0C\u4E5F\u80FD\u505A\u5230\u4E0D\u52A0\u9501\uFF0C\u975E\u963B\u585E\u5E76\u53D1\u8BFB</p><h3 id="_4-2-\u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB" tabindex="-1"><a class="header-anchor" href="#_4-2-\u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB" aria-hidden="true">#</a> 4.2 \u4EC0\u4E48\u662F\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB\uFF1F</h3><p>\u4EC0\u4E48\u662FMySQL InnoDB\u4E0B\u7684\u5F53\u524D\u8BFB\u548C\u5FEB\u7167\u8BFB?</p><ul><li><p>\u5F53\u524D\u8BFB \u50CFselect lock in share mode(<strong>\u5171\u4EAB\u9501</strong>), select for update ; update, insert ,delete(<strong>\u6392\u4ED6\u9501</strong>)\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u662F\u4E00\u79CD\u5F53\u524D\u8BFB\uFF0C\u4E3A\u4EC0\u4E48\u53EB\u5F53\u524D\u8BFB\uFF1F\u5C31\u662F\u5B83\u8BFB\u53D6\u7684\u662F\u8BB0\u5F55\u7684\u6700\u65B0\u7248\u672C\uFF0C\u8BFB\u53D6\u65F6\u8FD8\u8981\u4FDD\u8BC1\u5176\u4ED6\u5E76\u53D1\u4E8B\u52A1\u4E0D\u80FD\u4FEE\u6539\u5F53\u524D\u8BB0\u5F55\uFF0C\u4F1A\u5BF9\u8BFB\u53D6\u7684\u8BB0\u5F55\u8FDB\u884C\u52A0\u9501</p></li><li><p>\u5FEB\u7167\u8BFB \u50CF<strong>\u4E0D\u52A0\u9501</strong>\u7684select\u64CD\u4F5C\u5C31\u662F\u5FEB\u7167\u8BFB\uFF0C\u5373\u4E0D\u52A0\u9501\u7684\u975E\u963B\u585E\u8BFB\uFF1B\u5FEB\u7167\u8BFB\u7684\u524D\u63D0\u662F\u9694\u79BB\u7EA7\u522B\u4E0D\u662F\u4E32\u884C\u7EA7\u522B\uFF0C\u4E32\u884C\u7EA7\u522B\u4E0B\u7684\u5FEB\u7167\u8BFB\u4F1A\u9000\u5316\u6210\u5F53\u524D\u8BFB\uFF1B\u4E4B\u6240\u4EE5\u51FA\u73B0\u5FEB\u7167\u8BFB\u7684\u60C5\u51B5\uFF0C\u662F\u57FA\u4E8E\u63D0\u9AD8\u5E76\u53D1\u6027\u80FD\u7684\u8003\u8651\uFF0C\u5FEB\u7167\u8BFB\u7684\u5B9E\u73B0\u662F\u57FA\u4E8E\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF0C\u5373MVCC,\u53EF\u4EE5\u8BA4\u4E3AMVCC\u662F\u884C\u9501\u7684\u4E00\u4E2A\u53D8\u79CD\uFF0C\u4F46\u5B83\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u907F\u514D\u4E86\u52A0\u9501\u64CD\u4F5C\uFF0C\u964D\u4F4E\u4E86\u5F00\u9500\uFF1B<strong>\u65E2\u7136\u662F\u57FA\u4E8E\u591A\u7248\u672C\uFF0C\u5373\u5FEB\u7167\u8BFB\u53EF\u80FD\u8BFB\u5230\u7684\u5E76\u4E0D\u4E00\u5B9A\u662F\u6570\u636E\u7684\u6700\u65B0\u7248\u672C\uFF0C\u800C\u6709\u53EF\u80FD\u662F\u4E4B\u524D\u7684\u5386\u53F2\u7248\u672C</strong></p></li></ul><p><strong>\u8BF4\u767D\u4E86\u5FEB\u7167\u8BFB\u5C31\u662FMVCC\u601D\u60F3\u5728MySQL\u7684\u5177\u4F53\u975E\u963B\u585E\u8BFB\u529F\u80FD\u5B9E\u73B0\uFF0C\u6574\u4E2AMVCC\u591A\u5E76\u53D1\u63A7\u5236\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u5B9E\u73B0\u8BFB-\u5199\u51B2\u7A81\u4E0D\u52A0\u9501\uFF0C\u63D0\u9AD8\u5E76\u53D1\u8BFB\u5199\u6027\u80FD\uFF0C\u800C\u8FD9\u4E2A\u8BFB\u6307\u7684\u5C31\u662F<code>\u5FEB\u7167\u8BFB</code>, \u800C\u975E\u5F53\u524D\u8BFB\uFF0C\u5F53\u524D\u8BFB\u5B9E\u9645\u4E0A\u662F\u4E00\u79CD\u52A0\u9501\u7684\u64CD\u4F5C\uFF0C\u662F\u60B2\u89C2\u9501\u7684\u5B9E\u73B0</strong></p><h2 id="_5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u603B\u7ED3" aria-hidden="true">#</a> 5. \u603B\u7ED3</h2><h3 id="_5-1-\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6289\u62E9" tabindex="-1"><a class="header-anchor" href="#_5-1-\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6289\u62E9" aria-hidden="true">#</a> 5.1 \u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6289\u62E9</h3><p>\u5BF9\u4E50\u89C2\u9501\u548C\u60B2\u89C2\u9501\u7684\u6289\u62E9\u4E3B\u8981\u4F53\u73B0\u5728\u5199-\u5199 <strong>\u5728\u60B2\u89C2\u9501\u548C\u4E50\u89C2\u9501\u7684\u6289\u62E9\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u4E0B\u9762\u4E09\u4E2A\u56E0\u7D20\u6765\u8003\u8651\uFF1A</strong></p><ul><li><strong>\u54CD\u5E94\u901F\u5EA6</strong>\uFF1A \u5982\u679CDao\u5C42\u9700\u8981\u975E\u5E38\u9AD8\u7684\u54CD\u5E94\u901F\u5EA6\uFF0C\u5C24\u5176\u662F\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\u4E0B\uFF0C\u90A3\u6211\u4EEC\u5C31\u53EF\u4EE5\u91C7\u7528\u4E50\u89C2\u9501\u65B9\u6848\uFF0C\u964D\u4F4E\u6570\u636E\u5E93\u9501\u7684\u5F00\u9500\uFF0C\u63D0\u4F9B\u5E76\u53D1\u91CF</li><li><strong>\u51B2\u7A81\u9891\u7387</strong>\uFF1A \u5982\u679C\u51B2\u7A81\u9891\u7387\u975E\u5E38\u9AD8\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u91C7\u7528\u60B2\u89C2\u9501\uFF0C\u4FDD\u8BC1\u6210\u529F\u7387\uFF1B\u6BD5\u7ADF\u5982\u679C\u51B2\u7A81\u9891\u7387\u5927\uFF0C\u4E50\u89C2\u9501\u4F1A\u9700\u8981\u591A\u6B21\u91CD\u8BD5\u624D\u80FD\u6210\u529F\uFF0C\u4EE3\u4EF7\u53EF\u80FD\u4F1A\u5927\u5927\u589E\u52A0</li><li><strong>\u91CD\u8BD5\u4EE3\u4EF7</strong>\uFF1A \u5982\u679C\u91CD\u8BD5\u4EE3\u4EF7\u5927\uFF0C\u6BD4\u5982\u8BF4\u91CD\u8BD5\u8FC7\u7A0B\u7684\u4EE3\u7801\u6267\u884C\u975E\u5E38\u8017\u65F6\uFF0C\u90A3\u4E48\u6B64\u65F6\u6211\u5C31\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u4E50\u89C2\u9501\u4E86\uFF0C\u8FD8\u4E0D\u5982\u76F4\u63A5\u4E0A\u60B2\u89C2\u9501\u6765\u4E86\u723D\u5FEB</li></ul><p><strong>\u6240\u4EE5\u6211\u4EEC\u77E5\u9053\uFF1A</strong></p><ul><li>\u5728\u8BFB\u591A\u5199\u5C11\uFF0CCAS\u7ADE\u4E89\u6CA1\u8FD9\u4E48\u6FC0\u70C8\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u4E50\u89C2\u9501\u7B56\u7565\uFF0C\u964D\u4F4E\u6570\u636E\u5E93\u52A0\u9501\u7684\u5F00\u9500\uFF0C\u63D0\u9AD8\u6570\u636E\u5E93\u5E76\u53D1\u54CD\u5E94</li><li>\u5728\u5199\u591A\u8BFB\u5C11\u7684\u573A\u666F\u4E0B\uFF0C\u56E0\u4E3A\u4F1A\u4EA7\u751F\u5927\u91CF\u7684CAS\u7ADE\u4E89\uFF0C\u4E14\u91CD\u8BD5\u6210\u672C\u6BD4\u8F83\u9AD8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C31\u4E0D\u5EFA\u8BAE\u518D\u91C7\u7528\u4E50\u89C2\u9501\u7B56\u7565\u4E86\uFF0C\u8FD8\u662F\u76F4\u63A5\u4F7F\u7528\u60B2\u89C2\u9501\u7684\u6570\u636E\u5E93\u52A0\u9501\u5427</li></ul><h2 id="_6-occ-pcc-mvcc\u4E09\u8005\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_6-occ-pcc-mvcc\u4E09\u8005\u7684\u5173\u7CFB" aria-hidden="true">#</a> 6. OCC,PCC,MVCC\u4E09\u8005\u7684\u5173\u7CFB</h2><ul><li><p>\u60B2\u89C2\u5E76\u53D1\u63A7\u5236\uFF08PCC\uFF09</p><p>\u662F\u4E00\u79CD\u7528\u6765\u89E3\u51B3<strong>\u8BFB-\u5199\u51B2\u7A81\u548C\u5199-\u5199\u51B2\u7A81\u7684\u7684\u52A0\u9501\u5E76\u53D1\u63A7\u5236</strong>, \u4E3A\u6BCF\u4E2A\u64CD\u4F5C\u90FD\u52A0\u9501\uFF0C\u540C\u4E00\u65F6\u95F4\u4E0B\uFF0C\u53EA\u6709\u83B7\u5F97\u8BE5\u9501\u7684\u4E8B\u52A1\u624D\u80FD\u6709\u6743\u5229\u5BF9\u8BE5\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6CA1\u6709\u83B7\u5F97\u9501\u7684\u4E8B\u52A1\u53EA\u80FD\u7B49\u5F85\u5176\u4ED6\u4E8B\u52A1\u91CA\u653E\u9501\uFF1B\u6240\u4EE5\u53EF\u4EE5\u89E3\u51B3\u810F\u8BFB\uFF0C\u5E7B\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF0C\u7B2C\u4E00\u7C7B\u66F4\u65B0\u4E22\u5931\uFF0C\u7B2C\u4E8C\u7C7B\u66F4\u65B0\u4E22\u5931\u7684\u95EE\u9898</p></li><li><p>\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\uFF08OCC\uFF09</p><p>\u662F\u4E00\u79CD\u7528\u6765\u89E3\u51B3<strong>\u5199-\u5199\u51B2\u7A81\u7684\u65E0\u9501\u5E76\u53D1\u63A7\u5236</strong>\uFF0C\u8BA4\u4E3A\u4E8B\u52A1\u95F4\u4E89\u7528\u6CA1\u6709\u90A3\u4E48\u591A\uFF0C\u6240\u4EE5\u5148\u8FDB\u884C\u4FEE\u6539\uFF0C\u5728\u63D0\u4EA4\u4E8B\u52A1\u524D\uFF0C\u68C0\u67E5\u4E00\u4E0B\u4E8B\u52A1\u5F00\u59CB\u540E\uFF0C\u6709\u6CA1\u6709\u65B0\u63D0\u4EA4\u6539\u53D8\uFF0C\u5982\u679C\u6CA1\u6709\u5C31\u63D0\u4EA4\uFF0C\u5982\u679C\u6709\u5C31\u653E\u5F03\u5E76\u91CD\u8BD5\u3002\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\u7C7B\u4F3C\u81EA\u65CB\u9501\u3002\u4E50\u89C2\u5E76\u53D1\u63A7\u5236\u9002\u7528\u4E8E\u4F4E\u6570\u636E\u4E89\u7528\uFF0C\u5199\u51B2\u7A81\u6BD4\u8F83\u5C11\u7684\u73AF\u5883\uFF1B\u65E0\u6CD5\u89E3\u51B3\u810F\u8BFB\uFF0C\u5E7B\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB\uFF0C\u4F46\u662F\u53EF\u4EE5\u89E3\u51B3\u66F4\u65B0\u4E22\u5931\u95EE\u9898</p></li><li><p>\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\uFF08MVCC\uFF09</p><p>\u662F\u4E00\u79CD\u7528\u6765\u89E3\u51B3<strong>\u8BFB-\u5199\u51B2\u7A81\u7684\u65E0\u9501\u5E76\u53D1\u63A7\u5236</strong>\uFF0C\u4E5F\u5C31\u662F\u4E3A\u4E8B\u52A1\u5206\u914D\u5355\u5411\u589E\u957F\u7684\u65F6\u95F4\u6233\uFF0C\u4E3A\u6BCF\u4E2A\u4FEE\u6539\u4FDD\u5B58\u4E00\u4E2A\u7248\u672C\uFF0C\u7248\u672C\u4E0E\u4E8B\u52A1\u65F6\u95F4\u6233\u5173\u8054\uFF0C\u8BFB\u64CD\u4F5C\u53EA\u8BFB\u8BE5\u4E8B\u52A1\u5F00\u59CB\u524D\u7684\u6570\u636E\u5E93\u7684\u5FEB\u7167\u3002 \u8FD9\u6837\u5728\u8BFB\u64CD\u4F5C\u65F6\u5C31\u4E0D\u7528\u963B\u585E\u5199\u64CD\u4F5C\uFF0C\u5199\u64CD\u4F5C\u4E5F\u4E0D\u7528\u963B\u585E\u8BFB\u64CD\u4F5C\uFF1B\u4E0D\u4EC5\u53EF\u4EE5\u63D0\u9AD8\u5E76\u53D1\u6027\u80FD\uFF0C\u8FD8\u53EF\u4EE5\u89E3\u51B3\u810F\u8BFB\uFF0C\u5E7B\u8BFB\uFF0C\u4E0D\u53EF\u91CD\u590D\u8BFB\u7B49\u4E8B\u52A1\u95EE\u9898\u3002\u66F4\u65B0\u4E22\u5931\u95EE\u9898\u9664\u5916</p></li></ul><p>\u603B\u7684\u6765\u8BF4\uFF0CMVCC\u7684\u51FA\u73B0\u5C31\u662F\u6570\u636E\u5E93\u4E0D\u6EE1\u7528\u60B2\u89C2\u9501\u53BB\u89E3\u51B3\u8BFB-\u5199\u51B2\u7A81\u95EE\u9898\uFF0C\u56E0\u6027\u80FD\u4E0D\u9AD8\u800C\u63D0\u51FA\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6240\u4EE5\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F62\u6210\u4E24\u4E2A\u7EC4\u5408\uFF1A</p><ul><li><strong>MVCC + \u60B2\u89C2\u9501</strong> MVCC\u89E3\u51B3\u8BFB\u5199\u51B2\u7A81\uFF0C\u60B2\u89C2\u9501\u89E3\u51B3\u5199\u5199\u51B2\u7A81</li><li><strong>MVCC + \u4E50\u89C2\u9501</strong> MVCC\u89E3\u51B3\u8BFB\u5199\u51B2\u7A81\uFF0C\u4E50\u89C2\u9501\u89E3\u51B3\u5199\u5199\u51B2\u7A81</li></ul><p>\u8FD9\u79CD\u7EC4\u5408\u7684\u65B9\u5F0F\u5C31\u53EF\u4EE5\u6700\u5927\u7A0B\u5EA6\u7684\u63D0\u9AD8\u6570\u636E\u5E93\u5E76\u53D1\u6027\u80FD\uFF0C\u5E76\u89E3\u51B3\u8BFB\u5199\u51B2\u7A81\uFF0C\u548C\u5199\u5199\u51B2\u7A81\u5BFC\u81F4\u7684\u95EE\u9898</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',24),u={href:"https://blog.csdn.net/SnailMann/article/details/88388829",target:"_blank",rel:"noopener noreferrer"},C=o("\u3010MySQL\u7B14\u8BB0\u3011\u6B63\u786E\u7684\u7406\u89E3MySQL\u7684\u4E50\u89C2\u9501\uFF0C\u60B2\u89C2\u9501\u4E0EMVCC");function _(g,m){const r=s("ExternalLinkIcon");return n(),t("div",null,[h,c,p,e("p",null,[e("a",u,[C,l(r)])])])}const f=i(d,[["render",_],["__file","mysql-y-lock-category.html.vue"]]);export{f as default};
