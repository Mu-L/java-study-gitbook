import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as i,b as g,e as n,r as o}from"./app.e683cd35.js";const t={},c=n('<h1 id="es\u8BE6\u89E3-\u539F\u7406-\u4ECE\u56FE\u89E3\u6784\u7B51\u5BF9es\u539F\u7406\u7684\u521D\u6B65\u8BA4\u77E5" tabindex="-1"><a class="header-anchor" href="#es\u8BE6\u89E3-\u539F\u7406-\u4ECE\u56FE\u89E3\u6784\u7B51\u5BF9es\u539F\u7406\u7684\u521D\u6B65\u8BA4\u77E5" aria-hidden="true">#</a> ES\u8BE6\u89E3 - \u539F\u7406\uFF1A\u4ECE\u56FE\u89E3\u6784\u7B51\u5BF9ES\u539F\u7406\u7684\u521D\u6B65\u8BA4\u77E5</h1><blockquote><p>\u5728\u5B66\u4E60ElasticSearch\u539F\u7406\u65F6\uFF0C\u6211\u63A8\u8350\u4F60\u5148\u901A\u8FC7\u5B98\u65B9\u535A\u5BA2\u4E2D\u7684\u4E00\u7BC7\u56FE\u89E3\u6587\u7AE0(\u867D\u7136\u662F\u57FA\u4E8E2.x\u7248\u672C\uFF09\u6765\u6784\u7B51\u5BF9ES\u7684\u521D\u6B65\u8BA4\u77E5\uFF08\u8FD9\u79CD\u8BA4\u8BC6\u662F\u4F53\u7CFB\u4E0A\u7684\u5FEB\u901F\u8BA4\u77E5\uFF09</p></blockquote><h2 id="_1-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a> 1. \u524D\u8A00</h2><p>\u672C\u6587\u5148\u81EA\u4E0A\u800C\u4E0B\uFF0C\u540E\u81EA\u5E95\u5411\u4E0A\u7684\u4ECB\u7ECDElasticSearch\u7684\u5E95\u5C42\u5DE5\u4F5C\u539F\u7406\uFF0C\u8BD5\u56FE\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u4E3A\u4EC0\u4E48\u6211\u7684\u641C\u7D22 <code>*foo-bar*</code> \u65E0\u6CD5\u5339\u914D <code>foo-bar</code> \uFF1F</li><li>\u4E3A\u4EC0\u4E48\u589E\u52A0\u66F4\u591A\u7684\u6587\u4EF6\u4F1A\u538B\u7F29\u7D22\u5F15\uFF08Index\uFF09\uFF1F</li><li>\u4E3A\u4EC0\u4E48ElasticSearch\u5360\u7528\u5F88\u591A\u5185\u5B58\uFF1F</li></ul><p><strong>\u7248\u672C</strong></p><p>elasticsearch\u7248\u672C: elasticsearch-2.2.0</p><h2 id="_2-\u56FE\u89E3elasticsearch" tabindex="-1"><a class="header-anchor" href="#_2-\u56FE\u89E3elasticsearch" aria-hidden="true">#</a> 2. \u56FE\u89E3ElasticSearch</h2><ul><li>\u4E91\u4E0A\u7684\u96C6\u7FA4</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211427280.png" alt="image-20220807211427280" loading="lazy"></p><ul><li>\u96C6\u7FA4\u91CC\u7684\u76D2\u5B50</li></ul><p>\u4E91\u91CC\u9762\u7684\u6BCF\u4E2A\u767D\u8272\u6B63\u65B9\u5F62\u7684\u76D2\u5B50\u4EE3\u8868\u4E00\u4E2A\u8282\u70B9\u2014\u2014Node\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211503936.png" alt="image-20220807211503936" loading="lazy"></p><ul><li>\u8282\u70B9\u4E4B\u95F4</li></ul><p>\u5728\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u8282\u70B9\u76F4\u63A5\uFF0C\u591A\u4E2A\u7EFF\u8272\u5C0F\u65B9\u5757\u7EC4\u5408\u5728\u4E00\u8D77\u5F62\u6210\u4E00\u4E2AElasticSearch\u7684\u7D22\u5F15\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211603236.png" alt="image-20220807211603236" loading="lazy"></p><ul><li>\u7D22\u5F15\u91CC\u7684\u5C0F\u65B9\u5757</li></ul><p>\u5728\u4E00\u4E2A\u7D22\u5F15\u4E0B\uFF0C\u5206\u5E03\u5728\u591A\u4E2A\u8282\u70B9\u91CC\u7684\u7EFF\u8272\u5C0F\u65B9\u5757\u79F0\u4E3A\u5206\u7247\u2014\u2014Shard\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211805270.png" alt="image-20220807211805270" loading="lazy"></p><ul><li>Shard\uFF1DLucene Index</li></ul><p>\u4E00\u4E2AElasticSearch\u7684Shard\u672C\u8D28\u4E0A\u662F\u4E00\u4E2ALucene Index\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807211833316.png" alt="image-20220807211833316" loading="lazy"></p><p>Lucene\u662F\u4E00\u4E2AFull Text \u641C\u7D22\u5E93\uFF08\u4E5F\u6709\u5F88\u591A\u5176\u4ED6\u5F62\u5F0F\u7684\u641C\u7D22\u5E93\uFF09\uFF0CElasticSearch\u662F\u5EFA\u7ACB\u5728Lucene\u4E4B\u4E0A\u7684\u3002\u63A5\u4E0B\u6765\u7684\u6545\u4E8B\u8981\u8BF4\u7684\u5927\u90E8\u5206\u5185\u5BB9\u5B9E\u9645\u4E0A\u662FElasticSearch\u5982\u4F55\u57FA\u4E8ELucene\u5DE5\u4F5C\u7684\u3002</p><h2 id="_3-\u56FE\u89E3lucene" tabindex="-1"><a class="header-anchor" href="#_3-\u56FE\u89E3lucene" aria-hidden="true">#</a> 3. \u56FE\u89E3Lucene</h2><h3 id="_3-1-segment" tabindex="-1"><a class="header-anchor" href="#_3-1-segment" aria-hidden="true">#</a> 3.1 Segment</h3><ul><li><strong>Mini\u7D22\u5F15\u2014\u2014segment</strong></li></ul><p>\u5728Lucene\u91CC\u9762\u6709\u5F88\u591A\u5C0F\u7684segment\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u4EEC\u770B\u6210Lucene\u5185\u90E8\u7684mini-index\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212046076.png" alt="image-20220807212046076" loading="lazy"></p><ul><li>Segment\u5185\u90E8\uFF08\u6709\u7740\u8BB8\u591A\u6570\u636E\u7ED3\u6784\uFF09 <ul><li>Inverted Index</li><li>Stored Fields</li><li>Document Values</li><li>Cache</li></ul></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212120099.png" alt="image-20220807212120099" loading="lazy"></p><h4 id="_3-1-1-inverted-index" tabindex="-1"><a class="header-anchor" href="#_3-1-1-inverted-index" aria-hidden="true">#</a> 3.1.1 Inverted Index</h4><p>\u6700\u6700\u91CD\u8981\u7684Inverted Index</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212220356.png" alt="image-20220807212220356" loading="lazy"></p><p>Inverted Index\u4E3B\u8981\u5305\u62EC\u4E24\u90E8\u5206\uFF1A</p><ul><li>\u4E00\u4E2A\u6709\u5E8F\u7684\u6570\u636E\u5B57\u5178Dictionary\uFF08\u5305\u62EC\u5355\u8BCDTerm\u548C\u5B83\u51FA\u73B0\u7684\u9891\u7387\uFF09\u3002</li><li>\u4E0E\u5355\u8BCDTerm\u5BF9\u5E94\u7684Postings\uFF08\u5373\u5B58\u5728\u8FD9\u4E2A\u5355\u8BCD\u7684\u6587\u4EF6\uFF09\u3002</li></ul><p>\u5F53\u6211\u4EEC\u641C\u7D22\u7684\u65F6\u5019\uFF0C\u9996\u5148\u5C06\u641C\u7D22\u7684\u5185\u5BB9\u5206\u89E3\uFF0C\u7136\u540E\u5728\u5B57\u5178\u91CC\u627E\u5230\u5BF9\u5E94Term\uFF0C\u4ECE\u800C\u67E5\u627E\u5230\u4E0E\u641C\u7D22\u76F8\u5173\u7684\u6587\u4EF6\u5185\u5BB9\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212500261.png" alt="image-20220807212500261" loading="lazy"></p><ul><li><strong>\u67E5\u8BE2\u201Cthe fury\u201D</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212606988.png" alt="image-20220807212606988" loading="lazy"></p><ul><li><strong>\u81EA\u52A8\u8865\u5168</strong>\uFF08AutoCompletion-Prefix\uFF09</li></ul><p>\u5982\u679C\u60F3\u8981\u67E5\u627E\u4EE5\u5B57\u6BCD\u201Cc\u201D\u5F00\u5934\u7684\u5B57\u6BCD\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u901A\u8FC7\u4E8C\u5206\u67E5\u627E\uFF08Binary Search\uFF09\u5728Inverted Index\u8868\u4E2D\u627E\u5230\u4F8B\u5982\u201Cchoice\u201D\u3001\u201Ccoming\u201D\u8FD9\u6837\u7684\u8BCD\uFF08Term\uFF09\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212700285.png" alt="image-20220807212700285" loading="lazy"></p><ul><li><strong>\u6602\u8D35\u7684\u67E5\u627E</strong></li></ul><p>\u5982\u679C\u60F3\u8981\u67E5\u627E\u6240\u6709\u5305\u542B\u201Cour\u201D\u5B57\u6BCD\u7684\u5355\u8BCD\uFF0C\u90A3\u4E48\u7CFB\u7EDF\u4F1A\u626B\u63CF\u6574\u4E2AInverted Index\uFF0C\u8FD9\u662F\u975E\u5E38\u6602\u8D35\u7684\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212737409.png" alt="image-20220807212737409" loading="lazy"></p><p>\u5728\u6B64\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u60F3\u8981\u505A\u4F18\u5316\uFF0C\u90A3\u4E48\u6211\u4EEC\u9762\u5BF9\u7684\u95EE\u9898\u662F\u5982\u4F55\u751F\u6210\u5408\u9002\u7684Term\u3002</p><ul><li><strong>\u95EE\u9898\u7684\u8F6C\u5316</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807212813500.png" alt="image-20220807212813500" loading="lazy"></p><p>\u5BF9\u4E8E\u4EE5\u4E0A\u8BF8\u5982\u6B64\u7C7B\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u6709\u51E0\u79CD\u53EF\u884C\u7684\u89E3\u51B3\u65B9\u6848\uFF1A</p><ol><li><code>* suffix -&gt; xiffus *</code></li></ol><p>\u5982\u679C\u6211\u4EEC\u60F3\u4EE5\u540E\u7F00\u4F5C\u4E3A\u641C\u7D22\u6761\u4EF6\uFF0C\u53EF\u4EE5\u4E3ATerm\u505A\u53CD\u5411\u5904\u7406\u3002</p><ol><li><code>(60.6384, 6.5017) -&gt; u4u8gyykk</code></li></ol><p>\u5BF9\u4E8EGEO\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5C06\u5B83\u8F6C\u6362\u4E3AGEO Hash\u3002</p><ol><li><code>123 -&gt; {1-hundreds, 12-tens, 123}</code></li></ol><p>\u5BF9\u4E8E\u7B80\u5355\u7684\u6570\u5B57\uFF0C\u53EF\u4EE5\u4E3A\u5B83\u751F\u6210\u591A\u91CD\u5F62\u5F0F\u7684Term\u3002</p><ul><li><strong>\u89E3\u51B3\u62FC\u5199\u9519\u8BEF</strong></li></ul><p>\u4E00\u4E2APython\u5E93 \u4E3A\u5355\u8BCD\u751F\u6210\u4E86\u4E00\u4E2A\u5305\u542B\u9519\u8BEF\u62FC\u5199\u4FE1\u606F\u7684\u6811\u5F62\u72B6\u6001\u673A\uFF0C\u89E3\u51B3\u62FC\u5199\u9519\u8BEF\u7684\u95EE\u9898\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213035372.png" alt="image-20220807213035372" loading="lazy"></p><h4 id="_3-1-2-stored-field\u5B57\u6BB5\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_3-1-2-stored-field\u5B57\u6BB5\u67E5\u627E" aria-hidden="true">#</a> 3.1.2 Stored Field\u5B57\u6BB5\u67E5\u627E</h4><p>\u5F53\u6211\u4EEC\u60F3\u8981\u67E5\u627E\u5305\u542B\u67D0\u4E2A\u7279\u5B9A\u6807\u9898\u5185\u5BB9\u7684\u6587\u4EF6\u65F6\uFF0CInverted Index\u5C31\u4E0D\u80FD\u5F88\u597D\u7684\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6240\u4EE5Lucene\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u6570\u636E\u7ED3\u6784Stored Fields\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002\u672C\u8D28\u4E0A\uFF0CStored Fields\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u952E\u503C\u5BF9key-value\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CElasticSearch\u4F1A\u5B58\u50A8\u6574\u4E2A\u6587\u4EF6\u7684JSON source\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213136650.png" alt="image-20220807213136650" loading="lazy"></p><h4 id="_3-1-3-document-values\u4E3A\u4E86\u6392\u5E8F-\u805A\u5408" tabindex="-1"><a class="header-anchor" href="#_3-1-3-document-values\u4E3A\u4E86\u6392\u5E8F-\u805A\u5408" aria-hidden="true">#</a> 3.1.3 Document Values\u4E3A\u4E86\u6392\u5E8F\uFF0C\u805A\u5408</h4><p>\u5373\u4F7F\u8FD9\u6837\uFF0C\u6211\u4EEC\u53D1\u73B0\u4EE5\u4E0A\u7ED3\u6784\u4ECD\u7136\u65E0\u6CD5\u89E3\u51B3\u8BF8\u5982\uFF1A\u6392\u5E8F\u3001\u805A\u5408\u3001facet\uFF0C\u56E0\u4E3A\u6211\u4EEC\u53EF\u80FD\u4F1A\u8981\u8BFB\u53D6\u5927\u91CF\u4E0D\u9700\u8981\u7684\u4FE1\u606F\u3002</p><p>\u6240\u4EE5\uFF0C\u53E6\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u89E3\u51B3\u4E86\u6B64\u79CD\u95EE\u9898\uFF1ADocument Values\u3002\u8FD9\u79CD\u7ED3\u6784\u672C\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u5217\u5F0F\u7684\u5B58\u50A8\uFF0C\u5B83\u9AD8\u5EA6\u4F18\u5316\u4E86\u5177\u6709\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\u7684\u5B58\u50A8\u7ED3\u6784\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213419125.png" alt="image-20220807213419125" loading="lazy"></p><p>\u4E3A\u4E86\u63D0\u9AD8\u6548\u7387\uFF0CElasticSearch\u53EF\u4EE5\u5C06\u7D22\u5F15\u4E0B\u67D0\u4E00\u4E2ADocument Value\u5168\u90E8\u8BFB\u53D6\u5230\u5185\u5B58\u4E2D\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD9\u5927\u5927\u63D0\u5347\u8BBF\u95EE\u901F\u5EA6\uFF0C\u4F46\u662F\u4E5F\u540C\u65F6\u4F1A\u6D88\u8017\u6389\u5927\u91CF\u7684\u5185\u5B58\u7A7A\u95F4\u3002</p><p>\u603B\u4E4B\uFF0C\u8FD9\u4E9B\u6570\u636E\u7ED3\u6784Inverted Index\u3001Stored Fields\u3001Document Values\u53CA\u5176\u7F13\u5B58\uFF0C\u90FD\u5728segment\u5185\u90E8\u3002</p><h3 id="_3-2-\u641C\u7D22\u53D1\u751F\u65F6" tabindex="-1"><a class="header-anchor" href="#_3-2-\u641C\u7D22\u53D1\u751F\u65F6" aria-hidden="true">#</a> 3.2 \u641C\u7D22\u53D1\u751F\u65F6</h3><p>\u641C\u7D22\u65F6\uFF0CLucene\u4F1A\u641C\u7D22\u6240\u6709\u7684segment\u7136\u540E\u5C06\u6BCF\u4E2Asegment\u7684\u641C\u7D22\u7ED3\u679C\u8FD4\u56DE\uFF0C\u6700\u540E\u5408\u5E76\u5448\u73B0\u7ED9\u5BA2\u6237\u3002</p><p>Lucene\u7684\u4E00\u4E9B\u7279\u6027\u4F7F\u5F97\u8FD9\u4E2A\u8FC7\u7A0B\u975E\u5E38\u91CD\u8981\uFF1A</p><ul><li>Segments\u662F\u4E0D\u53EF\u53D8\u7684\uFF08immutable\uFF09 <ul><li>Delete? \u5F53\u5220\u9664\u53D1\u751F\u65F6\uFF0CLucene\u505A\u7684\u53EA\u662F\u5C06\u5176\u6807\u5FD7\u4F4D\u7F6E\u4E3A\u5220\u9664\uFF0C\u4F46\u662F\u6587\u4EF6\u8FD8\u662F\u4F1A\u5728\u5B83\u539F\u6765\u7684\u5730\u65B9\uFF0C\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8</li><li>Update? \u6240\u4EE5\u5BF9\u4E8E\u66F4\u65B0\u6765\u8BF4\uFF0C\u672C\u8D28\u4E0A\u5B83\u505A\u7684\u5DE5\u4F5C\u662F\uFF1A\u5148\u5220\u9664\uFF0C\u7136\u540E\u91CD\u65B0\u7D22\u5F15\uFF08Re-index\uFF09</li></ul></li><li>\u968F\u5904\u53EF\u89C1\u7684\u538B\u7F29 <ul><li>Lucene\u975E\u5E38\u64C5\u957F\u538B\u7F29\u6570\u636E\uFF0C\u57FA\u672C\u4E0A\u6240\u6709\u6559\u79D1\u4E66\u4E0A\u7684\u538B\u7F29\u65B9\u5F0F\uFF0C\u90FD\u80FD\u5728Lucene\u4E2D\u627E\u5230\u3002</li></ul></li><li>\u7F13\u5B58\u6240\u6709\u7684\u6240\u6709 <ul><li>Lucene\u4E5F\u4F1A\u5C06\u6240\u6709\u7684\u4FE1\u606F\u505A\u7F13\u5B58\uFF0C\u8FD9\u5927\u5927\u63D0\u9AD8\u4E86\u5B83\u7684\u67E5\u8BE2\u6548\u7387\u3002</li></ul></li></ul><h3 id="_3-3-\u7F13\u5B58\u7684\u6545\u4E8B" tabindex="-1"><a class="header-anchor" href="#_3-3-\u7F13\u5B58\u7684\u6545\u4E8B" aria-hidden="true">#</a> 3.3 \u7F13\u5B58\u7684\u6545\u4E8B</h3><p>\u5F53ElasticSearch\u7D22\u5F15\u4E00\u4E2A\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u4E3A\u6587\u4EF6\u5EFA\u7ACB\u76F8\u5E94\u7684\u7F13\u5B58\uFF0C\u5E76\u4E14\u4F1A\u5B9A\u671F\uFF08\u6BCF\u79D2\uFF09\u5237\u65B0\u8FD9\u4E9B\u6570\u636E\uFF0C\u7136\u540E\u8FD9\u4E9B\u6587\u4EF6\u5C31\u53EF\u4EE5\u88AB\u641C\u7D22\u5230\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213820893.png" alt="image-20220807213820893" loading="lazy"></p><p>\u968F\u7740\u65F6\u95F4\u7684\u589E\u52A0\uFF0C\u6211\u4EEC\u4F1A\u6709\u5F88\u591Asegments\uFF0C</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213837006.png" alt="image-20220807213837006" loading="lazy"></p><p>\u6240\u4EE5ElasticSearch\u4F1A\u5C06\u8FD9\u4E9Bsegment\u5408\u5E76\uFF0C\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0Csegment\u4F1A\u6700\u7EC8\u88AB\u5220\u9664\u6389</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213906420.png" alt="image-20220807213906420" loading="lazy"></p><p>\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u589E\u52A0\u6587\u4EF6\u53EF\u80FD\u4F1A\u4F7F\u7D22\u5F15\u6240\u5360\u7A7A\u95F4\u53D8\u5C0F\uFF0C\u5B83\u4F1A\u5F15\u8D77merge\uFF0C\u4ECE\u800C\u53EF\u80FD\u4F1A\u6709\u66F4\u591A\u7684\u538B\u7F29\u3002</p><ul><li><strong>\u4E3E\u4E2A\u6817\u5B50</strong></li></ul><p>\u6709\u4E24\u4E2Asegment\u5C06\u4F1Amerge</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213929679.png" alt="image-20220807213929679" loading="lazy"></p><p>\u8FD9\u4E24\u4E2Asegment\u6700\u7EC8\u4F1A\u88AB\u5220\u9664\uFF0C\u7136\u540E\u5408\u5E76\u6210\u4E00\u4E2A\u65B0\u7684segment</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807213945097.png" alt="image-20220807213945097" loading="lazy"></p><p>\u8FD9\u65F6\u8FD9\u4E2A\u65B0\u7684segment\u5728\u7F13\u5B58\u4E2D\u5904\u4E8Ecold\u72B6\u6001\uFF0C\u4F46\u662F\u5927\u591A\u6570segment\u4ECD\u7136\u4FDD\u6301\u4E0D\u53D8\uFF0C\u5904\u4E8Ewarm\u72B6\u6001\u3002</p><p>\u4EE5\u4E0A\u573A\u666F\u7ECF\u5E38\u5728Lucene Index\u5185\u90E8\u53D1\u751F\u7684\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214011917.png" alt="image-20220807214011917" loading="lazy"></p><h3 id="_3-4-\u5728shard\u4E2D\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5728shard\u4E2D\u641C\u7D22" aria-hidden="true">#</a> 3.4 \u5728Shard\u4E2D\u641C\u7D22</h3><p>ElasticSearch\u4ECEShard\u4E2D\u641C\u7D22\u7684\u8FC7\u7A0B\u4E0ELucene Segment\u4E2D\u641C\u7D22\u7684\u8FC7\u7A0B\u7C7B\u4F3C\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214055031.png" alt="image-20220807214055031" loading="lazy"></p><p>\u4E0E\u5728Lucene Segment\u4E2D\u641C\u7D22\u4E0D\u540C\u7684\u662F\uFF0CShard\u53EF\u80FD\u662F\u5206\u5E03\u5728\u4E0D\u540CNode\u4E0A\u7684\uFF0C\u6240\u4EE5\u5728\u641C\u7D22\u4E0E\u8FD4\u56DE\u7ED3\u679C\u65F6\uFF0C\u6240\u6709\u7684\u4FE1\u606F\u90FD\u4F1A\u901A\u8FC7\u7F51\u7EDC\u4F20\u8F93\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A</p><p>1\u6B21\u641C\u7D22\u67E5\u627E2\u4E2Ashard \uFF1D 2\u6B21\u5206\u522B\u641C\u7D22shard</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214137281.png" alt="image-20220807214137281" loading="lazy"></p><ul><li><strong>\u5BF9\u4E8E\u65E5\u5FD7\u6587\u4EF6\u7684\u5904\u7406</strong></li></ul><p>\u5F53\u6211\u4EEC\u60F3\u641C\u7D22\u7279\u5B9A\u65E5\u671F\u4EA7\u751F\u7684\u65E5\u5FD7\u65F6\uFF0C\u901A\u8FC7\u6839\u636E\u65F6\u95F4\u6233\u5BF9\u65E5\u5FD7\u6587\u4EF6\u8FDB\u884C\u5206\u5757\u4E0E\u7D22\u5F15\uFF0C\u4F1A\u6781\u5927\u63D0\u9AD8\u641C\u7D22\u6548\u7387\u3002</p><p>\u5F53\u6211\u4EEC\u60F3\u8981\u5220\u9664\u65E7\u7684\u6570\u636E\u65F6\u4E5F\u975E\u5E38\u65B9\u4FBF\uFF0C\u53EA\u9700\u5220\u9664\u8001\u7684\u7D22\u5F15\u5373\u53EF\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214205416.png" alt="image-20220807214205416" loading="lazy"></p><p>\u5728\u4E0A\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2Aindex\u6709\u4E24\u4E2Ashards</p><ul><li><strong>\u5982\u4F55Scale</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214221166.png" alt="image-20220807214221166" loading="lazy"></p><p>shard\u4E0D\u4F1A\u8FDB\u884C\u66F4\u8FDB\u4E00\u6B65\u7684\u62C6\u5206\uFF0C\u4F46\u662Fshard\u53EF\u80FD\u4F1A\u88AB\u8F6C\u79FB\u5230\u4E0D\u540C\u8282\u70B9\u4E0A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214243442.png" alt="image-20220807214243442" loading="lazy"></p><p>\u6240\u4EE5\uFF0C\u5982\u679C\u5F53\u96C6\u7FA4\u8282\u70B9\u538B\u529B\u589E\u957F\u5230\u4E00\u5B9A\u7684\u7A0B\u5EA6\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u8003\u8651\u589E\u52A0\u65B0\u7684\u8282\u70B9\uFF0C\u8FD9\u5C31\u4F1A\u8981\u6C42\u6211\u4EEC\u5BF9\u6240\u6709\u6570\u636E\u8FDB\u884C\u91CD\u65B0\u7D22\u5F15\uFF0C\u8FD9\u662F\u6211\u4EEC\u4E0D\u592A\u5E0C\u671B\u770B\u5230\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728\u89C4\u5212\u7684\u65F6\u5019\u5C31\u8003\u8651\u6E05\u695A\uFF0C\u5982\u4F55\u53BB\u5E73\u8861\u8DB3\u591F\u591A\u7684\u8282\u70B9\u4E0E\u4E0D\u8DB3\u8282\u70B9\u4E4B\u95F4\u7684\u5173\u7CFB\u3002</p><ul><li>\u8282\u70B9\u5206\u914D\u4E0EShard\u4F18\u5316 <ul><li>\u4E3A\u66F4\u91CD\u8981\u7684\u6570\u636E\u7D22\u5F15\u8282\u70B9\uFF0C\u5206\u914D\u6027\u80FD\u66F4\u597D\u7684\u673A\u5668</li><li>\u786E\u4FDD\u6BCF\u4E2Ashard\u90FD\u6709\u526F\u672C\u4FE1\u606Freplica</li></ul></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214333483.png" alt="image-20220807214333483" loading="lazy"></p><ul><li><strong>\u8DEF\u7531Routing</strong></li></ul><p>\u6BCF\u4E2A\u8282\u70B9\uFF0C\u6BCF\u4E2A\u90FD\u5B58\u7559\u4E00\u4EFD\u8DEF\u7531\u8868\uFF0C\u6240\u4EE5\u5F53\u8BF7\u6C42\u5230\u4EFB\u4F55\u4E00\u4E2A\u8282\u70B9\u65F6\uFF0CElasticSearch\u90FD\u6709\u80FD\u529B\u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u671F\u671B\u8282\u70B9\u7684shard\u8FDB\u4E00\u6B65\u5904\u7406\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807214349755.png" alt="image-20220807214349755" loading="lazy"></p><h2 id="_4-\u4E00\u4E2A\u771F\u5B9E\u7684\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_4-\u4E00\u4E2A\u771F\u5B9E\u7684\u8BF7\u6C42" aria-hidden="true">#</a> 4. \u4E00\u4E2A\u771F\u5B9E\u7684\u8BF7\u6C42</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215038558.png" alt="image-20220807215038558" loading="lazy"></p><ul><li><strong>Query</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215052260.png" alt="image-20220807215052260" loading="lazy"></p><p>Query\u6709\u4E00\u4E2A\u7C7B\u578Bfiltered\uFF0C\u4EE5\u53CA\u4E00\u4E2Amulti_match\u7684\u67E5\u8BE2</p><ul><li><strong>Aggregation</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215107852.png" alt="image-20220807215107852" loading="lazy"></p><p>\u6839\u636E\u4F5C\u8005\u8FDB\u884C\u805A\u5408\uFF0C\u5F97\u5230top10\u7684hits\u7684top10\u4F5C\u8005\u7684\u4FE1\u606F</p><ul><li><strong>\u8BF7\u6C42\u5206\u53D1</strong></li></ul><p>\u8FD9\u4E2A\u8BF7\u6C42\u53EF\u80FD\u88AB\u5206\u53D1\u5230\u96C6\u7FA4\u91CC\u7684\u4EFB\u610F\u4E00\u4E2A\u8282\u70B9</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215126919.png" alt="image-20220807215126919" loading="lazy"></p><ul><li><strong>\u4E0A\u5E1D\u8282\u70B9</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215154971.png" alt="image-20220807215154971" loading="lazy"></p><p>\u8FD9\u65F6\u8FD9\u4E2A\u8282\u70B9\u5C31\u6210\u4E3A\u5F53\u524D\u8BF7\u6C42\u7684\u534F\u8C03\u8005\uFF08Coordinator\uFF09\uFF0C\u5B83\u51B3\u5B9A\uFF1A a) \u6839\u636E\u7D22\u5F15\u4FE1\u606F\uFF0C\u5224\u65AD\u8BF7\u6C42\u4F1A\u88AB\u8DEF\u7531\u5230\u54EA\u4E2A\u6838\u5FC3\u8282\u70B9 b) \u4EE5\u53CA\u54EA\u4E2A\u526F\u672C\u662F\u53EF\u7528\u7684 c) \u7B49\u7B49</p><ul><li><strong>\u8DEF\u7531</strong></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215231471.png" alt="image-20220807215231471" loading="lazy"></p><ul><li><strong>\u5728\u771F\u5B9E\u641C\u7D22\u4E4B\u524D</strong></li></ul><p>ElasticSearch \u4F1A\u5C06Query\u8F6C\u6362\u6210Lucene Query</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215258465.png" alt="image-20220807215258465" loading="lazy"></p><p>\u7136\u540E\u5728\u6240\u6709\u7684segment\u4E2D\u6267\u884C\u8BA1\u7B97</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215314079.png" alt="image-20220807215314079" loading="lazy"></p><p>\u5BF9\u4E8EFilter\u6761\u4EF6\u672C\u8EAB\u4E5F\u4F1A\u6709\u7F13\u5B58</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215326982.png" alt="image-20220807215326982" loading="lazy"></p><p>\u4F46queries\u4E0D\u4F1A\u88AB\u7F13\u5B58\uFF0C\u6240\u4EE5\u5982\u679C\u76F8\u540C\u7684Query\u91CD\u590D\u6267\u884C\uFF0C\u5E94\u7528\u7A0B\u5E8F\u81EA\u5DF1\u9700\u8981\u505A\u7F13\u5B58</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215344697.png" alt="image-20220807215344697" loading="lazy"></p><p>\u6240\u4EE5\uFF0C</p><p>a) filters\u53EF\u4EE5\u5728\u4EFB\u4F55\u65F6\u5019\u4F7F\u7528 b) query\u53EA\u6709\u5728\u9700\u8981score\u7684\u65F6\u5019\u624D\u4F7F\u7528</p><ul><li><strong>\u8FD4\u56DE</strong></li></ul><p>\u641C\u7D22\u7ED3\u675F\u4E4B\u540E\uFF0C\u7ED3\u679C\u4F1A\u6CBF\u7740\u4E0B\u884C\u7684\u8DEF\u5F84\u5411\u4E0A\u9010\u5C42\u8FD4\u56DE\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215403015.png" alt="image-20220807215403015" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215411973.png" alt="image-20220807215411973" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215420881.png" alt="image-20220807215420881" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215435346.png" alt="image-20220807215435346" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220807215446748.png" alt="image-20220807215446748" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',144),p={href:"https://pdai.tech/md/db/nosql-es/elasticsearch-y-th-1.html",target:"_blank",rel:"noopener noreferrer"},r=i("strong",null,"ES\u8BE6\u89E3 - \u539F\u7406\uFF1A\u4ECE\u56FE\u89E3\u6784\u7B51\u5BF9ES\u539F\u7406\u7684\u521D\u6B65\u8BA4\u77E5",-1);function m(z,d){const l=o("ExternalLinkIcon");return s(),a("div",null,[c,i("p",null,[i("a",p,[r,g(l)])])])}var b=e(t,[["render",m],["__file","elasticsearch-y-th-1.html.vue"]]);export{b as default};
