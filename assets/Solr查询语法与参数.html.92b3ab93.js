import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as h,a as t,b as a,e,d,r as o}from"./app.e5cb29cd.js";const c={},i=e('<h1 id="solr\u67E5\u8BE2\u8BED\u6CD5\u4E0E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#solr\u67E5\u8BE2\u8BED\u6CD5\u4E0E\u53C2\u6570" aria-hidden="true">#</a> Solr\u67E5\u8BE2\u8BED\u6CD5\u4E0E\u53C2\u6570</h1><h2 id="_1-solr-\u67E5\u8BE2\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#_1-solr-\u67E5\u8BE2\u754C\u9762" aria-hidden="true">#</a> 1. Solr \u67E5\u8BE2\u754C\u9762</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210304140431497.png" alt="image-20210304140431497" loading="lazy"></p><h2 id="_2-\u57FA\u672C\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u672C\u67E5\u8BE2" aria-hidden="true">#</a> 2. \u57FA\u672C\u67E5\u8BE2</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u4F5C\u7528</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>q</td><td>\u67E5\u8BE2\u7684\u5173\u952E\u5B57\uFF08\u6700\u4E3A\u91CD\u8981\uFF09</td><td><code>q=id:1</code>,\u9ED8\u8BA4\u4E3A<code>q=*:*</code></td></tr><tr><td>fl</td><td>\u6307\u5B9A\u8FD4\u56DE\u54EA\u4E9B\u5B57\u6BB5\uFF0C\u7528\u9017\u53F7\u6216\u7A7A\u683C\u5206\u9694\uFF0C\u6CE8\u610F\uFF1A\u5B57\u6BB5\u533A\u5206\u5927\u5C0F\u5199\u3002<br><strong>\u5982\u679C\u60F3\u77E5\u9053\u5177\u4F53\u7684\u8BC4\u5206\u9700\u8981\u624B\u52A8\u52A0\u4E0Ascore</strong></td><td>fl=id,title,sort</td></tr><tr><td>start</td><td>\u8FD4\u56DE\u7ED3\u679C\u7684\u7B2C\u51E0\u6761\u8BB0\u5F55\u5F00\u59CB\uFF0C\u4E00\u822C\u5206\u9875\u7528\uFF0C\u9ED8\u8BA40\u5F00\u59CB</td><td></td></tr><tr><td>rows</td><td>\u6307\u5B9A\u8FD4\u56DE\u7ED3\u679C\u6700\u591A\u6709\u591A\u5C11\u6761\u8BB0\u5F55\uFF0C\u9ED8\u8BA4\u503C\u4E3A10\uFF0C\u914D\u5408start\u5B9E\u73B0\u5206\u9875</td><td></td></tr><tr><td>sort</td><td>\u6392\u5E8F\u65B9\u5F0F\uFF0C\u4F8B\u5982id desc \u8868\u793A\u6309\u7167id\u964D\u5E8F\uFF0C\u591A\u4E2A\u5B57\u6BB5\uFF1A score desc\uFF0Cprice asc</td><td></td></tr><tr><td>wt</td><td>\uFF08writer type\uFF09\u6307\u5B9A\u8F93\u51FA\u683C\u5F0F\uFF0C\u6709xml\uFF0Cjson\u7B49</td><td></td></tr><tr><td>fq\uFF08filter query\uFF09</td><td>\u8FC7\u6EE4\u67E5\u8BE2\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u53EF\u9009\u7684\u7B5B\u9009\u5668\u67E5\u8BE2\u3002\u8FD4\u56DE\u5728q\u67E5\u8BE2\u7B26\u5408\u7ED3\u679C\u4E2D\u540C\u65F6\u7B26\u5408\u7684fq\u6761\u4EF6\u7684\u67E5\u8BE2\u7ED3\u679C</td><td>q=id:1&amp;fq=sort:[1 TO 5]\uFF0C\u627E\u5173\u952E\u5B57id\u4E3A1 \u7684\uFF0C\u5E76\u4E14sort\u662F1\u52305\u4E4B\u95F4\u7684\u3002</td></tr><tr><td>df</td><td>\u9ED8\u8BA4\u7684\u67E5\u8BE2\u5B57\u6BB5\uFF0C\u4E00\u822C\u9ED8\u8BA4\u6307\u5B9A\uFF08\u4E0D\u592A\u77E5\u9053\u4F5C\u7528\uFF09</td><td></td></tr><tr><td>qt\uFF08query type\uFF09</td><td>\u6307\u5B9A\u54EA\u4E2A\u7C7B\u578B\u6765\u5904\u7406\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u4E00\u822C\u4E0D\u7528\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u662Fstandard\u3002\uFF08\u5B58\u7591\uFF09</td><td></td></tr><tr><td>indent</td><td>\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u5426\u7F29\u8FDB\uFF0C\u9ED8\u8BA4\u5173\u95ED\u3002 \u7528indent=true|on \u5F00\u542F\uFF0C\u4E00\u822C\u8C03\u8BD5json,php,phps,ruby\u8F93\u51FA\u624D\u6709\u5FC5\u8981\u7528\u8FD9\u4E2A\u53C2\u6570\u3002</td><td></td></tr><tr><td>version</td><td>\u67E5\u8BE2\u8BED\u6CD5\u7684\u7248\u672C\uFF0C\u5EFA\u8BAE\u4E0D\u4F7F\u7528\u5B83\uFF0C\u7531\u670D\u52A1\u5668\u6307\u5B9A\u9ED8\u8BA4\u503C</td><td></td></tr></tbody></table><h2 id="_3-solr-\u7684\u68C0\u7D22\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#_3-solr-\u7684\u68C0\u7D22\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> 3. Solr \u7684\u68C0\u7D22\u8FD0\u7B97\u7B26</h2>',6),s=t("table",{201507:"",TO:"",201510:""},[t("thead",null,[t("tr",null,[t("th",null,"\u8FD0\u7B97\u7B26"),t("th",null,"\u4F5C\u7528")])]),t("tbody",null,[t("tr",null,[t("td",null,"\uFF1A"),t("td",null,[d("\u6307\u5B9A\u5B57\u6BB5\u67E5\u6307\u5B9A\u503C\uFF0C\u5982\u8FD4\u56DE\u6240\u6709\u503C"),t("code",null,"*\uFF1A*")])]),t("tr",null,[t("td",null,"?"),t("td",null,"\u8868\u793A\u5355\u4E2A\u4EFB\u610F\u5B57\u7B26\u7684\u901A\u914D")]),t("tr",null,[t("td",null,"*"),t("td",null,"\u8868\u793A\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26\u7684\u901A\u914D\uFF08\u4E0D\u80FD\u518D\u641C\u7D22\u9879\u5F00\u59CB\u4F7F\u7528* \u6216\u8005\uFF1F\u7B26\u53F7\uFF09")]),t("tr",null,[t("td",null,"~"),t("td",null,[d("\u8868\u793A\u6A21\u7CCA\u68C0\u7D22\uFF0C\u5982\u68C0\u7D22\u62FC\u5199\u7C7B\u4F3C\u4E8E\u201Droam\u201D\u7684\u9879\u8FD9\u6837\u5199\uFF1Aroam"),t("sub",null,"\u5C06\u627E\u5230\u5F62\u5982foam\u548Croams\u7684\u5355\u8BCD\uFF1Broam"),d("0.8\uFF0C\u68C0\u7D22\u8FD4\u56DE\u76F8\u4F3C\u5EA6\u57280.8\u4EE5\u4E0A\u7684\u8BB0\u5F55\u3002")])]),t("tr",null,[t("td",null,"AND\u3001||\u3001OR\u3001&&"),t("td",null,"\u5E03\u5C14\u64CD\u4F5C\u7B26")]),t("tr",null,[t("td",null,"NOT\u3001!\u3001-"),t("td",null,"\u6392\u9664\u64CD\u4F5C\u7B26\u4E0D\u80FD\u5355\u72EC\u4E0E\u9879\u4F7F\u7528\u6784\u6210\u67E5\u8BE2")]),t("tr",null,[t("td",null,"+"),t("td",null,"\u5B58\u5728\u64CD\u4F5C\u7B26\uFF0C\u8981\u6C42\u7B26\u53F7\u201C+\u201D\u540E\u7684\u9879\u5FC5\u987B\u5728\u6587\u6863\u76F8\u5E94\u7684\u57DF\u4E2D\u5B58\u5728")]),t("tr",null,[t("td",null,"\uFF08\uFF09"),t("td",null,"\u7528\u4E8E\u6784\u6210\u5B50\u67E5\u8BE2")]),t("tr",null,[t("td",null,"[]"),t("td",null,"\u5305\u542B\u8303\u56F4\u68C0\u7D22\u3001\u5982\u68C0\u7D22\u67D0\u65F6\u95F4\u6BB5\u8BB0\u5F55\uFF0C\u5305\u542B\u5934\u5C3E\uFF0Cdate:[201507 TO 201510]")]),t("tr",null,[t("td",null,"{}"),t("td",null,"\u4E0D\u5305\u542B\u8303\u56F4\u68C0\u7D22\uFF0C\u5982\u68C0\u7D22\u67D0\u65F6\u95F4\u6BB5\u8BB0\u5F55\uFF0C\u4E0D\u5305\u542B\u5934\u5C3Edate:")])])],-1),u=e('<h2 id="_4-\u9AD8\u4EAE" tabindex="-1"><a class="header-anchor" href="#_4-\u9AD8\u4EAE" aria-hidden="true">#</a> 4. \u9AD8\u4EAE</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>hl</td><td>\u662F\u5426\u9AD8\u4EAE\uFF0Chl=true,\u8868\u793A\u91C7\u7528\u9AD8\u4EAE</td></tr><tr><td>hl.fl</td><td>\u8BBE\u5B9A\u9AD8\u4EAE\u663E\u793A\u7684\u5B57\u6BB5\uFF0C\u7528\u7A7A\u683C\u6216\u9017\u53F7\u9694\u5F00\u7684\u5B57\u6BB5\u5217\u8868\u3002\u8981\u542F\u7528\u67D0\u4E2A\u5B57\u6BB5\u7684highlight\u529F\u80FD\uFF0C\u5C31\u5F97\u4FDD\u8BC1\u8BE5\u5B57\u6BB5\u5728schema\u4E2D\u662Fstored\u3002\u5982\u679C\u8BE5\u53C2\u6570\u672A\u88AB\u7ED9\u51FA\uFF0C\u90A3\u4E48\u5C31\u4F1A\u9AD8\u4EAE\u9ED8\u8BA4\u5B57\u6BB5 standard handler\u4F1A\u7528df\u53C2\u6570\uFF0Cdismax\u5B57\u6BB5\u7528qf\u53C2\u6570\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528\u661F\u53F7\u53BB\u65B9\u4FBF\u7684\u9AD8\u4EAE\u6240\u6709\u5B57\u6BB5\u3002\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u901A\u914D\u7B26\uFF0C\u90A3\u4E48\u8981\u8003\u8651\u542F\u7528hl.requiredFieldMatch\u9009\u9879\u3002</td></tr><tr><td>hl.requireFieldMatch</td><td>\u5982\u679C\u7F6E\u4E3Atrue\uFF0C\u9664\u975E\u7528hl.fl \u6307\u5B9A\u4E86\u8BE5\u5B57\u6BB5\uFF0C\u67E5\u8BE2\u7ED3\u679C\u624D\u4F1A\u88AB\u9AD8\u4EAE\u3002\u4ED6\u7684\u9ED8\u8BA4\u503C\u662Ffalse</td></tr><tr><td>hl.usePhraseHighlighter</td><td>\u5982\u679C\u4E00\u4E2A\u67E5\u8BE2\u4E2D\u542B\u6709\u77ED\u8BED\uFF08\u5F15\u53F7\u6846\u8D77\u6765\u7684\uFF09\u90A3\u4E48\u4F1A\u4FDD\u8BC1\u4E00\u5B9A\u8981\u5B8C\u5168\u5339\u914D\u77ED\u8BED\u7684\u624D\u4F1A\u88AB\u9AD8\u4EAE\u3002</td></tr><tr><td>hl.highlightMultiTerm</td><td>\u5982\u679C\u4F7F\u7528\u901A\u914D\u7B26\u548C\u6A21\u7CCA\u641C\u7D22\uFF0C\u90A3\u4E48\u4F1A\u786E\u4FDD\u4E0E\u901A\u914D\u7B26\u5339\u914D\u7684term\u4F1A\u9AD8\u4EAE\u3002\u9ED8\u8BA4\u4E3Afalse\uFF0C\u540C\u65F6hl.usePhraseHighlighter\u8981\u4E3Atrue\u3002</td></tr><tr><td>hl.fragsize</td><td>\u8FD4\u56DE\u7684\u6700\u5927\u5B57\u7B26\u6570\u3002\u9ED8\u8BA4\u662F100.\u5982\u679C\u4E3A0\uFF0C\u90A3\u4E48\u8BE5\u5B57\u6BB5\u4E0D\u4F1A\u88ABfragmented\u4E14\u6574\u4E2A\u5B57\u6BB5\u7684\u503C\u4F1A\u88AB\u8FD4\u56DE\u3002</td></tr></tbody></table><h2 id="_5-\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#_5-\u5206\u7EC4" aria-hidden="true">#</a> 5. \u5206\u7EC4</h2>',3),f={href:"http://wiki.apache.org/solr/SimpleFacetParameters#Facet_Fields_and_Facet_Queries",target:"_blank",rel:"noopener noreferrer"},_=d("facet\u7684\u5B98\u65B9wiki"),p=e('<p>Facet\u662FSolr\u7684\u6838\u5FC3\u641C\u7D22\u529F\u80FD\uFF0C\u4E3B\u8981\u662F\u5BFC\u822A(Guided Navigation)\u3001\u53C2\u6570\u5316\u67E5\u8BE2(Paramatic Search)\u3002Facet\u7684\u4E3B\u8981\u597D\u5904\u662F\u5728\u641C\u7D22\u7684\u540C\u65F6\uFF0C\u53EF\u4EE5\u6309\u7167Facet\u6761\u4EF6\u8FDB\u884C\u5206\u7EC4\u7EDF\u8BA1\uFF0C\u7ED9\u51FA\u5BFC\u822A\u4FE1\u606F\uFF0C\u6539\u5584\u641C\u7D22\u4F53\u9A8C\u3002</p><p>Facet\u4E3B\u8981\u5206\u4E3A\uFF1AField Facet \u548C Date Facet \u4E24\u5927\u7C7B</p><h3 id="_5-1-field-facet" tabindex="-1"><a class="header-anchor" href="#_5-1-field-facet" aria-hidden="true">#</a> 5.1 field Facet</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>facet</td><td>facet\u53C2\u6570\u5B57\u6BB5\u5FC5\u987B\u88AB\u7D22\u5F15\uFF0Cfacet=on \u6216 facet=true</td></tr><tr><td>facet.field</td><td>\u5206\u7EC4\u7684\u5B57\u6BB5</td></tr><tr><td>facet.prefix</td><td>\u8868\u793AFacet\u5B57\u6BB5\u524D\u7F00</td></tr><tr><td>facet.limit</td><td>Facet\u5B57\u6BB5\u8FD4\u56DE\u6761\u6570</td></tr><tr><td>facet.offict</td><td>\u5F00\u59CB\u6761\u6570,\u504F\u79FB\u91CF,\u5B83\u4E0Efacet.limit\u914D\u5408\u4F7F\u7528\u53EF\u4EE5\u8FBE\u5230\u5206\u9875\u7684\u6548\u679C</td></tr><tr><td>facet.mincount</td><td>Facet\u5B57\u6BB5\u6700\u5C0Fcount,\u9ED8\u8BA4\u4E3A0</td></tr><tr><td>facet.missing</td><td>\u5982\u679C\u4E3Aon\u6216true,\u90A3\u4E48\u5C06\u7EDF\u8BA1\u90A3\u4E9BFacet\u5B57\u6BB5\u503C\u4E3Anull\u7684\u8BB0\u5F55</td></tr><tr><td>facet.sort</td><td>\u8868\u793A Facet \u5B57\u6BB5\u503C\u4EE5\u54EA\u79CD\u987A\u5E8F\u8FD4\u56DE .\u683C\u5F0F\u4E3A true(count)</td></tr></tbody></table><h3 id="_5-2-date-facet" tabindex="-1"><a class="header-anchor" href="#_5-2-date-facet" aria-hidden="true">#</a> 5.2 Date Facet</h3><p>\u5BF9\u65E5\u671F\u7C7B\u578B\u7684\u5B57\u6BB5\u8FDB\u884C Facet. Solr \u4E3A\u65E5\u671F\u5B57\u6BB5\u63D0\u4F9B\u4E86\u66F4\u4E3A\u65B9\u4FBF\u7684\u67E5\u8BE2\u7EDF\u8BA1\u65B9\u5F0F .\u6CE8\u610F , Date Facet\u7684\u5B57\u6BB5\u7C7B\u578B\u5FC5\u987B\u662F DateField( \u6216\u5176\u5B50\u7C7B\u578B ). \u9700\u8981\u6CE8\u610F\u7684\u662F , \u4F7F\u7528 Date Facet \u65F6 , \u5B57\u6BB5\u540D , \u8D77\u59CB\u65F6\u95F4 , \u7ED3\u675F\u65F6\u95F4 , \u65F6\u95F4\u95F4\u9694\u8FD9 4 \u4E2A\u53C2\u6570\u90FD\u5FC5\u987B\u63D0\u4F9B .</p><table><thead><tr><th>facet.date</th><th>\u8BE5\u53C2\u6570\u8868\u793A\u9700\u8981\u8FDB\u884C Date Facet \u7684\u5B57\u6BB5\u540D , \u4E0E facet.field \u4E00\u6837 , \u8BE5\u53C2\u6570\u53EF\u4EE5\u88AB\u8BBE\u7F6E\u591A\u6B21 , \u8868\u793A\u5BF9\u591A\u4E2A\u5B57\u6BB5\u8FDB\u884C Date Facet.</th></tr></thead><tbody><tr><td>facet.date.start</td><td>\u8D77\u59CB\u65F6\u95F4 , \u65F6\u95F4\u7684\u4E00\u822C\u683C\u5F0F\u4E3A \u201D 2015-12-31T23:59:59Z\u201D, \u53E6\u5916\u53EF\u4EE5\u4F7F\u7528 \u201DNOW\u201D,\u201DYEAR\u201D,\u201DMONTH\u201D \u7B49\u7B49 ,</td></tr><tr><td>facet.date.end</td><td>\u7ED3\u675F\u65F6\u95F4</td></tr><tr><td>facet.date.gap</td><td>\u65F6\u95F4\u95F4\u9694,\u5982\u679C start \u4E3A 2015-1-1,end \u4E3A 2016-1-1\uFF0Cgap \u8BBE\u7F6E\u4E3A \u201D+1MONTH\u201D \u8868\u793A\u95F4\u96941 \u4E2A\u6708 , \u90A3\u4E48\u5C06\u4F1A\u628A\u8FD9\u6BB5\u65F6\u95F4\u5212\u5206\u4E3A 12 \u4E2A\u95F4\u9694\u6BB5 .</td></tr><tr><td>facet.date.hardend</td><td>\u8868\u793A gap \u8FED\u4EE3\u5230 end \u65F6\uFF0C\u8FD8\u5269\u4F59\u7684\u4E00\u90E8\u5206\u65F6\u95F4\u6BB5\uFF0C\u662F\u5426\u7EE7\u7EED\u53BB\u4E0B\u4E00\u4E2A\u95F4\u9694. \u53D6\u503C\u53EF\u4EE5\u4E3A true</td></tr></tbody></table><p>\u6CE8\u610F\uFF1AFacet\u7684\u5B57\u6BB5\u5FC5\u987B\u88AB\u7D22\u5F15\uFF0C\u65E0\u9700\u5206\u8BCD\uFF0C\u65E0\u9700\u5B58\u50A8\u3002\u65E0\u9700\u5206\u8BCD\u662F\u56E0\u4E3A\u8BE5\u5B57\u6BB5\u7684\u503C\u4EE3\u8868\u4E86\u4E00\u4E2A\u6574\u4F53\u6982\u5FF5\uFF0C\u65E0\u9700\u5B58\u50A8\u662F\u56E0\u4E3A\u4E00\u822C\u800C\u8A00\u7528\u6237\u6240\u5173\u5FC3\u7684\u5E76\u4E0D\u662F\u8BE5\u5B57\u6BB5\u7684\u5177\u4F53\u503C\uFF0C\u800C\u662F\u4F5C\u4E3A\u5BF9\u67E5\u8BE2\u7ED3\u679C\u8FDB\u884C\u5206\u7EC4\u7684\u4E00\u79CD\u624B\u6BB5\uFF0C\u7ED9\u51FA\u76F8\u5173\u7684\u5206\u7EC4\u4FE1\u606F\uFF0C\u4ECE\u800C\u6539\u5584\u641C\u7D22\u4F53\u9A8C\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',9),b={href:"https://www.cnblogs.com/shaosks/p/8042867.html",target:"_blank",rel:"noopener noreferrer"},m=d("Solr \u67E5\u8BE2\u8BED\u6CD5/\u53C2\u6570");function g(F,x){const r=o("ExternalLinkIcon");return n(),h("div",null,[i,s,u,t("p",null,[t("a",f,[_,a(r)])]),p,t("p",null,[t("a",b,[m,a(r)])])])}var S=l(c,[["render",g],["__file","Solr\u67E5\u8BE2\u8BED\u6CD5\u4E0E\u53C2\u6570.html.vue"]]);export{S as default};
