import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as a,e as l}from"./app.5d5ee434.js";const n={},r=l(`<h1 id="\u7D22\u5F15\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u5B9E\u73B0" aria-hidden="true">#</a> \u7D22\u5F15\u5B9E\u73B0</h1><h2 id="_1-\u805A\u7C07\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_1-\u805A\u7C07\u7D22\u5F15" aria-hidden="true">#</a> 1. \u805A\u7C07\u7D22\u5F15</h2><p>MyISAM \u548C InnoDB \u90FD\u4F7F\u7528B+Tree\u7D22\u5F15\u7ED3\u6784\uFF0C\u4F46\u5E95\u5C42\u7D22\u5F15\u5B58\u50A8\u4E0D\u540C\uFF0CMyISAM \u91C7\u7528\u975E\u805A\u7C07\u7D22\u5F15\uFF0C\u800CInnoDB\u91C7\u7528\u805A\u7C07\u7D22\u5F15</p><ul><li>\u805A\u7C07\u7D22\u5F15\uFF1A\u7D22\u5F15\u548C\u6570\u636E\u6587\u4EF6\u4E3A\u540C\u4E00\u4E2A\u6587\u4EF6</li><li>\u975E\u805A\u7C07\u7D22\u5F15\uFF1A\u7D22\u5F15\u548C\u6570\u636E\u6587\u4EF6 \u5206\u5F00\u7684\u7D22\u5F15</li></ul><h2 id="_2-myisam-\u7D22\u5F15\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-myisam-\u7D22\u5F15\u539F\u7406" aria-hidden="true">#</a> 2. MyISAM \u7D22\u5F15\u539F\u7406</h2><h3 id="_2-1-\u5E95\u5C42\u5B58\u50A8\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5E95\u5C42\u5B58\u50A8\u7ED3\u6784" aria-hidden="true">#</a> 2.1 \u5E95\u5C42\u5B58\u50A8\u7ED3\u6784</h3><ul><li>frm\uFF1A\u5B9A\u4E49\u8868</li><li>myi: myisam\u7D22\u5F15</li><li>myd\uFF1Amyisam\u6570\u636E</li></ul><h3 id="_2-2-myisam-\u7D22\u5F15\u7ED3\u6784\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_2-2-myisam-\u7D22\u5F15\u7ED3\u6784\u7279\u6027" aria-hidden="true">#</a> 2.2 myISAM \u7D22\u5F15\u7ED3\u6784\u7279\u6027</h3><ul><li><p>\u91C7\u7528\u975E\u805A\u7C07\u7D22\u5F15</p></li><li><p>MyISAM myi\u7D22\u5F15\u6587\u4EF6\u548Cmyd \u6570\u636E\u6587\u4EF6\u5206\u79BB</p></li><li><p>\u7D22\u5F15\u6587\u4EF6\u4EC5\u4FDD\u5B58\u6570\u636E\u8BB0\u5F55\u7684\u6307\u9488\u5730\u5740\u3002</p></li><li><p>\u53F6\u5B50\u8282\u70B9data\u57DF\u5B58\u50A8\u6307\u5411\u6570\u636E\u8BB0\u5F55\u7684\u6307\u9488\u5730\u5740</p></li></ul><h3 id="_2-3-myisam-\u7D22\u5F15\u67E5\u627E\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-3-myisam-\u7D22\u5F15\u67E5\u627E\u6D41\u7A0B" aria-hidden="true">#</a> 2.3 MyISAM \u7D22\u5F15\u67E5\u627E\u6D41\u7A0B</h3><ul><li><p>MyISAM \u7D22\u5F15\u6309\u7167B+Tree\u641C\u7D22\uFF0C</p></li><li><p>\u5982\u679C\u6307\u5B9A\u7684key\u5B58\u5728\uFF0C\u5219\u53D6\u51FA\u5176data\u57DF\u503C</p></li><li><p>\u7136\u540E\u4EE5data\u9608\u503C-\u6570\u636E\u5730\u5740\u53BB\u8BFB\u53D6\u54CD\u5E94\u7684\u6570\u636E\u8BB0\u5F55\uFF0C</p></li></ul><p>\u8F85\u52A9\u7D22\u5F15\u548C\u4E3B\u7D22\u5F15\u5728\u7ED3\u6784\u4E0A\u6CA1\u6709\u4EFB\u4F55\u533A\u522B\uFF0C\u53EA\u662F\u4E3B\u7D22\u5F15\u8981\u6C42key \u662F\u552F\u4E00\u7684\uFF0C\u800C\u8F85\u52A9\u7D22\u5F15\u7684key \u53EF\u4EE5\u91CD\u590D</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906225153866.png" alt="image-20190906225153866"></p><h2 id="_3-innodb" tabindex="-1"><a class="header-anchor" href="#_3-innodb" aria-hidden="true">#</a> 3. InnoDB</h2><h3 id="_3-1-innodb\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_3-1-innodb\u4F18\u52BF" aria-hidden="true">#</a> 3.1 InnoDB\u4F18\u52BF</h3><ul><li>\u9AD8\u6269\u5C55\u6027</li><li>\u5145\u5206\u5F00\u53D1\u786C\u4EF6\u6027\u80FD</li><li>Crash Safe</li><li>\u652F\u6301\u4E8B\u52A1</li><li>\u53EF\u4EE5\u5728\u7EBF\u70ED\u5907\u4EFD</li></ul><h3 id="_3-2-innodb\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#_3-2-innodb\u7279\u6027" aria-hidden="true">#</a> 3.2 InnoDB\u7279\u6027</h3><ol><li><p>\u4E8B\u52A1\u652F\u6301\uFF08ACID\uFF09</p></li><li><p>\u6269\u5C55\u6027\u4F18\u826F</p></li><li><p>\u8BFB\u5199\u4E0D\u51B2\u7A81</p></li><li><p>\u7F13\u5B58\u52A0\u901F</p></li></ol><h3 id="_3-3-\u7EC4\u4EF6\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_3-3-\u7EC4\u4EF6\u529F\u80FD" aria-hidden="true">#</a> 3.3 \u7EC4\u4EF6\u529F\u80FD</h3><ul><li>redo/undo</li><li>\u5F02\u6B65IO</li><li>MVCC</li><li>\u884C\u7EA7\u522B\u9501</li><li>Page Cache\uFF08LRU\uFF09</li></ul><h3 id="_3-4-innodb\u7269\u7406\u5B58\u50A8\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-4-innodb\u7269\u7406\u5B58\u50A8\u7ED3\u6784" aria-hidden="true">#</a> 3.4 InnoDB\u7269\u7406\u5B58\u50A8\u7ED3\u6784</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906225909455.png" alt="image-20190906225909455"></p><ul><li><p>\u8868\u7A7A\u95F4(ibd\u6587\u4EF6)</p><ul><li>InnoDB \u4EE5<strong>\u8868\u7A7A\u95F4Tablespace</strong>\uFF08idb\u6587\u4EF6\uFF09\u7ED3\u6784\u8FDB\u884C\u7EC4\u7EC7</li></ul></li><li><p>\u6BB5(Segment)</p><ul><li><p>\u6BCF\u4E2ATablespce \u5305\u542B<strong>\u591A\u4E2ASegment\u6BB5</strong></p><p>\u5206\u4E3A2\u79CD\u6BB5\uFF1A\u53F6\u5B50\u8282\u70B9Segment \u548C\u975E\u53F6\u5B50\u8282\u70B9Segment</p></li></ul></li><li><p>Extent</p><ul><li><p>\u4E00\u4E2ASegment\u6BB5<strong>\u5305\u542B\u591A\u4E2AExtent</strong></p><p>\u4E00\u4E2AExtent\u5360\u7528\u5360\u75281M\u7A7A\u95F4\u5305\u542B<strong>64\u4E2Apage</strong>\uFF08\u6BCF\u4E2APage 16K\uFF09</p></li></ul></li><li><p>Page(16K)</p><ul><li>InnoDB B-Tree <strong>\u4E00\u4E2A\u903B\u8F91\u8282\u70B9\u6263\u5206\u914D\u4E00\u4E2A\u7269\u7406Page</strong>\uFF0C\u4E00\u4E2A\u8282\u70B9\u4E00\u6B21IO\u64CD\u4F5C</li></ul></li><li><p>Row</p><ul><li>\u4E00\u4E2APage\u91CC\u5305\u542B<strong>\u5F88\u591A\u6709\u5E8F\u6570\u636ERow\u884C</strong>\u6570\u636E</li></ul></li><li><p>Field</p><ul><li>Row\u884C\u6570\u636E\u4E2D\u5305\u542B<strong>Field \u5C5E\u6027\u6570\u636E\u7B49\u4FE1\u606F</strong></li></ul></li></ul><h4 id="_3-5-\u8868\u63D2\u5165\u6570\u636E\u6269\u5C55\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-5-\u8868\u63D2\u5165\u6570\u636E\u6269\u5C55\u539F\u7406" aria-hidden="true">#</a> 3.5 \u8868\u63D2\u5165\u6570\u636E\u6269\u5C55\u539F\u7406</h4><p>\u4E00\u6B21\u6269\u5F20\u4E00\u4E2AExtent\u7A7A\u95F4\uFF08IM\uFF09,64\u4E2Apage\uFF0C\u6309\u987A\u5E8F\u7ED3\u6784\u5411\u6BCF\u4E2Apage\u4E2D\u63D2\u5165\u6570\u636E</p><h4 id="_3-6-innodb-\u903B\u8F91\u7EC4\u7EC7\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-6-innodb-\u903B\u8F91\u7EC4\u7EC7\u7ED3\u6784" aria-hidden="true">#</a> 3.6 InnoDB \u903B\u8F91\u7EC4\u7EC7\u7ED3\u6784</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906233212924.png" alt="image-20190906233212924"></p><p><strong>\u6BCF\u4E2A\u7D22\u5F15\u4E00\u4E2AB+Tree</strong>\uFF0C\u4E00\u4E2AB+Tree\u8282\u70B9 = \u4E00\u4E2A\u7269\u7406Page\uFF0816K\uFF09</p><p>\u6570\u636E\u630916KB\u5207\u7247\u4E3APage \u5E76\u7F16\u53F7\uFF0C\u7F16\u53F7\u53EF\u6620\u5C04\u5230\u7269\u6D41\u6587\u4EF6\u504F\u79FB\uFF0816K*N\uFF09,B+Tree\u6811\u53F6\u5B50\u8282\u70B9\u524D\u540E\u5F62\u6210\u53CC\u5411\u94FE\u8868\uFF0C\u6570\u636E\u6309\u4E3B\u952E\u805A\u7C07\uFF0C\u4E8C\u7EA7\u7D22\u5F15\u53F6\u8282\u70B9\u5B58\u50A8\u4E3B\u952E\u503C\uFF0C\u901A\u8FC7\u53F6\u8282\u70B9\u4E3B\u952E\u503C<strong>\u56DE\u8868\u67E5\u627E\u6570\u636E</strong></p><h2 id="_4-innodb-\u7D22\u5F15\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_4-innodb-\u7D22\u5F15\u539F\u7406" aria-hidden="true">#</a> 4. InnoDB \u7D22\u5F15\u539F\u7406</h2><h3 id="_4-1-innodb-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-1-innodb-\u7279\u70B9" aria-hidden="true">#</a> 4.1 InnoDB \u7279\u70B9</h3><ul><li><p><strong>\u91C7\u7528\u805A\u7C07\u7D22\u5F15</strong></p></li><li><p><strong>InnoDB \u6570\u636E&amp;\u7D22\u5F15\u6587\u4EF6\u4E3Aidb\u6587\u4EF6\uFF0C</strong></p></li><li><p><strong>\u8868\u6570\u636E\u6587\u4EF6\u672C\u8EAB\u5C31\u662F\u5C31\u662F\u4E3B\u7D22\u5F15</strong></p></li><li><p><strong>\u76F8\u90BB\u7684\u7D22\u5F15\u4E34\u8FD1\u5B58\u50A8\u3002</strong></p></li><li><p><strong>\u53F6\u8282\u70B9data\u57DF\u4FDD\u5B58\u4E86\u5B8C\u6574\u7684\u6570\u636E\u8BB0\u5F55\uFF08\u6570\u636E[\u9664\u4E86\u4E3B\u952Eid\u5916\u5176\u4ED6data]+\u4E3B\u7D22\u5F15\uFF09</strong></p></li><li><p><strong>\u53F6\u5B50\u8282\u70B9\u76F4\u63A5\u5B58\u50A8\u6570\u636E\u8BB0\u5F55\uFF0C\u4EE5\u4E3B\u952Eid\u4E3Akey\uFF0C\u53F6\u5B50\u8282\u70B9\u76F4\u63A5\u5B58\u50A8\u6570\u636E\u8BB0\u5F55</strong></p></li></ul><h3 id="_4-2-\u5E95\u5C42\u5B58\u50A8\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_4-2-\u5E95\u5C42\u5B58\u50A8\u7ED3\u6784" aria-hidden="true">#</a> 4.2 \u5E95\u5C42\u5B58\u50A8\u7ED3\u6784</h3><ul><li>frm: \u8868\u5B9A\u4E49</li><li>idb: innoDB\u6570\u636E&amp;\u7D22\u5F15\u6587\u4EF6</li></ul><h3 id="_4-3-\u4E3A\u4EC0\u4E48innodb-\u4E00\u5B9A\u8981\u6709\u4E3B\u952E" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4E3A\u4EC0\u4E48innodb-\u4E00\u5B9A\u8981\u6709\u4E3B\u952E" aria-hidden="true">#</a> 4.3 \u4E3A\u4EC0\u4E48InnoDB \u4E00\u5B9A\u8981\u6709\u4E3B\u952E</h3><p>**\u7531\u4E8EInnoDB \u91C7\u7528\u805A\u7C07\u7D22\u5F15\u7ED3\u6784\u5B58\u50A8\uFF0C\u7D22\u5F15InnoDB \u7684\u6570\u636E\u6587\u4EF6\u9700\u8981\u6309\u7167\u4E3B\u952E\u805A\u96C6\u3002**\u56E0\u6B64InnoDB \u8981\u6C42\u8868\u5FC5\u987B\u6709\u4E3B\u952E\uFF08MyISAM\u53EF\u4EE5\u6CA1\u6709\uFF09\u3002</p><p>\u5982\u679C\u6CA1\u6709\u6307\u5B9Amysql\u4F1A<strong>\u81EA\u52A8\u9009\u62E9\u4E00\u4E2A\u53EF\u4EE5\u552F\u4E00\u6807\u8BC6\u6570\u636E\u8BB0\u5F55\u7684\u5217\u4F5C\u4E3A\u4E3B\u952E</strong>\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u8FD9\u6837\u7684\u5217\uFF0Cmysql\u81EA\u52A8\u4E3AinnoDB\u8868<strong>\u751F\u6210\u4E00\u4E2A\u9690\u542B\u5B57\u6BB5\uFF086\u4E2A\u5B57\u8282\u957F\u6574\u578B\uFF09\u4F5C\u4E3A\u4E3B\u952E</strong>\u3002innoDB\u6240\u6709\u8F85\u52A9\u7D22\u5F15\u90FD\u5F15\u7528\u6570\u636E\u8BB0\u5F55\u7684\u4E3B\u952E \u4F5C\u4E3Adata \u57DF</p><h3 id="_4-4-\u8F85\u52A9\u7D22\u5F15\u9700\u8981\u68C0\u7D22\u4E24\u904D" tabindex="-1"><a class="header-anchor" href="#_4-4-\u8F85\u52A9\u7D22\u5F15\u9700\u8981\u68C0\u7D22\u4E24\u904D" aria-hidden="true">#</a> 4.4 \u8F85\u52A9\u7D22\u5F15\u9700\u8981\u68C0\u7D22\u4E24\u904D</h3><p>\u805A\u7C07\u7D22\u5F15\u8FD9\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4F7F\u5F97\u4E3B\u952E\u7684\u641C\u7D22\u5341\u5206\u9AD8\u6548\uFF0C\u4F46\u662F<strong>\u8F85\u52A9\u7D22\u5F15\u641C\u7D22\u9700\u8981\u68C0\u7D22\u4E24\u904D\u7D22\u5F15</strong></p><ol><li><p>\u9996\u5148\u68C0\u7D22\u8F85\u52A9\u7D22\u5F15\u83B7\u5F97\u6570\u636E\u8BB0\u5F55\u4E3B\u952E</p></li><li><p>\u7136\u540E\u7528\u4E3B\u952E\u5230\u4E3B\u7D22\u5F15\u4E2D\u68C0\u7D22\u83B7\u5F97\u6570\u636E\u8BB0\u5F55</p></li></ol><h3 id="_4-5-\u805A\u7C07\u7D22\u5F15\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_4-5-\u805A\u7C07\u7D22\u5F15\u7ED3\u6784" aria-hidden="true">#</a> 4.5 \u805A\u7C07\u7D22\u5F15\u7ED3\u6784</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190906235927601.png" alt="image-20190906235927601"></p><h3 id="_4-6-\u7D22\u5F15\u7684\u67E5\u627E\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-6-\u7D22\u5F15\u7684\u67E5\u627E\u6D41\u7A0B" aria-hidden="true">#</a> 4.6 \u7D22\u5F15\u7684\u67E5\u627E\u6D41\u7A0B</h3><h4 id="_2-6-1-\u7D22\u5F15\u7CBE\u786E\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_2-6-1-\u7D22\u5F15\u7CBE\u786E\u67E5\u627E" aria-hidden="true">#</a> 2.6.1 \u7D22\u5F15\u7CBE\u786E\u67E5\u627E\uFF1A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select * from user_info where id = 23
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u786E\u5B9A\u5B9A\u4F4D\u6761\u4EF6\uFF0C\u627E\u5230\u6839\u8282\u70B9\u7684PageNo</li><li>\u6839\u8282\u70B9\u8BFB\u5230\u5185\u5B58</li><li>\u9010\u5C42\u5411\u4E0B\u67E5\u627E</li><li>\u8BFB\u53D6\u53F6\u5B50\u8282\u70B9\u7684Page</li><li><strong>\u901A\u8FC7\u4E8C\u5206\u67E5\u627E\u627E\u5230\u8BB0\u5F55\u6216\u672A\u547D\u4E2D</strong>\u3002</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002116080.png" alt="image-20190907002116080"></p><h4 id="_2-6-2-\u7D22\u5F15\u8303\u56F4\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_2-6-2-\u7D22\u5F15\u8303\u56F4\u67E5\u627E" aria-hidden="true">#</a> 2.6.2 \u7D22\u5F15\u8303\u56F4\u67E5\u627E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select * from user_info where id &gt;= 18 and id &lt; 22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u8BFB\u53D6\u6839\u8282\u70B9\u81F3\u5185\u5B58</li><li>\u786E\u5B9A\u7D22\u5F15\u5B9A\u4F4D\u6761\u4EF6 id=18</li><li>\u627E\u5230\u6EE1\u8DB3\u6761\u4EF6\u7B2C\u4E00\u4E2A\u53F6\u5B50\u8282\u70B9\uFF0C</li><li>\u987A\u5E8F\u626B\u63CF\u6240\u6709\u7ED3\u679C\uFF0C\u76F4\u5230\u7EC8\u6B62\u6761\u4EF6\u6EE1\u8DB3id&gt;=22</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002422372.png" alt="image-20190907002422372"></p><h4 id="_2-6-3-\u5168\u8868\u626B\u63CF" tabindex="-1"><a class="header-anchor" href="#_2-6-3-\u5168\u8868\u626B\u63CF" aria-hidden="true">#</a> 2.6.3 \u5168\u8868\u626B\u63CF</h4><p>select * from user_info where name = &#39;abc&#39;</p><ol><li>\u76F4\u63A5\u8BFB\u53D6\u53F6\u5B50\u8282\u70B9\u5934\u7ED3\u70B9</li><li>\u987A\u5E8F\u626B\u63CF</li><li>\u8FD4\u56DE\u7B26\u5408\u6761\u4EF6\u8BB0\u5F55\uFF0C\u5230\u6700\u7EC8\u8282\u70B9\u7ED3\u675F</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002631318.png" alt="image-20190907002631318"></p><h4 id="_2-6-4-\u4E8C\u7EA7\u7D22\u5F15\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#_2-6-4-\u4E8C\u7EA7\u7D22\u5F15\u67E5\u627E" aria-hidden="true">#</a> 2.6.4 \u4E8C\u7EA7\u7D22\u5F15\u67E5\u627E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Create table table_x(int id primary key, varchar(64) name,key sec_index(name) )

\u2022 Select * from table_x where name = \u201Cd\u201D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u901A\u8FC7\u4E8C\u7EA7\u7D22\u5F15\u67E5\u51FA\u4E3B\u952E</li><li>\u62FF\u4E3B\u952E\u56DE\u8868\u67E5\u4E3B\u952E\u7D22\u5F15\u5F97\u5230\u6570\u636E</li><li>\u4E8C\u7EA7\u7D22\u5F15\u53EF\u7B5B\u9009\u6389\u5927\u91CF\u65E0\u6548\u8BB0\u5F55\uFF0C\u63D0\u9AD8\u6548\u7387</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190907002924866.png" alt="image-20190907002924866"></p>`,59),s=[r];function d(t,o){return e(),a("div",null,s)}var p=i(n,[["render",d],["__file","\u7D22\u5F15\u5B9E\u73B0.html.vue"]]);export{p as default};
